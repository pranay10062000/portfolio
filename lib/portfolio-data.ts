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
  details: string[];
  impact: string;
  technologies: string[];
  href: string;
  linkLabel: string;
  period: string;
  kind: "robotics" | "research";
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

export const resumePath = "/assets/Pranay_Dumbhare_Resume.pdf";

export const navigationLinks: NavigationLink[] = [
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/#projects" },
  { label: "Skills", href: "/#skills" },
  { label: "About", href: "/#about" },
];

export const impactMetrics = [
  {
    value: "60%",
    label: "Lower API response times",
    detail: "Targeted APIs, measured with load tests and traces.",
  },
  {
    value: "90%",
    label: "Automated test coverage",
    detail: "Across 17 services, measured with JaCoCo.",
  },
  {
    value: "75%",
    label: "Less deployment time",
    detail: "Jenkins CI/CD pipelines and automated deployment scripts.",
  },
  {
    value: "70%",
    label: "Less feature development time",
    detail: "Reusable Codex skills and plugins for engineering tasks.",
  },
];

export const aboutCopy =
  "I am a software developer at Oracle with 3+ years of experience building backend services for account opening and lending. I work across API design, business logic, database persistence, testing, and deployment. Beyond feature development, I improve service performance and build AI-assisted tools that make engineering work more repeatable.";

export const experienceEntries: ExperienceEntry[] = [
  {
    company: "Oracle",
    companyUrl: "https://www.oracle.com/in/",
    role: "Application Developer 2",
    team: "Banking software · Account origination and lending",
    location: "Pune, Maharashtra",
    period: "Jul 2023 — Present",
    featured: true,
    bullets: [
      "Designed and built Java and Spring Boot microservices for account opening, implementing OpenAPI contracts, controllers, service logic, Oracle Database persistence, and automated tests.",
      "Integrated 20+ account-opening features with retail deposit and lending services to support loan processing and the creation of current and savings accounts.",
      "Built PATCH APIs and account-management endpoints for banking processes involving multiple stakeholders, reducing manual intervention by 35%.",
      "Resolved 120+ legacy code issues per patch cycle, helping reduce production bugs by 60%.",
      "Developed a GenAI-assisted credit assessment feature using credit bureau reports, reducing account-opening turnaround time by 60% compared with manual processing.",
      "Integrated Oracle Coherence distributed caching, reducing API latency by 40%; orchestrated asynchronous banking processes with Netflix Conductor.",
      "Reduced targeted API response times by 60% through asynchronous calls, database indexing, read-only flags, and removal of repeated service calls, guided by JMeter load tests and Zipkin traces.",
      "Built an agentic AI pipeline to automate unit testing and service-level API testing across 17 services, achieving 90% test coverage, measured with JaCoCo.",
      "Built Jenkins CI/CD pipelines and deployment scripts, reducing deployment time by 75%; configured on-premises test environments to meet customer deployment and performance requirements.",
      "Created Codex skills and plugins for deployment script generation, log analysis, and performance testing, reducing feature development time by 70%.",
      "Mentored 2 junior engineers in DevOps for 10+ environments, including cloud environments on OCI.",
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "REST APIs",
      "Oracle Database",
      "Oracle Coherence",
      "Netflix Conductor",
      "Generative AI",
      "Jenkins",
      "OCI",
    ],
  },
  {
    company: "Oracle",
    companyUrl: "https://www.oracle.com/in/",
    role: "Application Developer Intern",
    team: "Search and indexing prototypes",
    location: "Pune, Maharashtra",
    period: "May 2022 — Jul 2022",
    bullets: [
      "Built multi-source search and indexing prototypes, reducing query response time by 30%.",
      "Evaluated indexing and query strategies, documenting experiments and implementation decisions.",
      "Developed an Apache Lucene proof of concept for efficient data retrieval.",
    ],
    technologies: ["Apache Lucene", "Search", "Indexing"],
  },
];

export const workEntries: WorkEntry[] = [
  {
    eyebrow: "Robotics simulation and training",
    title: "Isaac Protocol",
    description:
      "Built a browser-based robotics editor with MuJoCo physics simulation and real-time 3D visualization, connecting interactive movement controls with robot training.",
    details: [
      "Implemented inverse-kinematics controls and structured action interfaces for robotic policies.",
      "Built reinforcement and imitation learning pipelines using PPO, kinematic retargeting, and domain randomization.",
    ],
    impact: "From human motion to robot training data",
    technologies: ["MuJoCo", "Inverse Kinematics", "PPO", "Reinforcement Learning"],
    href: "https://www.isaacprotocol.com/",
    linkLabel: "Visit Isaac Protocol",
    period: "Jan — Jul 2026 · Part-time project",
    kind: "robotics",
  },
  {
    eyebrow: "Cell nuclei identification and counting",
    title: "CoNIC",
    description:
      "Explored a hybrid deep-learning and image-processing approach to identify, classify, and count cell nuclei in medical images.",
    details: [
      "Integrated the provided dataset and baseline model, then tuned training and validation for cell-nuclei analysis.",
      "Combined learned features with texture and edge descriptors; first-author research published by Springer in 2023.",
    ],
    impact: "First-author research publication",
    technologies: ["Machine Learning", "Medical Image Analysis", "Model Tuning"],
    href: "https://link.springer.com/chapter/10.1007/978-3-031-31417-9_52",
    linkLabel: "Read the research paper",
    period: "Published May 2023",
    kind: "research",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    description: "Programming and data languages for backend services, automation, and research.",
    items: ["Java", "SQL", "Python", "JavaScript"],
  },
  {
    title: "Backend & Orchestration",
    description: "API contracts, service implementation, and asynchronous processes.",
    items: ["Spring Boot", "REST APIs", "Microservices", "OpenAPI", "Netflix Conductor"],
  },
  {
    title: "Data & Search",
    description: "Data persistence, distributed caching, and search prototypes.",
    items: ["Oracle Database", "Oracle Coherence", "Apache Lucene", "GraphQL"],
  },
  {
    title: "Cloud & Delivery",
    description: "Build pipelines, deployment automation, and environment support.",
    items: ["AWS", "OCI", "Jenkins", "CI/CD", "Git", "Linux", "Shell Scripting"],
  },
  {
    title: "Testing & Performance",
    description: "API tests, load analysis, distributed tracing, and coverage measurement.",
    items: ["JMeter", "Zipkin", "Postman", "Groovy", "JaCoCo", "Grafana"],
  },
  {
    title: "AI & Robotics",
    description: "AI-assisted engineering, image analysis, and robot simulation.",
    items: ["Generative AI", "Agentic AI", "OpenAI Codex", "TensorFlow", "OpenCV", "MuJoCo"],
  },
];

export const contactEmail = "pranaydumbhare1006@gmail.com";

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/pranay10062000" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/pranay-dumbhare/" },
  { label: "Email", href: `mailto:${contactEmail}` },
];

export const publicationUrl =
  "https://link.springer.com/chapter/10.1007/978-3-031-31417-9_52";

export const awardUrl =
  "https://drive.google.com/file/d/1RTOe0nG6mBOv6FfZHT_0aHN2MKVEH7EZ/view";
