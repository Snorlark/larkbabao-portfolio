// components/ProjectCard.tsx
import React from "react";
import type { ProjectData } from "../data/projectData";
import { ArrowUpRight } from "lucide-react"; // Import the ArrowUpRight icon

interface ProjectCardProps {
  project: ProjectData;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    // 1. Main Card Container Styling (Keeping the original grid card style)
    <div
      className="flex flex-col rounded-3xl overflow-hidden duration-300"
      style={{
        backgroundColor: "var(--clr-bg-accent)", // The light beige/off-white background for the card
      }}
    >
      <div className="relative w-full h-[250px] flex items-start justify-center rounded-t-3xl overflow-hidden pt-4 bg-(--clr-bg-secondary)">
        <div className="w-[195px] h-[375px] rounded-2xl overflow-hidden shadow-xl transition-transform duration-500 hover:scale-[1.03]">
          {/* Increased w and h for a slightly larger phone mockup */}
          <img
            src={project.imageSrc}
            alt={project.title}
            className="w-full h-full object-cover object-top "
            loading="lazy"
          />
        </div>
      </div>
      {/* 3. Content Area */}

      <div className="flex justify-between items-start mb-1 px-6 mt-4">
        {" "}
        {/* items-start to align the text to the top */}
        <div className="flex flex-col flex-grow">
          {" "}
          {/* Group Type and Title for better flow */}
          {/* Type (e.g., MOBILE, WEBSITE) */}
          <p
            className="text-xs tracking-widest uppercase text-[var(--clr-text)]/80"
            style={{ fontFamily: "var(--font-secondary)" }}
          >
            {project.type}
          </p>
          {/* Title */}
          <h3 className="text-2xl font-bold text-[var(--clr-text)] leading-snug">
            {project.title}
          </h3>
        </div>
        {/* 4. Action Button (MOVED HERE: Next to the Type/Title block) */}
        {(project.liveLink || project.githubLink) && (
          <a
            href={project.liveLink || project.githubLink || "#"}
            target="_blank"
            rel="noopener noreferrer"
            // Use w-10 h-10 for the larger, more prominent button size
            className="w-10 h-10 flex flex-shrink-0 items-center justify-center rounded-full transition-all duration-300 ml-4"
            style={{
              backgroundColor: "var(--clr-text)", // Dark background color
              marginTop: "4px", // Small adjustment to align with the text block
            }}
            aria-label={`View ${project.title}`}
          >
            <ArrowUpRight
              className="w-6 h-6"
              style={{ color: "var(--clr-bg-accent)" }}
            />
          </a>
        )}
      </div>

      {/* Description */}
      <p className="text-base text-[var(--clr-text-secondary)] leading-relaxed px-6 mb-4 mt-3">
        {" "}
        {/* Added mt-3 for spacing from title */}
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
