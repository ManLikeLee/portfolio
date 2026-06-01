'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface NavLink {
  label: string;
  href: string;
}

interface Project {
  title: string;
  description: string;
  tags: string[];
  outcome?: string;
  href?: string;
  imageContent?: React.ReactNode;
}

interface FeaturedProject {
  title: string;
  problem: string;
  solution: string;
  impact: string[];
  imageContent?: React.ReactNode;
  liveDemoUrl?: string;
}

interface ProcessStep {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

interface SkillGroup {
  group: string;
  items: string[];
}

interface ContactItem {
  label: string;
  value: string;
  href: string;
  icon?: React.ReactNode;
}

interface Stat {
  value: string;
  label: string;
}

export interface PortfolioPageProps {
  logo?: { initials: React.ReactNode; name: React.ReactNode };
  navLinks?: NavLink[];
  resume?: { label: string; onClick?: () => void };
  hero?: {
    titleLine1: React.ReactNode;
    titleLine2Gradient?: React.ReactNode;
    subtitle: React.ReactNode;
    bulletPoints?: string[];
    availabilityText?: string;
  };
  ctaButtons?: {
    primary: { label: string; onClick?: () => void };
    secondary: { label: string; onClick?: () => void };
  };
  trustPoints?: string[];
  featuredProject?: FeaturedProject;
  projects?: Project[];
  processSteps?: ProcessStep[];
  skills?: SkillGroup[];
  finalCta?: {
    headline: string;
    subtext: string;
    label: string;
    onClick?: () => void;
  };
  contact?: {
    title: string;
    subtitle: string;
    links: ContactItem[];
    primaryActionLabel: string;
    primaryActionHref: string;
  };
  stats?: Stat[];
  showAnimatedBackground?: boolean;
}

const AuroraBackground: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const currentMount = mountRef.current;
    const isSmallScreen = window.innerWidth < 768;
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const renderer = new THREE.WebGLRenderer({
      antialias: false,
      alpha: true,
      powerPreference: 'high-performance',
    });

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isSmallScreen ? 0.85 : 1.1));
    renderer.setSize(window.innerWidth, window.innerHeight, false);
    renderer.domElement.style.position = 'fixed';
    renderer.domElement.style.top = '0';
    renderer.domElement.style.left = '0';
    renderer.domElement.style.zIndex = '0';
    renderer.domElement.style.display = 'block';
    renderer.domElement.style.width = '100vw';
    renderer.domElement.style.height = '100vh';
    renderer.domElement.style.pointerEvents = 'none';
    currentMount.appendChild(renderer.domElement);

    const material = new THREE.ShaderMaterial({
      uniforms: {
        iTime: { value: 0 },
        iResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
      },
      vertexShader: 'void main() { gl_Position = vec4(position, 1.0); }',
      fragmentShader: `
        uniform float iTime; uniform vec2 iResolution;
        #define NUM_OCTAVES 3
        float rand(vec2 n) { return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453); }
        float noise(vec2 p){ vec2 ip=floor(p);vec2 u=fract(p);u=u*u*(3.0-2.0*u);float res=mix(mix(rand(ip),rand(ip+vec2(1.0,0.0)),u.x),mix(rand(ip+vec2(0.0,1.0)),rand(ip+vec2(1.0,1.0)),u.x),u.y);return res*res; }
        float fbm(vec2 x) { float v=0.0;float a=0.3;vec2 shift=vec2(100);mat2 rot=mat2(cos(0.5),sin(0.5),-sin(0.5),cos(0.50));for(int i=0;i<NUM_OCTAVES;++i){v+=a*noise(x);x=rot*x*2.0+shift;a*=0.4;}return v;}
        void main() {
          vec2 p=((gl_FragCoord.xy)-iResolution.xy*0.5)/iResolution.y*mat2(6.,-4.,4.,6.);vec4 o=vec4(0.);float f=2.+fbm(p+vec2(iTime*5.,0.))*.5;
          for(float i=0.;i++<20.;){vec2 v=p+cos(i*i+(iTime+p.x*.08)*.025+i*vec2(13.,11.))*3.5;float tailNoise=fbm(v+vec2(iTime*.5,i))*.3*(1.-(i/20.));vec4 auroraColors=vec4(.1+.3*sin(i*.2+iTime*.4),.3+.5*cos(i*.3+iTime*.5),.7+.3*sin(i*.4+iTime*.3),1.);vec4 currentContribution=auroraColors*exp(sin(i*i+iTime*.8))/length(max(v,vec2(v.x*f*.015,v.y*1.5)));float thinnessFactor=smoothstep(0.,1.,i/20.)*.6;o+=currentContribution*(1.+tailNoise*.8)*thinnessFactor;}
          o=tanh(pow(o/100.,vec4(1.6)));gl_FragColor=o*1.5;
        }`,
    });

    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    let animationFrameId: number;
    let lastFrameTime = 0;
    const frameInterval = 1000 / 30;
    const animate = (time: number) => {
      animationFrameId = requestAnimationFrame(animate);
      if (document.hidden || time - lastFrameTime < frameInterval) return;
      const deltaSeconds = Math.min((time - lastFrameTime) / 1000, 0.05) || 0.016;
      lastFrameTime = time;
      material.uniforms.iTime.value += deltaSeconds;
      renderer.render(scene, camera);
    };

    const handleResize = () => {
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, window.innerWidth < 768 ? 0.85 : 1.1));
      renderer.setSize(window.innerWidth, window.innerHeight, false);
      material.uniforms.iResolution.value.set(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      if (currentMount.contains(renderer.domElement)) {
        currentMount.removeChild(renderer.domElement);
      }
      renderer.dispose();
      material.dispose();
      geometry.dispose();
    };
  }, []);

  return <div ref={mountRef} />;
};

