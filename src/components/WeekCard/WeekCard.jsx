import React, { useState } from 'react';
import { ChevronDown, ChevronUp, CheckCircle2, Trophy, Sparkles } from 'lucide-react';
import DayCard from '../DayCard/DayCard';
import ProgressBar from '../ProgressBar/ProgressBar';
import { useProgress } from '../../context/ProgressContext';

export default function WeekCard({ weekData, defaultOpen = false, targetDay = null }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const { getWeekProgress, isDayCompleted } = useProgress();

  const progress = getWeekProgress(weekData.week);

  return (
    <div className="week-container" id={`week-section-${weekData.week}`}>
      {/* Week Header */}
      <div
        className={`week-header-btn ${progress.isComplete ? 'is-complete' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        role="button"
        tabIndex={0}
      >
        <div style={{ flex: 1, paddingRight: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '2px' }}>
            <span className="week-title-badge">
              {weekData.isFinal ? 'FINAL 4 DAYS' : `WEEK ${weekData.week}`}
            </span>
            <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
              {weekData.dayRange}
            </span>
            {progress.isComplete && (
              <span
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  fontSize: '0.68rem',
                  fontWeight: 700,
                  color: 'var(--green-success)',
                  background: 'rgba(16, 185, 129, 0.15)',
                  padding: '2px 8px',
                  borderRadius: 'var(--radius-full)'
                }}
              >
                <Sparkles size={11} /> Completed
              </span>
            )}
          </div>

          <div className="week-main-title">{weekData.title}</div>
          <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', marginTop: '2px', marginBottom: '10px' }}>
            {weekData.description}
          </div>

          {/* Progress bar and indicators */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ flex: 1 }}>
              <ProgressBar
                value={progress.completedDays}
                max={progress.totalDays}
                isSuccess={progress.isComplete}
                height={6}
              />
            </div>
            <div className="week-progress-meta">
              <span style={{ color: progress.isComplete ? 'var(--green-success)' : 'var(--cyan-primary)' }}>
                {progress.completedDays} / {progress.totalDays}
              </span>
              <span style={{ color: 'var(--text-muted)' }}>
                ({progress.percentage}%)
              </span>
            </div>
          </div>

          {/* Individual Day Completion Pills (Master Plan Section 8) */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '10px' }}>
            {progress.weekDays.map((d) => {
              const done = isDayCompleted(d.day);
              return (
                <span
                  key={d.day}
                  style={{
                    fontSize: '0.68rem',
                    fontFamily: 'var(--font-mono)',
                    padding: '2px 6px',
                    borderRadius: '4px',
                    background: done ? 'rgba(16, 185, 129, 0.15)' : 'rgba(255, 255, 255, 0.04)',
                    color: done ? 'var(--green-success)' : 'var(--text-muted)',
                    border: `1px solid ${done ? 'rgba(16, 185, 129, 0.3)' : 'rgba(255, 255, 255, 0.06)'}`,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                >
                  {done ? '✓' : '○'} Day {d.day}
                </span>
              );
            })}
          </div>
        </div>

        <div className="custom-checkbox-btn" style={{ padding: '6px' }}>
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>
      </div>

      {/* Week Days List */}
      {isOpen && (
        <div className="days-list">
          {progress.weekDays.map((dayData) => (
            <DayCard
              key={dayData.day}
              dayData={dayData}
              defaultExpanded={targetDay === dayData.day}
            />
          ))}
        </div>
      )}
    </div>
  );
}
