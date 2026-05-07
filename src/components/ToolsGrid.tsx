"use client";
import { useEffect, useRef, useState } from "react";

const tools = [
  { name: "GPT-4o", icon: "🧠", color: "#10A37F", desc: "OpenAI" },
  { name: "Claude", icon: "🤖", color: "#E07B35", desc: "Anthropic" },
  { name: "Gemini", icon: "✨", color: "#4285F4", desc: "Google" },
  { name: "LangChain", icon: "🔗", color: "#1C7C54", desc: "Framework" },
  { name: "Pinecone", icon: "🌲", color: "#6BB8A0", desc: "Vector DB" },
  { name: "Whisper", icon: "🎙️", color: "#FF6B6B", desc: "OpenAI" },
  { name: "DALL-E", icon: "🎨", color: "#A855F7", desc: "OpenAI" },
  { name: "FastAPI", icon: "⚡", color: "#009688", desc: "Backend" },
  { name: "Supabase", icon: "🗃️", color: "#3ECF8E", desc: "Database" },
  { name: "Vercel", icon: "▲", color: "#ffffff", desc: "Deployment" },
];

export default function ToolsGrid() {
  const [visible, setVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
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
      id="tools"
      ref={sectionRef}
      style={{ padding: "120px 0", position: "relative" }}
    >
      <div className="container-custom" style={{ position: "relative", zIndex: 1 }}>
        {/* Header */}
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
            Tech Stack
          </p>
          <h2 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(36px, 4.5vw, 60px)",
            fontWeight: 700,
            color: "#fff",
            letterSpacing: "-0.02em",
          }}>
            AI Tools You'll Master
          </h2>
        </div>

        {/* Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: "16px",
        }}
          className="tools-grid"
        >
          {tools.map((tool, i) => {
            const isHovered = hoveredIndex === i;
            return (
              <div
                key={i}
                id={`tool-${tool.name.toLowerCase().replace(/\s/g, "-")}`}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  background: isHovered ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.04)",
                  backdropFilter: "blur(16px)",
                  border: isHovered ? `1px solid ${tool.color}50` : "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "18px",
                  padding: "28px 20px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "12px",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  transform: visible
                    ? isHovered ? "translateY(-8px) scale(1.03)" : "translateY(0) scale(1)"
                    : `translateY(30px)`,
                  opacity: visible ? 1 : 0,
                  transitionDelay: `${i * 60}ms`,
                  boxShadow: isHovered ? `0 16px 48px rgba(0,0,0,0.3), 0 0 0 1px ${tool.color}30` : "none",
                }}
              >
                {/* Icon glow background */}
                <div style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "16px",
                  background: isHovered ? `${tool.color}20` : "rgba(255,255,255,0.05)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "26px",
                  transition: "all 0.3s ease",
                  boxShadow: isHovered ? `0 0 24px ${tool.color}40` : "none",
                }}>
                  {tool.icon}
                </div>

                <div style={{ textAlign: "center" }}>
                  <div style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 700,
                    fontSize: "15px",
                    color: "#fff",
                    marginBottom: "4px",
                  }}>
                    {tool.name}
                  </div>
                  <div style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "12px",
                    color: isHovered ? tool.color : "#94A3B8",
                    transition: "color 0.3s ease",
                  }}>
                    {tool.desc}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .tools-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (max-width: 560px) {
          .tools-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
