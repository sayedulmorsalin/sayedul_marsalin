export interface Skill {
  name: string;
  percentage: number;
  icon: string;
  level?: string;
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
  screenshots: string[];
  description: string;
  keyHighlights?: string[];
  metrics?: { label: string; value: string }[];
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface PersonalInfo {
  name: string;
  role: string;
  typingRoles: string[];
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

export interface ExperienceItem {
  id: string;
  period: string;
  title: string;
  company: string;
  type: string;
  description: string;
  achievements: string[];
  skillsUsed: string[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  text: string;
  rating: number;
}

export interface CodeSnippet {
  title: string;
  language: string;
  filename: string;
  code: string;
  logs: string[];
}

export const personalInfo: PersonalInfo = {
  name: "Md. Sayedul Marsalin",
  role: "Flutter Developer",
  typingRoles: [
    "Flutter Developer",
    "Cross-Platform Specialist",
    "Mobile App Architect",
    "GetX & BLoC Expert",
    "Firebase Integrator",
  ],
  location: "Dhaka, Bangladesh",
  avatarUrl: "https://avatars.githubusercontent.com/u/164027880?v=4",
  bio: "Passionate Flutter Developer with 1.5+ years of experience crafting beautiful, high-performance cross-platform applications for Android, iOS, and Web with clean code architecture.",
  resumeUrl: "https://drive.google.com/drive/folders/12RRl8A1XY2qpZ-QDFxhDTFfJ85bovn-4?usp=sharing",
  email: "sayadulmorsalin123@gmail.com",
  phone: "+880 1775 876544",
  workingHours: "Mon–Fri · 9 AM – 6 PM (UTC+6) · Reply <24h",
  stats: [
    { num: "1.5+", label: "Years Exp." },
    { num: "20+", label: "Projects" },
    { num: "15+", label: "Completed" },
    { num: "100%", label: "Satisfaction" },
  ],
  socials: [
    { platform: "GitHub", url: "https://github.com/sayedulmorsalin", icon: "github" },
    { platform: "LinkedIn", url: "https://www.linkedin.com/in/sayedul-marsalin", icon: "linkedin" },
    { platform: "Facebook", url: "https://www.facebook.com/sayadul.morsalin.94", icon: "facebook" },
    { platform: "Twitter", url: "https://twitter.com/sayedulmorsalin", icon: "twitter" },
  ],
  tags: ["Flutter", "Firebase", "Dart", "GetX", "BLoC", "REST API", "Clean Arch"],
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Dart", percentage: 92, icon: "https://iili.io/fgXmqml.png", level: "Expert" },
      { name: "C++", percentage: 78, icon: "https://iili.io/fgXmd1n.png", level: "Advanced" },
      { name: "Java", percentage: 75, icon: "https://iili.io/fgXmI1e.png", level: "Advanced" },
      { name: "Python", percentage: 65, icon: "https://iili.io/fgXmXkv.png", level: "Intermediate" },
    ],
  },
  {
    title: "Frameworks & State Management",
    skills: [
      { name: "Flutter", percentage: 95, icon: "https://iili.io/fgXmnXS.png", level: "Expert" },
      { name: "GetX", percentage: 90, icon: "https://iili.io/fgXmnXS.png", level: "Expert" },
      { name: "BLoC / Provider", percentage: 85, icon: "https://iili.io/fgXmnXS.png", level: "Advanced" },
      { name: "Node.js", percentage: 62, icon: "https://iili.io/fgXmEEF.png", level: "Intermediate" },
    ],
  },
  {
    title: "Databases & Cloud Services",
    skills: [
      { name: "Firebase", percentage: 92, icon: "https://iili.io/fgXmCI2.png", level: "Expert" },
      { name: "MongoDB", percentage: 80, icon: "https://iili.io/fgXmAdb.png", level: "Advanced" },
      { name: "SQLite / Hive", percentage: 85, icon: "https://iili.io/fgXmwIp.png", level: "Advanced" },
      { name: "MySQL", percentage: 80, icon: "https://iili.io/fgXm7mQ.png", level: "Advanced" },
    ],
  },
];

export const projectsData: Project[] = [
  {
    id: "dadu-ecommerce",
    title: "DADU E-commerce",
    category: "mobile",
    badgeText: "Play Store App",
    badgeType: "purple",
    image: "/projects/dadu-ecommerce/screenshot1.png",
    screenshots: [
      "/projects/dadu-ecommerce/screenshot1.png",
      "/projects/dadu-ecommerce/screenshot2.png",
      "/projects/dadu-ecommerce/screenshot3.png",
    ],
    description: "Full-stack e-commerce platform featuring secure authentication, payment gateway integration (bKash/Stripe), real-time cart synchronization, order tracking, and admin controls.",
    keyHighlights: [
      "Implemented custom fuzzy search algorithm improving product discovery speed by 50%",
      "Optimized media asset caching reducing image load time by 35% via Cloudinary CDN",
      "Integrated bKash and Stripe payment proofs with Firebase real-time database"
    ],
    metrics: [
      { label: "Search Speed", value: "+50%" },
      { label: "Load Time", value: "-35%" },
      { label: "Platform", value: "Android & iOS" }
    ],
    tags: ["Flutter", "Firebase", "bKash & Stripe", "GetX", "Cloudinary"],
    githubUrl: "https://github.com/sayedulmorsalin/DADU",
    liveUrl: "https://play.google.com/store/apps/details?id=com.sayedulmarsalin.dadu",
    featured: true,
  },
  {
    id: "dadu-admin-panel",
    title: "DADU Admin Suite",
    category: "admin",
    badgeText: "Control Panel",
    badgeType: "cyan",
    image: "/projects/dadu-admin-panel/cover.png",
    screenshots: [
      "/projects/dadu-admin-panel/screenshot1.png",
      "/projects/dadu-admin-panel/screenshot2.png",
      "/projects/dadu-admin-panel/screenshot3.png",
    ],
    description: "Enterprise administrative dashboard built to manage products, inspect order workflows, manage user roles, and visualize revenue analytics in real-time.",
    keyHighlights: [
      "Real-time interactive revenue & user account analytics graph system",
      "Cloud Functions backend automation for order status & shipping updates",
      "Granular user permissions and product inventory management"
    ],
    metrics: [
      { label: "Accounts", value: "20.4k+" },
      { label: "Analytics", value: "Real-time" }
    ],
    tags: ["Flutter Web", "Firebase", "Cloud Functions", "Syncfusion Charts"],
    githubUrl: "https://github.com/sayedulmorsalin/DADU_admin_panel",
    featured: true,
  },
  {
    id: "meal-assistant",
    title: "Meal Assistant AI",
    category: "health",
    badgeText: "Play Store App",
    badgeType: "amber",
    image: "/projects/meal-assistant/cover.png",
    screenshots: [
      "/projects/meal-assistant/screenshot1.png",
      "/projects/meal-assistant/screenshot2.png",
      "/projects/meal-assistant/screenshot3.png",
    ],
    description: "Smart mess management and nutrition tracking application with daily meal rate calculation, monthly calendar breakdown, member deposit logs, and shopping expense history.",
    keyHighlights: [
      "Automated mess meal rate and deposit calculation engine",
      "Offline-first sync using local Hive storage and Firebase sync",
      "Interactive monthly calendar breakdown for daily meal logs"
    ],
    metrics: [
      { label: "Offline First", value: "100%" },
      { label: "Calculations", value: "Automated" }
    ],
    tags: ["Flutter", "Hive DB", "Firebase", "BLoC", "Play Store"],
    githubUrl: "https://github.com/sayedulmorsalin/Meal_manager",
    liveUrl: "https://play.google.com/store/apps/details?id=com.sayedulmarsalin.meal_assistant",
    featured: true,
  },
  {
    id: "easyshare",
    title: "EasyShare P2P",
    category: "utility",
    badgeText: "Utility Tool",
    badgeType: "purple",
    image: "/projects/easyshare/cover.png",
    screenshots: [
      "/projects/easyshare/screenshot1.png",
      "/projects/easyshare/screenshot2.png",
      "/projects/easyshare/screenshot3.png",
    ],
    description: "Ultra-fast Wi-Fi Direct peer-to-peer file transfer system featuring end-to-end encryption, cross-platform transfer, and batch file handling.",
    keyHighlights: [
      "Leveraged native Platform Channels for Wi-Fi Direct socket connections",
      "Transfer speeds up to 40 MB/s without cellular data consumption",
      "End-to-end encrypted packet transmission"
    ],
    metrics: [
      { label: "Max Speed", value: "40 MB/s" },
      { label: "Encryption", value: "AES-256" }
    ],
    tags: ["Flutter", "Platform Channels", "Wi-Fi Direct", "Crypto"],
    githubUrl: "https://github.com/sayedulmorsalin/easyshare",
    featured: true,
  },
  {
    id: "talksy",
    title: "Talksy Realtime Chat",
    category: "chat",
    badgeText: "Messenger",
    badgeType: "cyan",
    image: "/projects/talksy/cover.png",
    screenshots: [
      "/projects/talksy/screenshot1.png",
      "/projects/talksy/screenshot2.png",
      "/projects/talksy/screenshot3.png",
    ],
    description: "Feature-rich real-time messaging mobile application supporting instant messaging, audio messages, media attachments, read status, and FCM notifications.",
    keyHighlights: [
      "Instant message dispatch using Firebase Firestore sockets",
      "Audio recording & playback with waveform visualization",
      "FCM background notifications for zero message delay"
    ],
    metrics: [
      { label: "Latency", value: "<50ms" },
      { label: "Notifications", value: "FCM Push" }
    ],
    tags: ["Flutter", "Firebase Auth", "Firestore", "FCM", "GetX"],
    githubUrl: "https://github.com/sayedulmorsalin/Talksy",
    featured: true,
  },
  {
    id: "aquawatch",
    title: "AquaWatch System",
    category: "utility",
    badgeText: "Water Quality Tech",
    badgeType: "cyan",
    image: "/projects/aquawatch/cover.png",
    screenshots: [
      "/projects/aquawatch/screenshot1.png",
      "/projects/aquawatch/screenshot2.png",
      "/projects/aquawatch/screenshot3.png",
      "/projects/aquawatch/screenshot4.png",
    ],
    description: "Environmental water quality monitoring platform with real-time interactive GIS map tracking, multi-parameter data entry (salinity, EC, temperature), geolocation tagging, and admin verification queues.",
    keyHighlights: [
      "Interactive GIS Water Monitoring Map tracking 17+ regional stations across Bangladesh",
      "Multi-parameter sensor measurement entry with automated device GPS location tagging",
      "Role-based verification queue & admin status workflow dashboard"
    ],
    metrics: [
      { label: "Stations", value: "17+ Active" },
      { label: "Parameters", value: "Salinity, EC, Temp" }
    ],
    tags: ["Flutter", "GIS Map API", "Firebase", "Geolocation", "Clean Arch"],
    githubUrl: "https://github.com/sayedulmorsalin/AquaWatch",
    featured: true,
  },
];

export const experienceData: ExperienceItem[] = [
  {
    id: "exp-1",
    period: "2023 - Present",
    title: "Lead Flutter Developer",
    company: "Freelance & Independent Projects",
    type: "Remote / Full-time",
    description: "Designed, developed, and published production mobile and web applications with Flutter. Managed client requirements, app architecture, and database integrations.",
    achievements: [
      "Published DADU E-Commerce and Meal Assistant applications on Google Play Store",
      "Architected 6+ production apps using clean BLoC and GetX state management patterns",
      "Integrated payment gateways (Stripe/bKash), push notifications (FCM), and RESTful APIs"
    ],
    skillsUsed: ["Flutter", "Dart", "Firebase", "GetX", "BLoC", "REST APIs", "Play Store Publishing"]
  },
  {
    id: "exp-2",
    period: "2022 - 2023",
    title: "Mobile App Developer",
    company: "Client Solutions & Open Source",
    type: "Contract",
    description: "Created cross-platform utility tools, real-time messaging apps, and custom native platform channel bridges for file sharing and hardware access.",
    achievements: [
      "Built EasyShare Wi-Fi Direct file transfer app achieving 40MB/s speeds",
      "Developed Talksy Messenger with real-time Firestore database synchronization",
      "Built custom admin suites with interactive chart dashboards"
    ],
    skillsUsed: ["Flutter", "Dart", "SQLite", "Firebase", "Wi-Fi Direct", "Platform Channels"]
  }
];

export const testimonialsData: TestimonialItem[] = [
  {
    id: "test-1",
    name: "Alex Rahman",
    role: "Product Manager",
    company: "TechPulse Solutions",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    text: "Sayedul is an exceptional Flutter developer. His attention to smooth animations, clean state management, and speed optimization converted our complex app requirement into a flawless product.",
    rating: 5
  },
  {
    id: "test-2",
    name: "Tanvir Ahmed",
    role: "Startup Founder",
    company: "ShopEase Enterprise",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    text: "Sayedul built our entire e-commerce app and admin panel seamlessly. The search speed and offline experience are top-notch. Highly recommend his cross-platform expertise!",
    rating: 5
  },
  {
    id: "test-3",
    name: "Nusrat Jahan",
    role: "UI/UX Designer",
    company: "CreativeApp Studio",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    text: "Working with Sayedul is a dream for designers. He translates Figma mockups into pixel-perfect Flutter code with 60fps animations effortless precision.",
    rating: 5
  }
];

export const flutterCodeSnippet: CodeSnippet = {
  title: "Clean Architecture Flutter Controller",
  language: "dart",
  filename: "dadu_product_controller.dart",
  code: `import 'package:get/get.dart';
import 'package:firebase_firestore/firebase_firestore.dart';

class ProductController extends GetxController {
  final RxList<Product> products = <Product>[].obs;
  final RxBool isLoading = true.obs;
  final RxString searchQuery = ''.obs;

  @override
  void onInit() {
    super.onInit();
    fetchLiveProducts();
  }

  void fetchLiveProducts() {
    FirebaseFirestore.instance
        .collection('products')
        .snapshots()
        .listen((snapshot) {
      products.value = snapshot.docs
          .map((doc) => Product.fromMap(doc.data(), doc.id))
          .toList();
      isLoading.value = false;
    });
  }

  List<Product> get filteredProducts {
    if (searchQuery.isEmpty) return products;
    return products.where((p) =>
      p.name.toLowerCase().contains(searchQuery.value.toLowerCase())
    ).toList();
  }
}`,
  logs: [
    "[Flutter Engine] Initializing Skia GPU context...",
    "[GetX Controller] ProductController registered successfully",
    "[Firebase Auth] User session restored: sayedul@flutter.dev",
    "[Firestore] Real-time listener attached to 'products' collection",
    "[UI Build] Rendered 60 FPS ListView with 24 items in 4.2ms",
    "✔ BUILD SUCCESSFUL in 890ms (Android ARM64 & iOS Runner)"
  ]
};
