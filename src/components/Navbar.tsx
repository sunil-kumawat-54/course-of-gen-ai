"use client";
import { useState, useEffect, useRef } from "react";

const WHATSAPP_LINK = "https://wa.me/919999999999?text=Hi!%20I%20want%20to%20join%20ContextCraft%20AI%20Bootcamp";

const navLinks = [
  { label: "Curriculum", href: "#curriculum" },
  { label: "Projects",   href: "#projects"    },
  { label: "Pricing",    href: "#pricing"      },
  { label: "Instructor", href: "#instructor"   },
];

function scrollTo(id: string) {
  const el = document.getElementById(id.replace("#", ""));
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const btnRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Magnetic button
  useEffect(() => {
    const btn = btnRef.current;
    if (!btn) return;
    const handleMove = (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      if (Math.sqrt(x * x + y * y) < 80) {
        btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
      }
    };
    const handleLeave = () => { btn.style.transform = "translate(0,0)"; };
    window.addEventListener("mousemove", handleMove);
    btn.addEventListener("mouseleave", handleLeave);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      btn.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <>
      <nav
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
          padding: "16px 0",
          transition: "all 0.4s ease",
          background: scrolled ? "rgba(7,11,20,0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "none",
        }}
      >
        <div className="container-custom" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {/* Logo */}
          <a
            href="#hero"
            onClick={e => { e.preventDefault(); scrollTo("hero"); }}
            style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}
          >
            <div style={{ width: "36px", height: "36px", background: "linear-gradient(135deg,#6C63FF,#00D1FF)", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 0 20px rgba(108,99,255,0.5)", animation: "pulse-glow 3s ease-in-out infinite" }}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 2L18 6V14L10 18L2 14V6L10 2Z" stroke="white" strokeWidth="1.5" fill="rgba(255,255,255,0.15)" />
                <path d="M10 2V18M2 6L18 14M18 6L2 14" stroke="white" strokeWidth="0.75" strokeOpacity="0.6" />
              </svg>
            </div>
            <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: "18px", background: "linear-gradient(90deg,#fff,#94A3B8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              ContextCraft AI
            </span>
          </a>

          {/* Desktop nav links */}
          <div style={{ display: "flex", gap: "36px" }} className="nav-links">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={e => { e.preventDefault(); scrollTo(link.href); }}
                style={{ fontFamily: "'Inter',sans-serif", fontSize: "14px", fontWeight: 500, color: "#94A3B8", textDecoration: "none", transition: "color 0.2s ease", letterSpacing: "0.01em", cursor: "pointer" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={e => (e.currentTarget.style.color = "#94A3B8")}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <a
            ref={btnRef}
            id="navbar-join-btn"
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ textDecoration: "none", transition: "transform 0.2s ease, box-shadow 0.3s ease" }}
          >
            <span>Join Bootcamp</span>
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            style={{ display: "none", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px", padding: "8px 10px", cursor: "pointer", color: "#fff", fontSize: "18px" }}
            className="mobile-menu-btn"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div style={{ background: "rgba(7,11,20,0.97)", backdropFilter: "blur(20px)", borderTop: "1px solid rgba(255,255,255,0.08)", padding: "20px 24px", display: "flex", flexDirection: "column", gap: "16px" }}>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={e => { e.preventDefault(); scrollTo(link.href); setMenuOpen(false); }}
                style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: "18px", fontWeight: 600, color: "#fff", textDecoration: "none", padding: "8px 0", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
              >
                {link.label}
              </a>
            ))}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ textDecoration: "none", textAlign: "center", marginTop: "8px" }}
              onClick={() => setMenuOpen(false)}
            >
              <span>Join Bootcamp →</span>
            </a>
          </div>
        )}
      </nav>

      <style jsx>{`
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
          #navbar-join-btn { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </>
  );
}
