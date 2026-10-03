import { useEffect, useState } from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import CreateNote from "../components/Createnote.jsx";
import NoteTile from "../components/NoteTile.jsx";
import NoteOpen from "../components/NoteOpen.jsx";
import axios from "axios";
import AxiosInstance from "../context/AxiosInstance.js";

function Home() {
  const [notes, setNotes] = useState([]);
  const [open, setOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [selectNote, setSelectNote] = useState(null);

    const [isCreateOpen, setIsCreateOpen] = useState(false);
    
  const fetchNotes = async () => {
    const res = await AxiosInstance.get("note/getNotes")
    setNotes(res.data.notes || []);
  };
  useEffect(() => {
    fetchNotes();
  }, []);

  const handleEdit = async (id, updatedFields) => {
    try{
const res = await AxiosInstance.patch(
         `note/notes/${id}`,
       updatedFields,
      // { withCredentials: true }
      );
     const updatedFields = res.data;

      setNotes((prevNotes) =>
        prevNotes.map((note) =>
        note._id === id ? {...note, updatedNote} : note));
      if (selectNote?._id === id) {
        setSelectNote((prev) =>({...prev,...updatedNote}));
      }
    } catch(error) {
      console.error("edit failed:", error.response?.data || error.message);
    throw error;
    } 
  };

  const handleDelete = async (id) => {
  try {
    await axios.delete(`http://localhost:3000/note/notes/${id}`, {
      withCredentials: true,
    });
    setNotes((prevNotes) =>
      prevNotes.filter((note) => note._id !== id)
    );
    if (selectNote?._id === id){
      setOpen(false)
      setSelectNote(null)
    }
  } catch (error) {
    console.error("Delete failed:", error.response?.data || error.message);
  }
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
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" 
        onClick={() => {
      setOpen(false);
      setSelectNote(null);}}>
          <div className="bg-white rounded-lg shadow-lg p-6 w-96 relative"
          onClick={(e) => e.stopPropagation()}>
            <NoteOpen
              note={selectNote}
              onEdit={handleEdit}
              onDelete={handleDelete}
              onClose={() => {
  setOpen(false);
  setSelectNote(null);
}}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;


