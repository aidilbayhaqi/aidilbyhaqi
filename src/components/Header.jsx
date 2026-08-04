import { ArrowUpRight, Languages, Menu, X } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

const Header = ({ scrolled, menuItems, activeSection, scrollToSection, setMenuOpen, menuOpen }) => {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <div className="container-shell site-header-inner">
        <button type="button" onClick={() => scrollToSection("home")} className="site-brand" aria-label={t("home")}>
          <span>AB</span>
          <div>
            <strong>Aidil Bayhaqi</strong>
            <small>Fullstack / Systems</small>
          </div>
        </button>

        <nav className="site-nav" aria-label={t("navigation")}>
          {menuItems.map((item) => (
            <button
              type="button"
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={activeSection === item.id ? "active" : ""}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="header-actions">
          <button
            type="button"
            className="language-switch"
            onClick={toggleLanguage}
            aria-label={`${t("language")}: ${language === "id" ? "Indonesia" : "English"}`}
            title={language === "id" ? "Switch to English" : "Ganti ke Bahasa Indonesia"}
          >
            <Languages size={16} />
            <span className={language === "id" ? "active" : ""}>ID</span>
            <i>/</i>
            <span className={language === "en" ? "active" : ""}>EN</span>
          </button>

          <button type="button" onClick={() => scrollToSection("contact")} className="site-contact-button">
            {t("startConversation")} <ArrowUpRight size={16} />
          </button>
        </div>

        <button
          type="button"
          className="site-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? t("closeNavigation") : t("openNavigation")}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
