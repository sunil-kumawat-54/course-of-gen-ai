"use client";
import { useEffect, useRef, useState } from "react";
import Modal from "@/components/ui/Modal";

const WHATSAPP_LINK = "https://wa.me/919999999999?text=Hi!%20I%20want%20to%20join%20ContextCraft%20AI%20Bootcamp";
// Replace with your real YouTube video ID
const YOUTUBE_VIDEO_ID = "dQw4w9WgXcQ";

function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

function GlowOrb() {
  return (
    <div style={{ position: "relative", width: "340px", height: "340px", flexShrink: 0 }}>
      <div style={{ position: "absolute", inset: "-30px", borderRadius: "50%", border: "1px solid rgba(108,99,255,0.15)", animation: "spin-slow 20s linear infinite" }} />
      <div style={{ position: "absolute", inset: "-15px", borderRadius: "50%", border: "1px solid rgba(0,209,255,0.1)", animation: "spin-reverse 15s linear infinite" }} />
      <div style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "radial-gradient(circle at 35% 35%, #A855F7, #6C63FF 40%, #00D1FF 70%, transparent)", filter: "blur(2px)", animation: "pulse-glow 3s ease-in-out infinite" }} />
      <div style={{ position: "absolute", top: "30%", left: "30%", width: "40%", height: "40%", borderRadius: "50%", background: "radial-gradient(circle, rgba(255,255,255,0.8), rgba(108,99,255,0.4), transparent)", filter: "blur(8px)" }} />
      <div style={{ position: "absolute", inset: "-60px", borderRadius: "50%", background: "radial-gradient(circle, rgba(108,99,255,0.15), transparent 70%)", pointerEvents: "none" }} />
    </div>
  );
}

function FloatingCard({ style, children }: { style?: React.CSSProperties; children: React.ReactNode }) {
  return (
    <div style={{ position: "absolute", background: "rgba(255,255,255,0.07)", backdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "12px", padding: "10px 16px", fontSize: "13px", fontFamily: "'Inter',sans-serif", color: "#fff", whiteSpace: "nowrap", ...style }}>
      {children}
    </div>
  );
}

