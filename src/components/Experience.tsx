export default function Experience() {
  const experiences = [
    {
      period: "2024 — PRESENT",
      position: "Senior Frontend Engineer, Accessibility",
      company: "Example Company",
      companyUrl: "https://www.example.com/",
      description: "Build and maintain critical components used to construct the company's frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.",
      technologies: ["JavaScript", "TypeScript", "React", "Storybook"]
    },
    {
      period: "2018 — 2024",
      position: "Lead Engineer",
      company: "Digital Studio",
      companyUrl: "https://upstatement.com/",
      description: "Build, style, and ship high-quality websites, design systems, mobile apps, and digital experiences for a diverse array of projects for clients. Provide leadership within engineering department through close collaboration, knowledge shares, and spearheading the development of internal tools.",
      technologies: ["JavaScript", "TypeScript", "HTML & SCSS", "React", "Next.js", "React Native", "WordPress", "Contentful", "Node.js", "PHP"]
    },
    {
      period: "2016 — 2017",
      position: "UI Engineer Co-op",
      company: "Tech Corporation",
      companyUrl: "https://www.apple.com/apple-music/",
      description: "Developed and styled interactive web apps for music streaming service, including the user interface of embeddable web player widget for in-browser user authorization and full song playback.",
      technologies: ["Ember", "SCSS", "JavaScript", "MusicKit.js"],
      links: [
        {
          text: "MusicKit.js",
          url: "https://developer.apple.com/documentation/musickitjs"
        }
      ]
    },
    {
      period: "JULY — DEC 2016",
      position: "Developer",
      company: "Scout Studio",
      companyUrl: "https://scout.camd.northeastern.edu/",
      description: "Collaborated with other student designers and engineers on pro-bono projects to create new brands, design systems, and websites for organizations in the community.",
      technologies: ["Jekyll", "SCSS", "JavaScript", "WordPress"]
    },
    {
      period: "JULY — DEC 2015",
      position: "Software Engineer Co-op",
      company: "Startup Inc",
      companyUrl: "https://starry.com/",
      description: "Worked with the UI team to engineer and improve major features of the customer-facing mobile app.",
      technologies: ["Cordova", "Backbone", "JavaScript", "CSS"],
      links: [
        {
          text: "Android App",
          url: "#"
        },
        {
          text: "Feature Update",
          url: "#"
        }
      ]
    }
  ];

  return (
    <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Work experience">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-gradient-to-r from-slate-900/90 to-purple-900/20 backdrop-blur px-6 py-5 md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-purple-300 lg:sr-only">Experience</h2>
      </div>
      
      <div>
        <ol className="group/list">
          {experiences.map((exp, index) => (
            <li key={index} className="mb-12">
              <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-gradient-to-r lg:group-hover:from-purple-900/20 lg:group-hover:to-indigo-900/20 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(168,85,247,0.1)] lg:group-hover:drop-shadow-lg"></div>
                
                <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label={exp.period}>
                  {exp.period}
                </header>
                
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-slate-200">
                    <div>
                      <a
                        className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-purple-300 focus-visible:text-purple-300 group/link text-base transition-colors duration-300"
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
                  
                  <p className="mt-2 text-sm leading-normal text-slate-300">{exp.description}</p>
                  
                  {exp.links && (
                    <ul className="mt-2 flex flex-wrap" aria-label="Related links">
                      {exp.links.map((link, linkIndex) => (
                        <li key={linkIndex} className="mr-4">
                          <a
                            className="relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-purple-300 focus-visible:text-purple-300 transition-colors duration-300"
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
                        <div className="flex items-center rounded-full bg-gradient-to-r from-purple-500/20 to-indigo-500/20 px-3 py-1 text-xs font-medium leading-5 text-purple-200 border border-purple-500/30 hover:border-purple-400/50 transition-colors duration-300">
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
            className="inline-flex items-center font-medium leading-tight text-slate-200 font-semibold text-slate-200 group hover:text-purple-300 transition-colors duration-300"
            aria-label="View Full Résumé (opens in a new tab)"
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer noopener"
          >
            <span>
              <span className="border-b border-transparent pb-px transition group-hover:border-purple-300 motion-reduce:transition-none">
                View Full
              </span>
              <span className="whitespace-nowrap">
                <span className="border-b border-transparent pb-px transition group-hover:border-purple-300 motion-reduce:transition-none">
                  Résumé
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
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
