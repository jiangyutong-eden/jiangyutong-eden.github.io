export type SocialPlatform =
  | "email"
  | "github"
  | "linkedin"
  | "google-scholar"
  | "x"
  | "website";

export interface SocialLink {
  label: string;
  href: string;
  platform: SocialPlatform;
}

export interface Bio {
  name: string;
  title?: string;
  affiliation?: string;
  location?: string;
  email: string;
  shortBio?: string;
  /** 研究兴趣段落（右侧大块文字） */
  researchInterestText: string;
  /** CV 链接，可多个（如中/英） */
  cvLinks: { label: string; href: string }[];
  social: SocialLink[];
}

export interface NewsItem {
  date: string;
  title: string;
  text?: string;
}

export interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: string;
  thumbnailAlt?: string;
  link?: string;
  badge?: string;
}

export interface ExperienceItem {
  type: "internship" | "award";
  title: string;
  organization: string;
  location?: string;
  period?: string;
  year?: string;
  description?: string;
}

export const bio: Bio = {
  name: "Yutong Jiang",
  title: "M.Eng. Candidate in AI and Data Visualization",
  affiliation: "College of Design and Innovation, Tongji University",
  location: "Shanghai, China",
  email: "2433545@tongji.edu.cn",
  shortBio:
    "I am a human–computer interaction researcher focusing on interactive systems, creativity support tools, and AI-augmented interfaces. My work combines qualitative studies with prototype-driven experimentation.",
  researchInterestText:
    "My research focuses on human–computer interaction (HCI), creativity support tools, and human–AI collaboration. I am interested in interactive data visualization, design tools, and prototyping methods that combine qualitative studies with iterative design.",
  cvLinks: [
    { label: "CV (English)", href: "#" },
    { label: "CV (中文)", href: "#" },
  ],
  social: [
    {
      label: "Email",
      href: "2433545@tongji.edu.cn",
      platform: "email",
    },
    {
      label: "Google Scholar",
      href: "https://scholar.google.com/citations?hl=en&user=xmcbIsIAAAAJ",
      platform: "google-scholar",
    },
    {
      label: "GitHub",
      href: "https://github.com/yourname",
      platform: "github",
    },
  ],
};

export const news: NewsItem[] = [
  { date: "2024.1.2", title: "New paper accepted to CHI 2026.", text: "One paper on AI-assisted prototyping was accepted to CHI 2026." },
  { date: "2025.10", title: "Research internship at Example Research Lab.", text: "Started a research internship, working on multimodal creativity support tools." },
  { date: "2025.06", title: "Invited talk at Example HCI Seminar.", text: "Human-centered evaluation of generative models." },
];

export const researchInterests: string[] = [
  "Human–Computer Interaction (HCI)",
  "Creativity support tools",
  "Human–AI collaboration",
  "Interactive data visualization",
  "Design tools & prototyping",
];

