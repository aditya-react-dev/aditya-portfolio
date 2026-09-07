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
      setCount(Math.max(0, Math.floor(progress * value)));
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
        <div className="hero-layout">
          <div className="hero-copy">
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
              <a className="btn btn-primary" href={profile.resumeFile} download>
                Download résumé <span aria-hidden="true">↓</span>
              </a>
              <a
                className="btn btn-ghost"
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Explore my work <span aria-hidden="true">↗</span>
              </a>
            </div>

            <div className="hero-proof mono">
              <span className="proof-check">✓</span> React · Redux · Tailwind · REST APIs
            </div>
          </div>

          <div className="hero-visual" aria-label="Developer impact snapshot">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="visual-card main-card glass">
              <div className="window-bar"><span /><span /><span /><p className="mono">impact.js</p></div>
              <div className="code-line mono"><span>const</span> impact = {'{'}</div>
              <div className="code-line indent mono">performance: <b>"90+"</b>,</div>
              <div className="code-line indent mono">loadTime: <b>"-20%"</b>,</div>
              <div className="code-line indent mono">engagement: <b>"+25%"</b></div>
              <div className="code-line mono">{'}'};</div>
              <div className="performance-row">
                <span>Performance</span><strong>90+</strong>
                <div className="performance-track"><i /></div>
              </div>
            </div>
            <div className="visual-card floating-card floating-top glass">
              <span className="mono">01</span><strong>3+ years</strong><small>building on the web</small>
            </div>
            <div className="visual-card floating-card floating-bottom glass">
              <span className="status-dot" /><div><strong>Available</strong><small>for the right team</small></div>
            </div>
          </div>
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
        .hero-inner { position: relative; z-index: 1; width: 100%; }
        .hero-layout { display: grid; grid-template-columns: minmax(0, 1.12fr) minmax(300px, .88fr); gap: 48px; align-items: center; }
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
          max-width: 700px;
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
          display: inline-flex; align-items: center; gap: 9px;
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
        .hero-visual { min-height: 390px; position: relative; display: grid; place-items: center; isolation: isolate; }
        .visual-card { position: relative; z-index: 2; }
        .main-card { width: min(100%, 355px); padding: 18px; animation: hero-float 6s ease-in-out infinite; background: color-mix(in srgb, var(--bg) 76%, transparent); }
        .window-bar { display: flex; align-items: center; gap: 6px; border-bottom: 1px solid var(--border); padding: 0 0 14px; margin-bottom: 22px; }
        .window-bar span { width: 7px; height: 7px; border-radius: 50%; background: var(--text-muted); opacity: .5; }
        .window-bar p { margin-left: auto; color: var(--text-muted); font-size: 10px; }
        .code-line { color: var(--text-muted); font-size: clamp(11px, 1.25vw, 13px); line-height: 1.9; }
        .code-line span { color: var(--violet); } .code-line b { color: var(--cyan); font-weight: 500; }
        .indent { padding-left: 22px; }
        .performance-row { margin-top: 20px; padding-top: 15px; border-top: 1px solid var(--border); display: grid; grid-template-columns: 1fr auto; gap: 7px; font: 11px 'JetBrains Mono', monospace; color: var(--text-muted); }
        .performance-row strong { color: #4ade80; } .performance-track { grid-column: 1 / -1; height: 5px; border-radius: 99px; background: var(--surface-strong); overflow: hidden; }
        .performance-track i { display: block; width: 90%; height: 100%; background: linear-gradient(90deg, var(--violet), #4ade80); border-radius: inherit; animation: load-in 1.7s cubic-bezier(.16,1,.3,1); }
        .floating-card { position: absolute; padding: 13px 16px; display: flex; flex-direction: column; min-width: 150px; animation: hero-float 5s ease-in-out infinite reverse; }
        .floating-card span:first-child { color: var(--cyan); font-size: 10px; margin-bottom: 6px; }.floating-card strong { font: 600 14px 'Sora', sans-serif; }.floating-card small { color: var(--text-muted); font-size: 10px; margin-top: 2px; }
        .floating-top { top: 18px; right: -6px; }.floating-bottom { bottom: 23px; left: -8px; flex-direction: row; align-items: center; gap: 10px; animation-delay: -.8s; }
        .floating-bottom .status-dot { width: 8px; height: 8px; border-radius: 50%; background: #4ade80; box-shadow: 0 0 0 5px rgba(74,222,128,.12); margin: 0; flex-shrink: 0; }.floating-bottom div { display: flex; flex-direction: column; }
        .orbit { position: absolute; z-index: 0; border: 1px solid var(--border); border-radius: 50%; }.orbit-one { width: 340px; height: 340px; animation: spin 22s linear infinite; }.orbit-two { width: 440px; height: 280px; border-color: rgba(34,211,238,.16); transform: rotate(-26deg); animation: spin-reverse 28s linear infinite; }
        @keyframes hero-float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-11px); } } @keyframes spin { to { transform: rotate(360deg); } } @keyframes spin-reverse { to { transform: rotate(-386deg); } } @keyframes load-in { from { width: 0; } }
        .hero-proof { display: inline-flex; align-items: center; gap: 8px; color: var(--text-muted); font-size: 12px; margin-bottom: 52px; }
        .proof-check { color: #4ade80; font-size: 15px; }
        .stat-value { font-size: 2rem; font-weight: 800; font-family: 'Sora', sans-serif; }
        .stat-label { font-size: 12px; color: var(--text-muted); margin-top: 4px; }
        @media (max-width: 820px) {
          .hero { padding: 132px 0 70px; min-height: auto; }
          .hero-layout { grid-template-columns: 1fr; gap: 22px; }
          .hero-visual { min-height: 330px; margin: 8px auto 18px; width: min(100%, 430px); }
        }
        @media (max-width: 640px) {
          .hero { padding-top: 110px; }
          .hero-stats { gap: 30px; }
          .hero-visual { min-height: 282px; transform: scale(.92); transform-origin: top center; margin-bottom: -10px; }
          .main-card { width: 310px; }.orbit-one { width: 290px; height: 290px; }.orbit-two { width: 360px; height: 230px; }.floating-top { right: 0; }.floating-bottom { left: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .main-card, .floating-card, .orbit, .performance-track i { animation: none; }
        }
      `}</style>
    </section>
  );
}
