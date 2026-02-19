import React from "react";
import { ArrowUpRight } from "lucide-react";

const Experience = () => {
  return (
    <section className="mb-24 sm:mb-32">
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
        Experience
      </h2>
      <p className="text-lg sm:text-xl text-[#888888] mb-12 sm:mb-16 font-medium">Work experience and roles</p>

      <div className="space-y-16">
        <div className="group">
          <div className="flex items-start justify-between mb-6">
            <a
              href="https://drive.google.com/file/d/1judj0pWqeSR_nqbj7sQgGrLAKe8vZ6lL/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-3xl sm:text-4xl md:text-5xl text-white hover:text-[#3b82f6] transition-colors duration-300 font-bold"
            >
              <span>Maruti Suzuki India Ltd</span>
              <ArrowUpRight className="w-7 h-7 sm:w-8 sm:h-8 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </a>
          </div>
          <p className="text-base sm:text-lg md:text-xl text-[#888888] mb-8 font-medium">
            Software Development Intern • Gurgaon, India • Feb 2025 - Aug 2025
          </p>

          <div className="border-l-4 border-[#3b82f6] pl-6 sm:pl-8 space-y-6 bg-[#0f0f0f] py-6 sm:py-8 pr-4 sm:pr-6 rounded-r-lg">
            <ul className="space-y-5 sm:space-y-6">
              <li className="text-base sm:text-lg md:text-xl text-[#c0c0c0] leading-relaxed font-normal hover:text-white transition-colors duration-300">
                • Developed and deployed a full-stack internal data portal using Django, JavaScript,
                and Databricks, integrating multiple data services into a unified platform.
              </li>
              <li className="text-base sm:text-lg md:text-xl text-[#c0c0c0] leading-relaxed font-normal hover:text-white transition-colors duration-300">
                • Integrated secure user authentication with Lightweight Directory Access Protocol
                (LDAP), enhancing system security and access control.
              </li>
              <li className="text-base sm:text-lg md:text-xl text-[#c0c0c0] leading-relaxed font-normal hover:text-white transition-colors duration-300">
                • Designed and optimized RESTful APIs using Django ORM to handle high-volume data
                queries from Databricks and MySQL for real-time analytics.
              </li>
              <li className="text-base sm:text-lg md:text-xl text-[#c0c0c0] leading-relaxed font-normal hover:text-white transition-colors duration-300">
                • Translated Business Requirement Documents (BRD) into functional workflows,
                reducing manual request processing time by up to 50%.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;