
import { Experience, Project, Education, SkillCategory, PersonalInfo, Certification } from './types';

export const PERSONAL_INFO: PersonalInfo = {
  name: "Apratim Mantri",
  title: "Digital Marketer",
  image: "https://media.licdn.com/dms/image/v2/D4D03AQGGDBPIpziIDQ/profile-displayphoto-scale_400_400/B4DZpJbf1kJEAk-/0/1762168538161?e=1767830400&v=beta&t=IeJ8OvA8NBNEFT0WT53gci7mk3dYkh7TAfXZhNqJgOw",
  contact: {
    phone: "+91 7073714909",
    email: "apratim.workspace@gmail.com",
    linkedin: "Apratim-Mantri"
  },
  summary: "I help businesses unlock measurable growth through expert SEO, PPC, and holistic performance marketing strategies. Turn clicks into revenue."
};

export const SKILLS: SkillCategory[] = [
  {
    category: "Digital Marketing",
    icon: "fa-solid fa-bullhorn",
    skills: ["SEO (On-page, Off-page, Technical)", "PPC", "Content Marketing", "Social Media Marketing"]
  },
  {
    category: "Advertising Platforms",
    icon: "fa-solid fa-rectangle-ad",
    skills: ["Meta Ads", "LinkedIn Ads", "Google Ads"]
  },
  {
    category: "Analytics Tools",
    icon: "fa-solid fa-chart-line",
    skills: ["Ahrefs", "SEMrush", "Moz", "SpyFu", "Google Analytics", "Google Tag Manager", "YouTube Creator Studio"]
  },
  {
    category: "Design Tools",
    icon: "fa-solid fa-pen-nib",
    skills: ["Canva", "VistaCreate", "Adobe Spark", "Veed", "Flair.ai"]
  },
  {
    category: "Web & CMS",
    icon: "fa-solid fa-laptop-code",
    skills: ["WordPress", "Blogger", "Odoo", "Wix"]
  },
  {
    category: "AI Tools",
    icon: "fa-solid fa-robot",
    skills: ["ChatGPT", "Claude", "Copilot"]
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: "cosmos",
    company: "Cosmos Manpower Pvt. Ltd.",
    role: "Digital Marketer",
    period: "January 2025 – Present",
    description: [
      "Manage social media and online marketing for Cosmos Manpower, Cosmos Services LLC, and Cosmos Medical Care Solutions.",
      "Boosted total followers by 55% through strategic content and ad campaigns.",
      "Execute on-page, off-page, and technical SEO to improve visibility and organic reach.",
      "Run Facebook, Instagram, and LinkedIn ads to drive brand awareness and qualified leads.",
      "Deliver 10–13% candidate fulfillment rate for client placements via targeted lead generation.",
      "Create content, graphics, and social media calendars for clients under Cosmos Services LLC to enhance engagement."
    ]
  },
  {
    id: "snipezine",
    company: "SnipeZine",
    role: "Social Media Marketer",
    period: "July 2021 – November 2021",
    description: [
      "Designed and executed impactful social media campaigns.",
      "Utilized SEO techniques to drive traffic and improve search rankings.",
      "Created compelling graphics to enhance visual appeal on social platforms."
    ]
  },
  {
    id: "brandchanakya",
    company: "Brand Chanakya",
    role: "Digital Marketer",
    period: "March 2020 - December 2020",
    description: [
      "Implemented on-page and off-page SEO strategies.",
      "Conducted in-depth content research.",
      "Analyzed website performance to identify improvements, and boosted page views by 5%."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "gargi",
    name: "Gargi’s Recycled Handicrafts",
    role: "Web Developer",
    link: "gargis-recycled-handicrafts.com",
    period: "2025",
    description: "Built and customized an Odoo e-commerce website with modern UI/UX, product integration, and content publishing for recycled handicraft products."
  },
  {
    id: "vacoustics",
    name: "Vacoustics",
    link: "instagram.com/_vacoustics_",
    period: "Oct 2021 – Sept 2024",
    role: "Social Media Marketing Project",
    description: "Managed YouTube and Instagram presence by creating engaging content, developing growth strategies, and overseeing research, scheduling, and performance optimization, resulting in a ~20% increase in views and followers."
  },
  {
    id: "dakshta",
    name: "Dakshta Sashaktikaran Evum Shodh Sansthan",
    role: "Web Developer",
    link: "dakshtasociety.org",
    period: "2023 – 2024",
    description: "Developed and upgraded the NGO’s Blogger website with custom coding, enhanced performance, and integrated QR-based donation system."
  },
  {
    id: "scorpion",
    name: "The Scorpion Goddess",
    role: "Digital Marketing and Web Development",
    period: "Feb 2022 – Sept 2023",
    description: "Built and optimized websites with SEO-driven content and trend-based strategies to boost user experience and engagement."
  }
];

export const EDUCATION: Education[] = [
  {
    id: "mica",
    institution: "MICA (with upGrad)",
    degree: "Advanced Certification in Digital Marketing & Communication",
    period: "September 2024 - July 2025",
    details: [
      "Grade: 96.78",
      "Specialization: Social Media and Content Marketing (Grade: 95.33)",
      "Generative AI (Grade: 90.28)"
    ]
  },
  {
    id: "msu",
    institution: "Mohanlal Sukhadia University",
    degree: "Master of Computer Applications (MCA)",
    period: "2022 - 2024",
    details: [
      "CGPA: 6.57"
    ]
  }
];

export const CERTIFICATIONS: Certification[] = [
  // 2026
  {
    id: "linkedin-marketing-measurement",
    title: "LinkedIn Marketing Measurement Certification",
    issuer: "LinkedIn",
    date: "2026 - 2028",
    image: "https://placehold.co/600x400/0077B5/white?text=LinkedIn+Measurement",
    credentialLink: "https://drive.google.com/file/d/1MMPQvtYObtR9ixJ7yPP5f8F7ODfLmMye/view?usp=sharing"
  },
  // 2025
  {
    id: "skill-india-digital-marketing",
    title: "Digital Marketing (140 Hours) - Skill India Digital Hub",
    issuer: "Reliance Foundation & NSDC",
    date: "2025",
    image: "https://placehold.co/600x400/0b415b/white?text=Skill+India+Digital",
    credentialLink: "https://drive.google.com/file/d/1YtrEasHBhEHqC442DXVFwEAH9m6-R7yS/view?usp=sharing"
  },
  {
    id: "reliance-digital-marketing",
    title: "Certificate Course in Digital Marketing",
    issuer: "Reliance Foundation & NSDC",
    date: "2025",
    image: "https://placehold.co/600x400/004b23/white?text=Reliance+Foundation",
    credentialLink: "https://drive.google.com/file/d/1H_UbRoXgZ1aGX3DbZDSH8I9p6NkOVrnb/view?usp=sharing"
  },
  {
    id: "linkedin-marketing-strategy",
    title: "LinkedIn Marketing Strategy Certification",
    issuer: "LinkedIn",
    date: "2025",
    image: "https://placehold.co/600x400/0077B5/white?text=LinkedIn+Strategy",
    credentialLink: "https://drive.google.com/file/d/1al2kgVRUd18nGdtuQZQbJDu4SgxrWvmP/view?usp=drive_link"
  },
  {
    id: "mica-upgrad",
    title: "Digital Marketing and Communication",
    issuer: "MICA | upGrad",
    date: "2025",
    image: "https://placehold.co/600x400/D32F2F/white?text=MICA+%7C+upGrad",
    credentialLink: "https://drive.google.com/file/d/1yk8hQvjDrgbmRp1zyLZZhGnGoPxCYQaX/view?usp=drive_link"
  },
  
  // 2022
  {
    id: "iide-masterclass",
    title: "Digital Marketing Fundamentals MasterClass",
    issuer: "IIDE",
    date: "2022",
    image: "https://placehold.co/600x400/F97316/white?text=IIDE+Masterclass",
    credentialLink: "https://drive.google.com/file/d/1ioAaVKSJ-c-iV4pyOep8OBXjViN-ekwj/view?usp=drive_link"
  },
  {
    id: "meta-creator",
    title: "Getting Started as a Creator",
    issuer: "Meta (Facebook & Instagram)",
    date: "2022",
    image: "https://placehold.co/600x400/0668E1/white?text=Meta+Creator",
    credentialLink: "https://drive.google.com/file/d/1BZXL8Et0JTLJadIDwqWJDRCBa6OpyiRW/view?usp=drive_link"
  },
  {
    id: "google-ads-measurement",
    title: "Google Ads - Measurement Certification",
    issuer: "Google",
    date: "2022",
    image: "https://placehold.co/600x400/34A853/white?text=Measurement+Cert",
    credentialLink: "https://drive.google.com/file/d/1vBsn4tP3kLDSuTV6cKBJa33bvhDRpRk-/view?usp=drive_link"
  },
  {
    id: "google-ads-display",
    title: "Google Ads Display Certification",
    issuer: "Google",
    date: "2022",
    image: "https://placehold.co/600x400/FBBC04/black?text=Google+Ads+Display",
    credentialLink: "https://drive.google.com/file/d/1n8BQomKKXbP05hyHjdku8d_M6RyE9a7d/view?usp=drive_link"
  },
  {
    id: "google-ads-search",
    title: "Google Ads Search Certification",
    issuer: "Google",
    date: "2022",
    image: "https://placehold.co/600x400/4285F4/white?text=Google+Ads+Search",
    credentialLink: "https://drive.google.com/file/d/1HgGMg_lW6FoQEIdkJ8T_hBJaJ3esLagg/view?usp=drive_link"
  },
  {
    id: "google-ads-video",
    title: "Google Ads Video Certification",
    issuer: "Google",
    date: "2022",
    image: "https://placehold.co/600x400/EA4335/white?text=Google+Ads+Video",
    credentialLink: "https://drive.google.com/file/d/183n9umu6Q1N3mrUsZM3DozEoPSY3an3x/view?usp=drive_link"
  },

  // 2021
  {
    id: "boi-creator",
    title: "BOI Recognized Creator",
    issuer: "Born on Instagram",
    date: "2021",
    image: "https://placehold.co/600x400/E1306C/white?text=Born+On+Instagram",
    credentialLink: "https://drive.google.com/file/d/13K8a8hd_asH86lJVdfakfR4UlMNwdlJN/view?usp=sharing"
  },
  {
    id: "ncfe-financial",
    title: "Certificate of Basic Financial Education",
    issuer: "National Centre for Financial Education",
    date: "2021",
    image: "https://placehold.co/600x400/10B981/white?text=NCFE",
    credentialLink: "https://drive.google.com/file/d/1-8ZDtkag5rq9eRp9lBfbwMr_KUkArVm3/view?usp=drive_link"
  },
  {
    id: "snipezine-cert",
    title: "Digital Marketing",
    issuer: "SnipeZine",
    date: "2021",
    image: "https://placehold.co/600x400/6B21A8/white?text=SnipeZine",
    credentialLink: "https://drive.google.com/file/d/1njHQEH9TJEs0hRvTO7ux7dbDpycTW1a8/view?usp=drive_link"
  },

  // 2020
  {
    id: "brand-chanakya-cert",
    title: "Digital Marketing",
    issuer: "Brand Chanakya",
    date: "2020",
    image: "https://placehold.co/600x400/333333/white?text=Brand+Chanakya",
    credentialLink: "https://drive.google.com/file/d/13DuD9Nk-LaS35Ia-_Ih-XqDeUL_JO90z/view?usp=sharing"
  },
  {
    id: "google-fundamentals",
    title: "Fundamentals of Digital Marketing",
    issuer: "Google Digital Unlocked",
    date: "2020",
    image: "https://placehold.co/600x400/4285F4/white?text=Digital+Unlocked",
    credentialLink: "https://drive.google.com/file/d/1GkcNR9ADGuexwjzT_BP0sAPJS0KL_xt0/view?usp=drive_link"
  }
];
