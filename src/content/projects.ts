import type { Locale } from "@/content/profile";

type LocalizedText = Record<Locale, string>;
type LocalizedList = Record<Locale, string[]>;

export type Project = {
  slug: string;
  title: string;
  liveUrl: string;
  stack: string[];
  summary: LocalizedText;
  description: LocalizedText;
  challenge: LocalizedText;
  solution: LocalizedText;
  results: LocalizedText;
  highlights: LocalizedList;
};

export const projects: Project[] = [
  {
    slug: "ong-tudo-por-amor",
    title: "ONG Tudo por Amor",
    liveUrl: "https://nextjs-ong-tudo-por-amor.vercel.app/",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    summary: {
      pt: "Site institucional com foco em clareza, captação e navegação acessível.",
      en: "Institutional website focused on clarity, donations, and accessible navigation.",
    },
    description: {
      pt: "Projeto focado em apresentar a atuação da ONG com conteúdo direto, layout limpo e estrutura pronta para evolução contínua.",
      en: "Project focused on showcasing NGO initiatives with direct content, clean layout, and a structure ready for ongoing evolution.",
    },
    challenge: {
      pt: "Transformar informações institucionais em uma experiência simples e confiável.",
      en: "Turn institutional information into a simple and trustworthy experience.",
    },
    solution: {
      pt: "Organização por seções objetivas com chamadas para ação claras e hierarquia visual consistente.",
      en: "Structured objective sections with clear calls to action and consistent visual hierarchy.",
    },
    results: {
      pt: "Base sólida para presença digital com performance e boa leitura em dispositivos móveis.",
      en: "Strong digital presence foundation with performance and good readability on mobile devices.",
    },
    highlights: {
      pt: [
        "Interface orientada a conteúdo e confiança.",
        "Performance otimizada com renderização rápida.",
        "Arquitetura fácil de manter e evoluir.",
      ],
      en: [
        "Content-first interface built for trust.",
        "Performance-optimized for fast rendering.",
        "Architecture designed for maintainability.",
      ],
    },
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
    slug: "otica-plus-app",
    title: "Otica Plus App",
    liveUrl: "https://otica-plus-app.vercel.app/",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    summary: {
      pt: "Aplicação web com abordagem moderna para vitrine e presença digital.",
      en: "Modern web app approach for storefront and digital presence.",
    },
    description: {
      pt: "Case com atenção em apresentação visual, organização de conteúdo e experiência fluida.",
      en: "Case focused on visual presentation, content organization, and smooth interaction.",
    },
    challenge: {
      pt: "Equilibrar estética e performance em uma interface visualmente rica.",
      en: "Balance aesthetics and performance in a visually rich interface.",
    },
    solution: {
      pt: "Uso de componentes leves e estrutura orientada a carregamento eficiente.",
      en: "Lightweight components and structure optimized for efficient loading.",
    },
    results: {
      pt: "Entrega de navegação consistente com boa percepção de velocidade.",
      en: "Delivered consistent navigation with strong speed perception.",
    },
    highlights: {
      pt: [
        "Design limpo e funcional.",
        "Estrutura escalável para futuras features.",
        "Componentização para manutenção simplificada.",
      ],
      en: [
        "Clean and functional design.",
        "Scalable structure for future features.",
        "Componentized code for easier maintenance.",
      ],
    },
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
