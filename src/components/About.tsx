const About = () => {
  return (
    <div id="about" className="flex w-full justify-center items-center">
      <div className="container mx-auto px-4">
        <h2 className="font-exo text-3xl text-white">About</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 border-b border-gray-500">
          <div className="flex flex-col lg:border-r lg:border-gray-500 p-0 lg:p-10">
            <div className="w-full pb-5 border-b border-gray-500">
              <p className="font-exo-italic text-red-600 mt-3 mr-3 text-sm md:text-lg">
                I have extensive experience as a Full Stack Developer, working on diverse projects that honed my skills in backend and frontend development. This background enables
                me to approach problems with clarity and create efficient, user-focused solutions tailored to project needs.
              </p>
            </div>
            <div className="flex flex-col items-start mt-4 pb-4 border-b border-gray-500 lg:border-none">
              <div className="text-white flex flex-col items-start gap-y-5 text-xs md:text-lg">
                <div className="flex items-center justify-start gap-2">
                  <h3 className="font-exo-italic text-sky-500">Programming Languages: </h3>
                  <span>JavaScript, TypeScript, C#, Python</span>
                </div>
                <div className="flex items-center justify-start gap-2">
                  <h3 className="font-exo-italic text-sky-500">Frontend: </h3>
                  <span>React, Next.js, Vite, HTML, CSS, TailwindCSS</span>
                </div>
                <div className="flex items-center justify-start gap-2">
                  <h3 className="font-exo-italic text-sky-500">Backend: </h3>
                  <span>.NET, Node.js, Django, SQL (PostgreSQL, MSSQL, MongoDB)</span>
                </div>
                <div className="flex items-center justify-start gap-2">
                  <h3 className="font-exo-italic text-sky-500">Tools: </h3>
                  <span>VSCode, Jetbrains, Postman, Git, Terminal</span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-white space-y-10 mb-4 p-0 lg:p-10">
            <h2 className="text-2xl">Experience</h2>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-emerald-400">Lmxai</h3>
              <div className="flex items-center justify-between text-sm md:text-lg text-sky-500">
                <h4>Backend Developer - Intern</h4>
                <span>May 2024 - Oct 2024</span>
              </div>
              <p className="font-exo-italic text-yellow-300 text-sm md:text-lg">
                I contributed to the backend development of an AI-powered project designed for schools. My responsibilities included implementing authentication processes and
                managing features like course statistics. The project utilized Django Rest Framework and PostgreSQL to ensure efficient and scalable solutions.
              </p>
            </div>
          </div>
        </div>
        <div className="py-4 space-y-5 p-0 lg:p-10">
          <h2 className="text-2xl text-white">Education & Certifications</h2>
          <div className="flex items-center justify-between flex-wrap gap-5">
            <div>
              <div className="text-white">
                <h4 className="text-sky-500">Computer Programming</h4>
                <h5 className="text-emerald-400">Anadolu University</h5>
                <span className="text-sm">2022 - Current</span>
              </div>
            </div>
            <div>
              <div className="text-white">
                <h4 className="text-sky-500">Full Stack Developer Certificate</h4>
                <h5 className="text-emerald-400">TechPro Education</h5>
              </div>
            </div>
            <div>
              <div className="text-white">
                <h4 className="text-sky-500">ASP.NET Certificate</h4>
                <h5 className="text-emerald-400">BTK Akademi</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
