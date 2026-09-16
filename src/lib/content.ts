export const profile = {
  name: "Qais M. Alqaissi",
  monogram: "QA",
  title: "Cybersecurity graduate · IEEE Member · R&D Acting Team Lead · Full-Stack · Photographer",
  location: "8th Circle, Amman, Jordan",
  email: "qalqaissiw@gmail.com",
  phone: "(+962) 0781156087",
  phoneHref: "+9620781156087",
  pitch:
    "I work at the intersection of cybersecurity, software development, and automation. I identify vulnerabilities, build internal tools used company-wide, and develop open-source security software — from forensic command-line tools to live network monitoring systems. When I’m away from the terminal, I’m usually photographing architecture or exploring somewhere new.",
  availability:
    "Open to cybersecurity, R&D, and full-stack roles — remote or based in Amman.",
  summary:
    "Cybersecurity graduate and R&D professional with hands-on experience spanning solutions development, team leadership, and customer support. Certified by globally recognized organizations, I excel in identifying vulnerabilities, analyzing threats, and securing systems, while also driving process improvement, cost savings, and internal tooling initiatives within industrial R&D environments — including leading a data audit across roughly 5 million FedEx billing records that saved $20K+ per week, and building internal tools used company-wide. I've shipped work through GitHub and GitLab across both development and production environments, delivered freelance full-stack solutions for external clients, and developed open-source security tools such as Caeruleum (forensic analysis) and Vigil (network traffic monitoring). I thrive in high-pressure environments and am committed to digital defense and impactful engineering. Outside of that work I photograph travel and architecture, including a body of work from Shanghai.",
} as const;

export const socials = {
  github: "https://github.com/Cipher-Red",
  linkedin: "https://www.linkedin.com/in/qais-alqaissi-1b9295238",
  researchgate: "https://www.researchgate.net/profile/Qais-Alqaissi",
} as const;

export const site = {
  url: "https://my-ports.netlify.app",
} as const;

export const cv = {
  href: "/docs/Qais_M_Alqaissi_CV.pdf",
  label: "Download CV",
  filename: "Qais_M_Alqaissi_CV.pdf",
} as const;

export const navItems = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects", after: "hero-links" },
  { href: "#photography", label: "Photography", after: "hero-links" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact", after: "hero-links" },
] as const;

export type ExperienceRole = {
  company: string;
  role: string;
  period: string;
  current?: boolean;
  href?: string;
  colors: [string, string, string];
  highlights: string[];
};

