import { useReveal } from "../hooks/useReveal";
import { profile } from "../data/content";

const CONTACTS = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: "@" },
  { label: "GitHub", value: profile.githubHandle, href: profile.github, icon: "Gh" },
  { label: "LinkedIn", value: profile.linkedinHandle, href: profile.linkedin, icon: "in" },
  { label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}`, icon: "#" },
];

export default function Contact() {
  const [ref, visible] = useReveal();

  return (
    <section id="contact" className="section">
      <div className="container">
        <p className="section-tag">
          <span className="dash" /> 05 / Contact
        </p>
        <div ref={ref} className={`contact-head reveal ${visible ? "visible" : ""}`}>
          <h2 className="section-title" style={{ marginBottom: 14 }}>
            Let's build something <span className="gradient-text">great together.</span>
          </h2>
          <p className="contact-sub">
            Available for frontend & React roles. If you have a product that needs a considered interface, let's talk.
          </p>
        </div>

        <div className="contact-grid">
          {CONTACTS.map((c) => (
            <a key={c.label} className="contact-card glass" href={c.href} target="_blank" rel="noreferrer">
              <div className="ic mono">{c.icon}</div>
              <div>
                <div className="lbl mono">{c.label}</div>
                <div className="val">{c.value}</div>
              </div>
            </a>
          ))}
        </div>
      </div>

      <style>{`
        .contact-sub { color: var(--text-muted); max-width: 480px; font-size: 1.02rem; }
        .contact-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
          margin-top: 50px;
        }
        .contact-card {
          padding: 22px 24px;
          display: flex;
          align-items: center;
          gap: 16px;
          position: relative;
          overflow: hidden;
        }
        .contact-card::after { content: "↗"; position: absolute; right: 22px; top: 19px; color: var(--text-muted); font-family: 'JetBrains Mono', monospace; transition: transform .25s ease, color .25s ease; }
        .contact-card:hover {
          border-color: var(--border-strong);
          transform: translateY(-3px);
          box-shadow: var(--shadow-glow);
        }
        .contact-card:hover::after { transform: translate(3px, -3px); color: var(--cyan); }
        .ic {
          width: 42px; height: 42px;
          border-radius: 10px;
          background: var(--surface-strong);
          display: flex; align-items: center; justify-content: center;
          font-size: 15px;
          color: var(--cyan);
          flex-shrink: 0;
        }
        .lbl { font-size: 11px; color: var(--text-muted); margin-bottom: 3px; }
        .val { font-size: 14.5px; font-weight: 600; word-break: break-word; }
        @media (max-width: 640px) {
          .contact-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
