"use client";
import { useState, useRef, useEffect } from "react";

const faqs = [
  {
    q: "Do I need prior AI or coding experience to join?",
    a: "No prior AI experience is required! You'll need basic Python knowledge (variables, functions, loops). If you're completely new to Python, we recommend spending 2-3 days on Python basics before the bootcamp starts.",
  },
  {
    q: "What projects will I actually build?",
    a: "You'll build 6 real-world AI applications: an AI PDF Chat system, an AI Agent with memory, a Resume Analyzer, an AI Voice App, an AI Research Assistant, and a full AI SaaS Dashboard with auth and billing.",
  },
  {
    q: "Are the sessions live or pre-recorded?",
    a: "Starter plan gets access to high-quality pre-recorded sessions. Pro and Elite plans include live cohort sessions, live Q&A, and real-time mentorship from Er. Harshvardhan Purohit.",
  },
  {
    q: "What tools and APIs will I need? Are they free?",
    a: "We use a combination of free tiers and affordable APIs. OpenAI API costs roughly ₹200-400 for the entire 7-day bootcamp. We'll also show you free alternatives using open-source models so you can learn without spending anything.",
  },
  {
    q: "Is there a certificate at the end?",
    a: "Pro and Elite plans receive a verified Certificate of Completion from SIN School of AI, co-signed by Er. Harshvardhan Purohit. You can add this directly to your LinkedIn profile and resume.",
  },
  {
    q: "What if I miss a session or fall behind?",
    a: "All sessions are recorded and available for replay. Starter gets 30-day replay access, Pro gets 90-day, and Elite gets lifetime access. We also have a supportive Discord community where you can ask questions anytime.",
  },
];

function FAQItem({ item, index }: { item: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div
      id={`faq-${index + 1}`}
      style={{
        background: open ? "rgba(255,255,255,0.07)" : "rgba(255,255,255,0.04)",
        backdropFilter: "blur(16px)",
        border: open ? "1px solid rgba(108,99,255,0.3)" : "1px solid rgba(255,255,255,0.07)",
        borderRadius: "16px",
        overflow: "hidden",
        transition: "all 0.3s ease",
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "16px",
          padding: "22px 28px",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
        }}
      >
        <span style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 600,
          fontSize: "16px",
          color: open ? "#fff" : "#CBD5E1",
          lineHeight: 1.4,
          flex: 1,
          transition: "color 0.3s ease",
        }}>
          {item.q}
        </span>
        <div style={{
          width: "30px",
          height: "30px",
          borderRadius: "50%",
          background: open ? "rgba(108,99,255,0.2)" : "rgba(255,255,255,0.05)",
          border: "1px solid",
          borderColor: open ? "rgba(108,99,255,0.4)" : "rgba(255,255,255,0.1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          transition: "all 0.3s ease",
        }}>
          <span style={{
            fontSize: "18px",
            color: open ? "#6C63FF" : "#94A3B8",
            lineHeight: 1,
            display: "block",
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
            transition: "transform 0.3s ease, color 0.3s ease",
            fontWeight: 300,
          }}>
            +
          </span>
        </div>
      </button>

      {/* Animated content */}
      <div
        ref={contentRef}
        style={{
          maxHeight: open ? "300px" : "0px",
          overflow: "hidden",
          transition: "max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <div style={{ padding: "0 28px 24px 28px" }}>
          <div style={{
            height: "1px",
            background: "rgba(255,255,255,0.06)",
            marginBottom: "20px",
          }} />
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "15px",
            color: "#94A3B8",
            lineHeight: 1.7,
          }}>
            {item.a}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
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
      id="faq"
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
            Got Questions?
          </p>
          <h2 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(36px, 4.5vw, 60px)",
            fontWeight: 700,
            color: "#fff",
            letterSpacing: "-0.02em",
          }}>
            Frequently Asked
          </h2>
        </div>

        {/* FAQ items */}
        <div
          style={{
            maxWidth: "780px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          {faqs.map((item, i) => (
            <FAQItem key={i} item={item} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{
          textAlign: "center",
          marginTop: "60px",
          fontFamily: "'Inter', sans-serif",
          color: "#94A3B8",
          fontSize: "16px",
        }}>
          Still have questions?{" "}
          <a
            href="mailto:hello@contextcraft.ai"
            style={{ color: "#6C63FF", textDecoration: "none", fontWeight: 500 }}
            onMouseEnter={e => (e.currentTarget.style.color = "#00D1FF")}
            onMouseLeave={e => (e.currentTarget.style.color = "#6C63FF")}
          >
            Contact us →
          </a>
        </div>
      </div>
    </section>
  );
}
