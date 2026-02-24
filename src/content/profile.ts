export type Locale = "pt" | "en";

export const locales = ["pt", "en"] as const;
export const defaultLocale: Locale = "pt";

type NavigationContent = {
  home: string;
  projects: string;
  caseStudy: string;
  about: string;
  resume: string;
  contact: string;
};

type ActionsContent = {
  viewProjects: string;
  contact: string;
  downloadResume: string;
  viewDetails: string;
  caseStudy: string;
  repository: string;
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
  heroMainCaseCtaLabel: string;
  heroMainCaseCtaAriaLabel: string;
  projectsMainCaseHighlight: {
    badge: string;
    lineOne: string;
    lineTwo: string;
    ctaLabel: string;
  };
  caseTitle: string;
  caseDescription: string;
  caseContextLabel: string;
  caseCta: string;
  caseQuickSummaryTitle: string;
  caseQuickSummaryBullets: string[];
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
  galleryLabel: string;
  overviewLabel: string;
  architectureLabel: string;
  engineeringHighlightsLabel: string;
  technicalDecisionsLabel: string;
  impactLabel: string;
  metricsLabel: string;
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
  homeAbout: {
    layerOneLines: string[];
    expandLabel: string;
    workTitle: string;
    workBullets: string[];
    deliveredTitle: string;
    deliveredBullets: string[];
    studyingTitle: string;
    studyingLine: string;
  };
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
      home: "Início",
      projects: "Projetos",
      caseStudy: "Case ONG",
      about: "Sobre",
      resume: "Currículo",
      contact: "Contato",
    },
    actions: {
      viewProjects: "Ver Projetos",
      contact: "Contato",
      downloadResume: "Baixar Currículo",
      viewDetails: "Ver detalhes",
      caseStudy: "Case",
      repository: "Repositório",
      liveDemo: "Projeto ao vivo",
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
      badge: "Next.js • TypeScript • Node.js",
      headlineLead: "Engenharia fullstack com foco em confiabilidade e",
      headlineAccent: "execução.",
      description:
        "Oi, sou Antonio. Atuo em sistemas com autenticação, autorização, dados e operação centralizada. Stack principal: Next.js, TypeScript, Node.js e PostgreSQL.",
      aboutLinkLabel: "Saiba mais sobre minha trajetória →",
      tags: ["Fluxos auditáveis", "Admin e autoatendimento", "Deploy contínuo"],
    },
    homePage: {
      selectedWorkTitle: "Trabalhos em Destaque",
      selectedWorkDescription:
        "Três projetos com maior profundidade técnica, foco de negócio e resultados concretos.",
      heroMainCaseCtaLabel: "Ver case: ONG Tudo por Amor",
      heroMainCaseCtaAriaLabel:
        "Ver case principal ONG Tudo por Amor com arquitetura, decisões técnicas e impacto em produção",
      projectsMainCaseHighlight: {
        badge: "Case principal",
        lineOne:
          "ONG Tudo por Amor: plataforma institucional com CMS headless, SEO técnico e ISR.",
        lineTwo:
          "Case com foco em autonomia editorial, transparência financeira e entrega estável em produção.",
        ctaLabel: "Ler case completo",
      },
      caseTitle: "Case em Profundidade",
      caseDescription:
        "ONG Tudo por Amor: contexto real, decisões técnicas e impacto operacional.",
      caseContextLabel: "Contexto",
      caseCta: "Ver case ONG",
      caseQuickSummaryTitle: "Resumo rápido do case",
      caseQuickSummaryBullets: [
        "Problema: publicação de conteúdo dependia de suporte técnico e gerava gargalo operacional.",
        "Problema: informações institucionais e de transparência estavam dispersas, com baixa consistência de SEO.",
        "Solução: arquitetura com Next.js + Sanity CMS para autonomia editorial sem depender de deploy.",
        "Solução: rotas dinâmicas com ISR e revalidação por webhook para conteúdo atualizado com performance.",
        "Resultado: equipe da ONG passou a publicar com autonomia e fluxo editorial mais ágil.",
        "Resultado: estrutura de transparência e SEO ficou mais consistente, melhorando clareza institucional.",
      ],
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
      galleryLabel: "Galeria do produto",
      overviewLabel: "Visão geral",
      architectureLabel: "Arquitetura",
      engineeringHighlightsLabel: "Destaques de Engenharia",
      technicalDecisionsLabel: "Decisões técnicas",
      impactLabel: "Impacto",
      metricsLabel: "Métricas",
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
      homeAbout: {
        layerOneLines: [
          "Sou desenvolvedor fullstack com +4 anos no ecossistema JavaScript (React, Next.js e Node.js).",
          "Tenho experiência prática em plataformas de automação e chatbots, com foco em operação real.",
          "Na Ligo.cloud (Apr 2024 – Apr 2025), atuei na evolução de features e performance do Ligo Bots.",
          "Na Code7 (May 2021 – Apr 2024), trabalhei em plataforma low-code com integrações e escalabilidade.",
          "Atuo ponta a ponta: interface, APIs, dados, autenticação e entrega em produção.",
          "Meu foco técnico é performance, testes com Jest, caching e refatoração de APIs.",
          "Entrego software com clareza arquitetural, manutenção sustentável e impacto de negócio.",
        ],
        expandLabel: "Ver detalhes sobre como eu trabalho",
        workTitle: "Como eu trabalho",
        workBullets: [
          "Começo pelo problema de negócio e pelos fluxos críticos antes de escolher solução técnica.",
          "Estruturo o sistema para evoluir sem retrabalho: módulos claros, contratos de API e tipagem forte.",
          "Trato confiabilidade como requisito: validação, idempotência, logs e trilha de execução.",
          "Entrego em ciclos curtos, com foco em impacto real para usuário e operação.",
        ],
        deliveredTitle: "O que eu já entreguei",
        deliveredBullets: [
          "ONG Tudo por Amor: plataforma com Next.js + Sanity CMS, SEO técnico e ISR para dar autonomia editorial e consistência institucional.",
          "ÓticaPlus e Provedor Connect: produtos SaaS com contexto multi-tenant, RBAC, integração com serviços externos e fluxo administrativo completo.",
          "Tia Emília e Digital.Net: fluxos de pagamento e operação com webhook assíncrono, validação de APIs e redução de trabalho manual.",
        ],
        studyingTitle: "Agora estudando",
        studyingLine:
          "Python, fundamentos de segurança em aplicações web (OWASP e autenticação) e IA aplicada a produtos web.",
      },
      introTitle: "Introdução",
      introPoints: [
        "Sou engenheiro fullstack focado em SaaS multi-tenant, integrações e fluxos críticos como autenticação, billing e pagamentos.",
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
      { category: "Front-end", items: sharedSkills.frontend },
      { category: "Back-end", items: sharedSkills.backend },
      { category: "Qualidade", items: sharedSkills.quality },
      { category: "Cloud/DevOps", items: sharedSkills.cloud },
      { category: "Bancos de Dados", items: sharedSkills.databases },
      { category: "Arquitetura", items: sharedSkills.architecture },
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
      locationValue: "Brasil / Remoto",
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
      caseStudy: "ONG Case",
      about: "About",
      resume: "Resume",
      contact: "Contact",
    },
    actions: {
      viewProjects: "View Projects",
      contact: "Contact",
      downloadResume: "Download Resume",
      viewDetails: "View details",
      caseStudy: "Case",
      repository: "Repo",
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
      heroMainCaseCtaLabel: "View case: ONG Tudo por Amor",
      heroMainCaseCtaAriaLabel:
        "View main case study ONG Tudo por Amor with architecture, technical decisions and production impact",
      projectsMainCaseHighlight: {
        badge: "Main case",
        lineOne:
          "ONG Tudo por Amor: institutional platform with headless CMS, technical SEO and ISR.",
        lineTwo:
          "Case focused on editorial autonomy, financial transparency, and stable production delivery.",
        ctaLabel: "Read full case study",
      },
      caseTitle: "Deep Case Study",
      caseDescription:
        "ONG Tudo por Amor: real context, technical decisions, and operational impact.",
      caseContextLabel: "Context",
      caseCta: "View full case study",
      caseQuickSummaryTitle: "Quick case summary",
      caseQuickSummaryBullets: [
        "Problem: content publishing depended on technical support, creating operational bottlenecks.",
        "Problem: institutional and transparency content was fragmented, with inconsistent SEO.",
        "Solution: Next.js + Sanity CMS architecture to provide editorial autonomy without deployments.",
        "Solution: dynamic routes with ISR and webhook revalidation for fresh and fast content delivery.",
        "Result: NGO staff gained autonomy and a faster editorial workflow.",
        "Result: transparency structure and SEO became more consistent, improving institutional clarity.",
      ],
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
      galleryLabel: "Product gallery",
      overviewLabel: "Overview",
      architectureLabel: "Architecture",
      engineeringHighlightsLabel: "Engineering Highlights",
      technicalDecisionsLabel: "Technical Decisions",
      impactLabel: "Impact",
      metricsLabel: "Metrics",
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
      homeAbout: {
        layerOneLines: [
          "I am a full-stack engineer focused on real products, not demos.",
          "I work on SaaS platforms with multi-tenant architecture, integrations, and critical operational flows.",
          "I deliver end-to-end: UI, APIs, data, authentication, and production rollout.",
          "My focus is balancing delivery speed with sustainable technical foundations.",
          "I prioritize performance, SEO, architectural clarity, and long-term maintainability.",
          "I have hands-on experience with payments, webhooks, headless CMS, and admin platforms.",
          "If the challenge is taking a product to production with technical accountability, I am a strong fit.",
        ],
        expandLabel: "See details about how I work",
        workTitle: "How I work",
        workBullets: [
          "I start from business pain points and critical flows before choosing implementation details.",
          "I design systems to evolve without rework: clear modules, API contracts, and strong typing.",
          "I treat reliability as a product requirement: validation, idempotency, logs, and traceability.",
          "I ship in short cycles with focus on measurable impact for users and operations.",
        ],
        deliveredTitle: "What I have delivered",
        deliveredBullets: [
          "ONG Tudo por Amor: Next.js + Sanity CMS platform with technical SEO and ISR for editorial autonomy.",
          "ÓticaPlus and Provedor Connect: SaaS products with multi-tenant context, RBAC, and external integrations.",
          "Tia Emília and Digital.Net: payment and operations flows with async webhooks and validated APIs.",
        ],
        studyingTitle: "Currently studying",
        studyingLine:
          "Python, web application security fundamentals (OWASP and authentication), and AI applied to web products.",
      },
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
