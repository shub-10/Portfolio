import React from "react";

const Hero = () => {
  return (
    <section className="min-h-[85vh] flex flex-col justify-center mb-20 sm:mb-32">
      <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white mb-6 sm:mb-8 tracking-tight leading-none">
        Shubham Kumar
      </h1>
      <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] mb-10 sm:mb-16 leading-tight">
        Full-Stack Software Engineer.
      </p>
      <p className="text-xl sm:text-2xl md:text-3xl text-[#c0c0c0] leading-relaxed max-w-4xl font-medium">
        I like being the person who turns ideas into scalable, production-ready solutions.
      </p>
    </section>
  );
};

export default Hero;