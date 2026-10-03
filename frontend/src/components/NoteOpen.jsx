import { useState } from "react";
function NoteOpen({ note, onEdit, onDelete, onClose, startEditing = false }) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(note.title);
  const [desc, setDesc] = useState(note.desc);

  const handleSave = async () => {
    if (!title.trim() || !desc.trim()) {
      alert("Title and description cannot be empty");
      return;
    }

    try {
      await onEdit(note._id, {
        title,
        desc,
      });

      setIsEditing(false);
    } catch (error) {
      console.error("Edit failed:", error);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl max-h-[90vh] flex flex-col overflow-hidden">
      <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200">
        {isEditing ? (
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="text-2xl font-bold text-gray-800 border
                       border-gray-300 rounded-lg px-3 py-2
                       focus:outline-none focus:ring-2
                       focus:ring-blue-400 w-full mr-4"
          />
        ) : (
          <h3 className="text-2xl font-bold text-gray-800 truncate pr-4">
            {note.title}
          </h3>
        )}
        <button
          type="button"
          onClick={onClose}
          className="w-9 h-9 flex items-center justify-center
                     rounded-full text-gray-500
                     hover:bg-gray-100 hover:text-gray-800
                     text-2xl transition"
          aria-label="Close"
        >
          &times;
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-8 py-8">
        {isEditing ? (
          <textarea
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className="w-full min-h-[400px] resize-y
                       border border-gray-300 rounded-lg
                       p-4 text-gray-700 leading-7
                       focus:outline-none focus:ring-2
                       focus:ring-blue-400"
          />
        ) : (
          <p className="text-gray-700 leading-7 whitespace-pre-wrap">
            {note.desc}
          </p>
        )}
      </div>

      <div className="flex justify-end gap-3 px-6 py-4 bg-gray-50 border-t border-gray-200">
        {isEditing ? (
          <>
            <button
              type="button"
              onClick={() => {
                setTitle(note.title);
                setDesc(note.desc);
                setIsEditing(false);
              }}
              className="px-4 py-2 rounded-lg bg-gray-500
                         text-white font-medium
                         hover:bg-gray-600 transition"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSave}
              className="px-4 py-2 rounded-lg bg-green-500
                         text-white font-medium
                         hover:bg-green-600 transition"
            >
              Save
            </button>
          </>
        ) : (
          <>
            <button
              type="button"
              onClick={() => setIsEditing(true)}
              className="px-4 py-2 rounded-lg bg-yellow-500
                         text-white font-medium
                         hover:bg-yellow-600 transition"
            >
              Edit
            </button>

            <button
              type="button"
              onClick={() => onDelete(note._id)}
              className="px-4 py-2 rounded-lg bg-red-500 text-white
                     font-medium hover:bg-red-600 transition"
            >
              Delete
            </button>

            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-gray-600 text-white
                     font-medium hover:bg-gray-700 transition"
            >
              Close
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default NoteOpen;
