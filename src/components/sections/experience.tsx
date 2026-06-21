export default function Experience() {
  return (
    <section id="experience">
      <h2 className="section-title">EXPERIENCE</h2>
      <div className="space-y-4">
        <div>
          <h3 className="font-semibold">
            Medior Front-End Developer • PT MEA Digital Marketing
          </h3>
          <p className="text-gray-400 text-sm">NOVEMBER 2025 - PRESENT</p>
          <p className="text-gray-400 mt-3 font-light">
            Developed and maintained multiple web applications and digital platforms, delivering new features, enhancements, and redesign implementations to improve functionality, performance, and user experience. Key contributions include the ongoing development and maintenance of{" "}
            <a
              href="https://linkreator.id/"
              className="text-white hover:text-teal-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkreator.id
            </a>
            , where I work on feature implementation, API integrations, performance optimization, and frontend improvements. Collaborated closely with designers and backend engineers to build responsive, scalable, and maintainable solutions while ensuring consistent quality across projects. Continuously contributed to platform enhancements, bug fixing, and frontend architecture improvements to support evolving business and user needs.
          </p>
        </div>
        <div>
          <h3 className="font-semibold">
            Front-end Developer • PT Awan Dinata Teknologi
          </h3>
          <p className="text-gray-400 text-sm">DECEMBER 2023 - AUGUST 2025</p>
          <ul className="list-disc ml-4 space-y-4 mt-3 experience-list">
            <li>
              <h3 className="text-base">
                Eka Jaya Berindo Driving School System
              </h3>
              <p className="text-gray-400 mt-1 font-light">
                Developed a comprehensive application system for Eka Jaya Berindo
                to streamline driving lesson appointments, accompanied by a CMS
                dashboard for efficient data and activity management. The system
                facilitates seamless coordination between students, instructors,
                and administrators, ensuring a structured and user-friendly
                experience. For instructors, the app provides functionalities to
                view assigned classes (appointments), manage car availability, and
                report incidents during lessons. Students can check their
                appointment schedules, submit feedback, track their driving lesson
                progress, and purchase lesson packages. Meanwhile, administrators
                have full control over managing student and instructor profiles,
                scheduling classes, overseeing car allocations, and handling
                driving lesson packages.
              </p>
            </li>
            <li>
              <h3 className="text-base">Persib Bandung Digital Platforms</h3>
              <p className="text-gray-400 mt-1 font-light">
                Developed new features and implemented redesigns across multiple
                Persib websites, including PlanetPersib.com and Persib.co.id,
                enhancing functionality, user experience and ensured better
                engagement. Key contributions included building a comprehensive
                article system with a dedicated CMS dashboard for streamlined
                content management on PlanetPersib.com, as well as creating an
                installment-based membership payment.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
