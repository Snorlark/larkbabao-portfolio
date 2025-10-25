import React, { useMemo } from "react";
import { LogoLoop, type LogoItem } from "./LogoLoop";
import { ALL_PROJECTS, type ProjectData } from "../data/projectData";

const LoopItemContent: React.FC<{ project: ProjectData }> = ({ project }) => {
  return (
    <div
      className="flex flex-col w-[260px] h-[480px] p-2 rounded-4xl cursor-pointer"
      style={{
        backgroundColor: "var(--clr-bg-accent)",
        fontFamily: "var(--font-primary)",
        flexShrink: 0,
      }}
    >
      {/* Image - Fixed height */}
      <div className="relative h-[250px] overflow-hidden w-full rounded-3xl mb-4 flex-shrink-0 bg-[var(--clr-bg)]">
        <img
          src={project.imageSrc}
          alt={project.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
      </div>

      {/* Content Section - Fixed layout */}
      <div className="flex flex-col flex-grow px-4 py-3 min-h-0">
        {/* Title section - Fixed height */}
        <div className="mb-2 flex-shrink-0">
          <h1 className="text-xl font-bold text-[var(--clr-text)] tracking-wide line-clamp-1 min-h-[1.75rem]">
            {project.title}
          </h1>
          <p
            className="text-xs tracking-widest uppercase text-[var(--clr-text-secondary)] mt-1 mb-3"
            style={{ fontFamily: "var(--font-secondary)" }}
          >
            {project.type}
          </p>
        </div>

        {/* Tech Stack - Fixed height area */}
        <div className="flex flex-wrap gap-2 text-xs font-semibold mb-3 flex-shrink-0 min-h-[3.5rem]">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="text-base px-3 py-1 rounded-full bg-[var(--clr-bg)] text-[var(--clr-text-secondary)] h-fit"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons - Push to bottom */}
        <div className="flex justify-end mt-auto">
          <div className="flex gap-2 justify-center items-end mb-1">
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full transition-all duration-300 hover:opacity-90"
                style={{ backgroundColor: "var(--clr-text)" }}
                aria-label={`View ${project.title} on GitHub`}
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 44 44"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.8334 31.1666L31.1667 12.8333M31.1667 12.8333H12.8334M31.1667 12.8333V31.1666"
                    stroke="var(--clr-bg-accent)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            )}

            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full transition-all duration-300 hover:opacity-90"
                style={{ backgroundColor: "var(--clr-text)" }}
                aria-label={`View ${project.title} live`}
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 44 44"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.8334 31.1666L31.1667 12.8333M31.1667 12.8333H12.8334M31.1667 12.8333V31.1666"
                    stroke="var(--clr-bg-accent)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectLoop: React.FC = () => {
  const loopItems: LogoItem[] = useMemo(() => {
    return ALL_PROJECTS.map((p) => ({
      node: <LoopItemContent project={p} />,
      href: p.liveLink || p.githubLink,
      title: p.title,
    }));
  }, []);

  return (
    <div className="w-full">
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .project-loop-container ul {
          align-items: flex-start !important;
        }
      `,
        }}
      />
      <div
        className="w-screen"
        style={{
          marginLeft: "calc(-50vw + 50%)",
          marginRight: "calc(-50vw + 50%)",
        }}
      >
        <LogoLoop
          logos={loopItems}
          speed={50}
          direction="right"
          gap={20}
          pauseOnHover
          fadeOut={true}
          fadeOutColor="var(--clr-background)"
          className="w-full h-[480px] overflow-hidden project-loop-container"
          ariaLabel="Showcase of project previews"
        />
      </div>
    </div>
  );
};

export default ProjectLoop;
