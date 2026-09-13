function NoteTile({note, onEdit, onDelete, onClick}) {
    return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between"
      onClick={onClick}>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">
        {note.title}
      </h3>
      <p className="text-gray-600 grow mb-4 overflow-hidden">
        {note.desc}
      </p>
      <div className="flex justify-end space-x-2">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onEdit(note);}}
          className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition"
        >
          Edit
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onDelete(note._id);}}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default NoteTile