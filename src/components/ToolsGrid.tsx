"use client";
import { useEffect, useRef, useState } from "react";
import Modal from "@/components/ui/Modal";

const tools = [
  {
    name: "GPT-4o",
    icon: "🧠",
    color: "#10A37F",
    desc: "OpenAI",
    fullName: "GPT-4o by OpenAI",
    tagline: "The world's most capable multimodal AI model",
    about: "GPT-4o (\"o\" for omni) is OpenAI's flagship model. It handles text, images, audio, and code — all in one model. In this bootcamp, we use it as the reasoning backbone of every AI app we build.",
    usedFor: ["Chat and Q&A systems", "PDF analysis and summarization", "Code generation and debugging", "Structured JSON output", "Multimodal image understanding"],
    officialLink: "https://platform.openai.com",
    linkLabel: "OpenAI Platform →",
  },
  {
    name: "Claude",
    icon: "🤖",
    color: "#E07B35",
    desc: "Anthropic",
    fullName: "Claude 3.5 Sonnet by Anthropic",
    tagline: "Exceptionally safe and powerful AI assistant",
    about: "Claude by Anthropic is renowned for its long context window (200K tokens), nuanced reasoning, and safety-first design. We use Claude as an alternative to GPT-4o and explore its unique strengths.",
    usedFor: ["Long document analysis", "Complex reasoning tasks", "Creative writing and copywriting", "Code review and refactoring", "Constitutional AI principles"],
    officialLink: "https://claude.ai",
    linkLabel: "Try Claude →",
  },
  {
    name: "Gemini",
    icon: "✨",
    color: "#4285F4",
    desc: "Google",
    fullName: "Gemini 1.5 Pro by Google",
    tagline: "Google's multimodal AI powerhouse",
    about: "Gemini 1.5 Pro offers a massive 1M token context window and excels at video, audio, and image understanding. In the bootcamp we explore how to use Google AI Studio and Vertex AI.",
    usedFor: ["1M token long-context tasks", "Video and image analysis", "Google Workspace integration", "Grounding with Google Search", "Multimodal pipeline building"],
    officialLink: "https://ai.google.dev",
    linkLabel: "Google AI Studio →",
  },
  {
    name: "LangChain",
    icon: "🔗",
    color: "#1C7C54",
    desc: "Framework",
    fullName: "LangChain",
    tagline: "The most popular AI app framework",
    about: "LangChain is the go-to framework for building LLM-powered applications. It provides chains, agents, tools, memory, and RAG out of the box. The backbone of 4 out of 6 projects in this bootcamp.",
    usedFor: ["Building RAG pipelines", "Creating AI agents with tools", "Managing conversation memory", "Chaining LLM calls together", "Vector store integrations"],
    officialLink: "https://langchain.com",
    linkLabel: "LangChain Docs →",
  },
  {
    name: "Pinecone",
    icon: "🌲",
    color: "#6BB8A0",
    desc: "Vector DB",
    fullName: "Pinecone Vector Database",
    tagline: "The leading vector database for AI applications",
    about: "Pinecone is a managed vector database built specifically for AI. It stores embeddings and enables semantic similarity search — the core of any RAG system. We use Pinecone in the PDF Chat and Research Assistant projects.",
    usedFor: ["Storing document embeddings", "Semantic similarity search", "RAG knowledge bases", "Long-term agent memory", "Recommendation systems"],
    officialLink: "https://pinecone.io",
    linkLabel: "Pinecone Docs →",
  },
  {
    name: "Whisper",
    icon: "🎙️",
    color: "#FF6B6B",
    desc: "OpenAI",
    fullName: "Whisper by OpenAI",
    tagline: "State-of-the-art speech recognition",
    about: "Whisper is OpenAI's open-source speech-to-text model. It supports 99 languages, handles noisy audio, and achieves near-human transcription accuracy. We use it to build the AI Voice App in Day 5.",
    usedFor: ["Real-time speech transcription", "Multi-language audio processing", "Podcast and lecture transcription", "Voice command interfaces", "Audio summarization pipelines"],
    officialLink: "https://openai.com/research/whisper",
    linkLabel: "Whisper Docs →",
  },
  {
    name: "DALL-E",
    icon: "🎨",
    color: "#A855F7",
    desc: "OpenAI",
    fullName: "DALL-E 3 by OpenAI",
    tagline: "Generate stunning images from text",
    about: "DALL-E 3 generates high-quality images from natural language descriptions. Integrated directly into GPT-4o, it powers image creation in our Multimodal AI day (Day 5). Learn how to build AI image generation into your apps.",
    usedFor: ["Text-to-image generation", "Product image mockups", "AI-powered design tools", "Marketing asset creation", "Visual storytelling apps"],
    officialLink: "https://platform.openai.com/docs/guides/images",
    linkLabel: "DALL-E API Docs →",
  },
  {
    name: "FastAPI",
    icon: "⚡",
    color: "#009688",
    desc: "Backend",
    fullName: "FastAPI",
    tagline: "The fastest Python web framework for AI backends",
    about: "FastAPI is the go-to Python framework for building AI APIs. It's blazing fast (built on Starlette + Pydantic), auto-generates OpenAPI docs, and handles async operations perfectly for LLM streaming. We use it in Day 6.",
    usedFor: ["Building AI REST APIs", "Streaming LLM responses (SSE)", "Authentication and middleware", "Request validation with Pydantic", "Deploying AI models as APIs"],
    officialLink: "https://fastapi.tiangolo.com",
    linkLabel: "FastAPI Docs →",
  },
  {
    name: "Supabase",
    icon: "🗃️",
    color: "#3ECF8E",
    desc: "Database",
    fullName: "Supabase",
    tagline: "Open-source Firebase alternative for AI SaaS",
    about: "Supabase provides a Postgres database, authentication, real-time subscriptions, and file storage — all in one platform. We use Supabase to add auth and data persistence to our AI SaaS Dashboard on Day 6.",
    usedFor: ["User authentication (OAuth)", "Storing user data and sessions", "AI conversation history", "File storage (PDFs, audio)", "Real-time updates"],
    officialLink: "https://supabase.com",
    linkLabel: "Supabase Docs →",
  },
  {
    name: "Vercel",
    icon: "▲",
    color: "#ffffff",
    desc: "Deployment",
    fullName: "Vercel",
    tagline: "Deploy AI apps globally in seconds",
    about: "Vercel is the premier platform for deploying Next.js and AI applications. With edge functions, automatic CI/CD, and global CDN, it's the fastest way to ship your AI apps to production. Day 7 is all about Vercel deployment.",
    usedFor: ["Deploying Next.js AI apps", "Edge function execution", "Environment variable management", "Preview deployments for testing", "Custom domain and SSL setup"],
    officialLink: "https://vercel.com",
    linkLabel: "Vercel Platform →",
  },
];

