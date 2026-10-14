import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';
import {
  loadInitialProgress,
  setToDB,
  resetAllData,
  exportProgressData,
  importProgressData
} from '../services/storage';
import { ROADMAP_DAYS, WEEKS_DATA } from '../data/roadmapData';
import confetti from 'canvas-confetti';

const ProgressContext = createContext(null);

export function ProgressProvider({ children }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [completedDays, setCompletedDays] = useState([]);
  const [completedTasks, setCompletedTasks] = useState({});
  const [dayNotes, setDayNotes] = useState({});
  const [activeDay, setActiveDayState] = useState(1);
  const [settings, setSettings] = useState({ theme: 'dark' });

  // Load from IndexedDB on startup
  useEffect(() => {
    let isMounted = true;
    loadInitialProgress().then((data) => {
      if (!isMounted) return;
      setCompletedDays(data.completedDays);
      setCompletedTasks(data.completedTasks);
      setDayNotes(data.dayNotes);
      setActiveDayState(data.activeDay || 1);
      setSettings(data.settings);
      setIsLoaded(true);
    }).catch((err) => {
      console.error('Error initializing progress from IndexedDB:', err);
      if (isMounted) setIsLoaded(true);
    });

    return () => {
      isMounted = false;
    };
  }, []);

  // Set active day with persistence
  const setActiveDay = useCallback((dayNumber) => {
    const validDay = Math.max(1, Math.min(60, Number(dayNumber) || 1));
    setActiveDayState(validDay);
    setToDB('activeDay', validDay);
  }, []);

  // Toggle individual task checkbox
  const toggleTask = useCallback((taskId) => {
    setCompletedTasks((prev) => {
      const next = { ...prev };
      if (next[taskId]) {
        delete next[taskId];
      } else {
        next[taskId] = true;
      }
      setToDB('completedTasks', next);
      return next;
    });
  }, []);

  // Check if a week just got completed to trigger celebration
  const checkWeekCompletion = useCallback((dayId, updatedDays) => {
    const dayObj = ROADMAP_DAYS.find(d => d.day === dayId);
    if (!dayObj) return;

    const weekDays = ROADMAP_DAYS.filter(d => d.week === dayObj.week);
    const isWeekComplete = weekDays.every(d => updatedDays.includes(d.day));

    if (isWeekComplete) {
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (e) {
        // Confetti fallback
      }
    }
  }, []);

  // Toggle day completion status
  const toggleDayComplete = useCallback((dayId) => {
    setCompletedDays((prev) => {
      const isAlreadyComplete = prev.includes(dayId);
      let next;
      if (isAlreadyComplete) {
        next = prev.filter(d => d !== dayId);
      } else {
        next = [...prev, dayId].sort((a, b) => a - b);
        checkWeekCompletion(dayId, next);
      }
      setToDB('completedDays', next);
      return next;
    });
  }, [checkWeekCompletion]);

  // Mark all tasks of a day complete / incomplete
  const markDayTasksComplete = useCallback((dayId, markComplete = true) => {
    const dayObj = ROADMAP_DAYS.find(d => d.day === dayId);
    if (!dayObj) return;

    setCompletedTasks((prev) => {
      const next = { ...prev };
      // Learning checklist
      dayObj.learningChecklist.forEach((_, idx) => {
        const id = `day-${dayId}-learn-${idx}`;
        if (markComplete) next[id] = true; else delete next[id];
      });
      // Practice task
      const pId = `day-${dayId}-practice`;
      if (markComplete) next[pId] = true; else delete next[pId];
      // Mini build
      if (dayObj.miniBuild) {
        const bId = `day-${dayId}-build`;
        if (markComplete) next[bId] = true; else delete next[bId];
      }
      // Interview prep
      dayObj.interviewPrep.forEach((_, idx) => {
        const ipId = `day-${dayId}-interview-${idx}`;
        if (markComplete) next[ipId] = true; else delete next[ipId];
      });

      setToDB('completedTasks', next);
      return next;
    });
  }, []);

  // Save personal note for a day
  const saveDayNote = useCallback((dayId, noteText) => {
    setDayNotes((prev) => {
      const next = { ...prev, [dayId]: noteText };
      setToDB('dayNotes', next);
      return next;
    });
  }, []);

  // Reset all progress
  const resetProgress = useCallback(async () => {
    await resetAllData();
    setCompletedDays([]);
    setCompletedTasks({});
    setDayNotes({});
    setActiveDayState(1);
    setSettings({ theme: 'dark' });
  }, []);

  // Export progress
  const exportProgress = useCallback(async () => {
    return await exportProgressData();
  }, []);

  // Import progress
  const importProgress = useCallback(async (payload) => {
    const imported = await importProgressData(payload);
    setCompletedDays(imported.completedDays);
    setCompletedTasks(imported.completedTasks);
    setDayNotes(imported.dayNotes);
    setActiveDayState(imported.activeDay);
    setSettings(imported.settings);
  }, []);

  // Computed: First uncompleted day (or current active day)
  const nextIncompleteDay = useMemo(() => {
    for (let i = 1; i <= 60; i++) {
      if (!completedDays.includes(i)) {
        return i;
      }
    }
    return 60;
  }, [completedDays]);

  // Overall progress stats
  const stats = useMemo(() => {
    const completedDaysCount = completedDays.length;
    const totalDays = 60;
    const overallPercentage = Math.round((completedDaysCount / totalDays) * 100);
    const remainingDays = totalDays - completedDaysCount;

    // Find current week based on next incomplete day
    const nextDayObj = ROADMAP_DAYS.find(d => d.day === nextIncompleteDay);
    const currentWeekNumber = nextDayObj ? nextDayObj.week : 1;

    return {
      completedDaysCount,
      totalDays,
      overallPercentage,
      remainingDays,
      currentWeekNumber: currentWeekNumber === 9 ? 'Final 4 Days' : `Week ${currentWeekNumber}`,
      nextIncompleteDay
    };
  }, [completedDays, nextIncompleteDay]);

  // Helper: check if day is complete
  const isDayCompleted = useCallback((dayId) => {
    return completedDays.includes(dayId);
  }, [completedDays]);

  // Helper: check if task is complete
  const isTaskCompleted = useCallback((taskId) => {
    return !!completedTasks[taskId];
  }, [completedTasks]);

  // Helper: calculate tasks progress for a day
  const getDayTaskStats = useCallback((dayId) => {
    const dayObj = ROADMAP_DAYS.find(d => d.day === dayId);
    if (!dayObj) return { total: 0, completed: 0, percentage: 0 };

    let total = dayObj.learningChecklist.length + 1; // checklist + practice
    if (dayObj.miniBuild) total += 1;
    total += dayObj.interviewPrep.length;

    let completed = 0;
    dayObj.learningChecklist.forEach((_, idx) => {
      if (completedTasks[`day-${dayId}-learn-${idx}`]) completed++;
    });
    if (completedTasks[`day-${dayId}-practice`]) completed++;
    if (dayObj.miniBuild && completedTasks[`day-${dayId}-build`]) completed++;
    dayObj.interviewPrep.forEach((_, idx) => {
      if (completedTasks[`day-${dayId}-interview-${idx}`]) completed++;
    });

    const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
    return { total, completed, percentage };
  }, [completedTasks]);

  // Helper: calculate week progress
  const getWeekProgress = useCallback((weekNumber) => {
    const weekDays = ROADMAP_DAYS.filter(d => d.week === weekNumber);
    const totalDays = weekDays.length;
    const completedInWeek = weekDays.filter(d => completedDays.includes(d.day)).length;
    const percentage = totalDays > 0 ? Math.round((completedInWeek / totalDays) * 100) : 0;
    const isComplete = completedInWeek === totalDays && totalDays > 0;

    return {
      totalDays,
      completedDays: completedInWeek,
      percentage,
      isComplete,
      weekDays
    };
  }, [completedDays]);

  const value = {
    isLoaded,
    completedDays,
    completedTasks,
    dayNotes,
    activeDay,
    settings,
    stats,
    setActiveDay,
    toggleTask,
    toggleDayComplete,
    markDayTasksComplete,
    saveDayNote,
    resetProgress,
    exportProgress,
    importProgress,
    isDayCompleted,
    isTaskCompleted,
    getDayTaskStats,
    getWeekProgress
  };

  return (
    <ProgressContext.Provider value={value}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
}
