import { ArrowUpRight, Languages } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

const MobileMenu = ({ menuItems, menuOpen, scrollToSection, activeSection }) => {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <div className={`mobile-menu ${menuOpen ? "open" : ""}`} aria-hidden={!menuOpen}>
      <div className="mobile-menu-label">{t("navigation")}</div>
      <nav aria-label={t("navigation")}>
        {menuItems.map((item, index) => (
          <button
            type="button"
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={activeSection === item.id ? "active" : ""}
          >
            <span>0{index + 1}</span>
            <strong>{item.label}</strong>
            <ArrowUpRight size={18} />
          </button>
        ))}
      </nav>

      <button type="button" className="mobile-language-switch" onClick={toggleLanguage}>
        <Languages size={18} />
        <span>{t("language")}</span>
        <strong>{language === "id" ? "Indonesia" : "English"}</strong>
      </button>

      <p>{t("mobileIntro")}</p>
    </div>
  );
};

export default MobileMenu;
