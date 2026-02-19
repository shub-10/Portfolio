import React from "react";
import { ArrowUpRight } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Real-time Collaborative Whiteboard",
      period: "Sept 2025 - Dec 2025",
      tech: "MERN Stack, Tailwind CSS, Socket.io",
      description: [
        "Built a real-time collaborative whiteboard supporting multi-user drawing, text input, slide management, and live synchronization using Socket.io.",
        "Engineered device-agnostic canvas interactions using Pointer Events, enabling seamless drawing across desktop, mobile, and touch devices with high-DPI rendering support.",
        "Designed and optimized an image handling pipeline by exporting canvas snapshots via Multer memory streams to Cloudinary and persisting slide metadata in MongoDB.",
      ],
      link: "https://real-time-whiteboard-app-fawn.vercel.app/",
    },
    {
      title: "Sorting Visualizer",
      period: "June 2023 - Dec 2023",
      tech: "React, Tailwind CSS",
      description: [
        "Developed an interactive web application to visualize sorting algorithms (Bubble, Selection, Insertion, Merge, Quick) with smooth animations.",
        "Added customizable controls for visualization speed, array size, and sorting types, improving user engagement and learning outcomes.",
        "Displayed time complexity metrics for algorithms using React components, enabling side-by-side comparison for learning.",
      ],
      link: "https://sorting-visualizer-brown-ten.vercel.app/",
    },
  ];

  return (
    <section className="mb-24 sm:mb-32">
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-12 sm:mb-16">
        Projects
      </h2>

      <div className="space-y-12 sm:space-y-16">
        {projects.map((project, index) => (
          <div key={index} className="group bg-[#0f0f0f] p-6 sm:p-8 rounded-xl border border-[#1a1a1a] hover:border-[#3b82f6] transition-all duration-300">
            <div className="flex items-start justify-between mb-4">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-2xl sm:text-3xl md:text-4xl text-white hover:text-[#3b82f6] transition-colors duration-300 font-bold"
              >
                <span>{project.title}</span>
                <ArrowUpRight className="w-6 h-6 sm:w-7 sm:h-7 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </a>
            </div>
            <p className="text-base sm:text-lg text-[#888888] mb-2 font-medium">{project.period}</p>
            <p className="text-base sm:text-lg text-[#3b82f6] mb-6 font-semibold">{project.tech}</p>

            <div className="space-y-4">
              {project.description.map((desc, descIndex) => (
                <p
                  key={descIndex}
                  className="text-base sm:text-lg md:text-xl text-[#c0c0c0] leading-relaxed font-normal"
                >
                  • {desc}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;