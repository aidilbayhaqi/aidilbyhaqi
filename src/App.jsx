import { useEffect, useMemo, useState } from "react";
import Header from "./components/Header";
import MobileMenu from "./components/MobileMenu";
import useScrollAnimation from "./hooks/useScrollAnimation";
import { useLanguage } from "./i18n/LanguageContext";
import Hero from "./sections/hero";
import Proof from "./sections/proof";
import About from "./sections/about";
import Service from "./sections/service";
import Project from "./sections/project";
import CaseStudy from "./sections/caseStudy";
import Certificates from "./sections/certificate";
import Contact from "./sections/contact";
import Footer from "./sections/footer";
import "./App.css";

export default function App() {
  const { t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const scrolled = useScrollAnimation();

  const menuItems = useMemo(() => [
    { id: "home", label: t("home") },
    { id: "about", label: t("story") },
    { id: "services", label: t("services") },
    { id: "projects", label: t("work") },
    { id: "case-study", label: t("cases") },
    { id: "certificate", label: t("learning") },
    { id: "contact", label: t("contact") },
  ], [t]);

  const sectionIds = useMemo(() => menuItems.map((item) => item.id), [menuItems]);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(sectionId);
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const marker = window.innerHeight * 0.32;
      const current = sectionIds.find((sectionId) => {
        const element = document.getElementById(sectionId);
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top <= marker && rect.bottom >= marker;
      });
      if (current) setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <div className="min-h-screen bg-black text-white">
      <Header
        scrolled={scrolled}
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
      <main>
        <Hero scrollToSection={scrollToSection} />
        <Proof scrollToSection={scrollToSection} />
        <About />
        <Service />
        <Project />
        <CaseStudy />
        <Certificates />
        <Contact />
      </main>
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
}