function ToolModal({ tool }: { tool: typeof tools[0] }) {
  return (
    <div style={{ padding: "0 32px 36px 32px" }}>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
        <div style={{
          width: "64px", height: "64px", borderRadius: "18px",
          background: `${tool.color}20`, display: "flex",
          alignItems: "center", justifyContent: "center",
          fontSize: "30px", border: `1px solid ${tool.color}40`,
          boxShadow: `0 0 24px ${tool.color}30`,
        }}>{tool.icon}</div>
        <div>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "22px", color: "#fff", marginBottom: "4px" }}>{tool.fullName}</h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", color: tool.color, fontWeight: 500 }}>{tool.tagline}</p>
        </div>
      </div>

      {/* About */}
      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px", color: "#94A3B8", lineHeight: 1.7, marginBottom: "24px" }}>
        {tool.about}
      </p>

      {/* Used For */}
      <div style={{ marginBottom: "28px" }}>
        <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: "13px", color: "#94A3B8", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "12px" }}>
          How We Use It in the Bootcamp
        </h4>
        <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "9px" }}>
          {tool.usedFor.map((item) => (
            <li key={item} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
              <span style={{ color: tool.color, fontSize: "12px", marginTop: "3px", flexShrink: 0 }}>✦</span>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", color: "#CBD5E1", lineHeight: 1.5 }}>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Official Link */}
      <a
        href={tool.officialLink}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-flex", alignItems: "center", gap: "8px",
          padding: "12px 24px", borderRadius: "12px",
          background: `${tool.color}15`, border: `1px solid ${tool.color}40`,
          color: tool.color, fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 600, fontSize: "14px", textDecoration: "none",
          transition: "all 0.3s ease",
        }}
        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = `${tool.color}25`; }}
        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = `${tool.color}15`; }}
      >
        {tool.linkLabel}
      </a>
    </div>
  );
}

