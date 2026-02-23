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
    title: "Digital Net Telecom",
    liveUrl: "https://digital-net-telecom.vercel.app/",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    summary: {
      pt: "Landing page comercial com apresentação clara de planos e serviços.",
      en: "Commercial landing page with clear presentation of plans and services.",
    },
    description: {
      pt: "Estrutura pensada para conversão com comunicação direta, seções estratégicas e visual profissional.",
      en: "Conversion-oriented structure with direct communication, strategic sections, and professional visuals.",
    },
    challenge: {
      pt: "Evidenciar diferenciais de forma rápida para novos visitantes.",
      en: "Highlight service differentiators quickly for new visitors.",
    },
    solution: {
      pt: "Fluxo visual com foco em oferta, benefícios e contato imediato.",
      en: "Visual flow focused on offers, benefits, and immediate contact paths.",
    },
    results: {
      pt: "Experiência objetiva para usuários em busca de planos e informações técnicas.",
      en: "Objective experience for users looking for plans and technical information.",
    },
    highlights: {
      pt: [
        "Seções desenhadas para reduzir fricção.",
        "Leitura rápida em mobile e desktop.",
        "Código modular para iteração contínua.",
      ],
      en: [
        "Sections designed to reduce friction.",
        "Fast reading flow on mobile and desktop.",
        "Modular codebase for continuous iteration.",
      ],
    },
  },
  {
    slug: "provedor-connect",
    title: "Provedor Connect",
    liveUrl: "https://provedor-connect-sand.vercel.app/",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    summary: {
      pt: "Portal institucional com foco em clareza de serviços e credibilidade.",
      en: "Institutional portal focused on service clarity and credibility.",
    },
    description: {
      pt: "Projeto desenvolvido para comunicar soluções de conectividade com organização visual e linguagem direta.",
      en: "Built to communicate connectivity solutions with strong visual organization and direct language.",
    },
    challenge: {
      pt: "Comunicar proposta técnica sem tornar a navegação complexa.",
      en: "Communicate technical offerings without making navigation complex.",
    },
    solution: {
      pt: "Arquitetura de informação enxuta com blocos objetivos e CTA em pontos estratégicos.",
      en: "Lean information architecture with objective blocks and strategic CTA placement.",
    },
    results: {
      pt: "Página consistente para apresentação de marca e aquisição de novos contatos.",
      en: "Consistent page for brand presentation and new lead acquisition.",
    },
    highlights: {
      pt: [
        "Layout limpo com foco comercial.",
        "Componentes reutilizáveis para escalar páginas.",
        "Boas práticas de SEO técnico on-page.",
      ],
      en: [
        "Clean layout with commercial focus.",
        "Reusable components to scale pages.",
        "Good on-page technical SEO practices.",
      ],
    },
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
    title: "Gordo Construcoes",
    liveUrl: "https://gordo-construcoes.vercel.app/",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    summary: {
      pt: "Site institucional para serviços com foco em confiança e conversão.",
      en: "Institutional service website focused on trust and conversion.",
    },
    description: {
      pt: "Projeto pensado para apresentação de serviços, diferenciais e canais de contato em fluxo simples.",
      en: "Built to present services, differentiators, and contact channels in a simple flow.",
    },
    challenge: {
      pt: "Gerar percepção de credibilidade desde o primeiro contato.",
      en: "Build strong credibility perception from first contact.",
    },
    solution: {
      pt: "Estrutura orientada a prova social, clareza de serviço e facilidade de contato.",
      en: "Structure oriented to social proof, service clarity, and easy contact options.",
    },
    results: {
      pt: "Navegação simples e objetiva para captação de oportunidades.",
      en: "Simple and objective navigation built for opportunity capture.",
    },
    highlights: {
      pt: [
        "Comunicação direta e profissional.",
        "Boa leitura em telas pequenas.",
        "SEO base preparado para expansão.",
      ],
      en: [
        "Direct and professional communication.",
        "Strong readability on small screens.",
        "SEO baseline prepared for expansion.",
      ],
    },
  },
  {
    slug: "tia-emilia",
    title: "Tia Emilia",
    liveUrl: "https://tia-emilia-next.vercel.app/",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    summary: {
      pt: "Website com foco em presença digital clara, amigável e leve.",
      en: "Website focused on clear, friendly, and lightweight digital presence.",
    },
    description: {
      pt: "Projeto orientado a simplicidade visual com navegação intuitiva e estrutura pronta para evolução de conteúdo.",
      en: "Project designed around visual simplicity, intuitive navigation, and content-ready growth structure.",
    },
    challenge: {
      pt: "Apresentar marca e serviços de forma acolhedora e objetiva.",
      en: "Present brand and services in a welcoming yet objective way.",
    },
    solution: {
      pt: "Composição de seções com hierarquia clara e foco na experiência do visitante.",
      en: "Section composition with clear hierarchy and visitor-focused experience.",
    },
    results: {
      pt: "Entrega estável com bom tempo de carregamento e manutenção simples.",
      en: "Stable delivery with strong loading performance and simple maintenance.",
    },
    highlights: {
      pt: [
        "Fluxo de navegação sem ruído visual.",
        "Estrutura de código limpa.",
        "Base preparada para case study futuro.",
      ],
      en: [
        "Navigation flow with low visual noise.",
        "Clean code structure.",
        "Foundation ready for a future full case study.",
      ],
    },
  },
];
