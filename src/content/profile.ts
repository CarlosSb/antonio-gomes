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
  cloud: ["AWS (Lambda, API Gateway, SQS, DynamoDB, S3)", "Git"],
  databases: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
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
        "Desenvolvedor de Software Fullstack com 4+ anos de experiência no ecossistema JavaScript (React.js, Next.js e Node.js), atuando na evolução de plataformas de automação e chatbots em cenários de crescimento e maior complexidade. Tenho experiência com modernização de legados, arquiteturas escaláveis, performance, testes automatizados, virtualização, caching, cloud AWS e arquiteturas desacopladas. Atualmente também exploro integração de aplicações com IA e LLMs.",
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
        "Sou Antonio. Tenho 4+ anos evoluindo plataformas de automação e chatbots com React, Next.js e Node.js, com foco em performance, escalabilidade, testes automatizados e operação em produção.",
      aboutLinkLabel: "Minha trajetória e forma de trabalhar →",
      tags: ["Automação e chatbots", "AWS serverless e integrações", "Performance e escalabilidade"],
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
          "Sou desenvolvedor fullstack com 4+ anos no ecossistema JavaScript, com experiência na evolução de plataformas de automação e chatbots.",
          "Tenho vivência com modernização de legados, performance, testes automatizados, virtualização, caching e arquiteturas desacopladas.",
          "Na Ligo.cloud, continuei a evolução do Ligo Bots, contribuindo também em iniciativas de migração para AWS e arquitetura serverless.",
          "Na Code7, atuei na sustentação e evolução da Boteria, equilibrando legado, integrações e entrega contínua de novas funcionalidades.",
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
          "ÓticaPlus: SaaS multi-tenant para óticas com propostas compartilháveis, pedidos/OS, financeiro, vitrine pública, WhatsApp Agent, QR/OCR e governança por tenant.",
          "Provedor Connect e Digital.Net: produtos para ISP com autoatendimento, painel admin, APIs e padronização operacional.",
          "Gordo Construções e Tia Emília: fluxos de catálogo, leads, pagamento e automação com foco em operação real.",
        ],
        studyingTitle: "Agora estudando",
        studyingLine:
          "Python, fundamentos de segurança em aplicações web (OWASP e autenticação), IA aplicada a produtos web e inglês autodidata para comunicação técnica.",
      },
      introTitle: "Introdução",
      introPoints: [
        "Sou desenvolvedor fullstack com foco em plataformas de automação, chatbots, integrações e fluxos críticos em produto.",
        "Trabalho no front e no back, atuando com React, Next.js, Node.js, APIs, filas, banco de dados e entrega em produção.",
        "Tenho experiência com modernização de legados, performance, testes automatizados, caching e arquiteturas mais desacopladas.",
        "Costumo agregar mais valor em times que precisam evoluir produto sem perder estabilidade, manutenibilidade e visão de longo prazo.",
      ],
      timelineTitle: "Linha da Carreira",
      timelineItems: [
        {
          company: "Ligo.cloud",
          period: "Apr 2024 – Apr 2025",
          role: "Analista de Desenvolvimento de Sistemas",
          highlights: [
            "Continuidade da atuação no Ligo Bots após a transição da Code7, com foco em escalabilidade e atendimento a maiores volumes.",
            "Participação em iniciativas de migração de GCP para AWS e evolução de infraestrutura para suportar crescimento do produto.",
            "Desenvolvimento de funcionalidades serverless com AWS Lambda, API Gateway, SQS, DynamoDB e S3.",
            "Apoio à evolução para arquiteturas mais desacopladas, com testes automatizados, performance e maior manutenibilidade.",
          ],
        },
        {
          company: "Code7",
          period: "May 2021 – Apr 2024",
          role: "Analista de Desenvolvimento de Sistemas",
          highlights: [
            "Atuação no desenvolvimento e sustentação da Code7 Boteria, plataforma low-code para criação e gestão de chatbots.",
            "Participação na modernização de um sistema legado, com interfaces em React e backend Node.js para orquestração e processamento assíncrono.",
            "Experiência com MongoDB, Redis e integrações com APIs externas em cenários de maior volume e evolução contínua do produto.",
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
            "SaaS multi-tenant com vitrine pública, propostas, pedidos/OS, financeiro, WhatsApp Agent e operação ponta a ponta.",
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
        role: "Analista de Desenvolvimento de Sistemas",
        bullets: [
          "Continuidade da atuação no produto iniciado na Code7 Boteria após a transição estrutural para a Ligo.cloud.",
          "Atuação na evolução do Ligo Bots, plataforma low-code para jornadas conversacionais com foco em escalabilidade e maior volume.",
          "Participação em iniciativas de migração de GCP para AWS para suportar crescimento, carga e performance.",
          "Desenvolvimento de funcionalidades serverless com AWS Lambda, API Gateway, SQS, DynamoDB e S3.",
          "Apoio na evolução para arquiteturas mais desacopladas, com foco em manutenibilidade, testabilidade e testes automatizados.",
          "Atuação orientada a performance e escalabilidade em um contexto de produto em expansão.",
        ],
      },
      {
        company: "Code7",
        period: "May 2021 – Apr 2024",
        role: "Analista de Desenvolvimento de Sistemas",
        bullets: [
          "Atuação no desenvolvimento e sustentação da Code7 Boteria, plataforma low-code para criação e gestão de chatbots.",
          "Participação na modernização de um sistema legado, equilibrando sustentação e evolução contínua do produto.",
          "Desenvolvimento de interfaces em React (SPA), com foco em usabilidade e performance em fluxos complexos.",
          "Integração com backend Node.js em módulos de orquestração, processamento assíncrono e uso de filas.",
          "Experiência com MongoDB e Redis em cenários de grande volume de dados e necessidade de otimização de acesso.",
          "Implementação de integrações com múltiplas APIs externas para suportar automações e jornadas conversacionais.",
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
        "Full-stack software developer with 4+ years of experience in the JavaScript ecosystem (React.js, Next.js, and Node.js), working on the evolution of automation and chatbot platforms in growth and higher-complexity scenarios. I have experience with legacy modernization, scalable architectures, performance, automated testing, virtualization, caching, AWS cloud, and decoupled architectures. I am also currently exploring application integrations with AI and LLMs.",
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
        "I'm Antonio. I have 4+ years evolving automation and chatbot platforms with React, Next.js, and Node.js, with a strong focus on performance, scalability, automated testing, and production operations.",
      aboutLinkLabel: "My background and how I work →",
      tags: ["Automation and chatbots", "AWS serverless and integrations", "Performance and scalability"],
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
          "I am a full-stack developer with 4+ years in the JavaScript ecosystem, with hands-on experience evolving automation and chatbot platforms.",
          "My background includes legacy modernization, performance work, automated testing, virtualization, caching, and decoupled architectures.",
          "At Ligo.cloud, I continued the evolution of Ligo Bots while contributing to AWS migration initiatives and serverless architecture.",
          "At Code7, I worked on the maintenance and evolution of Boteria, balancing legacy constraints, integrations, and continuous feature delivery.",
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
          "ÓticaPlus: multi-tenant SaaS for optical stores with shareable quotes, orders, finance, public storefronts, WhatsApp Agent, QR/OCR, and tenant governance.",
          "Provedor Connect and Digital.Net: ISP products with self-service, admin dashboards, APIs, and operational standardization.",
          "Gordo Construções and Tia Emília: catalog, lead, payment, and automation flows focused on real-world operations.",
        ],
        studyingTitle: "Currently studying",
        studyingLine:
          "Python, web application security fundamentals (OWASP and authentication), AI applied to web products, and self-taught English for technical communication.",
      },
      introTitle: "Introduction",
      introPoints: [
        "I am a full-stack developer focused on automation platforms, chatbots, integrations, and critical product flows.",
        "I work across frontend and backend, handling React, Next.js, Node.js, APIs, queues, databases, and production delivery.",
        "My experience includes legacy modernization, performance work, automated testing, caching, and more decoupled architectures.",
        "I add the most value in teams that need to evolve products without losing stability, maintainability, or long-term technical vision.",
      ],
      timelineTitle: "Career Timeline",
      timelineItems: [
        {
          company: "Ligo.cloud",
          period: "Apr 2024 – Apr 2025",
          role: "Systems Development Analyst",
          highlights: [
            "Continued working on Ligo Bots after the transition from Code7, focusing on scalability and larger-volume conversational flows.",
            "Contributed to GCP-to-AWS migration initiatives and infrastructure changes to support product growth.",
            "Built serverless features with AWS Lambda, API Gateway, SQS, DynamoDB, and S3.",
            "Supported the move toward more decoupled architectures, with emphasis on automated testing, performance, and maintainability.",
          ],
        },
        {
          company: "Code7",
          period: "May 2021 – Apr 2024",
          role: "Systems Development Analyst",
          highlights: [
            "Worked on the development and maintenance of Code7 Boteria, a low-code platform for creating and managing chatbots.",
            "Participated in the modernization of a legacy system, with React interfaces and Node.js backend modules for orchestration and async processing.",
            "Worked with MongoDB, Redis, and multiple external APIs in higher-volume product scenarios.",
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
            "Multi-tenant SaaS with public storefronts, quotes, orders, finance, WhatsApp Agent, and end-to-end operations.",
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
        role: "Systems Development Analyst",
        bullets: [
          "Continued working on the product that started as Code7 Boteria after the structural transition to Ligo.cloud.",
          "Worked on the evolution of Ligo Bots, a low-code platform for conversational journeys with focus on scalability and larger volumes.",
          "Contributed to GCP-to-AWS migration initiatives to support growth, load, and performance.",
          "Developed serverless features using AWS Lambda, API Gateway, SQS, DynamoDB, and S3.",
          "Supported the move toward more decoupled architectures, with focus on maintainability, testability, and automated testing.",
          "Worked with strong attention to performance and scalability in a growing product context.",
        ],
      },
      {
        company: "Code7",
        period: "May 2021 – Apr 2024",
        role: "Systems Development Analyst",
        bullets: [
          "Worked on the development and maintenance of Code7 Boteria, a low-code platform for creating and managing chatbots.",
          "Participated in the modernization of a legacy system while balancing support work and continuous product evolution.",
          "Built React SPA interfaces with focus on usability and performance in complex flows.",
          "Integrated with Node.js backend modules for orchestration, asynchronous processing, and queue-based workflows.",
          "Worked with MongoDB and Redis in higher-volume scenarios with optimization needs.",
          "Implemented integrations with multiple external APIs to support automation and conversational journeys.",
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