export const experience: ExperienceRole[] = [
  {
    company: "Detroit Axle",
    role: "R&D — Acting Team Lead (previously Solutions Development)",
    period: "Mar 2026 — Present",
    current: true,
    href: "https://www.detroitaxle.com",
    colors: ["#006098", "#38b0e0", "#183558"],
    highlights: [
      "Joined as a Solutions Developer in R&D and was promoted to Acting Team Lead.",
      "Audited FedEx carrier billing across ~5 million rows, identifying discrepancies that saved $20K+ per week.",
      "Led development of FAST, an internal cross-departmental platform used company-wide for time tracking, support workflows, sales visibility, and more.",
      "Spent 45 days in Shanghai auditing Logistics and building tools to audit shipping containers, improving operational flow and efficiency.",
      "Collaborated with third-party IT vendors to integrate and support internal systems.",
      "Partnered with the listing team to develop and translate product listings for expansion into Mexico.",
      "Built a dedicated QA tool with MFA and hardened security across internal tools.",
      "Supported the opening of Canadian and Mexico branches.",
      "Extended FAST to flag potential scams using Braintree transaction data with the payment verification team.",
    ],
  },
  {
    company: "National Cyber Security Center Jordan (NCSCJO)",
    role: "Cybersecurity Intern",
    period: "Feb 2025 — Present",
    current: true,
    href: "https://ncsc.jo",
    colors: ["#ce1126", "#007a3d", "#303840"],
    highlights: [
      "Performed penetration testing and supported blue team defense, identifying vulnerabilities and strengthening system security.",
      "Developed cybersecurity tools and communicated actionable insights to improve threat detection and response.",
    ],
  },
  {
    company: "FiberTechJo",
    role: "Customer Support Intern",
    period: "Dec 2024 — Present",
    current: true,
    href: "https://fibertechjo.com/en/",
    colors: ["#2b2b63", "#d72c38", "#646464"],
    highlights: [
      "Supported technical teams in resolving customer issues efficiently.",
      "Used clear communication to keep customers informed and satisfied.",
    ],
  },
  {
    company: "Amazon UK",
    role: "Customer Support Associate",
    period: "Aug 2023 — Jan 2024",
    href: "https://www.amazon.co.uk",
    colors: ["#ff9900", "#232f3e", "#ffffff"],
    highlights: [
      "Delivered customer service in a high-pressure environment.",
      "Navigated complex systems to resolve customer needs.",
    ],
  },
  {
    company: "Qbits",
    role: "Freelance Full-Stack Developer",
    period: "Ongoing",
    current: true,
    href: "https://www.qbit-it.com/",
    colors: ["#7ec8e8", "#ffffff", "#c8eaf5"],
    highlights: [
      "Designed and developed a B2C, B2B, and internal management platform for Adawat, a Jordan-based company.",
    ],
  },
  {
    company: "Self-Employed",
    role: "Freelance Full-Stack Developer",
    period: "Ongoing",
    current: true,
    href: "https://weavers-jo.netlify.app/",
    colors: ["#1c2b3a", "#8b8680", "#c4b8a5"],
    highlights: [
      "Designed and developed a full-featured restaurant website for One Piece, a restaurant based in Jordan.",
    ],
  },
];

export type Project = {
  name: string;
  category: "Open source" | "Internal" | "Client" | "Studio";
  description: string;
  tags: string[];
  href?: string;
  hrefLabel?: string;
  links?: { href: string; label: string }[];
  stats?: string;
};

export const projects: Project[] = [
  {
    name: "Caeruleum",
    category: "Open source",
    description:
      "A lightweight CLI that simplifies forensic analysis and system operations on low-resource Windows and Linux systems — network scanning, log collection, forensic imaging, malware scanning, file recovery, and disk repair.",
    tags: ["Python", "Forensics", "CLI", "Windows", "Linux"],
    href: "https://github.com/Cipher-Red/Caeruleum",
    hrefLabel: "View on GitHub",
    stats: "92 clones · 55 unique cloners",
  },
  {
    name: "Vigil",
    category: "Open source",
    description:
      "Real-time network traffic monitoring and analysis. Protocol identification, IP/port filtering, DoS/DDoS detection, and PCAP export — tested on live networks, including a 6-hour capture.",
    tags: ["Python", "Networking", "PCAP", "Detection"],
    href: "https://github.com/Cipher-Red/Vigil",
    hrefLabel: "View on GitHub",
    stats: "85 clones · 59 unique cloners",
  },
  {
    name: "Aurum",
    category: "Open source",
    description:
      "Cross-platform email validation, DNS record checks, and blacklist detection. Bulk validation, custom blacklists, and PDF reports — tested on 500+ emails.",
    tags: ["Python", "Email security", "DNS", "Reporting"],
    href: "https://github.com/Cipher-Red/Aurum",
    hrefLabel: "View on GitHub",
    stats: "93 clones · 58 unique cloners",
  },
  {
    name: "FAST",
    category: "Internal",
    description:
      "Internal, cross-departmental platform used company-wide at Detroit Axle. Covers break/time tracking, customer support workflows, sales visibility, and a scam-flagging feature built on Braintree transaction data.",
    tags: ["React", "PostgreSQL", "Python", "Braintree", "GitLab", "Operations"],
    href: "https://fast.detroitaxle.com/login?next=/",
    hrefLabel: "Visit FAST",
    links: [
      {
        href: "/docs/FAST_Product_Guide_Public.pdf",
        label: "Product guide",
      },
    ],
  },
  {
    name: "Detroit Axle QA",
    category: "Internal",
    description:
      "Internal QA web app with multi-factor authentication, role-aware access, and hardened controls — a secure workspace for review workflows without exposing sensitive operations.",
    tags: ["MFA", "Security hardening", "React", "QA"],
  },
  {
    name: "Weavers",
    category: "Studio",
    description:
      "Jordan-based studio building custom web systems for small and medium-sized businesses — design, deployment, automation, and ongoing support.",
    tags: ["Full-stack", "Web", "SMB", "Jordan"],
    href: "https://weavers-jo.netlify.app/",
    hrefLabel: "Visit site",
  },
  {
    name: "Adawat / Qbits Solutions",
    category: "Client",
    description:
      "B2C, B2B, and internal management platform designed and developed for Adawat, a Jordan-based company.",
    tags: ["Full-stack", "B2B", "B2C", "React", "PostgreSQL"],
    href: "https://adawat.net",
    hrefLabel: "Visit Adawat",
  },
  {
    name: "One Piece Restaurant",
    category: "Client",
    description:
      "Full-featured restaurant website designed and developed for One Piece, a restaurant based in Jordan.",
    tags: ["Full-stack", "Web", "Client work"],
  },
];

