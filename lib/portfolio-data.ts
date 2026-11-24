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
  note?: string;
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

export type CredentialEntry = {
  title: string;
  issuer: string;
  kind: "Certification" | "Course certificate";
  issued: string;
  validUntil?: string;
  credentialId?: string;
  href: string;
  linkLabel: string;
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
  { label: "Community", href: "/#community" },
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
  "I am a software developer at Oracle with 3+ years of experience building backend services for account origination, account opening, and lending. My work spans API contracts, business logic, database persistence, testing, and deployment, alongside performance engineering and AI-assisted developer tools. Outside enterprise software, I have built robotics simulations, worked on medical image models, and contributed to community and student mentoring initiatives.";

export const experienceEntries: ExperienceEntry[] = [
  {
    company: "Oracle",
    companyUrl: "https://www.oracle.com/in/",
    role: "Application Developer 2",
    team: "Banking software · Account origination and lending",
    location: "Pune, Maharashtra",
    period: "Jul 2023 — Present",
    featured: true,
    note: "Promoted in August 2026.",
    bullets: [
      "Designed REST API contracts in Swagger/OpenAPI YAML for account origination, defining interfaces for loan applications and the opening of current and savings accounts.",
      "Implemented Java and Spring Boot microservices end to end: API controllers, service-layer business logic, Oracle Database persistence, and automated tests for account opening and lending.",
      "Integrated 20+ account-opening features with retail deposit and lending services, collaborating across teams to support loan processing and current and savings account creation.",
      "Built PATCH APIs and relationship-management endpoints for banking processes involving multiple stakeholders, reducing manual intervention by 35%.",
      "Developed a GenAI-assisted credit assessment feature to analyze credit bureau reports for account origination, reducing full account-opening turnaround time by 60% versus manual processing.",
      "Integrated Oracle Coherence distributed caching into banking services, reducing API latency by 40% for the measured operations.",
      "Orchestrated multi-step banking processes with Netflix Conductor for asynchronous service execution.",
      "Served as the point of contact for performance engineering across loan-processing and digital-banking services, using JMeter load tests and Zipkin distributed traces to investigate slow requests and downstream service calls.",
      "Reduced targeted API response times by 60% through asynchronous service calls, database indexing, read-only flags, and removal of unnecessary or repeated downstream calls identified during load testing and trace analysis.",
      "Resolved 120+ legacy code issues per patch cycle in banking services, contributing backend fixes that helped reduce production bugs by 60%.",
      "Built an agentic AI testing pipeline across 17 services, achieving 90% test coverage with JaCoCo; implemented unit and service-level API tests using Groovy and Postman.",
      "Built Jenkins CI/CD pipelines and Linux shell scripts to automate banking microservice builds and deployments, reducing deployment time by 75%.",
      "Created reusable Codex skills and plugins for deployment script generation, application log analysis, and performance testing; packaged recurring engineering procedures as task-specific AI instructions, reducing feature development time by 70%.",
      "Configured on-premises test environments for banking services, collaborating with engineering and customer-support teams on customer deployment, CI/CD, and performance requirements.",
      "Mentored 2 junior engineers to lead DevOps activities across 10+ environments, including cloud environments on Oracle Cloud Infrastructure (OCI).",
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
    company: "Adsys",
    companyUrl: "https://adsys.in/",
    role: "Machine Learning Intern",
    team: "Medical image analysis",
    // TODO: Confirm the internship location; do not infer that it was remote.
    location: "",
    period: "Jan 2023 — Jun 2023",
    bullets: [
      // The 94% result is retained from the detailed resume. TODO: Confirm evaluation task, dataset, and test-set size.
      "Developed CNN-based segmentation and classification models to identify red and white blood cells and platelets with 94% accuracy, using TensorFlow, OpenCV, and Roboflow.",
      "Collaborated with medical domain experts to review model outputs and refine image-processing and classification logic for the blood-cell identification task.",
    ],
    technologies: ["Python", "TensorFlow", "OpenCV", "CNNs", "Roboflow"],
  },
  {
    company: "Oracle",
    companyUrl: "https://www.oracle.com/in/",
    role: "Application Developer Intern",
    team: "Search and indexing prototypes",
    location: "Pune, Maharashtra",
    period: "May 2022 — Jul 2022",
    bullets: [
      "Built Spring Boot search and indexing prototypes for queries across multiple data sources, using REST APIs and GraphQL in the search implementation and reducing query response time by 30%.",
      "Developed an Apache Lucene proof of concept to evaluate indexed data retrieval and explore global search across multiple data sources.",
      "Compared indexing and query strategies; documented prototype experiments and implementation decisions for team knowledge transfer and future search development.",
    ],
    // The separate Lucene proof of concept is not assumed to have produced the 30% result.
    technologies: ["Java", "Spring Boot", "REST APIs", "GraphQL", "Apache Lucene"],
  },
];

export const workEntries: WorkEntry[] = [
  {
    eyebrow: "Robotics simulation and training",
    title: "Isaac Protocol",
    description:
      "Built a browser-based robotics editor with MuJoCo physics simulation and real-time 3D visualization, connecting interactive movement controls with robot training.",
    details: [
      "Implemented inverse kinematics controls for robot positioning and structured action interfaces for robotic policies, connecting movement inputs with the simulation environment.",
      "Converted raw human motion into multi-task humanoid training data through kinematic retargeting, mapping recorded movements to a robot model.",
      "Engineered reinforcement and imitation learning pipelines, using Proximal Policy Optimization (PPO) for policy training and domain randomization to vary simulated training conditions.",
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
      "Developed a hybrid medical image analysis approach for colon-nuclei segmentation, classification, and counting, building on a supplied dataset and baseline model.",
    details: [
      "Integrated the provided CoNIC 2022 histology dataset with the HoVer-Net baseline and tuned the model for colon-nuclei segmentation, classification, and counting.",
      "Combined ResNet50-based features with local binary pattern (LBP) and histogram of oriented gradients (HOG) descriptors to incorporate image texture and edge information.",
      "Trained and validated the hybrid model on the supplied dataset, evaluating segmentation, classification, and nuclei-counting outputs against the existing baseline approach.",
      "Published the research as first author in the CVIP 2022 proceedings, Communications in Computer and Information Science, vol. 1777 (Springer, May 2023).",
    ],
    // TODO: Add verified evaluation metrics; do not restore the unconfirmed 91% or 3% claims.
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
    title: "AI Tools",
    description: "Reusable AI-assisted engineering and developer automation.",
    items: ["Generative AI", "Agentic AI", "OpenAI Codex"],
  },
  {
    title: "Robotics",
    description: "Robot simulation, movement controls, and policy training.",
    items: ["MuJoCo", "Inverse Kinematics", "PPO", "Reinforcement Learning", "Imitation Learning"],
  },
  {
    title: "ML Libraries",
    description: "Image processing, model development, and data analysis.",
    items: ["TensorFlow", "Keras", "OpenCV", "Roboflow", "NumPy", "Pandas"],
  },
];

export const awardDescription =
  "Recognized for setting up CI/CD pipelines to automate deployments and delivering tested, AI-enabled backend features for banking applications.";

export const leadershipEntries = [
  {
    organization: "Vaneesha Rise Foundation",
    role: "Environmental initiatives",
    category: "Community",
    description: "Led tree-planting and cleanup drives in Pune.",
  },
  {
    organization: "Avanti Fellows",
    role: "Academic mentoring",
    category: "Mentoring",
    description: "Mentored students from underprivileged backgrounds and provided academic guidance.",
  },
  {
    organization: "VNIT Nagpur · ECE",
    role: "Training & Placement Coordinator",
    category: "Campus leadership",
    description: "Coordinated placement activities and employer outreach for the Electronics and Communication Engineering department.",
  },
];
// TODO: Add verified participation dates, volunteer/student counts, and outcomes for the activities above.

// OCI details were checked against the supplied certificate images.
// Course names, dates, and IDs were provided by the user; linked records were
// checked for matching candidate and course names on 24 November 2026.
// AWS/Coursera course certificates are not presented as professional certifications.
// TODO: Add issuer-hosted OCI verification links if available; the existing links open the supplied certificates.
export const certificationEntries: CredentialEntry[] = [
  {
    title: "OCI 2025 Generative AI Professional",
    issuer: "Oracle University",
    kind: "Certification",
    issued: "21 Nov 2025",
    validUntil: "21 Nov 2027",
    href: "/assets/oracle_gen_ai_professional.jpg",
    linkLabel: "View certificate",
  },
  {
    title: "OCI 2025 AI Foundations Associate",
    issuer: "Oracle University",
    kind: "Certification",
    issued: "11 Apr 2025",
    validUntil: "11 Apr 2027",
    href: "/assets/oracle_ai_foundations.jpg",
    linkLabel: "View certificate",
  },
  {
    title: "Migrating to the AWS Cloud",
    issuer: "Amazon Web Services",
    kind: "Course certificate",
    issued: "Apr 2026",
    credentialId: "C0IHXH6TVCOU",
    href: "https://www.coursera.org/account/accomplishments/verify/C0IHXH6TVCOU",
    linkLabel: "View credential",
  },
  {
    title: "AWS Cloud Technical Essentials",
    issuer: "Amazon Web Services",
    kind: "Course certificate",
    issued: "Apr 2026",
    credentialId: "W9FJWY1T6JEQ",
    href: "https://www.coursera.org/account/accomplishments/verify/W9FJWY1T6JEQ",
    linkLabel: "View credential",
  },
  {
    title: "Convolutional Neural Networks",
    issuer: "Coursera",
    kind: "Course certificate",
    issued: "Jan 2021",
    credentialId: "49M7AFJSN3SX",
    href: "https://www.coursera.org/account/accomplishments/verify/49M7AFJSN3SX",
    linkLabel: "View credential",
  },
  {
    title: "Improving Deep Neural Networks: Hyperparameter Tuning, Regularization and Optimization",
    issuer: "Coursera",
    kind: "Course certificate",
    issued: "Oct 2020",
    credentialId: "5LTMNAL5QM8N",
    href: "https://www.coursera.org/account/accomplishments/verify/5LTMNAL5QM8N",
    linkLabel: "View credential",
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
