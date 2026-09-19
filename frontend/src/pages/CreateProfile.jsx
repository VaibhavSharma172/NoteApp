import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateProfile() {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const [image, setImage] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) {
      alert("Please select a profile image");
      return;
    }

    try {
      const formData = new FormData();

      formData.append("username", username);
      formData.append("age", age);
      formData.append("address", address);
      formData.append("contact", contact);
      formData.append("image", image);

      await axios.post("http://localhost:3000/profile/create", formData, {
        withCredentials: true,
      });

      alert("Profile created successfully");

      navigate("/main");
    } catch (error) {
      console.error("creation error:", error);

      alert(error.response?.data?.message || "Failed to create profile");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-violet-600">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Create Profile
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
            required
          />

          <input
            type="number"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
          />

          <input
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
          />

          <input
            type="tel"
            placeholder="Contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
          />

          <div>
            <label className="block mb-2 text-gray-700">Profile picture</label>

            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
              className="w-full"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          >
            Create Profile
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateProfile;
