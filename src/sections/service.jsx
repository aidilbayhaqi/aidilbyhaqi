import {
  ArrowUpRight,
  Blocks,
  Bot,
  Code2,
  PanelsTopLeft,
  Smartphone,
  Workflow,
} from "lucide-react";
import FadeIn from "../components/fadeIn";
import { services } from "../data/portfolioData";
import { useLanguage } from "../i18n/LanguageContext";

const iconMap = { Code2, Smartphone, Workflow, Bot, Blocks, PanelsTopLeft };

const Service = () => {
  const { t, translateData } = useLanguage();
  const localizedServices = translateData(services);

  return (
    <section id="services" className="section-space services-section">
      <div className="container-shell">
        <FadeIn>
          <div className="services-heading">
            <div>
              <span className="section-index">{t("servicesIndex")}</span>
              <h2>{t("servicesTitle")}</h2>
            </div>
            <p>{t("servicesDescription")}</p>
          </div>
        </FadeIn>

        <div className="services-list">
          {localizedServices.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <FadeIn key={service.title} delay={index * 70}>
                <article className="service-row">
                  <div className="service-number">0{index + 1}</div>
                  <div className="service-icon"><Icon size={22} /></div>
                  <div className="service-copy">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                  <div className="service-skills">
                    {service.skills.map((skill) => <span key={skill}>{skill}</span>)}
                  </div>
                  <ArrowUpRight className="service-arrow" size={21} />
                </article>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn>
          <div className="service-footnote">
            <span>{t("bestFit")}</span>
            <p>{t("bestFitText")}</p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Service;
