import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import Nav from "../nav";

export default function Hero() {
  return (
    <section className="lg:h-screen flex flex-col gap-6 justify-between items-start lg:pb-20">
      <div>
        <div>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Pusaka Manggala
          </h1>
          <h2 className="text-xl font-medium mt-1">Front-end Developer</h2>
          <p className="mt-3 max-w-[300px] text-gray-400">
            Crafting pixels, shaping experiences, and turning ideas into
            interactive realities
          </p>
        </div>
        <Nav />
      </div>
      <ul className="flex items-center gap-5 list-none">
        <li>
          <a
            href="https://github.com/pusakamanggala"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-end gap-2"
            title="Visit pusakamanggala's GitHub profile"
            aria-label="GitHub profile of pusakamanggala (opens in a new tab)"
          >
            <FaGithub className="text-2xl" aria-hidden="true" />
            <span className="text-[15px] flex items-center gap-1">
              GitHub
              <FiExternalLink aria-hidden="true" />
            </span>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/pusakamanggala/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-end gap-2"
            title="Visit pusakamanggala's Linkedin profile"
            aria-label="Linkedin profile of pusakamanggala (opens in a new tab)"
          >
            <FaLinkedin className="text-2xl" aria-hidden="true" />
            <span className="text-[15px] flex items-center gap-1">
              Linkedin
              <FiExternalLink aria-hidden="true" />
            </span>
          </a>
        </li>
      </ul>
    </section>
  );
}
