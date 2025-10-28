// data/journeyData.tsx

export interface JourneyItem {
  id: string;
  sequence: string; // e.g., "01", "02", "03"
  date: string;
  title: string; // e.g., "CCITEACH TERM I"
  subtitle: string; // e.g., "THE FUNDAMENTALS OF PROGRAMMING AND DATA STRUCTURE"
  link?: string; // A link for the arrow button, e.g., to a certificate or project
  imageTrailUrls: string[];
}

export const JOURNEY_ITEMS: JourneyItem[] = [
  {
    id: "term-1",
    sequence: "01",
    date: "SEPTEMBER 28, 2024",
    title:
      "Project Power-Up! Leveraging Productivity Tools with Notion x Google Calendar, and Hackathon Strategies",
    subtitle:
      "One of the speakers and spearheaded the technical management and workshop delivery for students learning hackathon prep and productivity tooling with Notion x Google Calendar.",
    link: "https://gdg.community.dev/events/details/google-gdg-on-campus-national-university-manila-campus-manila-philippines-presents-project-power-up-1-ultimate-guide-for-hackathon/", // Add your link here
    imageTrailUrls: [
      "journey/ppu-1.jpg",
      "journey/ppu-2.jpg",
      "journey/ppu-3.jpg",
      "journey/ppu-4.jpg",
      "journey/ppu-5.jpg",
    ],
  },
  {
    id: "term-2",
    sequence: "02",
    date: "OCTOBER 19, 2024",
    title:
      "CCITeach Term 1: The Fundamentals of Programming and Data Structure",
    subtitle:
      "Managed and spearheaded the project's execution as a technical mentor, delivering the 'Fundamentals of Programming 101' session and overseeing technical management for students learning core programming and data structure concepts.",
    link: "https://gdg.community.dev/events/details/google-gdg-on-campus-national-university-manila-campus-manila-philippines-presents-cciteach-term-1-the-fundamentals-of-programming-and-data-structure/", // Add your link here
    imageTrailUrls: [
      "journey/cciteach-term1-1.jpg",
      "journey/cciteach-term1-2.png",
      "journey/cciteach-term1-3.png",
    ],
  },
  {
    id: "term-3",
    sequence: "03",
    date: "DECEMBER 12, 2024",
    title:
      "Collab Plus Optimizing Team Collaboration with Google Workspace and Notion Templates.",
    subtitle:
      "As the Chief Technology Officer (CTO), I led the technical committee and managed the overall production for this hybrid workshop. I also served as a speaker/mentor, delivering talks focused on empowering students with modern collaboration and productivity tools.",
    link: "https://gdg.community.dev/events/details/google-gdg-on-campus-national-university-manila-campus-manila-philippines-presents-collab-plus-optimizing-team-collaboration-with-google-workspace-and-notion-templates/",
    imageTrailUrls: [
      "journey/collab-1.jpeg",
      "journey/collab-2.jpeg",
      "journey/collab-3.jpeg",
      "journey/collab-4.jpeg",
    ],
  },
  {
    id: "term-4",
    sequence: "04",
    date: "DECEMBER 12, 2024",
    title: "Dev Showcase: Mastering Git & GitHub",
    subtitle:
      "As the Chief Technology Officer (CTO), I led the technical committee to manage the hybrid production and technical logistics for this seminar on Git and GitHub. My team ensured the seamless execution of all on-site and MS Teams broadcasts.",
    link: "https://gdg.community.dev/events/details/google-gdg-on-campus-national-university-manila-campus-manila-philippines-presents-dev-showcase-mastering-git-amp-github/",
    imageTrailUrls: [
      "journey/collab-1.jpeg",
      "journey/collab-2.jpeg",
      "journey/collab-3.jpeg",
      "journey/collab-4.jpeg",
    ],
  },
  {
    id: "term-5",
    sequence: "05",
    date: "JANUARY 30, 2025",
    title: "Tagbik: Rippling Forward - GDG on Campus General Assembly 2024",
    subtitle:
      "Spearheaded and managed the Technical Committee and production for the GDSC-to-GDG rebranding General Assembly. Oversaw the successful delivery of the 'SpecVerse 1' technical talk and the overall technological setup for the event.",
    link: "https://gdg.community.dev/events/details/google-gdg-on-campus-national-university-manila-campus-manila-philippines-presents-tagbik-rippling-forward-gdg-on-campus-nu-manila-general-assembly-ay-2024-2025/", // Add your link here
    imageTrailUrls: [
      "journey/tagbik-1.jpg",
      "journey/tagbik-2.jpg",
      "journey/tagbik-3.jpg",
      "journey/tagbik-4.jpg",
      "journey/tagbik-5.jpg",
    ],
  },
  {
    id: "term-6",
    sequence: "06",
    date: "FEBRUARY 15, 2025",
    title: "CCITeach Term 2: Intermediate Programming and Mobile Development",
    subtitle:
      "Served as the Project Lead and Chief Technical Officer (CTO) for this two-part online training series. I facilitated the 'Mobile Development' session and supervised the Hackathon Committees in delivering the 'Intermediate Programming' module, reinforcing advanced concepts for 300+ students.",
    link: "https://gdg.community.dev/events/details/google-gdg-on-campus-national-university-manila-campus-manila-philippines-presents-cciteach-2-intermediate-programming-and-mobile-development/", // Add your link here
    imageTrailUrls: [
      "journey/cciteach-term2-1.jpg",
      "journey/cciteach-term2-2.png",
      "journey/cciteach-term2-3.png",
      "journey/cciteach-term2-4.png",
    ],
  },
  {
    id: "term-7",
    sequence: "07",
    date: "MARCH 26, 2025",
    title: "SpecVerse 3 (CS-DF): Cybersecurity Training Seminar",
    subtitle:
      "Drove technical production for this specialized in-person seminar, serving as CTO to lead the technical committee. My efforts guaranteed the flawless execution of both the industry keynote presentations and the hands-on training delivered by Northgate Technologies Inc.",
    link: "https://gdg.community.dev/events/details/google-gdg-on-campus-national-university-manila-campus-manila-philippines-presents-notion-database-dynamics-mastering-tables-and-calendars-in-notion/",
    imageTrailUrls: [
      "journey/tagbikspecverse-1.jpg",
      "journey/specverse-2.jpg",
      "journey/specverse-3.jpg",
    ],
  },
];
