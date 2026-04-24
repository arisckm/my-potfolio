"use client";
import { motion } from "framer-motion";

const techStack = [
  { name: "Python", icon: "🐍" },
  { name: "TensorFlow", icon: "🧠" },
  { name: "SQL", icon: "🗄️" },
  { name: "Oracle", icon: "🛡️" },
  { name: "NLP", icon: "💬" },
  { name: "Scikit-Learn", icon: "📊" },
  { name: "Flask", icon: "🧪" },
  { name: "Git", icon: "🌿" },
];

export default function Home() {
  return (
    <main style={{ 
      height: '100vh', 
      overflowY: 'scroll', 
      scrollSnapType: 'y mandatory', 
      scrollBehavior: 'smooth', 
      backgroundColor: '#0B0F1A', 
      color: '#FFFFFF',
      fontFamily: 'Inter, sans-serif'
    }}>
      
      {/* --- FLOATING GLASS NAVBAR --- */}
      <nav style={{
        position: 'fixed',
        top: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '90%',
        maxWidth: '1200px',
        zIndex: 100,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0.75rem 2rem',
        borderRadius: '16px',
        background: 'rgba(15, 23, 42, 0.7)', 
        backdropFilter: 'blur(12px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
      }}>
        <motion.div 
          whileHover={{ scale: 1.05 }}
          style={{ fontWeight: '900', fontSize: '1.2rem', background: "linear-gradient(90deg, #6366F1, #22C55E)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", cursor: 'pointer' }}
        >
          arisha.dev
        </motion.div>

        <div style={{ display: 'flex', gap: '2rem' }}>
          {['Home', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              style={{ color: '#94A3B8', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '500', transition: '0.3s' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#6366F1'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#94A3B8'}
            >
              {item}
            </a>
          ))}
        </div>

        <motion.a 
          whileHover={{ scale: 1.05 }}
          href="https://www.linkedin.com/in/arisha-manzoor-14b494311/"
          target="_blank"
          style={{ padding: '0.5rem 1rem', borderRadius: '8px', background: '#6366F1', color: 'white', textDecoration: 'none', fontSize: '0.8rem', fontWeight: 'bold' }}
        >
          LinkedIn
        </motion.a>
      </nav>
      
     {/* --- SECTION 1: HERO (The "Wow" Factor) --- */}
      <section id="home" style={{ 
        height: '100vh', width: '100%', display: 'flex', flexDirection: 'column', 
        justifyContent: 'center', alignItems: 'center', scrollSnapAlign: 'start', 
        padding: '0 2rem', textAlign: 'center', position: 'relative', overflow: 'hidden'
      }}>
        {/* Background Glow */}
        <div style={{ position: 'absolute', width: '40vw', height: '40vw', background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)', top: '10%', left: '10%', zIndex: 0 }} />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          whileInView={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.8 }}
          style={{ zIndex: 1 }}
        >
          <motion.span 
            initial={{ letterSpacing: "0.1em" }}
            animate={{ letterSpacing: "0.4em" }}
            style={{ fontSize: '0.9rem', color: '#6366F1', fontWeight: 'bold' }}>
            ARISHA MANZOOR • AI/ML 
          </motion.span>

          <h1 style={{ fontSize: 'clamp(3rem, 10vw, 6rem)', fontWeight: '900', margin: '1.5rem 0', lineHeight: '1.1' }}>
            Building <br /> 
            <span style={{ 
              background: "linear-gradient(90deg, #6366F1, #22C55E)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}>
              Intelligent Systems
            </span>
          </h1>

          <p style={{ fontSize: '1.2rem', color: '#94A3B8', maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' }}>
            6th Semester CS Student at LCWU. Specializing in transforming complex data into scalable AI solutions.
          </p>

          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', marginTop: '3rem' }}>
            {/* Navigates to Technical Proof Section */}
            <a href="#projects" style={{ textDecoration: 'none' }}>
              <motion.button 
                whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(99,102,241,0.4)" }}
                style={{ backgroundColor: '#6366F1', color: '#FFF', padding: '1rem 2rem', borderRadius: '12px', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}>
                View Projects
              </motion.button>
            </a>

            {/* Triggers CV Download - Ensure file is in /public folder */}
            <a href="/Arisha-Manzoor-CV.docx" download="Arisha-Manzoor-CV.docx" style={{ textDecoration: 'none' }}>
              <motion.button 
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.05)' }}
                style={{ backgroundColor: 'transparent', color: '#FFF', padding: '1rem 2rem', borderRadius: '12px', border: '1px solid #334155', fontWeight: 'bold', cursor: 'pointer' }}>
                Download CV
              </motion.button>
            </a>
          </div>
        </motion.div>
      </section>

     {/* --- SECTION 2: TECH STACK --- */}
      <section id="skills" style={{ 
        height: '60vh', // Increased height to accommodate text
        width: '100%', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center',
        scrollSnapAlign: 'center', 
        overflow: 'hidden', 
        backgroundColor: '#0F172A',
        position: 'relative'
      }}>
        {/* --- Added Text Description --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '4rem', padding: '0 2rem' }}
        >
          <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>Technical Toolkit</h2>
          <p style={{ color: '#94A3B8', fontSize: '1.1rem', maxWidth: '700px', lineHeight: '1.6' }}>
            Leveraging modern frameworks and data-driven technologies to build scalable AI solutions. 
            My expertise spans from **Deep Learning** with TensorFlow to robust **Backend Systems** using Python and SQL.
          </p>
        </motion.div>

        {/* --- Animated Marquee --- */}
        <div style={{ width: '100%', overflow: 'hidden', whiteSpace: 'nowrap' }}>
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 25, repeat: Infinity }}
            style={{ display: 'flex', gap: '5rem', width: 'fit-content', alignItems: 'center' }}
          >
            {[...techStack, ...techStack].map((tech, index) => (
              <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '1rem', opacity: 0.8 }}>
                <div style={{ fontSize: '2.5rem' }}>{tech.icon}</div>
                <span style={{ fontSize: '1.8rem', fontWeight: '800', color: '#334155', letterSpacing: '-0.02em' }}>
                  {tech.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- SECTION 3: TECHNICAL PROOF (Projects) --- */}
      <section id="projects" style={{ 
        minHeight: '100vh', 
        width: '100%', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        scrollSnapAlign: 'start', 
        padding: '8rem 2rem' 
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            style={{ marginBottom: '4rem' }}
          >
            <h3 style={{ fontSize: '3rem', fontWeight: '900', marginBottom: '1rem' }}>Technical Proof</h3>
            <p style={{ color: '#94A3B8', fontSize: '1.1rem', maxWidth: '600px' }}>
              Showcasing end-to-end Machine Learning pipelines and rule-based AI systems developed through professional simulations and internships.
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2.5rem' }}>
            
            <ProjectCard 
              gradient="linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)"
              title="Financial GenAI Chatbot" 
              tags="PYTHON • PANDAS • BCG X"
              desc="Built a rule-based AI chatbot to automate query responses from 10-K filings. Integrated YoY growth and CAGR calculation logic to analyze financial trends for Microsoft, Tesla, and Apple." 
            />

            <ProjectCard 
              gradient="linear-gradient(135deg, #22C55E 0%, #16A34A 100%)"
              title="MNIST & Sentiment Logic" 
              tags="SCIKIT-LEARN • TENSORFLOW"
              desc="Developed high-accuracy classification models including IMDB Sentiment Analysis (~85%) and MNIST Digit Recognition. Streamlined data preprocessing and TF-IDF vectorization pipelines." 
            />

            <ProjectCard 
              gradient="linear-gradient(135deg, #F59E0B 0%, #D97706 100%)"
              title="ML Deployment Pipeline" 
              tags="FLASK • MODEL OPTIMIZATION"
              desc="Engineered end-to-end deployment for house price prediction and spam detection models. Leveraged Flask to bridge the gap between complex ML logic and interactive user interfaces." 
            />

          </div>
        </div>
      </section>
    {/* --- SECTION 4: EXPERIENCE (The Journey) --- */}
      <section id="experience" style={{ 
        minHeight: '100vh', 
        width: '100%', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        scrollSnapAlign: 'start', 
        padding: '8rem 2rem', 
        backgroundColor: '#0F172A'
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', width: '100%' }}>
          <motion.h3 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            style={{ fontSize: '3rem', fontWeight: '900', marginBottom: '4rem', letterSpacing: '-0.02em' }}
          >
            Professional Evolution
          </motion.h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <TimelineItem 
              date="Oct 2023 — Apr 2027" 
              title="BS Computer Science" 
              subtitle="Lahore College for Women University (LCWU)" 
              desc="Building a core foundation in full-stack development and Artificial Intelligence. Focus on bridging complex backend logic with user-centric AI applications."
            />
            <TimelineItem 
              date="Nov 2025" 
              title="Data Analytics Simulation" 
              subtitle="BCG X (via Forage)" 
              desc="Engineered a rule-based AI chatbot for financial queries. Extracted and analyzed key 10-K filing data for major tech firms (Microsoft, Tesla) using Python and Pandas."
            />
            <TimelineItem 
              date="Jun 2025 — Sep 2025" 
              title="Machine Learning Intern" 
              subtitle="Arch Technologies" 
              desc="Developed end-to-end ML solutions including MNIST Digit Recognition and Iris Classification. Focused on data preprocessing, model optimization, and Flask deployment."
            />
             <TimelineItem 
              date="Sep 2025" 
              title="Job Simulation" 
              subtitle="Deloitte Australia" 
              desc="Engaged in data analytics tasks to simulate real-world consultancy environments and data-driven decision making."
            />
          </div>
        </div>
      </section>
{/* --- SECTION 5: CONTACT --- */}
      <section id="contact" style={{ 
        height: '100vh', width: '100%', display: 'flex', flexDirection: 'column', 
        justifyContent: 'center', alignItems: 'center', scrollSnapAlign: 'start', textAlign: 'center',
        padding: '0 2rem'
      }}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          style={{ maxWidth: '600px' }}
        >
          <h3 style={{ fontSize: 'clamp(2.5rem, 8vw, 4rem)', fontWeight: '900', marginBottom: '1.5rem' }}>Ready to Innovate?</h3>
          <p style={{ color: '#94A3B8', fontSize: '1.2rem', marginBottom: '3rem', lineHeight: '1.6' }}>
            Looking for AI/ML opportunities and collaborations. Let's transform your data into intelligent solutions.
          </p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center' }}>
            {/* Main WhatsApp Contact Card with Icon */}
            <a 
              href="https://wa.me/923226375679" 
              target="_blank" 
              style={{ 
                display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(34, 197, 94, 0.1)', 
                padding: '1rem 2.5rem', borderRadius: '16px', border: '1px solid #22C55E', 
                color: '#22C55E', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.1rem' 
              }}
            >
              {/* WhatsApp SVG Icon for professional look */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.705 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span>WhatsApp: 0322 6375679</span>
            </a>

            <a href="https://www.linkedin.com/in/arisha-manzoor-14b494311/" target="_blank" style={{ color: '#6366F1', fontSize: '1.2rem', textDecoration: 'none', fontWeight: 'bold', borderBottom: '2px solid #6366F1', paddingBottom: '5px' }}>
              Connect on LinkedIn →
            </a>
          </div>
        </motion.div>
      </section>

     {/* --- FLOATING WHATSAPP BUTTON --- */}
      <motion.a
        href="https://wa.me/923226375679"
        target="_blank"
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        style={{
          position: 'fixed', bottom: '30px', right: '30px', width: '60px', height: '60px',
          backgroundColor: '#25D366', borderRadius: '50%', display: 'flex', justifyContent: 'center',
          alignItems: 'center', boxShadow: '0 10px 25px rgba(0,0,0,0.4)', zIndex: 1000,
          color: 'white'
        }}
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.705 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </motion.a>
    </main>
  );
}

// --- SUB-COMPONENTS (Outside the Home function) ---

function ProjectCard({ title, desc, gradient, tags }: { title: string, desc: string, gradient: string, tags?: string }) {
  return (
    <motion.div 
      whileHover={{ y: -15, rotateX: 2, rotateY: -2, boxShadow: "0px 25px 50px rgba(0,0,0,0.3)" }}
      style={{ 
        background: '#1E293B', padding: '2.5rem', borderRadius: '24px', border: '1px solid #334155', 
        position: 'relative', overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column' 
      }}
    >
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', background: gradient }} />
      {tags && <code style={{ fontSize: '0.7rem', color: '#6366F1', fontWeight: 'bold', letterSpacing: '0.1em', marginBottom: '1rem', display: 'block' }}>{tags}</code>}
      <h4 style={{ fontSize: '1.6rem', marginBottom: '1rem', fontWeight: '800' }}>{title}</h4>
      <p style={{ color: '#94A3B8', lineHeight: '1.7', fontSize: '0.95rem' }}>{desc}</p>
    </motion.div>
  );
}

function TimelineItem({ date, title, subtitle, desc }: { date: string, title: string, subtitle: string, desc: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      style={{ paddingLeft: '2.5rem', borderLeft: '2px solid #334155', position: 'relative', marginBottom: '4rem' }}
    >
      <div style={{ width: '14px', height: '14px', borderRadius: '50%', background: '#6366F1', position: 'absolute', left: '-8px', top: '6px', border: '3px solid #0B0F1A' }} />
      <span style={{ color: '#6366F1', fontWeight: 'bold', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{date}</span>
      <h4 style={{ fontSize: '1.5rem', margin: '0.5rem 0', fontWeight: '700' }}>{title}</h4>
      <p style={{ color: '#FFFFFF', fontSize: '1rem', fontWeight: '600', marginBottom: '0.5rem' }}>{subtitle}</p>
      <p style={{ color: '#94A3B8', fontSize: '0.95rem', lineHeight: '1.6', maxWidth: '700px' }}>{desc}</p>
    </motion.div>
  );
}