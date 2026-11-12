// Pieces of the "add / edit person" form.
import React, { useMemo, useRef, useState } from 'react';
import { RELATION_TYPES } from '../../components/encyclopedia/personFormat';
import { TreeHighlight, TreeZoom } from '../../components/encyclopedia/TreeViews';
import { TREES } from '../../data/trees';

/* ---------- categories: tick one or more; the first is the main one ---------- */

export const CategoryPicker = ({ rows, value, onChange }) => {
  const toggle = (id) => onChange(value.includes(id) ? value.filter((v) => v !== id) : [...value, id]);
  const makeMain = (id) => onChange([id, ...value.filter((v) => v !== id)]);

  return (
    <div className="admin-cat-picker">
      {rows.map((c) => {
        const checked = value.includes(c._id);
        const isMain = value[0] === c._id;
        return (
          <div key={c._id} className={`admin-cat-option ${checked ? 'is-checked' : ''}`} style={{ paddingInlineStart: `${0.6 + c.depth * 1.5}rem` }}>
            <label>
              <input type="checkbox" checked={checked} onChange={() => toggle(c._id)} />
              {c.name.he}
            </label>
            {checked && value.length > 1 && (
              isMain ? (
                <span className="admin-badge">ראשית</span>
              ) : (
                <button type="button" className="admin-link-btn" onClick={() => makeMain(c._id)}>קביעה כראשית</button>
              )
            )}
          </div>
        );
      })}
    </div>
  );
};

/* ---------- years: from / to, with the count shown live ---------- */

export const YearsInput = ({ value, onChange, label }) => {
  const n = value.from !== '' && value.to !== '' ? Number(value.to) - Number(value.from) : null;
  return (
    <div className="admin-years">
      {label && <span className="admin-years-label">{label}</span>}
      <input
        type="number"
        inputMode="numeric"
        placeholder="משנת"
        value={value.from}
        onChange={(e) => onChange({ ...value, from: e.target.value })}
        aria-label="משנת"
      />
      <span>–</span>
      <input
        type="number"
        inputMode="numeric"
        placeholder="עד שנת"
        value={value.to}
        onChange={(e) => onChange({ ...value, to: e.target.value })}
        aria-label="עד שנת"
      />
      {n !== null && n > 0 && <span className="admin-hint">({n} שנה)</span>}
    </div>
  );
};

/* ---------- offices: "שנות מלוכה 2884–2924", can have several ---------- */

const OFFICE_SUGGESTIONS = ['שנות מלוכה', 'שנות נבואה', 'שנות כהונה', 'שנות נשיאות', 'שנות שפיטה', 'ראש ישיבה'];

// A short list of names (with page suggestions), for "before" / "after".
const LinkList = ({ title, addLabel, value, onChange, people, askTeacher }) => {
  const [focusIndex, setFocusIndex] = useState(null);
  const [dismissed, setDismissed] = useState(() => new Set());
  const keyOf = (l) => l.person || l.name.he.trim();
  const update = (i, patch) => onChange(value.map((l, j) => (j === i ? { ...l, ...patch } : l)));
  const add = () => {
    onChange([...value, { person: null, name: { he: '', en: '' } }]);
    setFocusIndex(value.length);
  };
  return (
    <div className="admin-link-list">
      <span className="admin-link-list-title">{title}</span>
      {value.map((l, i) => (
        <div key={i} className="admin-link-list-row">
          <PersonNameInput relation={l} people={people} autoFocus={focusIndex === i} onChange={(patch) => update(i, patch)} onEnter={add} />
          <button type="button" className="admin-icon-btn" onClick={() => onChange(value.filter((_, j) => j !== i))} title="הסרה">×</button>
          {askTeacher && l.name.he.trim() && !askTeacher.isTeacher(l) && !dismissed.has(keyOf(l)) && (
            <div className="admin-ask">
              {`האם ${l.name.he.trim()} ${askTeacher.word}?`}
              <button type="button" className="admin-btn" onClick={() => askTeacher.add(l)}>כן, להוסיף</button>
              <button type="button" className="admin-link-btn" onClick={() => setDismissed((d) => new Set(d).add(keyOf(l)))}>לא</button>
            </div>
          )}
        </div>
      ))}
      <button type="button" className="admin-link-btn" onClick={add}>{addLabel}</button>
    </div>
  );
};