export const skillGroups = [
  {
    title: "Primary stack",
    items: ["Python", "React", "PostgreSQL", "JavaScript", "C++"],
  },
  {
    title: "Security & forensics",
    items: [
      "Splunk",
      "Redline",
      "Autopsy",
      "Wireshark",
      "TCPdump",
      "OSINT",
      "Penetration testing",
      "Blue team",
    ],
  },
  {
    title: "Scripting & platforms",
    items: [
      "PowerShell",
      "Bash",
      "Full-stack web",
      "Internal tooling",
      "GitHub",
      "GitLab",
      "Production & development workflows",
    ],
  },
  {
    title: "Languages",
    items: ["Arabic (fluent)", "English (fluent)"],
  },
] as const;

export const badges = [
  {
    name: "Certified in Cybersecurity (CC)",
    issuer: "ISC2",
    href: "https://www.credly.com/badges/728b9a3a-cfd9-477a-9bda-229ad00b4704/public_url",
    image: "/badges/isc2-cc.png",
  },
  {
    name: "Introduction to the Threat Landscape 2.0",
    issuer: "Fortinet",
    href: "https://www.credly.com/badges/775e2d8b-e432-4d2d-9aed-3a346c63aa6d/public_url",
    image: "/badges/fortinet-threat-landscape.png",
  },
  {
    name: "Getting Started in Cybersecurity 2.0",
    issuer: "Fortinet",
    href: "https://www.credly.com/badges/1f6e1da4-7ccd-42c5-9f7e-7d87ccba6c45/public_url",
    image: "/badges/fortinet-getting-started.png",
  },
  {
    name: "Fortinet Certified Fundamentals — Cybersecurity",
    issuer: "Fortinet",
    href: "https://www.credly.com/badges/083f90eb-7432-47bc-92a6-7c3d48f667ef/public_url",
    image: "/badges/fortinet-fundamentals.png",
  },
  {
    name: "Networking Academy Learn-A-Thon 2025",
    issuer: "Cisco",
    href: "https://www.credly.com/badges/dba5e0a8-a9a0-42f1-b89f-10a96c8ed3b3/public_url",
    image: "/badges/cisco-learnathon-2025.png",
  },
  {
    name: "Introduction to Cybersecurity",
    issuer: "Cisco",
    href: "https://www.credly.com/badges/0f72e0b2-f10c-4f5f-9b98-6789cebab5ff/public_url",
    image: "/badges/cisco-intro-cyber.png",
  },
] as const;

