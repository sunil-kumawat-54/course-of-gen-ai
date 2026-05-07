"use client";
import { useEffect, useRef, useState } from "react";

const achievements = [
  "Stanford Certified",
  "AI Trainer",
  "R&D Published",
  "1,200+ Students",
  "Govt. of Raj. Partner",
];

function MiniParticles() {
  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", borderRadius: "28px" }}>
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
            opacity: Math.random() * 0.5 + 0.1,
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
    <section
      id="instructor"
      ref={sectionRef}
      style={{ padding: "120px 0", position: "relative" }}
    >
      {/* Bg glow */}
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "700px",
        height: "500px",
        background: "radial-gradient(ellipse, rgba(168,85,247,0.08), transparent 70%)",
        pointerEvents: "none",
      }} />

      <div className="container-custom" style={{ position: "relative", zIndex: 1 }}>
        {/* Section label */}
        <div style={{ textAlign: "center", marginBottom: "72px" }}>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "13px",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#6C63FF",
            marginBottom: "16px",
            fontWeight: 600,
          }}>
            Your Instructor
          </p>
          <h2 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(36px, 4.5vw, 60px)",
            fontWeight: 700,
            color: "#fff",
            letterSpacing: "-0.02em",
          }}>
            Meet Your Mentor
          </h2>
        </div>

        {/* Instructor Card */}
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            position: "relative",
            background: "rgba(255,255,255,0.05)",
            backdropFilter: "blur(24px)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "28px",
            padding: "60px",
            display: "grid",
            gridTemplateColumns: "280px 1fr",
            gap: "60px",
            alignItems: "center",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(40px)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
          className="instructor-card"
        >
          <MiniParticles />

          {/* Avatar */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "24px", position: "relative", zIndex: 1 }}>
            <div style={{ position: "relative" }}>
              {/* Glow rings */}
              <div style={{
                position: "absolute",
                inset: "-20px",
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(108,99,255,0.2), rgba(168,85,247,0.1), transparent 70%)",
                animation: "pulse-glow 3s ease-in-out infinite",
              }} />
              <div style={{
                position: "absolute",
                inset: "-8px",
                borderRadius: "50%",
                border: "1px solid rgba(108,99,255,0.3)",
                animation: "spin-slow 15s linear infinite",
              }} />

              {/* Avatar circle */}
              <div style={{
                width: "180px",
                height: "180px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #6C63FF, #A855F7, #00D1FF)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "72px",
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                color: "rgba(255,255,255,0.9)",
                boxShadow: "0 0 40px rgba(108,99,255,0.4), 0 0 80px rgba(168,85,247,0.2)",
                position: "relative",
              }}>
                HP
              </div>
            </div>

            {/* Name & title */}
            <div style={{ textAlign: "center" }}>
              <h3 style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: "20px",
                color: "#fff",
                marginBottom: "6px",
              }}>
                Er. Harshvardhan Purohit
              </h3>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "13px",
                color: "#94A3B8",
                lineHeight: 1.5,
              }}>
                Founder, SIN Technologies<br />
                Director, SIN School of AI
              </p>
            </div>
          </div>

          {/* Content */}
          <div style={{ position: "relative", zIndex: 1 }}>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "18px",
              color: "#94A3B8",
              lineHeight: 1.8,
              marginBottom: "36px",
            }}>
              "I've spent years at the intersection of AI research and education. 
              My mission is to turn curious learners into capable AI engineers — 
              in just 7 days. Every line of code we write together has been battle-tested in production."
            </p>

            <blockquote style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "17px",
              color: "#fff",
              lineHeight: 1.6,
              borderLeft: "3px solid #6C63FF",
              paddingLeft: "20px",
              marginBottom: "36px",
              fontStyle: "italic",
            }}>
              Trained 1,200+ students in AI. Collaborated with the 
              Govt. of Rajasthan on AI education initiatives.
            </blockquote>

            {/* Achievement badges */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              {achievements.map((badge, i) => (
                <div
                  key={i}
                  style={{
                    padding: "7px 16px",
                    background: "rgba(108,99,255,0.12)",
                    border: "1px solid rgba(108,99,255,0.25)",
                    borderRadius: "100px",
                    fontSize: "13px",
                    fontWeight: 500,
                    color: "#A855F7",
                    fontFamily: "'Inter', sans-serif",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  ✦ {badge}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .instructor-card {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
            padding: 40px 24px !important;
          }
        }
      `}</style>
    </section>
  );
}
