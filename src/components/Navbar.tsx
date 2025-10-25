function Navbar() {
  return (
    // Fixed container spanning the whole width and positioned at the top
    <nav className="fixed top-0 left-0 right-0 z-10 mt-5 px-4 md:px-8">
      {/* Centered container with max width */}
      <div
        className="mx-auto max-w-4xl flex items-center justify-between 
                        bg-(--transparent-bg) backdrop-blur-xl rounded-full 
                        px-4 md:px-10 py-3"
        style={{ fontFamily: "var(--font-secondary)" }}
      >
        {/* Logo/Branding */}
        <div className="w-10 md:w-16 flex items-center">
          <img
            src="/logo.png"
            alt="Logo"
            className="object-contain w-10 h-10"
          />
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6 md:space-x-10 tracking-widest text-sm font-medium">
          <li>
            <a
              href="#about"
              className=" hover:text-amber-700 transition-colors"
            >
              ABOUT
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className=" hover:text-amber-700 transition-colors"
            >
              PROJECTS
            </a>
          </li>
          <li>
            <a href="#work" className=" hover:text-amber-700 transition-colors">
              WORK
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className=" hover:text-amber-700 transition-colors"
            >
              CONTACT
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
