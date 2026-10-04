import { useEffect, useState, type ReactNode } from "react";

type IconName =
  | "arrow"
  | "github"
  | "linkedin"
  | "menu"
  | "close"
  | "external"
  | "mail"
  | "code"
  | "database"
  | "layout"
  | "terminal";

const Icon = ({ name, size = 18 }: { name: IconName; size?: number }) => {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  const paths: Record<IconName, ReactNode> = {
    arrow: (
      <>
        <path d="M5 12h13" />
        <path d="m13 6 6 6-6 6" />
      </>
    ),
    github: (
      <>
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7A5.5 5.5 0 0 0 19.3 4 5.1 5.1 0 0 0 19.2.8S18 0.4 15 2.4a13.4 13.4 0 0 0-7 0C5 0.4 3.8.8 3.8.8A5.1 5.1 0 0 0 3.7 4 5.5 5.5 0 0 0 2.2 7.5c0 5.4 3.5 6.6 6.8 7A4.8 4.8 0 0 0 8 18v4" />
        <path d="M8 19c-3 .9-3-1.5-4.2-1.8" />
      </>
    ),
    linkedin: (
      <>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-13h4v2" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </>
    ),
    menu: (
      <>
        <path d="M4 6h16" />
        <path d="M4 12h16" />
        <path d="M4 18h16" />
      </>
    ),
    close: (
      <>
        <path d="m6 6 12 12" />
        <path d="m18 6-12 12" />
      </>
    ),
    external: (
      <>
        <path d="M14 3h7v7" />
        <path d="M10 14 21 3" />
        <path d="M21 14v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h6" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
    code: (
      <>
        <path d="m8 9-4 3 4 3" />
        <path d="m16 9 4 3-4 3" />
        <path d="m14 5-4 14" />
      </>
    ),
    database: (
      <>
        <ellipse cx="12" cy="5" rx="8" ry="3" />
        <path d="M4 5v7c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
        <path d="M4 12v7c0 1.7 3.6 3 8 3s8-1.3 8-3v-7" />
      </>
    ),
    layout: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18" />
        <path d="M9 21V9" />
      </>
    ),
    terminal: (
      <>
        <path d="m4 17 6-5-6-5" />
        <path d="M12 19h8" />
      </>
    ),
  };
  return (
    <svg {...common} aria-hidden="true">
      {paths[name]}
    </svg>
  );
};

