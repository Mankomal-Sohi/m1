import { FaCode } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

const Nav = () => {
  return (
    <nav className="flex flex-row justify-between items-center w-[90%] h-[10%] px-4 mx-auto">
      <div className="flex flex-row justify-center items-center gap-2 text-3xl hover:text-[#E310CB]">
        <span className="text-[#86FBFB] text-3xl">
          <FaCode />
        </span>
        Mankomal
      </div>
      <div className="flex flex-row gap-4 justify-center items-center">
        <ul className="flex flex-row gap-4 justify-center items-center">
          <li className="w-16 h-8 text-4 hover:text-[#E310CB] flex justify-center items-center ">
            Projects
          </li>
          <li className="w-16 h-8 text-4 hover:text-[#E310CB] flex justify-center items-center ">
            About
          </li>
          <li className="w-16 h-8 text-4 hover:text-[#E310CB] flex justify-center items-center ">
            Contact
          </li>
          <li className="w-min h-8 text-7 text-[#86FBFB] hover:text-[#E310CB] flex justify-center items-center "><a href="https://www.linkedin.com/in/mankomaldeep-kaur-87a97626b/">
            <FaLinkedin /></a>
          </li>
          <li className="w-min h-8 text-7 text-[#86FBFB] hover:text-[#E310CB] flex justify-center items-center "><a href="https://github.com/Mankomal-Sohi">
            <FaGithub /></a>
          </li>
        </ul>
        <button className="w-16 h-6 bg-[#E310CB] hover:bg-[#FF17CA] rounded-lg"><a href="https://www.dropbox.com/scl/fi/8tnfpomhaith5v75jyd2n/Mankomal_Resume.pdf?rlkey=qv7u9pee9io5v1rndlm6fufs4&st=avkesdg0&dl=0">
          Resume </a>
        </button>
      </div>
      </nav>
    
  );
};

export default Nav;
