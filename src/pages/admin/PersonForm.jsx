import React, { useEffect, useMemo, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import ImageUpload from '../../components/admin/ImageUpload';
import RichTextEditor from '../../components/admin/RichTextEditor';
import TagInput from '../../components/admin/TagInput';
import { CategoryPicker, OfficesEditor, RelationsEditor, TreeSpotsEditor, YearsInput } from './PersonFormParts';
import { SLUG_PATTERN } from './adminApi';

const DRAFT_KEY = 'tzofia_new_person_draft';
const ROLE_SUGGESTIONS = ['מלך', 'נביא', 'נביאה', 'כהן גדול', 'שופט', 'תנא', 'אמורא', 'סבורא', 'גאון', 'נשיא', 'ראש ישיבה', 'אב בית דין'];

const L = (v) => ({ he: v?.he || '', en: v?.en || '' });
const yearStr = (n) => (n === null || n === undefined ? '' : String(n));
const yearNum = (s) => (String(s).trim() === '' ? null : Number(s));

// Server data -> form state (everything as plain strings for the inputs).
const toForm = (p = {}) => ({
  name: L(p.name),
  gender: p.gender || 'male',
  categories: p.categories ? p.categories.map(String) : [],
  roles: (p.roles || []).map(L),
  life: { from: yearStr(p.life?.from), to: yearStr(p.life?.to) },
  offices: (p.offices || []).map((o) => ({ label: L(o.label), from: yearStr(o.from), to: yearStr(o.to), note: L(o.note) })),
  content: L(p.content),
  summary: L(p.summary),
  mainImage: p.mainImage || null,
  relations: (p.relations || []).map((r) => ({ type: r.type, person: r.person ? String(r.person) : null, name: L(r.name) })),
  sources: (p.sources || []).join('\n'),
  treeSpots: (p.treeSpots || []).map((s) => ({ tree: s.tree, x: s.x, y: s.y })),
  wikiLink: L(p.wikiLink),
  period: L(p.period),
  slug: p.slug || '',
  published: p.published ?? true,
});

// Form state -> what the server expects.
const toBody = (f) => ({
  name: f.name,
  gender: f.gender,
  categories: f.categories,
  roles: f.roles.filter((r) => r.he.trim()),
  life: { from: yearNum(f.life.from), to: yearNum(f.life.to) },
  offices: f.offices
    .filter((o) => o.label.he.trim())
    .map((o) => ({ label: o.label, from: yearNum(o.from), to: yearNum(o.to), note: o.note })),
  content: f.content,
  summary: f.summary,
  mainImage: f.mainImage,
  relations: f.relations.filter((r) => r.person || r.name.he.trim()),
  sources: f.sources.split('\n').map((s) => s.trim()).filter(Boolean),
  treeSpots: f.treeSpots,
  wikiLink: f.wikiLink,
  period: f.period,
  slug: f.slug.trim(),
  published: f.published,
});

const readDraft = () => {
  try {
    const raw = localStorage.getItem(DRAFT_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
};
const writeDraft = (form) => {
  try {
    if (form) localStorage.setItem(DRAFT_KEY, JSON.stringify(form));
    else localStorage.removeItem(DRAFT_KEY);
  } catch {
    // no storage (private mode) - drafts just aren't kept
  }
};

const Section = ({ title, hint, children, optional = true }) => (
  <section className="admin-section">
    <h3>
      {title}
      {optional && <span className="admin-optional">לא חובה</span>}
    </h3>
    {hint && <p className="admin-hint">{hint}</p>}
    {children}
  </section>
);

const PersonForm = ({ initial, defaultCategory, categoryRows, people, upload, onSave, onClose }) => {
  const editing = Boolean(initial);
  const [form, setForm] = useState(() => {
    if (editing) return toForm(initial);
    const draft = readDraft();
    if (draft) return draft;
    return toForm({ categories: defaultCategory ? [defaultCategory] : [] });
  });
  const [restoredDraft] = useState(() => !editing && Boolean(readDraft()));
  const [showEnglish, setShowEnglish] = useState(() => Boolean(initial?.name?.en || initial?.content?.en));
  const [busy, setBusy] = useState(false);
  const savedSnapshot = useRef(JSON.stringify(editing ? toForm(initial) : toForm({ categories: defaultCategory ? [defaultCategory] : [] })));

  const dirty = JSON.stringify(form) !== savedSnapshot.current;
  const set = (patch) => setForm((f) => ({ ...f, ...patch }));
  const setL = (field, lang) => (e) => setForm((f) => ({ ...f, [field]: { ...f[field], [lang]: e.target.value } }));

  // Keep a draft of a new person, so closing the page by mistake loses nothing.
  useEffect(() => {
    if (!editing) writeDraft(dirty ? form : null);
  }, [form, dirty, editing]);

  // Warn before leaving the page with unsaved changes.
  useEffect(() => {
    if (!dirty) return undefined;
    const warn = (e) => {
      e.preventDefault();
      e.returnValue = '';
    };
    window.addEventListener('beforeunload', warn);
    return () => window.removeEventListener('beforeunload', warn);
  }, [dirty]);

  const otherPeople = useMemo(() => people.filter((p) => p._id !== initial?._id), [people, initial]);
  const slugError = form.slug && !SLUG_PATTERN.test(form.slug) ? 'רק אותיות באנגלית (קטנות), מספרים ומקפים' : '';

  const problems = [
    !form.name.he.trim() && 'שם בעברית',
    form.categories.length === 0 && 'קטגוריה אחת לפחות',
    slugError && 'כתובת תקינה',
  ].filter(Boolean);

  const save = async (andAnother) => {
    if (problems.length) {
      toast.error(`חסר: ${problems.join(', ')}`);
      return;
    }
    if (!form.content.he && form.published && !window.confirm('עדיין אין טקסט בעברית. לפרסם בכל זאת?')) return;
    setBusy(true);
    try {
      const saved = await onSave(toBody(form), { andAnother });
      if (!editing) writeDraft(null);
      if (andAnother) {
        const fresh = toForm({ categories: form.categories });
        savedSnapshot.current = JSON.stringify(fresh);
        setForm(fresh);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (saved) {
        savedSnapshot.current = JSON.stringify(form);
      }
    } catch {
      // onSave already showed the error
    } finally {
      setBusy(false);
    }
  };

  const cancel = () => {
    if (dirty && !window.confirm('יש שינויים שלא נשמרו. לצאת בלי לשמור?')) return;
    if (!editing) writeDraft(null);
    onClose();
  };

  return (
    <form className="admin-form admin-person-form" onSubmit={(e) => { e.preventDefault(); save(false); }}>
      {restoredDraft && (
        <div className="admin-notice">
          שוחזרה טיוטה שלא נשמרה.
          <button type="button" className="admin-link-btn" onClick={() => {
            const fresh = toForm({ categories: defaultCategory ? [defaultCategory] : [] });
            setForm(fresh);
            writeDraft(null);
          }}>להתחיל מחדש</button>
        </div>
      )}

      <label className="admin-english-toggle">
        <input type="checkbox" checked={showEnglish} onChange={(e) => setShowEnglish(e.target.checked)} />
        להוסיף גם טקסטים באנגלית (לאתר באנגלית)
      </label>

      <Section title="שם וקטגוריות" optional={false}>
        <div className="form-row">
          <div className="form-group half">
            <label>שם בעברית: *</label>
            <input value={form.name.he} onChange={setL('name', 'he')} placeholder="למשל: דוד המלך" autoFocus={!editing} />
          </div>
          {showEnglish && (
            <div className="form-group half">
              <label>שם באנגלית:</label>
              <input dir="ltr" value={form.name.en} onChange={setL('name', 'en')} placeholder="e.g. King David" />
            </div>
          )}
        </div>
        <div className="form-group">
          <label>מין:</label>
          <div className="admin-radio-row">
            <label><input type="radio" name="gender" checked={form.gender === 'male'} onChange={() => set({ gender: 'male' })} /> זכר</label>
            <label><input type="radio" name="gender" checked={form.gender === 'female'} onChange={() => set({ gender: 'female' })} /> נקבה</label>
          </div>
        </div>
        <div className="form-group">
          <label>קטגוריות: * <span className="admin-hint">(אפשר לסמן כמה)</span></label>
          <CategoryPicker rows={categoryRows} value={form.categories} onChange={(categories) => set({ categories })} />
        </div>
      </Section>

      <Section title="טקסט" optional={false} hint="אפשר להדביק טקסט מוורד או מוויקיפדיה. כותרות מחלקות את הטקסט לפסקאות.">
        <RichTextEditor
          value={form.content.he}
          onChange={(html) => setForm((f) => ({ ...f, content: { ...f.content, he: html } }))}
          placeholder="כתבו כאן על הדמות..."
        />
        {showEnglish && (
          <div className="form-group">
            <label>טקסט באנגלית:</label>
            <RichTextEditor
              dir="ltr"
              value={form.content.en}
              onChange={(html) => setForm((f) => ({ ...f, content: { ...f.content, en: html } }))}
              placeholder="Write about the person..."
            />
          </div>
        )}
      </Section>

      <Section title="תמונה ראשית">
        <ImageUpload label="" value={form.mainImage} onChange={(mainImage) => set({ mainImage })} upload={upload} />
      </Section>

      <Section title="פרטים" hint="יופיעו בתיבת המידע ליד הטקסט.">
        <div className="form-group">
          <label>תפקידים:</label>
          <TagInput
            value={form.roles.map((r) => r.he)}
            onChange={(list) => set({ roles: list.map((he) => form.roles.find((r) => r.he === he) || { he, en: '' }) })}
            suggestions={ROLE_SUGGESTIONS}
            placeholder="כתבו תפקיד ולחצו Enter, למשל: מלך"
          />
        </div>
        <div className="form-group">
          <label>שנות חיים:</label>
          <YearsInput value={form.life} onChange={(life) => set({ life })} />
        </div>
        <div className="form-group">
          <label>תפקיד עם שנים (מלוכה, נבואה, כהונה...):</label>
          <OfficesEditor value={form.offices} onChange={(offices) => set({ offices })} showEnglish={showEnglish} />
        </div>
      </Section>

      <Section title="משפחה, רבותיו ותלמידיו" hint="שמות של דמויות שיש להן דף בלומדות האילן יהפכו לקישורים.">
        <RelationsEditor value={form.relations} onChange={(relations) => set({ relations })} people={otherPeople} />
      </Section>

      <Section title="מקורות" hint="מקור אחד בכל שורה.">
        <textarea
          rows={4}
          value={form.sources}
          onChange={(e) => set({ sources: e.target.value })}
          placeholder={'שמואל א׳ טז\nתהילים'}
        />
      </Section>

      <Section title="באילן היוחסין שלנו" hint="סמנו איפה הדמות מופיעה באילן. בעמוד יוצגו האילן עם סימון ותצוגה מוגדלת.">
        <TreeSpotsEditor value={form.treeSpots} onChange={(treeSpots) => set({ treeSpots })} />
      </Section>

      <details className="admin-section admin-advanced">
        <summary>הגדרות נוספות</summary>
        <div className="form-group">
          <label>תקציר לכרטיס:</label>
          <textarea rows={2} value={form.summary.he} onChange={setL('summary', 'he')} placeholder="אם ריק, יוצגו השורות הראשונות של הטקסט" />
          {showEnglish && <textarea rows={2} dir="ltr" value={form.summary.en} onChange={setL('summary', 'en')} placeholder="Card summary (English)" />}
        </div>
        <div className="form-group">
          <label>שורה קצרה בכרטיס (מתחת לשם):</label>
          <input value={form.period.he} onChange={setL('period', 'he')} placeholder="אם ריק, יוצגו שנות התפקיד או שנות החיים" />
        </div>
        <div className="form-group">
          <label>קישור לוויקיפדיה:</label>
          <input dir="ltr" value={form.wikiLink.he} onChange={setL('wikiLink', 'he')} placeholder="https://he.wikipedia.org/wiki/..." />
          {showEnglish && <input dir="ltr" value={form.wikiLink.en} onChange={setL('wikiLink', 'en')} placeholder="https://en.wikipedia.org/wiki/..." />}
        </div>
        <div className="form-group">
          <label>כתובת הדף (באנגלית):</label>
          <input
            dir="ltr"
            value={form.slug}
            onChange={(e) => set({ slug: e.target.value.toLowerCase().trim() })}
            placeholder="אם ריק, תיווצר אוטומטית מהשם"
          />
          {slugError ? (
            <small className="admin-error">{slugError}</small>
          ) : (
            form.slug && <small className="admin-hint" dir="ltr">/encyclopedia/person/{form.slug}</small>
          )}
          {editing && form.slug !== initial.slug && <small className="admin-warning">שימו לב: קישורים ישנים לכתובת הקודמת יפסיקו לעבוד.</small>}
        </div>
      </details>

      <div className="admin-save-bar">
        <label className="admin-publish-toggle">
          <input type="checkbox" checked={form.published} onChange={(e) => set({ published: e.target.checked })} />
          {form.published ? 'מפורסם באתר' : 'טיוטה (לא מופיע באתר)'}
        </label>
        <div className="admin-save-buttons">
          <button type="submit" className="admin-submit-btn" disabled={busy}>
            {busy ? 'שומר...' : 'שמירה'}
          </button>
          <button type="button" className="admin-btn" disabled={busy} onClick={() => save(true)} title="שומר ופותח טופס חדש עם אותן קטגוריות">
            שמירה והוספת דמות נוספת
          </button>
          <button type="button" className="admin-btn" disabled={busy} onClick={cancel}>ביטול</button>
        </div>
      </div>
    </form>
  );
};

export default PersonForm;
