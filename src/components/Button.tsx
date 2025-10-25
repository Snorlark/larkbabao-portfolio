import React, { type ReactNode, useRef, useEffect, useCallback } from "react";
import { gsap } from "gsap"; // Import GSAP

// Define the shape of the props this component expects
interface ButtonProps {
  children: ReactNode;
  isArrow: boolean;
  href: string;
}

const Button: React.FC<ButtonProps> = ({ children, isArrow, href }) => {
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const flairRef = useRef<HTMLDivElement>(null);

  const ArrowIcon = (
    <svg
      // Added a fixed width/height class to prevent the icon from becoming too large
      className="w-10 h-auto "
      viewBox="0 0 59 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 10.1538L56.6294 10.1538L50.1135 1.26923L50.9326 0L59 11L50.9326 22L50.1135 20.7308L56.6294 11.8462L0 11.8462V10.1538Z"
        fill="currentColor"
      />
    </svg>
  );

  const LinkIcon = (
    <svg
      className="w-8 h-auto" // Added a fixed width/height class
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.8334 31.1666L31.1667 12.8333M31.1667 12.8333H12.8334M31.1667 12.8333V31.1666"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  // 2. Replicate the GSAP logic using useCallback and useEffect
  const getXY = useCallback((e: MouseEvent) => {
    if (!buttonRef.current) return { x: 0, y: 0 };
    const { left, top, width, height } =
      buttonRef.current.getBoundingClientRect();

    const xTransformer = gsap.utils.pipe(
      gsap.utils.mapRange(0, width, 0, 100),
      gsap.utils.clamp(0, 100)
    );
    const yTransformer = gsap.utils.pipe(
      gsap.utils.mapRange(0, height, 0, 100),
      gsap.utils.clamp(0, 100)
    );

    return {
      x: xTransformer(e.clientX - left),
      y: yTransformer(e.clientY - top),
    };
  }, []);

  useEffect(() => {
    const button = buttonRef.current;
    const flair = flairRef.current;
    if (!button || !flair) return;

    const xSet = gsap.quickSetter(flair, "xPercent");
    const ySet = gsap.quickSetter(flair, "yPercent");

    const handleMouseEnter = (e: MouseEvent) => {
      const { x, y } = getXY(e);
      xSet(x);
      ySet(y);
      gsap.to(flair, { scale: 1, duration: 0.4, ease: "power2.out" });
    };

    const handleMouseLeave = (e: MouseEvent) => {
      const { x, y } = getXY(e);
      gsap.killTweensOf(flair);

      gsap.to(flair, {
        xPercent: x > 90 ? x + 20 : x < 10 ? x - 20 : x,
        yPercent: y > 90 ? y + 20 : y < 10 ? y - 20 : y,
        scale: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseMove = (e: MouseEvent) => {
      const { x, y } = getXY(e);
      gsap.to(flair, {
        xPercent: x,
        yPercent: y,
        duration: 0.4,
        ease: "power2",
      });
    };

    button.addEventListener("mouseenter", handleMouseEnter as EventListener);
    button.addEventListener("mouseleave", handleMouseLeave as EventListener);
    button.addEventListener("mousemove", handleMouseMove as EventListener);

    return () => {
      button.removeEventListener(
        "mouseenter",
        handleMouseEnter as EventListener
      );
      button.removeEventListener(
        "mouseleave",
        handleMouseLeave as EventListener
      );
      button.removeEventListener("mousemove", handleMouseMove as EventListener);
    };
  }, [getXY]);

  // --- Rendered Component ---
  return (
    <a
      ref={buttonRef} // Attach ref to the button element
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        relative overflow-hidden inline-flex items-center justify-center 
        rounded-full cursor-pointer 
        text-normal font-medium tracking-widest text-sm 
        transition
        px-6 py-6 border border-[var(--clr-text)] 
        

        text-[var(--clr-text)] 
        hover:text-[var(--clr-bg)] 
        hover:bg-(--clr-text) 
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-(--clr-text)
        
        /* This class name corresponds to the original CSS selector */
        button--stroke
      "
      style={{ fontFamily: "var(--font-secondary)" }}
    >
      {/* Flair Element (Reflected in GSAP logic) */}
      <div ref={flairRef} className="button__flair">
        {/* The ::before style is replicated using a dedicated element */}
        <div className="button__flair-before"></div>
      </div>

      {/* Label/Content */}
      <span className="relative z-10 text-center leading-snug">{children}</span>

      {/* Icon */}
      <span className="ml-4">{isArrow ? ArrowIcon : LinkIcon}</span>
    </a>
  );
};

export default Button;
