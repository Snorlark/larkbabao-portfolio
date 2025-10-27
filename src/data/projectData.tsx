export type ProjectType = "Website" | "Mobile" | "UI Designs" | "Desktop App";

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
    imageSrc: "projects/sinagtala.png",
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
    id: "votingapp",
    type: "Mobile",
    title: "VOTING APP",
    description:
      "An Android digital voting application with secure Firebase authentication and real-time vote tracking. Features user sign-in/sign-up, candidate viewing, vote confirmation, and automated receipt generation. Stores vote data securely in Firebase Realtime Database.",
    imageSrc: "projects/votingapp.png",
    technologies: ["Android Studio", "Firebase"],
    githubLink: "https://github.com/Snorlark/VotingApp",
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
];
