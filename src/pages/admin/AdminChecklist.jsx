import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { CARD_COLORS } from '../../components/encyclopedia/cardColors';

// The colour groups of the Biblical tree, in the poster's legend order.
const GROUPS = [
  { key: 't1-bereshit', title: 'חומש בראשית' },
  { key: 't1-yehuda', title: 'שבט יהודה' },
  { key: 't1-levi', title: 'שבט לוי (כהנים ולויים)' },
  { key: 't1-shvatim', title: 'שאר השבטים' },
  { key: 't1-gerim', title: 'גרי צדק' },
  { key: 't1-hordos', title: 'בית הורדוס' },
];
const KINDS = [
  { key: 'box', title: 'בתיבות' },
  { key: 'name', title: 'שמות (בלי תיבה)' },
];

// Top of the poster first; on the same row, right to left.
const byPlace = (a, b) => Math.round(a.y / 0.4) - Math.round(b.y / 0.4) || b.x - a.x;
const isDone = (it) => Boolean(it.entry) || it.done;

// "רשימת האילן": every name on the Biblical tree poster, and which of them
// already has an entry. An entry whose tree spot sits on a name ticks it by
// itself; the admin can also tick names by hand.
const AdminChecklist = ({ adminApi }) => {
  const { call } = adminApi;
  const [items, setItems] = useState(null);
  const [error, setError] = useState('');
  const [onlyMissing, setOnlyMissing] = useState(false);
  const [busy, setBusy] = useState(null);

  const reload = useCallback(async () => {
    try {
      setItems(await call('/checklist/biblical'));
      setError('');
    } catch (err) {
      setError(err.message);
    }
  }, [call]);

  useEffect(() => {
    reload();
  }, [reload]);

  const toggle = async (it) => {
    setBusy(it._id);
    try {
      const saved = await call(`/checklist/item/${it._id}`, { method: 'PATCH', body: { done: !it.done } });
      setItems((list) => list.map((x) => (x._id === it._id ? { ...x, done: saved.done } : x)));
    } catch (err) {
      toast.error(err.message);
    } finally {
      setBusy(null);
    }
  };

  const grouped = useMemo(() => {
    const out = {};
    for (const it of items || []) {
      ((out[it.group] ||= {})[it.kind] ||= []).push(it);
    }
    for (const g of Object.values(out)) for (const k of Object.keys(g)) g[k].sort(byPlace);
    return out;
  }, [items]);

  if (error) return <p className="admin-error">{error}</p>;
  if (!items) return <p className="loading-text">טוען...</p>;

  const total = items.length;
  const doneCount = items.filter(isDone).length;
  const count = (list) => `${list.filter(isDone).length} / ${list.length}`;

  return (
    <div className="admin-checklist">
      <div className="admin-card-header">
        <h2>רשימת האילן – אילן יוחסין מאדם עד רבי</h2>
      </div>
      <p className="admin-hint">
        כל השמות שעל האילן. שם מסומן מעצמו כשיש ערך שהמיקום שלו על האילן נמצא עליו (וקישור לערך מופיע לידו),
        ואפשר גם לסמן ביד.
      </p>
      <div className="admin-checklist-summary">
        <div className="admin-checklist-bar" aria-hidden="true">
          <span style={{ width: `${(doneCount / total) * 100}%` }} />
        </div>
        <strong>{doneCount} מתוך {total}</strong>
        <label className="admin-checklist-filter">
          <input type="checkbox" checked={onlyMissing} onChange={(e) => setOnlyMissing(e.target.checked)} />
          להציג רק מה שחסר
        </label>
      </div>

      {GROUPS.filter((g) => grouped[g.key]).map((g) => {
        const all = [...(grouped[g.key].box || []), ...(grouped[g.key].name || [])];
        return (
          <section key={g.key} className="admin-checklist-group" style={{ '--group-color': CARD_COLORS[g.key]?.base }}>
            <h3>
              <span className="admin-checklist-swatch" aria-hidden="true" />
              {g.title}
              <small>{count(all)}</small>
            </h3>
            <div className="admin-checklist-kinds">
              {KINDS.filter((k) => grouped[g.key][k.key]).map((k) => {
                const list = grouped[g.key][k.key];
                const shown = onlyMissing ? list.filter((it) => !isDone(it)) : list;
                return (
                  <div key={k.key} className="admin-checklist-kind">
                    <h4>{k.title} <small>{count(list)}</small></h4>
                    {shown.length === 0 ? (
                      <p className="admin-muted">הכול מסומן ✓</p>
                    ) : (
                      <ul>
                        {shown.map((it) => (
                          <li key={it._id} className={isDone(it) ? 'is-done' : ''}>
                            <label>
                              <input
                                type="checkbox"
                                checked={isDone(it)}
                                disabled={Boolean(it.entry) || busy === it._id}
                                title={it.entry ? 'מסומן כי יש לו ערך' : undefined}
                                onChange={() => toggle(it)}
                              />
                              <span>{it.name}</span>
                            </label>
                            {it.entry && (
                              <Link to={`/encyclopedia/person/${it.entry.slug}`} className="admin-checklist-link" target="_blank">
                                {it.entry.name?.he}
                                {!it.entry.published && ' (טיוטה)'}
                              </Link>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default AdminChecklist;
