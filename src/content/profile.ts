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
  whatsappLabel: string;
  whatsappAriaLabel: string;
  whatsappMessage: string;
  whatsappResponseTime: string;
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
    {
      title: "Inglês (Autodidata)",
      description:
        "Evolução contínua e autodidata para comunicação técnica clara em contexto internacional (documentação, reuniões e colaboração).",
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
    {
      title: "English (Self-taught)",
      description:
        "Continuous self-taught improvement for clear technical communication in international contexts (documentation, meetings, and collaboration).",
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
        "Desenvolvedor fullstack com 4+ anos construindo produtos com Next.js, TypeScript, Node.js e PostgreSQL, atuando em SaaS, painéis administrativos, integrações críticas, autenticação, billing e operação em produção.",
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
      availability: "Disponível para vagas remotas",
      badge: "",
      headlineLead: "Desenvolvedor fullstack para",
      headlineAccent: "SaaS, painéis admin e integrações críticas.",
      description:
        "Sou Antonio. Tenho 4+ anos construindo produtos com Next.js, TypeScript, Node.js e PostgreSQL, atuando em front-end, APIs, autenticação, billing, webhooks e operação em produção.",
      aboutLinkLabel: "Minha trajetória e forma de trabalhar →",
      tags: ["SaaS e multi-tenant", "Auth, billing e webhooks", "Painéis admin e autoatendimento"],
    },
    homePage: {
      selectedWorkTitle: "Cases em Destaque",
      selectedWorkDescription:
        "Seleção de cases reais que representam meu trabalho com produto, arquitetura e operação em produção.",
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
        "Aberto a vagas fullstack remotas em produtos que precisam de autonomia técnica.",
      finalCtaDescription:
        "Se você busca alguém para tocar front e back com responsabilidade, clareza arquitetural e foco em produção, vamos conversar.",
    },
    projectsPage: {
      title: "Projetos",
      description:
        "Cases com foco em arquitetura, integrações, fluxo de produto e entrega em produção.",
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
        "Construo produtos web que precisam funcionar de verdade, do front-end à operação em produção.",
      homeAbout: {
        layerOneLines: [
          "Sou desenvolvedor fullstack com 4+ anos no ecossistema JavaScript, atuando principalmente com Next.js, Node.js e TypeScript.",
          "Gosto de produtos que combinam interface, regras de negócio, integrações e operação real no dia a dia.",
          "Na Ligo.cloud, trabalhei na evolução do Ligo Bots, com foco em performance, estabilidade e entrega contínua.",
          "Na Code7, atuei em uma plataforma low-code de automação, lidando com integrações, escalabilidade e manutenção de produto.",
        ],
        expandLabel: "Ver detalhes sobre como eu trabalho",
        workTitle: "Como eu trabalho",
        workBullets: [
          "Começo pelo problema de negócio e pelos fluxos mais críticos antes de discutir stack ou arquitetura.",
          "Busco estruturas simples de manter: módulos claros, contratos previsíveis e tipagem forte.",
          "Trato confiabilidade como parte do produto: validação, idempotência, logs e rastreabilidade.",
          "Prefiro entregas curtas e frequentes, com foco em impacto real para usuário e operação.",
        ],
        deliveredTitle: "O que eu já entreguei",
        deliveredBullets: [
          "ONG Tudo por Amor: site institucional com CMS headless, SEO técnico e autonomia editorial para a equipe.",
          "ÓticaPlus: SaaS multi-tenant com CRM, billing, OCR com IA e governança de acesso por contexto.",
          "Provedor Connect e Digital.Net: produtos para ISP com autoatendimento, painel admin, APIs e padronização operacional.",
          "Gordo Construções e Tia Emília: fluxos de catálogo, leads, pagamento e automação com foco em operação real.",
        ],
        studyingTitle: "Agora estudando",
        studyingLine:
          "Python, fundamentos de segurança em aplicações web (OWASP e autenticação), IA aplicada a produtos web e inglês autodidata para comunicação técnica.",
      },
      introTitle: "Introdução",
      introPoints: [
        "Sou desenvolvedor fullstack focado em produtos com integrações, autenticação, billing, pagamentos e webhooks.",
        "Trabalho no front e no back, cuidando de interface, APIs, banco de dados e entrega em produção.",
        "Procuro equilibrar velocidade com manutenção, observabilidade e segurança básica.",
        "Costumo agregar mais valor em times que precisam de alguém com autonomia para atravessar produto e engenharia.",
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
        "Produtos SaaS e plataformas operacionais que concentram fluxo de negócio em um só lugar.",
        "Integrações com pagamentos, webhooks, APIs externas e regras de acesso com foco em confiabilidade.",
        "Refatoração de APIs e fluxos para reduzir fricção, retrabalho e risco operacional.",
      ],
      proofTitle: "Provas",
      proofDescription:
        "Cases reais que mostram o tipo de problema que eu resolvo, as decisões que tomo e o impacto da entrega em produção.",
      proofProjects: [
        {
          slug: "ong-tudo-por-amor",
          title: "ONG Tudo por Amor",
          description:
            "Site institucional com CMS headless, SEO técnico e autonomia editorial.",
        },
        {
          slug: "otica-plus",
          title: "ÓticaPlus",
          description:
            "SaaS multi-tenant com CRM, billing e operação integrada ponta a ponta.",
        },
        {
          slug: "digital-net-telecom",
          title: "Digital.Net Telecom",
          description:
            "Plataforma fullstack com arquitetura multi-cidade, painel admin e APIs validadas.",
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
        "Experiência prática com SaaS, integrações, billing, performance e arquitetura escalável.",
        "Foco em produto, qualidade técnica e execução ponta a ponta.",
      ],
      lastUpdateLabel: "Última atualização",
      lastUpdateValue: "Fevereiro de 2026",
    },
    contactPage: {
      title: "Contato",
      description:
        "Converso sobre vagas fullstack remotas e oportunidades em times de produto que precisem de alguém para atuar ponta a ponta.",
      whatsappLabel: "Conversar sobre oportunidade",
      whatsappAriaLabel: "Chamar no WhatsApp para conversar sobre oportunidade",
      whatsappMessage:
        "Oi Antônio! Vi seu portfólio e quero conversar sobre uma oportunidade.",
      whatsappResponseTime: "Respondo em até 24h.",
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
        "Portfólio de Antonio Gomes, desenvolvedor fullstack com foco em SaaS, painéis administrativos, integrações críticas e produtos em produção.",
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
      tagline: "Desenvolvedor fullstack para produtos digitais com operação real.",
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
        "Full-stack developer with 4+ years building products with Next.js, TypeScript, Node.js, and PostgreSQL, working across SaaS, admin dashboards, critical integrations, authentication, billing, and production operations.",
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
      availability: "Open to remote roles",
      badge: "",
      headlineLead: "Full-stack developer for",
      headlineAccent: "SaaS, admin dashboards, and critical integrations.",
      description:
        "I'm Antonio. I have 4+ years building products with Next.js, TypeScript, Node.js, and PostgreSQL, working across frontend, APIs, authentication, billing, webhooks, and production operations.",
      aboutLinkLabel: "My background and how I work →",
      tags: ["SaaS and multi-tenant", "Auth, billing, and webhooks", "Admin dashboards and self-service"],
    },
    homePage: {
      selectedWorkTitle: "Featured Case Studies",
      selectedWorkDescription:
        "A curated selection of real projects that represent my work across product, architecture, and production delivery.",
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
        "Open to remote full-stack roles in products that need strong technical ownership.",
      finalCtaDescription:
        "If you need someone who can handle frontend and backend with responsibility, architectural clarity, and production focus, let's talk.",
    },
    projectsPage: {
      title: "Projects",
      description:
        "Case studies focused on architecture, integrations, product flow, and production delivery.",
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
        "The requested case study is not available. You can return to the complete projects list.",
    },
    aboutPage: {
      title: "About",
      description:
        "I build web products that need to work in the real world, from frontend to production operations.",
      homeAbout: {
        layerOneLines: [
          "I am a full-stack developer with 4+ years in the JavaScript ecosystem, working mainly with Next.js, Node.js, and TypeScript.",
          "I enjoy products that mix interface, business rules, integrations, and real operational workflows.",
          "At Ligo.cloud, I worked on the evolution of Ligo Bots, focusing on performance, stability, and continuous delivery.",
          "At Code7, I contributed to a low-code automation platform, dealing with integrations, scalability, and long-term product maintenance.",
        ],
        expandLabel: "See details about how I work",
        workTitle: "How I work",
        workBullets: [
          "I start from the business problem and the most critical flows before discussing stack or architecture.",
          "I aim for systems that are easy to maintain: clear modules, predictable contracts, and strong typing.",
          "I treat reliability as part of the product: validation, idempotency, logs, and traceability.",
          "I prefer short, frequent deliveries focused on real impact for users and operations.",
        ],
        deliveredTitle: "What I have delivered",
        deliveredBullets: [
          "ONG Tudo por Amor: institutional website with headless CMS, technical SEO, and editorial autonomy for the team.",
          "ÓticaPlus: multi-tenant SaaS with CRM, billing, AI-powered OCR, and context-based access control.",
          "Provedor Connect and Digital.Net: ISP products with self-service, admin dashboards, APIs, and operational standardization.",
          "Gordo Construções and Tia Emília: catalog, lead, payment, and automation flows focused on real-world operations.",
        ],
        studyingTitle: "Currently studying",
        studyingLine:
          "Python, web application security fundamentals (OWASP and authentication), AI applied to web products, and self-taught English for technical communication.",
      },
      introTitle: "Introduction",
      introPoints: [
        "I am a full-stack developer focused on products with integrations, authentication, billing, payments, and webhooks.",
        "I work across frontend and backend, handling interface, APIs, data, and production delivery.",
        "I try to balance speed with maintainability, observability, and baseline security.",
        "I add the most value in teams that need someone with enough autonomy to move across product and engineering.",
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
        "SaaS products and operational platforms that bring core business flows into one place.",
        "Integrations with payments, webhooks, external APIs, and access rules with a reliability-first mindset.",
        "API and workflow refactoring that reduces friction, rework, and operational risk.",
      ],
      proofTitle: "Proof",
      proofDescription:
        "Real projects that show the kinds of problems I solve, the decisions I make, and the impact of shipping to production.",
      proofProjects: [
        {
          slug: "ong-tudo-por-amor",
          title: "ONG Tudo por Amor",
          description:
            "Institutional website with headless CMS, technical SEO, and editorial autonomy.",
        },
        {
          slug: "otica-plus",
          title: "ÓticaPlus",
          description:
            "Multi-tenant SaaS with CRM, billing, and integrated end-to-end operations.",
        },
        {
          slug: "digital-net-telecom",
          title: "Digital.Net Telecom",
          description:
            "Fullstack ISP platform with multi-city architecture, admin dashboard, and validated APIs.",
        },
      ],
      proofLinkLabel: "View case",
      exploringTitle: "Exploring now",
      exploringDescription:
        "Continuous study tracks to expand technical capability and product thinking.",
    },
    resumePage: {
      title: "Resume",
      description: "Download my resume in Portuguese or English PDF formats.",
      downloadTitle: "Downloads",
      highlights: [
        "4+ years building fullstack production systems.",
        "Hands-on work with SaaS, integrations, billing, performance, and scalable architecture.",
        "Strong focus on product, technical quality, and end-to-end execution.",
      ],
      lastUpdateLabel: "Last update",
      lastUpdateValue: "February 2026",
    },
    contactPage: {
      title: "Contact",
      description:
        "I am open to remote full-stack roles and product teams that need someone who can work end to end.",
      whatsappLabel: "Talk about an opportunity",
      whatsappAriaLabel: "Open WhatsApp to talk about an opportunity",
      whatsappMessage:
        "Hi Antonio! I saw your portfolio and would like to talk about an opportunity.",
      whatsappResponseTime: "I usually reply within 24 hours.",
      copyEmailLabel: "Copy email",
      copyEmailSuccess: "Copied!",
    },
    sections: {
      experience: "Experience",
      skills: "Skills",
      studyAreas: "Study Areas",
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
        "Portfolio of Antonio Gomes, a full-stack developer focused on SaaS, admin dashboards, critical integrations, and production systems.",
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
      tagline: "Full-stack developer for digital products with real operations.",
      locationLabel: "Location",
      locationValue: "Brazil / Remote",
      navigationTitle: "Navigation",
      contactTitle: "Contact",
      buildLine: "Built with Next.js • Hosted on Vercel",
      backToTop: "Back to top",
    },
  },
};
