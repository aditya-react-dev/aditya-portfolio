import { useRef } from "react";
import { useReveal } from "../hooks/useReveal";
import { projects } from "../data/content";

function ProjectCard({ project, index }) {
  const [ref, visible] = useReveal(0.15);
  const cardRef = useRef(null);

  const handleMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -10;
    card.style.transform = `perspective(700px) rotateX(${y}deg) rotateY(${x}deg) translateY(-4px)`;
  };
  const handleLeave = () => {
    if (cardRef.current) cardRef.current.style.transform = "";
  };

  return (
    <div
      ref={ref}
      className={`project-card glass reveal ${visible ? "visible" : ""}`}
      style={{ transitionDelay: `${index * 90}ms` }}
    >
      <div
        ref={cardRef}
        className="project-card-inner"
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
      >
        <div className="project-glow" />
        <div className="project-meta mono"><span>Selected work</span><span>{project.number}</span></div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="tags">
          {project.tags.map((t) => (
            <span key={t} className="tag mono">
              {t}
            </span>
          ))}
        </div>
        <div className="project-links">
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noreferrer">
              Live demo ↗
            </a>
          )}
        </div>
      </div>

      <style>{`
        .project-card { border-radius: var(--radius); overflow: hidden; min-height: 310px; }
        .project-card-inner {
          padding: 30px;
          height: 100%;
          display: flex;
          flex-direction: column;
          gap: 14px;
          position: relative;
          transition: transform 0.15s ease-out;
          transform-style: preserve-3d;
        }
        .project-glow {
          position: absolute;
          top: -60%; right: -30%;
          width: 220px; height: 220px;
          background: radial-gradient(circle, rgba(139,92,246,0.18), transparent 70%);
          pointer-events: none;
        }
        .project-meta { display: flex; justify-content: space-between; color: var(--text-muted); font-size: 10px; letter-spacing: .08em; text-transform: uppercase; margin-bottom: 20px; }
        .project-card-inner h3 { font-size: 1.3rem; font-weight: 700; }
        .project-card-inner p { color: var(--text-muted); font-size: 14.5px; flex-grow: 1; }
        .tags { display: flex; flex-wrap: wrap; gap: 7px; }
        .tag {
          font-size: 11px;
          color: var(--cyan);
          background: rgba(34,211,238,0.08);
          padding: 4px 10px;
          border-radius: 6px;
        }
        .project-card:hover { border-color: var(--border-strong); box-shadow: var(--shadow-glow); }
        .project-links { display: flex; gap: 18px; margin-top: 6px; }
        .project-links a {
          font-family: 'JetBrains Mono', monospace;
          font-size: 13px;
          color: var(--text);
          border-bottom: 1px solid var(--border-strong);
          padding-bottom: 1px;
          transition: color 0.2s ease, border-color 0.2s ease;
        }
        .project-links a:hover { color: var(--cyan); border-color: var(--cyan); }
      `}</style>
    </div>
  );
}

export default function Projects() {
  const [ref, visible] = useReveal();

  return (
    <section id="projects" className="section">
      <div className="container">
        <p className="section-tag">
          <span className="dash" /> 03 / Projects
        </p>
        <h2 className={`section-title reveal ${visible ? "visible" : ""}`} ref={ref}>
          Things I've built
        </h2>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 22px;
        }
        @media (max-width: 720px) {
          .projects-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
