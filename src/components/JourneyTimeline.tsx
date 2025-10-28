import React, { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

// ====================================================================
// Data Import
// ====================================================================
// 💡 IMPORTANT: Assuming your file structure looks like:
// src/components/JourneyTimeline.tsx
// src/data/journeyData.tsx
import { JOURNEY_ITEMS, type JourneyItem } from "../data/journeyData";

// ====================================================================
// Type Definition for Ignore Area
// ====================================================================
type IgnoreArea = {
  left: number;
  top: number;
  right: number;
  bottom: number;
} | null;

// ====================================================================
// ImageTrail Component (MODIFIED to accept ignoreArea)
// ====================================================================
const ImageTrail: React.FC<{
  items: string[];
  containerRef: React.RefObject<HTMLDivElement | null>;
  ignoreArea: IgnoreArea; // 💡 NEW PROP
}> = ({ items, containerRef, ignoreArea }) => {
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

      const mouseX = e.clientX;
      const mouseY = e.clientY;

      // 1. BOUNDARY CHECK: Ensure the mouse is inside the card
      const isInsideCard =
        mouseX >= activeCardRect.left &&
        mouseX <= activeCardRect.right &&
        mouseY >= activeCardRect.top &&
        mouseY <= activeCardRect.bottom;

      if (!isInsideCard) return;

      const relativeX = mouseX - activeCardRect.left;
      const relativeY = mouseY - activeCardRect.top;

      // 💡 NEW CHECK: Ignore the mouse movement if it's over the button area
      if (ignoreArea) {
        const isOverButton =
          relativeX >= ignoreArea.left &&
          relativeX <= ignoreArea.right &&
          relativeY >= ignoreArea.top &&
          relativeY <= ignoreArea.bottom;

        if (isOverButton) return;
      }

      // 2. TIMING AND DISTANCE CHECK
      const now = Date.now();
      if (now - lastTime < minInterval) return;
      lastTime = now;

      const dx = mouseX - lastPosition.current.x;
      const dy = mouseY - lastPosition.current.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance > minDistance) {
        const randomImage = items[Math.floor(Math.random() * items.length)];

        // Calculate position RELATIVE to the card's top-left corner
        const newImage = {
          url: randomImage,
          x: relativeX, // Use the pre-calculated relative X
          y: relativeY, // Use the pre-calculated relative Y
          id: nextId.current++,
        };

        setImages((prev) => [...prev.slice(-4), newImage]);
        lastPosition.current = { x: mouseX, y: mouseY };
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      setImages([]);
    };
  }, [items, containerRef, ignoreArea]); // Added ignoreArea to dependencies

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

// ---
// ====================================================================
// JourneyCard Component (MODIFIED to calculate and pass button area)
// ====================================================================
const JourneyCard: React.FC<{
  item: JourneyItem;
  isLast: boolean;
}> = ({ item, isLast }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageTrailKey, setImageTrailKey] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);
  // 💡 NEW REFS AND STATE for button area calculation
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const [buttonIgnoreArea, setButtonIgnoreArea] = useState<IgnoreArea>(null);

  // 💡 EFFECT to calculate button position on mount
  useEffect(() => {
    // Only calculate if the button link exists, and both refs are available
    if (item.link && cardRef.current && buttonRef.current) {
      const cardRect = cardRef.current.getBoundingClientRect();
      const buttonRect = buttonRef.current.getBoundingClientRect();

      // Calculate coordinates relative to the card's top-left corner
      setButtonIgnoreArea({
        left: buttonRect.left - cardRect.left,
        top: buttonRect.top - cardRect.top,
        right: buttonRect.right - cardRect.left,
        bottom: buttonRect.bottom - cardRect.top,
      });
    } else {
      setButtonIgnoreArea(null);
    }
  }, [item.link]); // Dependency on item.link ensures it runs when the card is rendered

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
        {/* 💡 Local ImageTrail Container */}
        {isHovered && item.imageTrailUrls.length > 0 && (
          // pointer-events-none fixes the issue where the overlay prevents clicking the button
          <div className="absolute inset-0 z-1000 rounded-xl pointer-events-none">
            <ImageTrail
              key={imageTrailKey} // Key resets the component on each new hover
              items={item.imageTrailUrls}
              containerRef={cardRef} // Pass the card's ref for boundary checks
              ignoreArea={buttonIgnoreArea} // 💡 Pass the calculated button area
            />
          </div>
        )}

        {/* Content (Z-20 keeps content above the image trail Z-10) */}
        <div className="flex items-center space-x-20 relative z-20 mr-20">
          <span
            className="text-6xl font-bold text-[var(--clr-text)]/90 tracking-tight"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            {item.sequence}
          </span>
          <div className="flex flex-col">
            {/* 💡 FIXED: Tailwind class syntax from bg-(--clr-bg) to bg-[var(--clr-bg)] */}
            <div className="px-2 py-2 rounded-full bg-[var(--clr-bg)] w-fit">
              <p
                className="text-xs font-medium text-[var(--clr-text)]/70 uppercase tracking-wider"
                style={{ fontFamily: "var(--font-secondary)" }}
              >
                {item.date}
              </p>
            </div>

            <h1 className="text-2xl font-semibold text-[var(--clr-text)] mt-3 mb-3 tracking-tight leading-tight">
              {item.title}
            </h1>
            {/* 💡 FIXED: Tailwind class syntax from text-(--clr-text)/80 to text-[var(--clr-text)]/80 */}
            <p className="text-base font-semibold text-[var(--clr-text)]/80 leading-tight">
              {item.subtitle}
            </p>
          </div>
        </div>

        {/* Action Button */}
        {item.link && (
          <a
            ref={buttonRef} // 💡 ATTACH THE REF to measure its position
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            // transition-all added for smooth effect
            className="w-10 h-10 flex flex-shrink-0 items-center justify-center rounded-full hover:scale-120 transition-all duration-300 relative z-20"
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

// ---
// ====================================================================
// Main Timeline Component
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
