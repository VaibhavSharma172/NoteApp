import React, { useEffect, useState } from "react";
import axios from "axios";

function Profile() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/profile/get",
          {
            withCredentials: true,
          },
        );
        console.log(response.data);

        setProfile(response.data.profile);
      } catch (err) {
        console.error("Profile error:", err);

        setError(err.response?.data?.message || "Failed to fetch profile");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) {
    return <div>Loading profile...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }
  if (!profile) {
    return <div>Profile not found</div>;
  }
  return (
    <div className="relative border border-black">
      <div className="bg-purple-700 h-[40vh]">top</div>
      <div className="bg-pink-300 h-[60vh]">bottom</div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-3/4 h-3/4 shadow-lg rounded">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-7/4">
          <img
            src={profile.image}
            alt="Profile"
            className="w-48 h-48 object-cover rounded-full"
          />
        </div>
        <div>
          {/* name address age contact */}
           <p>
            <strong>Name:</strong> {profile.username}
          </p>
          <p>
            <strong>Age:</strong> {profile.age}
          </p>
          <p>
            <strong>Address:</strong> {profile.address}
          </p>
          <p>
            <strong>Contact:</strong> {profile.contact}
          </p>
        </div>
    </div>
    </div>
  );
}

export default Profile;

{/* 
      <div className="border border-solid border-black rounded p-4">
        <div>
        <div>
          <p>
            <strong>Name:</strong> {profile.username}
          </p>
          <p>
            <strong>Age:</strong> {profile.age}
          </p>
          <p>
            <strong>Address:</strong> {profile.address}
          </p>
          <p>
            <strong>Contact:</strong> {profile.contact}
          </p>
        </div>
      </div> */}