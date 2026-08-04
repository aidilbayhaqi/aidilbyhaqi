import { ArrowUp, Github, Instagram, Linkedin, Mail, Music2 } from "lucide-react";
import { socialLinks } from "../data/portfolioData";
import { useLanguage } from "../i18n/LanguageContext";

const iconMap = { Github, Instagram, Linkedin, Music2 };

const Footer = ({ scrollToSection }) => {
  const { t } = useLanguage();

  return (
    <footer className="site-footer">
      <div className="container-shell site-footer-inner">
        <div>
          <strong>Muhammad Aidil Bayhaqi</strong>
          <p>{t("footerDescription")}</p>
        </div>
        <div className="site-footer-links">
          {socialLinks.map((social) => {
            const Icon = iconMap[social.icon];
            if (!social.available || !social.url) {
              return <button type="button" key={social.name} className="footer-social-disabled" aria-label={social.name} title={t("socialUnavailable")}><Icon size={18} /></button>;
            }
            return <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.name}><Icon size={18} /></a>;
          })}
          <a href="mailto:m.aidilbayhaqi@gmail.com" aria-label={t("email")}><Mail size={18} /></a>
          <button type="button" onClick={() => scrollToSection("home")} aria-label={t("backTop")}><ArrowUp size={18} /></button>
        </div>
        <small>{t("footerNote")}</small>
      </div>
    </footer>
  );
};

export default Footer;
