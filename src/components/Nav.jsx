import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const LINKS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export default function Nav() {
  const [active, setActive] = useState("about");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);

    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(
      Boolean
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    sections.forEach((s) => observer.observe(s));

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
      <div className="nav-inner container">
        <button className="brand mono" onClick={() => scrollTo("top")}>
          A<span className="gradient-text">.</span>
        </button>

        <div className="pill">
          {LINKS.map((l) => (
            <button
              key={l.id}
              className={`pill-link ${active === l.id ? "is-active" : ""}`}
              onClick={() => scrollTo(l.id)}
            >
              {l.label}
              {active === l.id && <span className="pill-dot" />}
            </button>
          ))}
        </div>

        <div className="nav-right">
          <ThemeToggle />
          <button className="nav-cta mono" onClick={() => scrollTo("contact")}>
            Let's talk
          </button>
        </div>
      </div>

      <style>{`
        .nav {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          padding: 22px 0;
          transition: padding 0.3s ease, background 0.3s ease, border-color 0.3s ease;
          border-bottom: 1px solid transparent;
        }
        .nav-scrolled {
          padding: 14px 0;
          background: var(--nav-bg-scrolled);
          backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--border);
        }
        .nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }
        .brand {
          background: none; border: none;
          font-size: 20px; font-weight: 700; color: var(--text);
        }
        .pill {
          display: flex;
          gap: 4px;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 999px;
          padding: 5px;
        }
        .pill-link {
          position: relative;
          background: none; border: none;
          font-size: 13.5px;
          color: var(--text-muted);
          padding: 8px 16px;
          border-radius: 999px;
          transition: color 0.25s ease;
        }
        .pill-link.is-active { color: var(--text); }
        .pill-dot {
          position: absolute;
          left: 50%; bottom: 4px;
          transform: translateX(-50%);
          width: 4px; height: 4px;
          border-radius: 50%;
          background: var(--gradient);
        }
        .nav-right {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .nav-cta {
          background: var(--gradient);
          border: none;
          color: var(--on-gradient);
          font-weight: 600;
          font-size: 13px;
          padding: 10px 18px;
          border-radius: 999px;
          white-space: nowrap;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .nav-cta:hover {
          transform: translateY(-1px);
          box-shadow: 0 8px 24px rgba(139,92,246,0.35);
        }
        @media (max-width: 680px) {
          .pill { display: none; }
        }
        @media (max-width: 420px) {
          .nav-cta { display: none; }
        }
      `}</style>
    </nav>
  );
}
