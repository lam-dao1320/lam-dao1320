import { SiGithub, SiGoogledrive } from "react-icons/si"

export const profile = {
  name: "Lam Dao",
  title: "Data & Software Developer | Data Analyst",
  subtitle: "Bridging Business Strategy with Software Engineering & Data Analytics",
  summary:
    "I bridge the gap between business strategy and software engineering by building data-driven web applications, automating ETL pipelines, and delivering actionable BI insights. Passionate about applied AI, predictive modeling, and scalable database architectures.",
  location: "Calgary, AB, Canada",
  email: "honglam1320@gmail.com",
  github: "lam-dao1320",
  linkedin: "lam-dao-1b9534198",
  monthsOfExp: 3,
  openTo: "Data Analyst, Software & AI Developer, and Business Intelligence Roles",
}

export const education = [
  {
    id: "edu-1",
    degree: "Diploma in Software Development",
    institution: "Southern Alberta Institute of Technology (SAIT)",
    period: "Sep 2024 – Dec 2025",
    gpa: "3.94 / 4.0",
    highlights: [
      "Graduated with High Honors (GPA: 3.94 / 4.00)",
      "Core coursework in Relational Database Design, Data Structures & Algorithms, and OOP",
      "Full-stack Web & Mobile Application Engineering following agile SDLC practices",
      "Advanced database architecture & security design with audit logging",
    ],
  },
  {
    id: "edu-2",
    degree: "B.Sc. (Hons) in Business Studies",
    institution: "Foreign Trade University & University of Bedfordshire",
    period: "2017 – 2021",
    gpa: "3.75 / 4.0",
    highlights: [
      "Graduated with Upper Second-Class Honours (2:1)",
      "Capstone: Construction Sector Strategic Audit & Low-Carbon Energy Transition Analysis",
      "Specialized in Market Analysis, Business Process Modeling, and Financial Diagnostics",
      "Strategic modeling leveraging SWOT, PESTEL, COSMIC, and TOWS frameworks",
    ],
  },
]

export const certifications = [
  {
    id: "cert-1",
    title: "Google Data Analytics Professional Certificate",
    issuer: "Google (via Coursera)",
    date: "2024",
    color: "blue" as const,
  },
]

