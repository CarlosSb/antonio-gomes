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
  downloadResume: string;
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
  badge: string;
  headlineLead: string;
  headlineAccent: string;
  description: string;
  aboutLinkLabel: string;
  tags: string[];
};

type HomePageContent = {
  selectedWorkTitle: string;
  selectedWorkDescription: string;
  engineeringMindsetTitle: string;
  engineeringMindsetDescription: string;
  engineeringMindsetItems: Array<{
    title: string;
    description: string;
  }>;
  finalCtaTitle: string;
  finalCtaDescription: string;
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
  introTitle: string;
  introPoints: string[];
  timelineTitle: string;
  timelineItems: Array<{
    company: string;
    period: string;
    role: string;
    highlights: string[];
  }>;
  principlesTitle: string;
  principles: Array<{
    title: string;
    description: string;
  }>;
  impactTitle: string;
  impactPoints: string[];
  proofTitle: string;
  proofDescription: string;
  proofProjects: Array<{
    slug: string;
    title: string;
    description: string;
  }>;
  proofLinkLabel: string;
  exploringTitle: string;
  exploringDescription: string;
};

type ResumePageContent = {
  title: string;
  description: string;
  downloadTitle: string;
  highlights: string[];
  lastUpdateLabel: string;
  lastUpdateValue: string;
};

type ContactPageContent = {
  title: string;
  description: string;
  copyEmailLabel: string;
  copyEmailSuccess: string;
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
  tagline: string;
  locationLabel: string;
  locationValue: string;
  navigationTitle: string;
  contactTitle: string;
  buildLine: string;
  backToTop: string;
};

