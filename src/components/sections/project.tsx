import Image from "next/image";
import { FiExternalLink } from "react-icons/fi";
import { projectData } from "@/data/project-data";

export default function Project() {
  return (
    <section id="project">
      <h2 className="section-title">PROJECTS</h2>
      <div className="space-y-4 lg:space-y-8">
        {projectData.map((project, index) => (
          <div key={index} className="space-y-2">
            <div className="flex gap-4 items-center">
              <Image
                src={project.image}
                width={130}
                height={70}
                alt={`${project.title} image`}
                className="w-[130px] h-[70px] object-cover"
              />
              <div>
                <h3 className="font-semibold">{project.title}</h3>
                {/* stack */}
                <div className="flex gap-2 mt-2 flex-wrap">
                  {project.stack.map((item, index) => (
                    <p
                      key={index}
                      className="px-2 border border-gray-400 text-sm font-medium text-gray-400 rounded-full"
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-400 font-light">{project.description}</p>
            {project.link && project.link.length > 0 && (
              <div className="flex gap-3 mt-2 flex-wrap justify-end mr-5">
                {project.link.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-end gap-2 text-gray-400 hover:text-white transition-colors duration-500"
                    title={`Visit ${project.title} ${item.name}`}
                  >
                    <span className="text-[15px] flex items-center gap-1">
                      {item.name}
                      <FiExternalLink aria-hidden="true" />
                    </span>
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
