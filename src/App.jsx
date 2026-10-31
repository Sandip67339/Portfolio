import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  Github,
  Linkedin,
  Mail,
  Menu,
  Phone,
  ShieldCheck,
  Terminal,
  X,
} from "lucide-react";
import "./App.css";

const Motion = motion;

const skills = [
  {
    title: "Quality engineering",
    items: ["Manual testing", "Functional testing", "Regression testing", "Smoke testing", "UAT", "Exploratory testing"],
  },
  {
    title: "Automation & APIs",
    items: ["Playwright", "JavaScript", "TypeScript", "Postman", "REST API testing", "JMeter"],
  },
  {
    title: "Engineering toolkit",
    items: ["Test case design", "Jira", "SQL", "MySQL", "Git", "GitHub Actions"],
  },
  {
    title: "Ways of working",
    items: ["SDLC", "STLC", "Agile", "Scrum", "Bug tracking", "CI/CD"],
  },
];

const projects = [
  {
    number: "01",
    type: "AUTOMATION FRAMEWORK",
    title: "E-Commerce Test Automation Framework",
    description:
      "A maintainable end-to-end testing system covering the journeys that matter most: registration, product discovery, cart management, and checkout.",
    details: ["50+ automated test cases", "Page Object Model architecture", "GitHub Actions regression pipeline"],
    tech: "Playwright · JavaScript / TypeScript",
    accent: "lime",
  },
  {
    number: "02",
    type: "API QUALITY ENGINEERING",
    title: "REST API Test Automation Suite",
    description:
      "A comprehensive API quality suite for validating service behavior, contracts, database state, and failure handling across RESTful workflows.",
    details: ["Status and schema validation", "SQL database verification", "Playwright HTML reporting"],
    tech: "Playwright · TypeScript · Postman · SQL",
    accent: "violet",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.18 },
  transition: { duration: 0.65, ease: "easeOut" },
};

