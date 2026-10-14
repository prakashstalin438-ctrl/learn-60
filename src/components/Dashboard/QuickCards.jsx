import React from 'react';
import { Compass, FolderGit2, BookOpen, MessageSquare } from 'lucide-react';

export default function QuickCards({ onNavigate }) {
  const cards = [
    {
      id: 'roadmap',
      title: 'Roadmap',
      desc: 'All 60 Days & Weeks',
      icon: Compass,
      gradient: 'linear-gradient(135deg, #06b6d4, #3b82f6)'
    },
    {
      id: 'projects',
      title: 'Projects',
      desc: '4 Major Capstones',
      icon: FolderGit2,
      gradient: 'linear-gradient(135deg, #8b5cf6, #ec4899)'
    },
    {
      id: 'interview',
      title: 'Interview',
      desc: 'Questions & Answers',
      icon: MessageSquare,
      gradient: 'linear-gradient(135deg, #f59e0b, #ef4444)'
    },
    {
      id: 'resources',
      title: 'Resources',
      desc: 'Curated Study Links',
      icon: BookOpen,
      gradient: 'linear-gradient(135deg, #10b981, #06b6d4)'
    }
  ];

  return (
    <div className="quick-cards-grid">
      {cards.map((c) => {
        const Icon = c.icon;
        return (
          <div
            key={c.id}
            id={`quick-card-${c.id}`}
            className="quick-card"
            onClick={() => onNavigate(c.id)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                onNavigate(c.id);
              }
            }}
          >
            <div className="quick-card-icon" style={{ background: c.gradient }}>
              <Icon size={20} color="#ffffff" strokeWidth={2.2} />
            </div>
            <div>
              <div className="quick-card-title">{c.title}</div>
              <div className="quick-card-desc">{c.desc}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