export type LocalizedProfileContent = {
  localeLabel: string;
  profile: {
    name: string;
    role: string;
    email: string;
    githubUrl: string;
    linkedinUrl: string;
    whatsappUrl: string;
    whatsappDisplay: string;
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
  whatsappUrl: "https://wa.me/5588992017400",
  whatsappDisplay: "+55 88 99201-7400",
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
      downloadResume: "Baixar Currículo",
      viewDetails: "Ver detalhes",
      liveDemo: "Acessar projeto",
      backToProjects: "Voltar para projetos",
      githubProfile: "GitHub",
      linkedinProfile: "LinkedIn",
      downloadPt: "Baixar currículo (PT)",
      downloadEn: "Baixar currículo (EN)",
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
      badge: "Fullstack Engineer • Next.js • TypeScript",
      headlineLead: "Engenharia fullstack para produtos que rodam em",
      headlineAccent: "produção.",
      description:
        "Engenheiro fullstack com mais de 4 anos de experiência em SaaS, arquitetura multi-tenant, integrações complexas e decisões orientadas a produto. Foco em performance, clareza arquitetural e entrega real em produção.",
      aboutLinkLabel: "Saiba mais sobre minha trajetória →",
      tags: ["SaaS", "Multi-tenant", "Payments", "IA", "Performance", "DX"],
    },
    homePage: {
      selectedWorkTitle: "Trabalhos em Destaque",
      selectedWorkDescription:
        "Três projetos com maior profundidade técnica, foco de negócio e resultados concretos.",
      engineeringMindsetTitle: "Mentalidade de Engenharia",
      engineeringMindsetDescription:
        "Princípios que guiam minha tomada de decisão em produto e arquitetura.",
      engineeringMindsetItems: [
        {
          title: "Performance como Base",
          description:
            "Arquitetura e implementação orientadas para carregamento rápido, eficiência e boa experiência em dispositivos reais.",
        },
        {
          title: "Decisões Guiadas por Produto",
          description:
            "Priorização técnica alinhada com impacto de negócio, clareza de fluxo e redução de fricção para o usuário final.",
        },
        {
          title: "Manutenibilidade em Escala",
          description:
            "Código modular, tipagem forte e padrões consistentes para acelerar evolução sem comprometer qualidade.",
        },
      ],
      finalCtaTitle:
        "Aberto a oportunidades fullstack e projetos com alto padrão de execução.",
      finalCtaDescription:
        "Aberto para oportunidades fullstack, colaboração técnica e projetos com alto padrão de execução.",
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
      stackLabel: "Tecnologias",
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
        "Construo software de produção com foco em arquitetura sustentável, performance e impacto real no produto.",
      introTitle: "Introdução",
      introPoints: [
        "Sou Fullstack Engineer focado em SaaS multi-tenant, integrações e fluxos críticos como autenticação, billing e pagamentos.",
        "Trabalho com Next.js + TypeScript no front e back (APIs, banco, filas e webhooks), com atenção a performance, SEO e manutenção no longo prazo.",
        "Priorizo entrega rápida com arquitetura sustentável, observabilidade, segurança básica (RBAC, validações, idempotência) e experiência do usuário.",
        "Se você precisa tirar um produto do papel e colocar em produção com responsabilidade, vamos conversar.",
      ],
      timelineTitle: "Linha da Carreira",
      timelineItems: [
        {
          company: "Ligo.cloud",
          period: "Apr 2024 – Apr 2025",
          role: "Desenvolvedor Fullstack",
          highlights: [
            "Evolução contínua do Ligo Bots com entrega de novas features.",
            "Melhoria de performance e estabilidade em fluxos críticos.",
            "Trabalho em conjunto com times multidisciplinares para melhorar UX.",
          ],
        },
        {
          company: "Code7",
          period: "May 2021 – Apr 2024",
          role: "Desenvolvedor de Software",
          highlights: [
            "Desenvolvimento de plataforma low-code para automação com chatbots.",
            "Criação de integrações com APIs e serviços externos.",
            "Otimização de fluxos e ajustes arquiteturais para escalabilidade.",
          ],
        },
      ],
      principlesTitle: "Como eu trabalho",
      principles: [
        {
          title: "Contexto primeiro, código depois",
          description:
            "Entendo restrições de produto e operação antes de decidir implementação.",
        },
        {
          title: "Performance por padrão",
          description:
            "Busco respostas rápidas e arquitetura eficiente desde o primeiro deploy.",
        },
        {
          title: "Entrega sustentável",
          description:
            "Prefiro soluções legíveis e evolutivas para manter velocidade com qualidade.",
        },
      ],
      impactTitle: "Onde entrego mais valor",
      impactPoints: [
        "Arquitetura e evolução de produtos SaaS com múltiplos contextos de negócio.",
        "Integrações externas (pagamentos, webhooks, APIs) com foco em confiabilidade.",
        "Refatoração de APIs e fluxos para reduzir fricção e melhorar UX real.",
      ],
      proofTitle: "Provas",
      proofDescription:
        "Três cases que mostram profundidade técnica e entrega em produção.",
      proofProjects: [
        {
          slug: "ong-tudo-por-amor",
          title: "ONG Tudo por Amor",
          description:
            "Plataforma institucional com CMS headless, SEO técnico e ISR.",
        },
        {
          slug: "otica-plus",
          title: "ÓticaPlus",
          description:
            "SaaS multi-tenant com CRM, billing e fluxo operacional completo.",
        },
        {
          slug: "digital-net-telecom",
          title: "Digital.Net Telecom",
          description:
            "Plataforma fullstack com arquitetura multi-cidade e APIs testadas.",
        },
      ],
      proofLinkLabel: "Ver case",
      exploringTitle: "Explorando agora",
      exploringDescription:
        "Áreas em estudo contínuo para ampliar capacidade técnica e visão de produto.",
    },
    resumePage: {
      title: "Currículo",
      description:
        "Baixe meu currículo em português ou inglês em PDF.",
      downloadTitle: "Downloads",
      highlights: [
        "4+ anos construindo aplicações fullstack em produção.",
        "Experiência prática com SaaS, integrações, performance e arquitetura escalável.",
        "Foco em qualidade técnica, UX e entrega orientada a negócio.",
      ],
      lastUpdateLabel: "Última atualização",
      lastUpdateValue: "Fevereiro de 2026",
    },
    contactPage: {
      title: "Contato",
      description:
        "Vamos conversar sobre oportunidades, projetos e colaboração técnica.",
      copyEmailLabel: "Copiar e-mail",
      copyEmailSuccess: "Copiado!",
    },
    sections: {
      experience: "Experiência",
      skills: "Habilidades",
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
      tagline: "Engenharia fullstack para produtos digitais escaláveis.",
      locationLabel: "Localização",
      locationValue: "Brasil / Remote",
      navigationTitle: "Navegação",
      contactTitle: "Contato",
      buildLine: "Construído com Next.js • Hospedado na Vercel",
      backToTop: "Voltar ao topo",
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
      downloadResume: "Download Resume",
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
      badge: "Fullstack Engineer • Next.js • TypeScript",
      headlineLead: "Full-stack engineering for",
      headlineAccent: "production-grade products.",
      description:
        "Fullstack engineer with over 4 years of experience in SaaS, multi-tenant architecture, complex integrations, and product-driven decision making. Focused on performance, architectural clarity, and real production delivery.",
      aboutLinkLabel: "Read more about my background →",
      tags: ["SaaS", "Multi-tenant", "Payments", "AI", "Performance", "DX"],
    },
    homePage: {
      selectedWorkTitle: "Selected Work",
      selectedWorkDescription:
        "Three projects with stronger technical depth, business context, and measurable delivery quality.",
      engineeringMindsetTitle: "Engineering Mindset",
      engineeringMindsetDescription:
        "Core principles that drive my product and architecture decisions.",
      engineeringMindsetItems: [
        {
          title: "Performance as Baseline",
          description:
            "Architecture and implementation decisions built around fast loading, efficiency, and real-device UX quality.",
        },
        {
          title: "Product-Driven Decisions",
          description:
            "Technical priorities aligned with business impact, clarity of flow, and reduced user friction.",
        },
        {
          title: "Maintainability at Scale",
          description:
            "Modular code, strong typing, and consistent patterns to scale delivery without sacrificing quality.",
        },
      ],
      finalCtaTitle:
        "Open to full-stack opportunities and projects with a high execution standard.",
      finalCtaDescription:
        "Open to full-stack opportunities, technical collaboration, and product-focused teams.",
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
        "I build production software with sustainable architecture, performance, and real product impact.",
      introTitle: "Intro",
      introPoints: [
        "I’m a Fullstack Engineer focused on production-grade SaaS: multi-tenant architecture, integrations, and critical flows like auth, billing, and payments.",
        "I build with Next.js + TypeScript across frontend and backend (APIs, DB, queues, webhooks), prioritizing performance, SEO, and long-term maintainability.",
        "I aim for fast delivery with sustainable architecture, solid fundamentals (RBAC, validations, idempotency), and strong UX.",
        "If you need someone to ship and operate real products, let’s talk.",
      ],
      timelineTitle: "Career Timeline",
      timelineItems: [
        {
          company: "Ligo.cloud",
          period: "Apr 2024 – Apr 2025",
          role: "Full-Stack Developer",
          highlights: [
            "Continuously shipped new capabilities in Ligo Bots.",
            "Improved performance and stability in business-critical flows.",
            "Collaborated across teams to prioritize user-experience improvements.",
          ],
        },
        {
          company: "Code7",
          period: "May 2021 – Apr 2024",
          role: "Software Developer",
          highlights: [
            "Built low-code automation products for chatbot operations.",
            "Implemented integrations with external APIs and services.",
            "Optimized platform workflows and architectural consistency.",
          ],
        },
      ],
      principlesTitle: "How I work",
      principles: [
        {
          title: "Context first, code second",
          description:
            "I align implementation choices with product and operational constraints.",
        },
        {
          title: "Performance by default",
          description:
            "I design for speed and efficiency from the first production release.",
        },
        {
          title: "Sustainable delivery",
          description:
            "I prioritize maintainable solutions that keep teams moving fast with quality.",
        },
      ],
      impactTitle: "Where I deliver the most",
      impactPoints: [
        "SaaS architecture and product evolution across complex business flows.",
        "External integrations (payments, webhooks, APIs) with reliability in mind.",
        "API and workflow refactoring to improve real-world user experience.",
      ],
      proofTitle: "Proof",
      proofDescription:
        "Three projects that represent technical depth and production delivery.",
      proofProjects: [
        {
          slug: "ong-tudo-por-amor",
          title: "ONG Tudo por Amor",
          description:
            "Institutional platform with headless CMS, technical SEO, and ISR.",
        },
        {
          slug: "otica-plus",
          title: "ÓticaPlus",
          description:
            "Multi-tenant SaaS with CRM, billing, and end-to-end operations.",
        },
        {
          slug: "digital-net-telecom",
          title: "Digital.Net Telecom",
          description:
            "Fullstack ISP platform with multi-city architecture and tested APIs.",
        },
      ],
      proofLinkLabel: "View case",
      exploringTitle: "What I’m exploring",
      exploringDescription:
        "Continuous study tracks to expand technical capability and product thinking.",
    },
    resumePage: {
      title: "Resume",
      description: "Download my resume in Portuguese or English PDF formats.",
      downloadTitle: "Downloads",
      highlights: [
        "4+ years building fullstack production systems.",
        "Hands-on work with SaaS, integrations, performance, and scalable architecture.",
        "Strong focus on technical quality, UX, and business-driven delivery.",
      ],
      lastUpdateLabel: "Last update",
      lastUpdateValue: "February 2026",
    },
    contactPage: {
      title: "Contact",
      description:
        "Let us connect about opportunities, projects, and technical collaboration.",
      copyEmailLabel: "Copy email",
      copyEmailSuccess: "Copied!",
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
      tagline: "Fullstack engineering for scalable digital products.",
      locationLabel: "Location",
      locationValue: "Brazil / Remote",
      navigationTitle: "Navigation",
      contactTitle: "Contact",
      buildLine: "Built with Next.js • Hosted on Vercel",
      backToTop: "Back to top",
    },
  },
};
