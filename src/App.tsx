import Navbar from "./components/Navbar";
import About from "./sections/About";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";

function App() {
  return (
    <>
      <main
        className="bg-(--clr-bg) font-(--font-primary) min-h-screen flex flex-col items-center justify-start pt-28 
                       text-text font-primary scroll-smooth overflow-x-hidden"
      >
        <Navbar />

        <Hero />
        <About />
        <Projects />
      </main>
    </>
  );
}

export default App;