const defaultData = {
  logo: { initials: 'PU', name: 'Philip Uguru' },
  navLinks: [
    { label: 'Bio', href: '#about' },
    { label: 'Work', href: '#work' },
    { label: 'Expertise', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ],
  resume: { label: 'Download CV', onClick: undefined },
  hero: {
    titleLine1: 'Full-Stack Developer',
    titleLine2Gradient: undefined,
    subtitle:
      'I build high-converting web platforms and marketplaces that turn users into paying customers.\nFrom landing pages to full-scale platforms like service marketplaces, I design and build products that actually work in real markets.',
    bulletPoints: [],
    availabilityText: 'Available for freelance projects',
  },
  ctaButtons: {
    primary: { label: 'Start a Project', onClick: undefined },
    secondary: { label: 'View My Work', onClick: undefined },
  },
  trustPoints: [
    'Built real-world platform (Laundaland)',
    'MVP-ready systems',
    'Designed for real markets',
    'Performance & scalability',
  ],
  featuredProject: {
    title: 'Featured Project: Laundaland',
    problem: 'Laundry services in Abuja lack convenience, structure, and digital access.',
    solution:
      'Designed and built a web-based platform that allows users to schedule pickups, track orders, and manage laundry services seamlessly.',
    impact: ['Designed for real-world use', 'Scalable partner model', 'Built as MVP for launch'],
    imageContent: undefined,
    liveDemoUrl: 'https://laundaland.vercel.app',
  },
  projects: [
    {
      title: 'ShopEase',
      description: 'Modern e-commerce platform for seamless product discovery and checkout.',
      outcome: 'Enabled fast, intuitive shopping for real users.',
      href: 'https://shopease-psi-gray.vercel.app/',
      tags: ['Next.js', 'Tailwind CSS', 'E-commerce'],
      imageContent: undefined,
    },
    {
      title: 'TaskForce',
      description: 'Full-stack task management platform with auth, Kanban workflows, and backend-driven filtering.',
      outcome: 'Delivered a production-ready team workspace with secure sessions, drag-and-drop task flow, and scalable APIs.',
      href: 'https://github.com/ManLikeLee/task_manager',
      tags: ['React', 'TypeScript', 'Vite', 'Express', 'Prisma', 'PostgreSQL'],
      imageContent: undefined,
    },
  ],
  processSteps: [
    { title: 'Understand the problem', description: 'Start with the business goal and user needs.', icon: undefined },
    { title: 'Design the solution', description: 'Map out flows, wireframes, and system architecture.', icon: undefined },
    { title: 'Build and iterate', description: 'Develop, test, and refine for real-world use.', icon: undefined },
    { title: 'Deliver a scalable product', description: 'Launch, monitor, and support for growth.', icon: undefined },
  ],
  skills: [
    { group: 'Frontend', items: ['HTML', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS'] },
    { group: 'Backend', items: ['Node.js', 'REST APIs', 'Firebase / Supabase'] },
    { group: 'Tools', items: ['Git', 'GitHub', 'Figma', 'VS Code'] },
  ],
  finalCta: {
    headline: 'Have a project in mind? Let’s build something that actually works.',
    subtext: 'I focus on building products that are not just functional, but scalable and conversion-driven.',
    label: 'Start a Project',
    onClick: undefined,
  },
  contact: {
    title: 'Let’s work together',
    subtitle:
      'Have a project in mind or need a reliable developer? I’m open to opportunities and collaborations.',
    links: [
      { label: 'Email', value: 'Philip.uguru09@gmail.com', href: 'mailto:Philip.uguru09@gmail.com', icon: undefined },
      { label: 'GitHub', value: 'github.com/manlikelee', href: 'https://github.com/manlikelee', icon: undefined },
      {
        label: 'LinkedIn',
        value: 'linkedin.com/in/philip-uguru-9030ab3b4',
        href: 'https://www.linkedin.com/in/philip-uguru-9030ab3b4',
        icon: undefined,
      },
      { label: 'WhatsApp', value: '+2348133847043', href: 'https://wa.me/2348133847043', icon: undefined },
    ],
    primaryActionLabel: 'Send a Message',
    primaryActionHref: 'mailto:Philip.uguru09@gmail.com',
  },
  stats: [
    { value: '1', label: 'Featured Product Launch' },
    { value: '2+', label: 'Production Projects' },
    { value: '4', label: 'Delivery Phases' },
  ],
};

const PortfolioPage: React.FC<PortfolioPageProps> = ({
  logo = defaultData.logo,
  navLinks = defaultData.navLinks,
  resume = defaultData.resume,
  hero = defaultData.hero,
  ctaButtons = defaultData.ctaButtons,
  trustPoints = defaultData.trustPoints,
  featuredProject = defaultData.featuredProject,
  projects = defaultData.projects,
  processSteps = defaultData.processSteps,
  skills = defaultData.skills,
  finalCta = defaultData.finalCta,
  contact = defaultData.contact,
  stats = defaultData.stats,
  showAnimatedBackground = true,
}) => {
  return (
    <div className="bg-background text-foreground geist-font">
      {showAnimatedBackground && <AuroraBackground />}
      <div className="relative">
        <nav className="w-full px-6 py-4">
          <div className="mx-auto flex max-w-7xl items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-border backdrop-blur-md">
                <span className="geist-font text-sm font-bold text-foreground">{logo.initials}</span>
              </div>
              <span className="geist-font text-lg font-medium text-foreground">{logo.name}</span>
            </div>
            <div className="hidden items-center space-x-8 md:flex">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="inter-font text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <button
              onClick={resume.onClick}
              className="glass-button inter-font rounded-lg px-4 py-2 text-sm font-medium text-foreground"
            >
              {resume.label}
            </button>
          </div>
        </nav>

        <div className="divider" />

        <main id="about" className="w-full px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <section className="mb-16 text-center">
              <div className="float-animation mb-8">
                <h1 className="hero-title mb-5 text-[80px]">
                  {hero.titleLine1}
                  {hero.titleLine2Gradient ? <span className="gradient-text block tracking-tight">{hero.titleLine2Gradient}</span> : null}
                </h1>
                <p className="hero-subtitle inter-font mx-auto max-w-3xl whitespace-pre-line text-base font-light md:text-[1.25rem]">
                  {hero.subtitle}
                </p>
              </div>

              {hero.bulletPoints && hero.bulletPoints.length > 0 ? (
                <ul className="mx-auto mb-10 flex max-w-3xl flex-col gap-2 text-left">
                  {hero.bulletPoints.map((point) => (
                    <li key={point} className="inter-font flex items-center gap-3 text-sm text-muted-foreground md:text-base">
                      <span className="h-2.5 w-2.5 rounded-full bg-cyan-400" />
                      {point}
                    </li>
                  ))}
                </ul>
              ) : null}

              <div className="mb-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <button
                  onClick={ctaButtons.primary.onClick}
                  className="primary-button min-w-[180px] rounded-lg px-6 py-3 text-sm font-medium text-foreground"
                >
                  {ctaButtons.primary.label}
                </button>
                <button
                  onClick={ctaButtons.secondary.onClick}
                  className="glass-button inter-font min-w-[180px] rounded-lg px-6 py-3 text-sm font-medium text-foreground"
                >
                  {ctaButtons.secondary.label}
                </button>
              </div>

              <p className="inter-font text-sm text-cyan-300">{hero.availabilityText}</p>
            </section>

            <div className="divider mb-14" />

            <section className="mb-16">
              <div className="grid gap-4 rounded-2xl border border-border bg-black/25 p-6 backdrop-blur lg:grid-cols-4">
                {trustPoints.map((point) => (
                  <div key={point} className="flex items-center gap-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-cyan-400" />
                    <span className="inter-font text-sm text-muted-foreground">{point}</span>
                  </div>
                ))}
              </div>
            </section>

            <div className="divider mb-14" />

            <section id="work" className="mb-16">
              <h2 className="section-title mb-8 text-center text-3xl md:text-4xl">Work</h2>

              <article className="glass-card mb-8 rounded-2xl p-6 md:p-8">
                <div className="grid gap-6 md:grid-cols-2 md:items-center">
                  <div className="project-image flex h-52 items-center justify-center rounded-xl border border-border/80">
                    {featuredProject.imageContent ?? (
                      <span className="inter-font text-sm text-muted-foreground">Featured project preview placeholder</span>
                    )}
                  </div>
                  <div>
                    <h3 className="mb-3 text-2xl font-medium text-card-foreground">{featuredProject.title}</h3>
                    <p className="inter-font mb-3 text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">Problem:</span> {featuredProject.problem}
                    </p>
                    <p className="inter-font mb-4 text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">Solution:</span> {featuredProject.solution}
                    </p>
                    <ul className="mb-4 space-y-2">
                      {featuredProject.impact.map((item) => (
                        <li key={item} className="inter-font flex items-center gap-2 text-sm text-muted-foreground">
                          <span className="h-2 w-2 rounded-full bg-blue-400" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    {featuredProject.liveDemoUrl ? (
                      <a
                        href={featuredProject.liveDemoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inter-font text-sm text-cyan-300 underline-offset-4 hover:underline"
                      >
                        View live demo
                      </a>
                    ) : null}
                  </div>
                </div>
              </article>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {projects.map((project) => (
                  <article key={project.title} className="glass-card rounded-2xl p-6 text-left">
                    <div className="project-image mb-4 flex h-32 items-center justify-center rounded-xl border border-border/80">
                      {project.imageContent ?? (
                      <span className="inter-font text-sm text-muted-foreground">Project image placeholder</span>
                      )}
                    </div>
                    <h3 className="mb-2 text-lg font-medium text-card-foreground">{project.title}</h3>
                    <p className="inter-font mb-3 text-sm text-muted-foreground">{project.description}</p>
                    {project.outcome ? (
                      <p className="inter-font mb-4 text-sm text-muted-foreground">
                        <span className="font-semibold text-foreground">Outcome:</span> {project.outcome}
                      </p>
                    ) : null}
                    <div className="mb-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="skill-badge rounded px-2 py-1 text-xs text-muted-foreground">
                          {tag}
                        </span>
                      ))}
                    </div>
                    {project.href ? (
                      <a
                        href={project.href}
                        target={project.href.startsWith('http') ? '_blank' : undefined}
                        rel={project.href.startsWith('http') ? 'noreferrer' : undefined}
                        className="inter-font text-sm text-cyan-300 underline-offset-4 hover:underline"
                      >
                        View project
                      </a>
                    ) : null}
                  </article>
                ))}
              </div>
            </section>

            <div className="divider mb-14" />

            <section className="mb-16">
              <h2 className="section-title mb-8 text-center text-3xl md:text-4xl">How I Work</h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                {processSteps.map((step) => (
                  <article key={step.title} className="glass-card rounded-2xl p-6 text-center">
                    <div className="mb-3 flex justify-center text-cyan-300">{step.icon}</div>
                    <h3 className="mb-2 text-base font-medium text-card-foreground">{step.title}</h3>
                    <p className="inter-font text-sm text-muted-foreground">{step.description}</p>
                  </article>
                ))}
              </div>
            </section>

            <div className="divider mb-14" />

            <section id="skills" className="mb-16">
              <h2 className="section-title mb-8 text-center text-3xl md:text-4xl">Skills</h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {skills.map((group) => (
                  <article key={group.group} className="glass-card rounded-2xl p-6">
                    <h3 className="mb-4 text-center text-lg font-medium text-card-foreground">{group.group}</h3>
                    <div className="flex flex-wrap justify-center gap-2">
                      {group.items.map((item) => (
                        <span key={item} className="skill-badge rounded-full px-3 py-1 text-xs text-muted-foreground">
                          {item}
                        </span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <div className="divider mb-14" />

            <section className="mb-16 rounded-2xl border border-border bg-black/30 px-6 py-10 text-center backdrop-blur">
              <h2 className="section-title mx-auto mb-3 max-w-3xl text-2xl md:text-3xl">{finalCta.headline}</h2>
              <p className="inter-font mx-auto mb-6 max-w-2xl text-sm text-muted-foreground md:text-base">{finalCta.subtext}</p>
              <button onClick={finalCta.onClick} className="primary-button rounded-lg px-7 py-3 text-sm font-medium text-foreground">
                {finalCta.label}
              </button>
            </section>

            <div className="divider mb-14" />

            <section id="contact" className="mb-14">
              <h2 className="section-title mb-3 text-center text-3xl md:text-4xl">{contact.title}</h2>
              <p className="inter-font mx-auto mb-8 max-w-2xl text-center text-sm text-muted-foreground md:text-base">{contact.subtitle}</p>

              <div className="mx-auto mb-6 grid max-w-3xl gap-4">
                {contact.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith('mailto') ? undefined : '_blank'}
                    rel={link.href.startsWith('mailto') ? undefined : 'noreferrer'}
                    className="glass-button flex items-center gap-3 rounded-xl px-5 py-3 text-sm text-foreground"
                  >
                    <span className="text-cyan-300">{link.icon}</span>
                    <span className="inter-font truncate">{link.value}</span>
                  </a>
                ))}
              </div>

              <a
                href={contact.primaryActionHref}
                className="primary-button mx-auto block w-full max-w-3xl rounded-xl px-6 py-3 text-center text-sm font-semibold text-foreground"
              >
                {contact.primaryActionLabel}
              </a>
            </section>

            <div className="divider mb-10" />

            <section className="flex flex-col items-center justify-center gap-8 text-center sm:flex-row">
              {stats.map((stat, index) => (
                <React.Fragment key={stat.label}>
                  <div>
                    <div className="geist-font mb-1 text-3xl font-light tracking-tight text-foreground md:text-4xl">{stat.value}</div>
                    <div className="inter-font text-sm font-normal text-muted-foreground">{stat.label}</div>
                  </div>
                  {index < stats.length - 1 ? (
                    <div className="hidden h-12 w-px bg-gradient-to-b from-transparent via-input to-transparent sm:block" />
                  ) : null}
                </React.Fragment>
              ))}
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export { PortfolioPage };
