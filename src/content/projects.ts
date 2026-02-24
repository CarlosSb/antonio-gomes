import type { Locale } from "@/content/profile";

type LocalizedText = string | Record<Locale, string>;
type LocalizedList = string[] | Record<Locale, string[]>;

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  title: string;
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
  links?: ProjectLink[];
  featured?: boolean;
  seoTitle?: string;
};

export const projects: Project[] = [
  {
    slug: "ong-tudo-por-amor",
    title: "ONG Tudo por Amor",
    shortDescription: {
      pt: "Plataforma institucional com CMS headless focada em fluxos de adoção e transparência financeira.",
      en: "Headless CMS institutional platform focused on adoption workflows and financial transparency.",
    },
    description: {
      pt: `Plataforma institucional desenvolvida com Next.js 16 (App Router) integrada ao Sanity CMS.
O projeto atende três jornadas principais: adoção de animais, transparência financeira e comunicação institucional.
Implementado com foco em SEO, performance e autonomia editorial.`,
      en: `Institutional platform built with Next.js 16 (App Router) integrated with Sanity CMS.
The system supports three main journeys: animal adoption, financial transparency, and institutional communication.
Designed with strong SEO, performance optimization, and editorial autonomy in mind.`,
    },
    challenge: {
      pt: `A ONG tinha conteúdo institucional disperso e publicação dependente de suporte técnico.
Também faltava estrutura consistente para transparência financeira e SEO nas páginas.`,
      en: `The NGO had fragmented institutional content and publishing depended on technical support.
It also lacked a consistent structure for financial transparency and SEO across pages.`,
    },
    solution: {
      pt: `Implementei uma arquitetura headless com Next.js + Sanity para dar autonomia editorial.
Estruturei rotas dinâmicas para adoção, notícias e relatórios, com ISR e revalidação por webhook.
Organizei metadata, sitemap e dados estruturados para aumentar consistência de indexação.`,
      en: `I implemented a headless architecture with Next.js + Sanity to provide editorial autonomy.
I structured dynamic routes for adoption, news, and reports using ISR and webhook-driven revalidation.
I standardized metadata, sitemap, and structured data to improve indexing consistency.`,
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
        "Autonomia editorial para equipe da ONG",
        "Maior transparência com relatórios financeiros estruturados",
        "Entrega de conteúdo otimizada com ISR",
      ],
      en: [
        "Enabled editorial autonomy for NGO staff",
        "Improved transparency with structured financial reports",
        "Optimized content delivery using ISR",
      ],
    },
    results: {
      pt: [
        "Antes: atualização de conteúdo dependia de suporte técnico -> Depois: equipe da ONG com autonomia editorial no CMS.",
        "Antes: comunicação financeira fragmentada -> Depois: relatórios e páginas de transparência estruturados.",
        "Antes: publicações com latência de atualização -> Depois: ISR + revalidação seletiva para entrega mais eficiente.",
      ],
      en: [
        "Before: content updates depended on technical support -> After: NGO staff gained editorial autonomy in the CMS.",
        "Before: financial communication was fragmented -> After: transparency pages and reports were structured.",
        "Before: publication updates had delivery latency -> After: ISR + selective revalidation improved content delivery.",
      ],
    },
    links: [
      {
        label: "Live",
        href: "https://nextjs-ong-tudo-por-amor.vercel.app/",
      },
    ],
    featured: true,
    seoTitle: "ONG Tudo por Amor | Antonio Gomes",
  },
  {
    slug: "digital-net-telecom",
    title: "Digital.Net Telecom – Multi-City ISP Platform",
    shortDescription: {
      pt: "Plataforma fullstack para operação de ISP com arquitetura multi-cidade, painel admin e APIs testadas.",
      en: "Fullstack ISP operations platform with multi-city architecture, admin panel and tested APIs.",
    },
    description: {
      pt: `Plataforma fullstack para operação de provedor de internet,
com arquitetura multi-cidade, landing pages otimizadas,
painel administrativo completo e APIs validadas.
Inclui suíte de testes automatizados e integração com IA.`,
      en: `Fullstack ISP operations platform designed with multi-city architecture,
optimized landing pages, complete admin panel and validated APIs.
Includes automated testing suite and AI integration.`,
    },
    challenge: {
      pt: `A operação digital do provedor estava distribuída em múltiplos fluxos e páginas desconectadas.
Havia inconsistência entre cidades, retrabalho em conteúdo e baixa padronização nas APIs.`,
      en: `The ISP digital operation was spread across disconnected flows and pages.
There was cross-city inconsistency, repeated content work, and low API standardization.`,
    },
    solution: {
      pt: `Estruturei uma plataforma fullstack com arquitetura multi-cidade e painel administrativo modular.
Padronizei a camada de APIs com validações formais e cobertura de testes unitários/e2e.
Otimizei landing pages para conversão e consistência operacional entre unidades.`,
      en: `I built a fullstack platform with multi-city architecture and a modular admin panel.
I standardized the API layer with formal validation and unit/e2e test coverage.
I optimized landing pages for conversion and operational consistency across city units.`,
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
    results: {
      pt: [
        "Antes: operação distribuída em fluxos desconectados -> Depois: gestão centralizada em uma única plataforma.",
        "Antes: variação de conteúdo por cidade -> Depois: padrão multi-cidade com consistência entre unidades.",
        "Antes: regressões frequentes em integrações -> Depois: APIs validadas e testadas com maior previsibilidade.",
      ],
      en: [
        "Before: operations were split across disconnected flows -> After: centralized management in one platform.",
        "Before: city-level content diverged frequently -> After: multi-city standardization reduced inconsistency.",
        "Before: integrations were regression-prone -> After: validated, tested APIs improved predictability.",
      ],
    },
    links: [
      {
        label: "Live",
        href: "https://digital-net-telecom.vercel.app/",
      },
    ],
    seoTitle: "Digital.Net Telecom | Antonio Gomes",
  },
  {
    slug: "provedor-connect",
    title: "Provedor Connect – ISP Platform with SGP Integration",
    shortDescription: {
      pt: "Plataforma fullstack para ISP com portal de autoatendimento, dashboard admin e drivers SGP desacoplados.",
      en: "Fullstack ISP platform with self-service portal, admin dashboard and decoupled SGP drivers.",
    },
    description: {
      pt: `Plataforma fullstack para provedor de internet regional,
incluindo landing pages comerciais, área do cliente com autoatendimento,
painel administrativo e integração desacoplada com múltiplos sistemas SGP.`,
      en: `Fullstack ISP platform for regional internet providers,
including commercial landing pages, customer self-service portal,
admin dashboard and decoupled SGP integrations.`,
    },
    challenge: {
      pt: `O provedor dependia de fluxos separados para área comercial, autoatendimento e gestão interna.
Integrações com SGP variavam por cliente, aumentando acoplamento e custo de manutenção.`,
      en: `The ISP relied on separate flows for commercial pages, self-service, and internal operations.
SGP integrations varied by client, increasing coupling and maintenance cost.`,
    },
    solution: {
      pt: `Desenvolvi uma plataforma fullstack com portal do cliente, painel administrativo e camada de drivers SGP desacoplada.
Implementei autenticação JWT HttpOnly, validações de entrada e fallback com mock driver para desenvolvimento.
Com isso, o produto passou a integrar múltiplos provedores SGP sem reescrever o núcleo da aplicação.`,
      en: `I delivered a fullstack platform with customer self-service, admin dashboard, and a decoupled SGP driver layer.
I implemented HttpOnly JWT authentication, input validation, and mock-driver fallback for development.
This allowed integration with multiple SGP providers without rewriting the application core.`,
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
    results: {
      pt: [
        "Antes: aquisição, autoatendimento e backoffice em sistemas separados -> Depois: operação unificada em uma única aplicação.",
        "Antes: alta carga de suporte manual -> Depois: portal de autoatendimento reduziu fricção operacional.",
        "Antes: cada integração SGP exigia acoplamento direto -> Depois: camada de drivers desacoplada e mais sustentável.",
      ],
      en: [
        "Before: acquisition, self-service, and backoffice ran separately -> After: unified operation in one application.",
        "Before: manual support load was high -> After: self-service portal reduced operational friction.",
        "Before: each SGP integration required direct coupling -> After: decoupled driver layer improved sustainability.",
      ],
    },
    links: [
      {
        label: "Live",
        href: "https://provedor-connect-sand.vercel.app/",
      },
    ],
    seoTitle: "Provedor Connect | Antonio Gomes",
  },
  {
    slug: "otica-plus",
    title: "ÓticaPlus – SaaS Multi-Tenant for Optical Stores",
    shortDescription: {
      pt: "SaaS fullstack multi-tenant para CRM, gestão financeira, billing e OCR com IA.",
      en: "Fullstack multi-tenant SaaS for CRM, financial management, billing and AI-powered OCR.",
    },
    description: {
      pt: `Sistema SaaS multi-tenant para gestão completa de óticas.
Inclui CRM, controle de pedidos, módulo financeiro com crediário,
billing por plano, portal de laboratório e OCR com IA.`,
      en: `Multi-tenant SaaS platform for optical store management.
Includes CRM, order workflow, financial module with installments,
subscription billing, lab portal and AI-powered OCR.`,
    },
    challenge: {
      pt: `Óticas operavam com processos fragmentados entre atendimento, financeiro e laboratório.
Havia retrabalho em cadastro, baixa rastreabilidade e pouca previsibilidade no faturamento por plano.`,
      en: `Optical stores were running fragmented workflows across sales, finance, and lab operations.
This caused repeated data entry, limited traceability, and low predictability in subscription billing.`,
    },
    solution: {
      pt: `Desenvolvi uma arquitetura SaaS multi-tenant com módulos integrados para CRM, pedidos, financeiro e portal de laboratório.
Implementei RBAC por contexto, billing recorrente por plano e OCR com IA para reduzir entrada manual de dados.
Também padronizei contratos de API e fluxo operacional ponta a ponta para reduzir inconsistência entre áreas.`,
      en: `I designed a multi-tenant SaaS architecture with integrated modules for CRM, order flow, finance, and lab portal.
I implemented context-based RBAC, recurring subscription billing, and AI-powered OCR to reduce manual data entry.
I also standardized API contracts and end-to-end operational flows to reduce cross-team inconsistency.`,
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
    results: {
      pt: [
        "Antes: comercial, financeiro e laboratório trabalhavam em fluxos paralelos -> Depois: operação unificada ponta a ponta.",
        "Antes: cadastro manual gerava retrabalho -> Depois: OCR integrado reduziu entrada manual em documentos críticos.",
        "Antes: cobrança com pouca previsibilidade -> Depois: billing recorrente por plano com controle estruturado.",
        "Antes: permissões administrativas pouco granulares -> Depois: RBAC multi-contexto com governança mais segura.",
      ],
      en: [
        "Before: sales, finance, and lab ran in parallel flows -> After: unified end-to-end operation.",
        "Before: manual registration caused repeated work -> After: integrated OCR reduced manual input on critical documents.",
        "Before: billing had low predictability -> After: plan-based recurring billing added operational control.",
        "Before: admin permissions lacked granularity -> After: multi-context RBAC strengthened access governance.",
      ],
    },
    links: [
      {
        label: "Live",
        href: "https://otica-plus-app.vercel.app/",
      },
    ],
    featured: true,
    seoTitle: "ÓticaPlus | Antonio Gomes",
  },
  {
    slug: "gordo-construcoes",
    title: "Gordo Construções – Fullstack Real Estate Platform",
    shortDescription: {
      pt: "Plataforma imobiliária fullstack com catálogo público, captação de leads e painel admin autenticado.",
      en: "Fullstack real estate platform with public catalog, lead capture and authenticated admin panel.",
    },
    description: {
      pt: `Plataforma imobiliária fullstack desenvolvida com Next.js 16.
Inclui site institucional, catálogo público com filtros,
SEO dinâmico por imóvel, captação de leads e painel administrativo autenticado.`,
      en: `Fullstack real estate platform built with Next.js 16.
Includes public catalog with filtering, dynamic SEO,
lead capture system and authenticated admin panel.`,
    },
    challenge: {
      pt: `A operação imobiliária tinha baixa organização de catálogo, geração manual de leads e pouca rastreabilidade.
Havia risco de inconsistência entre site público e administração interna dos imóveis.`,
      en: `The real estate operation had limited catalog organization, manual lead processing, and low traceability.
There was a risk of inconsistency between public listings and internal property management.`,
    },
    solution: {
      pt: `Construí uma plataforma fullstack com catálogo público filtrável e painel autenticado para gestão de imóveis.
Implementei RBAC via middleware, validações condicionais de lead e metadata dinâmica por propriedade.
Também estruturei armazenamento de mídia em nuvem e rotinas com foco em performance via ISR.`,
      en: `I built a fullstack platform with a filterable public catalog and authenticated admin panel for property management.
I implemented middleware-based RBAC, conditional lead validation, and dynamic metadata per property.
I also integrated cloud media storage and performance-oriented ISR workflows.`,
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
    results: {
      pt: [
        "Antes: catálogo público e gestão interna sem sincronização confiável -> Depois: operação imobiliária centralizada.",
        "Antes: leads entravam sem validação consistente -> Depois: fluxo estruturado com validações e trilha de atividade.",
        "Antes: pouca indexação de imóveis estratégicos -> Depois: metadata dinâmica aumentou discoverability.",
      ],
      en: [
        "Before: public catalog and internal management were weakly synchronized -> After: centralized real estate operation.",
        "Before: leads arrived without consistent validation -> After: structured flow with validation and activity trace.",
        "Before: key properties had low search visibility -> After: dynamic metadata improved discoverability.",
      ],
    },
    links: [
      {
        label: "Live",
        href: "https://gordo-construcoes.vercel.app/",
      },
    ],
    seoTitle: "Gordo Construções | Antonio Gomes",
  },
  {
    slug: "tia-emilia",
    title: "Tia Emília – Digital Product E-commerce with AI & PIX",
    shortDescription: {
      pt: "Plataforma fullstack de produtos digitais com checkout PIX, processamento de webhook e conteúdo assistido por IA.",
      en: "Fullstack digital product platform with PIX checkout, webhook processing and AI-assisted content.",
    },
    description: {
      pt: `Plataforma fullstack para venda de produtos digitais educativos,
com checkout via PIX (Mercado Pago), webhook assíncrono,
entrega automatizada por e-mail e CMS de blog com apoio de IA.`,
      en: `Fullstack digital product platform featuring PIX checkout (Mercado Pago),
asynchronous webhook processing, automated email delivery
and AI-assisted blog content management.`,
    },
    challenge: {
      pt: `A venda de produtos digitais dependia de confirmação manual de pagamento e envio operacional repetitivo.
Isso gerava atraso na entrega, risco de inconsistência e pouca rastreabilidade do ciclo de compra.`,
      en: `Digital product sales relied on manual payment confirmation and repetitive fulfillment steps.
This created delivery delays, inconsistency risk, and limited purchase-flow traceability.`,
    },
    solution: {
      pt: `Implementei checkout PIX com Mercado Pago, processamento assíncrono de webhook e reconciliação idempotente.
Automatizei entrega por e-mail e conectei gestão de conteúdo com apoio de IA para manter ritmo editorial.
Organizei o fluxo transacional para reduzir intervenção manual e aumentar confiabilidade operacional.`,
      en: `I implemented PIX checkout with Mercado Pago, asynchronous webhook processing, and idempotent reconciliation.
I automated email delivery and connected content workflows with AI assistance to keep editorial cadence.
I organized transactional flows to reduce manual intervention and increase operational reliability.`,
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
    results: {
      pt: [
        "Antes: confirmação de pagamento e entrega eram manuais -> Depois: fluxo automatizado com webhook e envio transacional.",
        "Antes: risco de duplicidade em eventos financeiros -> Depois: reconciliação idempotente com retries controlados.",
        "Antes: baixa rastreabilidade operacional -> Depois: trilha de eventos para auditoria e suporte.",
      ],
      en: [
        "Before: payment confirmation and fulfillment were manual -> After: automated flow with webhook and transactional delivery.",
        "Before: financial events could duplicate effects -> After: idempotent reconciliation with controlled retries.",
        "Before: operational traceability was limited -> After: event trail improved audit and support workflows.",
      ],
    },
    links: [
      {
        label: "Live",
        href: "https://tia-emilia-next.vercel.app/",
      },
    ],
    seoTitle: "Tia Emília | Antonio Gomes",
  },
];