export const OfficesEditor = ({ value, onChange, showEnglish, people = [], askTeacher }) => {
  const update = (i, patch) => onChange(value.map((o, j) => (j === i ? { ...o, ...patch } : o)));
  const remove = (i) => onChange(value.filter((_, j) => j !== i));
  const add = () => onChange([...value, { label: { he: '', en: '' }, from: '', to: '', note: { he: '', en: '' }, before: [], after: [] }]);

  return (
    <div className="admin-stack">
      {value.map((o, i) => (
        <div key={i} className="admin-office-row">
          <input
            list="office-suggestions"
            placeholder="למשל: שנות מלוכה"
            value={o.label.he}
            onChange={(e) => update(i, { label: { ...o.label, he: e.target.value } })}
          />
          <YearsInput value={o} onChange={(years) => update(i, { from: years.from, to: years.to })} />
          <input
            className="admin-office-note"
            placeholder="הערה (לא חובה), למשל: 7 שנים בחברון"
            value={o.note.he}
            onChange={(e) => update(i, { note: { ...o.note, he: e.target.value } })}
          />
          {showEnglish && (
            <input
              dir="ltr"
              placeholder="English label, e.g. Reign"
              value={o.label.en}
              onChange={(e) => update(i, { label: { ...o.label, en: e.target.value } })}
            />
          )}
          <button type="button" className="admin-icon-btn" onClick={() => remove(i)} title="הסרה">×</button>
          <div className="admin-office-succession">
            <LinkList title="לפניו בתפקיד:" addLabel="+ הוספה" value={o.before || []} onChange={(before) => update(i, { before })} people={people} askTeacher={askTeacher} />
            <LinkList title="אחריו בתפקיד:" addLabel="+ הוספה" value={o.after || []} onChange={(after) => update(i, { after })} people={people} />
          </div>
        </div>
      ))}
      <datalist id="office-suggestions">
        {OFFICE_SUGGESTIONS.map((s) => <option key={s} value={s} />)}
      </datalist>
      <div>
        <button type="button" className="admin-btn" onClick={add}>+ תפקיד עם שנים</button>
      </div>
    </div>
  );
};

/* ---------- relatives, teachers, students ---------- */

// One name box with suggestions from the people already in the encyclopedia.
const PersonNameInput = ({ relation, people, onChange, onEnter, autoFocus }) => {
  const [open, setOpen] = useState(false);
  const text = relation.name.he;
  const matches = useMemo(() => {
    const q = text.trim();
    if (!q) return [];
    return people.filter((p) => p.name.he.includes(q) || (p.name.en || '').toLowerCase().includes(q.toLowerCase())).slice(0, 6);
  }, [text, people]);
  const exact = people.filter((p) => p.name.he === text.trim());
  const linked = relation.person && people.find((p) => p._id === relation.person);

  return (
    <div className="admin-person-input">
      <input
        value={text}
        autoFocus={autoFocus}
        placeholder="שם"
        onChange={(e) => {
          onChange({ person: null, name: { ...relation.name, he: e.target.value } });
          setOpen(true);
        }}
        onFocus={() => setOpen(true)}
        onBlur={() => setTimeout(() => setOpen(false), 150)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            setOpen(false);
            onEnter();
          }
        }}
      />
      {open && matches.length > 0 && !linked && (
        <ul className="admin-suggest">
          {matches.map((p) => (
            <li key={p._id}>
              <button
                type="button"
                onMouseDown={(e) => {
                  e.preventDefault();
                  onChange({ person: p._id, name: { he: p.name.he, en: p.name.en || '' } });
                  setOpen(false);
                }}
              >
                {p.name.he} <span className="admin-muted">· יש לו דף</span>
              </button>
            </li>
          ))}
        </ul>
      )}
      <span className="admin-link-status">
        {linked ? '🔗 מקושר לדף' : exact.length === 1 ? '🔗 יקושר לדף' : ''}
      </span>
    </div>
  );
};

