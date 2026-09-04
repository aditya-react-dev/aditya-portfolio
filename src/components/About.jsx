import { useReveal } from "../hooks/useReveal";
import { about, strengths } from "../data/content";

export default function About() {
  const [ref, visible] = useReveal();

  return (
    <section id="about" className="section">
      <div className="container">
        <p className="section-tag">
          <span className="dash" /> 01 / About
        </p>
        <div
          ref={ref}
          className={`about-grid reveal ${visible ? "visible" : ""}`}
        >
          <h2 className="section-title about-heading">
            Building interfaces people <span className="gradient-text">enjoy using.</span>
          </h2>
          <div className="about-body">
            {about.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
        <div className="strengths">
          {strengths.map((strength) => (
            <article key={strength.number} className="strength glass">
              <span className="mono strength-number">{strength.number}</span>
              <h3>{strength.title}</h3>
              <p>{strength.text}</p>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          gap: 56px;
          align-items: start;
        }
        .about-heading {
          margin-bottom: 0;
          position: sticky;
          top: 120px;
        }
        .about-body {
          display: flex;
          flex-direction: column;
          gap: 20px;
          color: var(--text-muted);
          font-size: 1.02rem;
        }
        .strengths { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; margin-top: 66px; }
        .strength { padding: 23px; position: relative; overflow: hidden; }
        .strength::after { content: ""; position: absolute; inset: auto -30px -45px auto; width: 130px; height: 130px; border-radius: 50%; background: radial-gradient(circle, rgba(139,92,246,.18), transparent 70%); }
        .strength:hover { transform: translateY(-5px); border-color: var(--border-strong); }
        .strength-number { display: block; color: var(--cyan); font-size: 11px; margin-bottom: 25px; }
        .strength h3 { font-size: 1rem; margin-bottom: 8px; }
        .strength p { color: var(--text-muted); font-size: 13px; line-height: 1.65; }
        @media (max-width: 800px) {
          .about-grid { grid-template-columns: 1fr; gap: 24px; }
          .about-heading { position: static; }
          .strengths { grid-template-columns: 1fr; margin-top: 38px; }
        }
      `}</style>
    </section>
  );
}
