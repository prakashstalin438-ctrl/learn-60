import React from 'react';
import { Award, Lock, CheckCircle2 } from 'lucide-react';
import { MILESTONES } from '../../data/milestonesData';
import { useProgress } from '../../context/ProgressContext';

export default function MilestonesSection({ onSelectDay }) {
  const { isDayCompleted } = useProgress();

  return (
    <div style={{ marginBottom: '24px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 800, color: '#ffffff' }}>
          Milestones & Badges
        </h2>
        <span style={{ fontSize: '0.75rem', color: 'var(--cyan-primary)', fontFamily: 'var(--font-mono)' }}>
          {MILESTONES.filter(m => isDayCompleted(m.day)).length} / {MILESTONES.length} Unlocked
        </span>
      </div>

      <div className="milestones-slider">
        {MILESTONES.map((m) => {
          const isUnlocked = isDayCompleted(m.day);

          return (
            <div
              key={m.day}
              className={`milestone-badge-card ${isUnlocked ? 'unlocked' : ''}`}
              onClick={() => onSelectDay(m.day)}
              role="button"
              tabIndex={0}
              style={{ cursor: 'pointer' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span className="milestone-status-tag">{m.badge} • Day {m.day}</span>
                {isUnlocked ? (
                  <CheckCircle2 size={16} color="var(--green-success)" />
                ) : (
                  <Lock size={15} color="var(--text-muted)" />
                )}
              </div>

              <div className="milestone-title">{m.title}</div>
              <div className="milestone-desc">{m.description}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
