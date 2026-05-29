import { motion, useScroll, useSpring } from 'framer-motion'
import './App.css'

const profile = {
  name: 'Abhinav G',
  title: 'Python Backend Developer',
  location: 'Bangalore, IN',
  email: 'dev.abhinavg@gmail.com',
  phone: '+91 7306588516',
  github: 'https://github.com/abhinavg04',
  linkedin: 'https://www.linkedin.com/in/abhinavg/',
  resume: '/resume/Abhinav_G_Resume.pdf',
  summary:
    'Backend engineer building Django, FastAPI, MySQL, and GenAI systems for real business operations. I like turning messy workflows into clean APIs, reliable data models, and AI-assisted tools people can actually use.'
}

const navItems = [
  ['Experience', '#experience'],
  ['Projects', '#projects'],
  ['Skills', '#skills'],
  ['Proof', '#proof'],
  ['Contact', '#contact']
]

const metrics = [
  { value: '2+', label: 'years building production systems' },
  { value: '3', label: 'major business platforms shipped' },
  { value: 'AI', label: 'LangChain, RAG, ReAct agents' }
]

const skillGroups = [
  {
    title: 'Backend',
    accent: 'cyan',
    skills: ['Python', 'Django', 'DRF', 'FastAPI', 'REST APIs', 'JWT auth']
  },
  {
    title: 'Data + AI',
    accent: 'violet',
    skills: ['MySQL', 'SQLite3', 'LangChain', 'LangGraph', 'RAG Systems', 'Agentic AI']
  },
  {
    title: 'Frontend',
    accent: 'amber',
    skills: ['React', 'JavaScript', 'HTML', 'CSS', 'Bootstrap', 'TailwindCSS']
  },
  {
    title: 'Delivery',
    accent: 'rose',
    skills: ['Docker', 'Git', 'GitHub', 'BitBucket', 'AWS', 'Redis', 'Pandas', 'Selenium']
  }
]

const experience = [
  {
    company: 'Alackrity Consols Pvt. Ltd',
    role: 'Junior Software Engineer',
    period: '07.2024 - Present',
    location: 'Bangalore',
    points: [
      'Developed and maintained scalable Django-based applications handling complex, multi-module business workflows.',
      'Designed high-performance MySQL schemas for large-scale transactional systems, improving query efficiency and data integrity.',
      'Built AI-powered features with LangChain to support intelligent querying and workflow automation across business modules.'
    ]
  }
]

const projects = [
  {
    title: 'Integrated Dairy Supply Chain Platform',
    stack: ['Django', 'React', 'LangChain', 'RAG'],
    image: '/images/bemul-factory.jpg',
    impact: 'AI-assisted operations layer for KMF-scale dairy workflows',
    points: [
      'Built a LangChain ReAct agent integrating MySQL and RAG pipelines for context-aware querying.',
      'Worked across Channel, Transporter, and Marketing modules aligned to real dairy supply-chain flows.',
      'Implemented pricing workflows for slabs, offers, channel payments, and crate management.'
    ]
  },
  {
    title: 'D-Care Milk Procurement Website',
    stack: ['FastAPI', 'REST API', 'MySQL'],
    image: '/images/dcare.png',
    impact: 'Production-grade backend for procurement and inventory visibility',
    points: [
      'Streamlined farmer onboarding, milk collection monitoring, and real-time inventory management.',
      'Implemented JWT authentication and role-based access control for multi-role users.',
      'Automated coordination-heavy supply-chain workflows to improve operational transparency.'
    ]
  },
  {
    title: 'Prepaid Auto Booking',
    stack: ['Django', 'MySQL', 'Bootstrap'],
    image: '/images/prepaidauto.png',
    impact: 'POS and booking system for multi-station BMRCL operations',
    points: [
      'Built booking and POS transaction management across metro station locations.',
      'Designed schemas for bookings, stations, shifts, POS devices, and employee operations.',
      'Created dashboards for station performance, transaction summaries, and analytics.'
    ]
  }
]

const education = {
  degree: 'B Tech in CSE',
  school: 'Government Engineering College, Thrissur',
  period: '07.2019 - 10.2023',
  grade: 'CGPA: 7.75',
  focus: 'Computer Science, Core Java, Database Management'
}

const certifications = [
  {
    title: 'IBM RAG and Agentic AI',
    issuer: 'Professional Certificate',
    detail: 'Covered LangChain, Retrieval-Augmented Generation, Agentic AI design patterns, and ReAct agent implementation.'
  },
  {
    title: 'Python Web Development Expert',
    issuer: 'National Council for Technology and Training',
    detail: 'Focused on dynamic web applications using Python, Django, and React.'
  }
]

const marqueeItems = [
  'Django systems',
  'FastAPI services',
  'MySQL optimization',
  'LangChain agents',
  'RAG pipelines',
  'React dashboards',
  'JWT auth',
  'Docker delivery'
]

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] }
}

