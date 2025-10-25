// data/projectsData.ts

import type { ReactNode } from "react";

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
  | "Android Studio";

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
    type: "Website",
    title: "MAIZE WATCH",
    description:
      "A full-stack maize crop monitoring system featuring Admin, Mobile (farmers) and Web Dashboard (analysts). Built RESTful APIs with Express.js & MongoDB for real-time analytics.",
    imageSrc:
      "https://images.unsplash.com/photo-1595526113807-713f1b8803e1?auto=format&fit=crop&w=1200&q=80",
    // Real photo of maize/field from Unsplash
    technologies: [
      "ReactJS",
      "ExpressJS",
      "Node.js",
      "MongoDB",
      "Flutter",
      "Tailwind CSS",
    ],
    liveLink: "https://maize-watch.vercel.app/",
    githubLink: "https://github.com/Snorlark/Maize-Watch",
  },
  {
    id: "fakebook",
    type: "Mobile",
    title: "FAKEBOOK",
    description:
      "A Facebook UI replication built in Flutter. Features responsive layouts, carousel sliders, and network image caching for an interactive social-app experience.",
    imageSrc:
      "https://images.unsplash.com/photo-1590608897129-79e263bc867a?auto=format&fit=crop&w=1200&q=80",
    // Real photo of smartphone / social apps from Unsplash
    technologies: ["Flutter"],
    githubLink: "https://github.com/Snorlark/Facebook-Replication",
  },
  {
    id: "metamatch",
    type: "Website",
    title: "METAMATCH",
    description:
      "A component-comparison platform helping users choose PC parts by features, price, and compatibility. Built with PHP backend and ApacheDB integration.",
    imageSrc:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1200&q=80",
    // Real tech/PC build image from Unsplash
    technologies: ["HTML", "CSS", "PHP", "JavaScript"],
    githubLink: "https://github.com/Snorlark/MetaMatch/tree/main",
  },
  {
    id: "palawan-tour",
    type: "Website",
    title: "PALAWAN TOUR",
    description:
      "A responsive tourism website showcasing Palawan’s natural beauty, top destinations and travel tips. Focused on mobile-first layout and accessibility.",
    imageSrc:
      "https://images.unsplash.com/photo-1549643492-14d9b6a4d681?auto=format&fit=crop&w=1200&q=80",
    // Real Palawan / beach tourism photo from Unsplash
    technologies: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://snorlark.github.io/Palawan-Tour/index.html",
    githubLink: "https://github.com/Snorlark/Palawan-Tour",
  },
  {
    id: "sinagtala",
    type: "Website",
    title: "SINAGTALA EVENT",
    description:
      "An interactive event-management web app for planning, scheduling and participant tracking. Designed with smooth UI animations and JavaScript interactivity.",
    imageSrc:
      "https://images.unsplash.com/photo-1521271069518-4aca040bd7b9?auto=format&fit=crop&w=1200&q=80",
    // Real event planning image from Unsplash
    technologies: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://snorlark.github.io/Sinagtala-Event-Management/",
    githubLink: "https://github.com/Snorlark/Sinagtala-Event-Management",
  },
  {
    id: "touchmydeck",
    type: "Mobile",
    title: "TouchMyDeck",
    description:
      "A logic-based card-sorting Android game focused on decision-making & categorization. Integrated Firebase for authentication & real-time cloud data.",
    imageSrc:
      "https://images.unsplash.com/photo-1516318561162-f2e4251b5908?auto=format&fit=crop&w=1200&q=80",
    // Real mobile game / cards photo from Unsplash
    technologies: ["Android Studio", "Firebase"],
    githubLink: "https://github.com/Snorlark/TouchMyDeck",
  },
  {
    id: "filodroids",
    type: "Desktop App",
    title: "FiloDroids",
    description:
      "A culturally themed desktop application where users select & customise Filipino robot avatars based on regions and heritage. Built with JavaFX & SceneBuilder.",
    imageSrc:
      "https://images.unsplash.com/photo-1551817958-202eeecd1f9f?auto=format&fit=crop&w=1200&q=80",
    // Real robot/technology themed image from Unsplash
    technologies: ["JavaFX", "SceneBuilder"],
    githubLink: "https://github.com/Snorlark/FiloDroids",
  },
];
