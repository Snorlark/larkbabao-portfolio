import Navbar from "./components/Navbar";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
import Journey from "./sections/Journey";
import Projects from "./sections/Projects";

// App.tsx - FINAL Layout replicating HTML structure

// App.tsx - FINAL FIX

// App.tsx - FINAL FIX

function App() {
  return (
    <>
      {/* 1. FIXED CONTACT BACKGROUND (z-0) - Must be rendered first in the source order */}
      <div className="fixed inset-0 w-full h-full z-0" aria-hidden="true">
        <Contact isFixedBackground={true} />
      </div>

      {/* 2. MAIN SCROLLING CONTENT (z-10, covers the fixed background) */}
      <main
        // 💡 FIX 1: Corrected background syntax to bg-[var(--clr-bg)]
        className="bg-[var(--clr-bg)] font-[var(--font-primary)] min-h-screen relative z-10 rounded-b-4xl overflow-x-hidden mb-[80vh]"
      >
        <Navbar />

        <div className="flex flex-col items-center justify-start pt-28 scroll-smooth overflow-x-hidden">
          <Hero />
          <About />
          <Projects />
          <Journey />
        </div>
      </main>
    </>
  );
}

export default App;
