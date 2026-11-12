// Changing the order of a list in the admin: drag a row (or several chosen
// rows together) to a new place, or move the chosen rows with buttons.
import { useState } from 'react';

// The chosen rows (ids) move together, keeping their order, to just before or
// after the target row.
export const moveBlock = (list, ids, targetId, after) => {
  if (ids.has(targetId)) return list;
  const chosen = list.filter((x) => ids.has(x._id));
  const rest = list.filter((x) => !ids.has(x._id));
  let at = rest.findIndex((x) => x._id === targetId);
  if (at < 0) at = rest.length;
  else if (after) at += 1;
  return [...rest.slice(0, at), ...chosen, ...rest.slice(at)];
};

// One step up (-1) or down (+1) for every chosen row.
export const stepBlock = (list, ids, dir) => {
  const out = [...list];
  const order = dir < 0 ? [...out.keys()] : [...out.keys()].reverse();
  for (const i of order) {
    const j = i + dir;
    if (ids.has(out[i]._id) && j >= 0 && j < out.length && !ids.has(out[j]._id)) [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
};

// To the top (-1) or the bottom (+1) of the list.
export const edgeBlock = (list, ids, dir) => {
  const chosen = list.filter((x) => ids.has(x._id));
  const rest = list.filter((x) => !ids.has(x._id));
  return dir < 0 ? [...chosen, ...rest] : [...rest, ...chosen];
};

export const sameOrder = (a, b) => a.length === b.length && a.every((x, i) => x._id === b[i]._id);

// Drag and drop between rows. canDrop(draggedId, targetId) limits where a row
// may go; onMove(ids, targetId, after) is called on drop. Dragging a chosen row
// takes all the chosen rows with it.
export const useDragReorder = ({ selected, canDrop = () => true, onMove }) => {
  const [dragId, setDragId] = useState(null);
  const [over, setOver] = useState(null); // { id, after }

  const reset = () => { setDragId(null); setOver(null); };

  const rowProps = (id, disabled = false) => ({
    draggable: !disabled,
    onDragStart: (e) => {
      setDragId(id);
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('text/plain', id);
    },
    onDragOver: (e) => {
      if (!dragId || !canDrop(dragId, id)) return;
      e.preventDefault();
      const box = e.currentTarget.getBoundingClientRect();
      const after = e.clientY > box.top + box.height / 2;
      if (over?.id !== id || over?.after !== after) setOver({ id, after });
    },
    onDrop: (e) => {
      e.preventDefault();
      if (dragId && over && canDrop(dragId, over.id)) {
        const ids = selected.has(dragId) ? new Set(selected) : new Set([dragId]);
        onMove(ids, over.id, over.after);
      }
      reset();
    },
    onDragEnd: reset,
  });

  // classes for a row: being dragged, or a drop line above / below it
  const rowClass = (id) => {
    const dragging = dragId && (id === dragId || (selected.has(dragId) && selected.has(id)));
    return [
      dragging ? 'is-dragging' : '',
      over?.id === id ? (over.after ? 'drop-after' : 'drop-before') : '',
    ].join(' ');
  };

  return { rowProps, rowClass, dragging: Boolean(dragId) };
};
