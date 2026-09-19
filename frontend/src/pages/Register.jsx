import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://localhost:3000/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        alert(result.message);
        console.log("response", result.message);
        return;
      }

      alert(result.message);
      console.log("User registered:", result.register);

    } catch (error) {
      console.error("Registration error:", error);
      alert("Something went wrong. Please try again.")
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-violet-600">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Registration
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Email */}
          <div>
            <input
              type="email"
              {...register("email", { required: true })}
              placeholder="Email"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
            {errors.email && (
              <span className="text-red-500 text-sm">*Email* is mandatory</span>
            )}
          </div>

          {/* Password */}
          <div>
            <input
              type="password"
              {...register("password", { required: true })}
              placeholder="Password"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
            {errors.password && (
              <span className="text-red-500 text-sm">
                *Password* is mandatory
              </span>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-400 text-white py-2 rounded-md hover:bg-blue-500 transition-colors"
          >
            Register
          </button>
        </form>
        <p className="text-md ">Already a user ? <button onClick={()=>navigate("/login")} className="text-blue-500 text-center">Sign in</button></p>
      </div>
    </div>
  );
}

export default Register;

//   const existingUser = JSON.parse(localStorage.getItem(data.email));
//   if (existingUser) {
//     console.log("Email is already registered!");
//   } else {
//     const userData = {
//       email: data.email,
//       password: data.password,
//     };
//     localStorage.setItem(data.email, JSON.stringify(userData));
//     console.log(data.email + " has been successfully registered");
//   }
// };
