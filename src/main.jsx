
import React from 'react'
import { createRoot } from 'react-dom/client'
import {
  HashRouter, Routes, Route, Link, useLocation, useParams
} from 'react-router-dom'
import {
  ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, Boxes, Check,
  ChevronRight, Cloud, Code2, Cpu, Download, ExternalLink, FileText,
  Globe, HardDrive, Layers3, Mail, Menu, Monitor, Network, Rocket,
  Server, ShieldCheck, Terminal, Workflow, X
} from 'lucide-react'
import './styles.css'

const GITHUB = 'https://github.com/YashDolare15'
const LINKEDIN = 'https://www.linkedin.com/in/yashdolare22'

const projects = [
  {
    id: 'terraform-multi-env',
    number: '01',
    category: 'Infrastructure as Code',
    title: 'Multi-Environment AWS Infrastructure',
    subtitle: 'Reusable infrastructure. Repeatable environments.',
    description: 'Terraform modules, environment separation, remote state and infrastructure monitoring.',
    stack: ['AWS', 'Terraform', 'S3', 'Workspaces', 'Datadog'],
    icon: Layers3,
    overview: 'Provision and manage cloud infrastructure using reusable Terraform modules and separate environments.',
    objectives: ['Build reusable Terraform modules', 'Separate environment configuration', 'Configure remote state in S3', 'Document monitoring'],
    steps: ['Architecture and requirements', 'Terraform modules and variables', 'Environment configuration', 'Remote state setup', 'Monitoring and validation'],
    architecture: 'Add your Terraform architecture diagram.',
    repo: 'https://github.com/YashDolare15/Terraform_multi_environment.git', // Add this project's actual GitHub repository URL
    demo: ''
  },
  {
    id: 'kubernetes-deployment',
    number: '02',
    category: 'Containers & Orchestration',
    title: 'Kubernetes Application Deployment',
    subtitle: 'Container orchestration and reliable releases.',
    description: 'Kubernetes Deployments, Services, replicas, rolling updates and rollback.',
    stack: ['Docker', 'Kubernetes', 'AWS EKS', 'Terraform', 'CloudWatch'],
    icon: Boxes,
    overview: 'Deploy containerized applications and document how Kubernetes manages workloads.',
    objectives: ['Configure Deployments and Services', 'Manage replicas', 'Understand rolling updates', 'Document rollback and monitoring'],
    steps: ['Build and publish image', 'Configure Kubernetes YAML', 'Apply Deployment and Service', 'Verify replicas and rollout', 'Test application access'],
    architecture: 'Add your Kubernetes architecture diagram.',
    repo: 'https://github.com/YashDolare15/aws-devops-infrastructure-automation.git', // Add this project's actual GitHub repository URL
    demo: ''
  },
  {
    id: 'jenkins-cicd',
    number: '03',
    category: 'CI/CD Automation',
    title: 'Automated CI/CD Pipeline',
    subtitle: 'From source code to deployment.',
    description: 'Jenkins automation for source checkout, Docker builds, testing, image publishing and deployment.',
    stack: ['Jenkins', 'GitHub', 'Docker', 'Docker Hub', 'AWS'],
    icon: Workflow,
    overview: 'Automate application delivery through a staged Jenkins pipeline.',
    objectives: ['Checkout source from GitHub', 'Build and validate Docker images', 'Publish images to a registry', 'Deploy and verify the application'],
    steps: ['Source checkout', 'Docker image build', 'Testing and validation', 'Push to Docker Hub', 'Deploy application', 'Verify deployment'],
    architecture: 'Add your CI/CD pipeline diagram.',
    repo: '', // Add this project's actual GitHub repository URL
    demo: ''
  },
  {
    id: 'cloudplay',
    number: '04',
    category: 'Cloud Architecture',
    title: 'CloudPlay — Cloud Gaming Concept',
    subtitle: 'Exploring cloud-based gaming sessions.',
    description: 'A cloud gaming concept exploring session management, authentication, APIs and remote compute.',
    stack: ['AWS', 'React', 'Cognito', 'API', 'Cloud Architecture'],
    icon: Monitor,
    overview: 'Explore cloud gaming architecture and the lifecycle of user compute sessions.',
    objectives: ['Design client and cloud architecture', 'Plan authentication', 'Model session management', 'Document cost and security trade-offs'],
    steps: ['Define user journey', 'Plan frontend and backend', 'Design authentication', 'Model cloud sessions', 'Document constraints'],
    architecture: 'Add your CloudPlay architecture diagram.',
    repo: 'https://github.com/YashDolare15/CloudPlay.git', // Add this project's actual GitHub repository URL
    demo: ''
  }
]

