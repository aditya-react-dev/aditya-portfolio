import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === "light";

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={`Switch to ${isLight ? "dark" : "light"} mode`}
      title={`Switch to ${isLight ? "dark" : "light"} mode`}
    >
      <span className={`icon-wrap ${isLight ? "is-light" : ""}`}>
        {/* sun */}
        <svg className="icon icon-sun" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <circle cx="12" cy="12" r="4.5" />
          <line x1="12" y1="1.5" x2="12" y2="4" />
          <line x1="12" y1="20" x2="12" y2="22.5" />
          <line x1="4.2" y1="4.2" x2="5.9" y2="5.9" />
          <line x1="18.1" y1="18.1" x2="19.8" y2="19.8" />
          <line x1="1.5" y1="12" x2="4" y2="12" />
          <line x1="20" y1="12" x2="22.5" y2="12" />
          <line x1="4.2" y1="19.8" x2="5.9" y2="18.1" />
          <line x1="18.1" y1="5.9" x2="19.8" y2="4.2" />
        </svg>
        {/* moon */}
        <svg className="icon icon-moon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.5 14.2A9 9 0 1 1 9.8 3.5a7 7 0 0 0 10.7 10.7Z" />
        </svg>
      </span>

      <style>{`
        .theme-toggle {
          position: relative;
          width: 38px; height: 38px;
          border-radius: 50%;
          border: 1px solid var(--border);
          background: var(--surface);
          display: flex; align-items: center; justify-content: center;
          color: var(--text);
          flex-shrink: 0;
          transition: border-color 0.25s ease, background-color 0.25s ease, transform 0.2s ease;
        }
        .theme-toggle:hover {
          border-color: var(--border-strong);
          transform: translateY(-1px);
        }
        .icon-wrap {
          position: relative;
          width: 16px; height: 16px;
          display: flex; align-items: center; justify-content: center;
        }
        .icon {
          position: absolute;
          inset: 0;
          transition: opacity 0.3s ease, transform 0.4s cubic-bezier(0.34,1.56,0.64,1);
        }
        .icon-sun {
          opacity: 1;
          transform: rotate(0deg) scale(1);
          color: var(--cyan);
        }
        .icon-moon {
          opacity: 0;
          transform: rotate(-90deg) scale(0.5);
          color: var(--violet);
        }
        .icon-wrap.is-light .icon-sun {
          opacity: 0;
          transform: rotate(90deg) scale(0.5);
        }
        .icon-wrap.is-light .icon-moon {
          opacity: 1;
          transform: rotate(0deg) scale(1);
        }
      `}</style>
    </button>
  );
}