export const publications: Publication[] = [
{
    title:
      "Bridging Visual Asymmetry: Exploring AI-Mediated Communication Support for Parents with Visual Impairments and Their Sighted Children in Outdoor Informal Learning",
    authors:
      "Y. Jiang, Z. Zhang, J. Xu, Q. Zheng, Q. Guo, ... Q. Wang",
    venue: "CHI Conference on Human Factors in Computing Systems (CHI)",
    year: "2026",
    badge: "CHI 2026",
    link: "",
    thumbnailAlt:
      "A distributed AI system supporting joint attention and communication between visually impaired parents and sighted children during outdoor informal learning.",
  },
  {
    title:
      "PrivWeb: Unobtrusive and Content-aware Privacy Protection for Web Agents",
    authors:
      "S. Zhang*, Y. Jiang*, R. Ma, Y. Yang, M. Xu, Z. Huang, ... H. Li (*equal contribution)",
    venue: "CHI Conference on Human Factors in Computing Systems (CHI)",
    year: "2026",
    badge: "CHI 2026",
    link: "",
    thumbnailAlt:
      "A privacy-aware system that detects and manages sensitive information during web-agent interactions.",
  },
  {
    title:
      "When Stars Shine through Silence: Affective Visualization as Empowerment for Victims of Subway Harassment",
    authors:
      "Y. Jiang, X. Yan, C. Zheng, Y. Shi, Q. Chen, N. Cao",
    venue: "SIGGRAPH Asia Posters",
    year: "2025",
    badge: "SIGGRAPH Asia Posters 2025",
    link: "",
    thumbnailAlt:
      "An affective visualization system highlighting emotional experiences of subway harassment victims.",
  },
  {
    title:
      "I Can Only Guess Where She’s Looking: Challenges and Design Strategies for Supporting Outdoor Informal Learning Between Parents with Visual Impairments and Their Sighted Children",
    authors:
      "Y. Jiang*, Q. Zheng*, Z. Zhang*, Q. Guo*, J. Xu*, S. Xu, G. Liu (*equal contribution)",
    venue: "CSCW Companion",
    year: "2025",
    badge: "CSCW Companion 2025",
    link: "",
    thumbnailAlt:
      "A study investigating communication and attention challenges in informal learning between visually impaired parents and sighted children.",
  },
  {
    title:
      "City of Wander: Visualizing Scientific Literature for Knowledge Exploration Using Visual Metaphors",
    authors:
      "G. Liu, Y. Jiang, X. Yan, N. Cao, Y. Shi",
    venue: "CHI Extended Abstracts",
    year: "2025",
    badge: "CHI EA 2025",
    link: "",
    thumbnailAlt:
      "A visualization system using metaphor-driven layouts to explore scientific literature.",
  },
  {
    title:
      "Data Visualization of Scientific Literature to Support Exploratory Reading",
    authors:
      "X. Yan, Y. Jiang, N. Cao, G. Liu, Y. Shi",
    venue: "ChinaVis",
    year: "2024",
    badge: "ChinaVis 2024",
    link: "",
    thumbnailAlt:
      "A literature visualization interface designed to support exploratory reading and knowledge discovery.",
  },
];

export const experiences: ExperienceItem[] = [
  {
    type: "internship",
    title: "Research Intern, HCI & Productivity",
    organization: "Example Research Lab",
    location: "Remote",
    period: "Summer 2025",
    description:
      "Designed and evaluated interactive prototypes for AI-augmented productivity workflows with knowledge workers.",
  },
  {
    type: "internship",
    title: "Research Intern, Human-AI Interaction",
    organization: "Example AI Lab",
    location: "City, Country",
    period: "Summer 2024",
    description:
      "Ran mixed-methods studies to understand how non-expert users adapt to generative interfaces in creative domains.",
  },
  {
    type: "award",
    title: "1st Place – Visual Data Storytelling Contest",
    organization: "IEEE PacificVis",
    year: "2025",
    description:
      "First place in the PacificVis Visual Data Storytelling Contest for an innovative visualization project communicating complex data narratives.",
  },
  {
    type: "award",
    title: "2nd Place – Design Factory Global Challenge",
    organization: "Design Factory Global Network",
    year: "2025",
    description:
      "Second place in the international Design Factory Global Challenge for interdisciplinary innovation and design problem solving.",
  },
  {
    type: "award",
    title: "Annual Selected Works",
    organization: "China Data Content Conference",
    year: "2025",
    description:
      "Selected as one of the annual outstanding works for contributions in data-driven visual communication and storytelling.",
  },
  {
    type: "award",
    title: "National Scholarship",
    organization: "Ministry of Education of China",
    year: "2025",
    description:
      "Top national scholarship awarded to outstanding university students for academic excellence and research achievements.",
  },
  {
    type: "award",
    title: "Outstanding Graduate",
    organization: "Shanghai Municipal Education Commission",
    year: "2024",
    description:
      "Recognized as an Outstanding Graduate of Shanghai for comprehensive academic performance and contributions during undergraduate studies.",
  },
  {
    type: "award",
    title: "National Scholarship",
    organization: "Ministry of Education of China",
    year: "2022",
    description:
      "National-level scholarship awarded to top-performing undergraduate students in recognition of academic excellence.",
  },
];

export const internships: ExperienceItem[] = experiences.filter((e) => e.type === "internship");
export const awards: ExperienceItem[] = experiences.filter((e) => e.type === "award");

/** 研究兴趣段落（用于右侧大块文字） */
export const researchInterestText: string = bio.researchInterestText;

