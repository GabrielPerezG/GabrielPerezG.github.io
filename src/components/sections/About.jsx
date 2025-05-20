import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-[#BF00FF] to-cyan-700 bg-clip-text text-transparent text-center">
            Skills
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass p-6 rounded-xl border border-white/10 transition-all hover:-translate-y-1 hover:border-purple-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]">
              <h3 className="text-xl font-bold mb-4">Traits</h3>
              <div className="flex flex-wrap gap-2">
                {["Adaptable", "Team Player", "Creative", "Problem Solver", "Passionate"].map((trait, key) => (
                  <span
                    key={key}
                    className="bg-purple-500/10 text-purple-400 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 transition"
                  >
                    {trait}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass p-6 rounded-xl border border-white/10 transition-all hover:-translate-y-1 hover:border-purple-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]">
              <h3 className="text-xl font-bold mb-4">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {["Windows", "React", "MongoDB", "TailwindCSS", "Node.js", "Bootstrap", "MySQL", "Express"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-purple-500/10 text-purple-400 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass p-6 rounded-xl border border-white/10 transition-all hover:-translate-y-1 hover:border-purple-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]">
              <h3 className="text-xl font-bold mb-4">Tools</h3>
              <div className="flex flex-wrap gap-2">
                {["VSCode", "GitHub", "PowerShell", "VirtualBox"].map((tool, key) => (
                  <span
                    key={key}
                    className="bg-purple-500/10 text-purple-400 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 transition"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass p-6 rounded-xl border border-white/10 transition-all hover:-translate-y-1 hover:border-purple-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]">
              <h3 className="text-xl font-bold mb-4">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {["JavaScript", "TypeScript", "HTML5", "CSS3", "PHP"].map((lang, key) => (
                  <span
                    key={key}
                    className="bg-purple-500/10 text-purple-400 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 transition"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <br></br>
          <br></br>


          <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-[#BF00FF] to-cyan-700 bg-clip-text text-transparent text-center">
            Experience
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 mt-8">
            <div className="glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-purple-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                   <strong>West-MEC Coding Program</strong> — 
                  (2023-2025)
                </li>
                <li>
                  Relevant Coursework: Data Structures, Web Development, Web Design
                </li>
              </ul>
            </div>

          <div className="glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-purple-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all">
            <h3 className="text-xl font-bold mb-4"> 📜 Certifications </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>CERTIPORT Information Technology Specialist - HTML5 Web</li>
                <li>CERTIPORT Information Technology Specialist - JavaScript</li>
              </ul>
          </div>

          <div className="glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-purple-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all">
            <h3 className="text-xl font-bold mb-4"> 🎯 Volunteer Work </h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Assisted a custom car design for the West-Mec Trunk or Treat and stayed to pass out candy and host minigames for 2 years in a row (2023-2025)</li>
                  <li>Volunteered at Dysart Community Center's SummerCamp in El Mirage (2019)</li>
                </ul>
          </div>

            <div className="glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-purple-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Unemployed{" "}
                  </h4>
                  <p>
                    No past job experience
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};