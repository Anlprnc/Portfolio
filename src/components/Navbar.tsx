import { useEffect, useState } from 'react';

const Navbar = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
      {showScrollButton && (
        <button onClick={scrollToTop} className="fixed bottom-5 right-5 bg-blue-500 text-white w-10 h-10 rounded-full">
          ↑
        </button>
      )}
    </nav>
  );
};

export default Navbar;
