"use client";

import { useEffect, useState } from "react";

type NavLink = {
  id: string;
  label: string;
};

const navLinks: NavLink[] = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "project", label: "Projects" },
];

export default function Nav() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const link of navLinks) {
        const element = document.getElementById(link.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(link.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (sectionId: string): void => {
    setActiveSection(sectionId);
  };

  return (
    <nav className="lg:block hidden">
      <ul className="space-y-5 mt-20 text-gray-400">
        {navLinks.map((link) => (
          <li key={link.id} className="flex items-center gap-2">
            <div
              className={`${
                activeSection === link.id
                  ? "w-20 border-white"
                  : "w-10 border-gray-400"
              } border-b transition-all duration-500 hover:border-white`}
            ></div>
            <a
              href={`#${link.id}`}
              onClick={() => handleClick(link.id)}
              className={`hover:text-white transition-colors duration-500 ${
                activeSection === link.id ? "text-white font-medium" : ""
              }`}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
