import React from "react";
import { useParams } from "react-router-dom";

function Profile() {
  // const { id } = useParams();

  return (
    <div>
      Profile
      <div className="border border-solid border-black rounded p-4">
        <div>
          <img src="" alt="photo" />
          <p>
            <Nmae></Nmae>
          </p>
        </div>
        <div>
          <p>age</p>
          <p>address</p>
          <p>contact</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
