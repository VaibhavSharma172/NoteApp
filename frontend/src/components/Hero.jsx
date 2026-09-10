// src/components/HeroSection.jsx
import React from "react";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#7A36EC] via-[#6318E7] to-[#4B00D1] text-white font-sans relative overflow-hidden">
      <header className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <div className="flex items-center space-x-2 font-bold text-2xl tracking-wide cursor-pointer">
          <div className="w-8 h-8 border-2 border-white flex items-center justify-center">
          </div>
          <span>NOTEAPP</span>
        </div>

        <nav className="hidden md:flex items-center space-x-8 font-medium text-sm text-gray-200">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <Link to="/features" className="hover:text-white transition-colors">Feature</Link>
          <Link to="/about" className="hover:text-white transition-colors">About</Link>
          <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
          <Link to="/register" className="hover:text-white transition-colors">Register</Link>
          <Link to="/login" className="hover:text-white transition-colors">Login</Link>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-6 pt-16 md:pt-28 pb-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 max-w-xl">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
            Simple Design.
            <br />
            Smooth Experience.
          </h1>
          <p className="text-gray-200 text-base md:text-lg leading-relaxed font-light">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat porro eos iste magnam voluptas error necessitatibus eius reiciendis quae, dolores pariatur quod provident alias fuga ab nulla suscipit cupiditate deleniti?
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Link to="/register" className="inline-block">
              <button className="bg-white text-[#6318E7] font-semibold px-8 py-3.5 rounded-sm shadow-md hover:bg-gray-100 transition-all text-sm tracking-wide">
                Get Started
              </button>
            </Link>

            <Link to="/login" className="inline-block">
              <button className="bg-transparent text-white font-semibold px-8 py-3.5 rounded-sm border border-white hover:bg-white/10 transition-all text-sm tracking-wide">
                Login
              </button>
            </Link>
          </div>
        </div>

        <div className="relative flex justify-center items-center w-full min-h-[360px] bg-lime-500">
        </div>
      </main>
    </div>
  );
}

export default HeroSection