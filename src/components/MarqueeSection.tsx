"use client";

const WHATSAPP_LINK = "https://wa.me/919999999999?text=Hi!%20I%20want%20to%20join%20ContextCraft%20AI%20Bootcamp";

const partners = [
  { name: "OpenAI",      url: "https://platform.openai.com",      color: "#10A37F" },
  { name: "LangChain",   url: "https://langchain.com",            color: "#1C7C54" },
  { name: "Pinecone",    url: "https://pinecone.io",              color: "#6BB8A0" },
  { name: "HuggingFace", url: "https://huggingface.co",           color: "#FF9D00" },
  { name: "Anthropic",   url: "https://anthropic.com",            color: "#E07B35" },
  { name: "Weaviate",    url: "https://weaviate.io",              color: "#00B3C4" },
  { name: "FastAPI",     url: "https://fastapi.tiangolo.com",     color: "#009688" },
  { name: "Supabase",    url: "https://supabase.com",             color: "#3ECF8E" },
  // duplicate for seamless loop
  { name: "OpenAI",      url: "https://platform.openai.com",      color: "#10A37F" },
  { name: "LangChain",   url: "https://langchain.com",            color: "#1C7C54" },
  { name: "Pinecone",    url: "https://pinecone.io",              color: "#6BB8A0" },
  { name: "HuggingFace", url: "https://huggingface.co",           color: "#FF9D00" },
  { name: "Anthropic",   url: "https://anthropic.com",            color: "#E07B35" },
  { name: "Weaviate",    url: "https://weaviate.io",              color: "#00B3C4" },
  { name: "FastAPI",     url: "https://fastapi.tiangolo.com",     color: "#009688" },
  { name: "Supabase",    url: "https://supabase.com",             color: "#3ECF8E" },
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
          Tools & Technologies Covered · Click to Explore
        </p>
      </div>

      {/* Gradient fade edges */}
      <div style={{ position: "absolute", left: 0, top: "60px", bottom: 0, width: "200px", background: "linear-gradient(90deg, #070B14, transparent)", zIndex: 2, pointerEvents: "none" }} />
      <div style={{ position: "absolute", right: 0, top: "60px", bottom: 0, width: "200px", background: "linear-gradient(270deg, #070B14, transparent)", zIndex: 2, pointerEvents: "none" }} />

      {/* Marquee track */}
      <div style={{ overflow: "hidden" }}>
        <div
          className="animate-marquee"
          style={{ display: "flex", gap: "20px", width: "max-content" }}
        >
          {partners.map((p, i) => (
            <a
              key={i}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              title={`Learn ${p.name} in the bootcamp`}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "10px 22px",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "100px",
                whiteSpace: "nowrap",
                textDecoration: "none",
                transition: "all 0.25s ease",
                cursor: "pointer",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = `${p.color}15`;
                (e.currentTarget as HTMLElement).style.borderColor = `${p.color}50`;
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: p.color, flexShrink: 0 }} />
              <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: "15px", color: "#fff", opacity: 0.8 }}>
                {p.name}
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div style={{ textAlign: "center", marginTop: "32px" }}>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            fontFamily: "'Inter', sans-serif",
            fontSize: "14px",
            color: "#6C63FF",
            textDecoration: "none",
            fontWeight: 500,
            transition: "color 0.2s ease",
          }}
          onMouseEnter={e => (e.currentTarget.style.color = "#00D1FF")}
          onMouseLeave={e => (e.currentTarget.style.color = "#6C63FF")}
        >
          Master all these tools in 7 days →
        </a>
      </div>
    </section>
  );
}
