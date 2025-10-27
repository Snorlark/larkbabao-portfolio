// components/ProjectCard.tsx
import React from "react";
import type { ProjectData } from "../data/projectData";
import { ArrowUpRight, Code } from "lucide-react"; // Import the ArrowUpRight icon

interface ProjectCardProps {
  project: ProjectData;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  // Determine if the project is a Mobile type
  const isMobile = project.type.toUpperCase().includes("MOBILE");

  // --- Conditional Classes for Image Wrapper ---

  // 💡 FIX 1: Width for non-mobile. Use w-full for the card area, and let the padding handle the inset.
  // We'll apply the padding to the parent div.
  const imageWrapperWidthClass = isMobile ? "w-[195px]" : "w-[290px]";

  // HEIGHT: Tall for phone, short for laptop (h-[200px] to accommodate the visible part of the mockup)
  const imageWrapperHeightClass = isMobile ? "h-[375px]" : "h-[200px]";

  // BORDER RADIUS: Rounded-2xl for phone, rounded-xl for screen edge
  const imageWrapperRoundedClass = isMobile ? "rounded-2xl" : "rounded-xl";

  // Position: Absolute for phone (to push it out), relative/static for website (to keep it centered).
  const imageWrapperPositioning = isMobile
    ? "absolute bottom-[-150px]"
    : "absolute bottom-[-30px]";

  // 💡 FIX 2: Container class for non-mobile to constrain the image area to text padding
  const imageContainerPadding = isMobile ? "" : "px-6";

  return (
    // 1. Main Card Container Styling
    <div
      className="flex flex-col rounded-3xl overflow-hidden duration-300"
      style={{
        backgroundColor: "var(--clr-bg-accent)",
      }}
    >
      {/* 2. Image Display Area */}
      <div
        // 💡 FIX 3: Apply padding/margin here for non-mobile projects
        className={`relative w-full h-[250px] flex items-center justify-center rounded-t-3xl overflow-hidden pt-4 bg-[var(--clr-bg-secondary)] ${imageContainerPadding}`}
      >
        {/* The inner image wrapper (phone frame or full preview) */}
        <div
          className={
            `${imageWrapperWidthClass} ${imageWrapperHeightClass} ${imageWrapperRoundedClass} 
                      overflow-hidden shadow-xl transition-transform duration-500 hover:scale-[1.03] 
                      ${imageWrapperPositioning} 
                      ${isMobile ? "mx-auto" : ""}` // mx-auto centers phone if position isn't absolute
          }
          style={{
            transform: isMobile ? "translateX(-50%)" : undefined,
            // Center the absolute positioned phone relative to the container for mobile
            left: isMobile ? "50%" : undefined,
          }}
        >
          <img
            src={project.imageSrc}
            alt={project.title}
            className="w-full h-full object-cover object-top"
            loading="lazy"
          />
        </div>
      </div>

      {/* 3. Content Area (Text remains px-6) */}
      <div className="flex justify-between items-start mb-1 px-6 mt-4">
        {/* ... (Content remains the same) ... */}
        <div className="flex flex-col flex-grow">
          <p
            className="text-xs tracking-widest uppercase text-[var(--clr-text)]/80"
            style={{ fontFamily: "var(--font-secondary)" }}
          >
            {project.type}
          </p>
          <h3 className="text-2xl font-bold text-[var(--clr-text)] leading-snug">
            {project.title}
          </h3>
        </div>
        {/* 4. Action Button */}
        {project.githubLink && (
          <a
            href={project.githubLink || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex flex-shrink-0 items-center justify-center rounded-full transition-all duration-300 ml-4"
            style={{
              backgroundColor: "var(--clr-text)",
              marginTop: "4px",
            }}
            aria-label={`View ${project.title}`}
          >
            <Code className="w-4 h-4 text-(--clr-bg-accent) hover:scale-105 transition-all duration-300" />
          </a>
        )}
        {project.liveLink && (
          <a
            href={project.liveLink || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex flex-shrink-0 items-center justify-center rounded-full transition-all duration-300 ml-4"
            style={{
              backgroundColor: "var(--clr-text)",
              marginTop: "4px",
            }}
            aria-label={`View ${project.title}`}
          >
            <ArrowUpRight
              className="w-4 h-4"
              style={{ color: "var(--clr-bg-accent)" }}
            />
          </a>
        )}
      </div>

      {/* Description */}
      <p className="text-base text-[var(--clr-text-secondary)] leading-relaxed px-6 mb-4 mt-3">
        {project.description}
      </p>

      {/* Technologies/Tags */}
      <div className="flex flex-wrap gap-2 text-xs font-medium mt-auto px-6 mb-4">
        {project.technologies.slice(0, 4).map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 rounded-full uppercase text-xs font-medium tracking-wide"
            style={{
              backgroundColor: "var(--clr-bg)",
              color: "var(--clr-text-secondary)",
              border: "1px solid var(--clr-text-secondary)",
            }}
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
