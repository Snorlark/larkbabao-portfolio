import React, { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { JOURNEY_ITEMS, type JourneyItem } from "../data/journeyData";
import ImageTrail from "./ImageTrail";

// --- JourneyCard Component (Updated) ---
const JourneyCard: React.FC<{
  item: JourneyItem;
  isLast: boolean;
  onHover: (urls: string[]) => void; // 💡 New prop to handle hover state
}> = ({ item, isLast, onHover }) => {
  return (
    <div className="flex flex-col">
      <div
        className="flex justify-between items-center py-6 cursor-pointer"
        // 💡 Call onHover/onMouseLeave handlers
        onMouseEnter={() => onHover(item.imageTrailUrls)}
      >
        {/* Sequence Number, Title, and Subtitle content remains the same */}
        <div className="flex items-center space-x-12">
          {/* ... Sequence and Text content ... */}
          <span
            className="text-4xl font-primary text-[var(--clr-text-secondary)] tracking-tight"
            style={{ fontWeight: 300, fontFamily: "serif" }}
          >
            {item.sequence}
          </span>

          <div className="flex flex-col">
            <h3 className="text-xl font-bold text-[var(--clr-text)] uppercase tracking-wider mb-0.5">
              {item.title}
            </h3>
            <p className="text-sm text-[var(--clr-text-secondary)] uppercase tracking-wider">
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
            className="w-10 h-10 flex flex-shrink-0 items-center justify-center rounded-full transition-all duration-300"
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
        <hr className="w-full border-t border-[var(--clr-text-secondary)]/30" />
      )}
    </div>
  );
};

// --- Main Timeline Component (Updated) ---
const JourneyTimeline: React.FC = () => {
  const [activeImageUrls, setActiveImageUrls] = useState<string[]>([]);
  const [imageTrailKey, setImageTrailKey] = useState(0);
  // 💡 Ref to store the timeout ID
  const timeoutRef = useRef<number | null>(null);
  const listWrapperRef = useRef<HTMLDivElement>(null);

  const handleHover = (urls: string[]) => {
    // ... (clear timeout, set URLs/key as before) ...
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setActiveImageUrls(urls);
    setImageTrailKey((prev) => prev + 1);
  };

  // 💡 Global event listener to detect when the mouse leaves the component area
  useEffect(() => {
    const checkMouseBounds = (e: MouseEvent) => {
      if (!listWrapperRef.current || !activeImageUrls.length) return;

      const rect = listWrapperRef.current.getBoundingClientRect();

      // Check if the cursor is outside the bounds of the entire list wrapper
      const isOutside =
        e.clientX < rect.left ||
        e.clientX > rect.right ||
        e.clientY < rect.top ||
        e.clientY > rect.bottom;

      if (isOutside && !timeoutRef.current) {
        // Only start the fade-out timer if we are outside AND a timer isn't running
        timeoutRef.current = setTimeout(() => {
          setActiveImageUrls([]);
        }, 1000) as unknown as number;
      } else if (!isOutside && timeoutRef.current) {
        // If the mouse re-enters while fading out, cancel the fade-out
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };

    // 💡 Listen globally on the document
    document.addEventListener("mousemove", checkMouseBounds);

    return () => {
      document.removeEventListener("mousemove", checkMouseBounds);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [activeImageUrls]);

  // Cleanup the timeout on unmount
  React.useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="flex flex-col w-full max-w-4xl relative">
      {/* 💡 Render ImageTrail only if URLs are active */}
      {activeImageUrls.length > 0 && (
        <ImageTrail key={imageTrailKey} items={activeImageUrls} variant={1} />
      )}

      {/* --- Timeline Items --- */}
      <div className="w-full px-4">
        {JOURNEY_ITEMS.map((item, index) => (
          <JourneyCard
            key={item.id}
            item={item}
            isLast={index === JOURNEY_ITEMS.length - 1}
            onHover={handleHover}
          />
        ))}
      </div>
    </div>
  );
};

export default JourneyTimeline;
