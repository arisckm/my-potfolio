"use client";

import React, { CSSProperties } from "react";
import { motion } from "framer-motion";

// --- TYPESCRIPT INTERFACES (Fixes the "implicitly has any type" errors) ---
interface ProjectProps {
  title: string;
  tags: string;
  desc: string;
}

interface TimelineProps {
  year: string;
  company: string;
  role: string;
}

export default function Home() {
  return (
    <div style={{ 
      fontFamily: "'Inter', sans-serif", 
      background: "#0B0F1A", 
      color: "#F8FAFC"
    }}>
      <style>{`
        html { scroll-behavior: smooth; }
        a { text-decoration: none; transition: 0.2s; color: inherit; }
        button { border: none; cursor: pointer; transition: 0.2s; }
        .nav-link:hover { color: #38BDF8; }
      `}</style>

      {/* --- NAVBAR --- */}
      <nav style={navStyle}>
        <div style={logoStyle}>arisha.dev</div>
        <div style={navLinks}>
          {["Home", "About", "Projects", "Experience"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="nav-link" style={linkStyle}>
              {item}
            </a>
          ))}
        </div>
        <a href="mailto:arishamanzoor31@gmail.com" style={ctaButtonNav}>Contact</a>
      </nav>

      {/* --- HERO --- */}
      <section id="home" style={heroSection}>
        <motion.div 
          initial={{ opacity: 0, y: 15 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 style={heroTitle}>
            HI<br />
            I'M <span style={{ color: "#38BDF8" }}>ARISHA MANZOOR</span>
          </h1>
          <p style={heroDesc}>
            BS Computer Science student at LCWU. Specialized in Machine Learning pipelines and Backend development.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
            <button style={primaryBtn} onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
              View Projects
            </button>
            <a 
              href="/resume.docx" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={secondaryBtn}
            >
              Download CV
            </a>
          </div>
        </motion.div>
      </section>

      {/* --- ABOUT --- */}
      <section id="about" style={sectionAlt}>
        <div style={container}>
          <h2 style={sectionTitle}>About</h2>
          <div style={aboutGrid}>
            <div style={{ color: "#94A3B8", lineHeight: "1.8", fontSize: "1rem" }}>
              <p>I build systems that transform raw data into actionable insights. With a foundation in <strong>Python and SQL</strong>, I focus on the technical architecture behind AI, from data cleaning to model deployment.</p>
              <p>I was a Machine Learning Intern at Arch Technologies, where I bridge the gap between complex algorithms and functional APIs. And now I'm focusing on software development and getting hands-on experience in it.</p>
            </div>
            <div style={statsBox}>
              <div style={statItem}><span style={statNum}>2027</span><span style={statLabel}>Graduation</span></div>
              <div style={statItem}><span style={statNum}>3+</span><span style={statLabel}>ML Certs</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PROJECTS --- */}
      <section id="projects" style={section}>
        <div style={container}>
          <h2 style={sectionTitle}>Projects</h2>
          <div style={grid}>
            <ProjectCard 
              title="Financial GenAI Chatbot"
              tags="NLP • PANDAS"
              desc="Rule-based AI for 10-K filing analysis. Automated YoY and CAGR calculations for financial decision making."
            />
            <ProjectCard 
              title="ML Deployment Pipeline"
              tags="FLASK • SCIKIT-LEARN"
              desc="End-to-end pipeline for house price prediction and spam detection, deployed via REST APIs."
            />
            <ProjectCard 
              title="Computer Vision Models"
              tags="TENSORFLOW"
              desc="Classification models for MNIST digit recognition and sentiment analysis with ~95% accuracy."
            />
          </div>
        </div>
      </section>

      {/* --- EXPERIENCE --- */}
      <section id="experience" style={sectionAlt}>
        <div style={container}>
          <h2 style={sectionTitle}>Experience</h2>
          <div style={timeline}>
            <TimelineItem year="2025" company="Arch Technologies" role="ML Intern" />
            <TimelineItem year="2025" company="BCG X" role="Data Simulation" />
            <TimelineItem year="2023-Present" company="LCWU" role="BS Computer Science" />
          </div>
        </div>
      </section>

      {/* --- CONTACT --- */}
      <section id="contact" style={sectionCenter}>
        <h2 style={{ fontSize: "2rem", fontWeight: "800", marginBottom: "1rem" }}>Let's Work Together</h2>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", marginTop: "2rem" }}>
          <a href="mailto:arishamanzoor31@gmail.com" style={ctaButtonNav}>Contact Me</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={secondaryBtn}>LinkedIn</a>
        </div>
      </section>
    </div>
  );
}

