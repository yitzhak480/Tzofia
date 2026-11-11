import React, { useId, useState } from 'react';

// Type a word and press Enter (or comma) to add it as a tag; × removes it.
const TagInput = ({ value, onChange, suggestions = [], placeholder = '' }) => {
  const [text, setText] = useState('');
  const listId = useId();

  const add = (raw) => {
    const tag = raw.trim().replace(/,$/, '').trim();
    if (tag && !value.includes(tag)) onChange([...value, tag]);
    setText('');
  };

  return (
    <div className="admin-tags">
      {value.map((tag) => (
        <span key={tag} className="admin-tag">
          {tag}
          <button type="button" onClick={() => onChange(value.filter((t) => t !== tag))} aria-label={`הסרת ${tag}`}>×</button>
        </span>
      ))}
      <input
        value={text}
        list={listId}
        placeholder={value.length ? '' : placeholder}
        onChange={(e) => {
          // Picking from the suggestion list adds it right away (but typing a
          // word that happens to be a suggestion, like "מלך", doesn't).
          const v = e.target.value;
          const picked = !e.nativeEvent.inputType || e.nativeEvent.inputType === 'insertReplacementText';
          if (v.endsWith(',') || (picked && suggestions.includes(v))) add(v);
          else setText(v);
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            add(text);
          } else if (e.key === 'Backspace' && !text && value.length) {
            onChange(value.slice(0, -1));
          }
        }}
        onBlur={() => text && add(text)}
      />
      <datalist id={listId}>
        {suggestions.filter((s) => !value.includes(s)).map((s) => <option key={s} value={s} />)}
      </datalist>
    </div>
  );
};

export default TagInput;
