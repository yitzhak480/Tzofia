import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import PersonForm from './PersonForm';
import { buildTree } from './categoryTree';

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

  const { rows: categoryRows } = useMemo(() => buildTree(categories), [categories]);
  const catName = useMemo(() => new Map(categories.map((c) => [c._id, c.name.he])), [categories]);

  const visible = useMemo(() => {
    let list = people || [];
    if (filterCat) list = list.filter((p) => p.categories.includes(filterCat));
    const q = search.trim().toLowerCase();
    if (q) list = list.filter((p) => p.name.he.includes(q) || (p.name.en || '').toLowerCase().includes(q));
    return list;
  }, [people, filterCat, search]);

  const openEdit = async (person) => {
    setBusyId(person._id);
    try {
      setEditing({ mode: 'edit', person: await call(`/people/admin/${person._id}`) });
      window.scrollTo({ top: 0 });
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
      else setEditing({ mode: 'new', key: Date.now() });
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

  // Reorder inside the filtered category (swap with neighbour, renumber 1..n).
  const move = async (person, direction) => {
    const index = visible.findIndex((p) => p._id === person._id);
    const target = index + direction;
    if (target < 0 || target >= visible.length) return;
    const reordered = [...visible];
    [reordered[index], reordered[target]] = [reordered[target], reordered[index]];
    setBusyId(person._id);
    try {
      await Promise.all(
        reordered
          .map((p, i) => ({ p, order: i + 1 }))
          .filter(({ p, order }) => p.order !== order)
          .map(({ p, order }) => call(`/people/${p._id}`, { method: 'PUT', body: { order } }))
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
        <p className="admin-error">לא ניתן לטעון את הערכים: {loadError}</p>
        <button className="admin-btn" onClick={reload}>נסו שוב</button>
      </div>
    );
  }
  if (!people) return <p className="loading-text">טוען... (השרת עשוי להתעורר עד דקה)</p>;

  if (editing) {
    return (
      <div className="admin-card">
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
        <h2>דמויות ומקומות <span className="admin-muted">({people.length})</span></h2>
        <button className="admin-submit-btn admin-add-btn" onClick={() => setEditing({ mode: 'new', key: Date.now() })}>
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
      {filterCat && <p className="admin-hint">אפשר לשנות את הסדר בקטגוריה הזו עם החיצים. ערך חדש יתווסף לקטגוריה הזו.</p>}

      {visible.length === 0 ? (
        <p className="loading-text">{people.length ? 'לא נמצאו ערכים.' : 'עדיין אין ערכים. לחצו על "+ ערך חדש".'}</p>
      ) : (
        <ul className="admin-tree">
          {visible.map((p, index) => {
            const busy = busyId === p._id;
            return (
              <li key={p._id} className="admin-tree-item">
                {p.mainImage?.url ? <img src={p.mainImage.url} alt="" className="admin-thumb" /> : <div className="admin-thumb admin-image-empty" />}
                <div className="admin-tree-text">
                  <strong>{p.name.he}</strong>
                  {p.kind === 'place' && <span className="admin-badge">מקום</span>}
                  {!p.published && <span className="admin-badge admin-badge-draft">טיוטה</span>}
                  {!p.autoSummary?.he && <span className="admin-badge admin-badge-empty">אין טקסט</span>}
                  <div className="admin-muted">{p.categories.map((id) => catName.get(id)).filter(Boolean).join(' · ')}</div>
                </div>
                <div className="admin-row-actions">
                  {filterCat && (
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
