const Navbar = () => {
  return (
    <nav>
      <ul className="flex items-center justify-center gap-10 p-5 text-white font-exo">
        <li>
          <a href="#hero" className="hover:text-gray-300">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="hover:text-gray-300">
            About
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:text-gray-300">
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-gray-300">
            Contact Me
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
