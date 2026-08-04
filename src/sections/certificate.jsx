import { useEffect, useState } from "react";
import { Award, ArrowUpRight, X } from "lucide-react";
import FadeIn from "../components/fadeIn";
import { certificates } from "../data/portfolioData";
import { useLanguage } from "../i18n/LanguageContext";

const CertificateModal = ({ certificate, onClose }) => {
  const { t } = useLanguage();

  useEffect(() => {
    if (!certificate) return undefined;
    const handleEscape = (event) => event.key === "Escape" && onClose();
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [certificate, onClose]);

  if (!certificate) return null;

  return (
    <div
      className="certificate-modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-label={`${certificate.title} ${t("certificate")}`}
      onMouseDown={(event) => event.target === event.currentTarget && onClose()}
    >
      <div className="certificate-modal-sheet">
        <button type="button" onClick={onClose} aria-label={t("closeCertificate")}><X size={20} /></button>
        <div className="certificate-modal-meta">
          <span>{certificate.issuer}</span>
          <strong>{certificate.title}</strong>
          <small>{certificate.date}</small>
        </div>
        <img src={certificate.image} alt={`${certificate.title} ${t("issuedBy")} ${certificate.issuer}`} />
      </div>
    </div>
  );
};

const Certificates = () => {
  const { t } = useLanguage();
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  return (
    <section id="certificate" className="section-space learning-section">
      <div className="container-shell">
        <FadeIn>
          <div className="learning-heading">
            <div>
              <span className="section-index">{t("learningIndex")}</span>
              <h2>{t("learningTitle")}</h2>
            </div>
            <p>{t("learningDescription")}</p>
          </div>
        </FadeIn>

        <div className="certificate-grid">
          {certificates.map((certificate, index) => (
            <FadeIn key={`${certificate.issuer}-${certificate.title}`} delay={(index % 4) * 70}>
              <button
                type="button"
                onClick={() => setSelectedCertificate(certificate)}
                className="certificate-item group"
                aria-label={`${t("previewCertificate")} ${certificate.title}`}
              >
                <div className="certificate-thumb">
                  <img src={certificate.image} alt={certificate.title} loading="lazy" />
                  <div><ArrowUpRight size={18} /></div>
                </div>
                <div className="certificate-copy">
                  <Award size={18} />
                  <div><span>{certificate.issuer} · {certificate.date}</span><h3>{certificate.title}</h3></div>
                  <small>{String(index + 1).padStart(2, "0")}</small>
                </div>
              </button>
            </FadeIn>
          ))}
        </div>
      </div>

      <CertificateModal certificate={selectedCertificate} onClose={() => setSelectedCertificate(null)} />
    </section>
  );
};

export default Certificates;
