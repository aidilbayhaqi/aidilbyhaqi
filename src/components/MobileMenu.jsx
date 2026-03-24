import React from 'react';

const MobileMenu = ({ menuItems, menuOpen, scrollToSection, activeSection }) => {
  if (!menuOpen) return null;

  return (
    <div className="md:hidden fixed top-16 left-0 right-0 bg-black bg-opacity-95 z-40 py-4">
      <nav className="flex flex-col items-center space-y-4">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`text-white text-lg ${
              activeSection === item.id ? 'font-semibold underline' : ''
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default MobileMenu;
