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

export interface ProjectFeature {
  title: string;
  description: string;
  icon?: string;
}

export interface ProjectTechStackItem {
  category: string;
  skills: string[];
}

export interface ProjectArchitecture {
  pattern: string;
  overview: string;
  layers: { name: string; description: string }[];
}

export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  role?: string;
  timeline?: string;
  category: 'all' | 'mobile' | 'admin' | 'utility' | 'chat' | 'health' | 'finance';
  badgeText: string;
  badgeType: 'purple' | 'cyan' | 'amber';
  image: string;
  screenshots: string[];
  description: string;
  overview?: string;
  challenge?: string;
  solution?: string;
  keyHighlights?: string[];
  features?: ProjectFeature[];
  architecture?: ProjectArchitecture;
  techStackDetailed?: ProjectTechStackItem[];
  metrics?: { label: string; value: string; detail?: string }[];
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
  avatarUrl: "/avatar.png",
  bio: "Top Flutter & Cross-Platform Mobile Developer from Dhaka, Bangladesh with 1.5+ years of experience crafting high-performance, pixel-perfect Android & iOS apps with clean architecture.",
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
    subtitle: "Modern Cross-Platform Retail Mobile App with Live Cart Sync & Dual Payment Gateways",
    role: "Lead Mobile Engineer & Architect",
    timeline: "4 Months · Published on Google Play Store",
    category: "mobile",
    badgeText: "Play Store App",
    badgeType: "purple",
    image: "/projects/dadu-ecommerce/screenshot1.png",
    screenshots: [
      "/projects/dadu-ecommerce/screenshot1.png",
      "/projects/dadu-ecommerce/screenshot2.png",
      "/projects/dadu-ecommerce/screenshot3.png",
      "/projects/dadu-ecommerce/cover.png",
    ],
    description: "Full-stack e-commerce mobile application featuring biometric authentication, dual payment gateway integration (bKash & Stripe), real-time cart synchronization, live order tracking, and granular catalog filtering.",
    overview: "DADU is an enterprise-grade retail shopping application engineered to deliver frictionless consumer shopping in Bangladesh and internationally. Built with Flutter and Firebase, it combines instant product discovery with low-bandwidth image optimization and automated localized payment verification.",
    challenge: "Mobile shopping platforms in emerging markets encounter high network latency, heavy media assets slowing down catalog scroll, and cart synchronization drops during intermittent 3G/4G connectivity.",
    solution: "Developed an in-memory client-side fuzzy search algorithm boosting product query speeds by 50%, alongside a dynamic Cloudinary CDN cache pipeline cutting image download overhead by 35%. Integrated GetX reactive controllers for instantaneous single-click checkout with automated bKash MFS and Stripe card token verification.",
    keyHighlights: [
      "Custom fuzzy search indexing algorithm improving product discovery speed by 50%",
      "Optimized Cloudinary image pipeline reducing catalog render payload by 35%",
      "Integrated bKash MFS & Stripe international payment gateway verification",
      "Instant cart synchronization across multiple devices using Firebase Firestore sockets",
      "Interactive customer review system with verified purchase badges"
    ],
    features: [
      {
        title: "Dual Payment Flow (bKash & Stripe)",
        description: "Seamless localized mobile banking via bKash API alongside international credit/debit card processing via Stripe SDK."
      },
      {
        title: "Instant Cart & Wishlist Synchronization",
        description: "Real-time reactive state updates powered by GetX and Firestore for seamless multi-device persistence."
      },
      {
        title: "Smart Product Filtering & Fuzzy Search",
        description: "Zero-latency product filtering by category, price ranges, brand, ratings, and instant character search."
      },
      {
        title: "Push Notifications & Order Tracking",
        description: "Live step-by-step visual order tracking timelines with automated Firebase Cloud Messaging alerts."
      }
    ],
    architecture: {
      pattern: "Clean Architecture + GetX Reactive Pattern",
      overview: "Organized into distinct Presentation, Domain, and Data layers to guarantee testability, maintainability, and loose coupling.",
      layers: [
        { name: "Presentation Layer", description: "Flutter UI widgets, responsive grid layouts, and GetX reactive observers (Obx)." },
        { name: "Domain Layer", description: "Pure Dart business entities, payment validation logic, and use-case handlers." },
        { name: "Data Layer", description: "Firebase Firestore repositories, Cloudinary image providers, and local Hive cache." }
      ]
    },
    techStackDetailed: [
      { category: "Frontend Framework", skills: ["Flutter 3.x", "Dart 3.x", "Material Design 3"] },
      { category: "State Management", skills: ["GetX Reactive State", "GetX Dependency Injection"] },
      { category: "Backend & Cloud", skills: ["Firebase Firestore", "Firebase Auth", "Cloud Functions", "Cloud Storage"] },
      { category: "Payments & APIs", skills: ["bKash Payment Gateway", "Stripe API", "Cloudinary CDN"] },
      { category: "Architecture & Tools", skills: ["Clean Architecture", "Git", "Google Play Console", "Figma"] }
    ],
    metrics: [
      { label: "Search Speed", value: "+50%", detail: "Optimized indexing" },
      { label: "Load Time", value: "-35%", detail: "Cloudinary CDN cache" },
      { label: "Platform", value: "Android & iOS", detail: "Universal Flutter codebase" },
      { label: "Architecture", value: "Clean Arch", detail: "GetX reactive layers" }
    ],
    tags: ["Flutter", "Firebase", "bKash & Stripe", "GetX", "Cloudinary", "Play Store"],
    githubUrl: "https://github.com/sayedulmorsalin/DADU",
    liveUrl: "https://play.google.com/store/apps/details?id=com.sayedulmarsalin.dadu",
    featured: true,
  },
  {
    id: "dadu-admin-panel",
    title: "DADU Admin Suite",
    subtitle: "Enterprise Control Panel for E-Commerce SKU Inventory & Real-Time Analytics",
    role: "Full-Stack Flutter Web Developer",
    timeline: "2.5 Months · Enterprise Internal Tool",
    category: "admin",
    badgeText: "Control Panel",
    badgeType: "cyan",
    image: "/projects/dadu-admin-panel/cover.png",
    screenshots: [
      "/projects/dadu-admin-panel/screenshot1.png",
      "/projects/dadu-admin-panel/screenshot2.png",
      "/projects/dadu-admin-panel/screenshot3.png",
      "/projects/dadu-admin-panel/cover.png",
    ],
    description: "Enterprise administrative web dashboard engineered to manage dynamic product listings, inspect live order workflows, handle user permissions, and visualize revenue analytics in real-time.",
    overview: "DADU Admin Suite provides business managers and store administrators with complete oversight of their digital marketplace. Designed with Flutter Web and CanvasKit, the dashboard offers desktop-grade responsiveness and live analytical visual feeds.",
    challenge: "Managing thousands of SKU variations, batch inventory edits, and live incoming order queues without UI lag or manual page reloads.",
    solution: "Implemented reactive Firestore snapshot listeners coupled with Cloud Functions for automatic status propagation. Integrated Syncfusion high-performance charting for visual revenue and order velocity breakdown.",
    keyHighlights: [
      "Real-time interactive revenue & user account analytics graph system",
      "Cloud Functions backend automation for order status & shipping updates",
      "Granular user permissions and product inventory management",
      "Bulk product CSV import and dynamic category attribute assigner"
    ],
    features: [
      {
        title: "Live Order Workflow Kanban",
        description: "Drag-and-drop status pipeline for Pending, Processing, Shipped, and Delivered orders with instant customer notification triggers."
      },
      {
        title: "Comprehensive Revenue Analytics",
        description: "Interactive timeline graphs tracking gross margins, average order value, top-selling categories, and monthly growth."
      },
      {
        title: "Inventory & Stock Alerts",
        description: "Automated low-stock warnings, barcode lookups, and multi-variant pricing controls."
      }
    ],
    architecture: {
      pattern: "BLoC Pattern with Modular Web Routing",
      overview: "Optimized for Flutter Web using CanvasKit renderer, lazy-loaded dashboard components, and responsive grid layouts.",
      layers: [
        { name: "View Layer", description: "Responsive multi-column data tables, modals, and Syncfusion chart widgets." },
        { name: "State Layer", description: "Event-driven BLoC states managing authentication, filtering, and live socket data." },
        { name: "Service Layer", description: "Firebase Cloud Functions, Firestore Admin SDK, and export services." }
      ]
    },
    techStackDetailed: [
      { category: "Web Framework", skills: ["Flutter Web (CanvasKit)", "Dart", "HTML5"] },
      { category: "State Management", skills: ["BLoC", "Provider"] },
      { category: "Cloud Services", skills: ["Firebase Firestore", "Firebase Cloud Functions", "Firebase Hosting"] },
      { category: "Visualization", skills: ["Syncfusion Flutter Charts", "Fl-Chart"] }
    ],
    metrics: [
      { label: "Active SKUs", value: "5,000+", detail: "Managed in catalog" },
      { label: "Sync Latency", value: "<100ms", detail: "Firestore real-time streams" },
      { label: "Accounts", value: "20.4k+", detail: "Tracked customer records" },
      { label: "Deployment", value: "Web & Desktop", detail: "Flutter multi-platform" }
    ],
    tags: ["Flutter Web", "Firebase", "Cloud Functions", "Syncfusion Charts", "BLoC"],
    githubUrl: "https://github.com/sayedulmorsalin/DADU_admin_panel",
    featured: true,
  },
  {
    id: "meal-assistant",
    title: "Meal Assistant AI",
    subtitle: "Offline-First Mess Management, Daily Meal Rate Engine & Shared Expense Tracker",
    role: "Solo Mobile Architect & Developer",
    timeline: "3 Months · Published on Google Play Store",
    category: "health",
    badgeText: "Play Store App",
    badgeType: "amber",
    image: "/projects/meal-assistant/cover.png",
    screenshots: [
      "/projects/meal-assistant/screenshot1.png",
      "/projects/meal-assistant/screenshot2.png",
      "/projects/meal-assistant/screenshot3.png",
      "/projects/meal-assistant/cover.png",
    ],
    description: "Smart mess management and nutrition tracking mobile app with automatic daily meal rate calculation, monthly calendar breakdowns, member deposit records, and grocery expense ledgers.",
    overview: "Meal Assistant AI simplifies group living for students and working professionals in bachelor messes. It replaces manual paper ledgers with an intelligent automated calculation engine that computes daily meal rates, tracking expenses with zero margin of error.",
    challenge: "Handling complex fractional meal calculations with multi-member cost splits while guaranteeing 100% offline availability in areas with weak cellular connectivity.",
    solution: "Architected an offline-first storage engine using Hive NoSQL DB, syncing automatically with Firebase Firestore when an active connection is detected. Implemented immutable mathematical calculation pipelines.",
    keyHighlights: [
      "Automated mess meal rate and member deposit calculation engine",
      "Offline-first sync using local Hive storage and Firebase Firestore",
      "Interactive monthly calendar breakdown for daily meal logs",
      "PDF balance sheet generator for monthly mess audits"
    ],
    features: [
      {
        title: "Automated Meal Rate Engine",
        description: "Calculates meal rates on-the-fly based on total grocery costs divided by overall consumed meals per member."
      },
      {
        title: "Monthly Audit Calendar",
        description: "Interactive visual calendar showing breakfast, lunch, and dinner records with individual toggles."
      },
      {
        title: "Exportable Audit Reports",
        description: "Generates formatted PDF summaries and monthly expense breakdowns for all mess members."
      }
    ],
    architecture: {
      pattern: "BLoC State Management + Offline-First Repository Pattern",
      overview: "Hive local DB serves as the single source of truth for the UI, synced seamlessly with Firebase cloud backend.",
      layers: [
        { name: "UI Layer", description: "Custom monthly calendar views, daily meal toggles, and financial summary cards." },
        { name: "Domain Logic", description: "Meal rate formula calculations, expense allocation rules, and PDF generator." },
        { name: "Storage Layer", description: "Hive Local Box DB with optimistic conflict resolution and Firebase Firestore." }
      ]
    },
    techStackDetailed: [
      { category: "Mobile Framework", skills: ["Flutter 3.x", "Dart", "Material You"] },
      { category: "Local Database", skills: ["Hive DB (NoSQL)", "SharedPreferences"] },
      { category: "State Management", skills: ["Flutter BLoC", "Cubit"] },
      { category: "Cloud & Sync", skills: ["Firebase Firestore", "Firebase Authentication"] },
      { category: "Document Export", skills: ["PDF Generation", "Printing Library"] }
    ],
    metrics: [
      { label: "Offline First", value: "100%", detail: "Local Hive DB" },
      { label: "Math Error Rate", value: "0.0%", detail: "Automated ledger formulas" },
      { label: "Play Store", value: "Live", detail: "Active user installations" },
      { label: "Rating", value: "5.0 ★", detail: "Positive user feedback" }
    ],
    tags: ["Flutter", "Hive DB", "Firebase", "BLoC", "Play Store", "Offline First"],
    githubUrl: "https://github.com/sayedulmorsalin/Meal_manager",
    liveUrl: "https://play.google.com/store/apps/details?id=com.sayedulmarsalin.meal_assistant",
    featured: true,
  },
  {
    id: "easyshare",
    title: "EasyShare P2P",
    subtitle: "High-Speed Wi-Fi Direct Peer-to-Peer Encrypted File Transfer Tool",
    role: "Flutter & Native Systems Engineer",
    timeline: "2 Months · Open Source Utility",
    category: "utility",
    badgeText: "Utility Tool",
    badgeType: "purple",
    image: "/projects/easyshare/cover.png",
    screenshots: [
      "/projects/easyshare/screenshot1.png",
      "/projects/easyshare/screenshot2.png",
      "/projects/easyshare/screenshot3.png",
      "/projects/easyshare/cover.png",
    ],
    description: "Ultra-fast Wi-Fi Direct peer-to-peer file transfer system featuring end-to-end encryption, multi-file batch streaming, and native Android platform socket bridges achieving up to 40 MB/s speeds.",
    overview: "EasyShare delivers lightning-fast file sharing between devices without requiring an active internet connection, cellular data, or slow Bluetooth pairing. Built with Flutter and native Java socket bridges, it lets users transfer high-definition videos, apps, and documents in seconds.",
    challenge: "Flutter standard library lacks native Wi-Fi Direct (P2P) networking protocols and zero-copy binary streaming primitives required for multi-gigabyte file transfers.",
    solution: "Engineered custom native Android Platform Channels utilizing Android's WifiP2pManager framework. Integrated high-throughput chunked socket streams protected with AES-256 packet encryption.",
    keyHighlights: [
      "Leveraged native Platform Channels for Wi-Fi Direct socket connections",
      "Transfer speeds up to 40 MB/s without cellular data consumption",
      "End-to-end encrypted packet transmission with SHA-256 checksums",
      "Real-time transfer progress bars with ETA and throughput meters"
    ],
    features: [
      {
        title: "Zero-Data P2P Discovery",
        description: "Discovers nearby devices using Wi-Fi Direct NSD (Network Service Discovery) without connecting to a router."
      },
      {
        title: "High-Throughput Streaming",
        description: "Chunked binary socket streaming reaching peak speeds of 40 MB/s."
      },
      {
        title: "Batch File Management",
        description: "Selects multiple folders, APKs, audio, and video files with automatic background queuing."
      }
    ],
    architecture: {
      pattern: "Native Platform Channel Bridge + Stream Controllers",
      overview: "Bridges Flutter UI layer with native Android Wi-Fi Direct socket drivers via binary method channels.",
      layers: [
        { name: "Flutter UI", description: "Radar-style peer discovery animations, transfer meters, and file pickers." },
        { name: "Bridge Layer", description: "Flutter Platform Channels (MethodChannel & EventChannel)." },
        { name: "Native Driver", description: "Android Java WifiP2pManager, ServerSocket, and Socket chunk streaming." }
      ]
    },
    techStackDetailed: [
      { category: "Mobile Framework", skills: ["Flutter", "Dart"] },
      { category: "Native Integration", skills: ["Java / Kotlin", "Android Platform Channels", "WifiP2pManager"] },
      { category: "Networking", skills: ["Raw TCP Sockets", "NSD Peer Discovery"] },
      { category: "Security", skills: ["AES-256 Encryption", "SHA-256 Checksum"] }
    ],
    metrics: [
      { label: "Max Speed", value: "40 MB/s", detail: "Local Wi-Fi Direct" },
      { label: "Encryption", value: "AES-256", detail: "End-to-end encrypted" },
      { label: "Data Usage", value: "0 MB", detail: "100% offline transfer" },
      { label: "Batching", value: "Unlimited", detail: "Multi-file queue" }
    ],
    tags: ["Flutter", "Platform Channels", "Wi-Fi Direct", "Crypto", "P2P", "Java"],
    githubUrl: "https://github.com/sayedulmorsalin/easyshare",
    featured: true,
  },
  {
    id: "talksy",
    title: "Talksy Realtime Chat",
    subtitle: "Low-Latency Cross-Platform Messenger with Voice Memos & FCM Notifications",
    role: "Lead Mobile Developer",
    timeline: "2.5 Months · Production Ready",
    category: "chat",
    badgeText: "Messenger",
    badgeType: "cyan",
    image: "/projects/talksy/cover.png",
    screenshots: [
      "/projects/talksy/screenshot1.png",
      "/projects/talksy/screenshot2.png",
      "/projects/talksy/screenshot3.png",
      "/projects/talksy/cover.png",
    ],
    description: "Feature-rich real-time messaging mobile application supporting instant messaging, audio voice notes with waveform rendering, media attachments, delivery receipts, and FCM push notifications.",
    overview: "Talksy provides modern, responsive chat experiences with sub-50ms message latency. Designed for reliability and delight, it features interactive voice memo recording, message search, and push notification delivery even when the app is inactive.",
    challenge: "Achieving instantaneous visual message dispatch while maintaining sync reliability across devices and handling voice recording waveform animations smoothly at 60 FPS.",
    solution: "Implemented Firestore reactive socket listeners with optimistic UI state updates for instant message rendering. Integrated Flutter Sound audio encoders with dynamic canvas waveforms and Firebase Cloud Messaging.",
    keyHighlights: [
      "Instant message dispatch using Firebase Firestore sockets (<50ms latency)",
      "Audio voice recording & playback with live waveform visualization",
      "FCM background notifications ensuring zero delayed messages",
      "Read receipts, typing indicators, and user online/offline presence"
    ],
    features: [
      {
        title: "Sub-50ms Realtime Chat",
        description: "Optimistic UI message bubbles render instantly while Firestore sockets synchronize across recipients."
      },
      {
        title: "Voice Memo Recording & Waveforms",
        description: "High-fidelity audio recording with interactive waveform playback and speed toggles."
      },
      {
        title: "Media Sharing & Encryption",
        description: "Compressed image and video sharing with Cloud Storage backend."
      }
    ],
    architecture: {
      pattern: "Clean Architecture + GetX State Management",
      overview: "Decoupled architecture with reactive streams for real-time conversation synchronization and audio playback.",
      layers: [
        { name: "Chat UI Layer", description: "Custom chat bubble widgets, media drawers, and waveform visualizers." },
        { name: "Audio & Media", description: "Flutter Sound recorder, player controllers, and image compressors." },
        { name: "Real-time Cloud", description: "Firestore snapshot listeners, FCM push triggers, and Firebase Storage." }
      ]
    },
    techStackDetailed: [
      { category: "Framework", skills: ["Flutter 3.x", "Dart"] },
      { category: "State Management", skills: ["GetX Reactive Controllers"] },
      { category: "Backend & Sockets", skills: ["Firebase Firestore", "Firebase Auth", "Firebase Storage"] },
      { category: "Push & Audio", skills: ["Firebase Cloud Messaging (FCM)", "Flutter Sound", "Audio Waveforms"] }
    ],
    metrics: [
      { label: "Latency", value: "<50ms", detail: "Firestore socket dispatch" },
      { label: "Push Reliability", value: "99.9%", detail: "FCM high-priority" },
      { label: "Frame Rate", value: "60 FPS", detail: "Smooth audio waveforms" },
      { label: "Platform", value: "Android & iOS", detail: "Universal codebase" }
    ],
    tags: ["Flutter", "Firebase Auth", "Firestore", "FCM", "GetX", "Audio Waveforms"],
    githubUrl: "https://github.com/sayedulmorsalin/Talksy",
    featured: true,
  },
  {
    id: "aquawatch",
    title: "AquaWatch System",
    subtitle: "Environmental GIS Geolocation & Water Quality Sensor Monitoring Platform",
    role: "Lead Mobile Architect",
    timeline: "3 Months · Environmental Research Project",
    category: "utility",
    badgeText: "Water Quality Tech",
    badgeType: "cyan",
    image: "/projects/aquawatch/cover.png",
    screenshots: [
      "/projects/aquawatch/screenshot1.png",
      "/projects/aquawatch/screenshot2.png",
      "/projects/aquawatch/screenshot3.png",
      "/projects/aquawatch/screenshot4.png",
      "/projects/aquawatch/cover.png",
    ],
    description: "Environmental water quality monitoring platform with real-time interactive GIS map tracking, multi-parameter sensor entry (salinity, EC, temperature), automated GPS geotagging, and role-based admin verification queues.",
    overview: "AquaWatch enables field researchers and municipal authorities across Bangladesh to record, verify, and visualize crucial water quality indices across regional rivers and coastal wetlands. It transforms raw sensor telemetry into actionable environmental maps.",
    challenge: "Researchers in remote coastal areas need to enter multi-parameter sensor readings with high precision GPS location tagging, where network signals are unreliable.",
    solution: "Engineered an offline submission cache that queues sensor logs and geotags them with device hardware GPS. Developed a GIS station map with Google Maps API and an admin verification queue to audit readings before publishing.",
    keyHighlights: [
      "Interactive GIS Water Monitoring Map tracking 17+ regional stations across Bangladesh",
      "Multi-parameter sensor measurement entry with automated device GPS location tagging",
      "Role-based verification queue & admin status workflow dashboard",
      "Historical water quality trend charts tracking salinity, EC, and temperature"
    ],
    features: [
      {
        title: "Interactive GIS Station Map",
        description: "Interactive regional map with custom station pins showing real-time water health indices across Bangladesh."
      },
      {
        title: "Field Sensor Data Submission",
        description: "Forms for salinity, electrical conductivity (EC), pH, and water temperature with automated GPS tagging."
      },
      {
        title: "Admin Verification Queue",
        description: "Supervisor portal to inspect, approve, or reject sensor submissions before public indexing."
      }
    ],
    architecture: {
      pattern: "Clean Architecture + BLoC + Geolocation Services",
      overview: "Layered architecture connecting hardware GPS and Google Maps SDK with Firebase cloud storage and verification queues.",
      layers: [
        { name: "Map & Presentation", description: "Google Maps Flutter widget, custom markers, and sensor submission cards." },
        { name: "Location & Sensors", description: "Geolocator hardware positioning and offline submission cache." },
        { name: "Data & Security", description: "Firebase Firestore role-based rules, Auth, and verification queues." }
      ]
    },
    techStackDetailed: [
      { category: "Mobile Framework", skills: ["Flutter 3.x", "Dart"] },
      { category: "GIS & Maps", skills: ["Google Maps API", "Geolocator", "Geocoding"] },
      { category: "State Management", skills: ["Flutter BLoC", "Cubit"] },
      { category: "Backend & Cloud", skills: ["Firebase Firestore", "Firebase Auth", "Cloud Functions"] }
    ],
    metrics: [
      { label: "Stations", value: "17+ Active", detail: "Monitored across BD" },
      { label: "Parameters", value: "Salinity, EC, Temp", detail: "Sensor telemetry" },
      { label: "GPS Accuracy", value: "High Precision", detail: "Hardware geotagging" },
      { label: "Data Quality", value: "Admin Verified", detail: "Quality control queue" }
    ],
    tags: ["Flutter", "GIS Map API", "Firebase", "Geolocation", "Clean Arch", "BLoC"],
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
