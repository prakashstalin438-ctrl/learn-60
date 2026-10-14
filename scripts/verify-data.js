import { ROADMAP_DAYS, WEEKS_DATA } from '../src/data/roadmapData.js';

console.log('Total days in ROADMAP_DAYS:', ROADMAP_DAYS.length);
console.log('Total weeks in WEEKS_DATA:', WEEKS_DATA.length);

const missing = [];
for (let i = 1; i <= 60; i++) {
  if (!ROADMAP_DAYS.some(d => d.day === i)) {
    missing.push(i);
  }
}

if (missing.length > 0) {
  console.error('Missing days:', missing);
  process.exit(1);
} else {
  console.log('ALL 60 DAYS (1-60) ARE PRESENT AND ACCOUNTED FOR!');
}
