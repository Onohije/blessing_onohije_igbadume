// Central content model for the site.
// This is the "Git-based CMS": every editable fact lives here as typed data.
// A non-technical editor can update this file directly, or it can later be
// swapped for a hosted headless CMS (Sanity/Contentful) without touching
// page components — see README "Content model" section.

export const site = {
  name: "Blessing Onohije Igbadume",
  role: "DevOps Engineer",
  tagline:
    "DevOps & Cloud Infrastructure Engineer with 4 years of experience building and supporting secure, highly available systems.",
  location: "Victoria Island, Lagos, Nigeria",
  email: "igbadumeonoh@gmail.com",
  phone: "+234 808-311-1552",
  linkedin: "https://www.linkedin.com/in/onohijeigbadume",
  url: "https://blessing-igbadume-portfolio.vercel.app",
  summary:
    "DevOps and Cloud Infrastructure Engineer with 4 years of experience building and supporting secure, highly available systems. Skilled in CI/CD, Terraform, Docker, Kubernetes, Linux, cloud infrastructure, scripting, observability, incident response, and security hardening. Proven ability to automate operations, optimize deployments, enhance system reliability, and strengthen the resilience of business-critical production environments.",
};

export const skills = [
  { category: "Cloud", items: ["AWS", "Azure"] },
  { category: "CI/CD", items: ["GitHub Actions", "Azure DevOps"] },
  { category: "Infrastructure as Code", items: ["Terraform", "Ansible", "YAML"] },
  { category: "Containers", items: ["Docker", "Kubernetes"] },
  { category: "Systems", items: ["Linux", "Windows", "Nginx"] },
  { category: "Scripting", items: ["Python", "Bash", "PowerShell"] },
  {
    category: "Networking",
    items: ["DNS", "SSL/TLS", "VPNs", "Firewalls", "Reverse proxies", "Load balancers"],
  },
  {
    category: "Observability",
    items: ["Logging", "Monitoring", "Alerting", "Incident response", "Root-cause analysis"],
  },
  { category: "Architecture", items: ["Microservices architecture"] },
  { category: "Databases", items: ["SQL Server", "Oracle", "MySQL"] },
  { category: "Version Control", items: ["Git", "GitHub", "Azure Repos"] },
  { category: "Leadership", items: ["Team leadership and management"] },
];

export type Experience = {
  role: string;
  company: string;
  location: string;
  period: string;
  companyBlurb: string;
  highlights: { title: string; detail: string }[];
  achievement: string;
};

export const experience: Experience[] = [
  {
    role: "IT Officer – DevOps & Core Banking Operations",
    company: "LOTUS Bank",
    location: "Lagos, Nigeria",
    period: "Feb 2025 – Present",
    companyBlurb:
      "LOTUS Bank is a Nigerian non-interest bank committed to ethical financial services.",
    highlights: [
      {
        title: "Production Operations & Release Engineering",
        detail:
          "Deploy, configure, and support business-critical applications across test and production environments. Coordinate releases, deployment validation, health checks, and production-readiness activities.",
      },
      {
        title: "DevOps, Cloud & Automation",
        detail:
          "Manage Git workflows across GitHub, GitLab, and Azure DevOps. Build and maintain CI/CD pipelines, provision AWS infrastructure with Terraform, manage Docker and Kubernetes workloads on Linux, and automate operations using Bash, Python, and PowerShell.",
      },
      {
        title: "Observability, Reliability & Security",
        detail:
          "Monitor applications, infrastructure, and transaction workflows using observability and log-analysis tools. Lead incident troubleshooting, root-cause analysis, security hardening, access control, and deployment governance.",
      },
      {
        title: "Cross-Functional Delivery",
        detail:
          "Collaborate with developers, QA, infrastructure teams, vendors, and stakeholders to deliver releases, manage changes, resolve production issues, and drive continuous improvement.",
      },
    ],
    achievement:
      "Transformed manual core banking deployments into an automated CI/CD process, accelerating releases while improving reliability and reducing operational risk.",
  },
  {
    role: "Software Developer & DevOps",
    company: "Tech Bridge",
    location: "Remote",
    period: "Jul 2024 – Jan 2025",
    companyBlurb: "Tech Bridge is a technology company delivering modern software solutions.",
    highlights: [
      {
        title: "Software Development & Delivery",
        detail:
          "Built and deployed web applications using Git-based workflows, collaborative code reviews, and modern development practices.",
      },
      {
        title: "CI/CD & Release Automation",
        detail:
          "Designed automated deployment pipelines, reducing manual release steps and improving consistency across development and staging environments.",
      },
      {
        title: "Containerization & Operations",
        detail:
          "Containerized applications with Docker, managed Linux environments, configured load balancing for reliable traffic distribution, and automated operational tasks using Python and Bash.",
      },
      {
        title: "Agile Collaboration",
        detail:
          "Collaborated in Agile sprints, code reviews, and retrospectives to deliver application features and infrastructure improvements on schedule.",
      },
    ],
    achievement:
      "Built the company's DevOps ecosystem end to end, replacing manual deployments with CI/CD automation, Docker, Linux infrastructure, and load balancing.",
  },
];

export const education = [
  {
    degree: "Bachelor of Science (B.Sc.), Plant Biology & Biotechnology",
    school: "University of Benin",
    location: "Benin City, Nigeria",
  },
];

export const certifications = [
  "Computer Professionals Registration Council of Nigeria (CPN)",
  "ALX Software Engineering",
];

// "Case studies" built directly from the two achievements listed on the
// resume — not fabricated projects. Replace/extend this list once specific
// repos, dashboards or diagrams are available (see README "Adding a project").
export type CaseStudy = {
  slug: string;
  title: string;
  summary: string;
  context: string;
  approach: string[];
  outcome: string;
  tags: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "core-banking-cicd",
    title: "Automating Core Banking Deployments",
    summary:
      "Transformed manual, high-risk core banking releases into a governed, automated CI/CD process.",
    context:
      "At LOTUS Bank, releases for business-critical core banking applications were handled manually across test and production environments, which slowed delivery and carried operational risk.",
    approach: [
      "Mapped the existing manual release process end to end alongside developers, QA, and infrastructure teams.",
      "Designed and built CI/CD pipelines to standardize build, validation, and deployment steps.",
      "Introduced deployment validation, health checks, and production-readiness gates before release.",
      "Layered in observability and log-analysis so issues surface during rollout, not after.",
    ],
    outcome:
      "Faster, more consistent releases with reduced manual error and stronger operational resilience for a bank's core systems.",
    tags: ["CI/CD", "AWS", "Terraform", "Kubernetes", "Observability"],
  },
  {
    slug: "devops-ecosystem-buildout",
    title: "Building a DevOps Ecosystem From Scratch",
    summary:
      "Replaced fully manual deployments with an automated, containerized delivery pipeline.",
    context:
      "At Tech Bridge, application delivery relied on manual deployment steps with no standardized containerization or load distribution strategy.",
    approach: [
      "Introduced Git-based workflows with collaborative code review as the delivery baseline.",
      "Designed automated deployment pipelines to remove manual release steps.",
      "Containerized applications with Docker and standardized Linux environments.",
      "Configured load balancing for reliable traffic distribution and scripted routine operations in Python and Bash.",
    ],
    outcome:
      "A repeatable DevOps ecosystem — CI/CD, containers, and load balancing — supporting faster, more reliable feature delivery.",
    tags: ["Docker", "Linux", "CI/CD", "Load Balancing", "Python", "Bash"],
  },
];
