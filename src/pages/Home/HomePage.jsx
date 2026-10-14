import React from 'react';
import CircularProgress from '../../components/Dashboard/CircularProgress';
import ContinueCard from '../../components/Dashboard/ContinueCard';
import QuickCards from '../../components/Dashboard/QuickCards';
import MilestonesSection from '../../components/Dashboard/MilestonesSection';
import { useProgress } from '../../context/ProgressContext';
import { ROADMAP_DAYS } from '../../data/roadmapData';
import { Flame, Target, BookOpen } from 'lucide-react';

export default function HomePage({ onNavigate, onSelectDay }) {
  const { stats, completedDays } = useProgress();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      {/* 0. Home Dashboard Brand Header */}
      <div className="home-dashboard-header-card">
        <div className="home-header-logo-wrap">
          <img
            src="/logo.png"
            alt="GenAI 60-Day Official Logo"
            className="home-header-logo"
          />
        </div>
        <div className="home-header-info">
          <div className="home-header-badge">
            <span className="live-dot"></span>
            Interactive Tracker • {stats.currentWeekNumber}
          </div>
          <h2 className="home-header-title">GenAI 60-Day</h2>
          <div className="home-header-subtitle">Strong Fresher Roadmap</div>
        </div>
      </div>

      {/* 1. Circular Overall Progress */}
      <CircularProgress />

      {/* 2. Continue From Current Day Button */}
      <ContinueCard onSelectDay={onSelectDay} />

      {/* 3. Quick Access Cards */}
      <QuickCards onNavigate={onNavigate} />

      {/* 4. Milestones & Badges */}
      <MilestonesSection onSelectDay={onSelectDay} />

      {/* 5. Summary Info Callout */}
      <div className="glass-card" style={{ padding: '14px 16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{
          width: '36px',
          height: '36px',
          borderRadius: '8px',
          background: 'rgba(245, 158, 11, 0.15)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--amber-warning)',
          flexShrink: 0
        }}>
          <Flame size={20} />
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#ffffff' }}>
            Study Consistency
          </div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
            {completedDays.length === 0
              ? 'Start Day 1 today! Even 45 minutes of focused learning builds immense momentum.'
              : `${completedDays.length} days completed out of 60. Keep the streak alive!`}
          </div>
        </div>
      </div>
    </div>
  );
}
