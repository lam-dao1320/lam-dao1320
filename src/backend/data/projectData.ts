interface Project {
  id: string;
  title: string;
  shortDescription: string;
  problemStatement: string[];
  solution: string[];
  caseStudySections?: {
    title: string;
    items: {
      title?: string;
      body: string;
    }[];
  }[];
  coverImage: string;
  galleryImages: string[];
  techStack: string[];
  role: string;
  timeline: string;
  liveDemoUrl?: string;
  githubUrl?: string;
  videoUrl?: string;
  videoLabel?: string;
  isProtected?: boolean; // For projects with protected code
}

export const projects: Project[] = [
  {
    id: "mental-health-ai",
    title: "Mental Health AI Integration",
    shortDescription:
      "A cross-platform mobile application combining React Native and Google's Gemini API with strict JSON schema enforcement to deliver real-time, deterministic, and personalized coping strategies.",
    problemStatement: [
      "Mental health support applications frequently deliver generic, static coping advice that fails to adapt to individual emotional states. Furthermore, integrating LLMs often introduces risks of hallucinated, malformed, or unpredictable output shapes that break mobile client rendering during critical user moments.",
    ],
    solution: [
      "I built a type-safe mobile application in React Native and TypeScript, enforcing deterministic LLM responses via structured JSON schemas in the Gemini API and persisting telemetry and journaling records into Supabase PostgreSQL.",
    ],
    caseStudySections: [
      {
        title: "System Architecture & Type Safety",
        items: [
          {
            title: "1. Deterministic AI via Structured JSON Schemas",
            body: "To eliminate hallucinated keys or broken string formatting, I defined strict JSON schemas passed directly to the Gemini API. This guaranteed runtime type compatibility with the TypeScript client layer and eliminated response parsing errors across all user sessions.",
          },
          {
            title: "2. Cloud Persistence & Telemetry Modeling",
            body: "I designed a normalized relational database in Supabase (PostgreSQL) configured with indexed user reflection tables, authentication sessions, and historical coping log queries capable of returning data in under 50ms.",
          },
          {
            title: "3. Optimistic UI & Cross-Platform Performance",
            body: "Using React Native and TypeScript, I engineered a shared mobile codebase for iOS and Android with optimistic state updates to ensure zero-latency UI transitions while the background API handled generation workflows.",
          },
        ],
      },
      {
        title: "The Core Technical Challenge: Zero-Error AI Response Contracts",
        items: [
          {
            title: "The Problem",
            body: "Mobile client UIs require predictable object structures to render guided reflection steps, coping actions, and mood trackers. Traditional free-form LLM text generation requires complex regex parsing and frequently breaks when JSON is improperly closed.",
          },
          {
            title: "The Solution",
            body: "I created an end-to-end type-safe data pipeline that bound TypeScript interface definitions with the Gemini API's native structured outputs schema, backed by local validation before state dispatch. This achieved a 100% parse-safe execution rate in automated testing.",
          },
        ],
      },
      {
        title: "Testing, Reliability & Delivery",
        items: [
          {
            title: "Data Integrity & Schema Testing",
            body: "I validated edge cases involving partial network dropouts, retry mechanisms, and concurrent journaling syncs, ensuring user reflection data is cached locally before flushing to Supabase.",
          },
          {
            title: "Performance Validation",
            body: "Conducted iterative mobile device testing on iOS and Android to maintain smooth 60fps animations and sub-50ms query latency on indexed historical logs.",
          },
        ],
      },
    ],
    coverImage: "",
    galleryImages: [
    //   "/lam-dao1320/public/projects/mental-health-ai/1.png",
    ],
    techStack: [
      "React Native",
      "TypeScript",
      "Gemini API",
      "JSON Schema",
      "Supabase",
      "PostgreSQL",
      "REST APIs",
      "Tailwind CSS",
    ],
    role: "AI Developer",
    timeline: "2025",
    liveDemoUrl: "",
    githubUrl: "https://github.com/lam-dao1320/Mental-health-app.git",
    videoUrl: "",
    videoLabel: "Watch Demo",
    isProtected: false,
  },

  {
    id: "tech-connect",
    title: "Tech Connect Platform",
    shortDescription:
      "A modular full-stack community web platform designed for developer collaboration, technical post authoring, and discussions with high-concurrency relational schemas and Clerk authentication.",
    problemStatement: [
      "Technical teams and developer communities are often fragmented across disparate platforms without centralized identity, modular discussion boards, or scalable data architecture capable of supporting rapid content growth.",
    ],
    solution: [
      "I co-architected a full-stack platform using Next.js, React, and PostgreSQL, implementing zero-trust authentication via Clerk and normalized relational data schemas optimized for high-concurrency read/write operations.",
    ],
    caseStudySections: [
      {
        title: "System Architecture & Data Modeling",
        items: [
          {
            title: "1. High-Concurrency Relational Schemas",
            body: "I designed normalized PostgreSQL schemas with strict foreign key constraints, indexing strategies, and cascading rules to support fast feed rendering, threaded comments, and user profiles under high traffic.",
          },
          {
            title: "2. Identity & Protected API Routing",
            body: "Integrated Clerk for secure identity management, handling JWT tokens, OAuth authentication providers, and protected middleware routes inside Next.js to safeguard sensitive platform actions.",
          },
          {
            title: "3. Modular Component Design System",
            body: "Constructed a reusable React UI component library styled with Tailwind CSS, establishing a standardized design token system across 12+ dynamic views.",
          },
        ],
      },
      {
        title: "Engineering Bottleneck: Concurrency & Component Reusability",
        items: [
          {
            title: "The Problem",
            body: "During sprint deliveries, rapid frontend page creation was bottlenecked by inconsistent backend response schemas and unstandardized UI components, risking development delays and regression errors.",
          },
          {
            title: "The Solution",
            body: "I established strict backend response contracts and decoupled UI elements into isolated, reusable cards, modals, and navigation components. This reduced new feature development time by ~60% in the final delivery sprint.",
          },
        ],
      },
      {
        title: "Quality Assurance & Multi-Device Testing",
        items: [
          {
            title: "Security & Auth Verification",
            body: "Conducted end-to-end security checks on session lifecycles, route guards, and token renewals to guarantee zero authentication bypass vulnerabilities.",
          },
          {
            title: "Cross-Device Responsiveness",
            body: "Validated responsive breakpoints and layout rendering across mobile, tablet, and ultra-wide displays using Tailwind CSS utility standards.",
          },
        ],
      },
    ],
    coverImage: "/projects/tech-connect.png",
    galleryImages: [
      "/projects/tech-connect.png",
      "/projects/tech-connect/tc-1.png",
      "/projects/tech-connect/tc-2.png",
      "/projects/tech-connect/tc-3.png",
    ],
    techStack: [
      "Next.js",
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Clerk Auth",
      "PostgreSQL",
      "Node.js",
      "Git",
    ],
    role: "Full-Stack Developer",
    timeline: "2026",
    liveDemoUrl: "",
    githubUrl: "https://github.com/lam-dao1320/tc-capstone.git",
    videoUrl: "",
    videoLabel: "Platform Overview",
    isProtected: false,
  },

  {
    id: "movie-explorer",
    title: "Movie Explorer Platform",
    shortDescription:
      "A lightweight, responsive media discovery web application aggregating real-time external REST APIs with Firestore NoSQL cloud persistence and multi-device state synchronization.",
    problemStatement: [
      "Users frequently struggle to discover and organize media across multiple fragmented streaming databases, resulting in disjointed watchlists and sluggish client-side search experiences.",
    ],
    solution: [
      "I built a responsive web application in Next.js, React, and TypeScript that normalizes multiple external REST APIs (TMDB and Simkl) into a single unified search layer backed by real-time Firestore persistence.",
    ],
    caseStudySections: [
      {
        title: "API Aggregation & Cloud Architecture",
        items: [
          {
            title: "1. Multi-Source API Normalization Layer",
            body: "Engineered an abstraction layer with TypeScript interfaces that normalizes disparate payload schemas from TMDB and Simkl REST APIs into a consistent canonical media format.",
          },
          {
            title: "2. Real-Time NoSQL Watchlist Sync",
            body: "Structured Firebase Authentication and Cloud Firestore security rules, using real-time collection listeners to sync user watchlists across browser tabs with sub-100ms propagation.",
          },
          {
            title: "3. Client-Side Query Optimization",
            body: "Implemented debounced search inputs, local metadata caching, and dynamic filtering to minimize external API call overhead and maintain average search response times under 200ms.",
          },
        ],
      },
      {
        title: "Key Challenge: Payload Inconsistencies & Search Latency",
        items: [
          {
            title: "The Problem",
            body: "Calling multiple third-party APIs concurrently often resulted in inconsistent metadata shapes, missing fields, and rate-limiting bottlenecks during rapid user typing.",
          },
          {
            title: "The Solution",
            body: "I created custom data adapter services to handle null-fallbacks and implemented debounced client-side queries with cached search indexes to protect API rate limits and ensure smooth rendering.",
          },
        ],
      },
      {
        title: "Delivery & UI Polish",
        items: [
          {
            title: "Mobile-First Layout",
            body: "Constructed responsive card grids and modal inspectors using Tailwind CSS and Next.js dynamic routing, eliminating horizontal overflow across all viewport widths.",
          },
        ],
      },
    ],
    coverImage: "/projects/movie-explorer.png",
    galleryImages: [
      "/projects/movie-explorer.png",
      "/projects/movie-explorer/movie-1.png",
      "/projects/movie-explorer/movie-2.png",
    ],
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Firebase Auth",
      "Cloud Firestore",
      "TMDB API",
      "REST APIs",
    ],
    role: "Full-Stack Developer",
    timeline: "2026",
    liveDemoUrl: "",
    githubUrl: "https://github.com/lam-dao1320/movie-database.git",
    videoUrl: "",
    videoLabel: "Explore Demo",
    isProtected: false,
  },

  {
    id: "stonepoint-audit",
    title: "Stonepoint Strategic & Low-Carbon Energy Audit",
    shortDescription:
      "A comprehensive business strategy and economic recovery audit for a UK refurbishment firm facing macroeconomic disruptions and low-carbon energy transition mandates.",
    problemStatement: [
      "Stonepoint Ltd. faced compound pressures from COVID-19 macroeconomic contractions (20.4% UK GDP decline), rising material and labor costs, and aggressive Net Zero regulatory compliance requirements requiring urgent strategic reallocation of capital.",
    ],
    solution: [
      "I led a quantitative and strategic audit synthesizing PESTEL, COSMIC, TOWS, and 7Ps frameworks to formulate an actionable 4-pillar recovery roadmap centered on green building compliance, digital transformation, and healthcare sector expansion.",
    ],
    caseStudySections: [
      {
        title: "Analytical Frameworks & Economic Scanning",
        items: [
          {
            title: "1. Macro & Micro-Environmental Modeling (PESTEL & COSMIC)",
            body: "Conducted an in-depth diagnostic assessing post-Brexit trade friction, supply-chain bottlenecks, and UK Building Safety Act compliance milestones across regional construction markets.",
          },
          {
            title: "2. Strategic Synthesis & Strategy Clustering (TOWS)",
            body: "Built a strategic TOWS matrix cross-referencing internal technical strengths and operational liabilities against external green subsidy incentives, deriving four prioritized strategic initiatives.",
          },
          {
            title: "3. Commercial Strategy & 7Ps Transformation",
            body: "Re-engineered Stonepoint's commercial positioning using the 7Ps marketing mix to target underserved medical refurbishment and sustainable public-sector infrastructure contracts.",
          },
        ],
      },
      {
        title: "Key Bottleneck: Balancing Capital Allocation & Regulatory Mandates",
        items: [
          {
            title: "The Problem",
            body: "The primary challenge was balancing immediate cash flow recovery in a high-inflation environment while securing long-term viability under strict UK low-carbon energy mandates.",
          },
          {
            title: "The Solution",
            body: "I developed a phased capital reallocation strategy, recommending phased digital supply-chain tracking and green certifications to bid on high-margin sustainability-mandated public sector tenders.",
          },
        ],
      },
      {
        title: "Project Outcome & Academic Recognition",
        items: [
          {
            title: "Excellence Distinction",
            body: "Delivered a comprehensive board-level strategic audit that was recognized as the cohort benchmark, graduating with Upper Second-Class Honours (B.Sc. Hons in Business Studies, GPA 3.75/4.00).",
          },
        ],
      },
    ],
    coverImage: "/projects/stonepoint.png",
    galleryImages: [
      "/projects/stonepoint.png",
      "/projects/stonepoint/stonepoint-1.png",
      "/projects/stonepoint/stonepoint-2.png",
    ],
    techStack: [
      "PESTEL Analysis",
      "COSMIC Model",
      "TOWS Matrix",
      "7Ps Marketing Mix",
      "Market Analysis",
      "Financial Modeling",
    ],
    role: "Lead Business Analyst & Strategist",
    timeline: "2021",
    liveDemoUrl: "",
    githubUrl: "",
    videoUrl: "",
    videoLabel: "Read Executive Summary",
    isProtected: false,
  },
]