import React from 'react';
import { Settings } from 'lucide-react';
import { useProgress } from '../../context/ProgressContext';

export default function Header({ onOpenSettings }) {
  const { stats } = useProgress();

  return (
    <header className="app-header">
      <div className="brand-section">
        <div className="brand-logo-container">
          <img
            src="/logo.png"
            alt="Learn60 Official Logo"
            className="brand-logo-img"
          />
        </div>
        <div>
          <h1 className="brand-title" style={{ fontSize: '1.25rem', fontWeight: 800, margin: 0, lineHeight: 1.1 }}>
            Learn60
          </h1>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <div className="header-badge">
          <span>{stats.currentWeekNumber}</span>
        </div>
        <button
          onClick={onOpenSettings}
          id="settings-btn"
          className="custom-checkbox-btn"
          aria-label="Settings"
          style={{ padding: '6px' }}
        >
          <Settings size={18} />
        </button>
      </div>
    </header>
  );
}
