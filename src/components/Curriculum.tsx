"use client";
import { useEffect, useRef, useState } from "react";
import Modal from "@/components/ui/Modal";

const WHATSAPP_LINK = "https://wa.me/919999999999?text=Hi!%20I%20want%20to%20join%20ContextCraft%20AI%20Bootcamp";

const days = [
  {
    day: "01",
    title: "Foundations of GenAI",
    desc: "LLMs, transformers, tokens, and the AI landscape",
    color: "#6C63FF",
    topics: [
      "How Large Language Models work (transformer architecture)",
      "Tokens, context windows, and temperature settings",
      "The AI landscape: OpenAI vs Anthropic vs Google",
      "Setting up your AI dev environment (API keys, VS Code, Python)",
      "Your first GPT-4o API call from scratch",
    ],
    project: "Build a simple CLI chatbot with conversation history",
    outcome: "You'll understand how LLMs work under the hood and make your first AI-powered app.",
    resources: [
      { label: "OpenAI API Docs", url: "https://platform.openai.com/docs" },
      { label: "Illustrated Transformer", url: "https://jalammar.github.io/illustrated-transformer/" },
    ],
  },
  {
    day: "02",
    title: "Prompt Engineering & Few-Shot",
    desc: "Chain-of-thought, few-shot, zero-shot, system prompts",
    color: "#7B6EFF",
    topics: [
      "System prompts and persona design",
      "Zero-shot vs few-shot vs chain-of-thought prompting",
      "Prompt chaining and sequential reasoning",
      "Structured output prompting (JSON mode)",
      "Advanced techniques: Tree-of-Thought, ReAct prompting",
    ],
    project: "Build a multi-step reasoning engine that solves complex problems",
    outcome: "Master the art of communicating with LLMs to get reliable, precise outputs.",
    resources: [
      { label: "OpenAI Prompt Guide", url: "https://platform.openai.com/docs/guides/prompt-engineering" },
      { label: "Prompt Engineering Guide", url: "https://www.promptingguide.ai/" },
    ],
  },
  {
    day: "03",
    title: "Context AI & RAG",
    desc: "Vector databases, embeddings, retrieval-augmented generation",
    color: "#8A79FF",
    topics: [
      "What is RAG and why it beats fine-tuning for most use cases",
      "Text embeddings and semantic similarity",
      "Setting up Pinecone vector database",
      "Chunking strategies for documents",
      "Building a full RAG pipeline with LangChain",
    ],
    project: "🏆 AI PDF Chat App — chat with any PDF document",
    outcome: "Build AI that knows your private data without expensive fine-tuning.",
    resources: [
      { label: "LangChain RAG Docs", url: "https://python.langchain.com/docs/use_cases/question_answering/" },
      { label: "Pinecone Quickstart", url: "https://docs.pinecone.io/guides/get-started/quickstart" },
    ],
  },
  {
    day: "04",
    title: "AI Agents & Tool Use",
    desc: "Autonomous agents, function calling, LangChain tools",
    color: "#00D1FF",
    topics: [
      "What is an AI Agent and how ReAct works",
      "OpenAI function calling and structured tools",
      "Building custom tools for your agent",
      "Long-term memory with Supabase",
      "Autonomous multi-step task execution",
    ],
    project: "🏆 AI Agent with Memory — autonomous agent that remembers you",
    outcome: "Build AI that can act, remember, and reason over multiple sessions.",
    resources: [
      { label: "LangChain Agents", url: "https://python.langchain.com/docs/modules/agents/" },
      { label: "OpenAI Function Calling", url: "https://platform.openai.com/docs/guides/function-calling" },
    ],
  },
  {
    day: "05",
    title: "Multimodal AI",
    desc: "Vision models, Whisper speech, DALL-E image generation",
    color: "#00BFFF",
    topics: [
      "Working with GPT-4o Vision (image understanding)",
      "Speech-to-text with Whisper API",
      "Text-to-speech with OpenAI TTS / ElevenLabs",
      "Image generation with DALL-E 3",
      "Building a voice-to-voice AI pipeline",
    ],
    project: "🏆 AI Voice App — speak to AI, get spoken responses",
    outcome: "Build AI that sees, hears, and speaks — just like a human.",
    resources: [
      { label: "OpenAI Vision Guide", url: "https://platform.openai.com/docs/guides/vision" },
      { label: "Whisper API", url: "https://platform.openai.com/docs/guides/speech-to-text" },
    ],
  },
  {
    day: "06",
    title: "SaaS Build & APIs",
    desc: "FastAPI backend, Supabase auth, payment integration",
    color: "#A855F7",
    topics: [
      "Designing a production AI API with FastAPI",
      "User authentication with Supabase Auth",
      "Stripe subscription billing integration",
      "Usage tracking and rate limiting",
      "Deploying FastAPI to Railway / Render",
    ],
    project: "🏆 AI SaaS Dashboard — full product with auth and billing",
    outcome: "Build a complete, monetizable AI SaaS product from scratch.",
    resources: [
      { label: "FastAPI Docs", url: "https://fastapi.tiangolo.com/" },
      { label: "Supabase Auth", url: "https://supabase.com/docs/guides/auth" },
    ],
  },
  {
    day: "07",
    title: "Launch, Deploy & Monetize",
    desc: "Vercel deployment, pricing strategy, growth hacking",
    color: "#C084FC",
    topics: [
      "Deploying Next.js AI apps to Vercel",
      "Custom domain, SSL, and environment variables",
      "Pricing strategy for AI products",
      "Growth hacking for SaaS (Product Hunt, Twitter, SEO)",
      "Portfolio presentation and LinkedIn optimization",
    ],
    project: "🚀 Launch your AI product live to the world",
    outcome: "Go from code to live, monetizing product — with your first users.",
    resources: [
      { label: "Vercel Deployment", url: "https://vercel.com/docs" },
      { label: "Product Hunt Launch Guide", url: "https://www.producthunt.com/launch" },
    ],
  },
];

