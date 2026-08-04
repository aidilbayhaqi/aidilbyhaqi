import { useState } from "react";
import {
  ArrowUpRight,
  Download,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Music2,
  Phone,
} from "lucide-react";
import FadeIn from "../components/fadeIn";
import { socialLinks } from "../data/portfolioData";
import { useLanguage } from "../i18n/LanguageContext";

const iconMap = { Github, Instagram, Linkedin, Music2 };

const Contact = () => {
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const updateField = (event) => setForm((current) => ({ ...current, [event.target.name]: event.target.value }));

  const sendToWhatsApp = (event) => {
    event.preventDefault();
    const text = [
      t("whatsappGreeting"),
      `${t("whatsappName")}: ${form.name}`,
      `${t("email")}: ${form.email}`,
      `${t("whatsappProject")}: ${form.message}`,
    ].join("\n");
    window.open(`https://wa.me/6289504322572?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="section-space contact-section">
      <div className="container-shell">
        <FadeIn>
          <div className="contact-marquee" aria-hidden="true">
            <span>{t("contactMarquee")}</span>
            <span>{t("contactMarquee")}</span>
          </div>
        </FadeIn>

        <div className="contact-layout">
          <FadeIn>
            <div className="contact-copy">
              <span className="section-index">{t("contactIndex")}</span>
              <h2>{t("contactTitle")}</h2>
              <p>{t("contactDescription")}</p>

              <div className="contact-direct-list">
                <a href="mailto:m.aidilbayhaqi@gmail.com"><Mail size={18} /><span><small>{t("email")}</small>m.aidilbayhaqi@gmail.com</span><ArrowUpRight size={16} /></a>
                <a href="https://wa.me/6289504322572" target="_blank" rel="noopener noreferrer"><Phone size={18} /><span><small>{t("whatsapp")}</small>+62 895-0432-2572</span><ArrowUpRight size={16} /></a>
                <div><MapPin size={18} /><span><small>{t("locationLabel")}</small>{t("locationValue")}</span></div>
              </div>

              <div className="contact-socials" aria-label="Social media">
                {socialLinks.map((social) => {
                  const Icon = iconMap[social.icon];
                  if (!social.available || !social.url) {
                    return (
                      <button key={social.name} type="button" className="social-disabled" aria-disabled="true" title={t("socialUnavailable")}>
                        <Icon size={17} /> {social.name}
                      </button>
                    );
                  }
                  return (
                    <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer">
                      <Icon size={17} /> {social.name} <ArrowUpRight size={14} />
                    </a>
                  );
                })}
                <a href="/aidil-bayhaqi-cv.pdf" target="_blank" rel="noopener noreferrer">
                  <Download size={17} /> CV <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={120}>
            <form onSubmit={sendToWhatsApp} className="contact-form">
              <div className="contact-form-heading"><span>{t("quickNote")}</span><small>{t("whatsappSecure")}</small></div>
              <label>
                <span>{t("yourName")}</span>
                <input type="text" name="name" value={form.name} onChange={updateField} required placeholder={t("namePlaceholder")} />
              </label>
              <label>
                <span>{t("email")}</span>
                <input type="email" name="email" value={form.email} onChange={updateField} required placeholder="you@example.com" />
              </label>
              <label>
                <span>{t("improveQuestion")}</span>
                <textarea name="message" value={form.message} onChange={updateField} rows={6} required placeholder={t("messagePlaceholder")} />
              </label>
              <button type="submit">{t("sendNote")} <MessageCircle size={18} /></button>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Contact;
