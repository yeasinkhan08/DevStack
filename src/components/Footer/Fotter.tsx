import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-[1250px] gap-10 px-5 py-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h2 className="text-xl font-bold text-white">Dev Stack</h2>

          <p className="mt-4 max-w-xs text-sm leading-6 text-slate-400">
            Build a development stack that fits your next project by exploring
            modern technologies in one place.
          </p>

          <div className="mt-5 flex gap-3">
            <a
              href="#"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 hover:bg-slate-700"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="#"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 hover:bg-slate-700"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>

            <a
              href="#"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 hover:bg-slate-700"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-white">Product</h3>

          <ul className="mt-4 space-y-3 text-sm text-slate-400">
            <li>
              <a href="#technologies" className="hover:text-white">
                Technologies
              </a>
            </li>

            <li>
              <a href="#projects" className="hover:text-white">
                Projects
              </a>
            </li>
          </ul>
        </div>

        <div id="about">
          <h3 className="font-semibold text-white">Company</h3>

          <ul className="mt-4 space-y-3 text-sm text-slate-400">
            <li>
              <a href="#about" className="hover:text-white">
                About
              </a>
            </li>

            <li>
              <a href="#contact" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-white">Legal</h3>

          <ul className="mt-4 space-y-3 text-sm text-slate-400">
            <li>
              <a href="#" className="hover:text-white">
                Privacy
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-white">
                Terms
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-[1250px] flex-col gap-3 px-5 py-5 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Dev Stack. All rights reserved.</p>

          <div className="flex gap-4">
            <a href="#" className="hover:text-white">
              Privacy
            </a>

            <a href="#" className="hover:text-white">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
