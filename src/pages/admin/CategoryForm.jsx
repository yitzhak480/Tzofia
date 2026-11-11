import React, { useMemo, useState } from 'react';
import ImageUpload from '../../components/admin/ImageUpload';
import { SLUG_PATTERN, toSlug } from './adminApi';

const emptyCategory = { name: { he: '', en: '' }, description: { he: '', en: '' }, slug: '', parent: '', image: null };

// Add / edit form for a category. `options` is the list of possible parents
// (already without this category and its subcategories).
const CategoryForm = ({ initial, options, defaultParent = '', onSave, onCancel, upload }) => {
  const editing = Boolean(initial);
  const [form, setForm] = useState(() =>
    initial
      ? {
          name: { he: initial.name?.he || '', en: initial.name?.en || '' },
          description: { he: initial.description?.he || '', en: initial.description?.en || '' },
          slug: initial.slug,
          parent: initial.parent || '',
          image: initial.image || null,
        }
      : { ...emptyCategory, parent: defaultParent }
  );
  // New categories get their URL name from the English name until the admin edits it.
  const [slugTouched, setSlugTouched] = useState(editing);
  const [busy, setBusy] = useState(false);

  const setText = (field, lang) => (e) => {
    const value = e.target.value;
    setForm((f) => {
      const next = { ...f, [field]: { ...f[field], [lang]: value } };
      if (field === 'name' && lang === 'en' && !slugTouched) next.slug = toSlug(value);
      return next;
    });
  };

  const slugError = useMemo(() => {
    if (!form.slug) return 'חובה למלא שם לכתובת';
    if (!SLUG_PATTERN.test(form.slug)) return 'רק אותיות באנגלית (קטנות), מספרים ומקפים';
    if (form.slug === 'person') return 'השם "person" שמור למערכת';
    return '';
  }, [form.slug]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (slugError) return;
    setBusy(true);
    try {
      await onSave({ ...form, parent: form.parent || null });
    } finally {
      setBusy(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="admin-form">
      <div className="form-row">
        <div className="form-group half">
          <label>שם בעברית: *</label>
          <input value={form.name.he} onChange={setText('name', 'he')} required placeholder="למשל: מלכי יהודה" />
        </div>
        <div className="form-group half">
          <label>שם באנגלית:</label>
          <input value={form.name.en} onChange={setText('name', 'en')} dir="ltr" placeholder="e.g. Kings of Judah" />
        </div>
      </div>

      <div className="form-group">
        <label>שם לכתובת האתר (באנגלית): *</label>
        <input
          value={form.slug}
          onChange={(e) => {
            setSlugTouched(true);
            setForm((f) => ({ ...f, slug: e.target.value.toLowerCase().trim() }));
          }}
          dir="ltr"
          placeholder="kings-of-judah"
        />
        <small className={slugError ? 'admin-error' : 'admin-hint'} dir="ltr">
          {slugError || `/encyclopedia/${form.slug}`}
        </small>
        {editing && form.slug !== initial.slug && (
          <small className="admin-warning">שימו לב: קישורים ישנים לכתובת הקודמת יפסיקו לעבוד.</small>
        )}
      </div>

      <div className="form-group">
        <label>נמצאת בתוך:</label>
        <select value={form.parent} onChange={(e) => setForm((f) => ({ ...f, parent: e.target.value }))}>
          <option value="">— קטגוריה ראשית (מופיעה בעמוד הראשי של האנציקלופדיה) —</option>
          {options.map((o) => (
            <option key={o._id} value={o._id}>
              {'   '.repeat(o.depth)}
              {o.name.he}
            </option>
          ))}
        </select>
      </div>

      <div className="form-row">
        <div className="form-group half">
          <label>תיאור קצר בעברית:</label>
          <textarea rows={3} value={form.description.he} onChange={setText('description', 'he')} placeholder="מופיע על הכרטיס, מתחת לשם" />
        </div>
        <div className="form-group half">
          <label>תיאור קצר באנגלית:</label>
          <textarea rows={3} value={form.description.en} onChange={setText('description', 'en')} dir="ltr" />
        </div>
      </div>

      <ImageUpload
        label="תמונת הכרטיס:"
        value={form.image}
        onChange={(image) => setForm((f) => ({ ...f, image }))}
        upload={upload}
      />

      <div className="admin-form-actions">
        <button type="submit" className="admin-submit-btn" disabled={busy || Boolean(slugError)}>
          {busy ? 'שומר...' : editing ? 'שמירת שינויים' : 'הוספת קטגוריה'}
        </button>
        <button type="button" className="admin-btn" onClick={onCancel} disabled={busy}>
          ביטול
        </button>
      </div>
    </form>
  );
};

export default CategoryForm;
