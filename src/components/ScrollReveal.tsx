import React, {
  useEffect,
  useRef,
  useMemo,
  type ReactNode,
  type RefObject,
} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: ReactNode;
  scrollContainerRef?: RefObject<HTMLElement>;
  enableBlur?: boolean;
  baseOpacity?: number;
  baseRotation?: number;
  blurStrength?: number;
  containerClassName?: string;
  textClassName?: string;
  rotationEnd?: string;
  wordAnimationEnd?: string;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  scrollContainerRef,
  enableBlur = true,
  baseOpacity = 0.1,
  baseRotation = 0,
  blurStrength = 4,
  containerClassName = "",
  textClassName = "",
  rotationEnd = "bottom bottom",
  wordAnimationEnd = "top",
}) => {
  const containerRef = useRef<HTMLHeadingElement>(null);

  const splitText = useMemo(() => {
    const text = typeof children === "string" ? children : "";
    return text.split(/(\s+)/).map((word, index) => {
      if (word.match(/^\s+$/)) return word;
      return (
        <span className="inline-block word" key={index}>
          {word}
        </span>
      );
    });
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const scroller =
        scrollContainerRef && scrollContainerRef.current
          ? scrollContainerRef.current
          : window;

      // --- ROTATION ANIMATION ---
      gsap.fromTo(
        el,
        { transformOrigin: "0% 50%", rotate: baseRotation },
        {
          ease: "Power1.easeInOut",
          rotate: 0,
          scrollTrigger: {
            trigger: el,
            scroller,
            start: "top bottom",
            end: rotationEnd,
            // INCREASED SCRUB: The higher the number, the slower the animation follows the scroll.
            scrub: 10,
          },
        }
      );

      const wordElements = el.querySelectorAll<HTMLElement>(".word");

      // --- OPACITY ANIMATION ---
      gsap.fromTo(
        wordElements,
        { opacity: baseOpacity, willChange: "opacity, transform" },
        {
          ease: "sine.out",
          opacity: 1,
          // Stagger is slightly increased to complement the slow scrub
          stagger: 0.08,
          scrollTrigger: {
            trigger: el,
            scroller,
            start: "top bottom-=10%",
            end: wordAnimationEnd,
            // INCREASED SCRUB: The animation will feel much slower and smoother.
            scrub: 1,
          },
        }
      );

      // --- BLUR ANIMATION ---
      if (enableBlur) {
        gsap.fromTo(
          wordElements,
          { filter: `blur(${blurStrength}px)` },
          {
            ease: "sine.out",
            filter: "blur(0px)",
            stagger: 0.08,
            scrollTrigger: {
              trigger: el,
              scroller,
              start: "top bottom-=10%",
              end: wordAnimationEnd,
              // INCREASED SCRUB
              scrub: 1,
            },
          }
        );
      }
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, [
    scrollContainerRef,
    enableBlur,
    baseRotation,
    baseOpacity,
    rotationEnd,
    wordAnimationEnd,
    blurStrength,
  ]);

  return (
    <h2 ref={containerRef} className={`my-5 ${containerClassName}`}>
      <p className={`text-3xl leading-[1.5] font-semibold ${textClassName}`}>
        {splitText}
      </p>
    </h2>
  );
};

export default ScrollReveal;
