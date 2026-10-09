export const profile = {
  name: "Qais M. Alqaissi",
  monogram: "QA",
  title: "Cybersecurity graduate · IEEE Member · R&D Acting Team Lead · Full-Stack · Photographer",
  location: "8th Circle, Amman, Jordan",
  email: "qalqaissiw@gmail.com",
  phone: "(+962) 0781156087",
  phoneHref: "+9620781156087",
  pitch:
    "I work at the intersection of cybersecurity, software development, and automation. I identify vulnerabilities, build internal tools used company-wide, and develop open-source security software, from forensic command-line tools to live network monitoring systems. When I’m away from the terminal, I’m usually photographing architecture or exploring somewhere new.",
  availability:
    "Open to cybersecurity, R&D, and full-stack roles, remote or based in Amman.",
  summary:
    "I'm a cybersecurity graduate and R&D Acting Team Lead at Detroit Axle, where I build secure internal tools and automate the audits behind day-to-day operations. I lead development of FAST, a company-wide platform whose automated FedEx billing audits cover roughly 5 million records and save more than $20K per week. At the National Cyber Security Center of Jordan I worked on penetration testing and blue-team defense, and I hold ISC2 CC, Fortinet FCF, and Security Blue Team BTJA certifications. Beyond that, I built The Zero Day, a live vulnerability-intelligence platform, maintain the open-source security tools Caeruleum, Vigil, and Aurum, and deliver full-stack systems for clients in Jordan. I also photograph travel and architecture, including a body of work from Shanghai.",
} as const;

export const socials = {
  github: "https://github.com/Cipher-Red",
  linkedin: "https://www.linkedin.com/in/qais-alqaissi-1b9295238",
  researchgate: "https://www.researchgate.net/profile/Qais-Alqaissi",
} as const;

export const site = {
  url: "https://qalqaissi.netlify.app",
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
  { href: "#certifications", label: "Certifications" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact", after: "hero-links" },
] as const;

export type CompanyLogo =
  | "detroit-axle"
  | "ncsc"
  | "fibertechjo"
  | "amazon"
  | "qbits"
  | "weavers";

export type ExperienceRole = {
  company: string;
  logo: CompanyLogo;
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
    logo: "detroit-axle",
    role: "R&D Acting Team Lead (previously Solutions Developer)",
    period: "Mar 2025 - Present",
    current: true,
    href: "https://www.detroitaxle.com",
    colors: ["#006098", "#38b0e0", "#183558"],
    highlights: [
      "Joined as a Solutions Developer in R&D and was promoted to Acting Team Lead.",
      "Led development of FAST, an internal cross-departmental platform used company-wide for time tracking, support workflows, sales visibility, carrier-bill auditing, and more.",
      "Within FAST, built automated FedEx billing audits across ~5 million rows, saving $20K+ per week and emailing the relevant departments for action.",
      "Extended FAST with Amazon shipping-bill auditing and email workflows that recovered ~$1K in credit backs each week.",
      "Owned security and monitoring for FAST and other internal projects, and drove the secure software development lifecycle (SSDLC).",
      "Spent 45 days in Shanghai auditing Logistics and building tools to audit shipping containers, improving operational flow and efficiency.",
      "Collaborated with third-party IT vendors to integrate and support internal systems.",
      "Partnered with the listing team to develop and translate product listings for expansion into Mexico.",
      "Built a dedicated QA tool with MFA and hardened security across internal tools.",
      "Supported the opening of Canadian and Mexico branches.",
      "Extended FAST to flag potential scams using Braintree transaction data with the payment verification team.",
    ],
  },
  {
    company: "Qbits",
    logo: "qbits",
    role: "Full-Stack Developer",
    period: "Jul 2026 - Present",
    current: true,
    href: "https://www.qbit-it.com/",
    colors: ["#7ec8e8", "#ffffff", "#c8eaf5"],
    highlights: [
      "Full-stack developer on a small development team building web platforms for clients in Jordan.",
      "Designed and developed a B2C, B2B, and internal management platform for Adawat, a Jordan-based company.",
    ],
  },
  {
    company: "Self-Employed",
    logo: "weavers",
    role: "Freelance Full-Stack Developer",
    period: "Dec 2025 - Present",
    current: true,
    href: "https://weavers-jo.netlify.app/",
    colors: ["#1c2b3a", "#8b8680", "#c4b8a5"],
    highlights: [
      "Designed and developed a full-featured restaurant website for One Piece, a restaurant based in Jordan.",
    ],
  },
  {
    company: "National Cyber Security Center Jordan (NCSCJO)",
    logo: "ncsc",
    role: "Cybersecurity Intern",
    period: "Feb 2025 - Jun 2025",
    href: "https://ncsc.jo",
    colors: ["#ce1126", "#007a3d", "#303840"],
    highlights: [
      "Performed penetration testing and supported blue team defense, identifying vulnerabilities and strengthening system security.",
      "Developed cybersecurity tools and communicated actionable insights to improve threat detection and response.",
    ],
  },
  {
    company: "FiberTechJo",
    logo: "fibertechjo",
    role: "Customer Support Intern",
    period: "Dec 2024 - Mar 2025",
    href: "https://fibertechjo.com/en/",
    colors: ["#2b2b63", "#d72c38", "#646464"],
    highlights: [
      "Supported technical teams in resolving customer issues efficiently.",
      "Used clear communication to keep customers informed and satisfied.",
    ],
  },
  {
    company: "Amazon UK",
    logo: "amazon",
    role: "Customer Support Associate",
    period: "Aug 2023 - Jan 2024",
    href: "https://www.amazon.co.uk",
    colors: ["#ff9900", "#232f3e", "#ffffff"],
    highlights: [
      "Delivered customer service in a high-pressure environment.",
      "Navigated complex systems to resolve customer needs.",
    ],
  },
];

