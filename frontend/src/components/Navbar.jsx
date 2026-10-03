import { useEffect, useState } from "react";
import CreateNote from "../components/Createnote.jsx";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const [showCreate, setShowCreate] = useState(false);
  const [hasProfile, setHasProfile] = useState(false);
  const [loadingProfile, setLoadingProfile] = useState(true);

  useEffect(() => {
    const checkProfile = async () => {
      try {
        const response = await fetch("http://localhost:3000/profile/get", {
          method: "GET",
          credentials: "include",
        });
        console.log("Profile response:", response.status);

        if (response.ok) {
          setHasProfile(true);
        } else if (response.status === 404) {
          setHasProfile(false);
        } else {
          console.log("Unexpected:", response.status);
        }
      } catch (error) {
        console.log("error_____", error);
      } finally {
        setLoadingProfile(false);
      }
    };
    checkProfile();
  }, []);

  const handleProfileClick = () => {
    if (hasProfile) {
      navigate("/profile");
    } else {
      navigate("/create-profile");
    }
  };
  const handleLogout = async () => {
    const response = await fetch("http://localhost:3000/auth/logout", {
      method: "POST",
      credentials: "include",  
    });
    navigate('/');
  };

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow-md">
      <div className="text-2xl font-bold tracking-wide">NoteApp</div>
      <div className="flex space-x-6">
        <button
          onClick={handleProfileClick}
          className="bg-purple-600 px-4 py-2 rounded hover:bg-purple-700 transition-colors"
        >
          {loadingProfile
            ? "Loading..."
            : hasProfile
              ? "My profile"
              : "Create Profile"}
        </button>

        <button
          onClick={() => setShowCreate(true)}
          className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition-colors"
        >
          Create
        </button>

        <button
          onClick={handleLogout}
          className="bg-red-600 px-4 py-2 rounded hover:bg-red-700 transition-colors"
        >
          Logout
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
  );
}

export default Navbar;
