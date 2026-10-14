import React from 'react';
import { useProgress } from '../../context/ProgressContext';

export default function CircularProgress() {
  const { stats } = useProgress();
  const radius = 68;
  const strokeWidth = 10;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (stats.overallPercentage / 100) * circumference;

  return (
    <div className="circular-progress-card">
      <div className="circular-svg-wrap">
        <svg width="170" height="170" viewBox="0 0 170 170" style={{ transform: 'rotate(-90deg)' }}>
          <defs>
            <linearGradient id="circleProgressGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="60%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
            <filter id="circleGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor="#06b6d4" floodOpacity="0.5" />
            </filter>
          </defs>

          {/* Background Track */}
          <circle
            cx="85"
            cy="85"
            r={radius}
            fill="transparent"
            stroke="rgba(255, 255, 255, 0.08)"
            strokeWidth={strokeWidth}
          />

          {/* Animated Glowing Progress Arc */}
          <circle
            cx="85"
            cy="85"
            r={radius}
            fill="transparent"
            stroke="url(#circleProgressGrad)"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            filter="url(#circleGlow)"
            style={{
              transition: 'stroke-dashoffset 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
          />
        </svg>

        {/* Center Percentage & Counter */}
        <div className="circular-svg-inner">
          <div className="progress-pct-text">{stats.overallPercentage}%</div>
          <div className="progress-fraction-text">
            {stats.completedDaysCount} / {stats.totalDays}
          </div>
        </div>
      </div>

      {/* Stats Breakdown Row */}
      <div className="stats-grid-row">
        <div className="stat-box">
          <div className="stat-value" style={{ color: '#10b981' }}>
            {stats.completedDaysCount}
          </div>
          <div className="stat-label">Completed</div>
        </div>

        <div className="stat-box" style={{ borderLeft: '1px solid rgba(255, 255, 255, 0.08)', borderRight: '1px solid rgba(255, 255, 255, 0.08)' }}>
          <div className="stat-value" style={{ color: '#f59e0b' }}>
            {stats.remainingDays}
          </div>
          <div className="stat-label">Remaining</div>
        </div>

        <div className="stat-box">
          <div className="stat-value" style={{ color: '#38bdf8' }}>
            {stats.currentWeekNumber}
          </div>
          <div className="stat-label">Active Phase</div>
        </div>
      </div>
    </div>
  );
}
