import React from 'react'

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow-md">
      <div className="text-2xl font-bold tracking-wide">
        NoteApp
      </div>
      <div className="flex space-x-6">
        <a
          href="/"
          className="hover:text-blue-400 transition-colors"
        >
          Home
        </a>
        <a
          href="/create"
          className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition-colors"
        >
          Create
        </a>
      </div>
    </nav>
  )
}

export default Navbar