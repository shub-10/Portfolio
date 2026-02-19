import React from "react";
import { Github, Code2, Trophy, Mail, Phone } from "lucide-react";

const Contact = () => {
  const links = [
    {
      name: "GitHub",
      url: "https://github.com/shub-10",
      icon: Github,
      handle: "@shub-10",
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com/kaptann",
      icon: Code2,
      handle: "@kaptann",
    },
    {
      name: "CodeForces",
      url: "https://codeforces.com/profile/kaptaann",
      icon: Trophy,
      handle: "@kaptaann",
    },
    {
      name: "Email",
      url: "mailto:shubham109yadav@gmail.com",
      icon: Mail,
      handle: "shubham109yadav@gmail.com",
    },
    {
      name: "Phone",
      url: "tel:+919306205958",
      icon: Phone,
      handle: "+91-9306205958",
    },
  ];

  return (
    <section className="mb-16 sm:mb-24">
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-12 sm:mb-16">
        Let's Connect
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {links.map((link, index) => {
          const Icon = link.icon;
          return (
            <a
              key={index}
              href={link.url}
              target={link.url.startsWith("http") ? "_blank" : undefined}
              rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group flex items-center gap-4 sm:gap-5 p-5 sm:p-6 bg-[#0f0f0f] rounded-xl border border-[#1a1a1a] hover:border-[#3b82f6] transition-all duration-300 hover:bg-[#151515]"
            >
              <div className="p-3 sm:p-4 bg-[#1a1a1a] rounded-lg group-hover:bg-[#3b82f6] transition-all duration-300">
                <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#3b82f6] group-hover:text-white transition-colors duration-300" />
              </div>
              <div className="flex-1">
                <p className="text-lg sm:text-xl font-semibold text-white mb-1">{link.name}</p>
                <p className="text-sm sm:text-base text-[#888888] group-hover:text-[#b0b0b0] transition-colors duration-300 font-medium break-all">
                  {link.handle}
                </p>
              </div>
              <ArrowUpRight className="w-5 h-5 text-[#888888] group-hover:text-[#3b82f6] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
            </a>
          );
        })}
      </div>

      <div className="mt-16 sm:mt-24 pt-8 border-t border-[#222222]">
        <p className="text-sm sm:text-base text-[#666666] font-medium">
          © 2025 Shubham Kumar. Built with React and TailwindCSS.
        </p>
      </div>
    </section>
  );
};

const ArrowUpRight = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M7 7h10v10" />
    <path d="M7 17 17 7" />
  </svg>
);

export default Contact;