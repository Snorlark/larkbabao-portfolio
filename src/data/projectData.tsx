export type ProjectType = "Website" | "Mobile" | "UI Design" | "Desktop App";

export type ProjectTag =
  | "JavaScript"
  | "ReactJS"
  | "ExpressJS"
  | "Node.js"
  | "MongoDB"
  | "React Native"
  | "Firebase"
  | "Redux"
  | "Figma"
  | "Next.js"
  | "Tailwind CSS"
  | "GraphQL"
  | "PHP"
  | "HTML"
  | "CSS"
  | "JavaFX"
  | "SceneBuilder"
  | "Flutter"
  | "Android Studio"
  | "Python"
  | "WebSocket";

export interface ProjectData {
  id: string;
  type: ProjectType;
  title: string;
  description: string;
  imageSrc: string;
  technologies: ProjectTag[];
  liveLink?: string;
  githubLink?: string;
}

export const ALL_PROJECTS: ProjectData[] = [
  {
    id: "maize-watch",
    type: "Mobile",
    title: "MAIZE WATCH",
    description:
      "A real-time, IoT-powered monitoring and analytics system for corn farmers to optimize crop yield and make data-driven agricultural decisions. Features environmental sensors (DHT11, YL-69, LDR, pH sensor), machine learning-powered prescriptive analytics using Random Forest, and multi-platform access with Flutter mobile app and React web dashboard.",
    imageSrc: "projects/maize-watch-mobile.png",
    technologies: [
      "Flutter",
      "ReactJS",
      "Node.js",
      "ExpressJS",
      "Firebase",
      "Tailwind CSS",
      "Python",
    ],
    githubLink: "https://github.com/Snorlark/Maize-Watch",
  },
  {
    id: "maize-watch-dashboard",
    type: "Website",
    title: "MAIZE WATCH DASHBOARD",
    description:
      "A real-time, IoT-powered monitoring and analytics system for corn farmers to optimize crop yield and make data-driven agricultural decisions. Features environmental sensors (DHT11, YL-69, LDR, pH sensor), machine learning-powered prescriptive analytics using Random Forest, and multi-platform access with Flutter mobile app and React web dashboard.",
    imageSrc: "projects/maize-watch-web.png",
    technologies: [
      "Flutter",
      "ReactJS",
      "Node.js",
      "ExpressJS",
      "Firebase",
      "Tailwind CSS",
      "Python",
    ],
    liveLink: "https://maize-watch.com",
    githubLink: "https://github.com/Snorlark/Maize-Watch",
  },
  {
    id: "refurnish",
    type: "Website",
    title: "REFURNISH",
    description:
      "A full-stack e-commerce marketplace platform with real-time chat functionality. Features role-based access control for buyers, sellers, and admins, built as a monorepo with Express.js REST API backend, WebSocket server for real-time messaging, and Next.js frontend with TypeScript.",
    imageSrc: "projects/refurnish.png",
    technologies: [
      "Next.js",
      "ReactJS",
      "Node.js",
      "ExpressJS",
      "MongoDB",
      "WebSocket",
      "Tailwind CSS",
    ],
    githubLink: "https://github.com/Snorlark/Refurnish",
    liveLink: "https://refurnish-blond.vercel.app/",
  },
  {
    id: "just-a-sec",
    type: "Mobile",
    title: "JUST A SEC",
    description:
      "A lightweight, single-user, offline-first story app for capturing 1-second video clips with captions. Built with Flutter, featuring camera integration, local storage with Hive, Provider state management, and smooth animations. Stores all content locally without requiring internet connection.",
    imageSrc: "projects/just-a-sec.png",
    technologies: ["Flutter"],
    githubLink: "https://github.com/Snorlark/just-a-sec",
  },
  {
    id: "sinagtala",
    type: "Website",
    title: "SINAGTALA EVENT MANAGEMENT",
    description:
      "An interactive event-management web application for planning, scheduling and participant tracking. Group project for Web Development course, featuring smooth UI animations and JavaScript interactivity with a clean, responsive design.",
    imageSrc: "projects/sinagtala-event-management.png",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://snorlark.github.io/Sinagtala-Event-Management/",
    githubLink: "https://github.com/Snorlark/Sinagtala-Event-Management",
  },
  {
    id: "touchmydeck",
    type: "Mobile",
    title: "TOUCH MY DECK",
    description:
      "A collaborative Android card-sorting game where participants organize cards systematically based on specific criteria. Developed using Android Studio for Application Development course, focusing on logic-based gameplay and decision-making mechanics.",
    imageSrc: "projects/touchmydeck.png",
    technologies: ["Android Studio"],
    githubLink: "https://github.com/Snorlark/TouchMyDeck",
  },
  {
    id: "filodroids",
    type: "Desktop App",
    title: "FILODROIDS",
    description:
      "A Java desktop application that allows users to choose and customize FiloDroids (Filipino-themed robot avatars) based on Philippine culture and ethnicities. Designed in SceneBuilder and implemented using JavaFX, celebrating Filipino regional diversity through interactive character customization.",
    imageSrc: "projects/filodroids.png",
    technologies: ["JavaFX", "SceneBuilder"],
    githubLink: "https://github.com/Snorlark/FiloDroids",
  },
  {
    id: "palawan-tour",
    type: "Website",
    title: "PALAWAN TOUR",
    description:
      "A tourism website showcasing the beauty and attractions of Palawan, Philippines. Features information about pristine beaches, crystal-clear waters, and lush natural landscapes. Built with HTML and CSS to highlight one of the Philippines' most stunning provinces.",
    imageSrc: "projects/palawan-tour.png",
    technologies: ["HTML", "CSS"],
    liveLink: "https://snorlark.github.io/Palawan-Tour/index.html",
    githubLink: "https://github.com/Snorlark/Palawan-Tour",
  },
  {
    id: "metamatch",
    type: "Website",
    title: "METAMATCH",
    description:
      "A PC component comparison platform helping users select compatible parts by features, price, and specifications. Built with PHP backend for dynamic data handling and responsive HTML/CSS/JavaScript frontend for interactive component filtering.",
    imageSrc: "projects/metamatch.png",
    technologies: ["HTML", "CSS", "JavaScript", "PHP"],
    githubLink: "https://github.com/Snorlark/MetaMatch",
  },
  {
    id: "childrens-farm",
    type: "UI Design",
    title: "CHILDREN'S FARM",
    description:
      "A fun and vibrant UI/UX design for a children's farm and party venue. The design features a playful green and yellow color palette, clear Call-to-Action (CTA) buttons for party bookings and tickets, and engaging sections showcasing animal encounters and farm activities. Created to be highly visual and conversion-focused.",
    imageSrc: "projects/childrens-farm.png",
    technologies: ["Figma"],
    liveLink:
      "https://www.figma.com/design/ksLuCBGsgqE6TYnjynHfaF/Children-s-Farm?node-id=2-2&t=N6fsNadD4il4gBPx-1",
  },
  {
    id: "e-theneum",
    type: "UI Design",
    title: "E-THENEUM",
    description:
      "A dark-themed UI/UX design for a digital library and academic resource platform. Features include clear sections for Books, Researches, and Dissertations, a dedicated search bar, a rotating carousel for featured collections (like 'Works of Rizal'), and categories spanning Law, History, and Business. The design aims for a modern, sophisticated, and academic aesthetic.",
    imageSrc: "projects/e-theneum.png",
    technologies: ["Figma"],
    liveLink:
      "https://www.figma.com/design/IU2fdnLDYxhvKqXzDqWT90/E-Theneum?node-id=0-1&t=QPXYuoYdVjr4dijF-1",
  },
  {
    id: "ecodex",
    type: "UI Design",
    title: "ECODEX",
    description:
      "A mobile UI/UX design for EcoDex, a plant recognition and discovery app. This project won and Placed as Top Team out of 6+ teams in the Google Developers Club Ideathon Manila 2024. The design features a nature-inspired, monochromatic green color palette, and core functionalities including a Tree & Plant Recognition Scanner, a Garden management section, and detailed PlantDex information pages.",
    imageSrc: "projects/ecodex.png",
    technologies: ["Figma"],
    liveLink:
      "https://www.figma.com/design/XIIhFIzAF9At8GERnL4JDh/EcoDex?node-id=0-1&t=PWMnhrzMzf9YMVyD-1",
  },
  {
    id: "gupet",
    type: "UI Design",
    title: "GUPET",
    description:
      "A dark-mode mobile UI/UX design for GUPET, a barbershop appointment and style discovery app. The design features a sleek, monochromatic aesthetic with custom illustrations. Key screens include user authentication (Sign Up/Log In), a style selector page with various haircut options (e.g., Permed-Afro, Mullet), and detailed view screens for exploring and booking a specific hairstyle.",
    imageSrc: "projects/gupet.png",
    technologies: ["Figma"],
    liveLink:
      "https://www.figma.com/design/1KxEZa7wTiWT1pTEbb3KAB/Gupet?node-id=0-1&t=GioNSVAIOevf3p5H-1",
  },
  {
    id: "hoppin",
    type: "UI Design",
    title: "HOPPIN",
    description:
      "A mobile UI/UX design for HOPPIn, a ride-hailing and package delivery application. I led an 8-person team to secure participation in the INVENTURE National University Campus-Wide Pitching Competition with this project. The design features a bold red and white color palette, allowing users to compare and select services from different providers (like MOVE IT and Grab) based on price and speed, along with a live map for tracking trips.",
    imageSrc: "projects/hoppin.png",
    technologies: ["Figma"],
    liveLink:
      "https://www.figma.com/design/iWDld1EnxBcNvjRt44rXLE/HOPPin?node-id=4-9&t=SGVhzEtZDvuSzN0s-1",
  },
  {
    id: "morning-brew",
    type: "UI Design",
    title: "MORNING BREW",
    description:
      "A sophisticated and minimalist UI design for the Morning Brew coffee shop website. The design utilizes a dark, moody aesthetic with high-quality photography to evoke a warm, cozy atmosphere. Key features include a clear navigation bar (About, Menu, Gallery, Contact), a subtle dark/light mode toggle, and a focused call-to-action inviting users to 'Start Your Day Right' and 'Brew Now.'",
    imageSrc: "projects/morning-brew.png",
    technologies: ["Figma"],
    liveLink:
      "https://www.figma.com/design/uXT7HfHaLzmPkOqar4Uiqo/morning-brew.?node-id=1-23&t=tXyqZ08oy1QYeK5Y-1",
  },
];
