import React, { useEffect } from 'react';
import { EditorContent, useEditor, useEditorState } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

// A simple word-processor box: headings, bold, lists, quotes and links.
// Text pasted from Word or Wikipedia keeps its paragraphs and headings.
const RichTextEditor = ({ value, onChange, dir = 'rtl', placeholder = '' }) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: { levels: [2, 3] },
        link: { openOnClick: false, autolink: true, defaultProtocol: 'https' },
        code: false,
        codeBlock: false,
      }),
    ],
    content: value || '',
    editorProps: { attributes: { class: 'encyc-content admin-rte-content', dir } },
    onUpdate: ({ editor: ed }) => onChange(ed.isEmpty ? '' : ed.getHTML()),
  });

  // When the form is reset or another person is loaded, show the new text.
  useEffect(() => {
    if (!editor) return;
    const current = editor.isEmpty ? '' : editor.getHTML();
    if ((value || '') !== current) editor.commands.setContent(value || '', { emitUpdate: false });
  }, [editor, value]);

  const state = useEditorState({
    editor,
    selector: ({ editor: ed }) =>
      ed
        ? {
            h2: ed.isActive('heading', { level: 2 }),
            h3: ed.isActive('heading', { level: 3 }),
            bold: ed.isActive('bold'),
            italic: ed.isActive('italic'),
            bullet: ed.isActive('bulletList'),
            ordered: ed.isActive('orderedList'),
            quote: ed.isActive('blockquote'),
            link: ed.isActive('link'),
            empty: ed.isEmpty,
          }
        : {},
  });

  if (!editor) return null;

  const run = (fn) => (e) => {
    e.preventDefault();
    fn(editor.chain().focus()).run();
  };

  const setLink = (e) => {
    e.preventDefault();
    const previous = editor.getAttributes('link').href || '';
    const url = window.prompt('כתובת הקישור (השאירו ריק כדי להסיר):', previous);
    if (url === null) return;
    const chain = editor.chain().focus().extendMarkRange('link');
    if (url.trim() === '') chain.unsetLink().run();
    else chain.setLink({ href: url.trim() }).run();
  };

  const buttons = [
    { label: 'כותרת', title: 'כותרת לפסקה', active: state.h2, onClick: run((c) => c.toggleHeading({ level: 2 })) },
    { label: 'כותרת משנה', title: 'כותרת קטנה', active: state.h3, onClick: run((c) => c.toggleHeading({ level: 3 })) },
    { label: <b>B</b>, title: 'מודגש', active: state.bold, onClick: run((c) => c.toggleBold()) },
    { label: <i>I</i>, title: 'נטוי', active: state.italic, onClick: run((c) => c.toggleItalic()) },
    { label: '• רשימה', title: 'רשימה', active: state.bullet, onClick: run((c) => c.toggleBulletList()) },
    { label: '1. רשימה', title: 'רשימה ממוספרת', active: state.ordered, onClick: run((c) => c.toggleOrderedList()) },
    { label: '❝ ציטוט', title: 'ציטוט', active: state.quote, onClick: run((c) => c.toggleBlockquote()) },
    { label: '🔗 קישור', title: 'קישור', active: state.link, onClick: setLink },
    { label: '↶', title: 'ביטול פעולה', onClick: run((c) => c.undo()) },
    { label: '↷', title: 'חזרה על פעולה', onClick: run((c) => c.redo()) },
  ];

  return (
    <div className="admin-rte">
      <div className="admin-rte-toolbar" role="toolbar">
        {buttons.map((b) => (
          <button
            key={b.title}
            type="button"
            title={b.title}
            className={`admin-rte-btn ${b.active ? 'is-active' : ''}`}
            onMouseDown={b.onClick}
          >
            {b.label}
          </button>
        ))}
      </div>
      <div className="admin-rte-body">
        {state.empty && placeholder && <div className="admin-rte-placeholder">{placeholder}</div>}
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

export default RichTextEditor;