/* --- COMPONENTS (Typed & Animated) --- */

function ProjectCard({ title, tags, desc }: ProjectProps) {
  return (
    <motion.div 
      style={card}
      whileHover={{ y: -5, borderColor: "#38BDF8" }} // Lifts up on hover
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }} // Animates when you scroll to it
      viewport={{ once: true }}
    >
      <span style={{ color: "#38BDF8", fontSize: "0.7rem", fontWeight: "bold" }}>{tags}</span>
      <h3 style={{ margin: "0.5rem 0", fontSize: "1.2rem" }}>{title}</h3>
      <p style={{ color: "#94A3B8", fontSize: "0.9rem", lineHeight: "1.5" }}>{desc}</p>
    </motion.div>
  );
}

function TimelineItem({ year, company, role }: TimelineProps) {
  return (
    <motion.div 
      style={{ marginBottom: "1.5rem", borderLeft: "2px solid #1E293B", paddingLeft: "1rem" }}
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    >
      <div style={{ color: "#38BDF8", fontSize: "0.8rem", fontWeight: "bold" }}>{year}</div>
      <div style={{ fontWeight: "700" }}>{role}</div>
      <div style={{ color: "#94A3B8", fontSize: "0.9rem" }}>{company}</div>
    </motion.div>
  );
}
/* --- STYLES (Casted to CSSProperties to fix Type Errors) --- */

const container: CSSProperties = { maxWidth: "1000px", margin: "0 auto" };

const navStyle: CSSProperties = {
  position: "fixed", top: 20, left: "50%", transform: "translateX(-50%)",
  width: "90%", maxWidth: "900px", display: "flex", justifyContent: "space-between",
  alignItems: "center", padding: "0.6rem 1.5rem", borderRadius: "12px",
  background: "rgba(15, 23, 42, 0.9)", backdropFilter: "blur(8px)",
  border: "1px solid rgba(255, 255, 255, 0.1)", zIndex: 1000
};

const navLinks: CSSProperties = { display: "flex", gap: "1.5rem", alignItems: "center" };
const linkStyle: CSSProperties = { fontSize: "0.8rem", fontWeight: "500", color: "#94A3B8" };
const logoStyle: CSSProperties = { fontWeight: "800", fontSize: "1rem" };
const ctaButtonNav: CSSProperties = { fontSize: "0.8rem", fontWeight: "500", color: "#38BDF8", border: "1px solid #38BDF8", padding: "0.3rem 0.8rem", borderRadius: "6px" };

const heroSection: CSSProperties = { padding: "10rem 1rem 6rem", textAlign: "center" };
const heroTitle: CSSProperties = { fontSize: "clamp(1.8rem, 5vw, 3rem)", fontWeight: "900", lineHeight: "1.1" };
const heroDesc: CSSProperties = { color: "#94A3B8", margin: "1rem auto 2rem", maxWidth: "450px", fontSize: "1rem" };

const section: CSSProperties = { padding: "4rem 1.5rem" };
const sectionAlt: CSSProperties = { ...section, background: "#0F172A" };
const sectionCenter: CSSProperties = { ...section, textAlign: "center" };

const sectionTitle: CSSProperties = { fontSize: "1.5rem", fontWeight: "800", marginBottom: "2rem", textTransform: "uppercase", letterSpacing: "1px" };

const aboutGrid: CSSProperties = { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" };
const statsBox: CSSProperties = { display: "flex", gap: "2rem", background: "#1E293B", padding: "1.5rem", borderRadius: "12px", alignSelf: "start" };
const statItem: CSSProperties = { display: "flex", flexDirection: "column" };
const statNum: CSSProperties = { color: "#38BDF8", fontSize: "1.4rem", fontWeight: "800" };
const statLabel: CSSProperties = { color: "#64748B", fontSize: "0.7rem", fontWeight: "600", textTransform: "uppercase" };

const grid: CSSProperties = { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" };
const card: CSSProperties = { background: "#1E293B", padding: "1.5rem", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.03)" };
const timeline: CSSProperties = { display: "flex", flexDirection: "column" };

const primaryBtn: CSSProperties = { background: "#38BDF8", padding: "0.6rem 1.5rem", borderRadius: "6px", color: "#0F172A", fontWeight: "700", fontSize: "0.9rem" };
const secondaryBtn: CSSProperties = { border: "1px solid #334155", padding: "0.6rem 1.5rem", borderRadius: "6px", color: "#fff", fontSize: "0.9rem", display: "inline-block" };