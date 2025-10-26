import ScrollReveal from "../components/ScrollReveal";
import FadeContent from "../components/FadeContent";
import React from "react";
import CountUp from "../components/CountUp";
import TiltedCard from "../components/TiltedCard";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="relative flex flex-col items-center justify-center w-full mx-auto py-10 px-4 md:px-0 bg-[var(--clr-bg-accent)] rounded-4xl"
    >
      <div className="max-w-4xl mt-8 w-full">
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
            ABOUT ME
          </p>
          <div className="mb-8 leading-tight mb-20">
            <div className="self-start text-3xl md:text-5xl lg:text-[4rem] leading-none font-primary font-light text-[var(--clr-text)]">
              <span className="italic font-medium">DRIVEN</span> AND
            </div>
            <div className="self-end italic font-medium text-3xl md:text-5xl lg:text-[4rem] leading-none font-primary text-[var(--clr-text)]">
              ADAPTABLE
            </div>
          </div>

          {/* Text and Photo Grid - UPDATED FOR IMAGE STYLING */}
          {/* We'll re-introduce the grid for responsive two-column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 w-full items-start mb-20">
            {/* LEFT COLUMN: TEXT - Uses ScrollReveal as provided */}
            <div className="flex flex-col">
              <ScrollReveal
                baseOpacity={0}
                enableBlur={true}
                blurStrength={10}
                rotationEnd="bottom center"
                wordAnimationEnd="bottom center"
              >
                Passionate about developing and building seamless web & mobile
                experiences. Strong foundation in Data Structures, OOP, and
                Database Systems. Full-stack developer skilled in UI/UX design,
                full-stack development, project management, and modern
                frameworks. Always learning. Always building.
              </ScrollReveal>
            </div>

            {/* RIGHT COLUMN: IMAGE - Styled to match the design */}
            <FadeContent
              blur={true}
              duration={800}
              easing="ease-in"
              initialOpacity={0}
            >
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden mx-auto flex justify-center items-center">
                {/* Tilted card sits *above* the overlay */}
                <div className="relative z-[2] flex justify-center items-center">
                  <TiltedCard
                    imageSrc="/about/profile.jpeg"
                    altText="Lark Babao Profile"
                    captionText="Yup, that's me ^_^"
                    containerHeight="420px"
                    containerWidth="336px"
                    imageHeight="100%"
                    imageWidth="100%"
                    rotateAmplitude={12}
                    scaleOnHover={1.2}
                    showMobileWarning={false}
                    showTooltip={true}
                    displayOverlayContent={true}
                  />
                </div>
              </div>
            </FadeContent>
          </div>

          {/* Stat / Analytics Count */}

          <div className="w-full pt-10 pb-5">
            {/* Use relative positioning for the grid to anchor the absolute dividers */}
            <div className="relative grid grid-cols-4 text-center">
              {/* Vertical Divider 1 (Between 1 and 2) */}
              <div
                className="absolute top-0 bottom-0 left-1/4 transform -translate-x-1/2 w-px h-1/2 my-auto bg-[var(--clr-text)]/30"
                style={{ height: "20%" }} // Adjust height if needed
              />

              {/* Vertical Divider 2 (Between 2 and 3) */}
              <div
                className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-[1px] h-1/2 my-auto bg-[var(--clr-text)]/30"
                style={{ height: "20%" }}
              />

              {/* Vertical Divider 3 (Between 3 and 4) */}
              <div
                className="absolute top-0 bottom-0 left-3/4 transform -translate-x-1/2 w-[1px] h-1/2 my-auto bg-[var(--clr-text)]/30"
                style={{ height: "20%" }}
              />

              {/* Stat Item 1 */}
              <div className="flex flex-col items-center justify-start py-4">
                <span
                  className="relative text-9xl md:text-8xl font-bold text-[var(--clr-text)]"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  <span className="absolute -top-4 -left-6 text-3xl font-normal">
                    +
                  </span>
                  <CountUp
                    from={0}
                    to={6}
                    separator=","
                    direction="up"
                    duration={5}
                    className="count-up-text"
                  />
                </span>
                <span
                  className="text-sm tracking-wider uppercase text-[var(--clr-text)]/60 font-secondary mt-2"
                  style={{ fontFamily: "var(--font-secondary)" }}
                >
                  PROJECTS LED
                </span>
              </div>

              {/* Stat Item 2 */}
              <div className="flex flex-col items-center justify-start py-4">
                <span
                  className="relative text-9xl md:text-8xl font-bold text-[var(--clr-text)]"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  <span className="absolute -top-4 -left-6 text-3xl font-normal">
                    +
                  </span>
                  <CountUp
                    from={0}
                    to={13}
                    separator=","
                    direction="up"
                    duration={5}
                    className="count-up-text"
                  />
                </span>
                <span
                  className="text-sm tracking-wider uppercase text-[var(--clr-text)]/60 font-secondary mt-2"
                  style={{ fontFamily: "var(--font-secondary)" }}
                >
                  PROJECTS COMPLETED
                </span>
              </div>

              {/* Stat Item 3 */}
              <div className="flex flex-col items-center justify-start py-4">
                <span
                  className="relative text-9xl md:text-8xl font-bold text-[var(--clr-text)]"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  <span className="absolute -top-4 -left-6 text-3xl font-normal">
                    +
                  </span>
                  <CountUp
                    from={0}
                    to={3}
                    separator=","
                    direction="up"
                    duration={5}
                    className="count-up-text"
                  />
                </span>
                <span
                  className="text-sm tracking-wider uppercase text-[var(--clr-text)]/60 font-secondary mt-2"
                  style={{ fontFamily: "var(--font-secondary)" }}
                >
                  EVENTS MANAGED
                </span>
              </div>

              {/* Stat Item 4 */}
              <div className="flex flex-col items-center justify-start py-4">
                <span
                  className="relative text-9xl md:text-8xl font-bold text-[var(--clr-text)]"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  <span className="absolute -top-4 -left-6 text-3xl font-normal">
                    +
                  </span>
                  <CountUp
                    from={0}
                    to={15}
                    separator=","
                    direction="up"
                    duration={5}
                    className="count-up-text"
                  />
                </span>
                <span
                  className="text-sm tracking-wider uppercase text-[var(--clr-text)]/60 font-secondary mt-2"
                  style={{ fontFamily: "var(--font-secondary)" }}
                >
                  EVENTS SUPPORTED
                </span>
              </div>
            </div>
          </div>
        </FadeContent>
      </div>
    </section>
  );
};

export default About;
