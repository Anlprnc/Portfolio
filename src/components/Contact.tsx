import { SiGmail } from 'react-icons/si';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <div id="contact" className="flex w-full justify-center items-center mt-4 text-white py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl">Contact Me</h2>
        <div className="flex flex-col lg:flex-row items-start justify-start gap-10 py-5">
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-emerald-500" />
            My Phone Number: +90 536 882 21 29
          </div>
          <div className="flex items-center gap-2">
            <SiGmail className="text-red-600" />
            Email: anilpirincciii@gmail.com
          </div>
          <div className="flex items-center gap-2">
            <FaLinkedin className="text-sky-500" />
            <a href="https://www.linkedin.com/in/anil-pirincci/" target="_blank" rel="noopener noreferrer" className="hover:underline">
              LinkedIn
            </a>
          </div>
          <div className="flex items-center gap-2">
            <FaGithub />
            <a href="https://github.com/Anlprnc" target="_blank" rel="noopener noreferrer" className="hover:underline">
              Github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
