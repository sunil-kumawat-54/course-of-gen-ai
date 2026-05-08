"use client";
import { useEffect, useRef, useState } from "react";
import Modal from "@/components/ui/Modal";

const WHATSAPP_LINK = "https://wa.me/919999999999?text=Hi!%20I%20want%20to%20join%20ContextCraft%20AI%20Bootcamp";

const projects = [
  {
    icon: "📄",
    title: "AI PDF Chat",
    desc: "Chat with any PDF using RAG + vector search",
    gradient: "linear-gradient(135deg, rgba(108,99,255,0.15), rgba(0,209,255,0.05))",
    size: "normal",
    fullDesc:
      "Build a production-ready chatbot that ingests any PDF, converts it to vector embeddings, and answers user questions with accurate citations. This is one of the most in-demand AI apps in the market today.",
    techStack: ["LangChain", "Pinecone", "OpenAI GPT-4o", "FastAPI", "Streamlit"],
    learnings: [
      "How RAG (Retrieval-Augmented Generation) works",
      "PDF parsing and text chunking strategies",
      "Vector embeddings and semantic search",
      "Building a chat UI with memory",
      "Deploying to production",
    ],
    day: "Day 3",
    difficulty: "Intermediate",
    color: "#6C63FF",
  },
  {
    icon: "🤖",
    title: "AI Agent with Memory",
    desc: "Autonomous agent that remembers context across sessions",
    gradient: "linear-gradient(135deg, rgba(168,85,247,0.15), rgba(108,99,255,0.05))",
    size: "tall",
    fullDesc:
      "Build an autonomous AI agent that uses tools, maintains long-term memory, and can browse the web, run code, and answer complex multi-step queries — just like a real AI assistant.",
    techStack: ["LangChain Agents", "OpenAI GPT-4o", "Supabase (memory)", "Tool calling", "Python"],
    learnings: [
      "ReAct agent architecture",
      "Tool definition and function calling",
      "Long-term vs short-term memory",
      "Multi-step reasoning chains",
      "Building custom agent tools",
    ],
    day: "Day 4",
    difficulty: "Advanced",
    color: "#A855F7",
  },
  {
    icon: "📝",
    title: "Resume Analyzer",
    desc: "AI-powered resume scoring & career recommendations",
    gradient: "linear-gradient(135deg, rgba(0,209,255,0.15), rgba(168,85,247,0.05))",
    size: "normal",
    fullDesc:
      "Build an AI tool that reads a resume, scores it against job descriptions, highlights weak points, and generates a personalized improvement plan — all powered by GPT-4o and structured outputs.",
    techStack: ["OpenAI GPT-4o", "Structured Outputs", "FastAPI", "PyMuPDF", "React"],
    learnings: [
      "Structured JSON outputs from LLMs",
      "PDF parsing and text extraction",
      "Prompt design for analytical tasks",
      "Building REST APIs with FastAPI",
      "Frontend integration with Next.js",
    ],
    day: "Day 6",
    difficulty: "Intermediate",
    color: "#00D1FF",
  },
  {
    icon: "🎙️",
    title: "AI Voice App",
    desc: "Real-time voice-to-voice AI assistant with Whisper",
    gradient: "linear-gradient(135deg, rgba(108,99,255,0.12), rgba(168,85,247,0.12))",
    size: "wide",
    fullDesc:
      "Build a full voice AI pipeline: speak into the mic → Whisper transcribes → GPT-4o responds → TTS speaks back. Real-time, low-latency voice assistant you can deploy anywhere.",
    techStack: ["Whisper (OpenAI)", "GPT-4o", "ElevenLabs TTS", "WebSockets", "React"],
    learnings: [
      "Speech-to-text with Whisper",
      "Real-time audio streaming with WebSockets",
      "Text-to-speech integration",
      "Low-latency AI pipeline design",
      "Browser media APIs",
    ],
    day: "Day 5",
    difficulty: "Advanced",
    color: "#FF6B6B",
  },
  {
    icon: "🔍",
    title: "AI Research Assistant",
    desc: "Multi-source research AI with citation tracking",
    gradient: "linear-gradient(135deg, rgba(0,209,255,0.12), rgba(108,99,255,0.12))",
    size: "normal",
    fullDesc:
      "Build an AI researcher that queries multiple sources (web, PDFs, Wikipedia), synthesizes information, and produces structured reports with proper citations — like having a research intern on demand.",
    techStack: ["LangChain", "Tavily Search API", "GPT-4o", "Pinecone", "FastAPI"],
    learnings: [
      "Multi-source information retrieval",
      "Search API integration (Tavily/SerpAPI)",
      "Citation and source tracking",
      "Summarization and synthesis prompts",
      "Report generation with LLMs",
    ],
    day: "Day 4",
    difficulty: "Advanced",
    color: "#6C63FF",
  },
  {
    icon: "📊",
    title: "AI SaaS Dashboard",
    desc: "Full-stack AI dashboard with auth, billing & analytics",
    gradient: "linear-gradient(135deg, rgba(168,85,247,0.12), rgba(0,209,255,0.08))",
    size: "normal",
    fullDesc:
      "Build a complete AI SaaS product with user authentication, usage-based billing, an AI feature (PDF chat or agent), and a beautiful analytics dashboard — ready to launch and monetize.",
    techStack: ["Next.js", "Supabase Auth", "Stripe", "OpenAI", "Tailwind CSS"],
    learnings: [
      "Supabase auth and database setup",
      "Stripe subscription billing integration",
      "Usage tracking and rate limiting",
      "Building SaaS-ready API architecture",
      "Dashboard UI with charts and analytics",
    ],
    day: "Day 6–7",
    difficulty: "Expert",
    color: "#A855F7",
  },
];

