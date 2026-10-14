import React from 'react';
import { usePWA } from '../../context/PWAContext';

export default function PWAStatusBar() {
  const { updateAvailable, applyUpdate } = usePWA();

  // If no update is available, render nothing (no network status banners)
  if (!updateAvailable) return null;

  return (
    <aside role="alert" className="pwa-update-banner">
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <span style={{ fontSize: '1.1rem' }} aria-hidden="true">🔄</span>
        <div>
          <div style={{ fontWeight: 700, fontSize: '0.85rem', color: '#ffffff' }}>
            New version available
          </div>
          <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)' }}>
            Your progress is 100% saved in IndexedDB
          </div>
        </div>
      </div>
      <button
        onClick={applyUpdate}
        className="pwa-update-btn"
      >
        Update Now
      </button>
    </aside>
  );
}