function App() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 28, restDelta: 0.001 })

  return (
    <div className="min-h-screen bg-[#f5f1e8] text-[#151514]">
      <motion.div className="fixed left-0 right-0 top-0 z-[80] h-1 origin-left bg-[#14b8a6]" style={{ scaleX }} />
      <SiteNav />
      <main>
        <Hero />
        <CapabilityStrip />
        <Experience />
        <Projects />
        <Skills />
        <Proof />
        <Contact />
      </main>
    </div>
  )
}

function SiteNav() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed left-0 right-0 top-4 z-50 px-4"
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-black/10 bg-white/78 px-3 py-2 shadow-[0_18px_60px_rgba(20,20,20,0.12)] backdrop-blur-xl">
        <a href="#" className="flex items-center gap-3 rounded-full px-2 py-1.5">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-[#151514] text-sm font-black text-white">AG</span>
          <span className="hidden text-sm font-bold tracking-tight sm:block">Abhinav G</span>
        </a>
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map(([label, href]) => (
            <a key={href} href={href} className="rounded-full px-4 py-2 text-sm font-semibold text-black/62 transition hover:bg-black hover:text-white">
              {label}
            </a>
          ))}
        </div>
        <a href={profile.resume} download className="rounded-full bg-[#151514] px-4 py-2 text-sm font-bold text-white shadow-lg shadow-black/15 transition hover:bg-[#0f766e]">
          Resume
        </a>
      </nav>
    </motion.header>
  )
}

function Hero() {
  return (
    <section className="hero-grid relative min-h-screen overflow-hidden px-5 pb-16 pt-28 md:px-8 md:pt-32">
      <div className="absolute inset-0 noise-layer" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.04fr_0.96fr]">
        <motion.div initial={{ opacity: 0, y: 34 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}>
          <div className="mb-5 flex flex-wrap items-center gap-3">
            <span className="status-pill">
              <span className="pulse-dot" />
              Available for backend + GenAI roles
            </span>
            <span className="rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs font-bold uppercase tracking-[0.24em] text-black/55">{profile.location}</span>
          </div>

          <p className="mb-4 text-sm font-black uppercase tracking-[0.34em] text-[#0f766e]">{profile.title}</p>
          <h1 className="max-w-4xl text-6xl font-black leading-[0.88] tracking-tight text-[#151514] sm:text-7xl lg:text-8xl">
            {profile.name}
          </h1>
          <p className="mt-5 max-w-3xl text-4xl font-black leading-[0.98] tracking-tight text-[#151514] sm:text-5xl lg:text-6xl">
            Building backend systems with an AI edge.
          </p>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-black/68 md:text-xl">{profile.summary}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <MagneticLink href="#projects" variant="dark">View projects</MagneticLink>
            <MagneticLink href={`mailto:${profile.email}`} variant="light">Start a conversation</MagneticLink>
            <MagneticLink href={profile.resume} variant="ghost" download>Download PDF</MagneticLink>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 + index * 0.12, duration: 0.55 }}
                className="metric-tile"
              >
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0.18, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-[520px]"
        >
          <div className="portrait-shell">
            <div className="portrait-toolbar">
              <span />
              <span />
              <span />
              <p>profile.signal</p>
            </div>
            <div className="portrait-frame">
              <img src="/images/profile.jpg" alt="Abhinav G" />
            </div>
            <div className="floating-note note-top">
              <span>Current focus</span>
              <strong>Business workflow automation</strong>
            </div>
            <div className="floating-note note-bottom">
              <span>Core stack</span>
              <strong>Django / FastAPI / MySQL</strong>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function CapabilityStrip() {
  const doubled = [...marqueeItems, ...marqueeItems]
  return (
    <section className="overflow-hidden border-y border-black/10 bg-[#151514] py-5 text-white">
      <motion.div
        className="marquee-track flex w-max gap-3"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 22, ease: 'linear', repeat: Infinity }}
      >
        {doubled.map((item, index) => (
          <span key={`${item}-${index}`} className="mx-1 rounded-full border border-white/12 bg-white/8 px-5 py-2 text-sm font-bold uppercase tracking-[0.2em] text-white/80">
            {item}
          </span>
        ))}
      </motion.div>
    </section>
  )
}

