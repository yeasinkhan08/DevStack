import { useState } from "react";
import Logo from "../../assets/logo-text.png";
import hamburger from "../../assets/hamburger.png";

const Navber = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <div className="px-6 py-4 flex gap-4 justify-between container mx-auto items-center">
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
              <a href="#"></a>Home
            </li>
            <li className="hover:text-pink-500">
              <a href="#"></a>Technologies
            </li>
            <li className="hover:text-pink-500">
              <a href="#"></a>Projects
            </li>
            <li className="hover:text-pink-500">
              <a href="#"></a>About
            </li>
            <li className="hover:text-pink-500">
              <a href="#"></a>Contact
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
                <a href="#">Home</a>
              </li>

              <li>
                <a href="#">Technologies</a>
              </li>

              <li>
                <a href="#">Projects</a>
              </li>

              <li>
                <a href="#">About</a>
              </li>

              <li>
                <a href="#">Contact</a>
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