function DayModal({ day }: { day: typeof days[0] }) {
  return (
    <div style={{ padding: "0 32px 36px 32px" }}>
      {/* Header */}
      <div style={{ marginBottom: "24px" }}>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: "6px",
          padding: "4px 12px", borderRadius: "100px",
          background: `${day.color}20`, border: `1px solid ${day.color}40`,
          fontSize: "12px", fontWeight: 700, color: day.color,
          fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "0.06em",
          marginBottom: "12px",
        }}>
          DAY {day.day}
        </div>
        <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "24px", color: "#fff", marginBottom: "8px" }}>
          {day.title}
        </h2>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px", color: "#94A3B8", lineHeight: 1.6 }}>
          {day.desc}
        </p>
      </div>

      {/* Topics */}
      <div style={{ marginBottom: "24px" }}>
        <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: "13px", color: "#94A3B8", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "12px" }}>
          Topics Covered
        </h4>
        <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
          {day.topics.map((topic, i) => (
            <li key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
              <div style={{
                width: "22px", height: "22px", borderRadius: "50%", flexShrink: 0,
                background: `${day.color}20`, border: `1px solid ${day.color}40`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "10px", fontWeight: 700, color: day.color,
                fontFamily: "'Space Grotesk', sans-serif", marginTop: "1px",
              }}>
                {i + 1}
              </div>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", color: "#CBD5E1", lineHeight: 1.6 }}>{topic}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Project */}
      <div style={{
        padding: "16px 20px", borderRadius: "14px",
        background: `${day.color}10`, border: `1px solid ${day.color}30`,
        marginBottom: "24px",
      }}>
        <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: "12px", color: day.color, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "6px" }}>
          Day Project
        </div>
        <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px", color: "#fff", fontWeight: 500 }}>{day.project}</div>
      </div>

      {/* Outcome */}
      <div style={{
        padding: "14px 20px", borderRadius: "12px",
        background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)",
        marginBottom: "28px",
      }}>
        <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: "12px", color: "#94A3B8", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "6px" }}>
          🎯 What You'll Achieve
        </div>
        <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", color: "#CBD5E1", lineHeight: 1.6 }}>{day.outcome}</div>
      </div>

      {/* Resources */}
      <div style={{ marginBottom: "28px" }}>
        <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: "13px", color: "#94A3B8", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "12px" }}>
          Key Resources
        </h4>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          {day.resources.map((r) => (
            <a
              key={r.label}
              href={r.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: "8px 16px", borderRadius: "10px", fontSize: "13px", fontWeight: 500,
                background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)",
                color: "#CBD5E1", textDecoration: "none", fontFamily: "'Inter', sans-serif",
                transition: "all 0.2s ease",
                display: "inline-flex", alignItems: "center", gap: "6px",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = day.color + "60"; (e.currentTarget as HTMLElement).style.color = day.color; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)"; (e.currentTarget as HTMLElement).style.color = "#CBD5E1"; }}
            >
              {r.label} ↗
            </a>
          ))}
        </div>
      </div>

      {/* CTA */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary"
        style={{ display: "inline-flex", width: "100%", justifyContent: "center", textDecoration: "none" }}
      >
        <span>🚀 Join the Bootcamp — Start Day {day.day}</span>
      </a>
    </div>
  );
}

