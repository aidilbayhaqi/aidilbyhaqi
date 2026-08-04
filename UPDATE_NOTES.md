# Portfolio — Eye-Catching Editorial Revision

This revision keeps the core projects and three main case studies while moving the visual language away from generic AI-style glass cards and repetitive gradients.

## What changed

- New editorial hero with a real personal narrative: field IT support → fullstack product development.
- Layered previews for DashAI, YoruService, and Groo.
- Added verified impact strip: 100+ mining vehicles supported, 14+ projects, 3 case studies, and 8 certificates.
- Added a career journey section from 2022 to 2026.
- Added a current-focus sheet for ERP, grounded AI, and production-minded delivery.
- Reworked experience, education, organization history, skills, services, projects, case studies, certificates, and contact into less repetitive layouts.
- Added the latest CV as `/public/aidil-bayhaqi-cv.pdf` with direct buttons in the hero and contact section.
- Kept portfolio filters limited to Fullstack Dev, UI/UX Design, and Design.
- Preserved every existing portfolio project.
- Unavailable Instagram and TikTok placeholders are hidden from the public UI until their real URLs are added.

## Run

```bash
npm install
npm run dev
```

## Production

```bash
npm run build
npm run preview
```

## Work showcase refinement

- Replaced flat rectangular project thumbnails with reusable desktop, mobile, and hybrid device mockups.
- Added desktop browser chrome, monitor stand, phone bezels, interface labels, subtle grid backgrounds, shadows, and responsive hover motion.
- Applied the device preview treatment to every project card, project detail modal, and the three featured case studies.
- DashAI and web projects use desktop previews, YoruService uses a hybrid web/mobile presentation, and Groo uses paired mobile-device previews.
- Kept every original project image and project entry intact.

## Bilingual & social update

- Added a persistent Bahasa Indonesia / English switcher in the desktop header and mobile menu.
- Localized navigation, hero, proof, journey, experience, education, organization, skills, services, work, project details, case studies, certificates, contact form, and footer.
- Language preference is saved in `localStorage` and reused on the next visit.
- Added visible LinkedIn, GitHub, Instagram, and TikTok buttons in the hero, contact section, and footer.
- LinkedIn and GitHub use the current profile URLs. Instagram and TikTok remain visible but disabled until their real URLs are added in `src/data/portfolioData.js`.
- Device-preview labels and accessibility text also follow the selected language.

## GitHub repository audit update

- Audited 30+ public repositories under `github.com/aidilbayhaqi` and curated the strongest work into the portfolio grid.
- Added portfolio entries for QLabs, EduConsult, Mohamad Sinal, Nexus ERP, CloudTop, PropNexus, Dark Cart Hub, Business Analytics Dashboard, and Webverse.
- Added generated visual reconstructions for those projects. The previews are based on repository source structure and available deployed-product information; they are not presented as literal browser screenshots.
- Added live-site and GitHub-source buttons to project cards and detail modals.
- Added multi-category support, allowing Lovable prototypes to appear under both Fullstack Dev and UI/UX Design while Vercel work remains under development.
- Added a collapsible archive of every repository found during the audit, grouped into product systems, commerce/APIs, client work, portfolio evolution, and learning experiments.
- Device mockups now show the actual deployed or GitHub hostname when a link is available.

## Homepage-faithful portfolio previews

The previous abstract SVG mockups have been replaced with raster homepage previews that follow the actual opening layout, typography hierarchy, color direction, navigation, hero copy, and primary interface structure of the referenced projects.

Updated previews:
- DashAI login
- QLabs
- EduConsult
- Mohamad Sinal
- Nexus ERP
- CloudTop
- PropNexus
- Dark Cart Hub
- Business Analytics Dashboard
- Webverse

These are portfolio presentation assets recreated from the deployed pages and/or repository source, rather than browser screenshots captured from production.

## Website portfolio correction — August 2026

- Added a dedicated **Website** filter and made it the default work view.
- Added three CODINGGG website concepts: **Arunika Property**, **Rumah Impian Architecture**, and **Properti ID Lead Platform**.
- Corrected Arunika from jewelry commerce to a premium real-estate website.
- Replaced the Mohamad Sinal thumbnail with a current editorial white–red hero based on the live site and repository assets.
- Refined the Nexus ERP, CloudTop, and Dark Cart thumbnails.
- Renamed **Dark Cart Commerce Hub** to **Dark Cart — Beyond Shopping** and strengthened its project copy.
- Removed **Employee Attendance Website**, **Filament Blog Website**, and **ERD Ecommerce** from the project grid.
- Moved existing website-design work from the older portfolio into the new Website filter.

