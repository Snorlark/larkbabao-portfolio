// components/ProjectViewSwitcher.tsx
import React, { useState, useMemo, type JSX } from "react";
import ProjectLoop from "./ProjectLoop";
import ProjectCard from "./ProjectCard";
import {
  ALL_PROJECTS,
  type ProjectType,
  type ProjectData,
} from "../data/projectData"; // Import ALL_PROJECTS and Project type
import { Grid, List } from "lucide-react";

type ViewMode = "loop" | "card";
const VIEW_MODES: { id: ViewMode; icon: string | JSX.Element }[] = [
  { id: "loop", icon: <List size={20} /> }, // List/Loop icon
  { id: "card", icon: <Grid size={20} /> }, // Grid/Card icon
];

const ProjectViewSwitcher: React.FC = () => {
  const [activeType, setActiveType] = useState<ProjectType | "All">("All");
  const [viewMode, setViewMode] = useState<ViewMode>("loop"); // Start in loop view

  const availableTypes: Array<ProjectType | "All"> = useMemo(() => {
    // Use ALL_PROJECTS
    const types = ALL_PROJECTS.map((p: { type: any }) => p.type);
    return ["All", ...Array.from(new Set(types))];
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeType === "All") {
      return ALL_PROJECTS; // Use ALL_PROJECTS
    }
    return ALL_PROJECTS.filter((p: { type: any }) => p.type === activeType); // Use ALL_PROJECTS
  }, [activeType]);

  return (
    <div className="w-full">
      {/* --- Filter and View Mode Controls --- */}
      <div className="flex justify-center items-center mb-16 space-x-4">
        {/* Type Filters (e.g., Website, Mobile) */}
        <div className="flex space-x-2 p-1 rounded-full px-6 py-3 bg-(--clr-bg-accent)">
          {availableTypes.map((type) => (
            <button
              key={type}
              onClick={() => setActiveType(type)}
              className={`px-4 py-2 text-normal rounded-full transition-colors 
                ${
                  activeType === type
                    ? "bg-[var(--clr-text)] text-[var(--clr-bg)] font-bold"
                    : "text-[var(--clr-text-secondary)] hover:font-bold cursor-pointer"
                }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* View Mode Switcher (Loop vs. Card) */}
        <div className="flex  rounded-full px-6 py-3 bg-(--clr-bg-accent)">
          {VIEW_MODES.map((mode) => (
            <button
              key={mode.id}
              onClick={() => setViewMode(mode.id)}
              className={`px-3 py-2 text-sm rounded-full transition-colors 
                        ${
                          viewMode === mode.id
                            ? "bg-[var(--clr-text)] text-[var(--clr-bg)] font-bold"
                            : "text-[var(--clr-text-secondary)] transition-transform hover:scale-110 cursor-pointer"
                        }`}
              title={`${mode.id === "loop" ? "Loop View" : "Card Grid View"}`}
            >
              {mode.icon}
            </button>
          ))}
        </div>
      </div>

      {/* --- Dynamic Content View --- */}
      {viewMode === "loop" ? (
        // The unlimited looping view
        <ProjectLoop />
      ) : (
        // The two-grid card view
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project: ProjectData) => (
              <ProjectCard key={project.id} project={project} />
            ))
          ) : (
            <p className="md:col-span-2 text-center text-[var(--clr-text-secondary)]">
              No projects found for {activeType}.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default ProjectViewSwitcher;