function SectionLabel({ number, eyebrow, aside }) {
  return (
    <div className="section-label">
      <span>{number} / {eyebrow}</span>
      <span>{aside}</span>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="site-shell">
      <div className="grain" aria-hidden="true" />
      <header className="site-header">
        <a className="wordmark" href="#top" onClick={closeMenu}>SANDIP<span>.</span></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="Main navigation">
          {[
            ["Work", "#work"],
            ["About", "#about"],
            ["Experience", "#experience"],
            ["Contact", "#contact"],
          ].map(([label, href]) => (
            <a key={href} href={href} onClick={closeMenu}>{label}</a>
          ))}
          <a className="nav-cta" href="mailto:sandipnyoupane45@gmail.com" onClick={closeMenu}>Let&apos;s talk <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <section id="top" className="hero section-wrap">
        <div className="hero-meta">
          <span>QA ENGINEER · AUTOMATION BUILDER</span>
          <span>BASED IN NEPAL · OPEN TO OPPORTUNITY</span>
        </div>
        <div className="hero-title-wrap">
          <div className="hero-orbit" aria-hidden="true">
            <span className="orbit-line orbit-line-one" />
            <span className="orbit-line orbit-line-two" />
            <span className="orbit-core"><ShieldCheck size={30} /></span>
          </div>
          <Motion.h1 initial={{ opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            Sandip<br /><em>Neupane</em>
          </Motion.h1>
        </div>
        <div className="hero-bottom">
          <div className="hero-intro">
            <span className="plus-mark">+</span>
            <span>01 / PRESENCE</span>
            <p>QUALITY<br />ENGINEERING<br />HUMAN-CENTERED PRODUCTS</p>
          </div>
          <div className="hero-copy">
            <p>Detail-oriented QA Engineer building confidence into every release through thoughtful testing, reliable automation, and clear communication.</p>
            <div className="hero-actions">
              <a className="button button-solid" href="#work">Explore my work <ArrowUpRight size={17} /></a>
              <a className="text-link" href="mailto:sandipnyoupane45@gmail.com">Start a conversation <span>↗</span></a>
            </div>
          </div>
        </div>
        <a className="scroll-cue" href="#about"><span>SCROLL TO DISCOVER</span><span className="scroll-line" /></a>
      </section>

      <section className="stats-strip section-wrap" aria-label="Career highlights">
        <div><strong>50+</strong><span>automated test cases<br />built for real user flows</span></div>
        <div><strong>2</strong><span>hands-on roles across<br />QA and frontend teams</span></div>
        <div><strong>2025</strong><span>B.Sc. CSIT graduate<br />from Tribhuvan University</span></div>
      </section>

      <section id="about" className="section-wrap split-section">
        <SectionLabel number="02" eyebrow="THE PERSON BEHIND THE WORK" aside="A CONNECTED PERSPECTIVE" />
        <Motion.div className="split-content" {...fadeUp}>
          <div className="section-display">Quality is<br /><em>a practice.</em></div>
          <div className="about-copy">
            <p className="lead">I care about the details people feel, even when they never notice them.</p>
            <p>My work sits at the intersection of software quality and product experience. From exploratory testing of AI applications to dependable Playwright frameworks, I turn ambiguous requirements into clear checks and useful feedback.</p>
            <div className="fact-list">
              <div><span>Currently</span><strong>QA Engineer · Msty AI</strong></div>
              <div><span>Education</span><strong>B.Sc. CSIT · Lumbini City College</strong></div>
              <div><span>Location</span><strong>Bhaktapur, Nepal</strong></div>
            </div>
          </div>
        </Motion.div>
      </section>

      <section id="work" className="work-section section-wrap">
        <SectionLabel number="03" eyebrow="SELECTED WORK" aside="BUILT. TESTED. PUT INTO THE WORLD." />
        <div className="section-heading">
          <h2>Ideas are a start.<br /><em>Confidence is the work.</em></h2>
          <p>Tools and systems designed to help teams ship with fewer surprises and better visibility.</p>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <Motion.article key={project.number} className={`project-card ${project.accent}`} {...fadeUp}>
              <div className="project-top"><span>{project.number}</span><span>{project.type}</span><Terminal size={20} /></div>
              <div className="project-art"><div className="terminal-window"><span /><span /><span /><code>{project.number === "01" ? "test.describe('checkout')" : "request.get('/users')"}</code><b>{project.number === "01" ? "✓ 50 tests passing" : "✓ response validated"}</b></div></div>
              <div className="project-body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul>{project.details.map((detail) => <li key={detail}><CheckCircle2 size={15} />{detail}</li>)}</ul>
                <div className="project-tech">{project.tech}</div>
              </div>
            </Motion.article>
          ))}
        </div>
      </section>

      <section id="experience" className="experience-section section-wrap">
        <SectionLabel number="04" eyebrow="CAREER PATH" aside="LEARNING IN PUBLIC" />
        <div className="section-heading compact"><h2>From building interfaces<br /><em>to protecting experiences.</em></h2></div>
        <div className="experience-list">
          <Motion.article {...fadeUp}><div className="experience-index">01</div><div className="experience-main"><div className="experience-title"><h3>QA Engineer</h3><span>Jul 2026 — Present</span></div><p className="company">Msty AI</p><p>Manual, functional, regression, exploratory, UI, and end-to-end testing of AI/LLM applications. I test APIs with Postman, create actionable test cases, verify fixes, and help releases move forward with confidence.</p><div className="experience-tags"><span>AI / LLM testing</span><span>API validation</span><span>Release quality</span></div></div></Motion.article>
          <Motion.article {...fadeUp} transition={{ delay: 0.1, duration: 0.65, ease: "easeOut" }}><div className="experience-index">02</div><div className="experience-main"><div className="experience-title"><h3>Frontend Development Intern</h3><span>Feb 2025 — May 2025</span></div><p className="company">Lunar IT Solution</p><p>Developed responsive interfaces with HTML, CSS, JavaScript, and ReactJS. Integrated backend APIs, performed API and regression testing, and collaborated in Agile sprint cycles with a focus on cross-browser quality.</p><div className="experience-tags"><span>ReactJS</span><span>REST APIs</span><span>Agile delivery</span></div></div></Motion.article>
        </div>
      </section>

      <section className="skills-section section-wrap">
        <SectionLabel number="05" eyebrow="HOW I WORK" aside="DEPTH MEETS PERSPECTIVE" />
        <div className="skills-intro"><h2>Curious by default.<br /><em>Precise by practice.</em></h2><p>Good testing asks better questions. These are the tools, techniques, and habits I bring to a team.</p></div>
        <div className="skills-grid">
          {skills.map((group, index) => <Motion.div className="skill-group" key={group.title} {...fadeUp} transition={{ delay: index * 0.06, duration: 0.6, ease: "easeOut" }}><span className="skill-number">0{index + 1}</span><h3>{group.title}</h3><div>{group.items.map((skill) => <span key={skill}>{skill}</span>)}</div></Motion.div>)}
        </div>
      </section>

      <section id="contact" className="contact-section section-wrap">
        <SectionLabel number="06" eyebrow="THE NEXT CHAPTER" aside="LET'S MAKE IT MATTER" />
        <div className="contact-content"><div><p className="contact-kicker">OPEN TO MEANINGFUL CONVERSATIONS</p><h2>Something great<br /><em>starts with a hello.</em></h2></div><div className="contact-aside"><p>Looking for a QA engineer who cares about the full product, not just the happy path? I&apos;d love to hear what you&apos;re building.</p><a className="button button-solid" href="mailto:sandipnyoupane45@gmail.com">Let&apos;s connect <ArrowUpRight size={17} /></a></div></div>
      </section>

      <footer className="site-footer section-wrap">
        <a className="wordmark" href="#top">SANDIP<span>.</span></a>
        <div className="footer-links"><a href="mailto:sandipnyoupane45@gmail.com"><Mail size={16} /> Email</a><a href="https://github.com/Sandip67339" target="_blank" rel="noreferrer"><Github size={16} /> GitHub</a><a href="https://www.linkedin.com/in/sandeep-neupane-8b6717381/" target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn</a><a href="tel:+9779867512635"><Phone size={16} /> +977 9867512635</a></div>
        <span className="footer-note">© {new Date().getFullYear()} Sandip Neupane · Built with intention.</span>
      </footer>
    </main>
  );
}

export default App;