export type Project = {
  name: string;
  category: "Open source" | "Personal" | "Internal" | "Client" | "Studio";
  description: string;
  tags: string[];
  href?: string;
  hrefLabel?: string;
  links?: { href: string; label: string }[];
  stats?: string;
  cover: {
    brand: string;
    image?: { src: string; width: number; height: number };
    logo?: string;
    logoShape?: "square" | "wide";
    mark?: string;
  };
};

export const projects: Project[] = [
  {
    name: "The Zero Day",
    category: "Personal",
    description:
      "Live cybersecurity news and vulnerability-intelligence platform. Pulls 32 news outlets, research teams, government CERTs and vendor advisories every 15 minutes, groups coverage of the same story, links articles to the CVEs they discuss, and ranks each CVE's patch priority from NVD, CISA KEV, EPSS and public exploit data. It also sends spike alerts and fact-checked AI briefings.",
    tags: ["Django", "React", "TypeScript", "PostgreSQL", "Threat intel", "Vercel"],
    href: "https://thezeroday.org/",
    hrefLabel: "Visit site",
    stats: "32 sources · refreshed every 15 min",
    cover: {
      brand: "#0c0c0c",
      image: { src: "/projects/the-zero-day.png", width: 1500, height: 500 },
    },
  },
  {
    name: "Caeruleum",
    category: "Open source",
    description:
      "A lightweight CLI that simplifies forensic analysis and system operations on low-resource Windows and Linux systems, covering network scanning, log collection, forensic imaging, malware scanning, file recovery, and disk repair.",
    tags: ["Python", "Forensics", "CLI", "Windows", "Linux"],
    href: "https://github.com/Cipher-Red/Caeruleum",
    hrefLabel: "View on GitHub",
    stats: "92 clones · 55 unique cloners",
    cover: {
      brand: "#000000",
      image: { src: "/projects/caeruleum.png", width: 600, height: 200 },
    },
  },
  {
    name: "Vigil",
    category: "Open source",
    description:
      "Real-time network traffic monitoring and analysis. Protocol identification, IP/port filtering, DoS/DDoS detection, and PCAP export. Tested on live networks, including a 6-hour capture.",
    tags: ["Python", "Networking", "PCAP", "Detection"],
    href: "https://github.com/Cipher-Red/Vigil",
    hrefLabel: "View on GitHub",
    stats: "85 clones · 59 unique cloners",
    cover: {
      brand: "#1a212b",
      image: { src: "/projects/vigil.png", width: 1576, height: 518 },
    },
  },
  {
    name: "Aurum",
    category: "Open source",
    description:
      "Cross-platform email validation, DNS record checks, and blacklist detection. Bulk validation, custom blacklists, and PDF reports. Tested on 500+ emails.",
    tags: ["Python", "Email security", "DNS", "Reporting"],
    href: "https://github.com/Cipher-Red/Aurum",
    hrefLabel: "View on GitHub",
    stats: "93 clones · 58 unique cloners",
    cover: {
      brand: "linear-gradient(120deg, #0a0703 0%, #4d3a10 55%, #c8951c 100%)",
      mark: "Au",
    },
  },
  {
    name: "FAST",
    category: "Internal",
    description:
      "Internal, cross-departmental platform used company-wide at Detroit Axle. Covers break/time tracking, customer support workflows, sales visibility, automated FedEx and Amazon shipping-bill audits with department email alerts, and scam-flagging built on Braintree transaction data.",
    tags: ["React", "PostgreSQL", "Python", "Braintree", "GitLab", "Operations"],
    href: "https://fast.detroitaxle.com/login?next=/",
    hrefLabel: "Visit FAST",
    links: [
      {
        href: "/docs/FAST_Product_Guide_Public.pdf",
        label: "Product guide",
      },
    ],
    cover: { brand: "#006098", mark: "FAST" },
  },
  {
    name: "Detroit Axle QA",
    category: "Internal",
    description:
      "Internal QA web app with multi-factor authentication, role-aware access, and hardened controls, giving review teams a secure workspace without exposing sensitive operations.",
    tags: ["MFA", "Security hardening", "React", "QA"],
    cover: { brand: "#183558", logo: "/logos/detroit-axle-alt.svg", logoShape: "wide" },
  },
  {
    name: "Weavers",
    category: "Studio",
    description:
      "Jordan-based studio building custom web systems for small and medium-sized businesses, covering design, deployment, automation, and ongoing support.",
    tags: ["Full-stack", "Web", "SMB", "Jordan"],
    href: "https://weavers-jo.netlify.app/",
    hrefLabel: "Visit site",
    cover: { brand: "linear-gradient(135deg, #9a1028 0%, #dc143c 100%)", mark: "Weavers" },
  },
  {
    name: "Adawat / Qbits Solutions",
    category: "Client",
    description:
      "B2C, B2B, and internal management platform designed and developed for Adawat, a Jordan-based company.",
    tags: ["Full-stack", "B2B", "B2C", "React", "PostgreSQL"],
    href: "https://adawat.net",
    hrefLabel: "Visit Adawat",
    cover: { brand: "#ff9200", logo: "/logos/adawat.svg" },
  },
  {
    name: "One Piece Restaurant",
    category: "Client",
    description:
      "Full-featured restaurant website designed and developed for One Piece, a restaurant based in Jordan.",
    tags: ["Full-stack", "Web", "Client work"],
    cover: { brand: "#7a1f1a", mark: "OP" },
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
      "CMD / Batch",
      "Bash",
      "Full-stack web",
      "Internal tooling",
      "GitHub",
      "GitLab",
      "Production & development workflows",
    ],
  },
  {
    title: "Operating systems",
    items: ["Windows", "Kali Linux", "Fedora"],
  },
  {
    title: "Languages",
    items: ["Arabic (fluent)", "English (fluent)"],
  },
] as const;

