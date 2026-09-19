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
    <div>
      <h1>Profile</h1>
      <div className="border border-solid border-black rounded p-4">
        <div>
          <img
            src={profile.image}
            alt="Profile"
            className="w-32 h-32 object-cover rounded-full"
          />
          <p>
            <strong>Name:</strong> {profile.username}
          </p>
        </div>
        <div>
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
