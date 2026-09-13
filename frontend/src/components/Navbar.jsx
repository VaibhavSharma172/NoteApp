import { useState } from "react";
import CreateNote from "../components/Createnote.jsx";
import {useNavigate} from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();
  const currentUser = {id:""};
  const [showCreate, setShowCreate] = useState(false);

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow-md">
      <div className="text-2xl font-bold tracking-wide">
        NoteApp
      </div>
      <div className="flex space-x-6">
        <button
          // onClick={() => navigate(`/profile/${currentUser.id}`)}
          onClick={() => navigate("/profile")}
          className="bg-purple-600 px-4 py-2 rounded hover:bg-purple-700 transition-colors"
        >
          My Profile
        </button>
        <button
          onClick={() => setShowCreate(true)}
          className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition-colors"
        >
          Create
        </button>
      </div>
      {showCreate && (
        <CreateNote
          onClose={() => setShowCreate(false)}
          onNoteAdded={() => {
            // refresh note
          }}
        />
      )}
    </nav>
  )
}

export default Navbar