const difficultyColors: Record<string, string> = {
  Intermediate: "#00D1FF",
  Advanced: "#A855F7",
  Expert: "#FF6B6B",
};

function ProjectModal({ project, onClose }: { project: typeof projects[0]; onClose: () => void }) {
  return (
    <div style={{ padding: "0 32px 36px 32px" }}>
      {/* Header */}
      <div style={{ marginBottom: "24px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "12px" }}>
          <div style={{
            width: "56px", height: "56px", borderRadius: "16px",
            background: "rgba(255,255,255,0.08)", display: "flex",
            alignItems: "center", justifyContent: "center", fontSize: "28px",
            border: "1px solid rgba(255,255,255,0.1)",
          }}>{project.icon}</div>
          <div>
            <div style={{ display: "flex", gap: "8px", marginBottom: "6px", flexWrap: "wrap" }}>
              <span style={{
                padding: "3px 10px", borderRadius: "100px", fontSize: "11px", fontWeight: 600,
                background: `${project.color}20`, color: project.color,
                border: `1px solid ${project.color}40`, fontFamily: "'Inter', sans-serif",
              }}>{project.day}</span>
              <span style={{
                padding: "3px 10px", borderRadius: "100px", fontSize: "11px", fontWeight: 600,
                background: `${difficultyColors[project.difficulty]}20`,
                color: difficultyColors[project.difficulty],
                border: `1px solid ${difficultyColors[project.difficulty]}40`,
                fontFamily: "'Inter', sans-serif",
              }}>{project.difficulty}</span>
            </div>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "24px", color: "#fff" }}>
              {project.title}
            </h2>
          </div>
        </div>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px", color: "#94A3B8", lineHeight: 1.7 }}>
          {project.fullDesc}
        </p>
      </div>

      {/* Tech Stack */}
      <div style={{ marginBottom: "24px" }}>
        <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: "13px", color: "#94A3B8", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "12px" }}>
          Tech Stack
        </h4>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          {project.techStack.map((tech) => (
            <span key={tech} style={{
              padding: "5px 14px", borderRadius: "8px", fontSize: "13px", fontWeight: 500,
              background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)",
              color: "#CBD5E1", fontFamily: "'Inter', sans-serif",
            }}>{tech}</span>
          ))}
        </div>
      </div>

      {/* What you'll learn */}
      <div style={{ marginBottom: "32px" }}>
        <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: "13px", color: "#94A3B8", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "12px" }}>
          What You'll Learn
        </h4>
        <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
          {project.learnings.map((item) => (
            <li key={item} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
              <span style={{ color: project.color, fontSize: "14px", marginTop: "2px", flexShrink: 0 }}>✦</span>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", color: "#CBD5E1", lineHeight: 1.5 }}>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary"
        style={{ display: "inline-flex", width: "100%", justifyContent: "center", textDecoration: "none" }}
      >
        <span>🚀 Start Building This Project</span>
      </a>
    </div>
  );
}

function ProjectCard({ project, index, visible }: { project: typeof projects[0]; index: number; visible: boolean }) {
  const [hovered, setHovered] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div
        id={`project-card-${index}`}
        onClick={() => setModalOpen(true)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          background: hovered ? project.gradient : "rgba(255,255,255,0.04)",
          backdropFilter: "blur(16px)",
          border: hovered ? "1px solid rgba(108,99,255,0.5)" : "1px solid rgba(255,255,255,0.08)",
          borderRadius: "20px",
          padding: project.size === "tall" ? "40px 28px" : "28px",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          cursor: "pointer",
          transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
          transform: hovered ? "translateY(-6px) scale(1.01)" : "translateY(0) scale(1)",
          boxShadow: hovered ? "0 20px 60px rgba(108,99,255,0.2), 0 0 0 1px rgba(108,99,255,0.3)" : "0 4px 24px rgba(0,0,0,0.3)",
          opacity: visible ? 1 : 0,
          transitionDelay: `${index * 80}ms`,
          height: "100%",
        }}
      >
        <div style={{
          width: "52px", height: "52px", borderRadius: "14px",
          background: hovered ? `${project.color}20` : "rgba(255,255,255,0.06)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "24px", border: `1px solid ${hovered ? project.color + "40" : "rgba(255,255,255,0.1)"}`,
          flexShrink: 0, transition: "all 0.3s ease",
          boxShadow: hovered ? `0 0 20px ${project.color}30` : "none",
        }}>{project.icon}</div>

        <div style={{ flex: 1 }}>
          <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: project.size === "tall" ? "22px" : "18px", color: "#fff", marginBottom: "8px" }}>
            {project.title}
          </h3>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", color: "#94A3B8", lineHeight: 1.6 }}>
            {project.desc}
          </p>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", color: hovered ? project.color : "#94A3B8", fontWeight: 500, transition: "color 0.3s ease" }}>
            View Details
            <span style={{ transition: "transform 0.3s ease", display: "inline-block", transform: hovered ? "translateX(4px)" : "translateX(0)" }}>→</span>
          </div>
          <span style={{ fontSize: "11px", padding: "3px 8px", borderRadius: "6px", background: "rgba(255,255,255,0.05)", color: "#94A3B8", fontFamily: "'Inter', sans-serif" }}>
            {project.day}
          </span>
        </div>
      </div>

      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} maxWidth="620px">
        <ProjectModal project={project} onClose={() => setModalOpen(false)} />
      </Modal>
    </>
  );
}

