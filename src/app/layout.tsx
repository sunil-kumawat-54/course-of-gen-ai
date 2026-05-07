import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ContextCraft AI — Master GenAI & Context AI in 7 Days",
  description:
    "Join the ContextCraft AI 7-day bootcamp. Build real AI apps with memory, agents, RAG, multimodal AI, and automation. Trained by Er. Harshvardhan Purohit.",
  keywords: [
    "GenAI bootcamp",
    "Context AI",
    "RAG",
    "AI agents",
    "LangChain",
    "GPT-4o",
    "AI course",
    "ContextCraft AI",
  ],
  openGraph: {
    title: "ContextCraft AI — Master GenAI & Context AI in 7 Days",
    description:
      "Build real AI apps with memory, agents, RAG, multimodal AI, and automation in just 7 days.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
