import React from "react";
import { useForm } from "react-hook-form";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const existingUser = JSON.parse(localStorage.getItem(data.email));
    if (existingUser) {
      console.log("Email is already registered!");
    } else {
      const userData = {
        email: data.email,
        password: data.password,
      };
      localStorage.setItem(data.email, JSON.stringify(userData));
      console.log(data.name + " has been successfully registered");
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
      </div>
    </div>
  );
}

export default Register;