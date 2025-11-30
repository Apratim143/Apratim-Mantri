import { Experience, Project, Education, SkillCategory, PersonalInfo } from './types';

export const PERSONAL_INFO: PersonalInfo = {
  name: "Apratim Mantri",
  title: "Digital Marketer",
  contact: {
    phone: "+91 7073714909",
    email: "apratim.workspace@gmail.com",
    linkedin: "Apratim-Mantri"
  },
  summary: "Results-driven Digital Marketer specializing in SEO, PPC, Social Media Marketing, and Content Marketing. I have managed multi-brand campaigns, optimized websites, and executed high-performing ads across Google, Meta, and LinkedIn. With analytical, design, and web development skills, I can combine creativity and strategy to deliver measurable growth."
};

export const SKILLS: SkillCategory[] = [
  {
    category: "Digital Marketing",
    skills: ["SEO (On-page, Off-page, Technical)", "PPC", "Content Marketing", "Social Media Marketing"]
  },
  {
    category: "Advertising Platforms",
    skills: ["Meta Ads", "LinkedIn Ads", "Google Ads"]
  },
  {
    category: "Analytics Tools",
    skills: ["Ahrefs", "SEMrush", "Moz", "SpyFu", "Google Analytics", "Google Tag Manager"]
  },
  {
    category: "Design Tools",
    skills: ["Canva", "VistaCreate", "Adobe Spark", "Veed"]
  },
  {
    category: "Web & CMS",
    skills: ["WordPress", "Blogger", "Odoo", "Wix"]
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