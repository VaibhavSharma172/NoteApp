import { use, useEffect, useState } from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import NoteTile from "../components/NoteTile.jsx";
import NoteOpen from "../components/noteOpen.jsx";

function Home() {
  const [notes, setNotes] = useState([]);
  const [open, setOpen] = useState(false);
  const openNote = () =>{
    setOpen(true);
  };

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
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow bg-gray-50 p-6">
        {notes.length === 0 ? (
          <p className="text-center text-gray-500">No notes available</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6" onClick={()=>setOpen(true)}>
            {notes.map(note => (
              <NoteTile  onClick={()=>setOpen(true)}
                key={note._id}
                title={note.title}
                desc={note.desc}
                note={note}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>  
  );
}

export default Home;