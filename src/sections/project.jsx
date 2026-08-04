import { useEffect, useMemo, useState } from "react";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  ChevronDown,
  Code2,
  ExternalLink,
  FolderGit2,
  Github,
  Layers3,
  X,
} from "lucide-react";
import FadeIn from "../components/fadeIn";
import DevicePreview from "../components/DevicePreview";
import { githubArchive, projects } from "../data/portfolioData";
import { useLanguage } from "../i18n/LanguageContext";

const filters = ["Fullstack Dev", "Website", "UI/UX Design", "Design"];

const ProjectLinks = ({ project, compact = false }) => {
  const { t } = useLanguage();

  if (!project.liveUrl && !project.sourceUrl) return null;

  return (
    <div className={compact ? "work-card-links" : "project-modal-links"}>
      {project.liveUrl && (
        <a href={project.liveUrl} target="_blank" rel="noreferrer">
          <ExternalLink size={compact ? 14 : 16} />
          <span>{t("livePreview")}</span>
        </a>
      )}
      {project.sourceUrl && (
        <a href={project.sourceUrl} target="_blank" rel="noreferrer">
          <Github size={compact ? 14 : 16} />
          <span>{t("sourceCode")}</span>
        </a>
      )}
    </div>
  );
};

const ProjectModal = ({ project, onClose }) => {
  const { t } = useLanguage();

  useEffect(() => {
    if (!project) return undefined;
    const handleEscape = (event) => event.key === "Escape" && onClose();
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="project-modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      onMouseDown={(event) => event.target === event.currentTarget && onClose()}
    >
      <article className="project-modal-sheet">
        <div className="project-modal-preview">
          <DevicePreview
            image={project.image}
            alt={`${project.title} ${t("interfacePreview")}`}
            device={project.previewDevice || "desktop"}
            projectId={project.id}
            variant="modal"
            previewUrl={project.liveUrl || project.sourceUrl}
          />
          <button type="button" onClick={onClose} aria-label={t("closeProject")}>
            <X size={20} />
          </button>
        </div>

        <div className="project-modal-content">
          <div className="project-modal-main">
            <div className="project-category-row">
              {(project.categories || [project.category]).map((category) => (
                <span className="section-index" key={category}>{category}</span>
              ))}
            </div>
            <h2 id="project-modal-title">{project.title}</h2>
            <p className="project-modal-role">{project.role}</p>
            <p className="project-modal-summary">{project.summary}</p>
            {project.previewSource && (
              <p className="project-preview-source">{t("previewNote")}: {project.previewSource}</p>
            )}
            <ProjectLinks project={project} />

            {(project.challenge || project.solution || project.result) && (
              <div className="project-modal-story">
                {project.challenge && <div><span>{t("problem")}</span><p>{project.challenge}</p></div>}
                {project.solution && <div><span>{t("approach")}</span><p>{project.solution}</p></div>}
                {project.result && <div><span>{t("result")}</span><p>{project.result}</p></div>}
              </div>
            )}
          </div>

          <aside className="project-modal-side">
            <div>
              <h3><Code2 size={17} /> {t("builtWith")}</h3>
              <div className="project-modal-tags">
                {project.stack.map((skill) => <span key={skill}>{skill}</span>)}
              </div>
            </div>
            <div>
              <h3><BriefcaseBusiness size={17} /> {t("projectTrained")}</h3>
              <div className="project-modal-tags muted">
                {project.softSkills.map((skill) => <span key={skill}>{skill}</span>)}
              </div>
            </div>
          </aside>
        </div>
      </article>
    </div>
  );
};

const RepositoryArchive = () => {
  const { t } = useLanguage();
  const groupedRepositories = useMemo(() => githubArchive.reduce((groups, repository) => {
    groups[repository.group] = [...(groups[repository.group] || []), repository];
    return groups;
  }, {}), []);

  return (
    <FadeIn delay={100}>
      <details className="github-archive">
        <summary>
          <div>
            <FolderGit2 size={20} />
            <span>
              <strong>{t("repositoryArchive")}</strong>
              <small>{t("repositoryArchiveDescription")}</small>
            </span>
          </div>
          <span className="github-archive-count">{githubArchive.length} repos</span>
          <ChevronDown className="github-archive-chevron" size={19} />
        </summary>

        <div className="github-archive-grid">
          {Object.entries(groupedRepositories).map(([group, repositories]) => (
            <div className="github-archive-group" key={group}>
              <h3>{t(`repoGroup${group.replace(/[^a-z]/gi, "")}`)}</h3>
              <div>
                {repositories.map((repository) => (
                  <a href={repository.url} target="_blank" rel="noreferrer" key={repository.name}>
                    <Github size={13} />
                    <span>{repository.name}</span>
                    <ArrowUpRight size={12} />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <a className="github-archive-all" href="https://github.com/aidilbayhaqi?tab=repositories" target="_blank" rel="noreferrer">
          <Github size={16} /> {t("viewAllGithub")} <ArrowUpRight size={14} />
        </a>
      </details>
    </FadeIn>
  );
};

const Project = () => {
  const { t, translateData } = useLanguage();
  const [activeFilter, setActiveFilter] = useState("Website");
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const localizedProjects = useMemo(() => translateData(projects), [translateData]);

  const visibleProjects = useMemo(
    () => localizedProjects.filter((project) => (project.categories || [project.category]).includes(activeFilter)),
    [activeFilter, localizedProjects],
  );

  const counts = useMemo(
    () => Object.fromEntries(filters.map((filter) => [
      filter,
      projects.filter((project) => (project.categories || [project.category]).includes(filter)).length,
    ])),
    [],
  );

  const selectedProject = localizedProjects.find((project) => project.id === selectedProjectId) || null;
  const filterLabel = (filter) => ({
    "Fullstack Dev": t("fullstack"),
    Website: t("website"),
    "UI/UX Design": t("uiux"),
    Design: t("design"),
  }[filter] || filter);

  return (
    <section id="projects" className="section-space work-section">
      <div className="container-shell">
        <FadeIn>
          <div className="work-heading">
            <div>
              <span className="section-index">{t("workIndex")}</span>
              <h2>{t("workTitle")}</h2>
            </div>
            <p>{t("workDescription")}</p>
          </div>
        </FadeIn>

        <FadeIn delay={50}>
          <div className="repository-audit">
            <div className="repository-audit-icon"><Github size={22} /></div>
            <div>
              <strong>{t("repositoriesReviewed")}</strong>
              <p>{t("repositoriesReviewedDescription")}</p>
            </div>
            <a href="https://github.com/aidilbayhaqi?tab=repositories" target="_blank" rel="noreferrer">
              {t("openGithub")} <ArrowUpRight size={14} />
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={80}>
          <div className="work-filter" role="tablist" aria-label={t("projectCategories")}>
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                role="tab"
                aria-selected={activeFilter === filter}
                onClick={() => setActiveFilter(filter)}
                className={activeFilter === filter ? "active" : ""}
              >
                <span>{filterLabel(filter)}</span>
                <small>{String(counts[filter]).padStart(2, "0")}</small>
              </button>
            ))}
          </div>
        </FadeIn>

        <div className="work-grid">
          {visibleProjects.map((project, index) => {
            const wide = index === 0 || index % 5 === 4;
            const categoryList = project.categories || [project.category];
            return (
              <FadeIn key={project.id} delay={(index % 6) * 70} className={wide ? "work-item-wide" : ""}>
                <article className="work-card group">
                  <button className="work-card-main" type="button" onClick={() => setSelectedProjectId(project.id)}>
                    <div
                      className="work-card-visual"
                      style={{ "--device-accent": ["#c8ff6a", "#a78bfa", "#67e8f9", "#f6b56b"][index % 4] }}
                    >
                      <DevicePreview
                        image={project.image}
                        alt={`${project.title} ${t("interfacePreview")}`}
                        device={project.previewDevice || "desktop"}
                        projectId={project.id}
                        variant={wide ? "wide-card" : "card"}
                        previewUrl={project.liveUrl || project.sourceUrl}
                      />
                      {project.featured && <div className="work-card-featured">{t("caseStudy")}</div>}
                      <div className="work-card-open"><ArrowUpRight size={19} /></div>
                    </div>
                    <div className="work-card-copy">
                      <div className="work-card-index">{String(index + 1).padStart(2, "0")}</div>
                      <div>
                        <span><Layers3 size={13} /> {categoryList.map(filterLabel).join(" · ")}</span>
                        <h3>{project.title}</h3>
                        <p>{project.summary}</p>
                        <div className="work-card-stack">
                          {project.stack.slice(0, wide ? 6 : 4).map((skill) => <em key={skill}>{skill}</em>)}
                        </div>
                      </div>
                    </div>
                  </button>
                  <ProjectLinks project={project} compact />
                </article>
              </FadeIn>
            );
          })}
        </div>

        <RepositoryArchive />
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProjectId(null)} />
    </section>
  );
};

export default Project;
