import { useEffect, useRef } from "react";

export default function Background() {
  const glowRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const handleMove = (e) => {
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${e.clientX - 250}px, ${
          e.clientY - 250
        }px)`;
      }
    };
    window.addEventListener("pointermove", handleMove);
    return () => window.removeEventListener("pointermove", handleMove);
  }, []);

  return (
    <div className="bg-layer" aria-hidden="true">
      <div ref={glowRef} className="cursor-glow" />
      <div className="blob blob-a" />
      <div className="blob blob-b" />
      <div className="grid-overlay" />

      <style>{`
        .bg-layer {
          position: fixed;
          inset: 0;
          z-index: 0;
          overflow: hidden;
          pointer-events: none;
        }
        .cursor-glow {
          position: absolute;
          top: 0; left: 0;
          width: 500px; height: 500px;
          background: radial-gradient(circle, var(--cursor-glow) 0%, transparent 70%);
          border-radius: 50%;
          will-change: transform;
        }
        .blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(90px);
          opacity: var(--blob-opacity);
          transition: opacity 0.4s ease;
        }
        .blob-a {
          width: 480px; height: 480px;
          top: -140px; right: -100px;
          background: var(--violet);
          animation: drift-a 22s ease-in-out infinite;
        }
        .blob-b {
          width: 420px; height: 420px;
          bottom: -120px; left: -120px;
          background: var(--cyan);
          animation: drift-b 26s ease-in-out infinite;
        }
        .grid-overlay {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(var(--grid-line) 1px, transparent 1px),
            linear-gradient(90deg, var(--grid-line) 1px, transparent 1px);
          background-size: 56px 56px;
          mask-image: radial-gradient(ellipse 60% 50% at 50% 0%, black, transparent);
        }
        @keyframes drift-a {
          0%, 100% { transform: translate(0,0) scale(1); }
          50% { transform: translate(-40px, 50px) scale(1.1); }
        }
        @keyframes drift-b {
          0%, 100% { transform: translate(0,0) scale(1); }
          50% { transform: translate(40px, -40px) scale(1.15); }
        }
        @media (prefers-reduced-motion: reduce) {
          .blob-a, .blob-b { animation: none; }
        }
        @media (max-width: 640px) {
          .blob-a, .blob-b { filter: blur(60px); opacity: 0.25; }
        }
      `}</style>
    </div>
  );
}
