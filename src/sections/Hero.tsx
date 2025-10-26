import FadeContent from "../components/FadeContent";
import Button from "../components/Button";
import React from "react";
import BlurText from "../components/BlurText";
import LogoLoop from "../components/LogoLoop";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiFigma,
  SiGit,
  SiFlutter,
  SiAndroidstudio,
  SiExpress,
  SiMongodb,
} from "react-icons/si";

const Hero: React.FC = () => {
  const techLogos = [
    {
      node: <SiFigma />,
      title: "Figma",
      href: "https://figma.com",
      color: "var(--clr-text)",
    },
    {
      node: <SiGit />,
      title: "Git",
      href: "https://git-scm.com/",
      color: "var(--clr-text)",
    },
    {
      node: <SiReact />,
      title: "React",
      href: "https://react.dev",
      color: "var(--clr-text)",
    },
    { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
    {
      node: <SiTypescript />,
      title: "TypeScript",
      href: "https://www.typescriptlang.org",
    },
    {
      node: <SiTailwindcss />,
      title: "Tailwind CSS",
      href: "https://tailwindcss.com",
    },
    {
      node: <SiFlutter />,
      title: "Flutter",
      href: "https://flutter.dev",
    },
    {
      node: <SiNextdotjs />,
      title: "NextJs",
      href: "https://nextjs.org",
    },
    {
      node: <SiAndroidstudio />,
      title: "Flutter",
      href: "https://developer.android.com/studio",
    },
    {
      node: <SiExpress />,
      title: "Express",
      href: "https://expressjs.com",
    },
    {
      node: <SiMongodb />,
      title: "MongoDB",
      href: "https://mongodb.com",
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center w-full max-w-4xl mx-auto py-10 px-4 md:px-0">
      {/* 1. TOP FADE-IN CONTENT (Image and Location) */}
      <FadeContent
        blur={true}
        duration={800}
        easing="ease-in"
        initialOpacity={0}
        // FIX: The wrapper needs the correct structural classes for alignment
        className="flex flex-col justify-center items-center w-full"
      >
        <img
          src="/hero/hero-chips.png"
          alt="Hero Chips"
          className="w-35 h-auto object-contain"
        />

        {/* Location */}
        <p
          // FIX: Corrected custom variable syntax
          className="mt-15 font-medium tracking-widest uppercase mb-8 text-[var(--clr-text)]"
          style={{ fontFamily: "var(--font-secondary)" }}
        >
          BASED ON PASIG, PH
        </p>
      </FadeContent>

      {/* 2. MAIN SPLIT HEADING */}
      <div className="flex flex-col mb-8 w-full max-w-4xl leading-tight">
        {/* First Line: I BUILD FOR THE */}
        <BlurText
          text="I BUILD FOR THE"
          delay={150}
          animateBy="letters"
          direction="top"
          // FIX: Applied h1's styling and layout classes directly to BlurText's className
          className="self-start text-5xl md:text-7xl lg:text-[6rem] leading-none font-primary font-light text-[var(--clr-text)]"
        />

        {/* Second Line: WEB & MOBILE */}
        <BlurText
          text="WEB & MOBILE"
          delay={200} // Increased delay for sequential animation
          animateBy="letters"
          direction="top"
          // FIX: Applied h1's styling and layout classes directly to BlurText's className
          className="self-end italic text-5xl md:text-7xl lg:text-[6rem] leading-none font-primary font-medium text-[var(--clr-text)]"
        />
      </div>

      {/* 3. BOTTOM FADE-IN CONTENT (Description, Buttons, Tech Stack) */}
      <FadeContent
        blur={true}
        duration={800}
        easing="ease-in"
        initialOpacity={0}
        // FIX: The wrapper needs the correct structural classes for alignment
        className="flex flex-col justify-center items-center w-full"
      >
        {/* SUB-HEADING/DESCRIPTION (The missing text) */}
        {/* FIX: Removed the outer FadeContent and used a simple wrapper to make it visible */}
        <p
          // FIX: Corrected custom variable syntax
          className="text-base font-medium tracking-widest text-[var(--clr-text)] mb-15 max-w-4xl leading-relaxed text-center"
          style={{ fontFamily: "var(--font-secondary)" }}
        >
          HI. I'M <span className="font-bold">LARK BABAO</span> &mdash; A{" "}
          <span className="italic">FULL-STACK DEVELOPER</span> FOCUSED ON
          REAL-WORLD IMPACT AND GREAT USER EXPERIENCES.
        </p>

        {/* Call-to-action Buttons */}
        <div className="flex space-x-4 md:space-x-6 justify-center mb-30">
          <Button
            children={<a href="#projects">SEE MY WORK</a>}
            isArrow
            href="#projects"
          />
          <Button
            children={
              <a target="blank" href="https://babao-lark-resume.tiiny.site/">
                CHECK MY CV
              </a>
            }
            isArrow={false}
            href="https://babao-lark-resume.tiiny.site/"
          />
        </div>

        {/* Current Tech Stack */}
        <div className="flex flex-col justify-center items-center w-full">
          <p
            // FIX: Corrected custom variable syntax
            className="mb-5 text-sm tracking-widest uppercase text-(--clr-text)/50"
            style={{ fontFamily: "var(--font-secondary)" }}
          >
            CURRENT TECH STACK
          </p>

          <div
            className="w-screen relative"
            style={{
              marginLeft: "calc(-50vw + 50%)",
              marginRight: "calc(-50vw + 50%)",
            }}
          >
            <LogoLoop
              logos={techLogos}
              speed={70}
              direction="left"
              logoHeight={60}
              gap={50}
              pauseOnHover
              scaleOnHover
              ariaLabel="Current Tech Stack"
              // FIX: Set w-full on the LogoLoop itself (its content will be 100% of the w-screen wrapper)
              className="w-full h-20 relative overflow-hidden mt-4"
            />
          </div>
        </div>
      </FadeContent>
    </section>
  );
};

export default Hero;
