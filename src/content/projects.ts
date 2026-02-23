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
  results?: LocalizedText;
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
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Sanity CMS",
      "Tailwind CSS",
      "Vercel",
    ],
    highlights: [
      "Headless CMS architecture",
      "Server Components + ISR",
      "On-demand revalidation via webhook",
      "Dynamic sitemap generation",
      "SEO with structured data (JSON-LD)",
    ],
    architecture: [
      "Next.js App Router with Server Components",
      "Sanity Content Lake integration",
      "Webhook-based cache invalidation",
      "Dynamic routes for adoption, news and reports",
    ],
    impact: [
      "Enabled editorial autonomy for NGO staff",
      "Improved transparency with structured financial reports",
      "Optimized content delivery using ISR",
    ],
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
    shortDescription:
      "Fullstack ISP operations platform with multi-city architecture, admin panel and tested APIs.",
    description: {
      pt: `Plataforma fullstack para operação de provedor de internet,
com arquitetura multi-cidade, landing pages otimizadas,
painel administrativo completo e APIs validadas.
Inclui suíte de testes automatizados e integração com IA.`,
      en: `Fullstack ISP operations platform designed with multi-city architecture,
optimized landing pages, complete admin panel and validated APIs.
Includes automated testing suite and AI integration.`,
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
    architecture: [
      "App Router modular structure",
      "BFF API layer",
      "Domain-oriented component organization",
      "Multi-city logical isolation",
      "Validated REST endpoints",
    ],
    highlights: [
      "Automated unit and e2e testing",
      "Multi-module admin dashboard",
      "Landing page optimization for conversion",
      "API validation with Zod",
      "AI integration for enhanced functionality",
    ],
    impact: [
      "Centralized ISP operational management",
      "Improved consistency across city-level content",
      "Structured lead management workflow",
    ],
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
    shortDescription:
      "Fullstack ISP platform with self-service portal, admin dashboard and decoupled SGP drivers.",
    description: {
      pt: `Plataforma fullstack para provedor de internet regional,
incluindo landing pages comerciais, área do cliente com autoatendimento,
painel administrativo e integração desacoplada com múltiplos sistemas SGP.`,
      en: `Fullstack ISP platform for regional internet providers,
including commercial landing pages, customer self-service portal,
admin dashboard and decoupled SGP integrations.`,
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
    architecture: [
      "App Router fullstack architecture",
      "Server Actions + API Routes",
      "Domain-based modular structure",
      "Decoupled SGP driver layer",
      "JWT HttpOnly authentication",
    ],
    highlights: [
      "Multi-provider SGP integration",
      "Self-service customer portal",
      "Dynamic content management",
      "Secure admin authentication",
      "Mock driver for development fallback",
    ],
    impact: [
      "Unified digital operations for ISP",
      "Reduced support demand via self-service",
      "Lower coupling with external systems",
    ],
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
    shortDescription:
      "Fullstack multi-tenant SaaS for CRM, financial management, billing and AI-powered OCR.",
    description: {
      pt: `Sistema SaaS multi-tenant para gestão completa de óticas.
Inclui CRM, controle de pedidos, módulo financeiro com crediário,
billing por plano, portal de laboratório e OCR com IA.`,
      en: `Multi-tenant SaaS platform for optical store management.
Includes CRM, order workflow, financial module with installments,
subscription billing, lab portal and AI-powered OCR.`,
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
    architecture: [
      "Modular monolith",
      "Multi-tenant RBAC system",
      "JWT-based authentication",
      "Async job processing",
      "OCR AI integration",
    ],
    highlights: [
      "472 TypeScript files",
      "118 API routes",
      "36 Prisma models",
      "Multi-context user roles",
      "Integrated commercial + financial workflow",
    ],
    impact: [
      "Centralized operational workflow for optical stores",
      "Reduced manual data entry with OCR",
      "Structured billing and subscription management",
    ],
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
    shortDescription:
      "Fullstack real estate platform with public catalog, lead capture and authenticated admin panel.",
    description: {
      pt: `Plataforma imobiliária fullstack desenvolvida com Next.js 16.
Inclui site institucional, catálogo público com filtros,
SEO dinâmico por imóvel, captação de leads e painel administrativo autenticado.`,
      en: `Fullstack real estate platform built with Next.js 16.
Includes public catalog with filtering, dynamic SEO,
lead capture system and authenticated admin panel.`,
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
    architecture: [
      "App Router fullstack architecture",
      "JWT-based authentication",
      "RBAC via middleware",
      "Relational domain modeling with Prisma",
      "Cloud file storage integration",
    ],
    highlights: [
      "CRUD with ownership validation",
      "Conditional validation in lead API",
      "Activity logging for audit trail",
      "Dynamic metadata per property",
      "ISR for performance optimization",
    ],
    impact: [
      "Centralized real estate operations",
      "Structured lead capture workflow",
      "Improved SEO and property discoverability",
    ],
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
    shortDescription:
      "Fullstack digital product platform with PIX checkout, webhook processing and AI-assisted content.",
    description: {
      pt: `Plataforma fullstack para venda de produtos digitais educativos,
com checkout via PIX (Mercado Pago), webhook assíncrono,
entrega automatizada por e-mail e CMS de blog com apoio de IA.`,
      en: `Fullstack digital product platform featuring PIX checkout (Mercado Pago),
asynchronous webhook processing, automated email delivery
and AI-assisted blog content management.`,
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
    architecture: [
      "App Router fullstack architecture",
      "Server Actions + API Routes",
      "Asynchronous webhook processing",
      "Unified booking domain model",
      "External payment gateway integration",
    ],
    highlights: [
      "PIX QR code dynamic generation",
      "Idempotent webhook reconciliation",
      "Booking overlap conflict resolution",
      "AI-assisted editorial workflow",
      "Transactional email delivery",
    ],
    impact: [
      "Automated digital product delivery",
      "Reduced manual payment verification",
      "Unified booking and event management",
    ],
    links: [
      {
        label: "Live",
        href: "https://tia-emilia-next.vercel.app/",
      },
    ],
    seoTitle: "Tia Emília | Antonio Gomes",
  },
];
