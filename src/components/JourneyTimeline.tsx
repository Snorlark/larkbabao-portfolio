import React, { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

// ====================================================================
// Mock Data (Kept the same)
// ====================================================================
type JourneyItem = {
  id: string;
  sequence: string;
  title: string;
  subtitle: string;
  link?: string;
  imageTrailUrls: string[]; // URLs for the ImageTrail
};

const JOURNEY_ITEMS: JourneyItem[] = [
  {
    id: "1",
    sequence: "01",
    title: "CCITEACH TERM 1",
    subtitle: "The Fundamentals of Programming and Data Structure",
    link: "#",
    imageTrailUrls: [
      "projects/maize-watch-web.png",
      "projects/maize-watch-mobile.png",
      "projects/refurnish.png",
    ],
  },
  {
    id: "2",
    sequence: "02",
    title: "GDSC LEADERSHIP",
    subtitle: "Led and Managed Projects at GDSC NU Manila",
    link: "#",
    imageTrailUrls: [
      "projects/maize-watch-web.png",
      "projects/maize-watch-mobile.png",
      "projects/refurnish.png",
    ],
  },
  {
    id: "3",
    sequence: "03",
    title: "MAIZE WATCH DEVELOPMENT",
    subtitle: "Engineering the IoT & Analytics Platform",
    link: "#",
    imageTrailUrls: [
      "projects/maize-watch-web.png",
      "projects/maize-watch-mobile.png",
      "projects/refurnish.png",
    ],
  },
  {
    id: "4",
    sequence: "04",
    title: "WEB DEV FREELANCING",
    subtitle: "Delivered Responsive Sites for Local Businesses",
    link: "#",
    imageTrailUrls: [
      "projects/maize-watch-web.png",
      "projects/maize-watch-mobile.png",
      "projects/refurnish.png",
    ],
  },
];

// ====================================================================
// ImageTrail Component (Now locally rendered and using relative coordinates)
// ====================================================================
const ImageTrail: React.FC<{
  items: string[];
  containerRef: React.RefObject<HTMLDivElement | null>;
}> = ({ items, containerRef }) => {
  const [images, setImages] = useState<
    Array<{ url: string; x: number; y: number; id: number }>
  >([]);
  const nextId = useRef(0);
  const lastPosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (items.length === 0 || !containerRef.current) return;

    let lastTime = 0;
    const minInterval = 100;
    const minDistance = 50;

    const handleMouseMove = (e: MouseEvent) => {
      const activeCardRect = containerRef.current!.getBoundingClientRect();

      // 1. BOUNDARY CHECK: Ensure the mouse is inside the card
      const isInsideCard =
        e.clientX >= activeCardRect.left &&
        e.clientX <= activeCardRect.right &&
        e.clientY >= activeCardRect.top &&
        e.clientY <= activeCardRect.bottom;

      if (!isInsideCard) return;

      // 2. TIMING AND DISTANCE CHECK
      const now = Date.now();
      if (now - lastTime < minInterval) return;
      lastTime = now;

      const dx = e.clientX - lastPosition.current.x;
      const dy = e.clientY - lastPosition.current.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance > minDistance) {
        const randomImage = items[Math.floor(Math.random() * items.length)];

        // 💡 CRITICAL FIX: Calculate position RELATIVE to the card's top-left corner
        const newImage = {
          url: randomImage,
          x: e.clientX - activeCardRect.left,
          y: e.clientY - activeCardRect.top,
          id: nextId.current++,
        };

        setImages((prev) => [...prev.slice(-4), newImage]);
        lastPosition.current = { x: e.clientX, y: e.clientY };
      }
    };

    // We still listen to the document for mousemove, but only trigger if inside the card
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      setImages([]);
    };
  }, [items, containerRef]);

  if (items.length === 0) return null;

  return (
    <>
      {images.map((img) => (
        <img
          key={img.id}
          src={img.url}
          alt=""
          className="absolute w-32 h-32 object-cover rounded-lg shadow-2xl pointer-events-none"
          style={{
            // Position the image's top-left corner relative to the card,
            // then shift by half its size (64px for w-32/128px) to center it.
            left: img.x - 64,
            top: img.y - 64,
            animation:
              "fadeIn 0.3s ease-out, fadeOut 1s ease-out 0.5s forwards",
            zIndex: 10,
          }}
        />
      ))}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes fadeOut {
          to { opacity: 0; transform: scale(0.9); }
        }
      `}</style>
    </>
  );
};

// ====================================================================
// JourneyCard Component (Refactored to handle its own hover and rendering)
// ====================================================================
// The onHover/onLeave props are removed since the image trail is now local
const JourneyCard: React.FC<{
  item: JourneyItem;
  isLast: boolean;
}> = ({ item, isLast }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageTrailKey, setImageTrailKey] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    // Change key to reset the ImageTrail component and clear old images on hover
    setImageTrailKey((prev) => prev + 1);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="flex flex-col">
      <div
        ref={cardRef} // This is the container for the entire card
        className="flex justify-between items-center py-10 relative cursor-pointer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* 💡 Local ImageTrail Container (position: absolute inside card) */}
        {isHovered && item.imageTrailUrls.length > 0 && (
          // This parent div defines the absolute coordinate system for the images
          <div className="absolute inset-0 z-1000 rounded-xl">
            <ImageTrail
              key={imageTrailKey} // Key resets the component on each new hover
              items={item.imageTrailUrls}
              containerRef={cardRef} // Pass the card's ref for boundary checks
            />
          </div>
        )}

        {/* Content (Z-20 keeps content above the image trail Z-10) */}
        <div className="flex items-center space-x-20 relative z-20">
          <span
            className="text-5xl font-bold text-[var(--clr-text)] tracking-tight"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            {item.sequence}
          </span>
          <div className="flex flex-col">
            <h3 className="text-2xl font-bold text-[var(--clr-text)] uppercase">
              {item.title}
            </h3>
            <p
              className="text-xs font-normal text-[var(--clr-text)]/70 uppercase tracking-wider"
              style={{ fontFamily: "var(--font-secondary)" }}
            >
              {item.subtitle}
            </p>
          </div>
        </div>

        {/* Action Button */}
        {item.link && (
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex flex-shrink-0 items-center justify-center rounded-full transition-all duration-300 relative z-20"
            style={{ backgroundColor: "var(--clr-text)" }}
            aria-label={`View details for ${item.title}`}
          >
            <ArrowUpRight
              className="w-6 h-6"
              style={{ color: "var(--clr-bg-accent)" }}
            />
          </a>
        )}
      </div>

      {/* Horizontal Divider Line */}
      {!isLast && (
        <hr className="w-full border-t border-[var(--clr-text)]/30" />
      )}
    </div>
  );
};

// ====================================================================
// Main Timeline Component (Simplified as it no longer manages the image trail state)
// ====================================================================
const JourneyTimeline: React.FC = () => {
  return (
    <div className="flex flex-col w-full max-w-4xl relative mx-auto">
      {/* --- Timeline Items Container --- */}
      <div className="w-full px-4">
        {JOURNEY_ITEMS.map((item, index) => (
          // JourneyCard is now self-contained
          <JourneyCard
            key={item.id}
            item={item}
            isLast={index === JOURNEY_ITEMS.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

export default JourneyTimeline;
