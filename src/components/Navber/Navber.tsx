import { useState } from "react";
import Logo from "../../assets/logo-text.png";
import hamburger from "../../assets/hamburger.png";

const Navber = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white">
      <div className="mx-auto flex max-w-[1250px] items-center justify-between px-5 py-4">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl"
        >
          <img src={hamburger} alt="icon" />
        </button>
        <div>
          <img src={Logo} alt="" />
        </div>

        <div className="hidden md:block text-center text-gray-500 ">
          <ul className="flex gap-4">
            <li className="hover:text-pink-500">
              <a href="#Home">Home</a>
            </li>
            <li className="hover:text-pink-500">
              <a href="#Technologies">Technologies</a>
            </li>
            <li className="hover:text-pink-500">
              <a href="#Projects">Projects</a>
            </li>
            <li className="hover:text-pink-500">
              <a href="#About">About</a>
            </li>
            <li className="hover:text-pink-500">
              <a href="#Contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <button className="text-sm text-gray-600 hover:text-pink-500 md:text-base">
            Sign in
          </button>
          <button className="rounded-full bg-pink-600 px-3 py-1.5 text-sm text-white hover:bg-pink-700 md:px-5 md:py-2 md:text-base">
            Sign Up
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden mt-4 w-full">
            <ul className="flex flex-col gap-4 text-gray-500">
              <li>
                <a href="#Home">Home</a>
              </li>

              <li>
                <a href="#Technologies">Technologies</a>
              </li>

              <li>
                <a href="#Projects">Projects</a>
              </li>

              <li>
                <a href="#About">About</a>
              </li>

              <li>
                <a href="#Contact">Contact</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navber;
