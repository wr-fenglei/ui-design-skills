/* UI adapters. follow is adapted from Anatomy kit/react/live.tsx:98–102,
   Copyright (c) 2026 Ryan, MIT (see LICENSE.anatomy).
   Other functions are new. insetBox borrows the roundedPlan/insetPlan relation. */
(function (root) {
  'use strict';
  const CATEGORIES = ['Discovery', 'Interviews', 'Usability', 'Synthesis'];
  const STATUSES = ['Draft', 'In review', 'Reviewed'];
  const SPACING = [4, 8, 12, 16, 24, 32];
  const TYPE = Object.freeze({ title: 24, body: 14, label: 12, metadata: 11 });
  const finite = (value, fallback = 0) => Number.isFinite(value) ? value : fallback;
  const clamp = (value, min, max) => Math.min(max, Math.max(min, finite(value, min)));
  // Optional motion helper; the reading page intentionally uses no animation.
  // Validation is new; the exponential follow/snap body is Ryan's implementation.
  function follow(current, target, dt, seconds, calm = false) {
    if (![current,target,dt,seconds].every(Number.isFinite) || dt < 0 || seconds <= 0) throw new RangeError('follow needs finite values, dt >= 0, seconds > 0');
    if (calm) return target;
    const next = current + (target - current) * (1 - Math.exp(-dt / seconds));
    return Math.abs(target - next) < 1e-3 ? target : next;
  }
  function insetBox(width, height, radius, inset) {
    const w = Math.max(0, finite(width)), h = Math.max(0, finite(height));
    const n = clamp(inset, 0, Math.min(w, h) / 2);
    const innerW = w - n * 2, innerH = h - n * 2;
    return { width: innerW, height: innerH, radius: clamp(radius - n, 0, Math.min(innerW, innerH) / 2), inset: n };
  }
  function layoutFor(viewport) {
    const width = Math.max(0, finite(viewport));
    const gutter = width <= 560 ? 16 : width <= 1100 ? 24 : 40;
    const available = Math.max(0, Math.min(1320, width - gutter * 2));
    const split = width > 850;
    const ratio = width > 1100 ? .64 : .62;
    return { gutter, available, split, archive: split ? available * ratio : available, inspector: split ? available * (1 - ratio) : available };
  }
  function spacing(step) { return SPACING[clamp(Math.round(finite(step)), 0, SPACING.length - 1)]; }
  function validateRecords(records) {
    if (!Array.isArray(records) || records.length > 500) return ['Expected at most 500 records.'];
    const ids = new Set(), errors = [];
    for (const [index, r] of records.entries()) {
      const at = `Record ${index + 1}`;
      if (!r || typeof r !== 'object') { errors.push(`${at}: invalid object.`); continue; }
      if (typeof r.id !== 'string' || !r.id || ids.has(r.id)) errors.push(`${at}: missing or duplicate id.`);
      ids.add(r.id);
      for (const [key, max] of [['title', 160], ['owner', 48], ['summary', 1000]]) {
        if (typeof r[key] !== 'string' || !r[key].trim() || r[key].length > max) errors.push(`${at}: invalid ${key}.`);
      }
      if (!CATEGORIES.includes(r.category) || !STATUSES.includes(r.status)) errors.push(`${at}: invalid classification.`);
      if (typeof r.updated !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(r.updated) || !Number.isFinite(Date.parse(r.updated)) || new Date(r.updated).toISOString().slice(0,10) !== r.updated) errors.push(`${at}: invalid date.`);
      for (const key of ['excerpt', 'quote']) if (r[key] !== undefined && (typeof r[key] !== 'string' || r[key].length > 2000)) errors.push(`${at}: invalid ${key}.`);
    }
    return errors;
  }
  function derive(records, state) {
    const query = (state.query || '').trim().toLowerCase();
    const visible = records.filter(r => (!state.category || r.category === state.category) && (!query || [r.title, r.owner, r.category, r.id].join(' ').toLowerCase().includes(query)));
    const key = state.sort === 'title' ? 'title' : 'updated';
    visible.sort((a, b) => (String(a[key]).localeCompare(String(b[key])) || a.id.localeCompare(b.id)) * (state.direction === 'asc' ? 1 : -1));
    const selected = visible.find(r => r.id === state.selectedId) || visible[0] || null;
    return { visible, selected, count: visible.length, total: records.length };
  }
  function save(storage, key, records) {
    const errors = validateRecords(records);
    if (errors.length) return { ok: false, error: errors[0] };
    try { storage.setItem(key, JSON.stringify({ version: 1, records })); return { ok: true }; }
    catch { return { ok: false, error: 'Browser storage is unavailable or full.' }; }
  }
  function load(storage, key, seed) {
    try {
      const raw = storage.getItem(key);
      if (raw === null) return { records: seed, source: 'demo' };
      const parsed = JSON.parse(raw);
      if (parsed.version !== 1 || validateRecords(parsed.records).length) throw new Error('Invalid saved archive.');
      return { records: parsed.records, source: 'saved' };
    } catch { return { records: seed, source: 'fallback', error: 'Saved data could not be read. Showing demo records; existing storage has not been changed.' }; }
  }
  function overflowReport(rects, viewport, tolerance = 1) {
    return rects.filter(r => !Number.isFinite(r.left) || !Number.isFinite(r.right) || r.left < -tolerance || r.right > viewport + tolerance);
  }
  const api = { CATEGORIES, STATUSES, SPACING, TYPE, clamp, follow, insetBox, layoutFor, spacing, validateRecords, derive, save, load, overflowReport };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.AnatomyUI = api;
})(typeof globalThis !== 'undefined' ? globalThis : this);
