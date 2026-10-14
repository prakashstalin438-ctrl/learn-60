import React, { useState } from 'react';
import { ProgressProvider, useProgress } from './context/ProgressContext';
import { PWAProvider } from './context/PWAContext';
import Header from './components/Navigation/Header';
import BottomNav from './components/Navigation/BottomNav';
import PWAStatusBar from './components/PWA/PWAStatusBar';
import HomePage from './pages/Home/HomePage';
import RoadmapPage from './pages/Roadmap/RoadmapPage';
import ProjectsPage from './pages/Projects/ProjectsPage';
import InterviewPage from './pages/Interview/InterviewPage';
import ResourcesPage from './pages/Resources/ResourcesPage';
import SettingsPage from './pages/Settings/SettingsPage';
import { Sparkles } from 'lucide-react';

function AppContent() {
  const { isLoaded } = useProgress();
  const [activeTab, setActiveTab] = useState('home');
  const [targetDay, setTargetDay] = useState(null);

  // Jump to specific day in Roadmap
  const handleSelectDay = (dayNumber) => {
    setTargetDay(dayNumber);
    setActiveTab('roadmap');
  };

  if (!isLoaded) {
    return (
      <div className="app-container" style={{ alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', textAlign: 'center' }}>
          <div className="splash-logo-box pulse-glow">
            <img
              src="/logo.png"
              alt="GenAI 60-Day Official Logo"
              className="splash-logo-img"
            />
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em' }}>
              GenAI 60-Day
            </div>
            <div style={{ fontSize: '0.78rem', color: 'var(--cyan-primary)', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: '2px' }}>
              Strong Fresher Roadmap
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
            <span className="loading-dot"></span>
            Restoring progress...
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="app-container">
      {/* PWA Connectivity & Update Status Bar */}
      <PWAStatusBar />

      {/* Top Header */}
      <Header onOpenSettings={() => setActiveTab('settings')} />

      {/* Main Content View */}
      <main className="main-content">
        {activeTab === 'home' && (
          <HomePage
            onNavigate={(tab) => setActiveTab(tab)}
            onSelectDay={handleSelectDay}
          />
        )}

        {activeTab === 'roadmap' && (
          <RoadmapPage targetDay={targetDay} />
        )}

        {activeTab === 'projects' && (
          <ProjectsPage onSelectDay={handleSelectDay} />
        )}

        {activeTab === 'interview' && (
          <InterviewPage />
        )}

        {activeTab === 'resources' && (
          <ResourcesPage />
        )}

        {activeTab === 'settings' && (
          <SettingsPage onClose={() => setActiveTab('home')} />
        )}
      </main>

      {/* Bottom Navigation */}
      <BottomNav
        activeTab={activeTab === 'settings' ? 'home' : activeTab}
        onChangeTab={(tab) => {
          if (tab === 'roadmap') setTargetDay(null);
          setActiveTab(tab);
        }}
      />
    </div>
  );
}

export default function App() {
  return (
    <PWAProvider>
      <ProgressProvider>
        <AppContent />
      </ProgressProvider>
    </PWAProvider>
  );
}
