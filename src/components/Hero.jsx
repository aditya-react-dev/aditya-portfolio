import { useEffect, useState } from "react";
import { profile, stats } from "../data/content";

function useTypewriter(words, speed = 65, pause = 1400) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timeout;

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(
        () => setText(current.slice(0, text.length + 1)),
        speed
      );
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(
        () => setText(current.slice(0, text.length - 1)),
        speed / 2
      );
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setWordIndex((i) => i + 1);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, speed, pause]);

  return text;
}

function Counter({ value, suffix }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 1200;
    const start = performance.now();
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      setCount(value);
      return;
    }
    let raf;
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [value]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function Hero() {
  const typed = useTypewriter(profile.roles);

  return (
    <section id="top" className="hero">
      <div className="container hero-inner">
        <p className="mono hero-kicker">
          <span className="ping" /> Open to frontend opportunities
        </p>

        <h1 className="hero-title">
          Designing the web with <span className="gradient-text">intent.</span>
          <span className="hero-intro">I'm {profile.name}{profile.lastName && ` ${profile.lastName}`}.</span>
        </h1>

        <div className="hero-role mono">
          <span className="gradient-text">{typed}</span>
          <span className="caret" />
        </div>

        <p className="hero-tagline">{profile.tagline}</p>

        <div className="hero-actions">
          <a
            className="btn btn-primary"
            href={profile.resumeFile}
            download
          >
            Download résumé
          </a>
          <a
            className="btn btn-ghost"
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            View work
          </a>
        </div>

        <div className="hero-proof mono">
          <span className="proof-check">✓</span> React · Redux · Tailwind · REST APIs
        </div>

        <div className="hero-stats">
          {stats.map((s) => (
            <div key={s.label} className="stat">
              <div className="stat-value gradient-text">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <div className="stat-label mono">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding-top: 90px;
          position: relative;
        }
        .hero-inner { position: relative; z-index: 1; }
        .hero-kicker {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          font-size: 13px;
          color: var(--text-muted);
          border: 1px solid var(--border);
          padding: 7px 14px 7px 10px;
          border-radius: 999px;
          margin-bottom: 32px;
        }
        .ping {
          width: 7px; height: 7px;
          border-radius: 50%;
          background: #4ade80;
          box-shadow: 0 0 0 0 rgba(74,222,128,0.6);
          animation: ping 2s infinite;
        }
        @keyframes ping {
          0% { box-shadow: 0 0 0 0 rgba(74,222,128,0.5); }
          70% { box-shadow: 0 0 0 8px rgba(74,222,128,0); }
          100% { box-shadow: 0 0 0 0 rgba(74,222,128,0); }
        }
        .hero-title {
          font-size: clamp(2.6rem, 7vw, 4.6rem);
          font-weight: 800;
          line-height: 1.03;
          max-width: 820px;
        }
        .hero-intro { display: block; color: var(--text-muted); font-weight: 500; margin-top: 10px; }
        .hero-role {
          font-size: clamp(1.1rem, 2.6vw, 1.5rem);
          margin: 22px 0 26px;
          height: 1.6em;
          font-weight: 600;
        }
        .caret {
          display: inline-block;
          width: 2px; height: 1em;
          background: var(--cyan);
          margin-left: 4px;
          vertical-align: middle;
          animation: blink 0.9s step-end infinite;
        }
        @keyframes blink { 50% { opacity: 0; } }
        .hero-tagline {
          max-width: 560px;
          color: var(--text-muted);
          font-size: 1.08rem;
          margin-bottom: 38px;
        }
        .hero-actions { display: flex; gap: 14px; flex-wrap: wrap; margin-bottom: 18px; }
        .btn {
          font-family: 'JetBrains Mono', monospace;
          font-size: 14px;
          padding: 13px 24px;
          border-radius: 10px;
          border: 1px solid var(--border);
          transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
          display: inline-flex; align-items: center;
        }
        .btn-primary {
          background: var(--gradient);
          color: var(--on-gradient);
          font-weight: 600;
          border: none;
        }
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(139,92,246,0.35);
        }
        .btn-ghost:hover {
          border-color: var(--border-strong);
          transform: translateY(-2px);
        }
        .hero-stats {
          display: flex;
          gap: 48px;
          flex-wrap: wrap;
        }
        .hero-proof { display: inline-flex; align-items: center; gap: 8px; color: var(--text-muted); font-size: 12px; margin-bottom: 52px; }
        .proof-check { color: #4ade80; font-size: 15px; }
        .stat-value { font-size: 2rem; font-weight: 800; font-family: 'Sora', sans-serif; }
        .stat-label { font-size: 12px; color: var(--text-muted); margin-top: 4px; }
        @media (max-width: 640px) {
          .hero { padding-top: 110px; }
          .hero-stats { gap: 30px; }
        }
      `}</style>
    </section>
  );
}
