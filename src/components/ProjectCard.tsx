// components/ProjectCard.tsx
import React from "react";
import type { ProjectData } from "../data/projectData";

interface ProjectCardProps {
  project: ProjectData;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="flex flex-col bg-transparent p-4">
      {/* Project Image/Preview */}
      <div className="relative overflow-hidden aspect-[4/3] rounded-lg mb-4">
        {/* Using a placeholder for the image structure shown in the screenshot */}
        <img
          src={project.imageSrc}
          alt={`Preview of ${project.title}`}
          className="w-full h-full object-cover"
        />
        {/* Example of the small arrow/link button on the image */}
        <a
          href={project.liveLink || project.githubLink || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white bg-opacity-80 transition-opacity hover:opacity-100"
          aria-label={`View ${project.title}`}
        >
          <svg
            className="w-5 h-5 text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </a>
      </div>

      {/* Title and Description */}
      <h3 className="text-2xl font-primary font-medium text-[var(--clr-text)] mb-2">
        {project.title}
      </h3>
      <p className="text-sm text-[var(--clr-text-secondary)] mb-4">
        {project.description}
      </p>

      {/* Technologies/Tags */}
      <div className="flex flex-wrap gap-2 text-xs font-medium">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 rounded-full border border-[var(--clr-text-secondary)] text-[var(--clr-text-secondary)]"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
