import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import MobileMenu from './components/MobileMenu';
import About from './sections/about';
import Hero from './sections/hero';
import Service from './sections/service'
import Project from './sections/project';

import Contact from './sections/contact';
import './App.css';
import Certificates from './sections/certificate';
import Organization from './sections/organization';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');


 const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects' },
    { id: 'certificate', label: 'Certificate' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map(item => item.id);

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [menuItems]);

  return (
    <div className="bg-black text-white min-h-screen">
      <Header
        
        menuItems={menuItems}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        setMenuOpen={setMenuOpen}
        menuOpen={menuOpen}
      />
      <MobileMenu
        menuItems={menuItems}
        menuOpen={menuOpen}
        scrollToSection={scrollToSection}
        activeSection={activeSection}
      />
      <main className="mt-10">
        <Hero scrollToSection={scrollToSection} />
        <About />
        <Organization/>
        <Service/>
        <Project/>
        <Certificates/>
        <Contact/>
      </main>
    </div>
  );
}
