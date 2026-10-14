import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { useProgress } from '../../context/ProgressContext';
import { ROADMAP_DAYS } from '../../data/roadmapData';

export default function ContinueCard({ onSelectDay }) {
  const { stats } = useProgress();
  const dayObj = ROADMAP_DAYS.find((d) => d.day === stats.nextIncompleteDay) || ROADMAP_DAYS[0];

  return (
    <div
      className="continue-card"
      id="continue-current-day-btn"
      onClick={() => onSelectDay(dayObj.day)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onSelectDay(dayObj.day);
        }
      }}
    >
      <div>
        <div className="continue-card-title">
          Continue Learning • Day {dayObj.day}
        </div>
        <div className="continue-card-topic" title={dayObj.topic}>
          {dayObj.topic}
        </div>
      </div>

      <div className="continue-btn" aria-label={`Continue from Day ${dayObj.day}`}>
        <ArrowRight size={20} strokeWidth={2.5} />
      </div>
    </div>
  );
}