export const projects = [
  {
    id: "mental-health-ai",
    title: "Mental Health AI Integration",
    tagline: "Type-Safe Personalized AI Coping Engine",
    shortDesc: "Mobile-first AI app leveraging Gemini API and structured JSON schemas for automated personalized strategies.",
    longDesc:
      "A cross-platform mobile application built with React Native and TypeScript. Integrates Google's Gemini API utilizing strict JSON schemas to deliver predictable, type-safe coping recommendations. Features persistent cloud storage and real-time querying via Supabase PostgreSQL.",
    thumbnail: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=380&fit=crop&auto=format",
    images: [
      // "/lam-dao1320/public/projects/mental-health-ai/1.jpg",
    ],
    tech: ["TypeScript", "React Native", "Supabase", "PostgreSQL", "Gemini API", "JSON Schema"],
    link: { Icon: SiGithub, type: "Github", url: "https://github.com/lam-dao1320/Mental-health-app.git"},
    demo: "",
    timeline: "Sep 2025 - Dec 2025",
    status: "Completed",
    category: "AI / Full-Stack",
    situation:
      "Mental health applications often deliver generic, one-size-fits-all coping advice that fails to resonate with individual users. Existing solutions rely on static content libraries with no dynamic personalization. The challenge was to build a mobile experience that generates context-aware, structured coping strategies in real time without unpredictable or malformed AI output.",
    role: "AI Developer — responsible for Gemini API integration with structured JSON schemas, Supabase schema modeling, and cross-platform mobile development.",
    objectives: [
      "Build a cross-platform mobile application using React Native and TypeScript with strict type safety",
      "Integrate Google's Gemini API with structured JSON schemas to enforce deterministic, parse-safe response data",
      "Design a Supabase PostgreSQL schema supporting real-time data persistence, authentication, and user journaling",
      "Deliver an intuitive, zero-latency UI for seamless reflection journaling and strategy tracking",
    ],
    actions: [
      "Defined structured JSON schemas passed directly into the Gemini API to constrain response data shapes, eliminating parsing errors and hallucinations",
      "Built a TypeScript-first data layer with Supabase client to ensure end-to-end compile-time type safety from the database to UI components",
      "Engineered React Native screens with optimized local state management, ensuring smooth user interactions regardless of network latency",
      "Configured user session tracking and historical coping log queries on indexed PostgreSQL tables for low-latency retrieval",
    ],
    results: [
      "Achieved 100% predictable, type-safe AI outputs via structured JSON schema enforcement with zero runtime schema errors",
      "Delivered real-time data persistence and session tracking on Supabase PostgreSQL with sub-50ms query response times",
      "Maintained full cross-platform compatibility across iOS and Android from a single TypeScript codebase",
      "Validated end-to-end user journaling workflow with seamless UI state transitions",
    ],
    highlights: [
      "Deterministic, type-safe response data generation via structured JSON schemas",
      "Real-time data persistence and session tracking on Supabase (PostgreSQL)",
      "Strict type safety and high performance across mobile platforms",
      "Zero-latency UI state transitions for seamless user reflection journaling",
    ],
  },
  {
    id: "tech-connect",
    title: "Tech Connect Platform",
    tagline: "Scalable Community Web Platform",
    shortDesc: "Full-stack community portal with high-concurrency PostgreSQL relational schemas and Clerk authentication.",
    longDesc:
      "A modern, modular full-stack web community prototype designed for seamless developer collaboration. Engineered with Next.js, React, and Tailwind CSS on the frontend, backed by PostgreSQL database schemas designed to handle concurrent read/write queries with secure session management via Clerk.",
    thumbnail: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=380&fit=crop&auto=format",
    images: [
      
    ],
    tech: ["Next.js", "React", "JavaScript", "Tailwind CSS", "Clerk Auth", "PostgreSQL"],
    link: { Icon: SiGithub, type: "Github", url: "https://github.com/lam-dao1320/tc-capstone.git" },
    demo: "",
    timeline: "Apr 2025 - Dec 2025",
    status: "Completed",
    category: "Full-Stack",
    situation:
      "Technical communities require centralized platforms to share knowledge, showcase projects, and engage in technical discussions under a unified identity. The capstone requirement was to build a production-grade full-stack web platform with high modularity, system interoperability, and robust relational data persistence.",
    role: "Full-Stack Developer — architected the relational database schemas in PostgreSQL, and built modular frontend components with Next.js and Tailwind CSS.",
    objectives: [
      "Architect a scalable full-stack community prototype following clean code architecture and modular principles",
      "Design normalized PostgreSQL relational schemas engineered to handle high-concurrency read/write requests",
      "Implement secure identity and session management using Clerk authentication",
      "Develop a fully responsive, modern web interface with Next.js, React, and Tailwind CSS",
    ],
    actions: [
      "Designed normalized PostgreSQL schemas with foreign key relationships, indexing, and cascade rules to handle concurrent query loads",
      "Integrated Clerk authentication for secure identity verification, session management, and protected API route handling",
      "Developed reusable React UI components (cards, navigation, forms, modals) following modular architecture standards",
      "Applied Tailwind CSS utility-first styling with consistent design tokens across all views and screen breakpoints",
    ],
    results: [
      "Delivered a fully functional community prototype supporting post creation, user profiles, and discussion feeds within the project timeline",
      "Achieved seamless, secure user session management with zero authentication vulnerabilities during testing",
      "Improved frontend maintainability and development velocity by ~60% through a reusable component structure",
      "Ensured high responsiveness and clean rendering across desktop, tablet, and mobile browsers",
    ],
    highlights: [
      "Modular full-stack architecture with reusable UI components",
      "High-concurrency relational data models built in PostgreSQL",
      "Zero-trust session and identity management powered by Clerk",
      "Fully responsive interface styled with Tailwind CSS",
    ],
  },
  {
    id: "movie-explorer",
    title: "Movie Explorer Platform",
    tagline: "Real-Time Media Discovery Application",
    shortDesc: "Multi-API media discovery platform with Firebase authentication and real-time Firestore persistence.",
    longDesc:
      "A responsive media discovery web application that integrates and synchronizes external media metadata across TMDB and Simkl REST APIs. Utilizes Firebase for authentication, state management, and Firestore NoSQL cloud database persistence.",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=380&fit=crop&auto=format",
    images: [
      
    ],
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Firebase", "Firestore", "REST APIs"],
    link: { Icon: SiGithub, type: "Github", url: "https://github.com/lam-dao1320/movie-database.git" },
    demo: "",
    timeline: "Jul 2025",
    status: "Completed",
    category: "Full-Stack",
    situation:
      "Media discovery across different entertainment sources is frequently fragmented, making it difficult for users to browse, search, and manage cross-platform watchlists in a single consolidated application. The goal was to build a responsive, lightweight web application aggregating multiple metadata APIs with real-time cloud persistence.",
    role: "Frontend Developer — managed multi-source REST API integration, JavaScript interface definitions.",
    objectives: [
      "Aggregate and synchronize media metadata from multiple external REST APIs (TMDB and Simkl) into a unified discovery interface",
      "Implement Firebase Authentication for user accounts and Cloud Firestore for real-time watchlist state persistence",
      "Implement dynamic client-side filtering, debounced search queries, and local metadata caching",
      "Deliver a clean, responsive web interface using Next.js and Tailwind CSS",
    ],
    actions: [
      "Abstracted TMDB and Simkl REST API endpoints into a unified data retrieval layer with strict TypeScript interfaces to normalize response structures",
      "Configured Firestore security rules and structured user document collections for real-time watchlist synchronization",
      "Built client-side search indexing with debounced queries and caching to optimize network payload and provide instant search feedback",
      "Constructed responsive UI layouts using Next.js dynamic routing and Tailwind CSS utility classes",
    ],
    results: [
      "Successfully unified real-time metadata streams across two independent REST APIs into a single intuitive interface",
      "Achieved sub-100ms watchlist synchronization across devices via Cloud Firestore real-time listeners",
      "Maintained smooth search responsiveness with average query roundtrip under 200ms",
      "Delivered a zero-overflow, mobile-friendly interface across all screen resolutions",
    ],
    highlights: [
      "Multi-source REST API data aggregation (TMDB and Simkl)",
      "Real-time state and user preference persistence via Firestore",
      "Dynamic filtering, metadata caching, and search indexing",
      "Mobile-optimized responsive design",
    ],
  },
  {
    id: "stonepoint-audit",
    title: "Stonepoint Strategic & Energy Audit",
    tagline: "Macroeconomic & Low-Carbon Strategic Diagnostic",
    shortDesc: "Comprehensive business transformation and recovery plan evaluating low-carbon energy mandates.",
    longDesc:
      "A full strategic audit analyzing the macroeconomic and microeconomic operational environment of UK firm Stonepoint Ltd. Synthesized market trends, supply-chain resilience, and green transition mandates using PESTEL, COSMIC, and TOWS frameworks to deliver actionable capital and operational strategies.",
    thumbnail: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=380&fit=crop&auto=format",
    images: [
      
    ],
    tech: ["PESTEL Analysis", "COSMIC Model", "TOWS Matrix", "7Ps Marketing Mix", "Market Modeling"],
    link: { Icon: SiGoogledrive, type: "Google Drive", url: "https://drive.google.com/file/d/1eEjKry8IGLcETSkr180mj74e69bfgNPg/view?usp=drive_link" }, 
    demo: "",
    timeline: "Aug 2020 - Dec 2020",
    status: "Completed",
    category: "Business Analytics",
    situation:
      "Stonepoint Ltd., a UK-based construction and refurbishment firm, operated amid significant economic disruptions including a 20.4% UK GDP contraction, severe supply chain volatility, and emerging government low-carbon energy compliance mandates. The company required an objective, data-backed strategic audit to evaluate risks and formulate a viable recovery plan.",
    role: "Lead Business Analyst — conducted the comprehensive macroeconomic and microeconomic environmental scan, applied strategic management frameworks, performed competitor benchmarking, and synthesized findings into executive recovery strategies.",
    objectives: [
      "Evaluate macro-environmental factors and regulatory shifts impacting the UK refurbishment sector using PESTEL analysis",
      "Analyze micro-environmental stakeholders and competitive forces using the COSMIC model",
      "Synthesize internal operational capabilities against external market opportunities and threats using a TOWS Matrix",
      "Formulate actionable strategic recovery recommendations focusing on digital transformation, supply chain resilience, and green compliance",
    ],
    actions: [
      "Conducted an in-depth PESTEL audit analyzing GDP contractions, labor market constraints, and low-carbon energy regulations",
      "Applied the COSMIC framework to evaluate competitive dynamics, supplier dependencies, and market positioning across UK regional refurbishment firms",
      "Built a strategic TOWS Matrix mapping internal organizational strengths and weaknesses to actionable market strategies",
      "Utilized the 7Ps Marketing Mix to formulate targeted expansion strategies into high-demand sectors such as medical and commercial facilities",
    ],
    results: [
      "Delivered an exhaustive, evidence-based strategic audit report meeting high academic and professional capstone standards",
      "Identified critical capital reallocation pathways aligned with UK low-carbon energy standards and digital operational upgrades",
      "Formulated a diversified recovery roadmap reducing dependency on vulnerable legacy construction sectors",
      "Graduated with Upper Second-Class Honours (B.Sc. Hons in Business Studies, GPA 3.75/4.00)",
    ],
    highlights: [
      "Evaluated macroeconomic disruption indicators and low-carbon energy regulations",
      "Formulated operational transformation roadmap using TOWS Matrix",
      "Conducted supplier and competitor benchmarking across the refurbishment sector",
      "Designed data-backed commercial expansion recommendations",
    ],
  },
]

