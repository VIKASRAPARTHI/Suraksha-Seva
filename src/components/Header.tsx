import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingBag } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { path: "/emergency", label: "Emergency" },
    { path: "/crimes", label: "Crimes" },
    { path: "/cybersecurity", label: "Cyber Security" },
    { path: "/legal-support", label: "Legal Support" },
    { path: "/resources", label: "Resources" },
    { path: "/blog", label: "Blog" },
    { path: "/contact", label: "Contact" },
    { path: "/feedback", label: "Feedback" }
  ];

  return (
    <header className="bg-slate-900 text-white sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-3">
            <img src="/logo.png" className="w-12 h-12 text-blue-400" />
            <span className="text-xl font-bold font-['Poppins']">Suraksha</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="font-['Poppins'] text-sm uppercase tracking-wider hover:text-purple-400 transition"
              >
                {item.label}
              </Link>
            ))}
            
            <Link
              to="/shop"
              className="w-28 h-10 flex items-center justify-center rounded-full bg-slate-800 space-x-3 hover:text-purple-400 transition"
            >
              <span className="font-['Poppins'] text-sm uppercase tracking-wider">Shop</span>
              <ShoppingBag className="w-5 h-5" />
            </Link>
          </nav>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-4 pb-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="block font-['Poppins'] text-sm uppercase tracking-wider hover:text-blue-400 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/shop"
              className="w-28 h-10 flex items-center justify-center rounded-md bg-slate-800 font-['Poppins'] space-x-2 text-sm uppercase tracking-wider hover:text-blue-400 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              <span>Shop</span>
              <ShoppingBag className="w-5 h-5" />
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}