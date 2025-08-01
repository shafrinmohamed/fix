import React, { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="hidden md:flex items-center justify-between py-2 text-sm text-gray-600 border-b border-gray-100">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>+94 76-923 4455</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>info@herbsanddrugs.com</span>
            </div>
          </div>
          <div className="text-emerald-600 font-medium">
            Natural Healing Solutions Since 1995
          </div>
        </div>

        {/* Main navigation */}
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">H&D</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">Herbs & Drugs</h1>
              <p className="text-xs text-gray-500">Pvt Ltd</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">Home</a>
            <a href="#product" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">Fix Oil</a>
            <a href="#about" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">About</a>
            <a href="#contact" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">Contact</a>
            <button className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 font-medium">
              Order Now
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-emerald-600 transition-colors">Home</a>
              <a href="#product" className="text-gray-700 hover:text-emerald-600 transition-colors">Fix Oil</a>
              <a href="#about" className="text-gray-700 hover:text-emerald-600 transition-colors">About</a>
              <a href="#contact" className="text-gray-700 hover:text-emerald-600 transition-colors">Contact</a>
              <button className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 w-fit">
                Order Now
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;