export const RelationsEditor = ({ value, onChange, people, types }) => {
  const allowed = types ? RELATION_TYPES.filter((t) => types.includes(t.id)) : RELATION_TYPES;
  const [focusIndex, setFocusIndex] = useState(null);
  const update = (i, patch) => onChange(value.map((r, j) => (j === i ? { ...r, ...patch } : r)));
  const remove = (i) => onChange(value.filter((_, j) => j !== i));
  const add = (type, at = value.length) => {
    const next = [...value];
    next.splice(at, 0, { type, person: null, name: { he: '', en: '' } });
    onChange(next);
    setFocusIndex(at);
  };

  return (
    <div className="admin-stack">
      <div className="admin-quick-add">
        {allowed.map((t) => (
          <button key={t.id} type="button" className="admin-btn" onClick={() => add(t.id)}>+ {t.he}</button>
        ))}
      </div>
      {value.map((r, i) => (
        <div key={i} className="admin-relation-row">
          <select value={r.type} onChange={(e) => update(i, { type: e.target.value })}>
            {allowed.map((t) => <option key={t.id} value={t.id}>{t.he}</option>)}
          </select>
          <PersonNameInput
            relation={r}
            people={people}
            autoFocus={focusIndex === i}
            onChange={(patch) => update(i, { ...patch, uncertain: r.uncertain })}
            onEnter={() => add(r.type, i + 1)}
          />
          <label className="admin-uncertain" title="הקשר אינו ודאי (סימן שאלה באילן)">
            <input type="checkbox" checked={Boolean(r.uncertain)} onChange={(e) => update(i, { uncertain: e.target.checked })} />
            ?
          </label>
          <button type="button" className="admin-icon-btn" onClick={() => remove(i)} title="הסרה">×</button>
        </div>
      ))}
      {value.length > 0 && (
        <p className="admin-hint">
          טיפ: Enter אחרי שם מוסיף עוד שורה מאותו סוג. מספיק לכתוב את הקשר פעם אחת: אם תכתבו שדוד הוא אביו של שלמה,
          שלמה יופיע אוטומטית כבנו בדף של דוד.
        </p>
      )}
    </div>
  );
};

/* ---------- where the person is on our tree posters ---------- */

export const TreeSpotsEditor = ({ value, onChange }) => {
  const posterRefs = useRef({});
  const update = (i, patch) => onChange(value.map((s, j) => (j === i ? { ...s, ...patch } : s)));
  const remove = (i) => onChange(value.filter((_, j) => j !== i));
  const unused = TREES.filter((t) => !value.some((s) => s.tree === t.id));

  return (
    <div className="admin-stack">
      {value.map((s, i) => {
        const tree = TREES.find((t) => t.id === s.tree);
        if (!tree) return null;
        const pickOnPoster = (e) => {
          const box = posterRefs.current[s.tree].getBoundingClientRect();
          const round = (n) => Math.round(Math.min(100, Math.max(0, n)) * 100) / 100;
          update(i, {
            x: round(((e.clientX - box.left) / box.width) * 100),
            y: round(((e.clientY - box.top) / box.height) * 100),
          });
        };
        return (
          <div key={s.tree} className="admin-spot">
            <div className="admin-spot-head">
              <strong>{tree.name.he}</strong>
              <button type="button" className="admin-btn admin-btn-danger" onClick={() => remove(i)}>הסרת הסימון</button>
            </div>
            <div className="admin-spot-views">
              <div>
                <div className="admin-hint">1. לחצו על הדמות באילן</div>
                <div className="admin-spot-poster" ref={(el) => (posterRefs.current[s.tree] = el)} onClick={pickOnPoster}>
                  <TreeHighlight tree={tree} spot={s} />
                </div>
              </div>
              <div>
                <div className="admin-hint">2. דייקו בלחיצה על התצוגה המוגדלת</div>
                <div className="admin-spot-zoom">
                  <TreeZoom tree={tree} spot={s} onPick={(spot) => update(i, spot)} />
                </div>
              </div>
            </div>
          </div>
        );
      })}
      {unused.length > 0 && (
        <div className="admin-quick-add">
          {unused.map((t) => (
            <button key={t.id} type="button" className="admin-btn" onClick={() => onChange([...value, { tree: t.id, x: 50, y: 50 }])}>
              + סימון ב{t.name.he}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
