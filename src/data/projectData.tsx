// data/projectsData.ts

import type { ReactNode } from "react";

export type ProjectType =
  | "Website"
  | "Mobile"
  | "UI Designs"
  | "Desktop App"
  | "UI Designs";
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
    id: "maize-watch-web",
    type: "Website",
    title: "MAIZE WATCH DASHBOARD",
    description:
      "A web-based monitoring and analytics dashboard for the MAIZE WATCH IoT system. Provides real-time sensor data visualization, prescriptive analytics, and role-based access for analysts and staff using React, Node.js, and Firebase.",
    imageSrc: "projects/maize-watch-mobile.png",
    technologies: [
      "ReactJS",
      "ExpressJS",
      "Node.js",
      "MongoDB",
      "Tailwind CSS",
      "Firebase",
    ],
    liveLink: "https://maize-watch.com",
    githubLink: "https://github.com/Snorlark/Maize-Watch",
  },
  {
    id: "maize-watch-mobile",
    type: "Mobile",
    title: "MAIZE WATCH",
    description:
      "Maize Watch is a real-time app, IoT-powered monitoring and analytics system developed to support corn farmers in optimizing crop yield, improving sustainability, and making data-driven agricultural decisions. It collects field data through sensors and provides actionable insights using machine learning.",
    imageSrc: "projects/maize-watch-mobile.png",
    technologies: ["Flutter", "Firebase", "Node.js"],
    githubLink: "https://github.com/Snorlark/Maize-Watch",
  },

  {
    id: "just-a-sec",
    type: "Mobile",
    title: "JUST A SEC",
    description:
      "A Facebook UI replication built in Flutter. Features responsive layouts, carousel sliders, and network image caching for an interactive social-app experience.",
    imageSrc: "projects/maize-watch-mobile.png",
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
    imageSrc: "projects/maize-watch-mobile.png",
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
    imageSrc: "projects/maize-watch-mobile.png",
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
    imageSrc: "projects/maize-watch-mobile.png",
    // Real event planning image from Unsplash
    technologies: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://snorlark.github.io/Sinagtala-Event-Management/",
    githubLink: "https://github.com/Snorlark/Sinagtala-Event-Management",
  },
  {
    id: "touchmydeck",
    type: "Mobile",
    title: "TOUCH MY DECK",
    description:
      "A logic-based card-sorting Android game focused on decision-making & categorization. Integrated Firebase for authentication & real-time cloud data.",
    imageSrc: "projects/maize-watch-mobile.png",
    // Real mobile game / cards photo from Unsplash
    technologies: ["Android Studio", "Firebase"],
    githubLink: "https://github.com/Snorlark/TouchMyDeck",
  },
  {
    id: "filodroids",
    type: "Desktop App",
    title: "FILODROIDS",
    description:
      "A culturally themed desktop application where users select & customise Filipino robot avatars based on regions and heritage. Built with JavaFX & SceneBuilder.",
    imageSrc: "projects/maize-watch-mobile.png",
    // Real robot/technology themed image from Unsplash
    technologies: ["JavaFX", "SceneBuilder"],
    githubLink: "https://github.com/Snorlark/FiloDroids",
  },
  {
    id: "refurnish",
    type: "Website",
    title: "REFURNISH",
    description:
      "A culturally themed desktop application where users select & customise Filipino robot avatars based on regions and heritage. Built with JavaFX & SceneBuilder.",
    imageSrc: "projects/maize-watch-mobile.png",
    // Real robot/technology themed image from Unsplash
    technologies: ["JavaFX", "SceneBuilder"],
    githubLink: "https://github.com/Snorlark/FiloDroids",
  },
];
