import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // const res = join below line if problem
      await axios.post(
        "http://localhost:3000/auth/login",
        {
          email,
          password,
        },
        {
          withCredentials: true,
        },
      );

      try {
        await axios.get("http://localhost:3000/profile/get", {
          withCredentials: true,
        });
        // if Profile exists
        navigate("/main");
      } catch (profileError) {
        if (profileError.response?.status === 404) {
          // user authenticated but no created
          navigate("/create-profile");
        } else {
          throw profileError;
        }
      }
    } catch (err) {
      console.error("Login error:", err);
      alert(err.response?.data?.message || "Login failed");
    }
  };
  //   localStorage.setItem("token", res.data.token); // store JWT
  //   navigate("/main"); // redirect to main
  // } catch (err) {
  //   alert("Login failed");
  // }
  // };

  return (
    <div className="min-h-screen flex items-center justify-center bg-purple-600">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
          >
            Login
          </button>
        </form>
                <p className="text-md ">Not registered ? <button onClick={()=>navigate("/register")} className="text-blue-500 text-center">Register</button></p>
      </div>
    </div>
  );
}

export default Login;
