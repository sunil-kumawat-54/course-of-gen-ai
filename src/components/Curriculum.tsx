"use client";
import { useEffect, useRef, useState } from "react";

const days = [
  {
    day: "01",
    title: "Foundations of GenAI",
    desc: "LLMs, transformers, tokens, and the AI landscape",
    color: "#6C63FF",
  },
  {
    day: "02",
    title: "Prompt Engineering & Few-Shot",
    desc: "Chain-of-thought, few-shot, zero-shot, system prompts",
    color: "#7B6EFF",
  },
  {
    day: "03",
    title: "Context AI & RAG",
    desc: "Vector databases, embeddings, retrieval-augmented generation",
    color: "#8A79FF",
  },
  {
    day: "04",
    title: "AI Agents & Tool Use",
    desc: "Autonomous agents, function calling, LangChain tools",
    color: "#00D1FF",
  },
  {
    day: "05",
    title: "Multimodal AI",
    desc: "Vision models, Whisper speech, DALL-E image generation",
    color: "#00BFFF",
  },
  {
    day: "06",
    title: "SaaS Build & APIs",
    desc: "FastAPI backend, Supabase auth, payment integration",
    color: "#A855F7",
  },
  {
    day: "07",
    title: "Launch, Deploy & Monetize",
    desc: "Vercel deployment, pricing strategy, growth hacking",
    color: "#C084FC",
  },
];

