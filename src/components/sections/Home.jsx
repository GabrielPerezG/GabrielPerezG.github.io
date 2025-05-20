import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-700 to-pink-400 bg-clip-text text-transparent leading-right">
            Hi, I'm Gabriel!
          </h1>

          <p className="text-[#6255ec] text-lg mb-8 max-w-lg mx-auto">
            I'm a JavaScript developer passionate about creating responsive, 
            interactive web applications using modern tools like 
            React, Tailwind, and MongoDB. Strong foundation in front-end
            design and a quick learner with a drive to grow in full-stack
            development.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-[#5B21B6] text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-[#BF00FF]/50 text-[#BF00FF] py-3 px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};