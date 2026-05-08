"use client";
import { useEffect, useRef, useState } from "react";

const WHATSAPP_STARTER = "https://wa.me/919999999999?text=Hi!%20I%20want%20to%20join%20ContextCraft%20AI%20-%20Starter%20Plan%20(₹999)";
const WHATSAPP_PRO     = "https://wa.me/919999999999?text=Hi!%20I%20want%20to%20join%20ContextCraft%20AI%20-%20Pro%20Plan%20(₹2499)";
const WHATSAPP_ELITE   = "https://wa.me/919999999999?text=Hi!%20I%20want%20to%20join%20ContextCraft%20AI%20-%20Elite%20Plan%20(₹4999)";

const plans = [
  {
    name: "Starter",
    price: "₹999",
    priceUSD: "~$12",
    desc: "For self-starters who learn best independently",
    highlight: false,
    badge: null,
    features: [
      "7-day recorded curriculum",
      "6 project source code templates",
      "Community Discord access",
      "Basic resource pack & cheat sheets",
      "30-day replay access",
    ],
    notIncluded: ["Live cohort sessions", "1:1 mentorship", "Certificate"],
    cta: "Get Started",
    link: WHATSAPP_STARTER,
    gradient: "linear-gradient(135deg, rgba(108,99,255,0.1), rgba(0,209,255,0.05))",
    borderColor: "rgba(255,255,255,0.1)",
    accentColor: "#6C63FF",
  },
  {
    name: "Pro",
    price: "₹2,499",
    priceUSD: "~$30",
    desc: "The most popular choice for serious learners",
    highlight: true,
    badge: "Most Popular",
    features: [
      "Everything in Starter",
      "Live cohort sessions (7 nights)",
      "1-on-1 doubt clearing (3 sessions)",
      "Code reviews & personal feedback",
      "Certificate of Completion",
      "90-day replay access",
      "Lifetime community access",
    ],
    notIncluded: ["Unlimited 1:1 sessions", "Job placement support"],
    cta: "Join Pro",
    link: WHATSAPP_PRO,
    gradient: "linear-gradient(135deg, rgba(108,99,255,0.18), rgba(168,85,247,0.1))",
    borderColor: "#6C63FF",
    accentColor: "#6C63FF",
  },
  {
    name: "Elite",
    price: "₹4,999",
    priceUSD: "~$60",
    desc: "Full mentorship & job placement support",
    highlight: false,
    badge: null,
    features: [
      "Everything in Pro",
      "Unlimited 1:1 mentorship sessions",
      "Job search strategy & referrals",
      "Portfolio review & LinkedIn audit",
      "Priority verified certificate",
      "Lifetime replay access",
      "SIN School alumni network access",
    ],
    notIncluded: [],
    cta: "Go Elite",
    link: WHATSAPP_ELITE,
    gradient: "linear-gradient(135deg, rgba(168,85,247,0.12), rgba(0,209,255,0.08))",
    borderColor: "rgba(168,85,247,0.4)",
    accentColor: "#A855F7",
  },
];

