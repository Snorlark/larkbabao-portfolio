import React, { useState, useEffect, useCallback, useRef } from "react";
import gsap from "gsap"; // Make sure GSAP is imported

// Define the sections to track and their corresponding end button logic
const SECTIONS_CONFIG = [
  { label: "ABOUT", href: "#about", id: "about" },
  { label: "PROJECTS", href: "#projects", id: "projects" },
  { label: "JOURNEY", href: "#journey", id: "journey" },
];

function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");

  // Logic to determine the active section based on scroll position
  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY + window.innerHeight / 3;

    let currentSection = "hero";

    if (window.scrollY < 200) {
      currentSection = "hero";
    } else {
      SECTIONS_CONFIG.forEach((sec) => {
        const element = document.getElementById(sec.id);
        if (element) {
          const elementTop = element.offsetTop;
          const elementHeight = element.offsetHeight;
          if (
            scrollPosition >= elementTop &&
            scrollPosition < elementTop + elementHeight
          ) {
            currentSection = sec.id;
          }
        }
      });
    }

    setActiveSection(currentSection);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  type NavLinkProps = {
    href: string;
    label: string;
  };

  // --- NavLink Component with GSAP Fade ---
  const NavLink = ({ href, label }: NavLinkProps) => {
    const id = href.replace("#", "");
    const isActive = activeSection === id;
    const linkRef = useRef(null); // Ref to target the link element

    // Animate the background change when active state changes
    useEffect(() => {
      if (linkRef.current) {
        if (isActive) {
          // Animate active state: Fade in background and change text color
          gsap.fromTo(
            linkRef.current,
            { scale: 0.95 },
            {
              scale: 1,
              duration: 0.4,
              backgroundColor: "var(--clr-bg)", // Use Tailwind's generated CSS variable for background
              color: "var(--clr-text)",
              fontWeight: "font-bold",
              ease: "power2.out",
            }
          );
        } else {
          // Animate inactive state: Reset background and text color
          gsap.to(linkRef.current, {
            duration: 0.4,
            backgroundColor: "transparent",
            color: "var(--clr-text)",
            fontWeight: "font-medium", // Assuming the default text color is stored here
            ease: "power2.out",
          });
        }
      }
    }, [isActive]);

    // Apply base classes (without the active style)
    const baseClasses =
      "px-4 py-4 tracking-widest text-sm font-medium transition-all rounded-full hover:text-[var(--clr-text)]";
    // If active, ensure the text is bold for consistency before the animation settles
    const activeTextClass = isActive ? "font-bold" : "font-medium";

    return (
      <li className="flex items-center">
        <a
          ref={linkRef} // Attach the ref
          href={href}
          className={`${baseClasses} ${activeTextClass}`}
          // Apply CSS variables directly to enable GSAP to animate them
          style={{
            backgroundColor: isActive ? "var(--clr-bg)" : "transparent",
            color: isActive ? "var(--clr-text)" : "var(--clr-text)",
            fontWeight: isActive ? "bold" : "medium",
            willChange: "background-color, color, transform, opacity",
          }}
        >
          {label}
        </a>
      </li>
    );
  };

  // --- Conditional Button Component with GSAP Fade (UPDATED LOGIC) ---
  const ConditionalButton = () => {
    const buttonRef = useRef(null);
    const [buttonContent, setButtonContent] =
      useState<React.ReactElement | null>(null);
    const isVisible = true;

    // Determine the text, link, and content based on the active section
    const getButtonConfig = (sectionId: string) => {
      let text = "CONTACT ME";
      let href = "mailto:larksigmuondbabao@gmail.com";
      let icon = (
        <svg
          viewBox="0 0 44 44"
          fill="none"
          className="w-5 h-4"
          color="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.8334 31.1666L31.1667 12.8333M31.1667 12.8333H12.8334M31.1667 12.8333V31.1666"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );

      if (sectionId === "about") {
        text = "CHECK MY CV";
        href = "https://babao-lark-resume.tiiny.site/";
        // Optional: Change icon to a GitHub logo or file icon if desired
      }

      if (sectionId === "projects") {
        text = "CHECK MY GITHUB";
        href = "https://github.com/Snorlark";
        // Optional: Change icon to a GitHub logo or file icon if desired
      }

      if (sectionId === "journey") {
        text = "CONNECT ON LINKEDIN";
        href = "https://www.linkedin.com/in/lark-sigmuond-babao-9a8a012b2/";
        // Optional: Change icon to a GitHub logo or file icon if desired
      }

      return { text, href, icon };
    };

    // 1. Logic to define the button content
    useEffect(() => {
      if (isVisible) {
        const config = getButtonConfig(activeSection);

        setButtonContent(
          <a
            target="_blank"
            href={config.href}
            // FIXED: Using bracket notation for CSS variables in Tailwind
            className="px-6 py-4 bg-[var(--clr-text)] text-[var(--clr-bg)] rounded-full text-sm font-bold flex items-center shadow-lg hover:opacity-90 transition-opacity"
          >
            {config.text}
            <span className="ml-2 w-4 h-4">{config.icon}</span>
          </a>
        );
      } else {
        setButtonContent(null);
      }
    }, [isVisible, activeSection]); // Re-run when activeSection changes

    // 2. GSAP Animation for the button appearing/disappearing
    useEffect(() => {
      if (buttonRef.current) {
        if (isVisible) {
          gsap.fromTo(
            buttonRef.current,
            { opacity: 0, x: 20 },
            { opacity: 1, x: 0, duration: 0.4, ease: "power2.out" }
          );
        } else {
          gsap.to(buttonRef.current, {
            opacity: 0,
            x: 20,
            duration: 0.3,
            ease: "power2.in",
          });
        }
      }
    }, [isVisible, buttonContent]);

    if (!buttonContent && !isVisible) return null;

    return (
      <li
        ref={buttonRef}
        className="hidden md:block ml-6"
        style={{ opacity: isVisible ? 1 : 0 }}
      >
        {buttonContent}
      </li>
    );
  };

  return (
    // Fixed container spanning the whole width and positioned at the top
    <nav className="fixed top-0 left-0 right-0 z-10 mt-5 px-4 md:px-3">
      {/* Centered container with max width */}
      <div
        className="mx-auto max-w-4xl flex items-center justify-between 
                        bg-[var(--transparent-bg)] backdrop-blur-xl rounded-full 
                        px-2 md:px-10 py-3"
        style={{ fontFamily: "var(--font-secondary)" }}
      >
        {/* Logo/Branding */}
        <a href="/" className="w-10 md:w-16 flex items-center ">
          <img
            src="/logo.png"
            alt="Logo"
            className="object-contain w-12 h-auto transition-transform hover:scale-110 focus:scale-110"
          />
        </a>

        {/* Navigation Links and Conditional Button */}
        <ul className="flex items-center tracking-widest text-sm font-medium">
          {/* Render regular links */}
          {SECTIONS_CONFIG.map((sec) => (
            <NavLink key={sec.id} href={sec.href} label={sec.label} />
          ))}

          {/* Render the conditional button based on active section */}
          <ConditionalButton />
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
