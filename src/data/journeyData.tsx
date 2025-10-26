export interface JourneyItem {
  id: string;
  sequence: string; // e.g., "01", "02", "03"
  title: string; // e.g., "CCITEACH TERM I"
  subtitle: string; // e.g., "THE FUNDAMENTALS OF PROGRAMMING AND DATA STRUCTURE"
  link?: string; // A link for the arrow button, e.g., to a certificate or project
  imageTrailUrls: string[];
}

export const JOURNEY_ITEMS: JourneyItem[] = [
  {
    id: "term-1",
    sequence: "01",
    title: "CCITEACH TERM I",
    subtitle: "THE FUNDAMENTALS OF PROGRAMMING AND DATA STRUCTURE",
    link: "#", // Add your link here
    imageTrailUrls: [
      "projects/maize-watch-mobile.png", // Using an existing image as placeholder
      "https://picsum.photos/id/287/300/300",
      "https://picsum.photos/id/1001/300/300",
    ],
  },
  {
    id: "term-2",
    sequence: "02",
    title: "GDSC LEADERSHIP",
    subtitle: "LED AND MANAGED PROJECTS AT GDSC NU MANILA",
    link: "https://gdsc.community.dev/national-university-manila/",
    imageTrailUrls: [
      "projects/maize-watch-mobile.png", // Using an existing image as placeholder
      "https://picsum.photos/id/287/300/300",
      "https://picsum.photos/id/1001/300/300",
    ],
  },
  {
    id: "term-3",
    sequence: "03",
    title: "MAIZE WATCH DEVELOPMENT",
    subtitle: "ENGINEERING THE IOT & ANALYTICS PLATFORM",
    link: "#",
    imageTrailUrls: [
      "projects/maize-watch-mobile.png", // Using an existing image as placeholder
      "https://picsum.photos/id/287/300/300",
      "https://picsum.photos/id/1001/300/300",
    ],
  },
  {
    id: "term-4",
    sequence: "04",
    title: "WEB DEV FREELANCING",
    subtitle: "DELIVERED RESPONSIVE SITES FOR LOCAL BUSINESSES",
    link: "#",
    imageTrailUrls: [
      "projects/maize-watch-mobile.png", // Using an existing image as placeholder
      "https://picsum.photos/id/287/300/300",
      "https://picsum.photos/id/1001/300/300",
    ],
  },
];
