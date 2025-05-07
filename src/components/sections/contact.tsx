import { CgMail } from "react-icons/cg";
import { FiExternalLink } from "react-icons/fi";

export default function Contact() {
  return (
    <section id="contact">
      <p className="text-gray-400 font-normal">
        <span className="text-white font-normal text-lg">
          Got a project that needs a front-end developer?
        </span>{" "}
        I’m available for freelance work and collaborations. Let’s connect and
        create something awesome together!
      </p>
      <a
        href="mailto:pusakamanggala@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 mt-2"
        title="Send pusakamanggala an email"
        aria-label="Email pusakamanggala (opens in a new tab)"
      >
        <CgMail className="text-3xl" aria-hidden="true" />
        <span className="flex items-center gap-1">
          Say Helllo
          <FiExternalLink aria-hidden="true" />
        </span>
      </a>
    </section>
  );
}
