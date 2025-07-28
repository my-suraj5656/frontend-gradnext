import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed w-full z-50 transition-all duration-300 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-blue-600 tracking-wide">
          GradNext
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center">
          {["home", "features", "about", "contact"].map((item) => (
            <button
              key={item}
              onClick={() => handleNavClick(item)}
              className="text-gray-700 hover:text-blue-600 font-medium transition"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
          <div className="flex gap-3 ml-4">
            <button className="px-4 py-2 rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-50 transition">
              Login
            </button>
            <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:opacity-90 transition">
              Sign Up
            </button>
          </div>
        </nav>

        {/* Mobile Menu Icon */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden"
        >
          {isMenuOpen ? <FiX size={26} /> : <FiMenu size={26} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-white px-6 py-4 shadow-md space-y-3">
          {["home", "features", "about", "contact"].map((item) => (
            <button
              key={item}
              onClick={() => handleNavClick(item)}
              className="block w-full text-left py-2 text-gray-700 font-medium hover:text-blue-600"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
          <div className="pt-3 border-t border-gray-200">
            <button className="w-full mb-2 px-4 py-2 rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-50 transition">
              Login
            </button>
            <button className="w-full px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:opacity-90 transition">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
