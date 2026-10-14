import React, { useState } from 'react';
import {
  CheckCircle2,
  Circle,
  ChevronDown,
  ChevronUp,
  BookOpen,
  Code,
  Terminal,
  HelpCircle,
  Edit3,
  Award,
  CheckSquare
} from 'lucide-react';
import { useProgress } from '../../context/ProgressContext';

export default function DayCard({ dayData, defaultExpanded = false }) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  const {
    isDayCompleted,
    isTaskCompleted,
    toggleTask,
    toggleDayComplete,
    markDayTasksComplete,
    dayNotes,
    saveDayNote,
    getDayTaskStats
  } = useProgress();

  const isCompleted = isDayCompleted(dayData.day);
  const taskStats = getDayTaskStats(dayData.day);
  const currentNote = dayNotes[dayData.day] || '';

  return (
    <div
      id={`day-card-${dayData.day}`}
      className={`day-card ${isCompleted ? 'is-completed' : ''}`}
    >
      {/* Header Row */}
      <div className="day-card-header">
        <div style={{ flex: 1, cursor: 'pointer' }} onClick={() => setIsExpanded(!isExpanded)}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span className={`day-badge ${isCompleted ? 'completed' : ''}`}>
              Day {dayData.day}
            </span>
            {dayData.milestone && (
              <span
                style={{
                  fontSize: '0.68rem',
                  fontWeight: 700,
                  color: 'var(--amber-warning)',
                  background: 'rgba(245, 158, 11, 0.12)',
                  padding: '2px 8px',
                  borderRadius: 'var(--radius-full)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}
              >
                <Award size={12} />
                {dayData.milestone.title}
              </span>
            )}
            <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
              {taskStats.completed}/{taskStats.total} tasks
            </span>
          </div>

          <h3 className="day-topic">{dayData.topic}</h3>
          {!isExpanded && <p className="day-desc">{dayData.description}</p>}
        </div>

        {/* Quick Day Completion Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <button
            id={`toggle-day-btn-${dayData.day}`}
            onClick={(e) => {
              e.stopPropagation();
              toggleDayComplete(dayData.day);
            }}
            className={`custom-checkbox-btn ${isCompleted ? 'checked' : ''}`}
            title={isCompleted ? 'Mark Day Incomplete' : 'Mark Day Complete'}
            aria-label={`Mark Day ${dayData.day} Complete`}
          >
            {isCompleted ? (
              <CheckCircle2 size={24} color="var(--green-success)" />
            ) : (
              <Circle size={24} />
            )}
          </button>

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="custom-checkbox-btn"
            aria-label={isExpanded ? 'Collapse' : 'Expand'}
            style={{ padding: '6px' }}
          >
            {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>
        </div>
      </div>

      {/* Expanded Details Section */}
      {isExpanded && (
        <div className="day-details-expand">
          <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
            {dayData.description}
          </p>

          {/* Section 1: Learning Checklist */}
          <div>
            <div className="task-section-title">
              <BookOpen size={14} />
              <span>Today's Learning Checklist</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {dayData.learningChecklist.map((item, idx) => {
                const taskId = `day-${dayData.day}-learn-${idx}`;
                const checked = isTaskCompleted(taskId);

                return (
                  <div
                    key={taskId}
                    id={`task-item-${taskId}`}
                    className={`task-item ${checked ? 'checked' : ''}`}
                    onClick={() => toggleTask(taskId)}
                  >
                    <div style={{ marginTop: '2px', color: checked ? 'var(--green-success)' : 'var(--text-muted)' }}>
                      {checked ? <CheckCircle2 size={16} /> : <Circle size={16} />}
                    </div>
                    <span className="task-text">{item}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Section 2: Practice Task */}
          <div>
            <div className="task-section-title">
              <Code size={14} />
              <span>Hands-on Practice Task</span>
            </div>
            {(() => {
              const taskId = `day-${dayData.day}-practice`;
              const checked = isTaskCompleted(taskId);
              return (
                <div
                  id={`task-item-${taskId}`}
                  className={`task-item ${checked ? 'checked' : ''}`}
                  onClick={() => toggleTask(taskId)}
                >
                  <div style={{ marginTop: '2px', color: checked ? 'var(--green-success)' : 'var(--text-muted)' }}>
                    {checked ? <CheckCircle2 size={16} /> : <Circle size={16} />}
                  </div>
                  <span className="task-text">{dayData.practiceTask}</span>
                </div>
              );
            })()}
          </div>

          {/* Section 3: Mini Build (if available) */}
          {dayData.miniBuild && (
            <div>
              <div className="task-section-title">
                <Terminal size={14} />
                <span>Build / Mini Task</span>
              </div>
              {(() => {
                const taskId = `day-${dayData.day}-build`;
                const checked = isTaskCompleted(taskId);
                return (
                  <div
                    id={`task-item-${taskId}`}
                    className={`task-item ${checked ? 'checked' : ''}`}
                    onClick={() => toggleTask(taskId)}
                  >
                    <div style={{ marginTop: '2px', color: checked ? 'var(--green-success)' : 'var(--text-muted)' }}>
                      {checked ? <CheckCircle2 size={16} /> : <Circle size={16} />}
                    </div>
                    <span className="task-text">{dayData.miniBuild}</span>
                  </div>
                );
              })()}
            </div>
          )}

          {/* Section 4: Interview Preparation */}
          <div>
            <div className="task-section-title">
              <HelpCircle size={14} />
              <span>Interview Preparation Concepts</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {dayData.interviewPrep.map((item, idx) => {
                const taskId = `day-${dayData.day}-interview-${idx}`;
                const checked = isTaskCompleted(taskId);

                return (
                  <div
                    key={taskId}
                    id={`task-item-${taskId}`}
                    className={`task-item ${checked ? 'checked' : ''}`}
                    onClick={() => toggleTask(taskId)}
                  >
                    <div style={{ marginTop: '2px', color: checked ? 'var(--green-success)' : 'var(--text-muted)' }}>
                      {checked ? <CheckCircle2 size={16} /> : <Circle size={16} />}
                    </div>
                    <span className="task-text">{item}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Section 5: Personal Notes */}
          <div>
            <div className="task-section-title">
              <Edit3 size={14} />
              <span>My Notes</span>
            </div>
            <textarea
              id={`notes-day-${dayData.day}`}
              className="note-textarea"
              placeholder="Jot down notes, code snippets, takeaways, or references for Day..."
              value={currentNote}
              onChange={(e) => saveDayNote(dayData.day, e.target.value)}
              rows={3}
            />
          </div>

          {/* Action Row */}
          <div className="day-action-row">
            <button
              id={`check-all-tasks-day-${dayData.day}`}
              onClick={() => markDayTasksComplete(dayData.day, taskStats.completed < taskStats.total)}
              className="custom-checkbox-btn"
              style={{
                fontSize: '0.75rem',
                color: 'var(--cyan-primary)',
                gap: '6px',
                padding: '8px 12px',
                background: 'rgba(6, 182, 212, 0.08)',
                borderRadius: 'var(--radius-sm)'
              }}
            >
              <CheckSquare size={14} />
              <span>{taskStats.completed === taskStats.total ? 'Uncheck All Tasks' : 'Check All Tasks'}</span>
            </button>

            <button
              id={`complete-day-action-btn-${dayData.day}`}
              onClick={() => toggleDayComplete(dayData.day)}
              className={`btn-mark-day ${isCompleted ? 'completed' : ''}`}
            >
              <CheckCircle2 size={16} />
              <span>{isCompleted ? 'Day Completed ✓' : 'Mark Day Complete'}</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
