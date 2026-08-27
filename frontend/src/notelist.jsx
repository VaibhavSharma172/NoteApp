function NoteList({ notes, onDelete, onUpdate }) {
  const handleDelete = async (id) => {
    await fetch(`http://localhost:8000/api/notes/${id}`, {
      method: "DELETE",
    });
    onDelete();
  };

  return (
    <div className="grid gap-4">
      {notes.map((note) => (
        <div
          key={note._id}
          className="bg-white p-4 rounded shadow-md flex justify-between items-center"
        >
          <div>
            <h2 className="text-xl font-semibold">{note.title}</h2>
            <p className="text-gray-600">{note.desc}</p>
          </div>
          <button
            onClick={() => handleDelete(note._id)}
            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default NoteList;
