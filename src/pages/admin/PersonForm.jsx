import React, { useEffect, useMemo, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import ImageUpload from '../../components/admin/ImageUpload';
import RichTextEditor from '../../components/admin/RichTextEditor';
import TagInput from '../../components/admin/TagInput';
import { CategoryPicker, OfficesEditor, RelationsEditor, TreeSpotsEditor, YearsInput } from './PersonFormParts';
import { SLUG_PATTERN } from './adminApi';
import ColorPicker from '../../components/admin/ColorPicker';
import { entryColor } from '../../components/encyclopedia/cardColors';

const DRAFT_KEY = 'tzofia_new_person_draft';
const PLACE_SUGGESTIONS = ['עיר', 'מקום', 'בית מקדש', 'כלי המקדש', 'ספר', 'אירוע', 'שבט', 'הר', 'נהר', 'ארץ', 'ישיבה', 'בית כנסת', 'מערה', 'מדבר', 'מסכת', 'חפץ'];
const ROLE_SUGGESTIONS = ['מלך', 'נביא', 'נביאה', 'כהן גדול', 'שופט', 'נשיא', 'ראש ישיבה', 'אב בית דין'];
const TITLE_SUGGESTIONS = ['תנא', 'אמורא', 'סבורא', 'גאון', 'ראשון', 'אחרון'];

const L = (v) => ({ he: v?.he || '', en: v?.en || '' });
const yearStr = (n) => (n === null || n === undefined ? '' : String(n));
const yearNum = (s) => (String(s).trim() === '' ? null : Number(s));

// Server data -> form state (everything as plain strings for the inputs).
const toForm = (p = {}) => ({
  kind: p.kind || 'person',
  name: L(p.name),
  gender: p.gender || 'male',
  categories: p.categories ? p.categories.map(String) : [],
  titles: (p.titles || []).map(L),
  roles: (p.roles || []).map(L),
  life: { from: yearStr(p.life?.from), to: yearStr(p.life?.to) },
  offices: (p.offices || []).map((o) => ({
    label: L(o.label), from: yearStr(o.from), to: yearStr(o.to), note: L(o.note),
    before: (o.before || []).map((l) => ({ person: l.person ? String(l.person) : null, name: L(l.name) })),
    after: (o.after || []).map((l) => ({ person: l.person ? String(l.person) : null, name: L(l.name) })),
  })),
  content: L(p.content),
  summary: L(p.summary),
  mainImage: p.mainImage || null,
  relations: (p.relations || []).map((r) => ({ type: r.type, person: r.person ? String(r.person) : null, name: L(r.name), uncertain: Boolean(r.uncertain), muvhak: Boolean(r.muvhak) })),
  sources: (p.sources || []).join('\n'),
  sourcesEn: (p.sourcesEn || []).join('\n'),
  treeSpots: (p.treeSpots || []).map((s) => ({ tree: s.tree, x: s.x, y: s.y })),
  period: L(p.period),
  slug: p.slug || '',
  published: p.published ?? true,
  cardColor: p.cardColor || '',
});

// Form state -> what the server expects.
const toBody = (f) => ({
  kind: f.kind,
  name: f.name,
  gender: f.gender,
  categories: f.categories,
  titles: f.titles.filter((r) => r.he.trim()),
  roles: f.roles.filter((r) => r.he.trim()),
  life: { from: yearNum(f.life.from), to: yearNum(f.life.to) },
  offices: f.offices
    .filter((o) => o.label.he.trim())
    .map((o) => ({
      label: o.label, from: yearNum(o.from), to: yearNum(o.to), note: o.note,
      before: (o.before || []).filter((l) => l.person || l.name.he.trim()),
      after: (o.after || []).filter((l) => l.person || l.name.he.trim()),
    })),
  content: f.content,
  summary: f.summary,
  mainImage: f.mainImage,
  relations: f.relations.filter((r) => r.person || r.name.he.trim()),
  sources: f.sources.split('\n').map((s) => s.trim()).filter(Boolean),
  sourcesEn: f.sourcesEn.split('\n').map((s) => s.trim()).filter(Boolean),
  treeSpots: f.treeSpots,
  period: f.period,
  slug: f.slug.trim(),
  published: f.published,
  cardColor: f.cardColor,
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
  const isPlace = form.kind !== 'person'; // anything that isn't a person
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
        <div className="form-group">
          <label>סוג הערך:</label>
          <div className="admin-radio-row">
            <label><input type="radio" name="kind" checked={!isPlace} onChange={() => set({ kind: 'person' })} /> דמות</label>
            <label><input type="radio" name="kind" checked={isPlace} onChange={() => set({ kind: 'other' })} /> ערך אחר (מקום, ספר, כלי, אירוע, שבט...)</label>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group half">
            <label>שם בעברית: *</label>
            <input value={form.name.he} onChange={setL('name', 'he')} placeholder={isPlace ? 'למשל: ירושלים, ארון הברית, ספר תהילים' : 'למשל: דוד המלך'} autoFocus={!editing} />
          </div>
          {showEnglish && (
            <div className="form-group half">
              <label>שם באנגלית:</label>
              <input dir="ltr" value={form.name.en} onChange={setL('name', 'en')} placeholder="e.g. King David" />
            </div>
          )}
        </div>
        {!isPlace && <div className="form-group">
          <label>מין:</label>
          <div className="admin-radio-row">
            <label><input type="radio" name="gender" checked={form.gender === 'male'} onChange={() => set({ gender: 'male' })} /> זכר</label>
            <label><input type="radio" name="gender" checked={form.gender === 'female'} onChange={() => set({ gender: 'female' })} /> נקבה</label>
          </div>
        </div>}
        <div className="form-group">
          <label>קטגוריות: * <span className="admin-hint">(אפשר לסמן כמה)</span></label>
          <CategoryPicker rows={categoryRows} value={form.categories} onChange={(categories) => set({ categories })} />
        </div>
      </Section>

      <Section title="טקסט" optional={false} hint="אפשר להדביק טקסט מוורד או מוויקיפדיה. כותרות מחלקות את הטקסט לפסקאות.">
        <RichTextEditor
          value={form.content.he}
          onChange={(html) => setForm((f) => ({ ...f, content: { ...f.content, he: html } }))}
          placeholder={isPlace ? 'כתבו כאן על הערך...' : 'כתבו כאן על הדמות...'}
        />
        {showEnglish && (
          <div className="form-group">
            <label>טקסט באנגלית:</label>
            <RichTextEditor
              dir="ltr"
              value={form.content.en}
              onChange={(html) => setForm((f) => ({ ...f, content: { ...f.content, en: html } }))}
              placeholder={isPlace ? 'Write about this entry...' : 'Write about the person...'}
            />
          </div>
        )}
      </Section>

      <Section title="תמונה ראשית">
        <ImageUpload label="" value={form.mainImage} onChange={(mainImage) => set({ mainImage })} upload={upload} />
        {!form.mainImage && (
          <div className="form-group">
            <label>צבע הכרטיס כשאין תמונה:</label>
            <ColorPicker
              value={form.cardColor}
              onChange={(cardColor) => set({ cardColor })}
              autoColor={entryColor({ slug: form.slug || form.name.he })}
              autoLabel="אוטומטי"
            />
          </div>
        )}
      </Section>

      <Section title="פרטים" hint="יופיעו בתיבת המידע ליד הטקסט.">
        {!isPlace && (
          <div className="form-group">
            <label>תואר: <span className="admin-hint">(תנא, אמורא, גאון... מופיע מתחת לשם, לא כתפקיד)</span></label>
            <TagInput
              value={form.titles.map((r) => r.he)}
              onChange={(list) => set({ titles: list.map((he) => form.titles.find((r) => r.he === he) || { he, en: '' }) })}
              suggestions={TITLE_SUGGESTIONS}
              placeholder="למשל: אמורא"
            />
          </div>
        )}
        <div className="form-group">
          <label>{isPlace ? 'סוג (מקום, ספר, כלי, אירוע...):' : 'תפקידים:'}</label>
          <TagInput
            value={form.roles.map((r) => r.he)}
            onChange={(list) => set({ roles: list.map((he) => form.roles.find((r) => r.he === he) || { he, en: '' }) })}
            suggestions={isPlace ? PLACE_SUGGESTIONS : ROLE_SUGGESTIONS}
            placeholder={isPlace ? 'כתבו ולחצו Enter, למשל: ספר' : 'כתבו תפקיד ולחצו Enter, למשל: מלך'}
          />
        </div>
        <div className="form-group">
          <label>{isPlace ? 'תקופה (משנת – עד שנת):' : 'שנות חיים:'}</label>
          <YearsInput value={form.life} onChange={(life) => set({ life })} />
        </div>
        {!isPlace && (
          <div className="form-group">
            <label>תפקיד עם שנים (מלוכה, נבואה, כהונה...):</label>
            <OfficesEditor
              value={form.offices}
              onChange={(offices) => set({ offices })}
              showEnglish={showEnglish}
              people={otherPeople}
              // The "was he also the teacher?" question is shown only for men.
              askTeacher={form.gender === 'female' ? undefined : {
                word: 'היה גם רבו',
                isTeacher: (l) =>
                  form.relations.some(
                    (r) => r.type === 'teacher' && (l.person ? r.person === l.person : r.name.he.trim() === l.name.he.trim())
                  ),
                add: (l) =>
                  set({ relations: [...form.relations, { type: 'teacher', person: l.person || null, name: { he: l.name.he, en: l.name.en || '' } }] }),
              }}
            />
          </div>
        )}
      </Section>

      <Section
        title={isPlace ? 'ערכים קשורים' : 'משפחה, רבותיו ותלמידיו'}
        hint={isPlace ? 'דמויות וערכים אחרים שקשורים לערך הזה. שמות שיש להם דף בלומדות האילן יהפכו לקישורים.' : 'שמות של דמויות שיש להן דף בלומדות האילן יהפכו לקישורים. "ערך קשור" מתאים למשל למקום שקשור לדמות.'}
      >
        <RelationsEditor
          value={form.relations}
          onChange={(relations) => set({ relations })}
          people={otherPeople}
          types={isPlace ? ['related'] : undefined}
        />
      </Section>

      <Section title="מקורות" hint="מקור אחד בכל שורה.">
        <textarea
          rows={4}
          value={form.sources}
          onChange={(e) => set({ sources: e.target.value })}
          placeholder={'שמואל א׳ טז\nתהילים'}
        />
        {showEnglish && (
          <textarea
            rows={4}
            dir="ltr"
            value={form.sourcesEn}
            onChange={(e) => set({ sourcesEn: e.target.value })}
            placeholder={'Sources in English, one per line\nI Samuel 16\nPsalms'}
          />
        )}
      </Section>

      <Section title="באילן היוחסין שלנו" hint="סמנו איפה הערך מופיע באילן. בעמוד יוצגו האילן עם סימון ותצוגה מוגדלת.">
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
            שמירה והוספת ערך נוסף
          </button>
          <button type="button" className="admin-btn" disabled={busy} onClick={cancel}>ביטול</button>
        </div>
      </div>
    </form>
  );
};

export default PersonForm;
