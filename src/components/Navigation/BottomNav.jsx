import React from 'react';
import { Home, Compass, FolderGit2, BookOpen, MessageSquare } from 'lucide-react';

export default function BottomNav({ activeTab, onChangeTab }) {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'roadmap', label: 'Roadmap', icon: Compass },
    { id: 'projects', label: 'Projects', icon: FolderGit2 },
    { id: 'interview', label: 'Interview', icon: MessageSquare },
    { id: 'resources', label: 'Resources', icon: BookOpen }
  ];

  return (
    <nav className="bottom-nav">
      {navItems.map((item) => {
        const IconComponent = item.icon;
        const isActive = activeTab === item.id;

        return (
          <button
            key={item.id}
            id={`nav-btn-${item.id}`}
            onClick={() => onChangeTab(item.id)}
            className={`nav-item-btn ${isActive ? 'active' : ''}`}
            aria-label={item.label}
          >
            <div className="nav-icon-wrapper">
              <IconComponent size={20} strokeWidth={isActive ? 2.5 : 1.8} />
            </div>
            <span>{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
