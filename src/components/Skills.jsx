import { useReveal } from "../hooks/useReveal";
import { skills } from "../data/content";

function SkillBar({ name, level, delay }) {
  const [ref, visible] = useReveal(0.3);
  return (
    <div ref={ref} className="skill-row glass">
      <div className="skill-top">
        <span className="skill-name">{name}</span>
        <span className="skill-level mono">{level}%</span>
      </div>
      <div className="skill-track">
        <div
          className="skill-fill"
          style={{
            width: visible ? `${level}%` : "0%",
            transitionDelay: `${delay}ms`,
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const [ref, visible] = useReveal();

  return (
    <section id="skills" className="section">
      <div className="container">
        <p className="section-tag">
          <span className="dash" /> 02 / Skills
        </p>
        <h2 className={`section-title reveal ${visible ? "visible" : ""}`} ref={ref}>
          Tools I reach for
        </h2>

        <div className="skills-grid">
          {skills.map((s, i) => (
            <SkillBar key={s.name} {...s} delay={i * 60} />
          ))}
        </div>
      </div>

      <style>{`
        .skills-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }
        .skill-row { padding: 18px 20px; }
        .skill-row:hover { transform: translateY(-3px); border-color: var(--border-strong); }
        .skill-top {
          display: flex;
          justify-content: space-between;
          margin-bottom: 9px;
          font-size: 14.5px;
        }
        .skill-name { font-weight: 500; }
        .skill-level { color: var(--text-muted); font-size: 12.5px; }
        .skill-track {
          height: 6px;
          border-radius: 999px;
          background: var(--surface-strong);
          overflow: hidden;
        }
        .skill-fill {
          height: 100%;
          border-radius: 999px;
          background: var(--gradient);
          width: 0%;
          transition: width 1s cubic-bezier(0.16,1,0.3,1);
        }
        @media (max-width: 700px) {
          .skills-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
