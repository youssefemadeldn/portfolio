// ============================================================
// INTERFACES
// ============================================================

export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  email: string;
  github: string;
  linkedin: string;
  upwork: string;
  location: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface ProjectImage {
  src: string;
  alt: string;
}

export interface ProjectLink {
  label: string;
  url: string;
  type: 'github' | 'upwork' | 'live';
}

export interface Project {
  id: string;
  title: string;
  shortTitle: string;
  type: 'Flutter Mobile' | '.NET + Angular Web';
  status: 'LIVE' | 'Active' | 'In Development';
  statusLabel: string;
  description: string;
  techStack: string[];
  images: ProjectImage[];
  links: ProjectLink[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  type: 'Full-Time' | 'Freelance' | 'Contract';
  highlights: string[];
}

export interface SocialLink {
  label: string;
  url: string;
  icon: 'github' | 'linkedin' | 'upwork' | 'email';
}

export interface PortfolioData {
  personal: PersonalInfo;
  skills: SkillGroup[];
  projects: Project[];
  experience: ExperienceItem[];
  socials: SocialLink[];
}

// ============================================================
// DATA — sourced exclusively from me.json
// ============================================================

export const PORTFOLIO_DATA: PortfolioData = {
  personal: {
    name: 'Youssef Emad',
    title: 'Flutter Developer',
    tagline:
      'Building cross-platform mobile apps with Clean Architecture and BLoC. Open to freelance and full-time opportunities.',
    bio: 'Flutter developer with 2+ years of experience specializing in cross-platform mobile applications built on Clean Architecture, BLoC, and Firebase. Currently architecting a large-scale sports social networking platform with 10+ core features, including real-time messaging, dynamic feeds, and role-based user profiles. Delivered a full-cycle freelance application independently to both the Google Play Store and Apple App Store. Focused on scalable architecture, CI/CD automation, and delivering robust mobile solutions.',
    email: 'youssefemad63.ye@gmail.com',
    github: 'https://github.com/youssefemadeldn',
    linkedin: 'https://www.linkedin.com/in/youssefemadeldin',
    upwork: 'https://www.upwork.com/freelancers/~015f8d444c9533ccf1',
    location: 'Cairo, Egypt',
  },

  skills: [
    {
      category: 'Flutter & Mobile',
      skills: [
        'Flutter',
        'Dart',
        'BLoC / Cubit',
        'Clean Architecture',
        'Firebase',
        'Dio (REST APIs)',
        'GitHub Actions',
        'Fastlane',
        'Flutter Flavors',
      ],
    },
    {
      category: 'Backend & APIs',
      skills: [
        '.NET 10',
        'C#',
        'ASP.NET Core',
        'Entity Framework Core',
        'Redis',
        'SQL Server',
        'JWT Auth',
        'SignalR',
      ],
    },
    {
      category: 'Tools & DevOps',
      skills: [
        'Git',
        'GitHub',
        'GitHub Actions',
        'Fastlane',
        'Docker',
        'Cloudflare R2',
        'Cloudinary',
        'Figma',
      ],
    },
    {
      category: 'AI Tooling',
      skills: ['Claude Code', 'Cursor', 'ChatGPT', 'Codex'],
    },
  ],

  projects: [
    {
      id: 'books-platform',
      title: 'Books Platform',
      shortTitle: 'Books Platform',
      type: 'Flutter Mobile',
      status: 'LIVE',
      statusLabel: 'Live on Play Store & App Store',
      description:
        'A production cross-platform bookstore and publishing platform for Android and iOS. Features a multi-step book publishing wizard, paginated catalog, in-app audio player for articles, bilingual Arabic/English RTL support, and a full ratings/comments system across 15 feature modules.',
      techStack: [
        'Flutter',
        'Dart',
        'BLoC',
        'Clean Architecture',
        'Dio',
        'Hive',
        'SharedPreferences',
        'JWT',
        'RTL',
      ],
      images: [
        { src: 'mockups/HomeScreen-BooksPlatformProject-700x950.webp', alt: 'Books Platform — Home Screen' },
        { src: 'mockups/BookScreen-BooksPlatformProject-700x950.webp', alt: 'Books Platform — Books Catalog' },
        { src: 'mockups/BookDetailsScreen-BooksPlatformProject-700x950.webp', alt: 'Books Platform — Book Details' },
        { src: 'mockups/ArticlesScreen-BooksPlatformProject-700x950.webp', alt: 'Books Platform — Articles' },
        { src: 'mockups/ArticleDetailsScreen-BooksPlatformProject-700x950.webp', alt: 'Books Platform — Article Details' },
        { src: 'mockups/MediaScreen-BooksPlatformProject-700x950.webp', alt: 'Books Platform — Media' },
        { src: 'mockups/MediaDetailsScreen-BooksPlatformProject-700x950.webp', alt: 'Books Platform — Media Details' },
        { src: 'mockups/PublishersScreen-BooksPlatformProject-700x950.webp', alt: 'Books Platform — Publishers' },
        { src: 'mockups/BublisherDetailsScreen-BooksPlatformProject-700x950.webp', alt: 'Books Platform — Publisher Details' },
        { src: 'mockups/SearchScreen-BooksPlatformProject-700x950.webp', alt: 'Books Platform — Search' },
        { src: 'mockups/WishlistScreen-BooksPlatformProject-700x950.webp', alt: 'Books Platform — Wishlist' },
      ],
      links: [
        { label: 'View on Upwork', url: 'https://www.upwork.com/freelancers/~015f8d444c9533ccf1', type: 'upwork' },
      ],
    },
    {
      id: 'sporton',
      title: 'Sporton — Sports Networking App',
      shortTitle: 'Sporton',
      type: 'Flutter Mobile',
      status: 'Active',
      statusLabel: 'Active — In Development',
      description:
        'A professional sports social networking platform ("LinkedIn for Sports") for the Arabic market. Supports 5 user roles (Players, Coaches, Clubs, Agents, Scouts) with real-time chat, dynamic social feeds with video/image posts, emoji reactions, nested comments, and a Singleton VideoPlaybackCoordinator for memory-efficient video playback.',
      techStack: [
        'Flutter',
        'Dart',
        'BLoC',
        'Clean Architecture',
        'SignalR',
        'Cloudinary',
        'JWT',
        'WebSockets',
      ],
      images: [
        { src: 'mockups/Home-PostsFeedScreen-SportonProject-700x950.webp', alt: 'Sporton — Posts Feed' },
        { src: 'mockups/ProfileScreen-SportonProject-700x950.webp', alt: 'Sporton — Profile' },
        { src: 'mockups/ChatConversiotionScreen-SportonProject-700x950.webp', alt: 'Sporton — Chat' },
        { src: 'mockups/MarketPlaceScreen-SportonProject-700x950.webp', alt: 'Sporton — Marketplace' },
        { src: 'mockups/MarketPLacedetailsItesmScreen-SportonProject-700x950.webp', alt: 'Sporton — Marketplace Item' },
        { src: 'mockups/NetworkScreen-SportonProject-700x950.webp', alt: 'Sporton — Network' },
        { src: 'mockups/ForsaScreen-SportonProject-700x950.webp', alt: 'Sporton — Forsa (Opportunities)' },
        { src: 'mockups/EditeYourAccountScreen-SportonProject-700x950.webp', alt: 'Sporton — Edit Profile' },
        { src: 'mockups/SettingsScreen-SportonProject-700x950.webp', alt: 'Sporton — Settings' },
      ],
      links: [
        {
          label: 'View on Upwork',
          url: 'https://www.upwork.com/freelancers/~015f8d444c9533ccf1?p=2040514251062075392',
          type: 'upwork',
        },
      ],
    },
    {
      id: 'vetlink',
      title: 'VetLink — B2B Veterinary Marketplace',
      shortTitle: 'VetLink',
      type: '.NET + Angular Web',
      status: 'In Development',
      statusLabel: 'In Development',
      description:
        'A full-stack B2B veterinary e-commerce platform built with .NET 10 and Angular 21. Features Clean Architecture with Repository, Unit of Work, and Specification patterns, JWT auth with 4 role types (Admin, Seller, Buyer, Veterinarian), Redis-cached shopping cart, Cloudflare R2 storage, and SignalR real-time alerts.',
      techStack: [
        '.NET 10',
        'C#',
        'Angular 21',
        'Redis',
        'EF Core',
        'SQL Server',
        'SignalR',
        'Cloudflare R2',
        'JWT',
      ],
      images: [
        { src: 'mockups/LandingPageScreen-VetlinkProject-1700x1264.webp', alt: 'VetLink — Landing Page' },
        { src: 'mockups/LoginScreen-VetlinkProject-1700x1264.webp', alt: 'VetLink — Login' },
        { src: 'mockups/ProductsPageScreen-VetlinkProject-1700x1264.webp', alt: 'VetLink — Products Page' },
      ],
      links: [
        {
          label: 'View on Upwork',
          url: 'https://www.upwork.com/freelancers/~015f8d444c9533ccf1?p=2044065486678327296',
          type: 'upwork',
        },
      ],
    },
  ],

  experience: [
    {
      role: 'Flutter Developer',
      company: 'Sporton',
      period: 'Dec 2024 – Present',
      type: 'Full-Time',
      highlights: [
        'Architecting a scalable sports social networking platform using Clean Architecture (Domain, Data, Presentation) with BLoC/Cubit, delivering 10+ core features with maintainable, testable code.',
        'Built end-to-end social features: dynamic feed (text, image, video, emoji reactions, nested comments), fully-featured chat system (direct messaging, media sharing, read receipts, message reactions), and Cloudinary media integration.',
        'Engineered a Singleton VideoPlaybackCoordinator, reducing video memory overhead by ensuring only one video plays concurrently in scrolling list views.',
        'Designed JWT token rotation with background refresh and role-based dynamic profiles supporting 5 user types: Players, Coaches, Clubs, Agents, and Scouts.',
      ],
    },
    {
      role: 'Flutter Developer (Freelance)',
      company: 'Books Platform',
      period: 'May 2026 – Jun 2026',
      type: 'Freelance',
      highlights: [
        'Built a production cross-platform bookstore platform live on both Google Play Store and Apple App Store using Clean Architecture and BLoC/Cubit across 15 feature modules.',
        'Implemented full bilingual support (Arabic/English) with RTL layout handling, responsive scaling via flutter_screenutil, and an in-app audio player for articles.',
        'Architected the data layer with Dio interceptors for JWT auth, functional error handling via dartz (Either pattern), and local persistence with Hive and Flutter Secure Storage.',
        'Delivered production-ready Android and iOS builds with release signing, code obfuscation, and debug symbol splitting — passing review on both stores.',
      ],
    },
    {
      role: 'Data Analyst',
      company: 'Z2Data',
      period: 'May 2025 – Oct 2025',
      type: 'Contract',
      highlights: [
        'Worked within the Scrubbing & Parametric Team ensuring accuracy and consistency of electronic component data across large-scale datasets.',
        'Wrote SQL queries and used Python (Pandas, NumPy) for data extraction, validation, and cross-referencing for reporting and decision-making.',
        'Collaborated with cross-functional teams to streamline data workflows and reduce manual processing effort.',
      ],
    },
  ],

  socials: [
    { label: 'GitHub', url: 'https://github.com/youssefemadeldn', icon: 'github' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/youssefemadeldin', icon: 'linkedin' },
    { label: 'Upwork', url: 'https://www.upwork.com/freelancers/~015f8d444c9533ccf1', icon: 'upwork' },
    { label: 'youssefemad63.ye@gmail.com', url: 'mailto:youssefemad63.ye@gmail.com', icon: 'email' },
  ],
};