export default function Pricing() {
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
    <section id="pricing" ref={sectionRef} style={{ padding: "120px 0", position: "relative" }}>
      {/* BG glow */}
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "900px", height: "600px", background: "radial-gradient(ellipse, rgba(108,99,255,0.07), transparent 70%)", pointerEvents: "none" }} />

      <div className="container-custom" style={{ position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "72px" }}>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#6C63FF", marginBottom: "16px", fontWeight: 600 }}>Pricing</p>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(36px,4.5vw,60px)", fontWeight: 700, color: "#fff", letterSpacing: "-0.02em", marginBottom: "16px" }}>
            Invest in Your Future
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "18px", color: "#94A3B8", maxWidth: "480px", margin: "0 auto", lineHeight: 1.6 }}>
            One week. One decision. Unlimited career possibilities.
          </p>
        </div>

        {/* Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "24px", alignItems: "start" }} className="pricing-grid">
          {plans.map((plan, i) => (
            <div
              key={i}
              id={`pricing-${plan.name.toLowerCase()}`}
              style={{
                background: plan.gradient,
                backdropFilter: "blur(20px)",
                border: `1px solid ${plan.borderColor}`,
                borderRadius: "24px",
                padding: "40px 32px",
                position: "relative",
                transform: visible
                  ? plan.highlight ? "scale(1.04) translateY(-8px)" : "translateY(0)"
                  : "translateY(40px)",
                opacity: visible ? 1 : 0,
                transition: `opacity 0.7s ease ${i * 120}ms, transform 0.7s ease ${i * 120}ms`,
                boxShadow: plan.highlight
                  ? "0 0 60px rgba(108,99,255,0.25), 0 24px 80px rgba(0,0,0,0.4)"
                  : "0 8px 40px rgba(0,0,0,0.3)",
              }}
            >
              {/* Neon border for Pro */}
              {plan.highlight && (
                <div style={{ position: "absolute", inset: 0, borderRadius: "24px", border: "1px solid rgba(108,99,255,0.6)", boxShadow: "inset 0 0 30px rgba(108,99,255,0.05), 0 0 30px rgba(108,99,255,0.2)", pointerEvents: "none" }} />
              )}

              {/* Badge */}
              {plan.badge && (
                <div style={{ position: "absolute", top: "-14px", left: "50%", transform: "translateX(-50%)", background: "linear-gradient(90deg,#6C63FF,#A855F7)", color: "#fff", fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: "12px", letterSpacing: "0.06em", padding: "5px 20px", borderRadius: "100px", boxShadow: "0 0 20px rgba(108,99,255,0.5)", whiteSpace: "nowrap" }}>
                  ⚡ {plan.badge}
                </div>
              )}

              {/* Plan name & price */}
              <div style={{ marginBottom: "28px" }}>
                <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: "14px", color: "#94A3B8", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "12px" }}>{plan.name}</div>
                <div style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
                  <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: "48px", color: "#fff", lineHeight: 1 }}>{plan.price}</span>
                  <span style={{ fontFamily: "'Inter',sans-serif", fontSize: "14px", color: "#94A3B8" }}>{plan.priceUSD}</span>
                </div>
                <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "14px", color: "#94A3B8", marginTop: "10px", lineHeight: 1.5 }}>{plan.desc}</p>
              </div>

              {/* Features */}
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 20px 0", display: "flex", flexDirection: "column", gap: "11px" }}>
                {plan.features.map((feat) => (
                  <li key={feat} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                    <div style={{ width: "20px", height: "20px", borderRadius: "50%", background: plan.highlight ? "rgba(108,99,255,0.3)" : "rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "1px" }}>
                      <span style={{ fontSize: "10px", color: plan.highlight ? "#00D1FF" : plan.accentColor }}>✓</span>
                    </div>
                    <span style={{ fontFamily: "'Inter',sans-serif", fontSize: "14px", color: "#CBD5E1", lineHeight: 1.5 }}>{feat}</span>
                  </li>
                ))}
                {plan.notIncluded.map((feat) => (
                  <li key={feat} style={{ display: "flex", alignItems: "flex-start", gap: "10px", opacity: 0.4 }}>
                    <div style={{ width: "20px", height: "20px", borderRadius: "50%", background: "rgba(255,255,255,0.04)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "1px" }}>
                      <span style={{ fontSize: "10px", color: "#94A3B8" }}>✕</span>
                    </div>
                    <span style={{ fontFamily: "'Inter',sans-serif", fontSize: "14px", color: "#94A3B8", lineHeight: 1.5, textDecoration: "line-through" }}>{feat}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={plan.link}
                target="_blank"
                rel="noopener noreferrer"
                id={`pricing-btn-${plan.name.toLowerCase()}`}
                className={plan.highlight ? "btn-primary" : "btn-secondary"}
                style={{ display: "flex", width: "100%", justifyContent: "center", textDecoration: "none", marginTop: "auto" }}
              >
                <span>{plan.cta} →</span>
              </a>
            </div>
          ))}
        </div>

        {/* Guarantee strip */}
        <div style={{ textAlign: "center", marginTop: "48px", display: "flex", alignItems: "center", justifyContent: "center", gap: "24px", flexWrap: "wrap" }}>
          {["🔒 7-day money-back guarantee", "⚡ Instant access on payment", "📲 WhatsApp support", "🏅 Govt. recognised trainer"].map((item) => (
            <span key={item} style={{ fontFamily: "'Inter',sans-serif", fontSize: "13px", color: "#94A3B8" }}>{item}</span>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .pricing-grid { grid-template-columns: 1fr !important; max-width: 480px; margin: 0 auto; }
          #pricing-pro { transform: none !important; }
        }
      `}</style>
    </section>
  );
}
