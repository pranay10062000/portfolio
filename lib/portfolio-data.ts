export type NavigationLink = {
  label: string;
  href: string;
};

export type ExperienceEntry = {
  company: string;
  companyUrl: string;
  role: string;
  team: string;
  location: string;
  period: string;
  bullets: string[];
  technologies: string[];
  featured?: boolean;
};

export type WorkEntry = {
  eyebrow: string;
  title: string;
  description: string;
  impact: string;
  technologies: string[];
  accent: "orange" | "blue" | "green" | "violet";
};

export type SkillGroup = {
  title: string;
  description: string;
  items: string[];
};

export type SocialLabel = "GitHub" | "LinkedIn" | "Email";

export type SocialLink = {
  label: SocialLabel;
  href: string;
};

export const resumePath = "/assets/Pranay_Dumbhare_Java_Backend_Developer.pdf";

export const navigationLinks: NavigationLink[] = [
  { label: "Experience", href: "/#experience" },
  { label: "Work", href: "/#work" },
  { label: "Skills", href: "/#skills" },
  { label: "About", href: "/#about" },
];

export const aboutCopy =
  "I am a Java backend engineer with 3+ years of experience building banking microservices at Oracle. My work spans feature development, performance engineering, automated testing, CI/CD, and GenAI-enabled developer workflows—so I can take a backend problem from implementation through reliable delivery and production support.";

export const experienceEntries: ExperienceEntry[] = [
  {
    company: "Oracle",
    companyUrl: "https://www.oracle.com/in/",
    role: "Software Developer",
    team: "Banking Origination Team",
    location: "Pune, Maharashtra",
    period: "Jul 2023 — Present",
    featured: true,
    bullets: [
      "Develop Java and Spring Boot microservices with Oracle SQL-backed APIs for Retail Deposits and Retail Lending, supporting loan processing and CASA account onboarding.",
      "Built an end-to-end GenAI-assisted credit-scoring workflow using credit bureau reports, reducing account-opening turnaround time by 60% versus manual processing.",
      "Lead OBO and OBDX performance engineering as SPOC, using JMeter and Zipkin to diagnose bottlenecks and reduce targeted API response times by 60%.",
      "Created reusable OpenAI Codex skills and plugins for performance workflows, deployment-script generation, log analysis, and developer automation.",
      "Developed automated unit and service-level API tests across 17 services, reaching 80% test coverage and improving regression confidence.",
      "Automated microservice deployments and monitoring through Jenkins CI/CD pipelines, cutting software delivery cycle time by 75%.",
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "Microservices",
      "Oracle SQL",
      "REST APIs",
      "Jenkins",
      "JMeter",
      "Zipkin",
      "GenAI",
    ],
  },
  {
    company: "Adsys",
    companyUrl: "https://adsys.in/",
    role: "Machine Learning Intern",
    team: "Medical Image Analysis",
    location: "Remote",
    period: "Jan 2023 — Jun 2023",
    bullets: [
      "Developed medical-image segmentation and classification workflows for red blood cells, white blood cells, and platelets, achieving 94% accuracy.",
      "Collaborated with medical domain experts to validate model outputs and translate research findings into practical clinical workflows.",
    ],
    technologies: ["Python", "TensorFlow", "OpenCV", "CNN", "Roboflow"],
  },
  {
    company: "Oracle",
    companyUrl: "https://www.oracle.com/in/",
    role: "Application Developer Intern",
    team: "Leasing and Lending Team",
    location: "Pune, Maharashtra",
    period: "May 2022 — Jul 2022",
    bullets: [
      "Reduced query response time by 30% by prototyping indexing and query strategies with Apache Lucene and GraphQL.",
      "Authored technical documentation for the prototypes to support knowledge transfer and future team onboarding.",
    ],
    technologies: ["Java", "Spring Boot", "Apache Lucene", "GraphQL"],
  },
];

export const workEntries: WorkEntry[] = [
  {
    eyebrow: "Enterprise backend",
    title: "Banking Origination Services",
    description:
      "Java and Spring Boot microservices and Oracle SQL-backed APIs for Retail Deposits and Retail Lending workflows, including loan processing and CASA onboarding.",
    impact: "End-to-end feature ownership",
    technologies: ["Java", "Spring Boot", "Microservices", "Oracle SQL", "REST APIs"],
    accent: "orange",
  },
  {
    eyebrow: "Applied GenAI",
    title: "Credit-Scoring Workflow",
    description:
      "An end-to-end, GenAI-assisted credit-scoring flow that uses credit bureau reports to reduce manual effort during account opening.",
    impact: "60% faster turnaround",
    technologies: ["GenAI", "Java", "Spring Boot", "Credit Bureau Reports"],
    accent: "violet",
  },
  {
    eyebrow: "Engineering productivity",
    title: "Performance & Developer Automation",
    description:
      "Reusable Codex skills and plugins for performance lifecycle tasks, deployment scripts, log analysis, and repeatable developer workflows.",
    impact: "Less repetitive manual work",
    technologies: ["OpenAI Codex", "JMeter", "Zipkin", "Jenkins", "Linux"],
    accent: "blue",
  },
  {
    eyebrow: "Personal project",
    title: "Serve.Eco",
    description:
      "A Supabase-backed environmental community platform with sustainability event coordination, eco-friendly marketplace, and blogging modules.",
    impact: "Community, events & marketplace",
    technologies: ["Supabase", "JavaScript", "Community Platform"],
    accent: "green",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    description: "Core programming and data languages used across backend, automation, and ML work.",
    items: ["Java", "SQL", "Python", "JavaScript"],
  },
  {
    title: "Backend & APIs",
    description: "Service development, data access, search, and API design for enterprise applications.",
    items: [
      "Spring Boot",
      "Microservices",
      "REST APIs",
      "Oracle SQL",
      "GraphQL",
      "Apache Lucene",
      "Swagger / OpenAPI",
      "Generative AI",
    ],
  },
  {
    title: "Cloud & Delivery",
    description: "Tools used to automate builds, deployments, and cloud-aligned delivery workflows.",
    items: ["AWS", "OCI", "Git", "Jenkins", "CI/CD", "Linux"],
  },
  {
    title: "Quality & Performance",
    description: "Testing, load analysis, tracing, and observability across distributed services.",
    items: [
      "Unit Testing",
      "API Testing",
      "Postman",
      "JMeter",
      "Load Testing",
      "Zipkin",
      "Grafana",
    ],
  },
];

export const contactEmail = "pranaydumbhare1006@gmail.com";

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/pranay10062000" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/pranay-dumbhare/" },
  { label: "Email", href: `mailto:${contactEmail}` },
];

export const publicationUrl =
  "https://link.springer.com/chapter/10.1007/978-3-031-31417-9_52#citeas";

export const awardUrl =
  "https://drive.google.com/file/d/1RTOe0nG6mBOv6FfZHT_0aHN2MKVEH7EZ/view";
