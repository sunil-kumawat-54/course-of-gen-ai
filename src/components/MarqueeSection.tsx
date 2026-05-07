"use client";

const partners = [
  "OpenAI", "LangChain", "Pinecone", "HuggingFace",
  "Anthropic", "Weaviate", "FastAPI", "Supabase",
  "OpenAI", "LangChain", "Pinecone", "HuggingFace",
  "Anthropic", "Weaviate", "FastAPI", "Supabase",
];

export default function MarqueeSection() {
  return (
    <section
      id="trusted"
      style={{
        padding: "60px 0",
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      {/* Label */}
      <div style={{ textAlign: "center", marginBottom: "32px" }}>
        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "13px",
          fontWeight: 500,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "#94A3B8",
        }}>
          Tools & Technologies Covered
        </p>
      </div>

      {/* Gradient fade edges */}
      <div style={{
        position: "absolute",
        left: 0,
        top: "60px",
        bottom: 0,
        width: "200px",
        background: "linear-gradient(90deg, #070B14, transparent)",
        zIndex: 2,
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute",
        right: 0,
        top: "60px",
        bottom: 0,
        width: "200px",
        background: "linear-gradient(270deg, #070B14, transparent)",
        zIndex: 2,
        pointerEvents: "none",
      }} />

      {/* Marquee track */}
      <div style={{ overflow: "hidden" }}>
        <div
          className="animate-marquee"
          style={{
            display: "flex",
            gap: "40px",
            width: "max-content",
          }}
        >
          {partners.map((name, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "10px 24px",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "100px",
                whiteSpace: "nowrap",
              }}
            >
              <div style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: i % 3 === 0 ? "#6C63FF" : i % 3 === 1 ? "#00D1FF" : "#A855F7",
                flexShrink: 0,
              }} />
              <span style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 600,
                fontSize: "15px",
                color: "#fff",
                opacity: 0.75,
              }}>
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
