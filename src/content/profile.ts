export type Locale = "pt" | "en";

export const locales = ["pt", "en"] as const;
export const defaultLocale: Locale = "pt";

type NavigationContent = {
  home: string;
  projects: string;
  about: string;
  resume: string;
  contact: string;
};

type ActionsContent = {
  viewProjects: string;
  contact: string;
  viewDetails: string;
  liveDemo: string;
  backToProjects: string;
  githubProfile: string;
  linkedinProfile: string;
  downloadPt: string;
  downloadEn: string;
  emailMe: string;
  languagePt: string;
  languageEn: string;
  languagePtShort: string;
  languageEnShort: string;
};

type AccessibilityContent = {
  github: string;
  linkedin: string;
  languageToggle: string;
  themeToggle: string;
  switchToDarkTheme: string;
  switchToLightTheme: string;
  mainNavigation: string;
  mobileNavigation: string;
};

type HeroContent = {
  availability: string;
  title: string;
  description: string;
};

type HomePageContent = {
  featuredProjectsTitle: string;
  featuredProjectsDescription: string;
};

type ProjectsPageContent = {
  title: string;
  description: string;
  overviewLabel: string;
  architectureLabel: string;
  engineeringHighlightsLabel: string;
  technicalDecisionsLabel: string;
  impactLabel: string;
  stackLabel: string;
  linksLabel: string;
  liveLinkLabel: string;
  highlightsLabel: string;
  challengeLabel: string;
  solutionLabel: string;
  resultsLabel: string;
  notFoundTitle: string;
  notFoundDescription: string;
};

type AboutPageContent = {
  title: string;
  description: string;
  paragraphs: string[];
};

type ResumePageContent = {
  title: string;
  description: string;
  downloadTitle: string;
  lastUpdateLabel: string;
  lastUpdateValue: string;
};

type ContactPageContent = {
  title: string;
  description: string;
  directTitle: string;
};

type ExperienceItem = {
  company: string;
  period: string;
  role: string;
  bullets: string[];
};

type SkillCategory = {
  category: string;
  items: string[];
};

export type StudyAreaItem = {
  title: string;
  description: string;
};

type SeoContent = {
  siteName: string;
  defaultTitle: string;
  defaultDescription: string;
  keywords: string[];
};

type FooterContent = {
  rights: string;
};

export type LocalizedProfileContent = {
  localeLabel: string;
  profile: {
    name: string;
    role: string;
    email: string;
    githubUrl: string;
    linkedinUrl: string;
    summary: string;
  };
  navigation: NavigationContent;
  actions: ActionsContent;
  accessibility: AccessibilityContent;
  hero: HeroContent;
  homePage: HomePageContent;
  projectsPage: ProjectsPageContent;
  aboutPage: AboutPageContent;
  resumePage: ResumePageContent;
  contactPage: ContactPageContent;
  sections: {
    experience: string;
    skills: string;
    studyAreas: string;
  };
  experience: ExperienceItem[];
  skills: SkillCategory[];
  studyAreas: StudyAreaItem[];
  seo: SeoContent;
  footer: FooterContent;
};

const sharedProfile = {
  name: "Antonio Carlos Martins Gomes",
  email: "antoniocarlossbcdd@gmail.com",
  githubUrl: "https://github.com/carlossb",
  linkedinUrl: "https://www.linkedin.com/in/antonio-carlos-martins/",
};

const sharedSkills = {
  frontend: ["React", "Next.js", "TypeScript"],
  backend: ["Node.js", "REST APIs"],
  quality: ["Jest", "Clean Code"],
  cloud: ["AWS (Lambda, API Gateway)", "Git"],
  databases: ["PostgreSQL", "MySQL", "MongoDB"],
  architecture: ["DDD", "Hexagonal Architecture"],
};

