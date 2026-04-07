import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { path: "/", label: "Home" },
    { path: "/menu", label: "Menu" },
    { path: "/order", label: "Order Now" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-brown-800 shadow-warm-lg"
          : "bg-brown-800/95 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-gold-500 flex items-center justify-center text-brown-900 font-bold text-lg shadow-md group-hover:scale-105 transition-transform">
              🎂
            </div>
            <div className="leading-tight">
              <p className="font-display font-bold text-cream-100 text-base sm:text-lg leading-none">
                Lakshmi Durga
              </p>
              <p className="text-gold-400 text-xs font-body font-light tracking-widest uppercase">
                Bakery
              </p>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg font-body text-sm font-medium transition-all duration-200 ${
                  isActive(link.path)
                    ? "bg-gold-500 text-brown-900"
                    : "text-cream-200 hover:bg-brown-700 hover:text-cream-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-cream-100 hover:bg-brown-700 transition-colors"
            aria-label="Toggle menu"
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <span className={`block h-0.5 bg-current transition-all duration-300 ${isOpen ? "rotate-45 translate-y-1.5" : ""}`} />
              <span className={`block h-0.5 bg-current transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 bg-current transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${isOpen ? "max-h-60" : "max-h-0"}`}>
        <div className="px-4 pb-4 bg-brown-900 border-t border-brown-700">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block py-3 px-3 rounded-lg mt-1 font-body text-sm font-medium transition-colors ${
                isActive(link.path)
                  ? "bg-gold-500 text-brown-900"
                  : "text-cream-200 hover:bg-brown-700"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
