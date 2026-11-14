import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

// "טבלת האמוראים": every entry under the Amoraim, with its teachers, parents,
// siblings, wives, roles (with years) and who held each role before – to check
// that nothing on the poster was missed. Students and "after" are left out on
// purpose: they are the same links seen from the other side.

// the content files are numbered by generation (100 places for each)
const GENERATIONS = ['התנאים האחרונים, דור המעבר ודור א׳', 'דור ב׳', 'דור ג׳', 'דור ד׳', 'דור ה׳', 'דור ו׳', 'דור ז׳', 'דור ח׳ – אחרוני האמוראים'];
const genOf = (row) => Math.min(Math.floor(row.order / 100), GENERATIONS.length - 1);
const years = (o) => (o.from || o.to ? `${o.from ?? '?'}–${o.to ?? '?'}` : '');

const Names = ({ list, empty = '—' }) =>
  list?.length ? (
    <ul className="atable-names">
      {list.map((p, i) => (
        <li key={i}>
          {p.slug ? (
            <Link to={`/encyclopedia/person/${p.slug}`} target="_blank" rel="noreferrer">{p.name}</Link>
          ) : (
            <span className="atable-plain" title="שם בלבד – אין לו עדיין דף">{p.name}</span>
          )}
          {p.type === 'mother' && <small> (אם)</small>}
          {p.muvhak && <span className="atable-badge">מובהק</span>}
          {p.uncertain && <span className="atable-q" title="הקשר אינו ודאי">?</span>}
        </li>
      ))}
    </ul>
  ) : (
    <span className="atable-empty">{empty}</span>
  );

const AdminAmoraimTable = ({ adminApi }) => {
  const { call } = adminApi;
  const [rows, setRows] = useState(null);
  const [error, setError] = useState('');
  const [query, setQuery] = useState('');
  const [gen, setGen] = useState('all');
  const [noTeacher, setNoTeacher] = useState(false);

  useEffect(() => {
    call('/tables/amoraim').then(setRows).catch((err) => setError(err.message));
  }, [call]);

  const shown = useMemo(() => {
    const q = query.trim();
    return (rows || []).filter((r) =>
      (gen === 'all' || String(genOf(r)) === gen)
      && (!noTeacher || r.teachers.length === 0)
      && (!q || r.name.includes(q) || [...r.teachers, ...r.parents, ...r.siblings, ...r.spouses].some((p) => p.name.includes(q))));
  }, [rows, query, gen, noTeacher]);

  if (error) return <p className="admin-error">{error}</p>;
  if (!rows) return <p className="admin-hint">טוען…</p>;

  // a header row before each generation
  let lastGen = null;
  return (
    <section className="atable-wrap">
      <div className="atable-tools admin-filters">
        <h2>טבלת האמוראים <small>({shown.length} מתוך {rows.length})</small></h2>
        <input placeholder="חיפוש שם…" value={query} onChange={(e) => setQuery(e.target.value)} />
        <select value={gen} onChange={(e) => setGen(e.target.value)}>
          <option value="all">כל הדורות</option>
          {GENERATIONS.map((g, i) => <option key={g} value={String(i)}>{g}</option>)}
        </select>
        <label className="atable-check">
          <input type="checkbox" checked={noTeacher} onChange={(e) => setNoTeacher(e.target.checked)} /> רק בלי רבותיו
        </label>
      </div>
      <p className="admin-hint">
        הטבלה כוללת גם קשרים שנכתבו רק בדף של האדם השני. שם בצבע אפור הוא שם בלבד (עוד אין לו דף); "?" – קשר בסימן שאלה; "מובהק" – תלמיד מובהק.
      </p>
      <div className="atable-scroll">
        <table className="atable">
          <thead>
            <tr>
              <th>#</th>
              <th>שם</th>
              <th>ישיבה / מקום</th>
              <th>רבותיו</th>
              <th>הורים</th>
              <th>אחים ואחיות</th>
              <th>נשים / בעלים</th>
              <th>תפקידים ושנים</th>
              <th>לפניו בתפקיד</th>
            </tr>
          </thead>
          <tbody>
            {shown.map((r, i) => {
              const g = genOf(r);
              const header = g !== lastGen;
              lastGen = g;
              return (
                <React.Fragment key={r.slug}>
                  {header && (
                    <tr className="atable-gen"><td colSpan={9}>{GENERATIONS[g]}</td></tr>
                  )}
                  <tr className={r.published ? '' : 'is-hidden'}>
                    <td className="atable-num">{i + 1}</td>
                    <td className="atable-name">
                      <Link to={`/encyclopedia/person/${r.slug}`} target="_blank" rel="noreferrer">{r.name}</Link>
                      {r.generation && <small>{r.generation}</small>}
                    </td>
                    <td>{r.places.join(', ') || '—'}</td>
                    <td className={r.teachers.length || !r.generation ? '' : 'is-missing'}><Names list={r.teachers} /></td>
                    <td><Names list={r.parents} /></td>
                    <td><Names list={r.siblings} /></td>
                    <td><Names list={r.spouses} /></td>
                    <td>
                      {r.offices.length || r.roles.length ? (
                        <ul className="atable-names">
                          {r.offices.map((o, k) => <li key={`o${k}`}><b>{o.label}</b>{years(o) && <span className="atable-years">{years(o)}</span>}</li>)}
                          {r.roles.filter((x) => !r.offices.some((o) => o.label === x)).map((x, k) => <li key={`r${k}`}>{x}</li>)}
                        </ul>
                      ) : '—'}
                    </td>
                    <td>
                      {r.offices.some((o) => o.before.length) ? (
                        r.offices.filter((o) => o.before.length).map((o, k) => (
                          <div key={k} className="atable-before">
                            {r.offices.length > 1 && <small>{o.label}:</small>}
                            <Names list={o.before} />
                          </div>
                        ))
                      ) : '—'}
                    </td>
                  </tr>
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AdminAmoraimTable;
