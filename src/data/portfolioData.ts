export interface Skill {
  name: string;
  percentage: number;
  icon: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Project {
  id: string;
  title: string;
  category: 'all' | 'mobile' | 'admin' | 'utility' | 'chat' | 'health' | 'finance';
  badgeText: string;
  badgeType: 'purple' | 'cyan' | 'amber';
  image: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface PersonalInfo {
  name: string;
  role: string;
  location: string;
  avatarUrl: string;
  bio: string;
  resumeUrl: string;
  email: string;
  phone: string;
  workingHours: string;
  stats: {
    num: string;
    label: string;
  }[];
  socials: {
    platform: string;
    url: string;
    icon: string;
  }[];
  tags: string[];
}

export const personalInfo: PersonalInfo = {
  name: "Md. Sayedul Marsalin",
  role: "Flutter Developer",
  location: "Dhaka, Bangladesh",
  avatarUrl: "https://avatars.githubusercontent.com/u/164027880?v=4",
  bio: "Passionate Flutter Developer with 1.5+ years of experience crafting beautiful, high-performance cross-platform applications for Android, iOS, and Web.",
  resumeUrl: "https://drive.google.com/drive/folders/12RRl8A1XY2qpZ-QDFxhDTFfJ85bovn-4?usp=sharing",
  email: "sayadulmorsalin123@gmail.com",
  phone: "+880 1775 876544",
  workingHours: "Mon–Fri · 9 AM – 6 PM · Reply <24h",
  stats: [
    { num: "1.5+", label: "Years Exp." },
    { num: "20+", label: "Projects" },
    { num: "15+", label: "Completed" },
    { num: "100%", label: "Passion" },
  ],
  socials: [
    { platform: "GitHub", url: "https://github.com/sayedulmorsalin", icon: "github" },
    { platform: "LinkedIn", url: "https://www.linkedin.com/in/sayedul-marsalin", icon: "linkedin" },
    { platform: "Facebook", url: "https://www.facebook.com/sayadul.morsalin.94", icon: "facebook" },
    { platform: "Twitter", url: "https://twitter.com/sayedulmorsalin", icon: "twitter" },
  ],
  tags: ["Flutter", "Firebase", "Dart", "GetX", "BLoC"],
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Dart", percentage: 90, icon: "https://iili.io/fgXmqml.png" },
      { name: "C++", percentage: 75, icon: "https://iili.io/fgXmd1n.png" },
      { name: "Java", percentage: 75, icon: "https://iili.io/fgXmI1e.png" },
      { name: "Python", percentage: 60, icon: "https://iili.io/fgXmXkv.png" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "Flutter", percentage: 90, icon: "https://iili.io/fgXmnXS.png" },
      { name: "Node.js", percentage: 60, icon: "https://iili.io/fgXmEEF.png" },
      { name: ".NET", percentage: 50, icon: "https://iili.io/fgXmchB.png" },
      { name: "React", percentage: 50, icon: "https://iili.io/fgXmhpR.png" },
    ],
  },
  {
    title: "Databases & Backend",
    skills: [
      { name: "Firebase", percentage: 90, icon: "https://iili.io/fgXmCI2.png" },
      { name: "MongoDB", percentage: 80, icon: "https://iili.io/fgXmAdb.png" },
      { name: "SQLite", percentage: 70, icon: "https://iili.io/fgXmwIp.png" },
      { name: "MySQL", percentage: 80, icon: "https://iili.io/fgXm7mQ.png" },
    ],
  },
];

export const projectsData: Project[] = [
  {
    id: "dadu-ecommerce",
    title: "DADU E-commerce",
    category: "mobile",
    badgeText: "Mobile App",
    badgeType: "purple",
    image: "https://iili.io/fgpUWsp.png",
    description: "Full-stack e-commerce platform with authentication, cart, orders, and admin dashboard. Implemented fuzzy search improving product discovery by 50%. Reduced image load time by 35% using Cloudinary CDN.",
    tags: ["Flutter", "Firebase", "Stripe API", "GetX"],
    githubUrl: "https://github.com/sayedulmorsalin/DADU",
    liveUrl: "https://play.google.com/store/apps/details?id=com.sayedulmarsalin.dadu",
    featured: true,
  },
  {
    id: "dadu-admin-panel",
    title: "DADU Admin Panel",
    category: "admin",
    badgeText: "Admin Panel",
    badgeType: "cyan",
    image: "https://iili.io/fgpUVXR.png",
    description: "Comprehensive admin dashboard for managing products, orders, users, and analytics for the DADU e-commerce platform with real-time data visualization.",
    tags: ["Flutter", "Firebase", "Cloud Functions", "Charts"],
    githubUrl: "https://github.com/sayedulmorsalin/DADU_admin_panel",
    featured: true,
  },
  {
    id: "meal-assistant",
    title: "Meal Assistant",
    category: "health",
    badgeText: "Health App",
    badgeType: "amber",
    image: "https://iili.io/fgpUhqN.png",
    description: "Smart meal tracking app with calorie counting, weekly meal plans, grocery lists, and nutrition insights to help users maintain a healthy lifestyle.",
    tags: ["Flutter", "Firebase", "Nutrition API", "Local Storage"],
    githubUrl: "https://github.com/sayedulmorsalin/Meal_manager",
    featured: true,
  },
  {
    id: "easyshare",
    title: "EasyShare",
    category: "utility",
    badgeText: "Utility App",
    badgeType: "purple",
    image: "https://iili.io/fgpUMzv.png",
    description: "High-speed Wi-Fi Direct file sharing application with cross-platform support, end-to-end encryption, and batch transfer capabilities.",
    tags: ["Flutter", "Wi-Fi Direct", "Encryption", "Platform Channels"],
    githubUrl: "https://github.com/sayedulmorsalin/easyshare",
    featured: true,
  },
  {
    id: "talksy",
    title: "Talksy",
    category: "chat",
    badgeText: "Chat App",
    badgeType: "cyan",
    image: "https://iili.io/f6b2HGt.png",
    description: "Real-time chat application with voice messages, group chats, read receipts, and end-to-end encryption for secure messaging.",
    tags: ["Flutter", "Firebase", "Firebase Auth", "FCM"],
    githubUrl: "https://github.com/sayedulmorsalin/Talksy",
    featured: true,
  },
  {
    id: "moderator-manager",
    title: "Moderator Manager",
    category: "finance",
    badgeText: "Finance App",
    badgeType: "amber",
    image: "https://iili.io/fPdiJwB.png",
    description: "A comprehensive moderation and management system for online communities, featuring admin monitoring, financial tracking, and real-time reporting.",
    tags: ["Flutter", "FastAPI", "Calculation", "Admin Panel"],
    githubUrl: "https://github.com/sayedulmorsalin/Moderator-manager",
    featured: true,
  },
];
