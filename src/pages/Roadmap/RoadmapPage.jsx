import React, { useState, useEffect } from 'react';
import WeekCard from '../../components/WeekCard/WeekCard';
import { WEEKS_DATA, ROADMAP_DAYS } from '../../data/roadmapData';
import { useProgress } from '../../context/ProgressContext';
import { Search, Filter, CheckCircle2, Layers } from 'lucide-react';

export default function RoadmapPage({ targetDay = null }) {
  const { stats } = useProgress();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedWeekFilter, setSelectedWeekFilter] = useState('all');

  // Determine active week
  const activeDayObj = ROADMAP_DAYS.find(d => d.day === (targetDay || stats.nextIncompleteDay)) || ROADMAP_DAYS[0];
  const activeWeekNum = activeDayObj.week;

  // Filter weeks
  const displayedWeeks = WEEKS_DATA.filter((w) => {
    if (selectedWeekFilter !== 'all' && w.week !== Number(selectedWeekFilter)) {
      return false;
    }
    if (!searchQuery.trim()) return true;

    // Search matches either week title or any day in the week
    const matchesWeek = w.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDays = ROADMAP_DAYS.some(
      d => d.week === w.week && (
        d.topic.toLowerCase().includes(searchQuery.toLowerCase()) ||
        d.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
    return matchesWeek || matchesDays;
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {/* Page Title & Stats Bar */}
      <div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 800, color: '#ffffff' }}>
              60-Day Roadmap
            </h2>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
              Complete curriculum from fundamentals to production agents
            </p>
          </div>
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.8rem',
            color: 'var(--cyan-primary)',
            background: 'rgba(6, 182, 212, 0.1)',
            padding: '4px 10px',
            borderRadius: 'var(--radius-full)',
            border: '1px solid rgba(6, 182, 212, 0.25)'
          }}>
            {stats.completedDaysCount}/60 Days
          </div>
        </div>

        {/* Search Bar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          background: 'rgba(13, 19, 34, 0.7)',
          border: '1px solid var(--border-card)',
          borderRadius: 'var(--radius-md)',
          padding: '8px 12px',
          marginTop: '12px'
        }}>
          <Search size={16} color="var(--text-muted)" />
          <input
            type="text"
            placeholder="Search topics, concepts, frameworks..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--text-primary)',
              fontSize: '0.85rem',
              outline: 'none',
              width: '100%',
              fontFamily: 'var(--font-body)'
            }}
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="custom-checkbox-btn"
              style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}
            >
              Clear
            </button>
          )}
        </div>

        {/* Quick Week Filters */}
        <div style={{
          display: 'flex',
          gap: '6px',
          overflowX: 'auto',
          paddingBottom: '4px',
          marginTop: '10px',
          scrollbarWidth: 'none'
        }}>
          <button
            onClick={() => setSelectedWeekFilter('all')}
            style={{
              fontSize: '0.72rem',
              fontWeight: 600,
              padding: '4px 10px',
              borderRadius: 'var(--radius-full)',
              background: selectedWeekFilter === 'all' ? 'var(--cyan-primary)' : 'rgba(255, 255, 255, 0.05)',
              color: selectedWeekFilter === 'all' ? '#070a13' : 'var(--text-secondary)',
              border: 'none',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              fontFamily: 'var(--font-body)'
            }}
          >
            All Weeks (60 Days)
          </button>
          {WEEKS_DATA.map((w) => (
            <button
              key={w.week}
              onClick={() => setSelectedWeekFilter(w.week.toString())}
              style={{
                fontSize: '0.72rem',
                fontWeight: 600,
                padding: '4px 10px',
                borderRadius: 'var(--radius-full)',
                background: selectedWeekFilter === w.week.toString() ? 'var(--cyan-primary)' : 'rgba(255, 255, 255, 0.05)',
                color: selectedWeekFilter === w.week.toString() ? '#070a13' : 'var(--text-secondary)',
                border: 'none',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                fontFamily: 'var(--font-mono)'
              }}
            >
              {w.isFinal ? 'Final 4' : `W${w.week}`}
            </button>
          ))}
        </div>
      </div>

      {/* Week Cards List */}
      <div>
        {displayedWeeks.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '40px 20px', color: 'var(--text-muted)' }}>
            <p>No matching topics found for "{searchQuery}".</p>
          </div>
        ) : (
          displayedWeeks.map((weekData) => {
            const isWeekActive = weekData.week === activeWeekNum;
            const containsTarget = targetDay && ROADMAP_DAYS.some(d => d.day === targetDay && d.week === weekData.week);

            return (
              <WeekCard
                key={weekData.week}
                weekData={weekData}
                defaultOpen={isWeekActive || !!containsTarget || selectedWeekFilter !== 'all'}
                targetDay={targetDay}
              />
            );
          })
        )}
      </div>
    </div>
  );
}
