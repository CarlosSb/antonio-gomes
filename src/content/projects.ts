import type { Locale } from "@/content/profile";

type LocalizedText = string | Record<Locale, string>;
type LocalizedList = string[] | Record<Locale, string[]>;

export type ProjectLink = {
  label: string;
  href: string;
};

export type ProjectScreenshot = {
  src: string;
  alt: LocalizedText;
  type?: "image" | "video";
  poster?: string;
  caption?: LocalizedText;
};

export type ProjectMetric = {
  label: LocalizedText;
  value: LocalizedText;
};

export type Project = {
  slug: string;
  title: string;
  mainCase?: boolean;
  cardImage?: ProjectScreenshot;
  shortDescription?: LocalizedText;
  liveUrl?: string;
  stack: string[];
  summary?: LocalizedText;
  description?: LocalizedText;
  challenge?: LocalizedText;
  solution?: LocalizedText;
  results?: LocalizedList;
  highlights?: LocalizedList;
  architecture?: LocalizedList;
  technicalDecisions?: LocalizedList;
  impact?: LocalizedList;
  gallery?: ProjectScreenshot[];
  metrics?: ProjectMetric[];
  links?: ProjectLink[];
  featured?: boolean;
  seoTitle?: string;
};

export const projects: Project[] = [
  {
    slug: "ong-tudo-por-amor",
    title: "ONG Tudo por Amor",
    mainCase: true,
    cardImage: {
      src: "/cases/ong/video-ong-tudo-por-amor.mp4",
      type: "video",
      poster: "/cases/ong/home.png",
      alt: {
        pt: "Vídeo de destaque do projeto ONG Tudo por Amor",
        en: "Featured video for ONG Tudo por Amor project",
      },
    },
    shortDescription: {
      pt: "Site institucional para ONG com CMS headless, SEO técnico e atualização sem depender de deploy.",
      en: "Institutional website for an NGO with a headless CMS, technical SEO, and content updates without deployment dependency.",
    },
    description: {
      pt: `Projeto institucional desenvolvido com Next.js 16 e Sanity CMS para centralizar adoção, transparência financeira e comunicação da ONG.
A solução foi pensada para facilitar o dia a dia da equipe, melhorar a presença orgânica e dar mais consistência à publicação de conteúdo.`,
      en: `Institutional project built with Next.js 16 and Sanity CMS to centralize adoption, financial transparency, and the NGO's communication.
The solution was designed to make content operations easier for the team, improve organic presence, and bring more consistency to publishing.`,
    },
    challenge: {
      pt: `O conteúdo institucional estava disperso, a publicação dependia de suporte técnico e a área de transparência não tinha uma estrutura clara.
Isso dificultava atualização, prestação de contas e consistência de SEO.`,
      en: `Institutional content was fragmented, publishing depended on technical support, and the transparency area lacked a clear structure.
That made updates, accountability, and SEO consistency harder than they should be.`,
    },
    solution: {
      pt: `Desenvolvi uma arquitetura headless com Next.js + Sanity para que a equipe pudesse publicar e atualizar conteúdo sem depender de deploy.
Estruturei rotas dinâmicas para adoção, notícias e relatórios, com ISR, revalidação por webhook, sitemap e dados estruturados.
O resultado foi um fluxo editorial mais simples, rápido e sustentável.`,
      en: `I built a headless architecture with Next.js + Sanity so the team could publish and update content without depending on deploys.
I structured dynamic routes for adoption, news, and reports, with ISR, webhook revalidation, sitemap generation, and structured data.
The result was a simpler, faster, and more sustainable editorial workflow.`,
    },
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Sanity CMS",
      "Tailwind CSS",
      "Vercel",
    ],
    highlights: {
      pt: [
        "Arquitetura com CMS headless",
        "Server Components + ISR",
        "Revalidação sob demanda via webhook",
        "Geração dinâmica de sitemap",
        "SEO com dados estruturados (JSON-LD)",
      ],
      en: [
        "Headless CMS architecture",
        "Server Components + ISR",
        "On-demand revalidation via webhook",
        "Dynamic sitemap generation",
        "SEO with structured data (JSON-LD)",
      ],
    },
    architecture: {
      pt: [
        "Next.js App Router com Server Components",
        "Integração com Sanity Content Lake",
        "Invalidação de cache baseada em webhook",
        "Rotas dinâmicas para adoção, notícias e relatórios",
      ],
      en: [
        "Next.js App Router with Server Components",
        "Sanity Content Lake integration",
        "Webhook-based cache invalidation",
        "Dynamic routes for adoption, news and reports",
      ],
    },
    technicalDecisions: {
      pt: [
        "Escolhi CMS headless em vez de conteúdo hardcoded no código para dar autonomia editorial sem depender de deploy.",
        "Escolhi ISR + revalidação sob demanda em vez de SSR em todas as requisições para equilibrar performance e atualização rápida.",
        "Escolhi SEO centralizado (JSON-LD + sitemap dinâmico) em vez de configuração manual por página para reduzir inconsistência de indexação.",
      ],
      en: [
        "I chose a headless CMS instead of hardcoded content to enable editorial autonomy without deployments.",
        "I chose ISR + on-demand revalidation instead of full SSR to balance speed and content freshness.",
        "I chose centralized SEO (JSON-LD + dynamic sitemap) instead of manual per-page setup to reduce indexing inconsistency.",
      ],
    },
    impact: {
      pt: [
        "Autonomia editorial para equipe da ONG com atualização sem deploy.",
        "ISR + revalidação por webhook para conteúdo atualizado com boa performance.",
      ],
      en: [
        "Enabled editorial autonomy for NGO staff without deploy dependency.",
        "ISR + webhook revalidation kept content fresh with stable performance.",
      ],
    },
    gallery: [
      {
        src: "/cases/ong/overview.svg",
        alt: {
          pt: "Visão institucional da plataforma ONG Tudo por Amor",
          en: "Institutional overview for ONG Tudo por Amor platform",
        },
        caption: {
          pt: "Página institucional com conteúdo dinâmico e navegação orientada à adoção.",
          en: "Institutional page with dynamic content and adoption-focused navigation.",
        },
      },
      {
        src: "/cases/ong/adocao.svg",
        alt: {
          pt: "Fluxo de adoção com listagem dinâmica de animais",
          en: "Adoption flow with dynamic animal listings",
        },
        caption: {
          pt: "Rotas dinâmicas para jornada de adoção e atualização editorial rápida.",
          en: "Dynamic routes for the adoption journey and fast editorial updates.",
        },
      },
      {
        src: "/cases/ong/transparencia.svg",
        alt: {
          pt: "Página de transparência financeira com estrutura organizada",
          en: "Financial transparency page with structured information",
        },
        caption: {
          pt: "Transparência financeira com estrutura clara para prestação de contas.",
          en: "Financial transparency with clear accountability structure.",
        },
      },
      {
        src: "/cases/ong/cms.svg",
        alt: {
          pt: "Fluxo de publicação no CMS utilizado pela ONG",
          en: "CMS publishing workflow used by NGO staff",
        },
        caption: {
          pt: "Autonomia editorial: equipe da ONG publica e atualiza sem depender de deploy.",
          en: "Editorial autonomy: NGO staff publishes and updates without deploy dependency.",
        },
      },
    ],
    metrics: [
      {
        label: { pt: "Lighthouse", en: "Lighthouse" },
        value: {
          pt: "Mobile: [preencher] | Desktop: [preencher]",
          en: "Mobile: [fill] | Desktop: [fill]",
        },
      },
      {
        label: { pt: "Tempo de publicação", en: "Publishing time" },
        value: {
          pt: "Antes: [preencher] -> Depois: [preencher]",
          en: "Before: [fill] -> After: [fill]",
        },
      },
      {
        label: { pt: "SEO / Google Search Console", en: "SEO / Google Search Console" },
        value: {
          pt: "Impressões: [preencher] | Cliques: [preencher] | CTR: [preencher]",
          en: "Impressions: [fill] | Clicks: [fill] | CTR: [fill]",
        },
      },
    ],
    results: {
      pt: [
        "Antes: atualizar conteúdo dependia de suporte técnico -> Depois: equipe da ONG publica com autonomia no CMS.",
        "Antes: transparência financeira era fragmentada -> Depois: relatórios e páginas ficaram organizados em uma estrutura única.",
        "Antes: publicar e atualizar conteúdo era mais lento -> Depois: ISR + revalidação seletiva deixaram a entrega mais ágil e previsível.",
      ],
      en: [
        "Before: content updates depended on technical support -> After: the NGO team could publish autonomously in the CMS.",
        "Before: financial transparency was fragmented -> After: reports and pages were organized into a single clear structure.",
        "Before: publishing and updating content was slower -> After: ISR + selective revalidation made delivery faster and more predictable.",
      ],
    },
    links: [
      {
        label: "Live",
        href: "https://www.ongtudoporamor.org.br/",
      },
      {
        label: "Repo",
        href: "https://github.com/carlossb",
      },
    ],
    featured: true,
    seoTitle: "ONG Tudo por Amor | Antonio Gomes",
  },
  {
    slug: "digital-net-telecom",
    title: "Digital.Net Telecom – Plataforma ISP Multi-Cidade",
    featured: true,
    cardImage: {
      src: "/cases/digital-net-telecom/home.png",
      alt: {
        pt: "Tela inicial do projeto Digital.Net Telecom",
        en: "Digital.Net Telecom home screen",
      },
    },
    shortDescription: {
      pt: "Plataforma fullstack para ISP com arquitetura multi-cidade, painel admin e APIs validadas para uma operação mais previsível.",
      en: "Fullstack ISP platform with multi-city architecture, admin dashboard, and validated APIs for a more predictable operation.",
    },
    description: {
      pt: `Produto fullstack para a operação digital de um provedor com múltiplas cidades, reunindo landing pages, gestão de conteúdo e painel administrativo em uma base única.
O foco foi padronizar fluxos, reduzir inconsistência entre unidades e trazer mais previsibilidade para a operação.`,
      en: `Fullstack product for the digital operation of an ISP across multiple cities, combining landing pages, content management, and an admin dashboard in one platform.
The main goal was to standardize flows, reduce inconsistency between units, and bring more predictability to operations.`,
    },
    challenge: {
      pt: `A operação digital estava espalhada em páginas e fluxos desconectados.
Isso gerava inconsistência entre cidades, retrabalho em conteúdo e pouca padronização nas APIs.`,
      en: `The digital operation was spread across disconnected pages and workflows.
That created inconsistency between cities, repeated content work, and weak API standardization.`,
    },
    solution: {
      pt: `Estruturei uma plataforma fullstack com arquitetura multi-cidade e um painel administrativo modular.
Padronizei a camada de APIs com validações formais e cobertura de testes unitários e e2e.
Também reorganizei as landing pages para manter consistência operacional e comercial entre as unidades.`,
      en: `I structured a fullstack platform with multi-city architecture and a modular admin dashboard.
I standardized the API layer with formal validation and unit/e2e test coverage.
I also reorganized the landing pages to keep both operational and commercial consistency across city units.`,
    },
    stack: [
      "Next.js 15",
      "React",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "NextAuth",
      "Zod",
      "React Query",
      "Jest",
      "Playwright",
      "OpenAI SDK",
    ],
    architecture: {
      pt: [
        "Estrutura modular com App Router",
        "Camada de API no padrão BFF",
        "Organização de componentes orientada a domínio",
        "Isolamento lógico multi-cidade",
        "Endpoints REST validados",
      ],
      en: [
        "App Router modular structure",
        "BFF API layer",
        "Domain-oriented component organization",
        "Multi-city logical isolation",
        "Validated REST endpoints",
      ],
    },
    technicalDecisions: {
      pt: [
        "Escolhi estrutura orientada a domínio em vez de organização por tipo de arquivo para reduzir acoplamento entre módulos.",
        "Escolhi validação com Zod na fronteira das APIs em vez de validações dispersas para manter contratos previsíveis.",
        "Escolhi suíte automatizada (unit + e2e) em vez de validação manual recorrente para reduzir regressão em fluxos críticos.",
      ],
      en: [
        "I chose domain-oriented structure instead of file-type organization to reduce coupling across modules.",
        "I chose Zod validation at API boundaries instead of scattered checks to keep contracts predictable.",
        "I chose automated unit + e2e suites instead of repeated manual validation to reduce regression in critical flows.",
      ],
    },
    highlights: {
      pt: [
        "Testes automatizados unitários e e2e",
        "Dashboard administrativo multi-módulo",
        "Otimização de landing pages para conversão",
        "Validação de API com Zod",
        "Integração com IA para recursos avançados",
      ],
      en: [
        "Automated unit and e2e testing",
        "Multi-module admin dashboard",
        "Landing page optimization for conversion",
        "API validation with Zod",
        "AI integration for enhanced functionality",
      ],
    },
    impact: {
      pt: [
        "Gestão operacional de ISP centralizada",
        "Maior consistência entre conteúdos por cidade",
        "Fluxo estruturado de gestão de leads",
      ],
      en: [
        "Centralized ISP operational management",
        "Improved consistency across city-level content",
        "Structured lead management workflow",
      ],
    },
    gallery: [
      {
        src: "/cases/digital-net-telecom/overview.png",
        alt: {
          pt: "Visão geral da plataforma Digital.Net Telecom",
          en: "Digital.Net Telecom platform overview",
        },
        caption: {
          pt: "Landing institucional com arquitetura multi-cidade e conteúdo operacional.",
          en: "Institutional landing with multi-city architecture and operational content.",
        },
      },
      {
        src: "/cases/digital-net-telecom/flow.png",
        alt: {
          pt: "Fluxo operacional e APIs da Digital.Net Telecom",
          en: "Digital.Net Telecom operational flow and APIs",
        },
        caption: {
          pt: "Fluxo de operação com validações formais e consistência entre módulos.",
          en: "Operational flow with formal validation and consistent modules.",
        },
      },
      {
        src: "/cases/digital-net-telecom/admin.png",
        alt: {
          pt: "Painel administrativo da Digital.Net Telecom",
          en: "Digital.Net Telecom admin dashboard",
        },
        caption: {
          pt: "Dashboard para gestão centralizada de operação e conteúdo.",
          en: "Dashboard for centralized operations and content management.",
        },
      },
    ],
    metrics: [
      {
        label: { pt: "Lighthouse", en: "Lighthouse" },
        value: {
          pt: "Mobile: [preencher] | Desktop: [preencher]",
          en: "Mobile: [fill] | Desktop: [fill]",
        },
      },
      {
        label: { pt: "Tempo de publicação", en: "Publishing time" },
        value: {
          pt: "Antes: [preencher] -> Depois: [preencher]",
          en: "Before: [fill] -> After: [fill]",
        },
      },
      {
        label: { pt: "SEO / Google Search Console", en: "SEO / Google Search Console" },
        value: {
          pt: "Impressões: [preencher] | Cliques: [preencher] | CTR: [preencher]",
          en: "Impressions: [fill] | Clicks: [fill] | CTR: [fill]",
        },
      },
    ],
    results: {
      pt: [
        "Antes: a operação ficava distribuída em fluxos desconectados -> Depois: a gestão passou a ser centralizada em uma única plataforma.",
        "Antes: cada cidade seguia padrões diferentes -> Depois: a estrutura multi-cidade trouxe mais consistência entre unidades.",
        "Antes: integrações sofriam mais com regressão -> Depois: APIs validadas e testadas deram mais previsibilidade à evolução do produto.",
      ],
      en: [
        "Before: operations were split across disconnected flows -> After: management became centralized in a single platform.",
        "Before: each city followed a different pattern -> After: the multi-city structure created more consistency across units.",
        "Before: integrations were more regression-prone -> After: validated, tested APIs made product evolution more predictable.",
      ],
    },
    links: [
      {
        label: "Live",
        href: "https://digital-net-telecom.vercel.app/",
      },
      {
        label: "Repo",
        href: "https://github.com/carlossb",
      },
    ],
    seoTitle: "Digital.Net Telecom | Antonio Gomes",
  },
  {
    slug: "provedor-connect",
    title: "Provedor Connect – Plataforma ISP com Integração SGP",
    featured: true,
    cardImage: {
      src: "/cases/provedor-connect/home.png",
      alt: {
        pt: "Tela inicial do projeto Provedor Connect",
        en: "Provedor Connect home screen",
      },
    },
    shortDescription: {
      pt: "Produto fullstack para ISP com autoatendimento, painel admin e integração SGP desacoplada.",
      en: "Fullstack ISP product with self-service, admin dashboard, and decoupled SGP integrations.",
    },
    description: {
      pt: `Produto fullstack criado para um provedor regional, reunindo landing pages comerciais, área do cliente e painel administrativo na mesma experiência.
O ponto central do projeto foi desacoplar a integração com SGPs para reduzir custo de manutenção e facilitar evolução do produto.`,
      en: `Fullstack product built for a regional ISP, combining commercial landing pages, a customer portal, and an admin dashboard in the same experience.
The core challenge was to decouple SGP integrations to reduce maintenance cost and make product evolution easier.`,
    },
    challenge: {
      pt: `A operação dependia de fluxos separados para área comercial, autoatendimento e gestão interna.
Além disso, cada integração com SGP aumentava acoplamento e custo de manutenção.`,
      en: `The operation relied on separate flows for the commercial area, self-service, and internal management.
On top of that, each SGP integration increased coupling and maintenance cost.`,
    },
    solution: {
      pt: `Desenvolvi uma plataforma fullstack com portal do cliente, painel administrativo e uma camada de drivers SGP desacoplada.
Implementei autenticação JWT HttpOnly, validações de entrada e fallback com mock driver para desenvolvimento local.
Assim, o produto passou a integrar múltiplos SGPs sem reescrever o núcleo da aplicação.`,
      en: `I built a fullstack platform with a customer portal, admin dashboard, and a decoupled SGP driver layer.
I implemented HttpOnly JWT authentication, input validation, and a mock-driver fallback for local development.
That allowed the product to support multiple SGP providers without rewriting the application core.`,
    },
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "React Hook Form",
      "Zod",
      "JWT (jose)",
      "bcryptjs",
    ],
    architecture: {
      pt: [
        "Arquitetura fullstack com App Router",
        "Server Actions + API Routes",
        "Estrutura modular baseada em domínio",
        "Camada de drivers SGP desacoplada",
        "Autenticação JWT HttpOnly",
      ],
      en: [
        "App Router fullstack architecture",
        "Server Actions + API Routes",
        "Domain-based modular structure",
        "Decoupled SGP driver layer",
        "JWT HttpOnly authentication",
      ],
    },
    technicalDecisions: {
      pt: [
        "Escolhi camada de drivers SGP em vez de integração direta por fornecedor para reduzir acoplamento externo.",
        "Escolhi JWT HttpOnly em vez de token exposto no cliente para reforçar segurança de sessão administrativa.",
        "Escolhi fallback com mock driver em vez de bloquear ambiente local sem SGP para acelerar desenvolvimento e testes.",
      ],
      en: [
        "I chose an SGP driver layer instead of direct provider coupling to keep integrations sustainable.",
        "I chose HttpOnly JWT sessions instead of client-exposed tokens to strengthen admin security.",
        "I chose mock-driver fallback instead of blocking local environments without SGP access to speed up development and testing.",
      ],
    },
    highlights: {
      pt: [
        "Integração SGP com múltiplos provedores",
        "Portal de autoatendimento para cliente",
        "Gestão dinâmica de conteúdo",
        "Autenticação administrativa segura",
        "Driver mock para fallback em desenvolvimento",
      ],
      en: [
        "Multi-provider SGP integration",
        "Self-service customer portal",
        "Dynamic content management",
        "Secure admin authentication",
        "Mock driver for development fallback",
      ],
    },
    impact: {
      pt: [
        "Operação digital do ISP unificada",
        "Redução de demanda de suporte via autoatendimento",
        "Menor acoplamento com sistemas externos",
      ],
      en: [
        "Unified digital operations for ISP",
        "Reduced support demand via self-service",
        "Lower coupling with external systems",
      ],
    },
    gallery: [
      {
        src: "/cases/provedor-connect/overview.png",
        alt: {
          pt: "Visão geral da plataforma Provedor Connect",
          en: "Provedor Connect platform overview",
        },
        caption: {
          pt: "Landing comercial e jornada de autoatendimento para clientes ISP.",
          en: "Commercial landing and customer self-service journey for ISP.",
        },
      },
      {
        src: "/cases/provedor-connect/flow.png",
        alt: {
          pt: "Fluxo de integração SGP na Provedor Connect",
          en: "Provedor Connect SGP integration flow",
        },
        caption: {
          pt: "Camada de drivers desacoplada para integração com múltiplos SGPs.",
          en: "Decoupled driver layer for multi-SGP integration.",
        },
      },
      {
        src: "/cases/provedor-connect/admin.png",
        alt: {
          pt: "Painel administrativo da Provedor Connect",
          en: "Provedor Connect admin dashboard",
        },
        caption: {
          pt: "Painel para operação e autenticação segura com contexto administrativo.",
          en: "Dashboard for operations and secure admin authentication.",
        },
      },
    ],
    metrics: [
      {
        label: { pt: "Lighthouse", en: "Lighthouse" },
        value: {
          pt: "Mobile: [preencher] | Desktop: [preencher]",
          en: "Mobile: [fill] | Desktop: [fill]",
        },
      },
      {
        label: { pt: "Tempo de publicação", en: "Publishing time" },
        value: {
          pt: "Antes: [preencher] -> Depois: [preencher]",
          en: "Before: [fill] -> After: [fill]",
        },
      },
      {
        label: { pt: "SEO / Google Search Console", en: "SEO / Google Search Console" },
        value: {
          pt: "Impressões: [preencher] | Cliques: [preencher] | CTR: [preencher]",
          en: "Impressions: [fill] | Clicks: [fill] | CTR: [fill]",
        },
      },
    ],
    results: {
      pt: [
        "Antes: comercial, autoatendimento e backoffice rodavam separados -> Depois: a operação foi unificada em uma única aplicação.",
        "Antes: o suporte manual carregava mais fricção -> Depois: o portal de autoatendimento reduziu parte desse trabalho operacional.",
        "Antes: cada novo SGP exigia acoplamento direto -> Depois: a camada de drivers deixou a integração mais sustentável.",
      ],
      en: [
        "Before: commercial, self-service, and backoffice flows ran separately -> After: operations were unified in one application.",
        "Before: manual support carried more friction -> After: the self-service portal reduced part of that operational workload.",
        "Before: each new SGP required direct coupling -> After: the driver layer made integrations more sustainable.",
      ],
    },
    links: [
      {
        label: "Live",
        href: "https://provedor-connect-sand.vercel.app/",
      },
      {
        label: "Repo",
        href: "https://github.com/carlossb",
      },
    ],
    seoTitle: "Provedor Connect | Antonio Gomes",
  },
  {
    slug: "otica-plus",
    title: "ÓticaPlus – SaaS Multi-Tenant para Óticas",
    cardImage: {
      src: "/cases/otica-plus/dashboad.png",
      alt: {
        pt: "Tela inicial do projeto ÓticaPlus",
        en: "ÓticaPlus home screen",
      },
    },
    shortDescription: {
      pt: "SaaS multi-tenant para óticas com CRM, financeiro, billing e OCR com IA em um fluxo unificado.",
      en: "Multi-tenant SaaS for optical stores with CRM, finance, billing, and AI-powered OCR in one unified flow.",
    },
    description: {
      pt: `Sistema SaaS multi-tenant para a operação completa de óticas, conectando atendimento, pedidos, financeiro e laboratório no mesmo produto.
O projeto foi pensado para reduzir retrabalho, organizar cobrança recorrente e dar mais controle ao fluxo operacional.`,
      en: `Multi-tenant SaaS for the full operation of optical stores, connecting sales, orders, finance, and lab workflows in one product.
The project was designed to reduce rework, structure recurring billing, and bring more control to daily operations.`,
    },
    challenge: {
      pt: `Atendimento, financeiro e laboratório operavam de forma fragmentada.
Isso gerava retrabalho em cadastro, pouca rastreabilidade e baixa previsibilidade no faturamento por plano.`,
      en: `Sales, finance, and lab operations were fragmented.
That created repeated data entry, limited traceability, and low predictability in subscription billing.`,
    },
    solution: {
      pt: `Desenvolvi uma arquitetura SaaS multi-tenant com módulos integrados para CRM, pedidos, financeiro e portal de laboratório.
Implementei RBAC por contexto, billing recorrente por plano e OCR com IA para reduzir entrada manual de dados.
Também padronizei contratos de API e o fluxo ponta a ponta para diminuir inconsistência entre áreas.`,
      en: `I built a multi-tenant SaaS architecture with integrated modules for CRM, orders, finance, and the lab portal.
I implemented context-based RBAC, plan-based recurring billing, and AI-powered OCR to reduce manual data entry.
I also standardized API contracts and the end-to-end flow to reduce inconsistency across teams.`,
    },
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "NextAuth",
      "Zustand",
      "Supabase",
    ],
    architecture: {
      pt: [
        "Monólito modular",
        "Sistema RBAC multi-tenant",
        "Autenticação baseada em JWT",
        "Processamento assíncrono de jobs",
        "Integração de OCR com IA",
      ],
      en: [
        "Modular monolith",
        "Multi-tenant RBAC system",
        "JWT-based authentication",
        "Async job processing",
        "OCR AI integration",
      ],
    },
    technicalDecisions: {
      pt: [
        "Escolhi monólito modular em vez de microservices para reduzir complexidade operacional no estágio inicial.",
        "Escolhi RBAC por tenant/contexto em vez de perfil único global para manter isolamento e granularidade de acesso.",
        "Escolhi jobs assíncronos para OCR em vez de processamento síncrono no request para preservar fluidez no fluxo principal.",
      ],
      en: [
        "I chose a modular monolith instead of microservices to reduce early-stage operational complexity.",
        "I chose tenant/context-aware RBAC instead of a global role model to preserve isolation and fine-grained access.",
        "I chose asynchronous OCR jobs instead of synchronous request-time processing to protect main-flow responsiveness.",
      ],
    },
    highlights: {
      pt: [
        "472 arquivos TypeScript",
        "118 rotas de API",
        "36 modelos Prisma",
        "Papéis de usuário multi-contexto",
        "Fluxo comercial + financeiro integrado",
      ],
      en: [
        "472 TypeScript files",
        "118 API routes",
        "36 Prisma models",
        "Multi-context user roles",
        "Integrated commercial + financial workflow",
      ],
    },
    impact: {
      pt: [
        "Fluxo operacional de óticas centralizado",
        "Redução de entrada manual de dados com OCR",
        "Billing e gestão de assinaturas estruturados",
      ],
      en: [
        "Centralized operational workflow for optical stores",
        "Reduced manual data entry with OCR",
        "Structured billing and subscription management",
      ],
    },
    gallery: [
      {
        src: "/cases/otica-plus/overview.png",
        alt: {
          pt: "Visão geral do SaaS ÓticaPlus",
          en: "ÓticaPlus SaaS overview",
        },
        caption: {
          pt: "Visão do produto com módulos de CRM, financeiro e gestão operacional.",
          en: "Product overview with CRM, financial, and operational modules.",
        },
      },
      {
        src: "/cases/otica-plus/flow.png",
        alt: {
          pt: "Fluxo de pedidos e OCR no ÓticaPlus",
          en: "ÓticaPlus order and OCR flow",
        },
        caption: {
          pt: "Fluxo comercial e financeiro integrado com suporte a OCR.",
          en: "Integrated commercial and financial flow with OCR support.",
        },
      },
      {
        src: "/cases/otica-plus/admin.png",
        alt: {
          pt: "Painel administrativo do ÓticaPlus",
          en: "ÓticaPlus admin dashboard",
        },
        caption: {
          pt: "Gestão de contexto multi-tenant com papéis e permissões granulares.",
          en: "Multi-tenant management with granular roles and permissions.",
        },
      },
    ],
    metrics: [
      {
        label: { pt: "Lighthouse", en: "Lighthouse" },
        value: {
          pt: "Mobile: [preencher] | Desktop: [preencher]",
          en: "Mobile: [fill] | Desktop: [fill]",
        },
      },
      {
        label: { pt: "Tempo de publicação", en: "Publishing time" },
        value: {
          pt: "Antes: [preencher] -> Depois: [preencher]",
          en: "Before: [fill] -> After: [fill]",
        },
      },
      {
        label: { pt: "SEO / Google Search Console", en: "SEO / Google Search Console" },
        value: {
          pt: "Impressões: [preencher] | Cliques: [preencher] | CTR: [preencher]",
          en: "Impressions: [fill] | Clicks: [fill] | CTR: [fill]",
        },
      },
    ],
    results: {
      pt: [
        "Antes: comercial, financeiro e laboratório trabalhavam em paralelo -> Depois: a operação passou a seguir um fluxo integrado ponta a ponta.",
        "Antes: cadastro manual gerava muito retrabalho -> Depois: o OCR reduziu entrada manual em documentos críticos.",
        "Antes: a cobrança era menos previsível -> Depois: o billing recorrente por plano trouxe mais controle operacional.",
        "Antes: permissões administrativas eram pouco granulares -> Depois: o RBAC multi-contexto reforçou a governança de acesso.",
      ],
      en: [
        "Before: sales, finance, and lab worked in parallel -> After: operations moved to an integrated end-to-end flow.",
        "Before: manual registration caused significant rework -> After: OCR reduced manual input on critical documents.",
        "Before: billing was less predictable -> After: plan-based recurring billing brought more operational control.",
        "Before: admin permissions lacked granularity -> After: multi-context RBAC strengthened access governance.",
      ],
    },
    links: [
      {
        label: "Live",
        href: "https://otica-plus-app.vercel.app/",
      },
      {
        label: "Repo",
        href: "https://github.com/carlossb",
      },
    ],
    featured: true,
    seoTitle: "ÓticaPlus | Antonio Gomes",
  },
  {
    slug: "gordo-construcoes",
    title: "Gordo Construções – Plataforma Imobiliária Fullstack",
    featured: true,
    cardImage: {
      src: "/cases/gordo-construcoes/home.png",
      alt: {
        pt: "Tela inicial do projeto Gordo Construções",
        en: "Gordo Construções home screen",
      },
    },
    shortDescription: {
      pt: "Plataforma imobiliária fullstack com catálogo público, leads e painel admin na mesma operação.",
      en: "Fullstack real estate platform with public catalog, lead capture, and admin management in the same operation.",
    },
    description: {
      pt: `Plataforma fullstack criada para organizar a operação digital de uma imobiliária, do catálogo público à gestão interna dos imóveis.
O projeto reúne site institucional, filtros, SEO por imóvel, captação de leads e painel autenticado em um só fluxo.`,
      en: `Fullstack platform built to organize a real estate business from the public catalog to internal property management.
It brings together the institutional website, filters, SEO per property, lead capture, and an authenticated dashboard in a single flow.`,
    },
    challenge: {
      pt: `A operação tinha pouca organização de catálogo, geração manual de leads e baixa rastreabilidade.
Além disso, havia risco de inconsistência entre o site público e a administração interna dos imóveis.`,
      en: `The operation had weak catalog organization, manual lead handling, and low traceability.
There was also a risk of inconsistency between the public website and internal property management.`,
    },
    solution: {
      pt: `Construí uma plataforma fullstack com catálogo público filtrável e painel autenticado para gestão de imóveis.
Implementei RBAC via middleware, validações condicionais na API de leads e metadata dinâmica por propriedade.
Também estruturei mídia em nuvem e rotinas com ISR para equilibrar SEO, velocidade e atualização.`,
      en: `I built a fullstack platform with a filterable public catalog and an authenticated dashboard for property management.
I implemented middleware-based RBAC, conditional validation in the lead API, and dynamic metadata per property.
I also added cloud media storage and ISR workflows to balance SEO, speed, and freshness.`,
    },
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "NextAuth",
      "Vercel Blob",
    ],
    architecture: {
      pt: [
        "Arquitetura fullstack com App Router",
        "Autenticação baseada em JWT",
        "RBAC via middleware",
        "Modelagem relacional de domínio com Prisma",
        "Integração com armazenamento de arquivos em nuvem",
      ],
      en: [
        "App Router fullstack architecture",
        "JWT-based authentication",
        "RBAC via middleware",
        "Relational domain modeling with Prisma",
        "Cloud file storage integration",
      ],
    },
    technicalDecisions: {
      pt: [
        "Escolhi RBAC no middleware em vez de checagens somente na UI para garantir enforcement antes da renderização.",
        "Escolhi modelagem relacional com Prisma em vez de estrutura frouxa de dados para preservar consistência de domínio e ownership.",
        "Escolhi ISR em páginas públicas em vez de renderização dinâmica integral para equilibrar SEO, velocidade e atualização.",
      ],
      en: [
        "I chose middleware RBAC instead of UI-only checks to enforce authorization before rendering.",
        "I chose relational Prisma modeling instead of a loose data structure to preserve domain consistency and ownership.",
        "I chose ISR on public pages instead of fully dynamic rendering to balance SEO, speed, and freshness.",
      ],
    },
    highlights: {
      pt: [
        "CRUD com validação de ownership",
        "Validação condicional na API de leads",
        "Log de atividade para trilha de auditoria",
        "Metadata dinâmica por imóvel",
        "ISR para otimização de performance",
      ],
      en: [
        "CRUD with ownership validation",
        "Conditional validation in lead API",
        "Activity logging for audit trail",
        "Dynamic metadata per property",
        "ISR for performance optimization",
      ],
    },
    impact: {
      pt: [
        "Operação imobiliária centralizada",
        "Fluxo de captação de leads estruturado",
        "SEO e discoverability de imóveis aprimorados",
      ],
      en: [
        "Centralized real estate operations",
        "Structured lead capture workflow",
        "Improved SEO and property discoverability",
      ],
    },
    gallery: [
      {
        src: "/cases/gordo-construcoes/overview.png",
        alt: {
          pt: "Visão geral da plataforma Gordo Construções",
          en: "Gordo Construções platform overview",
        },
        caption: {
          pt: "Catálogo imobiliário com navegação pública e busca orientada a conversão.",
          en: "Real estate catalog with public navigation and conversion-oriented search.",
        },
      },
      {
        src: "/cases/gordo-construcoes/flow.png",
        alt: {
          pt: "Fluxo de captação de leads na Gordo Construções",
          en: "Gordo Construções lead capture flow",
        },
        caption: {
          pt: "Fluxo de lead com validações condicionais e rastreabilidade.",
          en: "Lead flow with conditional validation and traceability.",
        },
      },
      {
        src: "/cases/gordo-construcoes/admin.png",
        alt: {
          pt: "Painel administrativo da Gordo Construções",
          en: "Gordo Construções admin dashboard",
        },
        caption: {
          pt: "Painel autenticado para CRUD com regras de ownership e auditoria.",
          en: "Authenticated dashboard for CRUD with ownership and audit rules.",
        },
      },
    ],
    metrics: [
      {
        label: { pt: "Lighthouse", en: "Lighthouse" },
        value: {
          pt: "Mobile: [preencher] | Desktop: [preencher]",
          en: "Mobile: [fill] | Desktop: [fill]",
        },
      },
      {
        label: { pt: "Tempo de publicação", en: "Publishing time" },
        value: {
          pt: "Antes: [preencher] -> Depois: [preencher]",
          en: "Before: [fill] -> After: [fill]",
        },
      },
      {
        label: { pt: "SEO / Google Search Console", en: "SEO / Google Search Console" },
        value: {
          pt: "Impressões: [preencher] | Cliques: [preencher] | CTR: [preencher]",
          en: "Impressions: [fill] | Clicks: [fill] | CTR: [fill]",
        },
      },
    ],
    results: {
      pt: [
        "Antes: catálogo público e gestão interna não tinham sincronização confiável -> Depois: a operação ficou centralizada em uma única plataforma.",
        "Antes: leads entravam sem validação consistente -> Depois: o fluxo ganhou validações e trilha de atividade.",
        "Antes: imóveis estratégicos tinham pouca visibilidade orgânica -> Depois: metadata dinâmica ajudou a melhorar discoverability.",
      ],
      en: [
        "Before: the public catalog and internal management were weakly synchronized -> After: operations became centralized in one platform.",
        "Before: leads arrived without consistent validation -> After: the flow gained proper validation and activity traceability.",
        "Before: key properties had low organic visibility -> After: dynamic metadata helped improve discoverability.",
      ],
    },
    links: [
      {
        label: "Live",
        href: "https://gordo-construcoes.vercel.app/",
      },
      {
        label: "Repo",
        href: "https://github.com/carlossb",
      },
    ],
    seoTitle: "Gordo Construções | Antonio Gomes",
  },
  {
    slug: "tia-emilia",
    title: "Tia Emília – E-commerce de Produtos Digitais com IA e PIX",
    cardImage: {
      src: "/cases/tia-emilia/home.png",
      alt: {
        pt: "Visão geral do e-commerce Tia Emília",
        en: "Tia Emília e-commerce overview",
      },
    },
    shortDescription: {
      pt: "E-commerce fullstack de produtos digitais com PIX, webhook assíncrono e entrega automatizada.",
      en: "Fullstack digital products storefront with PIX, asynchronous webhooks, and automated delivery.",
    },
    description: {
      pt: `Plataforma fullstack para venda de produtos digitais educativos, com checkout via PIX, processamento assíncrono de webhook e entrega automatizada por e-mail.
O projeto também inclui gestão de conteúdo com apoio de IA para manter o ritmo editorial sem depender de operação manual.`,
      en: `Fullstack platform for selling educational digital products, with PIX checkout, asynchronous webhook processing, and automated email delivery.
It also includes AI-assisted content workflows to keep the editorial side moving without manual-heavy operations.`,
    },
    challenge: {
      pt: `A venda dependia de confirmação manual de pagamento e envio repetitivo.
Isso gerava atraso na entrega, risco de inconsistência e pouca rastreabilidade no ciclo de compra.`,
      en: `Sales depended on manual payment confirmation and repetitive fulfillment steps.
That created delivery delays, inconsistency risk, and limited traceability across the purchase flow.`,
    },
    solution: {
      pt: `Implementei checkout PIX com Mercado Pago, processamento assíncrono de webhook e reconciliação idempotente.
Automatizei a entrega por e-mail e conectei a gestão de conteúdo com apoio de IA para manter ritmo editorial.
Com isso, o fluxo transacional ficou mais confiável e exigiu menos intervenção manual.`,
      en: `I implemented PIX checkout with Mercado Pago, asynchronous webhook processing, and idempotent reconciliation.
I automated email delivery and connected content workflows with AI assistance to keep editorial cadence.
That made the transactional flow more reliable and reduced manual intervention.`,
    },
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "PostgreSQL (Neon)",
      "Drizzle ORM",
      "Mercado Pago",
      "Resend",
      "Vercel Blob",
      "OpenAI API",
    ],
    architecture: {
      pt: [
        "Arquitetura fullstack com App Router",
        "Server Actions + API Routes",
        "Processamento assíncrono de webhook",
        "Modelo de domínio unificado de agendamento",
        "Integração com gateway de pagamento externo",
      ],
      en: [
        "App Router fullstack architecture",
        "Server Actions + API Routes",
        "Asynchronous webhook processing",
        "Unified booking domain model",
        "External payment gateway integration",
      ],
    },
    technicalDecisions: {
      pt: [
        "Escolhi webhook idempotente em vez de processamento cego de eventos para evitar duplicidade financeira.",
        "Escolhi processamento assíncrono em vez de bloqueio no fluxo de checkout para desacoplar confirmação de pagamento da UX.",
        "Escolhi entrega transacional por e-mail em vez de envio manual para garantir rastreabilidade e consistência.",
      ],
      en: [
        "I chose idempotent webhook handling instead of blind event processing to prevent duplicate payment effects.",
        "I chose asynchronous processing instead of blocking checkout-time confirmation to decouple payment state from UX.",
        "I chose transactional email delivery instead of manual fulfillment to guarantee traceability and consistency.",
      ],
    },
    highlights: {
      pt: [
        "Geração dinâmica de QR Code PIX",
        "Reconciliação idempotente de webhook",
        "Resolução de conflito por sobreposição de agenda",
        "Fluxo editorial assistido por IA",
        "Entrega de e-mail transacional",
      ],
      en: [
        "PIX QR code dynamic generation",
        "Idempotent webhook reconciliation",
        "Booking overlap conflict resolution",
        "AI-assisted editorial workflow",
        "Transactional email delivery",
      ],
    },
    impact: {
      pt: [
        "Entrega automatizada de produtos digitais",
        "Redução da verificação manual de pagamento",
        "Gestão unificada de agenda e eventos",
      ],
      en: [
        "Automated digital product delivery",
        "Reduced manual payment verification",
        "Unified booking and event management",
      ],
    },
    gallery: [
      {
        src: "/cases/tia-emilia/overview.png",
        alt: {
          pt: "Visão geral do e-commerce Tia Emília",
          en: "Tia Emília e-commerce overview",
        },
        caption: {
          pt: "Página de produtos digitais com foco em aquisição e checkout.",
          en: "Digital products page focused on acquisition and checkout.",
        },
      },
      {
        src: "/cases/tia-emilia/flow.png",
        alt: {
          pt: "Fluxo PIX e webhook da Tia Emília",
          en: "Tia Emília PIX and webhook flow",
        },
        caption: {
          pt: "Checkout PIX com reconciliação idempotente e processamento assíncrono.",
          en: "PIX checkout with idempotent reconciliation and asynchronous processing.",
        },
      },
      {
        src: "/cases/tia-emilia/admin.png",
        alt: {
          pt: "Painel de gestão da Tia Emília",
          en: "Tia Emília management dashboard",
        },
        caption: {
          pt: "Gestão de pedidos e entregas com rastreabilidade de eventos.",
          en: "Order and fulfillment management with event traceability.",
        },
      },
    ],
    metrics: [
      {
        label: { pt: "Lighthouse", en: "Lighthouse" },
        value: {
          pt: "Mobile: [preencher] | Desktop: [preencher]",
          en: "Mobile: [fill] | Desktop: [fill]",
        },
      },
      {
        label: { pt: "Tempo de publicação", en: "Publishing time" },
        value: {
          pt: "Antes: [preencher] -> Depois: [preencher]",
          en: "Before: [fill] -> After: [fill]",
        },
      },
      {
        label: { pt: "SEO / Google Search Console", en: "SEO / Google Search Console" },
        value: {
          pt: "Impressões: [preencher] | Cliques: [preencher] | CTR: [preencher]",
          en: "Impressions: [fill] | Clicks: [fill] | CTR: [fill]",
        },
      },
    ],
    results: {
      pt: [
        "Antes: pagamento e entrega eram tratados manualmente -> Depois: o fluxo passou a ser automatizado com webhook e envio transacional.",
        "Antes: havia mais risco de duplicidade em eventos financeiros -> Depois: a reconciliação idempotente trouxe mais segurança operacional.",
        "Antes: a rastreabilidade era limitada -> Depois: a trilha de eventos facilitou auditoria e suporte.",
      ],
      en: [
        "Before: payment confirmation and fulfillment were manual -> After: the flow became automated with webhooks and transactional delivery.",
        "Before: financial events carried more duplication risk -> After: idempotent reconciliation added operational safety.",
        "Before: traceability was limited -> After: the event trail improved audit and support workflows.",
      ],
    },
    links: [
      {
        label: "Live",
        href: "https://tia-emilia-next.vercel.app/",
      },
      {
        label: "Repo",
        href: "https://github.com/carlossb",
      },
    ],
    seoTitle: "Tia Emília | Antonio Gomes",
  },
];
