import { useReveal } from "../hooks/useReveal";
import { experience } from "../data/content";

function TimelineItem({ item, index }) {
  const [ref, visible] = useReveal(0.25);
  return (
    <div
      ref={ref}
      className={`tl-item reveal ${visible ? "visible" : ""}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="tl-dot" />
      <div className="tl-content glass">
        <div className="tl-head">
          <h3>{item.company}</h3>
          <span className="tl-period mono">{item.period}</span>
        </div>
        <div className="tl-role mono">
          {item.role} · {item.location}
        </div>
        <ul>
          {item.points.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Experience() {
  const [ref, visible] = useReveal();

  return (
    <section id="experience" className="section">
      <div className="container">
        <p className="section-tag">
          <span className="dash" /> 04 / Experience
        </p>
        <h2 className={`section-title reveal ${visible ? "visible" : ""}`} ref={ref}>
          Where I've worked
        </h2>

        <div className="timeline">
          {experience.map((item, i) => (
            <TimelineItem key={item.company} item={item} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        .timeline {
          position: relative;
          padding-left: 28px;
          display: flex;
          flex-direction: column;
          gap: 30px;
        }
        .timeline::before {
          content: "";
          position: absolute;
          left: 5px; top: 6px; bottom: 6px;
          width: 1px;
          background: linear-gradient(var(--violet), var(--cyan));
          opacity: 0.4;
        }
        .tl-item { position: relative; }
        .tl-dot {
          position: absolute;
          left: -28px; top: 26px;
          width: 11px; height: 11px;
          border-radius: 50%;
          background: var(--gradient);
          box-shadow: 0 0 0 4px var(--bg);
        }
        .tl-content { padding: 26px 28px; }
        .tl-head {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 8px;
          align-items: baseline;
        }
        .tl-content h3 { font-size: 1.1rem; font-weight: 700; }
        .tl-period { color: var(--text-muted); font-size: 12.5px; }
        .tl-role { color: var(--cyan); font-size: 13px; margin: 8px 0 16px; }
        .tl-content ul {
          padding-left: 18px;
          color: var(--text-muted);
          font-size: 14.5px;
          display: flex;
          flex-direction: column;
          gap: 7px;
        }
      `}</style>
    </section>
  );
}
