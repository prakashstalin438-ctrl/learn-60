/**
 * IndexedDB Persistence Service for GenAI 60-Day Progress Tracker
 * Ensures zero data loss across refreshes, reopens, and offline PWA usage.
 */

const DB_NAME = 'GenAI60DayTrackerDB';
const DB_VERSION = 1;
const STORE_NAME = 'app_progress';

let dbInstance = null;

export function openDatabase() {
  if (dbInstance) return Promise.resolve(dbInstance);

  return new Promise((resolve, reject) => {
    if (!('indexedDB' in window)) {
      console.warn('IndexedDB not supported in this environment, falling back to localStorage');
      resolve(null);
      return;
    }

    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };

    request.onsuccess = (event) => {
      dbInstance = event.target.result;
      resolve(dbInstance);
    };

    request.onerror = (event) => {
      console.error('Failed to open IndexedDB:', event.target.error);
      reject(event.target.error);
    };
  });
}

/**
 * Generic getter from IndexedDB
 */
export async function getFromDB(key) {
  try {
    const db = await openDatabase();
    if (!db) {
      const fallback = localStorage.getItem(`genai60_${key}`);
      return fallback ? JSON.parse(fallback) : null;
    }

    return new Promise((resolve, reject) => {
      const transaction = db.transaction([STORE_NAME], 'readonly');
      const store = transaction.objectStore(STORE_NAME);
      const request = store.get(key);

      request.onsuccess = () => resolve(request.result ?? null);
      request.onerror = () => reject(request.error);
    });
  } catch (error) {
    console.error(`Error reading key "${key}" from IndexedDB:`, error);
    try {
      const fallback = localStorage.getItem(`genai60_${key}`);
      return fallback ? JSON.parse(fallback) : null;
    } catch {
      return null;
    }
  }
}

/**
 * Generic setter to IndexedDB
 */
export async function setToDB(key, value) {
  try {
    // Also save to localStorage as a mirror backup for fast sync
    try {
      localStorage.setItem(`genai60_${key}`, JSON.stringify(value));
    } catch (e) {
      // Storage quota or disabled
    }

    const db = await openDatabase();
    if (!db) return;

    return new Promise((resolve, reject) => {
      const transaction = db.transaction([STORE_NAME], 'readwrite');
      const store = transaction.objectStore(STORE_NAME);
      const request = store.put(value, key);

      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });
  } catch (error) {
    console.error(`Error saving key "${key}" to IndexedDB:`, error);
  }
}

/**
 * Load complete application state
 */
export async function loadInitialProgress() {
  const [completedDays, completedTasks, dayNotes, activeDay, settings] = await Promise.all([
    getFromDB('completedDays'),
    getFromDB('completedTasks'),
    getFromDB('dayNotes'),
    getFromDB('activeDay'),
    getFromDB('settings')
  ]);

  return {
    completedDays: Array.isArray(completedDays) ? completedDays : [],
    completedTasks: completedTasks && typeof completedTasks === 'object' ? completedTasks : {},
    dayNotes: dayNotes && typeof dayNotes === 'object' ? dayNotes : {},
    activeDay: typeof activeDay === 'number' ? activeDay : 1,
    settings: settings && typeof settings === 'object' ? settings : { theme: 'dark' }
  };
}

/**
 * Reset all progress in IndexedDB and LocalStorage
 */
export async function resetAllData() {
  try {
    localStorage.removeItem('genai60_completedDays');
    localStorage.removeItem('genai60_completedTasks');
    localStorage.removeItem('genai60_dayNotes');
    localStorage.removeItem('genai60_activeDay');

    const db = await openDatabase();
    if (!db) return true;

    return new Promise((resolve, reject) => {
      const transaction = db.transaction([STORE_NAME], 'readwrite');
      const store = transaction.objectStore(STORE_NAME);
      const request = store.clear();

      request.onsuccess = () => resolve(true);
      request.onerror = () => reject(request.error);
    });
  } catch (err) {
    console.error('Error resetting IndexedDB:', err);
    return false;
  }
}

/**
 * Export all data as a JSON payload
 */
export async function exportProgressData() {
  const data = await loadInitialProgress();
  return {
    app: 'GenAI 60-Day Progress Tracker',
    version: '1.0',
    exportTimestamp: new Date().toISOString(),
    ...data
  };
}

/**
 * Import progress JSON payload
 */
export async function importProgressData(payload) {
  if (!payload || typeof payload !== 'object') {
    throw new Error('Invalid backup file');
  }

  const { completedDays, completedTasks, dayNotes, activeDay, settings } = payload;

  await Promise.all([
    setToDB('completedDays', Array.isArray(completedDays) ? completedDays : []),
    setToDB('completedTasks', completedTasks && typeof completedTasks === 'object' ? completedTasks : {}),
    setToDB('dayNotes', dayNotes && typeof dayNotes === 'object' ? dayNotes : {}),
    setToDB('activeDay', typeof activeDay === 'number' ? activeDay : 1),
    setToDB('settings', settings && typeof settings === 'object' ? settings : { theme: 'dark' })
  ]);

  return {
    completedDays: Array.isArray(completedDays) ? completedDays : [],
    completedTasks: completedTasks || {},
    dayNotes: dayNotes || {},
    activeDay: typeof activeDay === 'number' ? activeDay : 1,
    settings: settings || { theme: 'dark' }
  };
}
