import { profile } from "../data/content";

export default function Footer() {
  return (
    <footer className="footer mono">
      <div className="container footer-inner">
        <span>
          © {new Date().getFullYear()} {profile.name} — built with React
        </span>
        <span>{profile.location}</span>
      </div>

      <style>{`
        .footer {
          border-top: 1px solid var(--border);
          padding: 30px 0 46px;
          font-size: 12.5px;
          color: var(--text-muted);
        }
        .footer-inner {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 10px;
        }
      `}</style>
    </footer>
  );
}
