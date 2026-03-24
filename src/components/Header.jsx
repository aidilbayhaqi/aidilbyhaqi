import React from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { useScrollReveal } from "../hooks/useScrollReveal";

const Header = ({ menuItems, activeSection, scrollToSection, setMenuOpen, menuOpen }) => {
  useScrollReveal();

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-black/90 py-4 reveal">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold text-white cursor-pointer">
            Aidil<span className="text-purple-500">Bayhaqi</span>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium hover:text-purple-500 transition-colors relative py-2 ${activeSection === item.id ? 'text-purple-500' : 'text-gray-300'}`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-500"></span>
                )}
              </button>
            ))}
          </nav>
          
          {/* Contact Button (Desktop) */}
          <button 
            onClick={() => scrollToSection('contact')}
            className="hidden md:flex items-center bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full transition-colors"
          >
            Let's Talk
            <ArrowRight size={16} className="ml-2" />
          </button>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>
      
      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-black z-40 transition-transform duration-300 transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden reveal`}>
        <div className="flex flex-col h-full justify-center items-center">
          <nav className="flex flex-col items-center space-y-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-xl font-medium hover:text-purple-500 transition-colors ${activeSection === item.id ? 'text-purple-500' : 'text-gray-300'}`}
              >
                {item.label}
              </button>
            ))}
          </nav>
          
          <div className="mt-12">
            <button 
              onClick={() => scrollToSection('contact')}
              className="flex items-center bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full transition-colors"
            >
              Let's Talk
              <ArrowRight size={16} className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
