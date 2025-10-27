// sections/Contact.tsx - FINAL CORRECTED LOGIC

import Button from "../components/Button";
import FadeContent from "../components/FadeContent";
import DotGrid from "../components/DotGrid";

const Contact: React.FC<{ isFixedBackground?: boolean }> = ({
  isFixedBackground = false,
}) => {
  // 💡 FUNCTIONAL & FIXED FOOTER (This is the one visible at the bottom)
  if (isFixedBackground) {
    return (
      <section
        className="fixed bottom-0 left-0 w-full z-0 
                   flex flex-col items-center
                   bg-[var(--clr-text)] text-[var(--clr-bg)] 
                   px-4 md:px-0 rounded-t-4xl my-4"
        style={{ minHeight: "80vh" }} // Ensures enough height for content
      >
        {/* DotGrid Background */}
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 0,
          }}
        >
          <DotGrid
            dotSize={5}
            gap={20}
            baseColor="#44413c"
            activeColor="#fdf9e7"
            proximity={200}
            shockRadius={10}
            shockStrength={5}
            resistance={750}
            returnDuration={1.5}
          />
        </div>

        {/* All content must now be placed inside this fixed section */}
        <div className="mt-15 max-w-4xl w-full relative z-10">
          <FadeContent
            blur={true}
            duration={800}
            easing="ease-in"
            initialOpacity={0}
            // 💡 Ensure content is centered or aligned as needed within the fixed section
            className="flex flex-col justify-center items-center w-full"
          >
            <p
              className="font-medium tracking-widest uppercase mb-8 text-[var(--clr-bg)]"
              style={{ fontFamily: "var(--font-secondary)" }}
            >
              CONTACT ME!
            </p>
            <div className="mb-8 leading-tight">
              <div className="self-start text-3xl md:text-5xl lg:text-[4rem] leading-none font-primary font-light text-[var(--clr-bg)]">
                FROM <span className="italic font-medium">VISION</span>
              </div>
              <div className="self-end italic font-medium text-3xl md:text-5xl lg:text-[4rem] leading-none font-primary text-[var(--clr-bg)]">
                TO <span className="italic font-medium">EXECUTION</span>
              </div>
            </div>
            <p className="font-medium text-xl mb-20 text-[var(--clr-bg)] max-w-xl">
              Open to{" "}
              <span className="italic font-bold">
                {" "}
                collaborations, tech talks, internships,{" "}
              </span>{" "}
              and exciting opportunities in web & mobile development.
            </p>

            <Button
              children={<a>CONTACT ME</a>}
              isArrow
              isInverted
              href="mailto:larksigmuondbabao@gmail.com"
            />

            <div className="flex justify-center items-center gap-6 mt-8">
              <a
                href="https://www.facebook.com/larksigmuondbabao/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="contact/facebook.png"
                  alt="Facebook"
                  className="w-12 h-auto object-contain cursor-pointer hover:scale-110 transition-transform duration-300"
                />
              </a>

              <a
                href="https://www.linkedin.com/in/lark-sigmuond-babao-9a8a012b2/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="contact/linkedin.png"
                  alt="LinkedIn"
                  className="w-12 h-auto object-contain cursor-pointer hover:scale-110 transition-transform duration-300"
                />
              </a>

              <a
                href="https://github.com/Snorlark"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="contact/github.png"
                  alt="Github"
                  className="w-12 h-auto object-contain cursor-pointer hover:scale-110 transition-transform duration-300"
                />
              </a>
            </div>

            <div className="w-screen h-[1px] bg-[var(--clr-bg)] opacity-10 mt-10 mb-6"></div>
            <div className="w-full max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row justify-between items-center text-[var(--clr-bg)] opacity-80 px-4 md:px-0">
                {/* Left Side (Logo and Copyright) */}
                <div className="flex items-start md:items-center space-x-4 mb-4 md:mb-0">
                  <img
                    src="/logo-light.png" // Assumed inverted logo for dark background
                    alt="Lark Babao Logo"
                    className="w-10 h-10 object-contain"
                  />
                  <div className="flex flex-col text-xs">
                    <p className="text-base font-bold italic uppercase">
                      LARK BABAO
                    </p>
                    <p
                      className="text-[10px] opacity-50 font-medium tracking-widest uppercase"
                      style={{ fontFamily: "var(--font-secondary)" }}
                    >
                      © 2025 | ALL RIGHTS RESERVED.
                    </p>
                  </div>
                </div>

                {/* Right Side (Inspirational Text) */}
                <div
                  className="text-[10px] opacity-50 font-medium tracking-widest uppercase"
                  style={{ fontFamily: "var(--font-secondary)" }}
                >
                  <p>
                    MADE WITH COFFEE, MUSIC, AND A BIT OF JAVASCRIPT MADNESS.
                  </p>
                  <p>
                    UI COMPONENTS INSPIRED FROM{" "}
                    <a
                      href="https://reactbits.dev"
                      className="underline hover:opacity-100"
                    >
                      REACT BITS
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
          </FadeContent>
        </div>
      </section>
    );
  }

  // PLACEHOLDER SECTION (Returns nothing if not fixed background)
  return <div style={{ height: "0", visibility: "hidden" }}></div>;
};

export default Contact;
