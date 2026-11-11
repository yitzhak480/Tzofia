import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import CategoryForm from './CategoryForm';
import { buildTree, descendantsOf } from './categoryTree';

const AdminCategories = ({ adminApi }) => {
  const { call, upload } = adminApi;
  const [categories, setCategories] = useState(null);
  const [loadError, setLoadError] = useState('');
  // null = no form open; { mode: 'new', parent } or { mode: 'edit', category }
  const [editing, setEditing] = useState(null);
  const [busyId, setBusyId] = useState(null);

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

  // Swap a category with its neighbour among its siblings.
  const move = async (category, direction) => {
    const siblings = siblingsOf(category.parent);
    const index = siblings.findIndex((s) => s._id === category._id);
    const target = index + direction;
    if (target < 0 || target >= siblings.length) return;
    const reordered = [...siblings];
    [reordered[index], reordered[target]] = [reordered[target], reordered[index]];

    setBusyId(category._id);
    try {
      // Renumber 1, 2, 3... and save only the ones that changed.
      await Promise.all(
        reordered
          .map((s, i) => ({ s, order: i + 1 }))
          .filter(({ s, order }) => s.order !== order)
          .map(({ s, order }) => call(`/categories/${s._id}`, { method: 'PUT', body: { order } }))
      );
      await reload();
    } catch (err) {
      toast.error(err.message);
    } finally {
      setBusyId(null);
    }
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
        <div className="admin-card">
          <h2>{editing.mode === 'edit' ? `עריכת "${editing.category.name.he}"` : 'קטגוריה חדשה'}</h2>
          <CategoryForm
            key={editing.mode === 'edit' ? editing.category._id : `new-${editing.parent}`}
            initial={editing.mode === 'edit' ? editing.category : null}
            defaultParent={editing.parent || ''}
            options={parentOptions}
            onSave={handleSave}
            onCancel={() => setEditing(null)}
            upload={upload}
          />
        </div>
      )}

      <div className="admin-card">
        <div className="admin-card-header">
          <h2>קטגוריות</h2>
          {!editing && (
            <button className="admin-submit-btn admin-add-btn" onClick={() => setEditing({ mode: 'new', parent: '' })}>
              + קטגוריה חדשה
            </button>
          )}
        </div>

        {rows.length === 0 ? (
          <p className="loading-text">עדיין אין קטגוריות.</p>
        ) : (
          <ul className="admin-tree">
            {rows.map((c) => {
              const siblings = siblingsOf(c.parent);
              const index = siblings.findIndex((s) => s._id === c._id);
              const busy = busyId === c._id;
              return (
                <li key={c._id} className="admin-tree-item" style={{ marginInlineStart: `${c.depth * 2}rem` }}>
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
                    <button className="admin-btn" disabled={busy} onClick={() => setEditing({ mode: 'new', parent: c._id })}>+ תת-קטגוריה</button>
                    <button className="admin-btn" disabled={busy} onClick={() => setEditing({ mode: 'edit', category: c })}>עריכה</button>
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
