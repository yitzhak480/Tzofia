import React, { useRef, useState } from 'react';
import toast from 'react-hot-toast';

const MAX_MB = 10;

// Picks a picture from the computer, uploads it to the server (Cloudinary)
// and reports back { url, publicId }. Shows a preview and a remove button.
const ImageUpload = ({ value, onChange, upload, label = 'תמונה' }) => {
  const inputRef = useRef(null);
  const [busy, setBusy] = useState(false);

  const handleFile = async (e) => {
    const file = e.target.files?.[0];
    e.target.value = ''; // allow choosing the same file again
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      toast.error('אפשר להעלות רק קבצי תמונה');
      return;
    }
    if (file.size > MAX_MB * 1024 * 1024) {
      toast.error(`התמונה גדולה מ-${MAX_MB}MB`);
      return;
    }
    setBusy(true);
    try {
      const uploaded = await upload(file);
      onChange({ url: uploaded.url, publicId: uploaded.publicId });
    } catch (err) {
      toast.error(
        err.message.includes('Cloudinary')
          ? 'העלאת התמונה נכשלה: חסרות הגדרות Cloudinary בשרת (ב-Render)'
          : `העלאת התמונה נכשלה: ${err.message}`
      );
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="form-group">
      <label>{label}</label>
      <div className="admin-image-upload">
        {value?.url ? (
          <img src={value.url} alt="" className="admin-image-preview" />
        ) : (
          <div className="admin-image-preview admin-image-empty">אין תמונה</div>
        )}
        <div className="admin-image-actions">
          <button type="button" className="admin-btn" onClick={() => inputRef.current?.click()} disabled={busy}>
            {busy ? 'מעלה...' : value?.url ? 'החלפת תמונה' : 'העלאת תמונה'}
          </button>
          {value?.url && !busy && (
            <button type="button" className="admin-btn admin-btn-danger" onClick={() => onChange(null)}>
              הסרת תמונה
            </button>
          )}
        </div>
        <input ref={inputRef} type="file" accept="image/*" hidden onChange={handleFile} />
      </div>
    </div>
  );
};

export default ImageUpload;