export const certifications = [
  "Blue Team Junior Analyst (BTJA) — Security Blue Team",
  "Cybrary Offensive Security Operations",
  "Splunk Fundamentals 1",
  "Cybrary OSINT",
  "Microsoft Certificate in Networking and Cloud Computing",
  "Introduction to Critical Infrastructure Protection (CIP)",
] as const;

export const memberships = ["IEEE Member"] as const;

export type Photograph = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

export const photography = {
  place: "Shanghai, 2026",
  camera: "Nikon D5300",
  summary:
    "A selection from 45 days in Shanghai — architecture, night streets, and a few quieter rooms between the work.",
} as const;

export const photographs: Photograph[] = [
  { src: "/photos/canal.jpg", alt: "Canal residences, Shanghai", caption: "Canal residences", width: 1800, height: 1200 },
  { src: "/photos/forest-tower.jpg", alt: "Vertical forest, Shanghai", caption: "Vertical forest", width: 1200, height: 1800 },
  { src: "/photos/pearl.jpg", alt: "Oriental Pearl Tower, Shanghai", caption: "Oriental Pearl Tower", width: 1200, height: 1800 },
  { src: "/photos/lujiazui.jpg", alt: "Lujiazui at night, Shanghai", caption: "Lujiazui at night", width: 1800, height: 1200 },
  { src: "/photos/yuyuan.jpg", alt: "Old City, Shanghai", caption: "Old City", width: 1800, height: 1200 },
  { src: "/photos/skywalk.jpg", alt: "Skywalk, Shanghai", caption: "Skywalk", width: 1800, height: 1200 },
  { src: "/photos/bear.jpg", alt: "Night sculpture, Shanghai", caption: "Night sculpture", width: 1800, height: 1200 },
  { src: "/photos/tunnel.jpg", alt: "Bund Sightseeing Tunnel, Shanghai", caption: "Bund Sightseeing Tunnel", width: 1800, height: 1200 },
  { src: "/photos/manta.jpg", alt: "Ocean Aquarium, Shanghai", caption: "Ocean Aquarium", width: 1800, height: 1200 },
  { src: "/photos/plaza.jpg", alt: "Night plaza, Shanghai", caption: "Night plaza", width: 1200, height: 1800 },
  { src: "/photos/mammoth.jpg", alt: "Natural History Museum, Shanghai", caption: "Natural History Museum", width: 1800, height: 1200 },
];

export const education = {
  school: "Amman Arab University",
  location: "Amman, Jordan",
  degree: "BS in Cyber Security",
  graduated: "2026",
  gpa: "3.54",
  rating: "Very Good",
  certificates: [
    {
      label: "English",
      src: "/certificates/bs-cyber-security-en.png",
      alt: "Bachelor’s degree certificate in Cyber Security — English",
    },
    {
      label: "Arabic",
      src: "/certificates/bs-cyber-security-ar.png",
      alt: "شهادة درجة البكالوريوس في الأمن السيبراني — العربية",
    },
  ],
} as const;

export const publication = {
  title: "Jamming and Anti-Jamming Techniques on Wireless Networks",
  venue: "ResearchGate",
  date: "December 2024",
  href: "https://www.researchgate.net/profile/Qais-Alqaissi",
  hrefLabel: "View on ResearchGate",
  summary:
    "Explores the vulnerabilities of wireless networks to jamming attacks and evaluates modern anti-jamming techniques to enhance network resilience.",
  metrics: {
    interestScore: 4.7,
    reads: 809,
    readsDelta: "+11 last week",
    citations: 0,
    recommendations: 1,
    breakdown: [
      { label: "Citations", percent: 0 },
      { label: "Recommendations", percent: 5.32 },
      { label: "Full-text reads", percent: 67.02 },
      { label: "Other reads", percent: 27.66 },
    ],
    comparisons: [
      {
        label: "Higher than 18% of ResearchGate members",
        percent: 18,
      },
      {
        label: "Higher than 49% of members who first published in 2024",
        percent: 49,
      },
    ],
  },
} as const;
