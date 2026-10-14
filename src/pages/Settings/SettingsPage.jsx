import React, { useState, useRef } from 'react';
import { Download, Upload, Trash2, Smartphone, ShieldCheck, Wifi, WifiOff } from 'lucide-react';
import { useProgress } from '../../context/ProgressContext';
import { usePWA } from '../../context/PWAContext';

export default function SettingsPage({ onClose }) {
  const { exportProgress, importProgress, resetProgress, stats } = useProgress();
  const { isOnline, isInstalled, canInstall, promptInstall } = usePWA();
  const [resetConfirmOpen, setResetConfirmOpen] = useState(false);
  const [importStatus, setImportStatus] = useState('');
  const [installStatus, setInstallStatus] = useState('');
  const fileInputRef = useRef(null);

  // Handle PWA Install Click
  const handleInstallClick = async () => {
    const res = await promptInstall();
    if (res.outcome === 'accepted') {
      setInstallStatus('Learn60 is installing...');
    }
  };

  // Handle Export to JSON file
  const handleExport = async () => {
    try {
      const data = await exportProgress();
      const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `genai-60-day-backup-${new Date().toISOString().slice(0, 10)}.json`;
      a.click();
      URL.revokeObjectURL(url);
    } catch (e) {
      console.error('Export failed:', e);
    }
  };

  // Handle File Upload Import
  const handleFileChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      const text = await file.text();
      const json = JSON.parse(text);
      await importProgress(json);
      setImportStatus('Backup restored successfully!');
      setTimeout(() => setImportStatus(''), 4000);
    } catch (err) {
      setImportStatus('Error importing file: Invalid format.');
      setTimeout(() => setImportStatus(''), 4000);
    }
  };

  // Handle Reset Confirmation
  const handleConfirmReset = async () => {
    await resetProgress();
    setResetConfirmOpen(false);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 800, color: '#ffffff' }}>
            Settings & Backup
          </h2>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
            Manage data persistence, backup, and PWA options
          </p>
        </div>
        {onClose && (
          <button onClick={onClose} className="custom-checkbox-btn" style={{ fontSize: '0.85rem' }}>
            Done
          </button>
        )}
      </div>

      {importStatus && (
        <div style={{
          padding: '10px 14px',
          borderRadius: 'var(--radius-md)',
          background: importStatus.includes('Error') ? 'rgba(239, 68, 68, 0.15)' : 'rgba(16, 185, 129, 0.15)',
          color: importStatus.includes('Error') ? 'var(--red-danger)' : 'var(--green-success)',
          border: `1px solid ${importStatus.includes('Error') ? 'var(--red-danger)' : 'var(--green-success)'}`,
          fontSize: '0.8rem'
        }}>
          {importStatus}
        </div>
      )}

      {/* Storage & Backup Card */}
      <div className="glass-card">
        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, color: '#ffffff', marginBottom: '8px' }}>
          Data Backup & Restore
        </h3>
        <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '14px', lineHeight: 1.45 }}>
          Your progress is automatically saved to IndexedDB on this device. You can also export a JSON backup to transfer to another device.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <button
            onClick={handleExport}
            className="btn-mark-day"
            style={{ width: '100%' }}
          >
            <Download size={16} />
            <span>Export Progress (JSON)</span>
          </button>

          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept=".json"
            style={{ display: 'none' }}
          />

          <button
            onClick={() => fileInputRef.current?.click()}
            className="custom-checkbox-btn"
            style={{
              padding: '10px 16px',
              border: '1px solid var(--border-card)',
              borderRadius: 'var(--radius-md)',
              fontSize: '0.85rem',
              color: 'var(--text-primary)',
              gap: '8px',
              width: '100%',
              justifyContent: 'center',
              background: 'rgba(255, 255, 255, 0.03)'
            }}
          >
            <Upload size={16} />
            <span>Import Progress from JSON</span>
          </button>
        </div>
      </div>

      {/* 5. Install Learn60 Card (Hidden once installed) */}
      {!isInstalled && (
        <div className="glass-card" style={{ border: '1px solid rgba(6, 182, 212, 0.35)', background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.08), rgba(15, 23, 42, 0.8))' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <span style={{ fontSize: '1.25rem' }} role="img" aria-label="phone">📱</span>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 700, color: '#ffffff' }}>
              Install Learn60
            </h3>
          </div>
          <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '14px' }}>
            Install Learn60 on your phone for a faster app-like learning experience and offline access.
          </p>

          {canInstall ? (
            <button
              onClick={handleInstallClick}
              className="btn-mark-day"
              style={{ width: '100%', justifyContent: 'center', gap: '8px', padding: '12px' }}
            >
              <Smartphone size={18} />
              <span style={{ fontWeight: 700 }}>Install App</span>
            </button>
          ) : (
            <div style={{
              background: 'rgba(255, 255, 255, 0.04)',
              padding: '12px 14px',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-subtle)',
              fontSize: '0.78rem',
              color: 'var(--text-primary)',
              lineHeight: 1.5
            }}>
              <div style={{ fontWeight: 600, color: 'var(--cyan-primary)', marginBottom: '4px' }}>
                Chrome:
              </div>
              <div style={{ color: 'var(--text-secondary)' }}>
                Menu → <strong>Add to Home screen</strong> / <strong>Install app</strong>
              </div>
              <div style={{ fontWeight: 600, color: 'var(--cyan-primary)', marginTop: '8px', marginBottom: '4px' }}>
                Safari (iOS):
              </div>
              <div style={{ color: 'var(--text-secondary)' }}>
                Share (⎋) → <strong>Add to Home Screen</strong>
              </div>
            </div>
          )}

          {installStatus && (
            <div style={{ marginTop: '10px', fontSize: '0.78rem', color: 'var(--green-success)', fontWeight: 600 }}>
              {installStatus}
            </div>
          )}
        </div>
      )}

      {/* Installed Standalone Indicator */}
      {isInstalled && (
        <div className="glass-card" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '14px 16px', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
          <div style={{
            width: '36px',
            height: '36px',
            borderRadius: '10px',
            background: 'rgba(16, 185, 129, 0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--green-success)'
          }}>
            <ShieldCheck size={20} />
          </div>
          <div>
            <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#ffffff' }}>
              Learn60 Installed
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
              Running in standalone mode with full offline functionality.
            </div>
          </div>
        </div>
      )}

      {/* Reset Danger Zone */}
      <div className="glass-card" style={{ borderColor: 'rgba(239, 68, 68, 0.25)' }}>
        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, color: 'var(--red-danger)', marginBottom: '8px' }}>
          Reset All Progress
        </h3>
        <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '14px', lineHeight: 1.45 }}>
          Permanently clear all completed tasks, day completions, and personal notes. This cannot be undone unless you have exported a backup.
        </p>

        {!resetConfirmOpen ? (
          <button
            onClick={() => setResetConfirmOpen(true)}
            className="custom-checkbox-btn"
            style={{
              padding: '10px 16px',
              border: '1px solid rgba(239, 68, 68, 0.4)',
              borderRadius: 'var(--radius-md)',
              fontSize: '0.85rem',
              color: 'var(--red-danger)',
              gap: '8px',
              width: '100%',
              justifyContent: 'center',
              background: 'rgba(239, 68, 68, 0.08)'
            }}
          >
            <Trash2 size={16} />
            <span>Reset All Progress...</span>
          </button>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', background: 'rgba(239, 68, 68, 0.1)', padding: '12px', borderRadius: 'var(--radius-md)' }}>
            <p style={{ fontSize: '0.8rem', color: '#ffffff', fontWeight: 600 }}>
              Are you sure? All {stats.completedDaysCount} completed days will be wiped.
            </p>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button
                onClick={handleConfirmReset}
                style={{
                  flex: 1,
                  padding: '8px',
                  background: 'var(--red-danger)',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: 'var(--radius-sm)',
                  fontWeight: 700,
                  fontSize: '0.8rem',
                  cursor: 'pointer'
                }}
              >
                Yes, Reset Everything
              </button>
              <button
                onClick={() => setResetConfirmOpen(false)}
                style={{
                  flex: 1,
                  padding: '8px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  color: 'var(--text-primary)',
                  border: 'none',
                  borderRadius: 'var(--radius-sm)',
                  fontWeight: 600,
                  fontSize: '0.8rem',
                  cursor: 'pointer'
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Offline Storage Information */}
      <div className="glass-card" style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '14px 16px' }}>
        <div style={{ fontSize: '0.82rem', fontWeight: 600, color: '#ffffff', marginBottom: '6px' }}>
          Offline Support & Local Storage
        </div>
        <div style={{ fontSize: '0.74rem', color: 'var(--text-secondary)', lineHeight: 1.45 }}>
          Local storage: <strong>IndexedDB (Persistent)</strong> • All 60 days, notes, milestones, and project checklists cached.
        </div>
      </div>

      {/* App Information */}
      <div style={{ textAlign: 'center', padding: '16px 16px 4px 16px', color: 'var(--text-muted)', fontSize: '0.75rem' }}>
        <p>Learn60 — GenAI 60-Day Progress Tracker v1.0.0</p>
        <p>Master Plan Foundation Build • Offline-First PWA</p>
      </div>

      {/* Footer: Built by Stalin */}
      <div style={{
        textAlign: 'center',
        padding: '8px 16px 36px 16px',
        color: 'var(--text-secondary)',
        fontSize: '0.8rem',
        fontWeight: 500,
        letterSpacing: '0.04em',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '6px',
        opacity: 0.72,
        userSelect: 'none'
      }}>
        <span style={{ fontSize: '0.9rem' }} role="img" aria-label="robot">🤖</span>
        <span>Built by Stalin</span>
      </div>
    </div>
  );
}
