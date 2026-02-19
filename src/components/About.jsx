import React from "react";

const About = () => {
  return (
    <section className="mb-24 sm:mb-32">
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-12 sm:mb-16">
        About
      </h2>
      <div className="space-y-6 sm:space-y-8">
        <p className="text-lg sm:text-xl md:text-2xl text-[#b0b0b0] leading-relaxed font-normal">
          Building scalable applications and backend systems with a strong understanding of API design
          and system architecture. I focus on writing clean, maintainable, and production-ready code.
        </p>
        <p className="text-lg sm:text-xl md:text-2xl text-[#b0b0b0] leading-relaxed font-normal">
          Currently working with modern technologies like React, Node.js, Django, and cloud platforms.
          I'm passionate about solving complex problems and have a strong background in competitive programming.
        </p>
        <p className="text-lg sm:text-xl md:text-2xl text-[#b0b0b0] leading-relaxed font-normal">
          You'll find me grinding on LeetCode, pushing code to{" "}
          <a
            href="https://github.com/shub-10"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#3b82f6] transition-all duration-300 relative inline-block font-semibold group"
          >
            <span className="border-b-2 border-[#3b82f6] group-hover:border-white pb-1">
              GitHub
            </span>
          </a>
          , or you can always reach me at{" "}
          <a
            href="mailto:shubham109yadav@gmail.com"
            className="text-white hover:text-[#3b82f6] transition-all duration-300 relative inline-block font-semibold group"
          >
            <span className="border-b-2 border-[#3b82f6] group-hover:border-white pb-1">
              shubham109yadav@gmail.com
            </span>
          </a>
          .
        </p>
      </div>
    </section>
  );
};

export default About;