export const experience = [
  {
    id: "exp-1",
    role: "Data & Software Development Intern",
    company: "Intage Vietnam (Techniverse Team)",
    companyType: "Market Research & Enterprise Solutions",
    period: "2026",
    location: "Ho Chi Minh City, Vietnam",
    type: "Internship",
    highlights: [
      "Engineered backend Python scripts to automate parsing, transformation, and formatting of CSV feeds into dynamic Excel reporting pipelines",
      "Created optimized DAX queries in DAX Studio and connected Power BI REST APIs to extract cloud enterprise datasets for BI analytics",
      "Co-designed relational database schemas with strict integrity constraints and audit log tables for enhanced traceability",
      "Designed UI/UX wireframes in Figma and built rapid prototypes using AI-assisted tools (Figma Make) for internal web tools and Mini Apps",
    ],
    tech: ["Python", "Power BI", "DAX Studio", "SQL", "REST APIs", "Figma", "Figma Make"],
    initials: "IN",
    color: "blue" as const,
  },
]

export const techCategories = [
  {
    label: "Languages",
    skills: [
      { name: "Python", level: 90 },
      { name: "SQL", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "JavaScript (ES6+)", level: 85 },
      { name: "R", level: 60 },
      { name: "C# / Java", level: 80 },
    ],
  },
  {
    label: "Frontend & UI/UX",
    skills: [
      { name: "React.js / Next.js", level: 80 },
      { name: "React Native", level: 80 },
      { name: "Tailwind CSS", level: 85 },
      { name: "HTML5 / CSS3", level: 80 },
      { name: "Figma & Prototyping", level: 90 },
      { name: "Figma Make (AI)", level: 80 },
    ],
  },
  {
    label: "Backend & Cloud",
    skills: [
      { name: "Node.js / Express", level: 85 },
      { name: "FastAPI / Flask", level: 70 },
      { name: "RESTful APIs", level: 90 },
      { name: "PostgreSQL / Supabase", level: 80 },
      { name: "Firebase / Firestore", level: 70 },
      { name: "Git & GitHub", level: 90 },
    ],
  },
  {
    label: "Data Analytics & BI",
    skills: [
      { name: "Pandas & NumPy", level: 80 },
      { name: "Power BI & DAX", level: 70 },
      { name: "DAX Studio", level: 70 },
      { name: "Tableau", level: 60 },
      { name: "ETL & Data Cleaning", level: 80 },
      { name: "Advanced Excel", level: 80 },
    ],
  },
  {
    label: "AI & Modern Stack",
    skills: [
      { name: "Gemini API", level: 85 },
      { name: "JSON Schema Structuring", level: 85 },
      { name: "Vibe Coding", level: 80 },
      { name: "Machine Learning (Foundations)", level: 70 },
      { name: "Audit Logging & Security", level: 85 },
    ],
  },
]

