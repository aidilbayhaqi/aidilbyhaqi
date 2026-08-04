import {
  ArrowDownRight,
  ArrowUpRight,
  Download,
  Github,
  Instagram,
  Linkedin,
  MapPin,
  Music2,
} from "lucide-react";
import FadeIn from "../components/fadeIn";
import { socialLinks } from "../data/portfolioData";
import { useLanguage } from "../i18n/LanguageContext";

const iconMap = { Github, Instagram, Linkedin, Music2 };

const Hero = ({ scrollToSection }) => {
  const { t } = useLanguage();

  return (
    <section id="home" className="hero-section">
      <div className="hero-noise" aria-hidden="true" />
      <div className="container-shell hero-layout">
        <div className="hero-copy">
          <FadeIn>
            <div className="hero-kicker">
              <span className="status-dot" />
              <span>{t("available")}</span>
            </div>
          </FadeIn>

          <FadeIn delay={90}>
            <p className="hero-intro">{t("intro")}</p>
          </FadeIn>

          <FadeIn delay={150}>
            <h1 className="hero-title">
              {t("heroLead")}
              <span className="hero-title-accent">{t("heroAccent")}</span>
            </h1>
          </FadeIn>

          <FadeIn delay={240}>
            <p className="hero-description">{t("heroDescription")}</p>
          </FadeIn>

          <FadeIn delay={310}>
            <div className="hero-actions">
              <button type="button" onClick={() => scrollToSection("case-study")} className="button-primary">
                {t("seeProcess")} <ArrowDownRight size={17} />
              </button>
              <a href="/aidil-bayhaqi-cv.pdf" target="_blank" rel="noopener noreferrer" className="button-secondary">
                {t("openCv")} <Download size={17} />
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={370}>
            <div className="hero-social-buttons" aria-label="Social media">
              {socialLinks.map((social) => {
                const Icon = iconMap[social.icon];
                if (!social.available || !social.url) {
                  return (
                    <button
                      type="button"
                      key={social.name}
                      className="social-icon-button is-disabled"
                      aria-disabled="true"
                      title={t("socialUnavailable")}
                    >
                      <Icon size={17} />
                      <span>{social.name}</span>
                    </button>
                  );
                }
                return (
                  <a
                    key={social.name}
                    className="social-icon-button"
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                  >
                    <Icon size={17} />
                    <span>{social.name}</span>
                    <ArrowUpRight size={13} />
                  </a>
                );
              })}
            </div>
          </FadeIn>

          <FadeIn delay={430}>
            <div className="hero-meta-row">
              <span className="hero-location"><MapPin size={15} /> {t("basedIn")}</span>
              <span className="hero-meta-divider" />
              <span>React · Next.js · FastAPI · Flutter</span>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={260} direction="left">
          <div className="hero-workbench" aria-label={t("selectedWork")}>
            <div className="hero-workbench-label">
              <span>{t("selectedWork")}</span>
              <span>2025—2026</span>
            </div>

            <button type="button" className="project-window project-window-main" onClick={() => scrollToSection("case-study")} aria-label="DashAI">
              <div className="window-bar"><span /><span /><span /><strong>DashAI / ERP + AI</strong></div>
              <img src="/dashai-preview.svg" alt="DashAI ERP dashboard preview" />
            </button>

            <button type="button" className="project-window project-window-yoru" onClick={() => scrollToSection("case-study")} aria-label="YoruService">
              <div className="window-bar compact"><span /><span /><span /><strong>YoruService</strong></div>
              <img src="/yoru-preview.svg" alt="YoruService marketplace preview" />
            </button>

            <button type="button" className="project-window project-window-groo" onClick={() => scrollToSection("case-study")} aria-label="Groo">
              <div className="window-bar compact"><span /><span /><span /><strong>Groo</strong></div>
              <img src="/groo-preview.svg" alt="Groo service application preview" />
            </button>

            <div className="hero-person-card">
              <img src="/profile.jpeg" alt="Muhammad Aidil Bayhaqi" />
              <div>
                <strong>Muhammad Aidil Bayhaqi</strong>
                <span>{t("analyzeBuild")}</span>
              </div>
              <ArrowUpRight size={17} />
            </div>

            <div className="hero-hand-note" aria-hidden="true">
              <span>{t("notJustScreens")}</span>
              <svg viewBox="0 0 98 35" role="presentation"><path d="M2 9c22 10 43 13 70 9 10-2 17-5 24-11M78 27l18-20-25-2" /></svg>
            </div>
          </div>
        </FadeIn>
      </div>

      <button type="button" className="hero-scroll-cue" onClick={() => scrollToSection("proof")} aria-label={t("scrollStory")}>
        {t("scrollStory")} <ArrowDownRight size={16} />
      </button>
    </section>
  );
};

export default Hero;
