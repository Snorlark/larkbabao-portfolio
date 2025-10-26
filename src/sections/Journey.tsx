import ImageTrail from "../components/ImageTrail";
import FadeContent from "../components/FadeContent";
import JourneyTimeline from "../components/JourneyTimeline";

const Journey: React.FC = () => {
  return (
    <section
      id="journey"
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
            MY JOURNEY
          </p>
          <div className="mb-8 leading-tight">
            <div className="self-start text-3xl md:text-5xl lg:text-[4rem] leading-none font-primary font-light text-[var(--clr-text)]">
              <span className="italic font-medium">LED</span> AND
            </div>
            <div className="self-end italic font-medium text-3xl md:text-5xl lg:text-[4rem] leading-none font-primary text-[var(--clr-text)]">
              MANAGED
            </div>
          </div>
          <p className="font-medium text-xl mb-20 text-[var(--clr-text)] max-w-xl">
            Highlights from my journey leading and building impactful projects
            at <span className="italic font-bold">GDGOC-NU MANILA</span>
          </p>

          <JourneyTimeline />
        </FadeContent>
      </div>
    </section>
  );
};

export default Journey;