export default function BentoGrid() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef} style={{ padding: "120px 0", position: "relative" }}>
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "800px", height: "400px", background: "radial-gradient(ellipse, rgba(108,99,255,0.06), transparent 70%)", pointerEvents: "none" }} />

      <div className="container-custom" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ textAlign: "center", marginBottom: "72px" }}>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#6C63FF", marginBottom: "16px", fontWeight: 600 }}>What You Build</p>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(36px, 4.5vw, 60px)", fontWeight: 700, color: "#fff", letterSpacing: "-0.02em", marginBottom: "16px" }}>6 Real AI Projects</h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "18px", color: "#94A3B8", maxWidth: "540px", margin: "0 auto", lineHeight: 1.6 }}>
            Ship production-ready AI applications you can add to your portfolio and monetize. <br />
            <span style={{ color: "#6C63FF", fontSize: "14px" }}>Click any card to explore →</span>
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridTemplateRows: "auto auto", gap: "20px" }} className="bento-grid">
          <div style={{ position: "relative" }}><ProjectCard project={projects[0]} index={0} visible={visible} /></div>
          <div style={{ gridRow: "span 2", position: "relative" }}><ProjectCard project={projects[1]} index={1} visible={visible} /></div>
          <div style={{ position: "relative" }}><ProjectCard project={projects[2]} index={2} visible={visible} /></div>
          <div style={{ gridColumn: "span 2", position: "relative" }}><ProjectCard project={projects[3]} index={3} visible={visible} /></div>
          <div style={{ gridColumn: "1 / 2", position: "relative" }}><ProjectCard project={projects[4]} index={4} visible={visible} /></div>
          <div style={{ gridColumn: "3 / 4", position: "relative" }}><ProjectCard project={projects[5]} index={5} visible={visible} /></div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .bento-grid { grid-template-columns: 1fr !important; grid-template-rows: auto !important; }
          .bento-grid > div { grid-column: auto !important; grid-row: auto !important; }
        }
        @media (max-width: 1024px) and (min-width: 769px) {
          .bento-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