function PreviewModal({ onClose }: { onClose: () => void }) {
  return (
    <div style={{ padding: "0 0 0 0" }}>
      <div style={{ padding: "24px 28px 16px" }}>
        <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: "20px", color: "#fff", marginBottom: "6px" }}>
          ContextCraft AI — Bootcamp Preview
        </h3>
        <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "14px", color: "#94A3B8" }}>
          7 days · 6 real projects · Production-ready AI skills
        </p>
      </div>

      {/* YouTube embed */}
      <div style={{ position: "relative", width: "100%", paddingTop: "56.25%", background: "#000", overflow: "hidden" }}>
        <iframe
          src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`}
          title="ContextCraft AI Bootcamp Preview"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
        />
      </div>

      {/* Below video */}
      <div style={{ padding: "20px 28px 28px", display: "flex", flexDirection: "column", gap: "16px" }}>
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          {["🧠 GenAI Foundations", "🤖 AI Agents", "🗄️ RAG Systems", "🚀 Live Deployment"].map((tag) => (
            <span key={tag} style={{ padding: "5px 12px", borderRadius: "8px", background: "rgba(108,99,255,0.12)", border: "1px solid rgba(108,99,255,0.2)", fontSize: "12px", color: "#A855F7", fontFamily: "'Inter',sans-serif", fontWeight: 500 }}>{tag}</span>
          ))}
        </div>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
          style={{ display: "flex", justifyContent: "center", textDecoration: "none" }}
          onClick={onClose}
        >
          <span>🚀 Join the Bootcamp Now</span>
        </a>
      </div>
    </div>
  );
}

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [previewOpen, setPreviewOpen] = useState(false);
  const students = useCountUp(1200, 2000, visible);
  const projects = useCountUp(6, 1200, visible);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="hero" style={{ minHeight: "100vh", display: "flex", alignItems: "center", paddingTop: "120px", paddingBottom: "80px", position: "relative", overflow: "hidden" }}>
      {/* Background glows */}
      <div style={{ position: "absolute", top: "20%", right: "10%", width: "600px", height: "600px", background: "radial-gradient(circle, rgba(108,99,255,0.12), transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: "40%", left: "-10%", width: "400px", height: "400px", background: "radial-gradient(circle, rgba(0,209,255,0.08), transparent 70%)", pointerEvents: "none" }} />

      <div className="container-custom" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }} className="hero-grid">
          {/* LEFT */}
          <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
            {/* Badge */}
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(108,99,255,0.15)", border: "1px solid rgba(108,99,255,0.3)", borderRadius: "100px", padding: "6px 16px", fontSize: "13px", fontWeight: 500, color: "#A855F7", width: "fit-content", opacity: visible ? 1 : 0, transition: "opacity 0.6s ease" }}>
              🚀 Next Cohort Starting Soon
            </div>

            {/* Headline */}
            <h1 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: "clamp(42px,5.5vw,76px)", fontWeight: 700, lineHeight: 1.05, letterSpacing: "-0.03em", color: "#fff", opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(30px)", transition: "opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s" }}>
              Master{" "}
              <span style={{ background: "linear-gradient(135deg,#6C63FF,#00D1FF,#A855F7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                GenAI & Context AI
              </span>{" "}
              in 7 Days
            </h1>

            {/* Subtext */}
            <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "18px", lineHeight: 1.7, color: "#94A3B8", maxWidth: "520px", opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(30px)", transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s" }}>
              Build real AI apps with memory, agents, RAG, multimodal AI, and automation.
              Go from zero to deploying production AI systems.
            </p>

            {/* CTAs */}
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(30px)", transition: "opacity 0.7s ease 0.3s, transform 0.7s ease 0.3s" }}>
              <a
                id="hero-join-btn"
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ textDecoration: "none" }}
              >
                <span>Join Bootcamp</span>
              </a>
              <button
                id="hero-preview-btn"
                className="btn-secondary"
                onClick={() => setPreviewOpen(true)}
                style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}
              >
                <span style={{ width: "28px", height: "28px", borderRadius: "50%", background: "rgba(108,99,255,0.2)", border: "1px solid rgba(108,99,255,0.4)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "12px" }}>▶</span>
                Watch Preview
              </button>
            </div>

            {/* Stats */}
            <div style={{ display: "flex", gap: "40px", paddingTop: "8px", flexWrap: "wrap", opacity: visible ? 1 : 0, transition: "opacity 0.7s ease 0.4s" }}>
              {[
                { value: `${students.toLocaleString()}+`, label: "Students" },
                { value: "7", label: "Days" },
                { value: `${projects}`, label: "Real Projects" },
              ].map((stat) => (
                <div key={stat.label} style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                  <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: "28px", fontWeight: 700, background: "linear-gradient(90deg,#6C63FF,#00D1FF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>{stat.value}</span>
                  <span style={{ fontSize: "13px", color: "#94A3B8", fontFamily: "'Inter',sans-serif" }}>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Orb */}
          <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", height: "500px", opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(40px)", transition: "opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s" }} className="hero-orb">
            <div style={{ animation: "float-slow 8s ease-in-out infinite" }}>
              <GlowOrb />
            </div>
            <FloatingCard style={{ top: "20px", left: "-30px", animation: "float 7s ease-in-out infinite" }}>
              <span style={{ color: "#00D1FF", fontWeight: 600 }}>✓</span> RAG Pipeline Built
            </FloatingCard>
            <FloatingCard style={{ top: "80px", right: "-50px", animation: "float 6s ease-in-out infinite 1s" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#00D1FF", animation: "ping-slow 1.5s ease-in-out infinite" }} />
                AI Agent Running...
              </div>
            </FloatingCard>
            <FloatingCard style={{ bottom: "120px", left: "-60px", animation: "float 8s ease-in-out infinite 0.5s" }}>
              <div style={{ color: "#94A3B8", fontSize: "11px", marginBottom: "2px" }}>Memory</div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <div style={{ flex: 1, height: "4px", background: "rgba(255,255,255,0.1)", borderRadius: "2px", overflow: "hidden" }}>
                  <div style={{ height: "100%", width: "98%", background: "linear-gradient(90deg,#6C63FF,#00D1FF)", borderRadius: "2px" }} />
                </div>
                <span style={{ fontWeight: 600, color: "#00D1FF", fontSize: "12px" }}>98%</span>
              </div>
              <div style={{ fontSize: "11px", color: "#94A3B8", marginTop: "2px" }}>Context Retained</div>
            </FloatingCard>
            <FloatingCard style={{ bottom: "60px", right: "-20px", animation: "float 9s ease-in-out infinite 1.5s" }}>
              <div style={{ color: "#94A3B8", fontSize: "11px" }}>Tokens</div>
              <div style={{ fontWeight: 700, fontSize: "18px", background: "linear-gradient(90deg,#A855F7,#6C63FF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>4,096</div>
            </FloatingCard>
            <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }} viewBox="0 0 500 500" fill="none">
              <line x1="170" y1="50" x2="250" y2="170" stroke="url(#lg1)" strokeWidth="0.8" strokeOpacity="0.4" strokeDasharray="4 4" />
              <line x1="370" y1="100" x2="280" y2="200" stroke="url(#lg2)" strokeWidth="0.8" strokeOpacity="0.4" strokeDasharray="4 4" />
              <line x1="130" y1="350" x2="240" y2="280" stroke="url(#lg1)" strokeWidth="0.8" strokeOpacity="0.4" strokeDasharray="4 4" />
              <line x1="380" y1="390" x2="280" y2="310" stroke="url(#lg2)" strokeWidth="0.8" strokeOpacity="0.4" strokeDasharray="4 4" />
              <defs>
                <linearGradient id="lg1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#6C63FF" /><stop offset="100%" stopColor="#00D1FF" /></linearGradient>
                <linearGradient id="lg2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#A855F7" /><stop offset="100%" stopColor="#6C63FF" /></linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>

      {/* Watch Preview Modal */}
      <Modal isOpen={previewOpen} onClose={() => setPreviewOpen(false)} maxWidth="720px">
        <PreviewModal onClose={() => setPreviewOpen(false)} />
      </Modal>

      <style jsx>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 60px !important; }
          .hero-orb { height: 380px !important; }
        }
        @media (max-width: 480px) {
          .hero-orb { height: 300px !important; }
        }
      `}</style>
    </section>
  );
}
