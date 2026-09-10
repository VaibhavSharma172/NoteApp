function NoteOpen() {
  return (
    <div>
      <h3>{note.title}</h3>
      <p>{note.desc}</p>
      <div>
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
      </div>
    </div>
  );
}

export default NoteOpen
