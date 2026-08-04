import { ArrowDownRight, Radio } from "lucide-react";
import FadeIn from "../components/fadeIn";
import { impactStats, journeyHighlights } from "../data/portfolioData";
import { useLanguage } from "../i18n/LanguageContext";

const Proof = ({ scrollToSection }) => {
  const { t, translateData } = useLanguage();
  const localizedStats = translateData(impactStats);
  const localizedJourney = translateData(journeyHighlights);

  return (
    <section id="proof" className="proof-section section-space">
      <div className="container-shell">
        <FadeIn>
          <div className="proof-intro">
            <div>
              <span className="section-index">{t("proofIndex")}</span>
              <h2>
                {t("proofTitle")}
                <span>{t("proofAccent")}</span>
              </h2>
            </div>
            <p>{t("proofDescription")}</p>
          </div>
        </FadeIn>

        <div className="impact-grid">
          {localizedStats.map((item, index) => (
            <FadeIn key={`${item.value}-${index}`} delay={index * 70}>
              <article className="impact-stat">
                <span className="impact-value">{item.value}</span>
                <h3>{item.label}</h3>
                <p>{item.note}</p>
              </article>
            </FadeIn>
          ))}
        </div>

        <div className="journey-board">
          <div className="journey-board-top">
            <div className="journey-live"><Radio size={14} /> {t("careerSignal")}</div>
            <span>{t("careerPath")}</span>
          </div>
          <div className="journey-line" aria-hidden="true" />
          <div className="journey-grid">
            {localizedJourney.map((item, index) => (
              <FadeIn key={item.year} delay={index * 90}>
                <article className="journey-item">
                  <span className="journey-year">{item.year}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              </FadeIn>
            ))}
          </div>
          <button type="button" className="journey-cta" onClick={() => scrollToSection("about")}>
            {t("fullJourney")} <ArrowDownRight size={17} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Proof;
