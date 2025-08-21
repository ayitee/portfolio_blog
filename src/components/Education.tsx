export default function Education() {
  const education = [
    {
      period: "2024 — 2029",
      degree: "Master of Science Business & Technology Manager",
      field: "Informatique",
      school: "EPITECH",
      schoolUrl: "https://www.epitech.eu/",
      description: "Currently pursuing a Master of Science in Business & Technology Management with a focus on computer science and information technology.",
      technologies: ["Computer Science", "Technology Management", "Business Strategy", "Software Engineering"]
    },
    {
      period: "2021 — 2024",
      degree: "Baccalauréat",
      field: "SES, NSI, AMC",
      school: "Lycée Fernand Daguin",
      schoolUrl: "#",
      description: "French high school diploma specializing in Computer Science, Economics & Social Sciences and English.",
      technologies: ["Economics", "Social Sciences", "Computer Science", "English"]
    }
  ];

  return (
    <section id="education" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Education">
  <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen backdrop-blur px-6 py-5 md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0"
       style={{background:'color-mix(in srgb, var(--color-bg-muted) 85%, transparent)'}}>
    <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only" style={{color:'var(--color-accent)'}}>Education</h2>
      </div>
      
      <div>
        <ol className="group/list">
          {education.map((edu, index) => (
            <li key={index} className="mb-12">
              <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:shadow-[inset_0_1px_0_0_rgba(218,241,222,0.08)] lg:group-hover:drop-shadow-lg" style={{background:'color-mix(in srgb, var(--color-surface) 18%, transparent)'}}></div>
                
                <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-[var(--color-text)] opacity-60 sm:col-span-2" aria-label={edu.period}>
                  {edu.period}
                </header>
                
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-[var(--color-text)] opacity-90">
                    <div>
                      <a
                        className="inline-flex items-baseline font-medium leading-tight text-[var(--color-text)] opacity-90 hover:opacity-100 transition-colors duration-300 group/link text-base"
                        href={edu.schoolUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label={`${edu.degree} at ${edu.school} (opens in a new tab)`}
                      >
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        <span>
                          {edu.degree} · {" "}
                          <span className="inline-block text-[var(--color-text)] opacity-80 font-semibold">
                            {edu.school}
                            <svg
                              className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
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
                        </span>
                      </a>
                    </div>
                    
                    <div className="text-[var(--color-text)] opacity-60 font-normal mt-1" aria-hidden="true">
                      {edu.field}
                    </div>
                  </h3>
                  
                  <p className="mt-2 text-sm leading-normal text-[var(--color-text)] opacity-70">{edu.description}</p>
                  
                  <ul className="mt-2 flex flex-wrap" aria-label="Technologies and subjects">
                    {edu.technologies.map((tech, techIndex) => (
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
      </div>
    </section>
  );
}