export default function ToolsGrid() {
  const [visible, setVisible] = useState(false);
  const [selectedTool, setSelectedTool] = useState<typeof tools[0] | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setVisible(true); }, { threshold: 0.2 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="tools" ref={sectionRef} style={{ padding: "120px 0", position: "relative" }}>
      <div className="container-custom" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ textAlign: "center", marginBottom: "72px" }}>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#6C63FF", marginBottom: "16px", fontWeight: 600 }}>Tech Stack</p>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(36px, 4.5vw, 60px)", fontWeight: 700, color: "#fff", letterSpacing: "-0.02em", marginBottom: "12px" }}>
            AI Tools You'll Master
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", color: "#6C63FF" }}>Click any tool to learn more →</p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "16px" }} className="tools-grid">
          {tools.map((tool, i) => {
            const isHovered = hoveredIndex === i;
            return (
              <div
                key={i}
                id={`tool-${tool.name.toLowerCase().replace(/\s/g, "-")}`}
                onClick={() => setSelectedTool(tool)}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  background: isHovered ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.04)",
                  backdropFilter: "blur(16px)",
                  border: isHovered ? `1px solid ${tool.color}50` : "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "18px",
                  padding: "28px 20px",
                  display: "flex", flexDirection: "column", alignItems: "center", gap: "12px",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  transform: visible ? (isHovered ? "translateY(-8px) scale(1.03)" : "translateY(0) scale(1)") : "translateY(30px)",
                  opacity: visible ? 1 : 0,
                  transitionDelay: `${i * 60}ms`,
                  boxShadow: isHovered ? `0 16px 48px rgba(0,0,0,0.3), 0 0 0 1px ${tool.color}30` : "none",
                }}
              >
                <div style={{
                  width: "56px", height: "56px", borderRadius: "16px",
                  background: isHovered ? `${tool.color}20` : "rgba(255,255,255,0.05)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "26px", transition: "all 0.3s ease",
                  boxShadow: isHovered ? `0 0 24px ${tool.color}40` : "none",
                }}>
                  {tool.icon}
                </div>
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "15px", color: "#fff", marginBottom: "4px" }}>{tool.name}</div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", color: isHovered ? tool.color : "#94A3B8", transition: "color 0.3s ease" }}>{tool.desc}</div>
                </div>
                {isHovered && (
                  <div style={{ fontSize: "11px", color: tool.color, fontFamily: "'Inter', sans-serif", opacity: 0.8 }}>Click to explore</div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Tool Modal */}
      <Modal isOpen={!!selectedTool} onClose={() => setSelectedTool(null)} maxWidth="580px">
        {selectedTool && <ToolModal tool={selectedTool} />}
      </Modal>

      <style jsx>{`
        @media (max-width: 900px) { .tools-grid { grid-template-columns: repeat(3, 1fr) !important; } }
        @media (max-width: 560px) { .tools-grid { grid-template-columns: repeat(2, 1fr) !important; } }
      `}</style>
    </section>
  );
}
