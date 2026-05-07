"use client";
import { useState, useEffect, useRef } from "react";

const navLinks = [
  { label: "Curriculum", href: "#curriculum" },
  { label: "Projects", href: "#projects" },
  { label: "Pricing", href: "#pricing" },
  { label: "Instructor", href: "#instructor" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Magnetic button effect
  useEffect(() => {
    const btn = btnRef.current;
    if (!btn) return;
    const handleMove = (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const dist = Math.sqrt(x * x + y * y);
      if (dist < 80) {
        btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
      }
    };
    const handleLeave = () => {
      btn.style.transform = "translate(0, 0)";
    };
    window.addEventListener("mousemove", handleMove);
    btn.addEventListener("mouseleave", handleLeave);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      btn.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "16px 0",
        transition: "all 0.4s ease",
        background: scrolled
          ? "rgba(7, 11, 20, 0.85)"
          : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "none",
      }}
    >
      <div className="container-custom" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* Logo */}
        <a href="#" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
          <div style={{
            width: "36px",
            height: "36px",
            background: "linear-gradient(135deg, #6C63FF, #00D1FF)",
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 0 20px rgba(108,99,255,0.5)",
            animation: "pulse-glow 3s ease-in-out infinite",
          }}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 2L18 6V14L10 18L2 14V6L10 2Z" stroke="white" strokeWidth="1.5" fill="rgba(255,255,255,0.15)"/>
              <path d="M10 2V18M2 6L18 14M18 6L2 14" stroke="white" strokeWidth="0.75" strokeOpacity="0.6"/>
            </svg>
          </div>
          <span style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: "18px",
            background: "linear-gradient(90deg, #fff, #94A3B8)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            ContextCraft AI
          </span>
        </a>

        {/* Nav Links — desktop only */}
        <div style={{ display: "flex", gap: "36px" }} className="nav-links">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "14px",
                fontWeight: 500,
                color: "#94A3B8",
                textDecoration: "none",
                transition: "color 0.2s ease",
                letterSpacing: "0.01em",
              }}
              onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={e => (e.currentTarget.style.color = "#94A3B8")}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <button
          ref={btnRef}
          id="navbar-join-btn"
          className="btn-primary"
          style={{ transition: "transform 0.2s ease, box-shadow 0.3s ease" }}
          onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
        >
          <span>Join Bootcamp</span>
        </button>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
