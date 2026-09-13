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
              <a href="#About"></a>About
            </li>
            <li className="hover:text-pink-500">
              <a href="#Contact"></a>Contact
            </li>
          </ul>
        </div>
        <div className="hidden md:flex gap-4 ">
          <button className="text-gray-600 hover:text-pink-500">Sign in</button>
          <button className="bg-pink-600 text-white px-5 py-2 rounded-full hover:bg-pink-700">
            Sign Up
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden mt-4">
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

            <div className="flex gap-4 mt-4">
              <button className="text-gray-600">Sign in</button>

              <button className="bg-pink-600 text-white px-5 py-2 rounded-full">
                Sign Up
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navber;
