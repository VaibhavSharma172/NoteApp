import React, { useEffect, useState } from "react";
import axios from "axios";

function Profile() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get("http://localhost:3000/profile/get", {
          withCredentials: true,
        });
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
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-gray-500 text-lg">
          Loading profile...
        </div>
      </div>
    );
  }
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-white shadow-md rounded-xl px-8 py-6">
          <p className="text-red-500">{error}</p>
        </div>
      </div>
    );
  }
  if (!profile) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-gray-500 text-lg">
          Profile not found
        </p>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative h-70 overflow-hidden bg-gradient-to-r from-pink-500 via-fuchsia-500 to-orange-400"></div>
      <div className="bg-pink-300 h-[60vh]">bottom</div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-3/4 h-3/4 shadow-lg rounded">
        <div className="absolute left-1/2 -top-20 -translate-x-1/2">
        <div className="w-60 h-60 rounded-full bg-white p-2 shadow-lg">
          <img
            src={profile.image}
            alt="Profile"
            className="w-full h-full object-cover rounded-full"
          />
          </div>
        </div>
          <div className="pt-16 pb-10 px-6 text-center">

            {/* Username */}
            <h1 className="text-3xl font-bold text-gray-800">
              {profile.username}
            </h1>

            {/* Address */}
            <p className="mt-2 text-gray-500 text-sm">
              {profile.address}
            </p>


            {/* Profile details */}
            <div className="mt-6 flex flex-col items-center gap-2 text-gray-600">

              <div className="flex items-center gap-2">
                <span className="font-medium text-gray-700">
                  Age
                </span>
                <span className="text-gray-400">•</span>
                <span>
                  {profile.age}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="font-medium text-gray-700">
                  Contact
                </span>
                <span className="text-gray-400">•</span>
                <span>
                  {profile.contact}
                </span>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Profile;

// reference PASTE AFTER function profile till } export default profile

//   return (
//     <div className="min-h-screen bg-gray-50">

//       {/* ================= PROFILE CARD ================= */}
//       <div className="relative px-4 pb-12">

//         <div className="relative mx-auto -mt-24 w-full max-w-3xl bg-white rounded-2xl shadow-xl">


//           {/* ================= CARD HEADER ================= */}
//           <div className="flex justify-between items-center px-6 pt-6">
//           </div>


//           {/* ================= PROFILE CONTENT ================= */}
//           <div className="pt-16 pb-10 px-6 text-center">

//             {/* Username */}
//             <h1 className="text-3xl font-bold text-gray-800">
//               {profile.username}
//             </h1>

//             {/* Address */}
//             <p className="mt-2 text-gray-500 text-sm">
//               {profile.address}
//             </p>


//             {/* Profile details */}
//             <div className="mt-6 flex flex-col items-center gap-2 text-gray-600">

//               <div className="flex items-center gap-2">
//                 <span className="font-medium text-gray-700">
//                   Age
//                 </span>
//                 <span className="text-gray-400">•</span>
//                 <span>
//                   {profile.age}
//                 </span>
//               </div>

//               <div className="flex items-center gap-2">
//                 <span className="font-medium text-gray-700">
//                   Contact
//                 </span>
//                 <span className="text-gray-400">•</span>
//                 <span>
//                   {profile.contact}
//                 </span>
//               </div>

//             </div>

//           </div>
//         </div>
//       </div>
//     </div>
//   );