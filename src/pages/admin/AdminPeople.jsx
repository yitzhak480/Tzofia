import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import PersonForm from './PersonForm';
import { buildTree } from './categoryTree';
import ReorderBar from './ReorderBar';
import { edgeBlock, moveBlock, sameOrder, stepBlock, useDragReorder } from './reorder';

const AdminPeople = ({ adminApi }) => {
  const { call, upload } = adminApi;
  const [people, setPeople] = useState(null);
  const [categories, setCategories] = useState([]);
  const [loadError, setLoadError] = useState('');
  const [search, setSearch] = useState('');
  const [filterCat, setFilterCat] = useState('');
  // null = list; { mode: 'new' } or { mode: 'edit', person }
  const [editing, setEditing] = useState(null);
  const [busyId, setBusyId] = useState(null);
  // the order of the chosen category, as the site shows it: { cat, sortMode, ids }
  const [catOrder, setCatOrder] = useState(null);
  const [selected, setSelected] = useState(() => new Set());
  const [saving, setSaving] = useState(false);

  const reload = useCallback(async () => {
    try {
      const [cats, list] = await Promise.all([call('/categories'), call('/people/admin/all')]);
      setCategories(cats);
      setPeople(list);
      setLoadError('');
    } catch (err) {
      setLoadError(err.message);
    }
  }, [call]);

  useEffect(() => {
    reload();
  }, [reload]);

  const loadOrder = useCallback(async (cat) => {
    if (!cat) return setCatOrder(null);
    try {
      const r = await call(`/categories/${cat}/entry-order`);
      setCatOrder({ cat, ...r });
    } catch (err) {
      toast.error(err.message);
    }
  }, [call]);

  useEffect(() => {
    setSelected(new Set());
    loadOrder(filterCat);
  }, [filterCat, loadOrder]);

  const { rows: categoryRows } = useMemo(() => buildTree(categories), [categories]);
  const catName = useMemo(() => new Map(categories.map((c) => [c._id, c.name.he])), [categories]);

  const visible = useMemo(() => {
    let list = people || [];
    if (filterCat) {
      // the same order as on the site
      const rank = new Map((catOrder?.cat === filterCat ? catOrder.ids : []).map((id, i) => [id, i]));
      const pos = (p) => (rank.has(p._id) ? rank.get(p._id) : Infinity);
      list = list.filter((p) => p.categories.includes(filterCat)).sort((a, b) => pos(a) - pos(b));
    }
    const q = search.trim().toLowerCase();
    if (q) list = list.filter((p) => p.name.he.includes(q) || (p.name.en || '').toLowerCase().includes(q));
    return list;
  }, [people, filterCat, search, catOrder]);

  // Opening a form jumps to it; closing it goes back to where you were in the list.
  const formRef = useRef(null);
  const listY = useRef(null);
  const pageY = () => document.scrollingElement?.scrollTop || window.scrollY || 0;
  useEffect(() => {
    if (editing) {
      formRef.current?.scrollIntoView({ block: 'start' });
    } else if (listY.current != null) {
      const y = listY.current;
      listY.current = null;
      window.scrollTo({ top: y, behavior: 'instant' });
      if (document.scrollingElement) document.scrollingElement.scrollTop = y;
    }
  }, [editing]);
  const startEditing = (value) => {
    if (!editing) listY.current = pageY();
    setEditing(value);
  };

  const openEdit = async (person) => {
    setBusyId(person._id);
    try {
      const full = await call(`/people/admin/${person._id}`);
      startEditing({ mode: 'edit', person: full });
    } catch (err) {
      toast.error(err.message);
    } finally {
      setBusyId(null);
    }
  };

  const handleSave = async (body, { andAnother }) => {
    try {
      let saved;
      if (editing.mode === 'edit') {
        saved = await call(`/people/${editing.person._id}`, { method: 'PUT', body });
      } else {
        saved = await call('/people', { method: 'POST', body });
      }
      toast.success(
        <span>
          {`"${saved.name.he}" נשמר. `}
          {saved.published && <a href={`/encyclopedia/person/${saved.slug}`} target="_blank" rel="noreferrer">צפייה בדף</a>}
        </span>
      );
      await reload();
      if (!andAnother) setEditing(null);
      else startEditing({ mode: 'new', key: Date.now() });
      return saved;
    } catch (err) {
      toast.error(err.status === 409 ? 'כתובת הדף כבר בשימוש. שנו אותה ב"הגדרות נוספות".' : err.message);
      throw err;
    }
  };

  const handleDelete = async (person) => {
    if (!window.confirm(`למחוק את "${person.name.he}"? אי אפשר לבטל את זה.`)) return;
    setBusyId(person._id);
    try {
      await call(`/people/${person._id}`, { method: 'DELETE' });
      toast.success('נמחק');
      await reload();
    } catch (err) {
      toast.error(err.message);
    } finally {
      setBusyId(null);
    }
  };

  // Reorder inside the chosen category: all of it is saved in one go.
  const canReorder = Boolean(filterCat) && !search.trim();
  const saveOrder = async (list) => {
    if (sameOrder(list, visible)) return;
    const ids = list.map((p) => p._id);
    setCatOrder((o) => ({ ...o, ids }));
    setSaving(true);
    try {
      const r = await call(`/categories/${filterCat}/reorder-entries`, { method: 'POST', body: { ids } });
      if (r.switchedToManual) {
        toast.success('הסדר נשמר. הקטגוריה עברה לסדר ידני (במקום לפי השנים) כדי שהסדר הזה יופיע באתר.');
        setCategories((cs) => cs.map((c) => (c._id === filterCat ? { ...c, sortMode: 'manual' } : c)));
      }
    } catch (err) {
      toast.error(err.message);
      await loadOrder(filterCat);
    } finally {
      setSaving(false);
    }
  };
  const drag = useDragReorder({
    selected,
    onMove: (ids, targetId, after) => saveOrder(moveBlock(visible, ids, targetId, after)),
  });
  const toggle = (id) => setSelected((old) => {
    const next = new Set(old);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    return next;
  });
  const move = (person, direction) => saveOrder(stepBlock(visible, new Set([person._id]), direction));
  const chosenCategory = categories.find((c) => c._id === filterCat);

  if (loadError) {
    return (
      <div className="admin-card">
        <p className="admin-error">לא ניתן לטעון את הערכים: {loadError}</p>
        <button className="admin-btn" onClick={reload}>נסו שוב</button>
      </div>
    );
  }
  if (!people) return <p className="loading-text">טוען... (השרת עשוי להתעורר עד דקה)</p>;

  if (editing) {
    return (
      <div className="admin-card admin-form-card" ref={formRef}>
        <h2>{editing.mode === 'edit' ? `עריכת "${editing.person.name.he}"` : 'ערך חדש'}</h2>
        {categories.length === 0 ? (
          <p className="admin-error">כדי להוסיף ערך צריך קודם ליצור קטגוריה (בלשונית "קטגוריות").</p>
        ) : (
          <PersonForm
            key={editing.mode === 'edit' ? editing.person._id : `new-${editing.key || ''}`}
            initial={editing.mode === 'edit' ? editing.person : null}
            defaultCategory={filterCat}
            categoryRows={categoryRows}
            people={people}
            upload={upload}
            onSave={handleSave}
            onClose={() => setEditing(null)}
          />
        )}
      </div>
    );
  }

  return (
    <div className="admin-card">
      <div className="admin-card-header">
        <h2>ערכים <span className="admin-muted">({people.length})</span></h2>
        <button className="admin-submit-btn admin-add-btn" onClick={() => startEditing({ mode: 'new', key: Date.now() })}>
          + ערך חדש
        </button>
      </div>

      <div className="admin-filters">
        <input
          type="search"
          placeholder="חיפוש לפי שם..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select value={filterCat} onChange={(e) => setFilterCat(e.target.value)}>
          <option value="">כל הקטגוריות</option>
          {categoryRows.map((c) => (
            <option key={c._id} value={c._id}>{'   '.repeat(c.depth)}{c.name.he}</option>
          ))}
        </select>
      </div>
      {filterCat && (
        <p className="admin-hint">
          {canReorder
            ? 'אפשר לשנות את הסדר: לגרור ערך למקום אחר, או לסמן כמה ערכים בתיבות ולהזיז את כולם יחד. ערך חדש יתווסף לקטגוריה הזו.'
            : 'כדי לשנות את הסדר, ניקו את החיפוש.'}
          {canReorder && chosenCategory && chosenCategory.sortMode !== 'manual' && (
            <> {chosenCategory.sortMode === 'alpha' ? 'הקטגוריה ממוינת עכשיו לפי האלף-בית' : 'הקטגוריה ממוינת עכשיו לפי השנים'}; שינוי הסדר יעביר אותה לסדר ידני.</>
          )}
        </p>
      )}
      {canReorder && (
        <ReorderBar
          count={selected.size}
          busy={saving}
          onStep={(dir) => saveOrder(stepBlock(visible, selected, dir))}
          onEdge={(dir) => saveOrder(edgeBlock(visible, selected, dir))}
          onClear={() => setSelected(new Set())}
        />
      )}

      {visible.length === 0 ? (
        <p className="loading-text">{people.length ? 'לא נמצאו ערכים.' : 'עדיין אין ערכים. לחצו על "+ ערך חדש".'}</p>
      ) : (
        <ul className="admin-tree">
          {visible.map((p, index) => {
            const busy = busyId === p._id || saving;
            return (
              <li
                key={p._id}
                className={`admin-tree-item ${canReorder ? `admin-draggable ${drag.rowClass(p._id)}` : ''} ${selected.has(p._id) ? 'is-selected' : ''}`}
                {...(canReorder ? drag.rowProps(p._id, saving) : {})}
              >
                {canReorder && (
                  <>
                    <span className="admin-drag-handle" title="גררו כדי להזיז" aria-hidden="true">⋮⋮</span>
                    <input type="checkbox" className="admin-select-box" aria-label={`בחירת ${p.name.he}`} checked={selected.has(p._id)} onChange={() => toggle(p._id)} />
                  </>
                )}
                {p.mainImage?.url ? <img src={p.mainImage.url} alt="" className="admin-thumb" /> : <div className="admin-thumb admin-image-empty" />}
                <div className="admin-tree-text">
                  <strong>{p.name.he}</strong>
                  {p.kind && p.kind !== 'person' && <span className="admin-badge">ערך כללי</span>}
                  {!p.published && <span className="admin-badge admin-badge-draft">טיוטה</span>}
                  {!p.autoSummary?.he && <span className="admin-badge admin-badge-empty">אין טקסט</span>}
                  <div className="admin-muted">{p.categories.map((id) => catName.get(id)).filter(Boolean).join(' · ')}</div>
                </div>
                <div className="admin-row-actions">
                  {canReorder && (
                    <>
                      <button className="admin-icon-btn" title="הזזה למעלה" disabled={busy || index === 0} onClick={() => move(p, -1)}>▲</button>
                      <button className="admin-icon-btn" title="הזזה למטה" disabled={busy || index === visible.length - 1} onClick={() => move(p, 1)}>▼</button>
                    </>
                  )}
                  {p.published && (
                    <Link className="admin-btn" to={`/encyclopedia/person/${p.slug}`} target="_blank">צפייה</Link>
                  )}
                  <button className="admin-btn" disabled={busy} onClick={() => openEdit(p)}>עריכה</button>
                  <button className="admin-btn admin-btn-danger" disabled={busy} onClick={() => handleDelete(p)}>מחיקה</button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default AdminPeople;