const skillGroups = [
  { title: 'Cloud platforms', icon: Cloud, skills: ['AWS', 'Microsoft Azure', 'Google Cloud Platform'] },
  { title: 'Containers & orchestration', icon: Boxes, skills: ['Docker', 'Kubernetes', 'Docker Compose'] },
  { title: 'Infrastructure as Code', icon: Layers3, skills: ['Terraform', 'CloudFormation', 'Terraform modules'] },
  { title: 'CI/CD & version control', icon: Workflow, skills: ['Jenkins', 'Git', 'GitHub', 'GitLab'] },
  { title: 'Monitoring & operations', icon: Monitor, skills: ['AWS CloudWatch', 'Datadog', 'Troubleshooting'] },
  { title: 'Systems & scripting', icon: Terminal, skills: ['Linux', 'Windows', 'Bash', 'Shell scripting', 'Networking'] }
]

function Header() {
  const [open, setOpen] = React.useState(false)
  const loc = useLocation()

  return (
    <header className="topbar">
      <div className="wrap nav-wrap">
        <Link className="brand" to="/" onClick={() => setOpen(false)}>
          <span className="brand-mark"><Terminal size={18} /></span>
          <span>
            yash<span className="brand-muted">.dolare</span>
            <small>cloud &amp; devops</small>
          </span>
        </Link>

        <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>

        <nav className={open ? 'nav-links open' : 'nav-links'}>
          <a className={loc.pathname === '/' ? 'active' : ''} href="/#about" onClick={() => setOpen(false)}>About</a>
          <a href="/#skills" onClick={() => setOpen(false)}>Skills</a>
          <a href="/#projects" onClick={() => setOpen(false)}>Projects</a>
          <a href="/#contact" onClick={() => setOpen(false)}>Contact</a>
          <a className="nav-resume" href={`${import.meta.env.BASE_URL}cv/YashDolare_Resume%20(3).pdf`} download>
            <Download size={15} /> Resume
          </a>
        </nav>
      </div>
    </header>
  )
}

function Tag({ children }) {
  return <span className="tag">{children}</span>
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <div className="eyebrow">{eyebrow}</div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}

function TerminalWindow({ children, title = 'bash — portfolio' }) {
  return (
    <div className="terminal-window">
      <div className="terminal-bar">
        <div className="traffic"><i /><i /><i /></div>
        <span>{title}</span>
        <span className="terminal-lock">● connected</span>
      </div>
      <div className="terminal-body">{children}</div>
    </div>
  )
}

/* Project cards now open GitHub repositories directly. */
function ProjectCard({ project }) {
  const Icon = project.icon

  function handleClick(event) {
    if (!project.repo) {
      event.preventDefault()
      window.alert(`Add the GitHub repository URL for "${project.title}" in the projects array in src/main.jsx.`)
    }
  }

  return (
    <a
      className="project-card"
      href={project.repo || '#projects'}
      target={project.repo ? '_blank' : undefined}
      rel={project.repo ? 'noopener noreferrer' : undefined}
      onClick={handleClick}
      aria-label={`Open GitHub repository for ${project.title}`}
    >
      <div className="project-card-top">
        <span className="project-number">/{project.number}</span>
        <span className="project-icon"><Icon size={22} /></span>
        <ArrowUpRight className="card-arrow" size={19} />
      </div>

      <div className="project-category">{project.category}</div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>

      <div className="tag-list">
        {project.stack.map(item => <Tag key={item}>{item}</Tag>)}
      </div>

      <div className="project-card-bottom">
        <span><span className="status-dot" /> GITHUB REPOSITORY</span>
        <span className="view-project">
          View source code <ArrowUpRight size={15} />
        </span>
      </div>
    </a>
  )
}

