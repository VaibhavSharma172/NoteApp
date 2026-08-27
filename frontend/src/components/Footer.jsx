import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-auto">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        
        <div className="mb-4 md:mb-0">
          <h2 className="text-xl font-bold text-white">Notes App</h2>
          <p className="text-sm">© 2026 All rights reserved.</p>
          <p className="text-sm">Built with React + TailwindCSS</p>
        </div>

        <div className="flex space-x-6">
          <a href="https://twitter.com" target="_blank" className="hover:text-white">
            <FaTwitter className="w-6 h-6" />
          </a>
          <a href="https://github.com" target="_blank" className="hover:text-white">
            <FaGithub className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com" target="_blank" className="hover:text-white">
            <FaLinkedin className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer