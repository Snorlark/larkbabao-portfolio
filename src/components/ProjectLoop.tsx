import React, { useMemo } from "react";
import { LogoLoop, type LogoItem } from "./LogoLoop";
import { type ProjectData } from "../data/projectData";
import { ArrowUpRight } from "lucide-react";

interface ProjectLoopProps {
  projects: ProjectData[]; // Accepts an array of ProjectData
}

const LoopItemContent: React.FC<{ project: ProjectData }> = ({ project }) => {
  return (
    <div
      className="flex flex-col justify-between w-[270px] h-[440px] rounded-3xl overflow-hidden duration-300 relative" // Added 'relative' for absolute positioning of the gradient
      style={{
        backgroundColor: "var(--clr-bg-accent)", // The light beige/off-white background
        flexShrink: 0,
      }}
    >
      {/* Content */}
      <div className="flex flex-col justify-between flex-grow px-4 py-3 mt-5">
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
                backgroundColor: "var(--clr-bg)", // Assuming a slightly different color for the tech stack background
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Image and the Button container */}
        <div className="flex justify-between items-end mt-auto z-10">
          {" "}
          {/* Added z-10 to keep the button and image above the gradient */}
          {/* Image Section */}
          <div className="relative w-full h-[220px] flex items-end justify-start rounded-t-3xl overflow-visible">
            {/* The inner phone frame wrapper */}
            <div className="w-[195px] h-[375px] rounded-2xl overflow-hidden shadow-xl absolute bottom-[-150px] left-[-35px]">
              <img
                src={project.imageSrc}
                alt={project.title}
                // Object-cover and object-top are good for the image itself
                className="w-full h-full object-cover object-top "
                loading="lazy"
              />
            </div>
          </div>
          {/* Button Section */}
          {/* Assuming you want the button to link to the live project (liveLink) or GitHub (githubLink) */}
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

      {/* Linear Gradient at the very bottom */}
      <div
        className="absolute bottom-0 left-0 w-full h-1/3 rounded-b-3xl"
        style={{
          background: `linear-gradient(to top, rgba(96, 94, 87, 1) 0%, rgba(198, 194, 179, 0) 100%)`,
          // Dark color #605E57 is at 0% (bottom of the band)
          // Light color #C6C2B3 is at 100% (top of the band) and made transparent (alpha 0)
        }}
      ></div>
    </div>
  );
};

const ProjectLoop: React.FC<ProjectLoopProps> = ({ projects }) => {
  const loopItems: LogoItem[] = useMemo(() => {
    // 💡 FIX 4: Use the 'projects' prop instead of ALL_PROJECTS
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
