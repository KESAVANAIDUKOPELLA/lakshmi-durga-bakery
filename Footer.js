import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brown-900 text-cream-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">🎂</span>
              <div>
                <p className="font-display font-bold text-cream-100 text-lg leading-none">
                  Lakshmi Durga Bakery
                </p>
                <p className="text-gold-400 text-xs tracking-widest uppercase">
                  Freshly Baked Happiness
                </p>
              </div>
            </div>
            <p className="text-sm text-brown-400 leading-relaxed">
              Serving freshly baked goods with love and tradition since our founding in Kanteru, West Godavari.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-cream-100 mb-3 text-base">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { path: "/", label: "Home" },
                { path: "/menu", label: "Our Menu" },
                { path: "/order", label: "Place an Order" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-brown-400 hover:text-gold-400 transition-colors"
                  >
                    → {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-cream-100 mb-3 text-base">Contact Us</h4>
            <ul className="space-y-2 text-sm text-brown-400">
              <li className="flex gap-2">
                <span>📍</span>
                <span>Kanteru & Kakileru, Near Vasavi, Penugonda, West Godavari, AP – 534320</span>
              </li>
              <li className="flex gap-2">
                <span>📞</span>
                <a href="tel:+919999999999" className="hover:text-gold-400 transition-colors">
                  +91 99999 99999
                </a>
              </li>
              <li className="flex gap-2">
                <span>⏰</span>
                <span>Open Daily: 7:00 AM – 9:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brown-700 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-brown-500">
            © {year} Lakshmi Durga Bakery. All rights reserved.
          </p>
          <p className="text-xs text-brown-500">
            Made with ❤️ in West Godavari, Andhra Pradesh
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