export const studyAreas: Record<Locale, StudyAreaItem[]> = {
  pt: [
    {
      title: "Python",
      description:
        "Estudo aplicado ao backend, automações e fundamentos para IA e segurança.",
    },
    {
      title: "Security",
      description:
        "Fundamentos de segurança em aplicações web, autenticação, boas práticas e OWASP.",
    },
    {
      title: "Inteligência Artificial",
      description:
        "Exploração de fundamentos de IA, LLMs e integração de IA em aplicações web.",
    },
  ],
  en: [
    {
      title: "Python",
      description:
        "Applied studies focused on backend development, automation, and foundations for AI and security.",
    },
    {
      title: "Security",
      description:
        "Web application security fundamentals, authentication strategies, best practices and OWASP.",
    },
    {
      title: "Artificial Intelligence",
      description:
        "Exploring AI fundamentals, LLMs and AI integration into web applications.",
    },
  ],
};

export const profileContent: Record<Locale, LocalizedProfileContent> = {
  pt: {
    localeLabel: "PT",
    profile: {
      ...sharedProfile,
      role: "Desenvolvedor Fullstack",
      summary:
        "Desenvolvedor Fullstack (+4 anos) especialista no ecossistema JavaScript (React.js, Next.js, Node.js), com experiência em plataformas de automação (chatbots), performance, qualidade de código (testes), caching e refatoração de APIs para melhoria da UX.",
    },
    navigation: {
      home: "Home",
      projects: "Projetos",
      about: "Sobre",
      resume: "Currículo",
      contact: "Contato",
    },
    actions: {
      viewProjects: "Ver Projetos",
      contact: "Contato",
      viewDetails: "Ver detalhes",
      liveDemo: "Acessar projeto",
      backToProjects: "Voltar para projetos",
      githubProfile: "GitHub",
      linkedinProfile: "LinkedIn",
      downloadPt: "Baixar currículo (PT)",
      downloadEn: "Baixar resume (EN)",
      emailMe: "Enviar e-mail",
      languagePt: "Português",
      languageEn: "Inglês",
      languagePtShort: "PT",
      languageEnShort: "EN",
    },
    accessibility: {
      github: "Abrir perfil do GitHub",
      linkedin: "Abrir perfil do LinkedIn",
      languageToggle: "Alternar idioma",
      themeToggle: "Alternar tema",
      switchToDarkTheme: "Ativar tema escuro",
      switchToLightTheme: "Ativar tema claro",
      mainNavigation: "Navegação principal",
      mobileNavigation: "Navegação mobile",
    },
    hero: {
      availability: "Disponível para oportunidades remotas e híbridas",
      title: "Construindo produtos web performáticos com foco em UX e qualidade de código.",
      description:
        "Portfólio profissional em PT/EN para recrutadores brasileiros e internacionais.",
    },
    homePage: {
      featuredProjectsTitle: "Projetos em destaque",
      featuredProjectsDescription:
        "Seleção de projetos publicados com foco em entrega de valor e qualidade técnica.",
    },
    projectsPage: {
      title: "Projetos",
      description:
        "Cases com foco em UI moderna, performance e experiência final do usuário.",
      overviewLabel: "Visão geral",
      architectureLabel: "Arquitetura",
      engineeringHighlightsLabel: "Destaques de Engenharia",
      technicalDecisionsLabel: "Decisões técnicas",
      impactLabel: "Impacto",
      stackLabel: "Stack",
      linksLabel: "Links",
      liveLinkLabel: "Link ao vivo",
      highlightsLabel: "Destaques",
      challengeLabel: "Desafio",
      solutionLabel: "Solução",
      resultsLabel: "Resultado",
      notFoundTitle: "Projeto não encontrado",
      notFoundDescription:
        "O case solicitado não está disponível. Você pode voltar para a lista completa de projetos.",
    },
    aboutPage: {
      title: "Sobre",
      description:
        "Experiência sólida em produtos digitais, integrações e evolução contínua de arquitetura.",
      paragraphs: [
        "Atuo como desenvolvedor Fullstack há mais de 4 anos, com foco no ecossistema JavaScript e entrega de produtos escaláveis.",
        "Tenho experiência direta em plataformas de automação com chatbots, otimização de performance, melhoria de fluxos e refatoração de APIs para melhor experiência do usuário.",
        "Valorizo código limpo, colaboração multidisciplinar e decisões orientadas a impacto de negócio.",
      ],
    },
    resumePage: {
      title: "Currículo",
      description:
        "Baixe meu currículo em português ou inglês em PDF.",
      downloadTitle: "Downloads",
      lastUpdateLabel: "Última atualização",
      lastUpdateValue: "Fevereiro de 2026",
    },
    contactPage: {
      title: "Contato",
      description:
        "Vamos conversar sobre oportunidades, projetos e colaboração técnica.",
      directTitle: "Contato direto",
    },
    sections: {
      experience: "Experiência",
      skills: "Skills",
      studyAreas: "Áreas de Estudo",
    },
    experience: [
      {
        company: "Ligo.cloud",
        period: "Apr 2024 – Apr 2025",
        role: "Desenvolvedor Fullstack",
        bullets: [
          "Atuação no Ligo Bots com entrega contínua de novas features.",
          "Evolução de performance e estabilidade em fluxos críticos da plataforma.",
          "Colaboração com times multidisciplinares para priorizar melhorias orientadas a UX.",
        ],
      },
      {
        company: "Code7",
        period: "May 2021 – Apr 2024",
        role: "Desenvolvedor de Software",
        bullets: [
          "Desenvolvimento de plataforma low-code para automação com chatbots.",
          "Criação e manutenção de integrações com serviços externos e APIs.",
          "Otimização de fluxos e melhorias arquiteturais para escalar entregas.",
        ],
      },
    ],
    skills: [
      { category: "Frontend", items: sharedSkills.frontend },
      { category: "Backend", items: sharedSkills.backend },
      { category: "Quality", items: sharedSkills.quality },
      { category: "Cloud/DevOps", items: sharedSkills.cloud },
      { category: "Databases", items: sharedSkills.databases },
      { category: "Architecture", items: sharedSkills.architecture },
    ],
    studyAreas: studyAreas.pt,
    seo: {
      siteName: "Antonio Gomes | Portfólio",
      defaultTitle: "Antonio Gomes | Desenvolvedor Fullstack",
      defaultDescription:
        "Portfólio profissional de Antonio Gomes com projetos em Next.js, React e TypeScript.",
      keywords: [
        "Antonio Gomes",
        "Desenvolvedor Fullstack",
        "Next.js",
        "React",
        "TypeScript",
        "Portfolio",
      ],
    },
    footer: {
      rights: "© {year} {name}. Todos os direitos reservados.",
    },
  },
  en: {
    localeLabel: "EN",
    profile: {
      ...sharedProfile,
      role: "Full-Stack Software Developer",
      summary:
        "Full-Stack Software Developer (4+ years) specializing in the JavaScript ecosystem (React.js, Next.js, Node.js), experienced in automation platforms (chatbots), performance optimization, testing, caching strategies, scalability, and API refactoring to improve UX.",
    },
    navigation: {
      home: "Home",
      projects: "Projects",
      about: "About",
      resume: "Resume",
      contact: "Contact",
    },
    actions: {
      viewProjects: "View Projects",
      contact: "Contact",
      viewDetails: "View details",
      liveDemo: "Live demo",
      backToProjects: "Back to projects",
      githubProfile: "GitHub",
      linkedinProfile: "LinkedIn",
      downloadPt: "Download resume (PT)",
      downloadEn: "Download resume (EN)",
      emailMe: "Send e-mail",
      languagePt: "Portuguese",
      languageEn: "English",
      languagePtShort: "PT",
      languageEnShort: "EN",
    },
    accessibility: {
      github: "Open GitHub profile",
      linkedin: "Open LinkedIn profile",
      languageToggle: "Toggle language",
      themeToggle: "Toggle theme",
      switchToDarkTheme: "Switch to dark theme",
      switchToLightTheme: "Switch to light theme",
      mainNavigation: "Main navigation",
      mobileNavigation: "Mobile navigation",
    },
    hero: {
      availability: "Open to remote and hybrid opportunities",
      title: "Building high-performance web products focused on UX and code quality.",
      description:
        "Professional bilingual portfolio for Brazilian and international recruiters.",
    },
    homePage: {
      featuredProjectsTitle: "Featured projects",
      featuredProjectsDescription:
        "Selected live projects with a strong focus on delivery quality and business value.",
    },
    projectsPage: {
      title: "Projects",
      description:
        "Case studies focused on modern UI, performance, and user experience quality.",
      overviewLabel: "Overview",
      architectureLabel: "Architecture",
      engineeringHighlightsLabel: "Engineering Highlights",
      technicalDecisionsLabel: "Technical Decisions",
      impactLabel: "Impact",
      stackLabel: "Stack",
      linksLabel: "Links",
      liveLinkLabel: "Live Link",
      highlightsLabel: "Highlights",
      challengeLabel: "Challenge",
      solutionLabel: "Solution",
      resultsLabel: "Results",
      notFoundTitle: "Project not found",
      notFoundDescription:
        "The requested case study is not available yet. You can return to the complete projects list.",
    },
    aboutPage: {
      title: "About",
      description:
        "Solid experience with digital products, integrations, and architecture evolution.",
      paragraphs: [
        "I have worked as a Full-Stack developer for 4+ years, focused on the JavaScript ecosystem and scalable product delivery.",
        "My background includes automation platforms with chatbots, performance optimization, flow improvements, and API refactoring to improve end-user experience.",
        "I value clean code, multidisciplinary collaboration, and business-impact-driven technical decisions.",
      ],
    },
    resumePage: {
      title: "Resume",
      description: "Download my resume in Portuguese or English PDF formats.",
      downloadTitle: "Downloads",
      lastUpdateLabel: "Last update",
      lastUpdateValue: "February 2026",
    },
    contactPage: {
      title: "Contact",
      description:
        "Let us connect about opportunities, projects, and technical collaboration.",
      directTitle: "Direct contact",
    },
    sections: {
      experience: "Experience",
      skills: "Skills",
      studyAreas: "Currently Exploring",
    },
    experience: [
      {
        company: "Ligo.cloud",
        period: "Apr 2024 – Apr 2025",
        role: "Full-Stack Developer",
        bullets: [
          "Worked on Ligo Bots with continuous delivery of new features.",
          "Improved performance and stability on business-critical platform flows.",
          "Collaborated with multidisciplinary teams to prioritize UX-focused improvements.",
        ],
      },
      {
        company: "Code7",
        period: "May 2021 – Apr 2024",
        role: "Software Developer",
        bullets: [
          "Developed a low-code automation platform focused on chatbot experiences.",
          "Built and maintained integrations with external services and APIs.",
          "Optimized platform flows and delivered architecture improvements for scalability.",
        ],
      },
    ],
    skills: [
      { category: "Frontend", items: sharedSkills.frontend },
      { category: "Backend", items: sharedSkills.backend },
      { category: "Quality", items: sharedSkills.quality },
      { category: "Cloud/DevOps", items: sharedSkills.cloud },
      { category: "Databases", items: sharedSkills.databases },
      { category: "Architecture", items: sharedSkills.architecture },
    ],
    studyAreas: studyAreas.en,
    seo: {
      siteName: "Antonio Gomes | Portfolio",
      defaultTitle: "Antonio Gomes | Full-Stack Developer",
      defaultDescription:
        "Professional portfolio of Antonio Gomes featuring Next.js, React, and TypeScript projects.",
      keywords: [
        "Antonio Gomes",
        "Full-Stack Developer",
        "Next.js",
        "React",
        "TypeScript",
        "Portfolio",
      ],
    },
    footer: {
      rights: "© {year} {name}. All rights reserved.",
    },
  },
};
