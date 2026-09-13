import { useEffect, useState } from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import NoteTile from "../components/NoteTile.jsx";
import NoteOpen from "../components/noteOpen.jsx";

function Home() {
  const [notes, setNotes] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectNote, setSelectNote] = useState(null);

  const fetchNotes = async () => {
    const res = await fetch("http://localhost:3000/note/getNotes");
    const data = await res.json();
    setNotes(data.notes || []);
  };
  useEffect(() => {
    fetchNotes();
  }, []);

  const handleEdit = (note) => {
    console.log("Edit note:", note);
    // edit here
  };

  const handleDelete = async (id) => {
    await fetch(`http://localhost:3000/notes/${id}`, {
      method: "DELETE",
    });
    fetchNotes(); // refresh after delete
  };

  const openNote = (note) => {
    setSelectNote(note);
    setOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="grow bg-gray-50 p-6">
        {notes.length === 0 ? (
          <p className="text-center text-gray-500">No notes available</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {notes.map((note) => (
              <NoteTile
                key={note._id}
                title={note.title}
                desc={note.desc}
                note={note}
                onEdit={handleEdit}
                onDelete={handleDelete}
                onClick={() => openNote(note)}
              />
            ))}
          </div>
        )}
      </main>

      <Footer />
      {open && selectNote && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-96 relative">
            <NoteOpen
              note={selectNote}
              onEdit={handleEdit}
              onDelete={handleDelete}
              onClose={() => setOpen(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;

// {open && selectNote ? (
//           <NoteOpen
//           note={selectNote}
//             onEdit={handleEdit}
//             onDelete={handleDelete}
//             onClose={() => setOpen(false)}
//             onClick={() => openNote(note)}
//           />
//       ) :
