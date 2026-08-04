import { useLanguage } from "../i18n/LanguageContext";

const getDisplayAddress = (previewUrl, safeId) => {
  if (!previewUrl) return `aidil.build/${safeId}`;

  try {
    const url = new URL(previewUrl);
    const path = url.pathname === "/" ? "" : url.pathname.replace(/\/$/, "");
    return `${url.hostname.replace(/^www\./, "")}${path}`;
  } catch {
    return `aidil.build/${safeId}`;
  }
};

const DevicePreview = ({
  image,
  alt,
  device = "desktop",
  projectId = "project",
  variant = "card",
  previewUrl = "",
}) => {
  const { t } = useLanguage();
  const safeId = projectId.replace(/[^a-z0-9-]/gi, "").toLowerCase();
  const displayAddress = getDisplayAddress(previewUrl, safeId);
  const label = device === "mobile"
    ? t("mobileApplication")
    : device === "hybrid"
      ? t("hybridApplication")
      : t("desktopApplication");

  return (
    <div className={`device-preview device-preview-${device} device-preview-${variant}`}>
      <div className="device-preview-grid" aria-hidden="true" />
      <div className="device-preview-label" aria-hidden="true">
        <span>{label}</span>
        <small>{previewUrl ? t("liveOrSourcePreview") : `${safeId}.preview`}</small>
      </div>

      {device !== "mobile" && (
        <div className="device-desktop" aria-label={`${alt} ${t("desktopMockup")}`}>
          <div className="device-desktop-shell">
            <div className="device-browser-bar" aria-hidden="true">
              <div className="device-browser-dots"><span /><span /><span /></div>
              <div className="device-browser-address">{displayAddress}</div>
              <div className="device-browser-menu"><i /><i /><i /></div>
            </div>
            <div className="device-desktop-screen"><img src={image} alt={alt} loading="lazy" /></div>
          </div>
          <div className="device-desktop-neck" aria-hidden="true" />
          <div className="device-desktop-base" aria-hidden="true" />
        </div>
      )}

      {device === "mobile" && (
        <div className="device-mobile-pair" aria-label={`${alt} ${t("mobileMockup")}`}>
          <div className="device-phone device-phone-left">
            <div className="device-phone-speaker" aria-hidden="true" />
            <div className="device-phone-screen device-phone-crop-left"><img src={image} alt={alt} loading="lazy" /></div>
            <div className="device-phone-home" aria-hidden="true" />
          </div>
          <div className="device-phone device-phone-right" aria-hidden="true">
            <div className="device-phone-speaker" />
            <div className="device-phone-screen device-phone-crop-right"><img src={image} alt="" loading="lazy" /></div>
            <div className="device-phone-home" />
          </div>
        </div>
      )}

      {device === "hybrid" && (
        <div className="device-hybrid-phone" aria-label={`${alt} ${t("mobileCompanion")}`}>
          <div className="device-phone-speaker" aria-hidden="true" />
          <div className="device-phone-screen device-phone-crop-right"><img src={image} alt="" loading="lazy" /></div>
          <div className="device-phone-home" aria-hidden="true" />
        </div>
      )}

      <div className="device-preview-floor" aria-hidden="true" />
    </div>
  );
};

export default DevicePreview;
