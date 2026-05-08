"use client";
import { useEffect, useRef, useState } from "react";

const WHATSAPP_LINK = "https://wa.me/919999999999?text=Hi!%20I%20want%20to%20join%20ContextCraft%20AI%20Bootcamp";
const LINKEDIN_LINK = "https://linkedin.com/in/harshvardhan-purohit";
const YOUTUBE_LINK  = "https://youtube.com/@contextcraftai";

const achievements = [
  { label: "Stanford Certified",     icon: "🎓" },
  { label: "AI Trainer",             icon: "🤖" },
  { label: "R&D Published",          icon: "📄" },
  { label: "1,200+ Students",        icon: "👥" },
  { label: "Govt. of Raj. Partner",  icon: "🏛️" },
];

const stats = [
  { value: "1,200+", label: "Students Trained" },
  { value: "7+",     label: "Years in AI" },
  { value: "6",      label: "Real Projects" },
  { value: "98%",    label: "Satisfaction Rate" },
];

function MiniParticles() {
  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", borderRadius: "28px", pointerEvents: "none" }}>
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 3 + 1}px`,
            height: `${Math.random() * 3 + 1}px`,
            borderRadius: "50%",
            background: i % 3 === 0 ? "#6C63FF" : i % 3 === 1 ? "#00D1FF" : "#A855F7",
            opacity: Math.random() * 0.4 + 0.1,
            animation: `float ${4 + Math.random() * 6}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 4}s`,
          }}
        />
      ))}
    </div>
  );
}

export default function Instructor() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="instructor" ref={sectionRef} style={{ padding: "120px 0", position: "relative" }}>
      {/* BG glow */}
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "700px", height: "500px", background: "radial-gradient(ellipse, rgba(168,85,247,0.08), transparent 70%)", pointerEvents: "none" }} />

      <div className="container-custom" style={{ position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "72px" }}>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#6C63FF", marginBottom: "16px", fontWeight: 600 }}>
            Your Instructor
          </p>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(36px, 4.5vw, 60px)", fontWeight: 700, color: "#fff", letterSpacing: "-0.02em" }}>
            Meet Your Mentor
          </h2>
        </div>

        {/* Card */}
        <div
          style={{
            maxWidth: "960px",
            margin: "0 auto",
            position: "relative",
            background: "rgba(255,255,255,0.05)",
            backdropFilter: "blur(24px)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "28px",
            padding: "60px",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(40px)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
          className="instructor-card"
        >
          <MiniParticles />

          <div style={{ display: "grid", gridTemplateColumns: "260px 1fr", gap: "60px", alignItems: "start", position: "relative", zIndex: 1 }} className="instructor-inner">

            {/* LEFT — Avatar + socials */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px" }}>
              {/* Avatar with glow rings */}
              <div style={{ position: "relative" }}>
                <div style={{ position: "absolute", inset: "-20px", borderRadius: "50%", background: "radial-gradient(circle, rgba(108,99,255,0.2), rgba(168,85,247,0.1), transparent 70%)", animation: "pulse-glow 3s ease-in-out infinite" }} />
                <div style={{ position: "absolute", inset: "-8px", borderRadius: "50%", border: "1px solid rgba(108,99,255,0.3)", animation: "spin-slow 15s linear infinite" }} />
                <div style={{ width: "180px", height: "180px", borderRadius: "50%", background: "linear-gradient(135deg, #6C63FF, #A855F7, #00D1FF)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "64px", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, color: "rgba(255,255,255,0.9)", boxShadow: "0 0 40px rgba(108,99,255,0.4), 0 0 80px rgba(168,85,247,0.2)", position: "relative" }}>
                  HP
                </div>
              </div>

              {/* Name & title */}
              <div style={{ textAlign: "center" }}>
                <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "20px", color: "#fff", marginBottom: "6px" }}>
                  Er. Harshvardhan Purohit
                </h3>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", color: "#94A3B8", lineHeight: 1.6 }}>
                  Founder, SIN Technologies<br />Director, SIN School of AI
                </p>
              </div>

              {/* Social links */}
              <div style={{ display: "flex", gap: "10px" }}>
                {[
                  { icon: "in", label: "LinkedIn", href: LINKEDIN_LINK, color: "#0A66C2" },
                  { icon: "▶", label: "YouTube",  href: YOUTUBE_LINK,  color: "#FF0000" },
                  { icon: "💬", label: "WhatsApp", href: WHATSAPP_LINK, color: "#25D366" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={s.label}
                    style={{
                      width: "38px", height: "38px", borderRadius: "10px",
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: "#94A3B8", textDecoration: "none",
                      fontSize: s.icon.length === 1 ? "16px" : "13px",
                      fontWeight: 700, fontFamily: "'Space Grotesk', sans-serif",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.background = `${s.color}20`;
                      (e.currentTarget as HTMLElement).style.borderColor = `${s.color}50`;
                      (e.currentTarget as HTMLElement).style.color = s.color;
                      (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.06)";
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)";
                      (e.currentTarget as HTMLElement).style.color = "#94A3B8";
                      (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                    }}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>

              {/* Stats */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", width: "100%" }}>
                {stats.map((stat) => (
                  <div key={stat.label} style={{ textAlign: "center", padding: "12px 8px", background: "rgba(108,99,255,0.08)", border: "1px solid rgba(108,99,255,0.15)", borderRadius: "12px" }}>
                    <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "18px", background: "linear-gradient(90deg,#6C63FF,#00D1FF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>{stat.value}</div>
                    <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", color: "#94A3B8", marginTop: "2px" }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT — Bio + badges + CTA */}
            <div>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "17px", color: "#94A3B8", lineHeight: 1.8, marginBottom: "28px" }}>
                "I've spent years at the intersection of AI research and education.
                My mission is to turn curious learners into capable AI engineers — in just 7 days.
                Every line of code we write together has been battle-tested in real production systems."
              </p>

              <blockquote style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "16px", color: "#fff", lineHeight: 1.6, borderLeft: "3px solid #6C63FF", paddingLeft: "20px", marginBottom: "32px", fontStyle: "italic" }}>
                Trained 1,200+ students in AI across India. Collaborated with the
                Govt. of Rajasthan on AI education initiatives. Published AI research
                in international journals.
              </blockquote>

              {/* Achievement badges */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "36px" }}>
                {achievements.map((badge) => (
                  <div key={badge.label} style={{ display: "flex", alignItems: "center", gap: "6px", padding: "7px 14px", background: "rgba(108,99,255,0.12)", border: "1px solid rgba(108,99,255,0.25)", borderRadius: "100px", fontSize: "13px", fontWeight: 500, color: "#A855F7", fontFamily: "'Inter', sans-serif", backdropFilter: "blur(8px)" }}>
                    <span>{badge.icon}</span> {badge.label}
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ textDecoration: "none" }}
                >
                  <span>🚀 Learn with Harshvardhan</span>
                </a>
                <a
                  href={LINKEDIN_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  style={{ textDecoration: "none" }}
                >
                  View LinkedIn Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .instructor-card { padding: 32px 20px !important; }
          .instructor-inner { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}
