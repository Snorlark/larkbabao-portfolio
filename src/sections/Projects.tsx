import FadeContent from "../components/FadeContent";
import React from "react";
import ProjectViewSwitcher from "../components/ProjectViewSwitcher"; // Import the new switcher

const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center w-full max-w-4xl mx-auto py-10 px-4 md:px-0"
    >
      <FadeContent
        blur={true}
        duration={800}
        easing="ease-in"
        initialOpacity={0}
        className="flex flex-col justify-center items-center w-full max-w-4xl "
      >
        <p
          className="mt-15 font-medium tracking-widest uppercase mb-8 text-[var(--clr-text)]"
          style={{ fontFamily: "var(--font-secondary)" }}
        >
          MY PROJECTS
        </p>
        <div className="mb-15 leading-tight">
          <div className="self-start text-3xl md:text-5xl lg:text-[4rem] leading-none font-primary font-light text-[var(--clr-text)]">
            <span className="italic font-medium">DESIGNS</span> AND
          </div>
          <div className="self-end italic font-medium text-3xl md:text-5xl lg:text-[4rem] leading-none font-primary text-[var(--clr-text)]">
            DEVELOPMENT
          </div>
        </div>

        {/* --- Dynamic Project Showcase --- */}
        <ProjectViewSwitcher />
      </FadeContent>
    </section>
  );
};

export default Projects;