function Home() {
  return (
    <>
      <section className="hero wrap">
        <div className="hero-copy">
          <div className="eyebrow"><span className="pulse" /> CLOUD COMPUTING · DEVOPS</div>
          <h1>Building the cloud.<br />Automating the <span className="gradient-text">journey.</span></h1>
          <p className="hero-lead">
            Hi, I'm <strong>Yash Sudhakar Dolare</strong> — a Computer Science student focused on AWS, infrastructure automation and DevOps.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">Explore my projects <ArrowRight size={17} /></a>
            <a className="btn btn-outline" href={`${import.meta.env.BASE_URL}cv/YashDolare_Resume%20(3).pdf`} download>
              <Download size={17} /> Download CV
            </a>
          </div>
          <div className="hero-socials">
            <a href={GITHUB} target="_blank" rel="noreferrer"><Code2 size={17} /> GitHub <ArrowUpRight size={13} /></a>
            <a href={LINKEDIN} target="_blank" rel="noreferrer"><ExternalLink size={17} /> LinkedIn <ArrowUpRight size={13} /></a>
          </div>
        </div>

        <div className="hero-visual">
          <TerminalWindow title="yash@cloud-lab: ~">
            <div className="prompt-line"><span className="prompt">➜</span> <span className="path">~</span> whoami</div>
            <div className="command-output name-output">yash-dolare</div>
            <div className="prompt-line"><span className="prompt">➜</span> <span className="path">~</span> cat focus.txt</div>
            <div className="command-output">
              AWS cloud infrastructure<br />
              DevOps &amp; automation<br />
              Containers &amp; orchestration<br />
              Infrastructure as Code
            </div>
            <div className="prompt-line"><span className="prompt">➜</span> <span className="path">~</span> ls ./toolkit</div>
            <div className="toolkit-grid">
              {['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'Linux'].map(item => <span key={item}>{item}</span>)}
            </div>
            <div className="prompt-line last-prompt"><span className="prompt">➜</span> <span className="path">~</span> <span className="cursor" /></div>
          </TerminalWindow>
        </div>

        <a className="scroll-cue" href="#about"><span /> Scroll to explore <ArrowDown size={14} /></a>
      </section>

      <section className="section about-section" id="about">
        <div className="wrap">
          <SectionHeading
            eyebrow="01 / ABOUT ME"
            title="Curious by nature. Infrastructure by interest."
            description="I'm pursuing a B.Sc. in Computer Science (Cloud Computing) with Honours and building practical skills in cloud infrastructure, Linux, containers and DevOps."
          />
          <div className="about-grid">
            <div className="about-copy">
              <p>I enjoy learning how systems fit together, from networking and Linux fundamentals to cloud infrastructure, automation and deployment pipelines.</p>
              <p>My focus is on building practical projects, documenting the architecture and understanding the decisions behind each implementation.</p>
              <div className="focus-list">
                <div><Check size={16} /> Learn by building projects</div>
                <div><Check size={16} /> Document architecture and decisions</div>
                <div><Check size={16} /> Improve deployment and troubleshooting</div>
              </div>
            </div>
            <div className="about-terminal">
              <TerminalWindow title="about-me.md">
                <div className="md-heading"># What I'm working toward</div>
                <div className="md-line"><span>01.</span> Cloud infrastructure &amp; administration</div>
                <div className="md-line"><span>02.</span> CI/CD and deployment automation</div>
                <div className="md-line"><span>03.</span> Containers &amp; orchestration</div>
                <div className="md-line"><span>04.</span> Infrastructure as Code</div>
                <div className="md-line"><span>05.</span> Monitoring &amp; observability</div>
                <div className="md-footer">// Learn · Build · Automate · Improve</div>
              </TerminalWindow>
            </div>
          </div>
        </div>
      </section>

      <section className="section skills-section" id="skills">
        <div className="wrap">
          <SectionHeading
            eyebrow="02 / TECH STACK"
            title="Tools in my toolbox."
            description="Technologies and concepts I'm exploring and applying in labs and projects."
          />
          <div className="skills-grid">
            {skillGroups.map((group, index) => {
              const Icon = group.icon
              return (
                <div className="skill-card" key={group.title}>
                  <div className="skill-icon"><Icon size={19} /></div>
                  <h3>{group.title}</h3>
                  <div className="skill-items">
                    {group.skills.map(skill => <span key={skill}>{skill}</span>)}
                  </div>
                  <span className="skill-index">0{index + 1}</span>
                </div>
              )
            })}
          </div>
          <div className="skills-note">
            <span className="note-mark">i</span>
            Project pages will specify which technologies were used in each implementation.
          </div>
        </div>
      </section>

      <section className="section projects-section" id="projects">
        <div className="wrap">
          <SectionHeading
            eyebrow="03 / SELECTED WORK"
            title="Projects, not just buzzwords."
            description="Click a project to open its GitHub repository in a new tab and explore the source code."
          />
          <div className="projects-toolbar">
            <span><span className="status-dot" /> {String(projects.length).padStart(2, '0')} PROJECTS</span>
            <span className="mono-muted">SELECT A PROJECT TO VIEW SOURCE <ChevronRight size={14} /></span>
          </div>
          <div className="projects-grid">
            {projects.map(project => <ProjectCard key={project.id} project={project} />)}
          </div>
        </div>
      </section>

      <section className="section process-section">
        <div className="wrap process-wrap">
          <div>
            <div className="eyebrow">04 / HOW I WORK</div>
            <h2>Understand it.<br /><span className="gradient-text">Build it. Prove it.</span></h2>
            <p className="section-description">Clear architecture, repeatable steps, deployment evidence and honest lessons learned.</p>
          </div>
          <div className="process-steps">
            <div><span>01</span><div><h3>Plan</h3><p>Define goals, architecture and infrastructure.</p></div></div>
            <div><span>02</span><div><h3>Automate</h3><p>Use code, containers and pipelines.</p></div></div>
            <div><span>03</span><div><h3>Verify</h3><p>Test the deployment and document the results.</p></div></div>
          </div>
        </div>
      </section>

      <section className="section contact-section" id="contact">
        <div className="wrap contact-panel">
          <div className="eyebrow">05 / LET'S CONNECT</div>
          <h2>Have a project or opportunity?</h2>
          <p>I'm interested in cloud engineering, DevOps projects and opportunities to learn from experienced engineers.</p>
          <div className="contact-actions">
            <a className="btn btn-primary" href={LINKEDIN} target="_blank" rel="noreferrer">
              <ExternalLink size={17} /> Connect on LinkedIn <ArrowUpRight size={15} />
            </a>
            <a className="btn btn-outline" href={GITHUB} target="_blank" rel="noreferrer">
              <Code2 size={17} /> View GitHub <ArrowUpRight size={15} />
            </a>
          </div>
          <div className="contact-email-note"><Mail size={15} /> Add your professional email here when ready.</div>
        </div>
      </section>

      <Footer />
    </>
  )
}

function ProjectDetail() {
  const { id } = useParams()
  const project = projects.find(item => item.id === id)

  if (!project) {
    return <main className="wrap not-found"><h1>Project not found</h1><Link className="btn btn-primary" to="/">Back home</Link></main>
  }

  const Icon = project.icon

  return (
    <>
      <main className="wrap detail-page">
        <Link className="back-link" to="/#projects"><ArrowLeft size={16} /> Back to all projects</Link>
        <div className="detail-hero">
          <div className="eyebrow"><span className="status-dot" /> CASE STUDY / {project.number}</div>
          <div className="detail-icon"><Icon size={27} /></div>
          <div className="project-category">{project.category}</div>
          <h1>{project.title}</h1>
          <p className="detail-subtitle">{project.subtitle}</p>
          <p className="detail-intro">{project.description}</p>
          <div className="tag-list detail-tags">
            {project.stack.map(item => <Tag key={item}>{item}</Tag>)}
          </div>
          {project.repo && (
            <div className="detail-links">
              <a className="btn btn-primary" href={project.repo} target="_blank" rel="noreferrer">
                <Code2 size={17} /> View GitHub repository <ArrowUpRight size={14} />
              </a>
            </div>
          )}
        </div>

        <div className="detail-layout">
          <aside className="detail-sidebar">
            <div className="sidebar-title">IN THIS CASE STUDY</div>
            <a href="#overview">01 — Overview</a>
            <a href="#architecture">02 — Architecture</a>
            <a href="#implementation">03 — Implementation</a>
            <a href="#gallery">04 — Screenshots</a>
            <a href="#learnings">05 — Learnings</a>
          </aside>

          <div className="detail-content">
            <section id="overview" className="detail-section">
              <div className="eyebrow">01 / OVERVIEW</div>
              <h2>What this project is about</h2>
              <p>{project.overview}</p>
              <div className="objectives-box">
                <h3><Check size={17} /> Project objectives</h3>
                {project.objectives.map((item, index) => (
                  <div className="objective" key={item}><span>0{index + 1}</span>{item}</div>
                ))}
              </div>
            </section>

            <section id="architecture" className="detail-section">
              <div className="eyebrow">02 / ARCHITECTURE</div>
              <h2>System design</h2>
              <p>Replace this placeholder with your architecture diagram and explain how the components communicate.</p>
              <div className="placeholder-visual">
                <div className="placeholder-grid" />
                <div className="placeholder-content">
                  <Network size={31} />
                  <strong>Architecture diagram</strong>
                  <span>{project.architecture}</span>
                  <small>PLACEHOLDER · ADD YOUR DIAGRAM</small>
                </div>
              </div>
            </section>

            <section id="implementation" className="detail-section">
              <div className="eyebrow">03 / IMPLEMENTATION</div>
              <h2>Implementation notes</h2>
              <div className="implementation-list">
                {project.steps.map((step, index) => (
                  <div key={step}>
                    <span className="step-num">{String(index + 1).padStart(2, '0')}</span>
                    <div><h3>{step}</h3><p>Add commands, configuration, decisions and validation evidence here.</p></div>
                    <ChevronRight size={17} />
                  </div>
                ))}
              </div>
              <div className="code-placeholder">
                <div><span>●</span><span>●</span><span>●</span><label>implementation-notes.md</label></div>
                <pre>{`# ${project.title}\n\nTODO: Add your implementation notes.\n\n- Prerequisites\n- Configuration and commands\n- Deployment steps\n- Verification and troubleshooting`}</pre>
              </div>
            </section>

            <section id="gallery" className="detail-section">
              <div className="eyebrow">04 / VISUAL WALKTHROUGH</div>
              <h2>Project screenshots</h2>
              <p>Add your architecture, terminal, deployment, pipeline and monitoring screenshots here.</p>
              <div className="gallery-grid">
                {['Architecture / overview', 'Implementation / terminal', 'Deployment / verification'].map((label, index) => (
                  <div className="gallery-placeholder" key={label}>
                    <div className="gallery-screen">
                      <div className="gallery-dots"><i /><i /><i /></div>
                      <div className="gallery-lines"><span /><span /><span /><span /></div>
                      <div className="gallery-symbol">
                        {index === 0 ? <Network size={23} /> : index === 1 ? <Terminal size={23} /> : <Check size={23} />}
                      </div>
                    </div>
                    <div><span>SCREENSHOT 0{index + 1}</span><strong>{label}</strong><small>Replace with your image</small></div>
                  </div>
                ))}
              </div>
            </section>

            <section id="learnings" className="detail-section">
              <div className="eyebrow">05 / LEARNINGS & RESULTS</div>
              <h2>What I learned</h2>
              <p>Document the problems encountered, troubleshooting steps, results and improvements.</p>
              <div className="learning-callout">
                <Rocket size={20} />
                <div><strong>Results to add</strong><p>Include actual evidence and lessons learned. Avoid unverified performance claims.</p></div>
              </div>
            </section>
          </div>
        </div>

        <div className="next-project">
          <span>KEEP EXPLORING</span>
          <Link to="/">Back to portfolio <ArrowRight size={16} /></Link>
        </div>
      </main>
      <Footer />
    </>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <Link className="brand footer-brand" to="/">
          <span className="brand-mark"><Terminal size={17} /></span>
          <span>yash<span className="brand-muted">.dolare</span></span>
        </Link>
        <span>Built with curiosity <span className="heart">♥</span> and a terminal.</span>
        <div>
          <a href={GITHUB} target="_blank" rel="noreferrer" aria-label="GitHub"><Code2 size={17} /></a>
          <a href={LINKEDIN} target="_blank" rel="noreferrer" aria-label="LinkedIn"><ExternalLink size={17} /></a>
        </div>
        <span className="copyright">© {new Date().getFullYear()} Yash Sudhakar Dolare</span>
      </div>
    </footer>
  )
}

function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </HashRouter>
  )
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
