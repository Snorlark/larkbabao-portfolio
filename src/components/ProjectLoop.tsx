import React, { useMemo } from "react";
import { LogoLoop, type LogoItem } from "./LogoLoop";
import { type ProjectData } from "../data/projectData";
import { ArrowUpRight } from "lucide-react";

interface ProjectLoopProps {
  projects: ProjectData[]; // Accepts an array of ProjectData
}

// ProjectLoop.tsx - FINAL CORRECTED LoopItemContent component (Mobile/Laptop)

const LoopItemContent: React.FC<{ project: ProjectData }> = ({ project }) => {
  // Determine if the project is a Mobile type
  const isMobile = project.type.toUpperCase().includes("MOBILE");

  // --- Conditional Classes for Laptop/Non-Mobile ---

  // 💡 FIX 1: Width needs to be explicitly defined in px or relative large size for the laptop mockup.
  // The laptop mockup itself is much wider than the 270px card width.
  const imageWidthClass = isMobile ? "w-[195px]" : "w-[290px]";

  // HEIGHT: Tall for phone, short for laptop (h-[200px] to accommodate the visible part of the mockup)
  const imageHeightClass = isMobile ? "h-[375px]" : "h-[200px]";

  // BORDER RADIUS: Rounded-2xl for phone, rounded-xl for screen edge
  const imageRoundedClass = isMobile ? "rounded-2xl" : "rounded-xl";

  // VERTICAL POSITION: Push down from the bottom of the *Image Section Parent*
  const verticalPositionClass = isMobile ? "bottom-[-150px]" : "bottom-[-20px]";

  // PARENT HEIGHT: Shorter parent container when the image is landscape (laptop)
  // This value determines how much space is reserved for the image content area
  const parentImageHeight = isMobile ? "h-[220px]" : "h-[120px]"; // Adjusted to make room for the laptop

  // HORIZONTAL POSITION (For absolute positioning)
  // This style centers the laptop by using a negative margin based on its large 400px width.
  const horizontalStyle: React.CSSProperties = isMobile
    ? { left: "-35px" } // Phone peeks out left
    : { left: "-100px" }; // 💡 FIX 2: Centering the 400px laptop mockup

  return (
    <div
      className="flex flex-col justify-between w-[270px] h-[440px] rounded-3xl overflow-hidden duration-300 relative"
      style={{
        backgroundColor: "var(--clr-bg-accent)",
        flexShrink: 0,
      }}
    >
      {/* Content */}
      <div className="flex flex-col justify-between flex-grow px-4 py-3 mt-5">
        {/* Type, Title, Tech Stack (remain the same) */}
        <p
          className="text-xs tracking-widest uppercase text-[var(--clr-text)]/80 "
          style={{ fontFamily: "var(--font-secondary)" }}
        >
          {project.type}
        </p>
        <div>
          <h1 className="text-xl font-bold text-[var(--clr-text)] leading-snug mt-1 mb-4">
            {project.title}
          </h1>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 text-sm font-semibold mb-4">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full bg-[var(--clr-bg)] text-[var(--clr-text)] text-sm font-medium tracking-wide"
              style={{
                backgroundColor: "var(--clr-bg)",
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Image and the Button container */}
        <div className="flex justify-between items-end mt-auto z-10">
          {/* Image Section Parent (height is conditional) */}
          <div
            className={`relative w-full ${parentImageHeight} flex items-end justify-start rounded-t-3xl overflow-visible`}
          >
            {/* The inner image wrapper (phone frame or laptop preview) */}
            <div
              className={`${imageWidthClass} ${imageHeightClass} ${imageRoundedClass} 
                          overflow-hidden shadow-xl absolute ${verticalPositionClass}`}
              // Apply the calculated horizontal positioning styles
              style={horizontalStyle}
            >
              <img
                src={project.imageSrc}
                alt={project.title}
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
            </div>
          </div>

          {/* Button Section (remains the same) */}
          {(project.liveLink || project.githubLink) && (
            <a
              href={project.liveLink || project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-shrink-0 items-center justify-center rounded-full transition-all duration-300 hover:scale-110 hover:bg-[var(--clr-text-secondary)]"
              style={{
                width: "42px",
                height: "42px",
                backgroundColor: "var(--clr-text)",
              }}
            >
              <ArrowUpRight
                className="w-5 h-5"
                style={{ color: "var(--clr-bg-accent)" }}
              />
            </a>
          )}
        </div>
      </div>

      {/* Linear Gradient at the very bottom (remains the same) */}
      <div
        className="absolute bottom-0 left-0 w-full h-1/3 rounded-b-3xl"
        style={{
          // This creates the fade-out effect over the mockup's bottom
          background: `linear-gradient(to top, rgba(96, 94, 87, 1) 0%, rgba(198, 194, 179, 0) 100%)`,
        }}
      ></div>
    </div>
  );
};

const ProjectLoop: React.FC<ProjectLoopProps> = ({ projects }) => {
  const loopItems: LogoItem[] = useMemo(() => {
    return projects.map((p) => ({
      node: <LoopItemContent project={p} />,
      href: p.liveLink || p.githubLink,
      title: p.title,
    }));
  }, [projects]);

  if (projects.length === 0) {
    return (
      <div className="text-center text-[var(--clr-text-secondary)] py-10">
        No projects found for this category.
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div
        className="w-screen relative"
        style={{
          marginLeft: "calc(-50vw + 50%)",
          marginRight: "calc(-50vw + 50%)",
        }}
      >
        <LogoLoop
          logos={loopItems}
          speed={45}
          direction="right"
          gap={32}
          pauseOnHover
          fadeOut={true}
          fadeOutColor="var(--clr-background)"
          className="w-full h-[440px] relative overflow-hidden mt-6"
          ariaLabel="Showcase of project previews"
        />
      </div>
    </div>
  );
};

export default ProjectLoop;
