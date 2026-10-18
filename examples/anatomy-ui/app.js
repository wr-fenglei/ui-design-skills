/* Fieldnotes demo. New application code; all records are fictional. */
(function () {
  'use strict';
  const M = globalThis.AnatomyUI, $ = id => document.getElementById(id);
  const STORAGE_KEY = 'anatomy-ui.fieldnotes.v1';
  const storage = { getItem: key => localStorage.getItem(key), setItem: (key, value) => localStorage.setItem(key, value) };
  const loaded = M.load(storage, STORAGE_KEY, globalThis.FieldnotesSeed);
  let records = loaded.records, busy = false, opener = null;
  const state = { query: '', category: '', sort: 'updated', direction: 'desc', selectedId: 'FN-012' };
  const dateLabel = value => new Intl.DateTimeFormat('en-GB', { day: '2-digit', month: 'short', timeZone: 'UTC' }).format(new Date(value + 'T12:00:00Z'));
  const say = (text, error = false) => { $('save-status').textContent = text; $('save-status').dataset.error = String(error); };
  function badge(status) { const b = document.createElement('span'); b.className = 'badge'; b.dataset.state = status; b.textContent = status; return b; }
  function render() {
    const view = M.derive(records, state); state.selectedId = view.selected?.id || null;
    $('records').replaceChildren();
    for (const r of view.visible) {
      const row = document.createElement('tr'); row.className = r.id === state.selectedId ? 'is-selected' : ''; row.dataset.id = r.id;
      const title = document.createElement('td'), button = document.createElement('button');
      button.className = 'record-button'; button.textContent = r.title; button.setAttribute('aria-pressed', String(r.id === state.selectedId)); button.setAttribute('aria-controls', 'detail-content');
      button.addEventListener('click', () => { state.selectedId = r.id; render(); const current = [...document.querySelectorAll('.record-button')].find(b => b.closest('tr').dataset.id === r.id); current?.focus({ preventScroll: true }); if(matchMedia('(max-width: 850px)').matches){ $('detail').scrollIntoView({behavior:'auto',block:'start'}); $('detail-heading').tabIndex=-1; $('detail-heading').focus({preventScroll:true});} });
      title.append(button); row.append(title);
      for (const [key, value] of [['category',r.category], ['status',r.status], ['updated',dateLabel(r.updated)], ['owner',r.owner]]) {
        const td = document.createElement('td'); td.className = key;
        if (key === 'status') td.append(badge(value)); else td.textContent = value;
        row.append(td);
      }
      $('records').append(row);
    }
    $('empty').hidden = view.count !== 0;
    $('record-total').textContent = `${view.count} ${view.count === 1 ? 'entry' : 'entries'}`;
    $('results').textContent = `Showing ${view.count} of ${view.total} records${state.category ? ' · ' + state.category : ''}`;
    $('records-heading').textContent = state.category || 'All records';
    $('clear-filters').hidden = !(state.query || state.category);
    for (const key of ['title','updated']) {
      $(key + '-heading').setAttribute('aria-sort', state.sort === key ? (state.direction === 'asc' ? 'ascending' : 'descending') : 'none');
      $('sort-' + key).querySelector('.sort-icon').textContent = state.sort === key ? (state.direction === 'asc' ? '↑' : '↓') : '↕';
    }
    const r = view.selected;
    $('detail-content').hidden = !r; $('detail-empty').hidden = !!r;
    $('detail-id').textContent = r?.id || '—';
    if (!r) return;
    $('doc-title').textContent = r.title; $('doc-category').textContent = r.category.toUpperCase() + ' NOTE';
    $('doc-excerpt').textContent = r.excerpt || r.summary;
    $('doc-quote').textContent = r.quote || ''; $('doc-quote').hidden = !r.quote;
    $('doc-owner').textContent = r.owner; $('summary').textContent = r.summary;
    $('meta-owner').textContent = r.owner; $('meta-status').replaceChildren(badge(r.status));
    $('meta-category').textContent = r.category; $('meta-updated').textContent = dateLabel(r.updated) + ' ' + r.updated.slice(0,4);
    $('timeline').replaceChildren();
    const events = r.id.startsWith('LOCAL-') ? [['Record added',r.updated]] : [[r.status === 'Reviewed' ? 'Reviewed by ' + r.owner : r.status === 'In review' ? 'Sent for review' : 'Draft updated',r.updated],['Added to the research archive',r.updated]];
    for (const [label, date] of events) { const li = document.createElement('li'), time = document.createElement('time'); li.textContent = label; time.dateTime = date; time.textContent = dateLabel(date); li.append(time); $('timeline').append(li); }
  }
  function clear() { state.query = ''; state.category = ''; $('search').value = ''; $('category').value = ''; render(); }
  $('search').addEventListener('input', e => { state.query = e.target.value; render(); });
  $('category').addEventListener('change', e => { state.category = e.target.value; render(); });
  $('clear-filters').addEventListener('click', clear);
  $('empty-clear').addEventListener('click', () => { clear(); $('search').focus(); });
  for (const key of ['title','updated']) $('sort-' + key).addEventListener('click', () => { state.direction = state.sort === key ? (state.direction === 'asc' ? 'desc' : 'asc') : key === 'title' ? 'asc' : 'desc'; state.sort = key; render(); });
  function persist() {
    const result = M.save(storage, STORAGE_KEY, records); $('retry-save').hidden = result.ok;
    say(result.ok ? `Saved locally · ${records.length} records · ${new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })} · this browser only` : 'Not saved to this browser. Changes remain in this open tab only. ' + result.error, !result.ok);
    return result.ok;
  }
  $('retry-save').addEventListener('click', persist);
  const dialog = $('record-dialog'), form = $('record-form');
  function resetErrors() { for (const key of ['title','owner','summary']) { $('new-' + key).removeAttribute('aria-invalid'); $(key + '-error').hidden = true; } $('form-error').hidden = true; }
  $('add-record').addEventListener('click', () => { if (dialog.open) return; opener = document.activeElement; form.reset(); resetErrors(); dialog.showModal(); $('new-title').focus(); });
  $('cancel-add').addEventListener('click', () => dialog.close());
  dialog.addEventListener('close', () => { opener?.focus(); });
  form.addEventListener('input', e => { if (['title','owner','summary'].includes(e.target.name) && e.target.value.trim()) { e.target.removeAttribute('aria-invalid'); $(e.target.name + '-error').hidden = true; } });
  form.addEventListener('submit', e => {
    e.preventDefault(); if (busy) return; resetErrors();
    const values = Object.fromEntries(new FormData(form)); let first = null;
    for (const key of ['title','owner','summary']) { values[key] = String(values[key] || '').trim(); if (!values[key]) { $('new-' + key).setAttribute('aria-invalid','true'); $(key + '-error').hidden = false; first ||= $('new-' + key); } }
    if (first) { first.focus(); return; }
    if (records.length >= 500) { $('form-error').textContent = 'This local demo holds up to 500 records.'; $('form-error').hidden = false; return; }
    const r = { ...values, id: 'LOCAL-' + (globalThis.crypto?.randomUUID?.() || Date.now() + '-' + Math.random().toString(36).slice(2)), updated: new Date().toISOString().slice(0,10) };
    const errors = M.validateRecords([...records, r]);
    if (errors.length) { $('form-error').textContent = errors[0]; $('form-error').hidden = false; return; }
    busy = true; $('submit-record').disabled = true;
    records = [r, ...records]; state.selectedId = r.id; state.sort = 'updated'; state.direction = 'desc'; clear(); persist(); dialog.close();
    // Keep the guard through the event turn so repeated submit events cannot duplicate a record.
    setTimeout(() => { busy = false; $('submit-record').disabled = false; }, 0);
  });
  if (loaded.error) say(loaded.error, true);
  else if (loaded.source === 'saved') say(`Loaded ${records.length} locally saved records · this browser only`);
  render();
})();
