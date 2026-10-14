import React, { useState } from 'react';
import { BookOpen, ExternalLink, Bookmark } from 'lucide-react';
import { RESOURCES_DATA } from '../../data/resourcesData';
import { usePWA } from '../../context/PWAContext';

export default function ResourcesPage() {
  const [activeCategory, setActiveCategory] = useState(RESOURCES_DATA[0].category);
  const { isOnline, notifyOfflineLink } = usePWA();

  const currentCategoryObj = RESOURCES_DATA.find(c => c.category === activeCategory) || RESOURCES_DATA[0];

  const handleLinkClick = (e, item) => {
    if (!isOnline) {
      e.preventDefault();
      notifyOfflineLink(item.type === 'Video' ? 'YouTube video' : 'External study link');
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 800, color: '#ffffff' }}>
          Study Resources
        </h2>
        <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
          Curated papers, courses, and documentation for each topic
        </p>
      </div>

      {/* Categories Horizontal Slider */}
      <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '4px', scrollbarWidth: 'none' }}>
        {RESOURCES_DATA.map((cat) => (
          <button
            key={cat.category}
            onClick={() => setActiveCategory(cat.category)}
            style={{
              fontSize: '0.75rem',
              fontWeight: 600,
              padding: '6px 12px',
              borderRadius: 'var(--radius-full)',
              background: activeCategory === cat.category ? 'var(--cyan-primary)' : 'rgba(255, 255, 255, 0.05)',
              color: activeCategory === cat.category ? '#070a13' : 'var(--text-secondary)',
              border: 'none',
              cursor: 'pointer',
              whiteSpace: 'nowrap'
            }}
          >
            {cat.category}
          </button>
        ))}
      </div>

      {/* Resources Cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {currentCategoryObj.items.map((item, idx) => (
          <a
            key={idx}
            href={item.url}
            onClick={(e) => handleLinkClick(e, item)}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card"
            style={{
              padding: '16px',
              textDecoration: 'none',
              color: 'inherit',
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              gap: '12px'
            }}
          >
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <span style={{
                  fontSize: '0.68rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--cyan-primary)',
                  background: 'rgba(6, 182, 212, 0.12)',
                  padding: '2px 8px',
                  borderRadius: '4px'
                }}>
                  {item.type}
                </span>
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', fontWeight: 700, color: '#ffffff' }}>
                {item.title}
              </div>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', marginTop: '4px', lineHeight: 1.45 }}>
                {item.desc}
              </p>
            </div>

            <div style={{ color: 'var(--text-muted)', marginTop: '4px' }}>
              <ExternalLink size={16} />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