function Experience() {
  return (
    <section id="experience" className="bg-[#151514] px-5 py-24 text-white md:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionIntro eyebrow="Experience" title="Production backend works" description="The latest resume points to a practical lane: complex business workflows, transactional data, and AI-assisted querying." dark />
        <div className="mt-12 grid gap-6 lg:grid-cols-[0.72fr_1.28fr]">
          <motion.div {...fadeUp} className="rounded-[8px] border border-white/10 bg-white/[0.04] p-7">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#5eead4]">Operating mode</p>
            <h3 className="mt-4 text-3xl font-black">Clean APIs. Reliable databases. Useful AI.</h3>
            <p className="mt-5 leading-7 text-white/62">
              I build around the boring parts that make software survive: schema clarity, query performance, permission boundaries, and dashboards that explain what is happening.
            </p>
          </motion.div>

          {experience.map((item) => (
            <motion.article key={item.company} {...fadeUp} className="timeline-card">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#fbbf24]">{item.period}</p>
                  <h3 className="mt-3 text-3xl font-black">{item.role}</h3>
                  <p className="mt-2 text-white/58">{item.company} - {item.location}</p>
                </div>
                <span className="rounded-full bg-[#5eead4] px-4 py-2 text-sm font-black text-[#073b37]">Present</span>
              </div>
              <div className="mt-8 grid gap-4">
                {item.points.map((point, index) => (
                  <motion.p
                    key={point}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08, duration: 0.45 }}
                    className="timeline-point"
                  >
                    {point}
                  </motion.p>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section id="projects" className="bg-[#f5f1e8] px-5 py-24 md:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionIntro eyebrow="Selected projects" title="My Projects" description="" />
        <div className="mt-12 grid gap-6">
          {projects.map((project, index) => (
            <motion.article key={project.title} {...fadeUp} className="project-row group">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="p-6 md:p-8">
                <div className="flex flex-wrap items-center gap-2">
                  {project.stack.map((tech) => (
                    <span key={tech} className="rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-black/56">
                      {tech}
                    </span>
                  ))}
                </div>
                <h3 className="mt-5 text-3xl font-black tracking-tight md:text-4xl">{project.title}</h3>
                <p className="mt-3 max-w-2xl text-lg font-semibold text-[#0f766e]">{project.impact}</p>
                <div className="mt-6 grid gap-3">
                  {project.points.map((point) => (
                    <p key={point} className="project-point">{point}</p>
                  ))}
                </div>
              </div>
              <div className="project-index">0{index + 1}</div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section id="skills" className="bg-white px-5 py-24 md:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionIntro eyebrow="Skills" title="My Skills" description="" />
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {skillGroups.map((group, index) => (
            <motion.article
              key={group.title}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: index * 0.05 }}
              className={`skill-panel accent-${group.accent}`}
            >
              <div className="flex items-center justify-between">
                <h3>{group.title}</h3>
                <span>{String(index + 1).padStart(2, '0')}</span>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <motion.span key={skill} whileHover={{ y: -3, scale: 1.03 }} className="skill-chip">
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Proof() {
  return (
    <section id="proof" className="bg-[#151514] px-5 py-24 text-white md:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionIntro eyebrow="Proof" title="Education and certificates that support the direction." description="" dark />
        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.2fr]">
          <motion.article {...fadeUp} className="proof-card">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#5eead4]">Education</p>
            <h3 className="mt-4 text-3xl font-black">{education.degree}</h3>
            <p className="mt-2 text-white/62">{education.school}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span>{education.grade}</span>
              <span>{education.period}</span>
            </div>
            <p className="mt-6 leading-7 text-white/66">{education.focus}</p>
          </motion.article>

          <div className="grid gap-4">
            {certifications.map((cert, index) => (
              <motion.article key={cert.title} {...fadeUp} transition={{ ...fadeUp.transition, delay: index * 0.08 }} className="proof-card cert-card">
                <div className="cert-badge">{index + 1}</div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#fbbf24]">{cert.issuer}</p>
                  <h3 className="mt-3 text-2xl font-black">{cert.title}</h3>
                  <p className="mt-3 leading-7 text-white/62">{cert.detail}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="contact-section px-5 py-24 md:px-8">
      <motion.div {...fadeUp} className="mx-auto max-w-6xl">
        <p className="text-sm font-black uppercase tracking-[0.34em] text-[#0f766e]">Contact</p>
        <h2 className="mt-5 max-w-4xl text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
          Let&apos;s build something operationally sharp.
        </h2>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <ContactLink label="Email" value={profile.email} href={`mailto:${profile.email}`} />
          <ContactLink label="Phone" value={profile.phone} href="tel:+917306588516" />
          <ContactLink label="GitHub" value="abhinavg04" href={profile.github} />
        </div>
      </motion.div>
    </section>
  )
}

function SectionIntro({ eyebrow, title, description, dark = false }) {
  return (
    <motion.div {...fadeUp} className="grid gap-5 md:grid-cols-[0.76fr_0.64fr] md:items-end">
      <div>
        <p className={`text-sm font-black uppercase tracking-[0.32em] ${dark ? 'text-[#5eead4]' : 'text-[#0f766e]'}`}>{eyebrow}</p>
        <h2 className={`mt-4 text-4xl font-black leading-tight tracking-tight md:text-6xl ${dark ? 'text-white' : 'text-[#151514]'}`}>{title}</h2>
      </div>
      <p className={`text-base leading-7 ${dark ? 'text-white/58' : 'text-black/58'}`}>{description}</p>
    </motion.div>
  )
}

function MagneticLink({ href, children, variant = 'dark', download = false }) {
  return (
    <motion.a
      href={href}
      download={download}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
      className={`magnetic-link ${variant}`}
    >
      {children}
      <span aria-hidden="true">{'->'}</span>
    </motion.a>
  )
}

function ContactLink({ label, value, href }) {
  return (
    <motion.a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined} whileHover={{ y: -5 }} className="contact-link">
      <span>{label}</span>
      <strong>{value}</strong>
    </motion.a>
  )
}

export default App
