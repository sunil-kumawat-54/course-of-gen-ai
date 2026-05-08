"use client";
import { useEffect, useRef, useState } from "react";

const WHATSAPP_LINK = "https://wa.me/919999999999?text=Hi!%20I%20want%20to%20join%20ContextCraft%20AI%20Bootcamp";

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function FinalCTA() {
  const [visible, setVisible] = useState(false);
  const btnRef = useRef<HTMLAnchorElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Magnetic button
  useEffect(() => {
    const btn = btnRef.current;
    if (!btn) return;
    const handleMove = (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      if (Math.sqrt(x * x + y * y) < 100) {
        btn.style.transform = `translate(${x * 0.35}px, ${y * 0.35}px)`;
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
    <section id="final-cta" ref={sectionRef} style={{ padding: "160px 0", position: "relative", overflow: "hidden", textAlign: "center" }}>
      {/* Background glows */}
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "800px", height: "800px", background: "radial-gradient(circle, rgba(108,99,255,0.12), rgba(168,85,247,0.08), transparent 65%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: "30%", left: "20%", width: "400px", height: "400px", background: "radial-gradient(circle, rgba(0,209,255,0.06), transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "20%", right: "15%", width: "400px", height: "400px", background: "radial-gradient(circle, rgba(168,85,247,0.06), transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, rgba(108,99,255,0.3), rgba(0,209,255,0.3), transparent)" }} />
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, rgba(108,99,255,0.3), rgba(0,209,255,0.3), transparent)" }} />

      <div className="container-custom" style={{ position: "relative", zIndex: 1 }}>
        {/* Badge */}
        <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(108,99,255,0.12)", border: "1px solid rgba(108,99,255,0.25)", borderRadius: "100px", padding: "6px 18px", fontSize: "13px", color: "#A855F7", fontWeight: 500, fontFamily: "'Inter',sans-serif", marginBottom: "40px", opacity: visible ? 1 : 0, transition: "opacity 0.6s ease" }}>
          🔥 Limited seats per cohort
        </div>

        {/* Headline */}
        <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: "clamp(44px,6.5vw,88px)", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1.0, color: "#fff", marginBottom: "28px", opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(40px)", transition: "opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s" }}>
          The Future Belongs<br />
          <span style={{ background: "linear-gradient(135deg,#6C63FF,#00D1FF,#A855F7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            to AI Builders.
          </span>
        </h2>

        {/* Subtext */}
        <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "20px", color: "#94A3B8", maxWidth: "500px", margin: "0 auto 60px", lineHeight: 1.6, opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(30px)", transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s" }}>
          Start building in 24 hours. Your AI career starts here.
        </p>

        {/* CTA */}
        <div style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(30px)", transition: "opacity 0.7s ease 0.3s, transform 0.7s ease 0.3s" }}>
          <a
            ref={btnRef}
            id="final-join-btn"
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ fontSize: "18px", padding: "18px 48px", borderRadius: "16px", transition: "transform 0.2s ease, box-shadow 0.3s ease", textDecoration: "none", display: "inline-flex", alignItems: "center", justifyContent: "center" }}
          >
            <span>Join ContextCraft AI Now →</span>
          </a>
        </div>

        {/* Trust signals */}
        <div style={{ display: "flex", justifyContent: "center", gap: "40px", marginTop: "60px", flexWrap: "wrap", opacity: visible ? 1 : 0, transition: "opacity 0.7s ease 0.5s" }}>
          {["1,200+ Students Trained", "7 Days Program", "Govt. Certified Trainer", "Real Projects Only"].map((item) => (
            <div key={item} style={{ display: "flex", alignItems: "center", gap: "8px", fontFamily: "'Inter',sans-serif", fontSize: "14px", color: "#94A3B8" }}>
              <span style={{ color: "#6C63FF" }}>✓</span> {item}
            </div>
          ))}
        </div>

        {/* Secondary links */}
        <div style={{ display: "flex", justifyContent: "center", gap: "24px", marginTop: "36px", flexWrap: "wrap", opacity: visible ? 1 : 0, transition: "opacity 0.7s ease 0.6s" }}>
          {[
            { label: "View Curriculum →", id: "curriculum" },
            { label: "See Projects →", id: "projects" },
            { label: "Read FAQs →", id: "faq" },
          ].map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "'Inter',sans-serif", fontSize: "14px", color: "#94A3B8", textDecoration: "underline", textUnderlineOffset: "3px", transition: "color 0.2s ease" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#6C63FF")}
              onMouseLeave={e => (e.currentTarget.style.color = "#94A3B8")}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
