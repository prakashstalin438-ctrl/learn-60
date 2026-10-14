import React from 'react';

export default function ProgressBar({ value = 0, max = 100, height = 6, showLabel = false, isSuccess = false }) {
  const percentage = Math.min(100, Math.max(0, Math.round((value / max) * 100)));

  return (
    <div style={{ width: '100%' }}>
      {showLabel && (
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: 'var(--text-muted)', marginBottom: '4px', fontFamily: 'var(--font-mono)' }}>
          <span>Progress</span>
          <span style={{ color: isSuccess ? 'var(--green-success)' : 'var(--cyan-primary)', fontWeight: 600 }}>
            {percentage}%
          </span>
        </div>
      )}
      <div className="progress-bar-track" style={{ height: `${height}px` }}>
        <div
          className={`progress-bar-fill ${isSuccess ? 'success' : ''}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
