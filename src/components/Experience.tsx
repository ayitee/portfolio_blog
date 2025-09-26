export default function Experience() {
  const experiences = [
    {
      period: "JULY 2025 — PRESENT",
      position: "Junior Full-stack Developer",
      company: "Capgemini",
  companyUrl: "https://www.capgemini.com/news/client-stories/cutting-shipping-emissions-with-a-data-driven-kite/#",
      description: "Working on the co-innovation project 'Beyond the Sea' with the startup Beyond the Sea. Developing a demonstration of kite sail control using augmented reality, joining the development team to create innovative maritime technology solutions.",
      technologies: ["JavaScript", "React", "Augmented Reality", "Full-stack Development"]
    },
    {
      period: "APRIL 2020 — PRESENT",
      position: "Video Game Developer (Freelance)",
      company: "Independent",
      companyUrl: "#",
      description: "Independent developer, tester, contributor, and creator of Roblox games with a monthly user base of approximately one million players. Successfully developed games with hundreds of thousands of monthly active users, gaining expertise in game development, design, project management, and community engagement.",
      technologies: ["GDScript", "Roblox Studio", "Lua", "Game Development", "UI/UX Design"],
      links: [
        {
          text: "Sample - Roblox Profile",
          url: "#"
        }
      ]
    },
    {
      period: "2020",
      position: "Frontend/Backend Developer Intern",
      company: "DIRISI",
      companyUrl: "#",
      description: "Fullstack development internship at Direction Interarmées des Réseaux d'Infrastructure et des Systèmes d'Information. Considered a kickstart and introduction to professional development with emphasis on web development and required tools.",
      technologies: ["Web Development", "Frontend", "Backend", "Sample - specific technologies not specified"]
    }
  ];

  return (
    <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Work experience">
  <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen backdrop-blur px-6 py-5 md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0"
       style={{background:'color-mix(in srgb, var(--color-bg-muted) 85%, transparent)'}}>
    <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only" style={{color:'var(--color-accent)'}}>Experience</h2>
      </div>
      
      <div>
        <ol className="group/list">
          {experiences.map((exp, index) => (
            <li key={index} className="mb-12">
              <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:shadow-[inset_0_1px_0_0_rgba(218,241,222,0.08)] lg:group-hover:drop-shadow-lg" style={{background:'color-mix(in srgb, var(--color-surface) 18%, transparent)'}}></div>
                
                <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-[var(--color-text)] opacity-60 sm:col-span-2" aria-label={exp.period}>
                  {exp.period}
                </header>
                
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-[var(--color-text)] opacity-90">
                    <div>
                      <a
                        className="inline-flex items-baseline font-medium leading-tight text-[var(--color-text)] opacity-90 hover:opacity-100 group/link text-base transition-colors duration-300"
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label={`${exp.position} at ${exp.company} (opens in a new tab)`}
                      >
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        <span>
                          {exp.position} at {exp.company}
                          <svg
                            className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </span>
                      </a>
                    </div>
                  </h3>
                  
                  <p className="mt-2 text-sm leading-normal text-[var(--color-text)] opacity-70">{exp.description}</p>
                  
                  {exp.links && (
                    <ul className="mt-2 flex flex-wrap" aria-label="Related links">
                      {exp.links.map((link, linkIndex) => (
                        <li key={linkIndex} className="mr-4">
                          <a
                            className="relative mt-2 inline-flex items-center text-sm font-medium text-[var(--color-text)] opacity-80 hover:opacity-100 transition-colors duration-300"
                            href={link.url}
                            target="_blank"
                            rel="noreferrer noopener"
                            aria-label={`${link.text} (opens in a new tab)`}
                          >
                            <svg
                              className="mr-1 h-3 w-3"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                            <span>{link.text}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                  
                  <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                    {exp.technologies.map((tech, techIndex) => (
                      <li key={techIndex} className="mr-1.5 mt-2">
            <div className="flex items-center rounded-full px-3 py-1 text-xs font-medium leading-5 border transition-colors duration-300"
              style={{background:'color-mix(in srgb, var(--color-surface) 20%, transparent)', color:'var(--color-text)', borderColor:'color-mix(in srgb, var(--color-surface-2) 50%, transparent)'}}>
                          {tech}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ol>
        
        <div className="mt-12">
          <a
            className="inline-flex items-center font-medium leading-tight text-[var(--color-text)] opacity-90 group hover:opacity-100 transition-colors duration-300"
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer noopener"
          >
            <span className="border-b border-transparent pb-px transition group-hover:border-[color:var(--color-accent)] motion-reduce:transition-none whitespace-nowrap">
              View Full Résumé
            </span>
            <svg
              className="ml-1 inline-block h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-focus-visible:-translate-y-1 group-focus-visible:translate-x-1 motion-reduce:transition-none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
