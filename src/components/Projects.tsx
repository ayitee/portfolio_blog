// Removed unused import

export default function Projects() {
  const projects = [
    {
      title: "Build a Modern Web App",
      description: "A comprehensive course that teaches how to build a web app with modern technologies. Topics covered include React, Next.js, TypeScript, and best practices for performance and accessibility.",
      image: "/project1.jpg",
      url: "https://example.com/course",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website built with Next.js and Tailwind CSS. Features include smooth animations, dark mode, and optimized performance for showcasing projects and experience.",
      image: "/project2.jpg",
      url: "https://example.com/portfolio",
      technologies: ["Next.js", "React", "Tailwind CSS", "Framer Motion"]
    },
    {
      title: "Design System",
      description: "A comprehensive design system and component library built for scalable web applications. Includes accessible components, design tokens, and comprehensive documentation.",
      image: "/project3.jpg",
      url: "https://example.com/design-system",
      technologies: ["React", "Storybook", "TypeScript", "CSS-in-JS"]
    },
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce platform with modern UI/UX, payment integration, and admin dashboard. Built with focus on performance, accessibility, and user experience.",
      image: "/project4.jpg",
      url: "https://example.com/ecommerce",
      technologies: ["Next.js", "Node.js", "PostgreSQL", "Stripe"]
    }
  ];

  return (
    <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Selected projects">
  <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen backdrop-blur px-6 py-5 md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0"
       style={{background:'color-mix(in srgb, var(--color-bg-muted) 85%, transparent)'}}>
    <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only" style={{color:'var(--color-accent)'}}>Projects</h2>
      </div>
      
      <div>
        <ul className="group/list">
          {projects.map((project, index) => (
            <li key={index} className="mb-12">
              <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:shadow-[inset_0_1px_0_0_rgba(218,241,222,0.08)] lg:group-hover:drop-shadow-lg" style={{background:'color-mix(in srgb, var(--color-surface) 18%, transparent)'}}></div>
                
                <div className="z-10 sm:order-2 sm:col-span-6">
                  <h3>
                    <a
                      className="inline-flex items-baseline font-medium leading-tight text-[var(--color-text)] opacity-90 hover:opacity-100 group/link text-base transition-colors duration-300"
                      href={project.url}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={`${project.title} (opens in a new tab)`}
                    >
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                      <span>
                        {project.title}
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
                  </h3>
                  
                  <p className="mt-2 text-sm leading-normal text-[var(--color-text)] opacity-70">{project.description}</p>
                  
                  <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                    {project.technologies.map((tech, techIndex) => (
                      <li key={techIndex} className="mr-1.5 mt-2">
            <div className="flex items-center rounded-full px-3 py-1 text-xs font-medium leading-5 border transition-colors duration-300"
              style={{background:'color-mix(in srgb, var(--color-surface) 20%, transparent)', color:'var(--color-text)', borderColor:'color-mix(in srgb, var(--color-surface-2) 50%, transparent)'}}>
                          {tech}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="z-10 sm:order-1 sm:col-span-2">
                  <div className="relative">
                    <div className="border-2 rounded overflow-hidden transition-colors duration-300"
                      style={{borderColor:'color-mix(in srgb, var(--color-surface-2) 25%, transparent)'}}>
                      {/* Placeholder for project image */}
                      <div className="aspect-video flex items-center justify-center" style={{background:'color-mix(in srgb, var(--color-surface) 40%, transparent)'}}>
                        <div className="text-[var(--color-text)] opacity-60 text-sm">Project Image</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
        
        <div className="mt-12">
          <a
            className="inline-flex items-center font-medium leading-tight text-[var(--color-text)] opacity-90 group hover:opacity-100 transition-colors duration-300"
            aria-label="View Full Project Archive"
            href="/archive"
          >
            <span>
              <span className="border-b border-transparent pb-px transition group-hover:border-[color:var(--color-accent)] motion-reduce:transition-none">
                View Full Project
              </span>
              <span className="whitespace-nowrap">
                <span className="border-b border-transparent pb-px transition group-hover:border-[color:var(--color-accent)] motion-reduce:transition-none">
                  Archive
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