export type Badge = {
  name: string;
  issuer: string;
  href: string;
  image: string;
  cta?: string;
};

export const badges: Badge[] = [
  {
    name: "BS in Cyber Security",
    issuer: "Amman Arab University",
    href: "#education",
    image: "/badges/amman-arab-university.png",
    cta: "View degree",
  },
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
    name: "Fortinet Certified Fundamentals in Cybersecurity",
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
];

export const certificationCategories = [
  "Security",
  "Cloud & IT",
  "Data & dev",
  "Business & more",
] as const;

export type CertificationCategory = (typeof certificationCategories)[number];

export type CertificationPage = {
  src: string;
  width: number;
  height: number;
  label?: string;
};

export type Certification = {
  name: string;
  issuer: string;
  date: string;
  sortDate: string;
  category: CertificationCategory;
  featured?: boolean;
  note?: string;
  verify?: string;
  pages: CertificationPage[];
};

const certPage = (slug: string, width: number, height: number, label?: string): CertificationPage => ({
  src: `/certifications/${slug}.webp`,
  width,
  height,
  label,
});

export const certificationList: Certification[] = [
  {
    name: "Certified in Cybersecurity (CC)",
    issuer: "ISC2",
    date: "Nov 2024",
    sortDate: "2024-11-17",
    category: "Security",
    featured: true,
    note: "All five domains plus the final assessment",
    verify: "https://www.credly.com/badges/728b9a3a-cfd9-477a-9bda-229ad00b4704/public_url",
    pages: [
      certPage("isc2-cc", 1800, 1356, "Certified in Cybersecurity"),
      certPage("isc2-cc-domain-1", 1800, 1356, "Domain 1 · Security Principles"),
      certPage("isc2-cc-domain-2", 1800, 1356, "Domain 2 · Incident Response, BC & DR"),
      certPage("isc2-cc-domain-3", 1800, 1356, "Domain 3 · Access Control Concepts"),
      certPage("isc2-cc-domain-4", 1800, 1356, "Domain 4 · Network Security"),
      certPage("isc2-cc-domain-5", 1800, 1356, "Domain 5 · Security Operations"),
      certPage("isc2-cc-final-assessment", 1800, 1356, "Course conclusion & final assessment"),
    ],
  },
  {
    name: "Fortinet Certified Fundamentals in Cybersecurity",
    issuer: "Fortinet",
    date: "Jan 2025",
    sortDate: "2025-01-20",
    category: "Security",
    featured: true,
    note: "Valid until Jan 2027",
    verify: "https://www.credly.com/badges/083f90eb-7432-47bc-92a6-7c3d48f667ef/public_url",
    pages: [
      certPage("fortinet-fcf", 1800, 1273, "FCF in Cybersecurity"),
      certPage("fortinet-getting-started", 1800, 1310, "Getting Started in Cybersecurity 2.0"),
      certPage("fortinet-threat-landscape", 1800, 1310, "Introduction to the Threat Landscape 2.0"),
    ],
  },
  {
    name: "Blue Team Junior Analyst (BTJA) Pathway",
    issuer: "Security Blue Team",
    date: "Jan 2025",
    sortDate: "2025-01-12",
    category: "Security",
    featured: true,
    note: "OSINT, forensics, vulnerability management, dark web, threat hunting, network analysis",
    pages: [
      certPage("sbt-btja", 1800, 1273, "Pathway bundle"),
      certPage("sbt-osint", 1800, 1273, "Introduction to OSINT"),
      certPage("sbt-digital-forensics", 1800, 1273, "Introduction to Digital Forensics"),
      certPage("sbt-vulnerability-management", 1800, 1273, "Introduction to Vulnerability Management"),
      certPage("sbt-dark-web-operations", 1800, 1273, "Introduction to Dark Web Operations"),
      certPage("sbt-threat-hunting", 1800, 1273, "Introduction to Threat Hunting"),
      certPage("sbt-network-analysis", 1800, 1273, "Introduction to Network Analysis"),
    ],
  },
  {
    name: "Cyber Warriors CTF Training",
    issuer: "National Cyber Security Center of Jordan",
    date: "2024",
    sortDate: "2024-08-01",
    category: "Security",
    featured: true,
    note: "40 hours over 8 days",
    pages: [certPage("ncsc-cyber-warriors", 1800, 1391)],
  },
  {
    name: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    date: "Oct 2025",
    sortDate: "2025-10-19",
    category: "Security",
    verify: "https://www.credly.com/badges/0f72e0b2-f10c-4f5f-9b98-6789cebab5ff/public_url",
    pages: [certPage("cisco-intro-cybersecurity", 1800, 1220)],
  },
  {
    name: "Business Analysis Foundations",
    issuer: "LinkedIn Learning · IIBA",
    date: "Oct 2025",
    sortDate: "2025-10-26",
    category: "Business & more",
    pages: [certPage("linkedin-business-analysis", 1800, 1391)],
  },
  {
    name: "Psychological Research, Obedience and Ethics",
    issuer: "The Open University",
    date: "Jun 2025",
    sortDate: "2025-06-21",
    category: "Business & more",
    pages: [certPage("openlearn-psychological-research", 1800, 2546)],
  },
  {
    name: "Making Sense of Ourselves",
    issuer: "The Open University",
    date: "Jun 2025",
    sortDate: "2025-06-20",
    category: "Business & more",
    pages: [certPage("openlearn-making-sense-of-ourselves", 1800, 2546)],
  },
  {
    name: "OSINT",
    issuer: "Cybrary",
    date: "Mar 2025",
    sortDate: "2025-03-01T19:00",
    category: "Security",
    pages: [certPage("cybrary-osint", 1800, 1273)],
  },
  {
    name: "Reconnaissance and Enumeration Basics",
    issuer: "Cybrary",
    date: "Mar 2025",
    sortDate: "2025-03-01T04:00",
    category: "Security",
    pages: [certPage("cybrary-recon-enumeration", 1800, 1273)],
  },
  {
    name: "Cyber Kill Chains",
    issuer: "Cybrary",
    date: "Feb 2025",
    sortDate: "2025-02-28T18:10",
    category: "Security",
    pages: [certPage("cybrary-cyber-kill-chains", 1800, 1273)],
  },
  {
    name: "Log Analysis Basics",
    issuer: "Cybrary",
    date: "Feb 2025",
    sortDate: "2025-02-28T18:07",
    category: "Security",
    pages: [certPage("cybrary-log-analysis-basics", 1800, 1273)],
  },
  {
    name: "Offensive Security Operations",
    issuer: "Cybrary",
    date: "Feb 2025",
    sortDate: "2025-02-27",
    category: "Security",
    pages: [certPage("cybrary-offensive-security-operations", 1800, 1273)],
  },
  {
    name: "Using Fields",
    issuer: "Splunk",
    date: "Feb 2025",
    sortDate: "2025-02-21",
    category: "Data & dev",
    pages: [certPage("splunk-using-fields", 1800, 1272)],
  },
  {
    name: "Intro to Splunk",
    issuer: "Splunk",
    date: "Feb 2025",
    sortDate: "2025-02-20",
    category: "Data & dev",
    pages: [certPage("splunk-intro", 1800, 1272)],
  },
  {
    name: "Networking Academy Learn-A-Thon 2025",
    issuer: "Cisco Networking Academy",
    date: "Jan 2025",
    sortDate: "2025-01-31",
    category: "Cloud & IT",
    note: "Recognition for exceptional learning achievement",
    verify: "https://www.credly.com/badges/dba5e0a8-a9a0-42f1-b89f-10a96c8ed3b3/public_url",
    pages: [certPage("cisco-learnathon-2025", 1800, 1220)],
  },
  {
    name: "Cybersecurity for Businesses: The Fundamental Edition",
    issuer: "EC-Council",
    date: "Dec 2024",
    sortDate: "2024-12-23",
    category: "Security",
    pages: [certPage("ec-council-cybersecurity-for-businesses", 1800, 1389)],
  },
  {
    name: "Introduction to PowerShell",
    issuer: "Security Blue Team",
    date: "Nov 2024",
    sortDate: "2024-11-01",
    category: "Security",
    pages: [certPage("sbt-powershell", 1800, 1273)],
  },
  {
    name: "A Practical Introduction to Cloud Computing",
    issuer: "EC-Council",
    date: "Oct 2024",
    sortDate: "2024-10-28",
    category: "Cloud & IT",
    pages: [certPage("ec-council-cloud-computing", 1800, 1389)],
  },
  {
    name: "Introduction to Critical Infrastructure Protection (ICIP)",
    issuer: "OPSWAT Academy",
    date: "Oct 2024",
    sortDate: "2024-10-09",
    category: "Security",
    pages: [certPage("opswat-icip", 900, 723)],
  },
  {
    name: "Introduction to Networking and Cloud Computing",
    issuer: "Microsoft · Coursera",
    date: "Aug 2024",
    sortDate: "2024-08-25",
    category: "Cloud & IT",
    verify: "https://coursera.org/verify/B6S9PJK172ZP",
    pages: [certPage("microsoft-networking-cloud", 1800, 1391)],
  },
  {
    name: "PLC and Classic Control Workshop",
    issuer: "The Hope International Company",
    date: "Aug 2024",
    sortDate: "2024-08-20",
    category: "Business & more",
    pages: [certPage("hope-plc-classic-control", 1800, 1273)],
  },
  {
    name: "PMP & Digital Marketing Event",
    issuer: "The Hope International Company",
    date: "Jul 2024",
    sortDate: "2024-07-29",
    category: "Business & more",
    pages: [certPage("hope-pmp-digital-marketing", 1800, 1273)],
  },
  {
    name: "Introduction to Data Analysis Using Microsoft Excel",
    issuer: "Coursera Project Network",
    date: "Jul 2024",
    sortDate: "2024-07-15",
    category: "Data & dev",
    verify: "https://coursera.org/verify/DKND5T2GLTNQ",
    pages: [certPage("coursera-excel-data-analysis", 1800, 1391)],
  },
  {
    name: "Investment Risk Management",
    issuer: "Coursera Project Network",
    date: "Jul 2024",
    sortDate: "2024-07-09",
    category: "Business & more",
    verify: "https://coursera.org/verify/T2JK6E2KBRF7",
    pages: [certPage("coursera-investment-risk", 1800, 1391)],
  },
  {
    name: "AI in Business",
    issuer: "Amman Arab University",
    date: "Spring 2024",
    sortDate: "2024-04-01",
    category: "Business & more",
    note: "6 training hours",
    pages: [certPage("aau-ai-in-business", 1800, 1273)],
  },
  {
    name: "Exploring the Metaverse",
    issuer: "Amman Arab University",
    date: "Spring 2024",
    sortDate: "2024-03-31",
    category: "Business & more",
    note: "3 training hours",
    pages: [certPage("aau-metaverse", 1800, 1273)],
  },
  {
    name: "Crafting the Cybersecurity Roadmap of Tomorrow",
    issuer: "Digital Excel Training & Consultancy",
    date: "Mar 2024",
    sortDate: "2024-03-08",
    category: "Security",
    pages: [certPage("digital-excel-cybersecurity-roadmap", 1800, 1300)],
  },
  {
    name: "Introduction to Computers and Operating Systems and Security",
    issuer: "Microsoft · Coursera",
    date: "Jan 2024",
    sortDate: "2024-01-21",
    category: "Cloud & IT",
    verify: "https://coursera.org/verify/NJEEK3U2V6RA",
    pages: [certPage("microsoft-computers-os-security", 1800, 1391)],
  },
  {
    name: "Front End Development: HTML",
    issuer: "Great Learning Academy",
    date: "Jun 2023",
    sortDate: "2023-06-01",
    category: "Data & dev",
    verify: "https://verify.mygreatlearning.com/MPWGUKNU",
    pages: [certPage("great-learning-html", 1800, 1272)],
  },
  {
    name: "Cyber Security Fundamentals",
    issuer: "The Hope International Company",
    date: "Apr 2023",
    sortDate: "2023-04-09",
    category: "Security",
    note: "40 hours",
    pages: [certPage("hope-cyber-security-fundamentals", 1800, 1273)],
  },
  {
    name: "SQL (Basic)",
    issuer: "HackerRank",
    date: "Jan 2023",
    sortDate: "2023-01-16",
    category: "Data & dev",
    pages: [certPage("hackerrank-sql-basic", 1600, 1200)],
  },
];

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
    "A selection from 45 days in Shanghai, featuring architecture, night streets, and a few quieter rooms between the work.",
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
      nativeLabel: "English",
      lang: "en",
      src: "/certificates/bs-cyber-security-en.png",
      alt: "Bachelor’s degree certificate in Cyber Security, English version",
    },
    {
      label: "Arabic",
      nativeLabel: "العربية",
      lang: "ar",
      src: "/certificates/bs-cyber-security-ar.png",
      alt: "شهادة درجة البكالوريوس في الأمن السيبراني، النسخة العربية",
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
