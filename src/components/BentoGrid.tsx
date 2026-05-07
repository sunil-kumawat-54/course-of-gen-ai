"use client";
import { useEffect, useRef, useState } from "react";

const projects = [
  {
    icon: "📄",
    title: "AI PDF Chat",
    desc: "Chat with any PDF using RAG + vector search",
    gradient: "linear-gradient(135deg, rgba(108,99,255,0.15), rgba(0,209,255,0.05))",
    span: "col-span-1 row-span-1",
    size: "normal",
  },
  {
    icon: "🤖",
    title: "AI Agent with Memory",
    desc: "Autonomous agent that remembers context across sessions",
    gradient: "linear-gradient(135deg, rgba(168,85,247,0.15), rgba(108,99,255,0.05))",
    span: "col-span-1 row-span-2",
    size: "tall",
  },
  {
    icon: "📝",
    title: "Resume Analyzer",
    desc: "AI-powered resume scoring & career recommendations",
    gradient: "linear-gradient(135deg, rgba(0,209,255,0.15), rgba(168,85,247,0.05))",
    span: "col-span-1 row-span-1",
    size: "normal",
  },
  {
    icon: "🎙️",
    title: "AI Voice App",
    desc: "Real-time voice-to-voice AI assistant with Whisper",
    gradient: "linear-gradient(135deg, rgba(108,99,255,0.12), rgba(168,85,247,0.12))",
    span: "col-span-2 row-span-1",
    size: "wide",
  },
  {
    icon: "🔍",
    title: "AI Research Assistant",
    desc: "Multi-source research AI with citation tracking",
    gradient: "linear-gradient(135deg, rgba(0,209,255,0.12), rgba(108,99,255,0.12))",
    span: "col-span-1 row-span-1",
    size: "normal",
  },
  {
    icon: "📊",
    title: "AI SaaS Dashboard",
    desc: "Full-stack AI dashboard with auth, billing & analytics",
    gradient: "linear-gradient(135deg, rgba(168,85,247,0.12), rgba(0,209,255,0.08))",
    span: "col-span-1 row-span-1",
    size: "normal",
  },
];

function ProjectCard({ project, index, visible }: { project: typeof projects[0]; index: number; visible: boolean }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      id={`project-card-${index}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered
          ? `${project.gradient}`
          : "rgba(255,255,255,0.04)",
        backdropFilter: "blur(16px)",
        border: hovered
          ? "1px solid rgba(108,99,255,0.5)"
          : "1px solid rgba(255,255,255,0.08)",
        borderRadius: "20px",
        padding: project.size === "tall" ? "40px 28px" : "28px",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        cursor: "pointer",
        transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
        transform: hovered ? "translateY(-6px) scale(1.01)" : "translateY(0) scale(1)",
        boxShadow: hovered
          ? "0 20px 60px rgba(108,99,255,0.2), 0 0 0 1px rgba(108,99,255,0.3)"
          : "0 4px 24px rgba(0,0,0,0.3)",
        opacity: visible ? 1 : 0,
        transitionDelay: `${index * 80}ms`,
      }}
    >
      {/* Icon */}
      <div style={{
        width: "52px",
        height: "52px",
        borderRadius: "14px",
        background: "rgba(255,255,255,0.06)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "24px",
        border: "1px solid rgba(255,255,255,0.1)",
        flexShrink: 0,
      }}>
        {project.icon}
      </div>

      {/* Content */}
      <div style={{ flex: 1 }}>
        <h3 style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 700,
          fontSize: project.size === "tall" ? "22px" : "18px",
          color: "#fff",
          marginBottom: "8px",
        }}>
          {project.title}
        </h3>
        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "14px",
          color: "#94A3B8",
          lineHeight: 1.6,
        }}>
          {project.desc}
        </p>
      </div>

      {/* Arrow on hover */}
      <div style={{
        display: "flex",
        alignItems: "center",
        gap: "6px",
        fontSize: "13px",
        color: hovered ? "#00D1FF" : "#94A3B8",
        fontWeight: 500,
        transition: "color 0.3s ease",
      }}>
        Explore
        <span style={{ transition: "transform 0.3s ease", display: "inline-block", transform: hovered ? "translateX(4px)" : "translateX(0)" }}>→</span>
      </div>

      {/* Gradient shimmer on hover */}
      {hovered && (
        <div style={{
          position: "absolute",
          inset: 0,
          borderRadius: "20px",
          background: "linear-gradient(135deg, rgba(108,99,255,0.05), rgba(0,209,255,0.05), rgba(168,85,247,0.05))",
          pointerEvents: "none",
        }} />
      )}
    </div>
  );
}

export default function BentoGrid() {
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
    <section
      id="projects"
      ref={sectionRef}
      style={{ padding: "120px 0", position: "relative" }}
    >
      {/* Bg glow */}
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "800px",
        height: "400px",
        background: "radial-gradient(ellipse, rgba(108,99,255,0.06), transparent 70%)",
        pointerEvents: "none",
      }} />

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
            What You Build
          </p>
          <h2 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(36px, 4.5vw, 60px)",
            fontWeight: 700,
            color: "#fff",
            letterSpacing: "-0.02em",
            marginBottom: "16px",
          }}>
            6 Real AI Projects
          </h2>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "18px",
            color: "#94A3B8",
            maxWidth: "540px",
            margin: "0 auto",
            lineHeight: 1.6,
          }}>
            Ship production-ready AI applications you can add to your portfolio and monetize.
          </p>
        </div>

        {/* Bento Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridTemplateRows: "auto auto",
          gap: "20px",
        }}
          className="bento-grid"
        >
          {/* Row 1: col 1 normal, col 2 starts a tall card, col 3 normal */}
          <div style={{ position: "relative" }}>
            <ProjectCard project={projects[0]} index={0} visible={visible} />
          </div>

          {/* Tall card in middle col, spans 2 rows */}
          <div style={{ gridRow: "span 2", position: "relative" }}>
            <ProjectCard project={projects[1]} index={1} visible={visible} />
          </div>

          <div style={{ position: "relative" }}>
            <ProjectCard project={projects[2]} index={2} visible={visible} />
          </div>

          {/* Row 2 */}
          <div style={{ gridColumn: "span 2", position: "relative" }}>
            <ProjectCard project={projects[3]} index={3} visible={visible} />
          </div>

          {/* Row 3 */}
          <div style={{ gridColumn: "1 / 2", position: "relative" }}>
            <ProjectCard project={projects[4]} index={4} visible={visible} />
          </div>

          <div style={{ gridColumn: "3 / 4", position: "relative" }}>
            <ProjectCard project={projects[5]} index={5} visible={visible} />
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .bento-grid {
            grid-template-columns: 1fr !important;
            grid-template-rows: auto !important;
          }
          .bento-grid > div {
            grid-column: auto !important;
            grid-row: auto !important;
          }
        }
        @media (max-width: 1024px) and (min-width: 769px) {
          .bento-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
