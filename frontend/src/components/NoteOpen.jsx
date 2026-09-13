function NoteOpen({ note, onEdit, onDelete, onClose }) {
 return (
    <div className="bg-white rounded-lg p-6 w-full max-w-3xl h-[80vh] overflow-y-auto">
      <h3 className="text-2xl font-bold mb-4">{note.title}</h3>
      <p className="text-gray-700 mb-6">{note.desc}</p>
      <div className="flex space-x-2">
        <button
          onClick={() => onEdit(note)}
          className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(note._id)}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
        >
          Delete
        </button>
        <button
          onClick={onClose}
          className="bg-gray-500 text-white px-3 py-1 rounded hover:bg-gray-600 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default NoteOpen;