export default function Curriculum() {
  const [activeDay, setActiveDay] = useState(-1);
  const [visible, setVisible] = useState(false);
  const [selectedDay, setSelectedDay] = useState<typeof days[0] | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          days.forEach((_, i) => {
            setTimeout(() => setActiveDay(i), 300 + i * 200);
          });
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="curriculum" ref={sectionRef} style={{ padding: "120px 0", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent, rgba(108,99,255,0.03) 50%, transparent)", pointerEvents: "none" }} />

      <div className="container-custom" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ textAlign: "center", marginBottom: "80px" }}>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#6C63FF", marginBottom: "16px", fontWeight: 600 }}>7-Day Program</p>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(36px, 4.5vw, 60px)", fontWeight: 700, color: "#fff", letterSpacing: "-0.02em", marginBottom: "16px" }}>
            Your Learning Journey
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "18px", color: "#94A3B8", maxWidth: "500px", margin: "0 auto", lineHeight: 1.6 }}>
            Seven intensive days. Zero fluff. Pure AI mastery.<br />
            <span style={{ fontSize: "14px", color: "#6C63FF" }}>Click any day to see what you'll learn →</span>
          </p>
        </div>

        {/* Desktop Horizontal Timeline */}
        <div className="timeline-desktop">
          <div style={{ position: "relative", marginBottom: "48px" }}>
            <div style={{ position: "absolute", top: "50%", left: "7%", right: "7%", height: "2px", background: "rgba(255,255,255,0.08)", transform: "translateY(-50%)" }} />
            <div style={{ position: "absolute", top: "50%", left: "7%", height: "2px", background: "linear-gradient(90deg, #6C63FF, #00D1FF, #A855F7)", transform: "translateY(-50%)", transition: "width 2s ease", width: visible ? "86%" : "0%", boxShadow: "0 0 12px rgba(108,99,255,0.5)" }} />

            <div style={{ display: "flex", justifyContent: "space-between", position: "relative" }}>
              {days.map((day, i) => (
                <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", flex: 1 }}>
                  <div
                    onClick={() => setSelectedDay(day)}
                    title={`Click to explore Day ${day.day}`}
                    style={{
                      width: "44px", height: "44px", borderRadius: "50%",
                      background: i <= activeDay ? `linear-gradient(135deg, ${day.color}, #070B14)` : "rgba(255,255,255,0.05)",
                      border: i <= activeDay ? `2px solid ${day.color}` : "2px solid rgba(255,255,255,0.1)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      transition: "all 0.5s ease",
                      boxShadow: i <= activeDay ? `0 0 20px ${day.color}60, 0 0 40px ${day.color}30` : "none",
                      fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "13px",
                      color: i <= activeDay ? "#fff" : "#94A3B8",
                      position: "relative", zIndex: 1, cursor: "pointer",
                    }}
                  >
                    {i <= activeDay ? <span style={{ fontSize: "16px" }}>✓</span> : day.day}
                    {i === activeDay && (
                      <div style={{ position: "absolute", inset: "-6px", borderRadius: "50%", border: `2px solid ${day.color}`, animation: "ping-slow 1.5s ease-in-out infinite", opacity: 0.5 }} />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Day cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: "12px" }}>
            {days.map((day, i) => (
              <div
                key={i}
                id={`curriculum-day-${i + 1}`}
                onClick={() => setSelectedDay(day)}
                style={{
                  background: i <= activeDay ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.02)",
                  border: i <= activeDay ? `1px solid ${day.color}30` : "1px solid rgba(255,255,255,0.05)",
                  borderRadius: "14px", padding: "16px 12px",
                  transition: "all 0.5s ease",
                  opacity: i <= activeDay ? 1 : 0.4,
                  transform: i <= activeDay ? "translateY(0)" : "translateY(8px)",
                  cursor: "pointer",
                }}
                onMouseEnter={e => {
                  if (i <= activeDay) {
                    (e.currentTarget as HTMLElement).style.background = `${day.color}15`;
                    (e.currentTarget as HTMLElement).style.borderColor = `${day.color}60`;
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                  }
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background = i <= activeDay ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.02)";
                  (e.currentTarget as HTMLElement).style.borderColor = i <= activeDay ? `${day.color}30` : "rgba(255,255,255,0.05)";
                  (e.currentTarget as HTMLElement).style.transform = i <= activeDay ? "translateY(0)" : "translateY(8px)";
                }}
              >
                <div style={{ fontSize: "11px", fontWeight: 700, fontFamily: "'Space Grotesk', sans-serif", color: day.color, letterSpacing: "0.08em", marginBottom: "6px" }}>DAY {day.day}</div>
                <div style={{ fontSize: "13px", fontWeight: 600, fontFamily: "'Space Grotesk', sans-serif", color: "#fff", marginBottom: "6px", lineHeight: 1.3 }}>{day.title}</div>
                <div style={{ fontSize: "11px", color: "#94A3B8", lineHeight: 1.5, fontFamily: "'Inter', sans-serif" }}>{day.desc}</div>
                {i <= activeDay && (
                  <div style={{ marginTop: "10px", fontSize: "10px", color: day.color, fontFamily: "'Inter', sans-serif", fontWeight: 500, opacity: 0.8 }}>Tap to expand ↗</div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile vertical timeline */}
        <div className="timeline-mobile" style={{ display: "none" }}>
          <div style={{ position: "relative", paddingLeft: "40px" }}>
            <div style={{ position: "absolute", left: "16px", top: 0, bottom: 0, width: "2px", background: "linear-gradient(180deg, #6C63FF, #00D1FF, #A855F7)" }} />
            {days.map((day, i) => (
              <div key={i} style={{ position: "relative", marginBottom: "20px" }}>
                <div style={{ position: "absolute", left: "-31px", top: "4px", width: "32px", height: "32px", borderRadius: "50%", background: `linear-gradient(135deg, ${day.color}, #070B14)`, border: `2px solid ${day.color}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: 700, color: "#fff", fontFamily: "'Space Grotesk', sans-serif", boxShadow: `0 0 16px ${day.color}60` }}>
                  {day.day}
                </div>
                <div
                  onClick={() => setSelectedDay(day)}
                  style={{ background: "rgba(255,255,255,0.05)", border: `1px solid ${day.color}30`, borderRadius: "12px", padding: "16px", cursor: "pointer" }}
                >
                  <div style={{ fontSize: "11px", color: day.color, fontWeight: 700, marginBottom: "4px", fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "0.08em" }}>DAY {day.day}</div>
                  <div style={{ fontSize: "15px", fontWeight: 600, color: "#fff", marginBottom: "4px", fontFamily: "'Space Grotesk', sans-serif" }}>{day.title}</div>
                  <div style={{ fontSize: "13px", color: "#94A3B8", lineHeight: 1.5, fontFamily: "'Inter', sans-serif" }}>{day.desc}</div>
                  <div style={{ marginTop: "8px", fontSize: "11px", color: day.color, fontFamily: "'Inter', sans-serif" }}>Tap to expand →</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Day detail modal */}
      <Modal isOpen={!!selectedDay} onClose={() => setSelectedDay(null)} maxWidth="620px">
        {selectedDay && <DayModal day={selectedDay} />}
      </Modal>

      <style jsx>{`
        @media (max-width: 900px) {
          .timeline-desktop { display: none !important; }
          .timeline-mobile { display: block !important; }
        }
      `}</style>
    </section>
  );
}