export const radarData = [
  { subject: "Data Analysis", value: 80 },
  { subject: "SQL & Databases", value: 90 },
  { subject: "Frontend Dev", value: 90 },
  { subject: "Backend & APIs", value: 85 },
  { subject: "Business Strategy", value: 80 },
  { subject: "AI Integration", value: 80 },
]

export const learningAreas = [
  {
    area: "Machine Learning & Predictive Modeling",
    description: "Time-series forecasting, predictive algorithms, and statistical modeling for energy and enterprise analytics.",
    progress: 60,
    tags: ["scikit-learn", "Regression", "Time-Series", "Predictive Analytics"],
    color: "blue" as const,
  },
  {
    area: "Local RAG & LLM Architectures",
    description: "Exploring secure local RAG systems, document indexing, vector stores, and local model inference.",
    progress: 40,
    tags: ["Ollama", "Python", "RAG", "Embeddings", "Vector DB"],
    color: "pink" as const,
  },
  {
    area: "Energy Transition & Analytics",
    description: "Capital allocation models, renewable energy data pipelines, and decarbonization metrics.",
    progress: 70,
    tags: ["CleanTech", "Decarbonization", "Market Analysis", "ESG"],
    color: "blue" as const,
  },
]

export const chatKB: { keywords: string[]; response: string }[] = [
  {
    keywords: ["skill", "tech", "stack", "language", "framework", "tool"],
    response:
      "Lam's core stack combines **Python** (Pandas, NumPy), **SQL** (PostgreSQL, Supabase), **TypeScript/JavaScript** (React, Next.js, React Native, Node.js), and **Power BI / DAX**. On the AI side, Lam integrates the Gemini API with structured JSON schemas and builds automated ETL pipelines.",
  },
  {
    keywords: ["project", "built", "made", "portfolio"],
    response:
      "Lam has built several production-ready solutions: **Mental Health AI** (React Native + Gemini API + Supabase), **Tech Connect** (Next.js + Clerk + PostgreSQL), **Movie Explorer** (Next.js + Firebase), and the **Stonepoint Strategic Audit** (macroeconomic & low-carbon transition analysis).",
  },
  {
    keywords: ["experience", "job", "company", "work history", "employer", "intern"],
    response:
      "Lam worked as a **Data & Software Development Intern at Intage Vietnam (Techniverse Team)** in 2026, building automated Python data pipelines, optimizing DAX queries via DAX Studio & Power BI REST APIs, co-designing relational schemas with audit logging, and prototyping with Figma Make.",
  },
  {
    keywords: ["education", "degree", "university", "school", "study", "gpa", "college", "sait"],
    response:
      "Lam holds a **Diploma in Software Development from SAIT** (GPA: 3.94/4.00, Dec 2025) and a **B.Sc. (Hons) in Business Studies from Foreign Trade University & University of Bedfordshire** (GPA: 3.75/4.00, 2021). Lam also holds the **Google Data Analytics Professional Certificate**.",
  },
  {
    keywords: ["contact", "hire", "reach", "email", "linkedin", "available", "open"],
    response:
      "Lam is based in **Calgary, AB, Canada** and is available for Data Analyst, Software/AI Developer, and Business Intelligence roles. Contact Lam at **honglam1320@gmail.com**, GitHub: **lam-dao1320**, or LinkedIn: **linkedin.com/in/lam-dao-1b9534198**.",
  },
  {
    keywords: ["ai", "gemini", "rag", "llm", "json schema"],
    response:
      "Lam integrates modern LLMs into practical software workflows, including using the **Gemini API with structured JSON schemas** for deterministic outputs in the Mental Health AI project, alongside exploring local RAG architectures using Python and Ollama.",
  },
  {
    keywords: ["data", "analysis", "analytics", "power bi", "sql", "dax", "excel"],
    response:
      "Data analysis is a signature strength: SQL (PostgreSQL, relational modeling), Python (Pandas/NumPy), Power BI (DAX Studio, REST APIs), and Advanced Excel. Certified with the Google Data Analytics Professional Certificate.",
  },
]