const techGroups = [
  {
    title: "Languages",
    icon: "code" as IconName,
    items: ["Go", "TypeScript", "JavaScript", "Python", "Java", "C"],
  },
  {
    title: "Frontend",
    icon: "layout" as IconName,
    items: ["React", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    title: "Backend",
    icon: "terminal" as IconName,
    items: ["Go", "Node.js", "Express", "GraphQL", "REST APIs", "Django / DRF"],
  },
  {
    title: "Data",
    icon: "database" as IconName,
    items: ["PostgreSQL", "MySQL", "MongoDB"],
  },
];

const projects = [
  {
    number: "01",
    name: "Numventory",
    label: "PERSONAL PROJECT",
    description:
      "A lightweight inventory management system built around receiving, inventory, production, shipping, and waste workflows.",
    details:
      "I am building the web application with a React and TypeScript frontend, a Go backend, GraphQL, and PostgreSQL. The project is designed around practical inventory flows rather than a simple CRUD interface.",
    tech: ["React", "TypeScript", "Go", "GraphQL", "PostgreSQL"],
    featured: true,
  },
  {
    number: "02",
    name: "Reverse Grading",
    label: "Professional Experience",
    description:
      "A problem-solving feature designed to make inventory corrections faster and more efficient.",
    details:
      "I worked on Reverse Grading at Mabel Systems to solve a time-consuming inventory workflow, allowing users to correct grading decisions without having to repeat the entire process.",
    tech: ["Go", "React", "TypeScript", "GraphQL", "PostgreSQL"],
    featured: false,
  },
  {
    number: "03",
    name: "BgRemover",
    label: "PERSONAL PROJECT",
    description:
      "A web application concept for removing image backgrounds through a simple upload and processing workflow.",
    details:
      "The project uses a frontend with separate application and AI service layers, with a focus on keeping the image-processing workflow straightforward for the user.",
    tech: ["Next.js", "Express", "AI"],
    featured: false,
  },
  {
    number: "04",
    name: "VocalCalc",
    label: "Personal Project",
    description:
      "A voice-enabled calculator that allows users to perform calculations using natural speech.",
    details:
      "I built VocalCalc to explore voice input and make basic calculations more accessible through a simple, hands-free interface.",
    tech: ["JavaScript", "Web Speech API", "HTML", "CSS"],
    featured: false,
  },
];

const experience = [
  {
    date: "SEP 2025 — SEP 2026",
    role: "Junior Software Developer Co-op",
    company: "Mabel Systems",
    text: "Worked on production software across web and tablet applications, with work spanning frontend, backend, APIs, databases, and operational workflows.",
    bullets: [
      "Built and debugged features across React and TypeScript applications.",
      "Implemented and updated GraphQL resolvers and schemas for inventory and operational workflows.",
      "Worked with Go and PostgreSQL while investigating application and database issues.",
      "Worked with SQL, migrations, and data models while debugging production issues.",
    ],
    tech: ["Go", "React", "TypeScript", "GraphQL", "PostgreSQL"],
  },
  {
    date: "SEP 2025 — APR 2026",
    role: "Full Stack Developer (Co-op / Part-Time)",
    company: "Colibri Software",
    text: "Built responsive, map-based web applications while working across frontend development, REST APIs, data management, and user experience improvements.",
    bullets: [
      "Built responsive web applications using Next.js, React, TypeScript, and Tailwind CSS for desktop and mobile users.",
      "Integrated and tested REST APIs to manage 500+ points of interest, categories, media, and user data.",
      "Implemented API operations and improved error handling and testing, reducing dynamic-content retrieval errors by 20%.",
      "Collaborated on UI/UX improvements and stakeholder feedback, contributing to a 15% increase in usability scores.",
    ],
    tech: ["TypeScript", "Next.js", "React", "Tailwind CSS", "REST APIs"],
  },
  {
    date: "2024 — PRESENT",
    role: "Teaching Assistant",
    company: "Acadia University",
    text: "Support students through assignment feedback, individual meetings, group conferences, and course-related questions.",
    bullets: [
      "Reviewed assignments and journals and provided constructive feedback.",
      "Held individual and group conferences to support student understanding.",
      "Tracked student progress and helped students improve their work.",
    ],
    tech: [],
  },
  {
    date: "2024 — PRESENT",
    role: "Resident Assistant",
    company: "Acadia University",
    text: "Support students in residence and help build a positive community while handling day-to-day residence responsibilities.",
    bullets: [
      "Supported and guided students living in residence.",
      "Helped build community through residence events and student engagement.",
      "Handled problem-solving, policy enforcement, and student concerns.",
    ],
    tech: [],
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = ["home", "work", "experience", "about", "contact"];
    const onScroll = () => {
      const current = sections.find((id) => {
        const element = document.getElementById(id);
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top <= 160 && rect.bottom >= 160;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="noise" />
      <header className="header">
        <a className="brand" href="#home" onClick={closeMenu}>
          S<span>.</span>
        </a>
        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <Icon name={menuOpen ? "close" : "menu"} />
        </button>
        <nav className={menuOpen ? "nav open" : "nav"}>
          {["work", "experience", "about", "contact"].map((item) => (
            <a
              key={item}
              className={activeSection === item ? "active" : ""}
              href={`#${item}`}
              onClick={closeMenu}
            >
              {item}
            </a>
          ))}
          <a
            className="nav-resume"
            href="/resume/RESUME.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Resume <Icon name="external" size={14} />
          </a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero section-pad">
          <div className="hero-grid">
            <div className="hero-copy reveal">
              <p className="eyebrow">
                <span className="status-dot" /> Available for full-time roles ·
                January 2027
              </p>
              <h1>
                Hi, I'm
                <br />
                <span>Shajjad.</span>
              </h1>
              <p className="hero-lead">
                I build software and responsive interfaces that solve practical
                problems.
              </p>
              <p className="hero-sub">
                Computer Science @ Acadia University · graduating December 2026
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#work">
                  View my work <Icon name="arrow" />
                </a>
                <a
                  className="button button-ghost"
                  href="https://github.com/shajjad810"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon name="github" /> GitHub
                </a>
              </div>
              <div className="socials">
                <a
                  href="https://www.linkedin.com/in/mohammadshajjad/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon name="linkedin" /> LinkedIn
                </a>
                <span>Nova Scotia, Canada</span>
              </div>
            </div>
            <div className="hero-visual reveal delay-1" aria-hidden="true">
              <div className="grid-lines" />
              <div className="terminal-card">
                <div className="terminal-top">
                  <span />
                  <span />
                  <span />
                  <small>shajjad.ts</small>
                </div>
                <div className="terminal-body">
                  <p>
                    <i>const</i> developer = {"{"}
                  </p>
                  <p className="indent">
                    <b>name:</b> <em>'Shajjad'</em>,
                  </p>
                  <p className="indent">
                    <b>focus:</b> <em>'software'</em>,
                  </p>
                  <p className="indent">
                    <b>stack:</b> [
                  </p>
                  <p className="indent2">
                    <em>'React'</em>, <em>'Go'</em>,
                  </p>
                  <p className="indent2">
                    <em>'TypeScript'</em>, <em>'Postgres'</em>
                  </p>
                  <p className="indent">],</p>
                  <p className="indent">
                    <b>status:</b> <em>'building'</em>
                  </p>
                  <p>{"}"}</p>
                  <span className="cursor" />
                </div>
              </div>
              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />
            </div>
          </div>
          <div className="scroll-cue">
            SCROLL <span />
          </div>
        </section>

        <section id="work" className="section-pad work-section">
          <div className="section-heading reveal">
            <div>
              <p className="eyebrow">01 / Selected work</p>
              <h2>Things I've built.</h2>
            </div>
            <p className="heading-note">
              A mix of production software, full-stack projects, and frontend
              work.
            </p>
          </div>
          <div className="projects">
            {projects.map((project) => (
              <article
                className={`project-card ${project.featured ? "featured" : ""} reveal`}
                key={project.name}
              >
                <div className="project-visual">
                  <span className="project-number">{project.number}</span>
                  {project.name === "Numventory" ? (
                    <div className="mock-dashboard">
                      <div className="mock-sidebar" />
                      <div className="mock-main">
                        <span />
                        <span />
                        <span />
                        <div className="mock-chart" />
                      </div>
                    </div>
                  ) : project.name === "BgRemover" ? (
                    <div className="mock-upload">
                      <div className="upload-circle">↑</div>
                      <b>Drop an image</b>
                      <small>PNG · JPG · WEBP</small>
                    </div>
                  ) : (
                    <div className="mock-store">
                      <div />
                      <div />
                      <div />
                    </div>
                  )}
                </div>
                <div className="project-content">
                  <p className="project-label">{project.label}</p>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <p className="project-detail">{project.details}</p>
                  <div className="tags">
                    {project.tech.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section-pad experience-section">
          <div className="section-heading reveal">
            <div>
              <p className="eyebrow">02 / Experience</p>
              <h2>Where I've worked.</h2>
            </div>
          </div>
          <div className="experience-list">
            {experience.map((item, index) => (
              <article
                className="experience-item reveal"
                key={`${item.company}-${item.role}`}
              >
                <div className="experience-date">{item.date}</div>
                <div className="experience-main">
                  <h3>{item.role}</h3>
                  <h4>{item.company}</h4>
                  <p>{item.text}</p>
                  <ul>
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                  {item.tech.length > 0 && (
                    <div className="tags">
                      {item.tech.map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </div>
                  )}
                </div>
                <span className="experience-index">0{index + 1}</span>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="section-pad about-section">
          <div className="about-grid">
            <div className="about-title reveal">
              <p className="eyebrow">03 / About</p>
              <h2>
                A little
                <br />
                <span>about me.</span>
              </h2>
            </div>
            <div className="about-copy reveal delay-1">
              <p className="large-copy">
                I'm finishing my Bachelor of Computer Science at Acadia
                University. I enjoy building software that solves practical
                problems, especially systems involving data, APIs, and
                real-world workflows.
              </p>
              <p>
                I've worked on production software using Go, React, TypeScript,
                GraphQL, and PostgreSQL, and I also build my own projects to
                explore full-stack development. I like working across the
                frontend and backend instead of staying in one layer.
              </p>
              <p>
                Outside of coding, I'm involved at Acadia as a Teaching
                Assistant and Resident Assistant.
              </p>
              <a
                className="text-link"
                href="/resume/RESUME.pdf"
                target="_blank"
                rel="noreferrer"
              >
                View my resume <Icon name="arrow" />
              </a>
            </div>
          </div>
          <div className="currently reveal">
            <div className="currently-label">
              <span className="status-dot" /> Currently
            </div>
            <div className="currently-grid">
              <div>
                <small>01</small>
                <p>Finishing my BSc in Computer Science.</p>
              </div>
              <div>
                <small>02</small>
                <p>Building Numventory as a full-stack project.</p>
              </div>
              <div>
                <small>03</small>
                <p>
                  Looking for full-time software roles starting January 2027.
                </p>
              </div>
              <div>
                <small>04</small>
                <p>Continuing my TA and RA work at Acadia.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-pad skills-section">
          <div className="section-heading reveal">
            <div>
              <p className="eyebrow">04 / Toolkit</p>
              <h2>What I work with.</h2>
            </div>
          </div>
          <div className="skills-grid">
            {techGroups.map((group) => (
              <div className="skill-group reveal" key={group.title}>
                <div className="skill-icon">
                  <Icon name={group.icon} />
                </div>
                <h3>{group.title}</h3>
                <div className="skill-list">
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="design-strip reveal">
            <div>
              <p className="eyebrow">Frontend + UI</p>
              <h3>
                I care about how the software feels, not just how it works.
              </h3>
            </div>
            <p>
              Responsive layouts, clear navigation, practical workflows, and
              interfaces that make complicated systems easier to use.
            </p>
          </div>
        </section>

        <section id="contact" className="contact-section section-pad">
          <div className="contact-inner reveal">
            <p className="eyebrow">05 / Contact</p>
            <h2>
              Let's build
              <br />
              <span>something useful.</span>
            </h2>
            <p className="contact-copy">
              I'm graduating in December 2026 and looking for full-time
              opportunities starting January 2027.
            </p>
            <div className="contact-actions">
              <a
                className="button button-primary"
                href="https://www.linkedin.com/in/mohammadshajjad/"
                target="_blank"
                rel="noreferrer"
              >
                Connect with me <Icon name="linkedin" />
              </a>
              {/* <a
                className="button button-ghost"
                href="https://www.linkedin.com/in/mohammadshajjad/"
                target="_blank"
                rel="noreferrer"
              >
                <Icon name="linkedin" /> LinkedIn
              </a> */}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>© {new Date().getFullYear()} Mohammad Shajjad Hossen</span>
        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  );
}

export default App;
