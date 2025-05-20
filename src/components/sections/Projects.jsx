import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-[#BF00FF] to-cyan-700 bg-clip-text text-transparent text-center">
            {" "}
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-purple-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2"> Invasion</h3>
              <p className="text-gray-400 mb-4">
                 A small solo project where I practice simple game aspects using 
                 Canvas to make a small game inspired off of the original 
                 1978 Space Invaders. This was one of my first projects that I 
                 did alone, I worked on this while brute forcing a concept I
                 didn't think I could accomplish, so it holds great value to me 
                 due to its somewhat success back when I was new to programming as a whole.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Canvas", "JavaScript"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-purple-500/10 text-purple-400 py-1 px-3 
                      rounded-full text-sm transition 
                      hover:bg-purple-500/20 hover:-translate-y-0.5 
                      hover:shadow-[0_2px_8px_rgba(192,132,252,0.3)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/GabrielPerezG/invasion"
                  className="text-purple-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-purple-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Laravel Task App</h3>
              <p className="text-gray-400 mb-4">
              Using laravel and php, created a simple task managing app that allows 
              to write down tasks, edit, and delete them whenever needed to help 
              manage your daily routine better. This was made in laravel and sqlite
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["PHP", "Blade", "Laravel", "Sqlite"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-purple-500/10 text-purple-400 py-1 px-3 
                      rounded-full text-sm transition 
                      hover:bg-purple-500/20 hover:-translate-y-0.5 
                      hover:shadow-[0_2px_8px_rgba(192,132,252,0.3)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/GabrielPerezG/laravel-task-app"
                  className="text-purple-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-purple-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Deelish</h3>
              <p className="text-gray-400 mb-4">
                 This was a collaborative group project assigned my team 
                 and we worked together to bring a website to publicly list 
                 and display recipes for anyone to see and showcase the final product. 
                 I was the Database Manager within the group. I created most of the 
                 form page and I helped fix alot of errors found within the code
                 and overall this was a fun experience with my group 
                 and I'm happy with the state our project is at.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["HTML", "JavaScript", "Express", "JSON"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="
                      bg-purple-500/10 text-purple-400 py-1 px-3 
                      rounded-full text-sm transition 
                      hover:bg-purple-500/20 hover:-translate-y-0.5 
                      hover:shadow-[0_2px_8px_rgba(192,132,252,0.3)]
                    "
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/GabrielPerezG/Deelish"
                  className="text-purple-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-purple-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Calculator</h3>
              <p className="text-gray-400 mb-4">
                A responsive web-based calculator built using HTML, CSS, and JavaScript. 
                It performs basic equations: addition, subtraction, multiplication, and division.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["HTML", "CSS", "JavaScript"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-purple-500/10 text-purple-400 py-1 px-3 
                      rounded-full text-sm transition 
                      hover:bg-purple-500/20 hover:-translate-y-0.5 
                      hover:shadow-[0_2px_8px_rgba(192,132,252,0.3)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center ">
                <a
                  href="https://github.com/GabrielPerezG/calculator"
                  className="text-purple-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
            <div className="
            p-6 rounded-xl border border-white/10 
            hover:-translate-y-1 hover:border-purple-500/30 
            hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] 
            transition">
              <h3 className="text-xl font-bold mb-2"> MECAZON</h3>
              <p className="text-gray-400 mb-4">
                This was a major project that involved our entire class as a test to be able 
                to be split into different groups and collaboratively be able to combine 
                each respective team's work to complie a functional website, I was assigned into 
                a team focused on the backend of this major project, I used schemas and MongoDB 
                to save to the database and to list products, customers, and employees respectively.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["JavaScript", "MongoDB"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-purple-500/10 text-purple-400 py-1 px-3 
                      rounded-full text-sm transition 
                      hover:bg-purple-500/20 hover:-translate-y-0.5 
                      hover:shadow-[0_2px_8px_rgba(192,132,252,0.3)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/GabrielPerezG/3pm-teamC-MECAZON-server-dev"
                  className="text-purple-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-purple-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2"> Soccer Game</h3>
              <p className="text-gray-400 mb-4">
                 This was a test for collisions and inputs which were later implemented 
                 into future projects like Invasion, this is one of my earlier projects when I was a novice
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Canvas", "JavaScript"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-purple-500/10 text-purple-400 py-1 px-3 
                      rounded-full text-sm transition 
                      hover:bg-purple-500/20 hover:-translate-y-0.5 
                      hover:shadow-[0_2px_8px_rgba(192,132,252,0.3)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/Gabriel-WestMec/soccer-game"
                  className="text-purple-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};