export default function Curriculum() {
  const [activeDay, setActiveDay] = useState(-1);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          // Stagger activate day nodes
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
    <section
      id="curriculum"
      ref={sectionRef}
      style={{ padding: "120px 0", position: "relative", overflow: "hidden" }}
    >
      {/* Background gradient */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(180deg, transparent, rgba(108,99,255,0.03) 50%, transparent)",
        pointerEvents: "none",
      }} />

      <div className="container-custom" style={{ position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "80px" }}>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "13px",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#6C63FF",
            marginBottom: "16px",
            fontWeight: 600,
          }}>
            7-Day Program
          </p>
          <h2 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(36px, 4.5vw, 60px)",
            fontWeight: 700,
            color: "#fff",
            letterSpacing: "-0.02em",
            marginBottom: "16px",
          }}>
            Your Learning Journey
          </h2>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "18px",
            color: "#94A3B8",
            maxWidth: "500px",
            margin: "0 auto",
            lineHeight: 1.6,
          }}>
            Seven intensive days. Zero fluff. Pure AI mastery.
          </p>
        </div>

        {/* Horizontal Timeline — desktop */}
        <div className="timeline-desktop">
          {/* Progress line */}
          <div style={{ position: "relative", marginBottom: "48px" }}>
            <div style={{
              position: "absolute",
              top: "50%",
              left: "7%",
              right: "7%",
              height: "2px",
              background: "rgba(255,255,255,0.08)",
              transform: "translateY(-50%)",
            }} />
            <div style={{
              position: "absolute",
              top: "50%",
              left: "7%",
              height: "2px",
              background: "linear-gradient(90deg, #6C63FF, #00D1FF, #A855F7)",
              transform: "translateY(-50%)",
              transition: "width 2s ease",
              width: visible ? "86%" : "0%",
              boxShadow: "0 0 12px rgba(108,99,255,0.5)",
            }} />

            {/* Day nodes */}
            <div style={{ display: "flex", justifyContent: "space-between", position: "relative" }}>
              {days.map((day, i) => (
                <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", flex: 1 }}>
                  {/* Circle node */}
                  <div style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "50%",
                    background: i <= activeDay
                      ? `linear-gradient(135deg, ${day.color}, #070B14)`
                      : "rgba(255,255,255,0.05)",
                    border: i <= activeDay
                      ? `2px solid ${day.color}`
                      : "2px solid rgba(255,255,255,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.5s ease",
                    boxShadow: i <= activeDay
                      ? `0 0 20px ${day.color}60, 0 0 40px ${day.color}30`
                      : "none",
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 700,
                    fontSize: "13px",
                    color: i <= activeDay ? "#fff" : "#94A3B8",
                    position: "relative",
                    zIndex: 1,
                  }}>
                    {i <= activeDay ? (
                      <span style={{ fontSize: "16px" }}>✓</span>
                    ) : (
                      day.day
                    )}

                    {/* Ping effect on active */}
                    {i === activeDay && (
                      <div style={{
                        position: "absolute",
                        inset: "-6px",
                        borderRadius: "50%",
                        border: `2px solid ${day.color}`,
                        animation: "ping-slow 1.5s ease-in-out infinite",
                        opacity: 0.5,
                      }} />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Day cards below nodes */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: "12px" }}>
            {days.map((day, i) => (
              <div
                key={i}
                id={`curriculum-day-${i + 1}`}
                style={{
                  background: i <= activeDay ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.02)",
                  border: i <= activeDay ? `1px solid ${day.color}30` : "1px solid rgba(255,255,255,0.05)",
                  borderRadius: "14px",
                  padding: "16px 12px",
                  transition: "all 0.5s ease",
                  opacity: i <= activeDay ? 1 : 0.4,
                  transform: i <= activeDay ? "translateY(0)" : "translateY(8px)",
                }}
              >
                <div style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  fontFamily: "'Space Grotesk', sans-serif",
                  color: day.color,
                  letterSpacing: "0.08em",
                  marginBottom: "6px",
                }}>
                  DAY {day.day}
                </div>
                <div style={{
                  fontSize: "13px",
                  fontWeight: 600,
                  fontFamily: "'Space Grotesk', sans-serif",
                  color: "#fff",
                  marginBottom: "6px",
                  lineHeight: 1.3,
                }}>
                  {day.title}
                </div>
                <div style={{
                  fontSize: "11px",
                  color: "#94A3B8",
                  lineHeight: 1.5,
                  fontFamily: "'Inter', sans-serif",
                }}>
                  {day.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline — vertical */}
        <div className="timeline-mobile" style={{ display: "none" }}>
          <div style={{ position: "relative", paddingLeft: "40px" }}>
            {/* Vertical line */}
            <div style={{
              position: "absolute",
              left: "16px",
              top: 0,
              bottom: 0,
              width: "2px",
              background: "linear-gradient(180deg, #6C63FF, #00D1FF, #A855F7)",
            }} />

            {days.map((day, i) => (
              <div key={i} style={{ position: "relative", marginBottom: "28px" }}>
                {/* Node */}
                <div style={{
                  position: "absolute",
                  left: "-31px",
                  top: "4px",
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  background: `linear-gradient(135deg, ${day.color}, #070B14)`,
                  border: `2px solid ${day.color}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "11px",
                  fontWeight: 700,
                  color: "#fff",
                  fontFamily: "'Space Grotesk', sans-serif",
                  boxShadow: `0 0 16px ${day.color}60`,
                }}>
                  {day.day}
                </div>

                <div style={{
                  background: "rgba(255,255,255,0.05)",
                  border: `1px solid ${day.color}30`,
                  borderRadius: "12px",
                  padding: "16px",
                }}>
                  <div style={{ fontSize: "11px", color: day.color, fontWeight: 700, marginBottom: "4px", fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "0.08em" }}>
                    DAY {day.day}
                  </div>
                  <div style={{ fontSize: "15px", fontWeight: 600, color: "#fff", marginBottom: "6px", fontFamily: "'Space Grotesk', sans-serif" }}>
                    {day.title}
                  </div>
                  <div style={{ fontSize: "13px", color: "#94A3B8", lineHeight: 1.5, fontFamily: "'Inter', sans-serif" }}>
                    {day.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .timeline-desktop { display: none !important; }
          .timeline-mobile { display: block !important; }
        }
      `}</style>
    </section>
  );
}
