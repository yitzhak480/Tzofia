import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import CategoryForm from './CategoryForm';
import { buildTree, descendantsOf } from './categoryTree';
import ReorderBar from './ReorderBar';
import { edgeBlock, moveBlock, sameOrder, stepBlock, useDragReorder } from './reorder';

const AdminCategories = ({ adminApi }) => {
  const { call, upload } = adminApi;
  const [categories, setCategories] = useState(null);
  const [loadError, setLoadError] = useState('');
  // null = no form open; { mode: 'new', parent } or { mode: 'edit', category }
  const [editing, setEditing] = useState(null);
  const [busyId, setBusyId] = useState(null);
  // chosen categories – all with the same parent, so they can move together
  const [selected, setSelected] = useState(() => new Set());
  const [saving, setSaving] = useState(false);

  const reload = useCallback(async () => {
    try {
      setCategories(await call('/categories'));
      setLoadError('');
    } catch (err) {
      setLoadError(err.message);
    }
  }, [call]);

  useEffect(() => {
    reload();
  }, [reload]);

  const { rows, byParent } = useMemo(() => buildTree(categories || []), [categories]);

  const parentOptions = useMemo(() => {
    if (editing?.mode !== 'edit') return rows;
    const excluded = descendantsOf(editing.category._id, byParent);
    return rows.filter((r) => !excluded.has(r._id));
  }, [rows, byParent, editing]);

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

  const siblingsOf = (parent) => byParent.get(parent || 'root') || [];

  const handleSave = async (data) => {
    try {
      if (editing.mode === 'edit') {
        const movedParent = String(editing.category.parent || '') !== String(data.parent || '');
        const body = { ...data };
        // When moved to a different parent, put it at the end there.
        if (movedParent) body.order = siblingsOf(data.parent).length + 1;
        await call(`/categories/${editing.category._id}`, { method: 'PUT', body });
        toast.success('הקטגוריה עודכנה');
      } else {
        await call('/categories', { method: 'POST', body: { ...data, order: siblingsOf(data.parent).length + 1 } });
        toast.success('הקטגוריה נוספה');
      }
      setEditing(null);
      await reload();
    } catch (err) {
      toast.error(err.message);
    }
  };

  const handleDelete = async (category) => {
    if (!window.confirm(`למחוק את הקטגוריה "${category.name.he}"?`)) return;
    setBusyId(category._id);
    try {
      await call(`/categories/${category._id}`, { method: 'DELETE' });
      toast.success('הקטגוריה נמחקה');
      await reload();
    } catch (err) {
      toast.error(err.status === 409 ? 'אי אפשר למחוק קטגוריה שיש בה דמויות או תתי-קטגוריות. העבירו או מחקו אותן קודם.' : err.message);
    } finally {
      setBusyId(null);
    }
  };

  // A new order for categories that share a parent, saved in one go.
  const saveOrder = async (siblings, list) => {
    if (sameOrder(list, siblings)) return;
    setSaving(true);
    // show it at once, then load what was saved
    const rank = new Map(list.map((c, i) => [c._id, i + 1]));
    setCategories((cs) => cs.map((c) => (rank.has(c._id) ? { ...c, order: rank.get(c._id) } : c)));
    try {
      await call('/categories/reorder', { method: 'POST', body: { ids: list.map((c) => c._id) } });
    } catch (err) {
      toast.error(err.message);
    } finally {
      await reload();
      setSaving(false);
    }
  };
  const parentOf = (id) => (categories || []).find((c) => c._id === id)?.parent || null;
  const drag = useDragReorder({
    selected,
    canDrop: (from, to) => String(parentOf(from) || '') === String(parentOf(to) || ''),
    onMove: (ids, targetId, after) => {
      const siblings = siblingsOf(parentOf(targetId));
      saveOrder(siblings, moveBlock(siblings, ids, targetId, after));
    },
  });
  // choosing a category under another parent starts a new choice
  const toggle = (c) => setSelected((old) => {
    const first = [...old][0];
    const next = first && String(parentOf(first) || '') !== String(c.parent || '') ? new Set() : new Set(old);
    if (next.has(c._id)) next.delete(c._id);
    else next.add(c._id);
    return next;
  });
  const chosenSiblings = () => siblingsOf(parentOf([...selected][0]));
  const move = (category, direction) => {
    const siblings = siblingsOf(category.parent);
    saveOrder(siblings, stepBlock(siblings, new Set([category._id]), direction));
  };

  if (loadError) {
    return (
      <div className="admin-card">
        <p className="admin-error">לא ניתן לטעון את הקטגוריות: {loadError}</p>
        <button className="admin-btn" onClick={reload}>נסו שוב</button>
      </div>
    );
  }

  if (!categories) return <p className="loading-text">טוען קטגוריות... (השרת עשוי להתעורר עד דקה)</p>;

  return (
    <>
      {editing && (
        <div className="admin-card admin-form-card" ref={formRef}>
          <h2>{editing.mode === 'edit' ? `עריכת "${editing.category.name.he}"` : 'קטגוריה חדשה'}</h2>
          <CategoryForm
            key={editing.mode === 'edit' ? editing.category._id : `new-${editing.parent}`}
            initial={editing.mode === 'edit' ? editing.category : null}
            defaultParent={editing.parent || ''}
            options={parentOptions}
            onSave={handleSave}
            onCancel={() => setEditing(null)}
            upload={upload}
            onEntryColors={async (body) => {
              try {
                const r = await call(`/categories/${editing.category._id}/entry-colors`, { method: 'POST', body });
                toast.success(`הצבע עודכן ב-${r.updated} ערכים`);
              } catch (err) {
                toast.error(err.message);
              }
            }}
          />
        </div>
      )}

      <div className="admin-card">
        <div className="admin-card-header">
          <h2>קטגוריות</h2>
          {!editing && (
            <button className="admin-submit-btn admin-add-btn" onClick={() => startEditing({ mode: 'new', parent: '' })}>
              + קטגוריה חדשה
            </button>
          )}
        </div>

        <p className="admin-hint">אפשר לגרור קטגוריה למקום אחר בין הקטגוריות שלצידה, או לסמן כמה קטגוריות (מאותה רמה) ולהזיז את כולן יחד.</p>
        <ReorderBar
          count={selected.size}
          busy={saving}
          onStep={(dir) => saveOrder(chosenSiblings(), stepBlock(chosenSiblings(), selected, dir))}
          onEdge={(dir) => saveOrder(chosenSiblings(), edgeBlock(chosenSiblings(), selected, dir))}
          onClear={() => setSelected(new Set())}
        />

        {rows.length === 0 ? (
          <p className="loading-text">עדיין אין קטגוריות.</p>
        ) : (
          <ul className="admin-tree">
            {rows.map((c) => {
              const siblings = siblingsOf(c.parent);
              const index = siblings.findIndex((s) => s._id === c._id);
              const busy = busyId === c._id || saving;
              return (
                <li
                  key={c._id}
                  className={`admin-tree-item admin-draggable ${drag.rowClass(c._id)} ${selected.has(c._id) ? 'is-selected' : ''}`}
                  style={{ marginInlineStart: `${c.depth * 2}rem` }}
                  {...drag.rowProps(c._id, saving)}
                >
                  <span className="admin-drag-handle" title="גררו כדי להזיז" aria-hidden="true">⋮⋮</span>
                  <input type="checkbox" className="admin-select-box" aria-label={`בחירת ${c.name.he}`} checked={selected.has(c._id)} onChange={() => toggle(c)} />
                  {c.image?.url ? (
                    <img src={c.image.url} alt="" className="admin-thumb" />
                  ) : (
                    <div className="admin-thumb admin-image-empty" />
                  )}
                  <div className="admin-tree-text">
                    <strong>{c.name.he}</strong>
                    {c.name.en && <span className="admin-muted"> · {c.name.en}</span>}
                    <div className="admin-muted" dir="ltr">
                      <Link to={`/encyclopedia/${c.slug}`} target="_blank">/encyclopedia/{c.slug}</Link>
                    </div>
                  </div>
                  <div className="admin-row-actions">
                    <button className="admin-icon-btn" title="הזזה למעלה" disabled={busy || index === 0} onClick={() => move(c, -1)}>▲</button>
                    <button className="admin-icon-btn" title="הזזה למטה" disabled={busy || index === siblings.length - 1} onClick={() => move(c, 1)}>▼</button>
                    <button className="admin-btn" disabled={busy} onClick={() => startEditing({ mode: 'new', parent: c._id })}>+ תת-קטגוריה</button>
                    <button className="admin-btn" disabled={busy} onClick={() => startEditing({ mode: 'edit', category: c })}>עריכה</button>
                    <button className="admin-btn admin-btn-danger" disabled={busy} onClick={() => handleDelete(c)}>מחיקה</button>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </>
  );
};

export default AdminCategories;
