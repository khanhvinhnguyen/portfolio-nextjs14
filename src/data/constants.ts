export const Bio = {
  name: "Vinh Nguyen Khanh",
  title: "Frontend-focused Software Engineer",
  tagline: "Runtime UI · SDUI · Platform Engineering",
  description:
    "4+ years building configuration-driven platforms, visual workflow systems, and scalable frontend architectures in the React ecosystem. Specialized in Runtime UI Systems, Server-Driven UI (SDUI), and internal platform development.",
  resume:
    "https://drive.google.com/file/d/1W1L_N833jCnjX5NtfhfcIUn8zRDLx9Fc/view?usp=sharing",
  github: "https://github.com/khanhvinhnguyen",
  linkedin: "https://www.linkedin.com/in/khanhvinhnguyen/",
  email: "vinhnk.work@gmail.com",
  phone: "(+84) 345-495-501",
  location: "Ho Chi Minh, Vietnam",
  website: "https://vinhnguyen.vercel.app",
};

export const skillCategories = [
  {
    title: "Languages",
    items: ["TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3", "Sass"],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "Vue.js", "Vite", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "State Management",
    items: ["Redux", "Zustand", "React Context"],
  },
  {
    title: "Backend",
    items: ["NestJS", "Express.js", "PostgreSQL", "Redis", "Prisma ORM"],
  },
  {
    title: "Frontend Architecture",
    items: [
      "Runtime UI Systems",
      "Server-Driven UI (SDUI)",
      "Component Registry",
      "Visual Workflow Builder",
      "Module Federation",
    ],
  },
  {
    title: "Infrastructure",
    items: ["AWS S3", "EC2", "CloudFront", "Presigned URLs", "Docker", "CDN-cached configs"],
  },
  {
    title: "Testing",
    items: ["Jest", "Vitest", "React Testing Library"],
  },
  {
    title: "Tools",
    items: ["Git", "CI/CD", "XYFlow", "Fabric.js", "VS Code"],
  },
];

export const experiences = [
  {
    id: 0,
    img: "https://media.licdn.com/dms/image/v2/C4D0BAQH2roHEycMaUw/company-logo_200_200/company-logo_200_200/0/1656973684203/marvy_co_logo?e=2147483647&v=beta&t=PRdJLuWXcM46aq9a3sQRbNFgP5k7XldCjCz7jwIJfK4",
    role: "Middle Frontend Engineer",
    company: "Marvy.co",
    date: "Jun 2025 – Present",
    highlights: [
      "Designed a configuration-driven Runtime UI platform for a Zalo Mini App campaign with ~200,000 participants.",
      "Built a component registry and rendering engine: 18 campaign pages, 15 reusable components, 14 configurable types.",
      "Architected JSON-driven action dispatching (navigation, API, validation, analytics, popups, sharing).",
      "Optimized delivery via CDN-cached configs on AWS S3; direct Client→S3 uploads with Presigned URLs and LRU caching.",
      "Contributed to Module Federation migration (React 19, Vite) and an AI storyboard platform (XYFlow) for Prudential.",
      "Maintained high-traffic campaign platforms for global brands including Oreo and Heineken.",
    ],
    tech: ["React", "Next.js", "TypeScript", "Vite", "AWS S3", "Module Federation", "XYFlow"],
  },
  {
    id: 1,
    img: "https://cdn-new.topcv.vn/unsafe/140x/https://static.topcv.vn/company_logos/digiloinc-ab8198c970b4dcb51f4a6c1e9085c166-5e6a2c6cd862e.jpg",
    role: "Front-End Developer",
    company: "Digilo",
    date: "Aug 2024 – Dec 2024",
    highlights: [
      "Developed a drag-and-drop report builder for an AI-powered content summarization platform.",
      "Built a dynamic PowerPoint export engine for automated deck generation from structured business data.",
      "Improved rendering performance and application stability for large datasets.",
      "Collaborated with product and backend teams to improve UX and reduce report creation time.",
    ],
    tech: ["React", "Vue.js", "TypeScript", "Redux"],
  },
  {
    id: 2,
    img: "https://avatars.githubusercontent.com/u/102339598?s=200&v=4",
    role: "Full-Stack Developer",
    company: "BcPros Foundation",
    date: "Aug 2021 – Sep 2023",
    highlights: [
      "Developed core features for Lixi, a Web3 social platform on the Lotus (XPI) ecosystem.",
      "Built REST APIs with NestJS, PostgreSQL, and Prisma ORM for user management, content, and wallet integration.",
      "Integrated BullMQ-based background processing for notifications and async tasks.",
      "Implemented blockchain features: wallet interaction, transaction tracking, and on-chain data sync.",
      "Built AbcPay, a multi-currency crypto wallet (Angular, Ionic) with multi-signature transaction workflows.",
    ],
    tech: ["NestJS", "PostgreSQL", "Prisma", "Redis", "BullMQ", "Angular", "Ionic"],
  },
];

export const educations = [
  {
    id: 0,
    img: "/assets/images/Logo_UIT.png",
    school: "University of Information Technology (UIT)",
    degree: "Bachelor of Computer Science",
    date: "2017 – 2021",
    desc: "Data structures, algorithms, software engineering, databases, operating systems, and computer networks.",
  },
  {
    id: 1,
    img: "/assets/images/toeic.webp",
    school: "TOEIC (IIG Vietnam)",
    degree: "English Certificate — LR & SW",
    date: "2024",
    grade: "LR: 600/990 · SW: 230/400",
  },
];

export const languages = [
  { name: "Vietnamese", level: "Native" },
  { name: "English", level: "Professional Working Proficiency" },
];
