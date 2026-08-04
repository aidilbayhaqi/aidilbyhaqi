import {
  Boxes,
  BrainCircuit,
  ChartNoAxesCombined,
  DatabaseZap,
  GraduationCap,
  Lightbulb,
  MessagesSquare,
  MonitorSmartphone,
  Network,
  Palette,
  RefreshCw,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react";
import FadeIn from "../components/FadeIn";
import {
  currentFocus,
  education,
  experiences,
  organizationHighlights,
  softSkills,
  technicalSkills,
} from "../data/portfolioData";
import { useLanguage } from "../i18n/LanguageContext";

const iconMap = {
  Boxes,
  BrainCircuit,
  ChartNoAxesCombined,
  DatabaseZap,
  Lightbulb,
  MessagesSquare,
  MonitorSmartphone,
  Network,
  Palette,
  RefreshCw,
  ShieldCheck,
  UsersRound,
};

const About = () => {
  const { t, translateData } = useLanguage();
  const localizedFocus = translateData(currentFocus);
  const localizedExperiences = translateData(experiences);
  const localizedEducation = translateData(education);
  const localizedOrganizations = translateData(organizationHighlights);
  const localizedTechnicalSkills = translateData(technicalSkills);
  const localizedSoftSkills = translateData(softSkills);

  return (
    <section id="about" className="section-space story-section">
      <div className="container-shell">
        <FadeIn>
          <div className="story-opening">
            <div>
              <span className="section-index">{t("storyIndex")}</span>
              <h2>
                {t("storyTitle")}
                <span>{t("storyAccent")}</span>
              </h2>
            </div>
            <div className="story-note">
              <p>{t("storyDescription")}</p>
              <div className="story-signature">Aidil / fullstack + systems</div>
            </div>
          </div>
        </FadeIn>

        <div className="focus-sheet">
          <div className="focus-sheet-heading">
            <span>{t("currentFocus")}</span>
            <small>{t("currentFocusNote")}</small>
          </div>
          <div className="focus-list">
            {localizedFocus.map((item, index) => (
              <FadeIn key={item.number} delay={index * 80}>
                <article className="focus-row">
                  <span>{item.number}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>

        <div className="experience-section">
          <FadeIn>
            <div className="editorial-heading">
              <span className="section-index">{t("experience")}</span>
              <h3>{t("experienceHeading")}</h3>
            </div>
          </FadeIn>

          <div className="experience-list">
            {localizedExperiences.map((item, index) => (
              <FadeIn key={`${item.period}-${item.title}`} delay={index * 90}>
                <article className="experience-row">
                  <div className="experience-period">{item.period}</div>
                  <div className="experience-main">
                    <div className="experience-title-line">
                      <h4>{item.title}</h4>
                      <span>0{index + 1}</span>
                    </div>
                    <p className="experience-company">{item.company}</p>
                    <p className="experience-summary">{item.summary}</p>
                    <div className="experience-tags">
                      {item.highlights.map((highlight) => <span key={highlight}>{highlight}</span>)}
                    </div>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>

        <div className="background-grid">
          <FadeIn>
            <article className="background-panel">
              <div className="background-panel-title">
                <GraduationCap size={20} />
                <h3>{t("education")}</h3>
              </div>
              <div className="background-panel-list">
                {localizedEducation.map((item) => (
                  <div key={item.school}>
                    <span>{item.period}</span>
                    <h4>{item.school}</h4>
                    <p>{item.program}</p>
                  </div>
                ))}
              </div>
            </article>
          </FadeIn>

          <FadeIn delay={100}>
            <article className="background-panel organization-panel">
              <div className="background-panel-title">
                <UsersRound size={20} />
                <h3>{t("organization")}</h3>
              </div>
              <div className="background-panel-list">
                {localizedOrganizations.map((item) => (
                  <div key={`${item.organization}-${item.title}`}>
                    <span>{item.period}</span>
                    <h4>{item.title}</h4>
                    <p className="organization-name">{item.organization}</p>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
            </article>
          </FadeIn>
        </div>

        <div className="skill-atlas">
          <FadeIn>
            <div className="skill-atlas-intro">
              <span className="section-index">{t("capabilityMap")}</span>
              <h3>{t("capabilityTitle")}</h3>
              <p>{t("capabilityDescription")}</p>
              <div className="skill-atlas-stamp"><Sparkles size={16} /> {t("builtPractice")}</div>
            </div>
          </FadeIn>

          <div className="skill-atlas-list">
            {localizedTechnicalSkills.map((group, index) => {
              const Icon = iconMap[group.icon];
              return (
                <FadeIn key={group.group} delay={index * 60}>
                  <article className="skill-atlas-row">
                    <div className="skill-atlas-icon"><Icon size={21} /></div>
                    <div className="skill-atlas-copy">
                      <div className="skill-atlas-title">
                        <h4>{group.group}</h4>
                        <span>{t("proof")}: {group.proof}</span>
                      </div>
                      <p>{group.description}</p>
                      <div className="skill-atlas-tags">
                        {group.skills.map((skill) => <span key={skill}>{skill}</span>)}
                      </div>
                    </div>
                  </article>
                </FadeIn>
              );
            })}
          </div>
        </div>

        <FadeIn>
          <div className="working-style">
            <span>{t("workingStyle")}</span>
            <div className="working-style-list">
              {localizedSoftSkills.map((skill) => {
                const Icon = iconMap[skill.icon];
                return (
                  <div key={skill.name}>
                    <Icon size={17} />
                    <strong>{skill.name}</strong>
                    <p>{skill.note}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default About;
