"use client";
import { useEffect, useRef, useState } from "react";

const WHATSAPP_LINK = "https://wa.me/919999999999?text=Hi!%20I%20want%20to%20join%20ContextCraft%20AI%20Bootcamp";

const testimonials = [
  {
    initials: "AS", name: "Arjun Sharma",
    from: "Student", to: "AI Engineer @ Startup",
    quote: "ContextCraft completely changed my career trajectory. In 7 days I built a full RAG pipeline and landed a freelance contract. The curriculum is dense but never overwhelming.",
    project: "AI PDF Chat",
    gradient: "linear-gradient(135deg, #6C63FF, #A855F7)",
    linkedin: "https://linkedin.com",
  },
  {
    initials: "PK", name: "Priya Kaur",
    from: "Software Dev", to: "AI Product Lead",
    quote: "I've done 5 online courses before this. None came close. Harshvardhan's teaching style is unmatched — real projects, real feedback, real results.",
    project: "AI Agent with Memory",
    gradient: "linear-gradient(135deg, #00D1FF, #6C63FF)",
    linkedin: "https://linkedin.com",
  },
  {
    initials: "RV", name: "Rahul Verma",
    from: "Data Analyst", to: "MLOps Engineer",
    quote: "From day 1 to day 7, every session felt premium. I shipped my AI SaaS dashboard on day 6. The mentorship during live sessions is worth 10x the price.",
    project: "AI SaaS Dashboard",
    gradient: "linear-gradient(135deg, #A855F7, #00D1FF)",
    linkedin: "https://linkedin.com",
  },
  {
    initials: "MJ", name: "Meera Joshi",
    from: "Marketing Manager", to: "AI Consultant",
    quote: "Didn't think I could build AI apps without a CS degree. ContextCraft proved me wrong. My resume analyzer is now used by 500+ people in my network.",
    project: "Resume Analyzer",
    gradient: "linear-gradient(135deg, #6C63FF, #00D1FF)",
    linkedin: "https://linkedin.com",
  },
  {
    initials: "KP", name: "Kartik Patel",
    from: "Fresher", to: "AI Engineer (₹18 LPA)",
    quote: "Got placed at a top AI startup 3 weeks after completing ContextCraft. The projects in my portfolio directly impressed my interviewer. 10/10 would recommend.",
    project: "AI Research Assistant",
    gradient: "linear-gradient(135deg, #A855F7, #6C63FF)",
    linkedin: "https://linkedin.com",
  },
  {
    initials: "SD", name: "Sneha Das",
    from: "Teacher", to: "Ed-Tech AI Builder",
    quote: "The community alone is worth joining. Got feedback from peers, collaborated on projects, and now I'm building AI tools for education. Life-changing experience.",
    project: "AI Voice App",
    gradient: "linear-gradient(135deg, #00D1FF, #A855F7)",
    linkedin: "https://linkedin.com",
  },
];

function TestimonialCard({ t, index, visible }: { t: typeof testimonials[0]; index: number; visible: boolean }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      id={`testimonial-${index + 1}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "rgba(255,255,255,0.07)" : "rgba(255,255,255,0.04)",
        backdropFilter: "blur(20px)",
        border: hovered ? "1px solid rgba(108,99,255,0.25)" : "1px solid rgba(255,255,255,0.08)",
        borderRadius: "20px",
        padding: "28px",
        display: "flex",
        flexDirection: "column",
        gap: "18px",
        opacity: visible ? 1 : 0,
        transform: visible
          ? hovered ? "translateY(-6px)" : "translateY(0)"
          : "translateY(30px)",
        transition: `opacity 0.6s ease ${index * 80}ms, transform 0.35s ease, border-color 0.3s ease, background 0.3s ease`,
        boxShadow: hovered ? "0 20px 60px rgba(0,0,0,0.3)" : "none",
        cursor: "default",
      }}
    >
      {/* Stars */}
      <div style={{ color: "#FBBF24", fontSize: "14px", letterSpacing: "2px" }}>★★★★★</div>

      {/* Quote */}
      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px", color: "#CBD5E1", lineHeight: 1.7, flex: 1 }}>
        &ldquo;{t.quote}&rdquo;
      </p>

      {/* Transformation badge */}
      <div style={{ display: "flex", alignItems: "center", gap: "8px", padding: "9px 14px", background: "rgba(108,99,255,0.08)", border: "1px solid rgba(108,99,255,0.15)", borderRadius: "10px", fontSize: "12px", fontFamily: "'Inter', sans-serif", flexWrap: "wrap" }}>
        <span style={{ color: "#94A3B8" }}>{t.from}</span>
        <span style={{ color: "#6C63FF", fontWeight: 700 }}>→</span>
        <span style={{ color: "#00D1FF", fontWeight: 600 }}>{t.to}</span>
      </div>

      {/* User row */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div style={{ width: "44px", height: "44px", borderRadius: "50%", background: t.gradient, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "16px", color: "#fff", flexShrink: 0 }}>
            {t.initials}
          </div>
          <div>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: "15px", color: "#fff" }}>{t.name}</div>
            <div style={{ fontSize: "12px", color: "#94A3B8", fontFamily: "'Inter', sans-serif" }}>Built: {t.project}</div>
          </div>
        </div>

        {/* LinkedIn link */}
        <a
          href={t.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          title="View LinkedIn"
          style={{
            width: "32px", height: "32px", borderRadius: "8px",
            background: "rgba(10,102,194,0.15)", border: "1px solid rgba(10,102,194,0.3)",
            display: "flex", alignItems: "center", justifyContent: "center",
            color: "#0A66C2", textDecoration: "none", flexShrink: 0,
            opacity: hovered ? 1 : 0, transition: "opacity 0.3s ease",
          }}
        >
          <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452z"/>
          </svg>
        </a>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="testimonials" ref={sectionRef} style={{ padding: "120px 0", position: "relative" }}>
      <div style={{ position: "absolute", top: "50%", right: "-5%", width: "500px", height: "500px", background: "radial-gradient(circle, rgba(0,209,255,0.06), transparent 70%)", pointerEvents: "none", transform: "translateY(-50%)" }} />

      <div className="container-custom" style={{ position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "72px" }}>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#6C63FF", marginBottom: "16px", fontWeight: 600 }}>Student Results</p>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(36px,4.5vw,60px)", fontWeight: 700, color: "#fff", letterSpacing: "-0.02em", marginBottom: "16px" }}>
            Transformations That Speak
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "18px", color: "#94A3B8", maxWidth: "500px", margin: "0 auto" }}>
            Real students. Real projects. Real career transformations.
          </p>
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }} className="testimonials-grid">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} t={t} index={i} visible={visible} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{ textAlign: "center", marginTop: "64px" }}>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "16px", color: "#94A3B8", marginBottom: "24px" }}>
            Join 1,200+ students who already transformed their careers.
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ textDecoration: "none", display: "inline-flex" }}
          >
            <span>Join Them Now →</span>
          </a>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) { .testimonials-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 560px) { .testimonials-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
