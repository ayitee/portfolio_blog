import Link from 'next/link'
import { Metadata } from 'next'
import AnimatedBackground from '@/components/AnimatedBackground'

export const metadata: Metadata = {
  title: 'Project Archive - Matis Gaudin',
  description: 'A comprehensive collection of projects showcasing web development expertise across various technologies and industries.',
  keywords: ['projects', 'portfolio', 'web development', 'react', 'nextjs', 'typescript'],
}

export default function Archive() {
  const projects = [
    {
      year: "2025",
      title: "Modern Portfolio Website",
      description: "A responsive portfolio website built with Next.js, featuring smooth animations and optimized performance.",
      builtAt: "Personal Project",
      technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
      links: {
        github: "https://github.com/username/portfolio",
        live: "https://portfolio.example.com"
      }
    },
    {
      year: "2025",
      title: "E-commerce Dashboard",
      description: "A comprehensive admin dashboard for managing e-commerce operations with real-time analytics.",
      builtAt: "TechCorp Inc.",
      technologies: ["React", "Node.js", "PostgreSQL", "Chart.js"],
      links: {
        github: "https://github.com/username/ecommerce-dashboard"
      }
    },
    {
      year: "2024",
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates and team collaboration features.",
      builtAt: "Startup Solutions",
      technologies: ["Vue.js", "Express", "MongoDB", "Socket.io"],
      links: {
        github: "https://github.com/username/task-manager",
        live: "https://taskmanager.example.com"
      }
    },
    {
      year: "2024",
      title: "Weather Forecast Widget",
      description: "A customizable weather widget with location-based forecasts and beautiful visual representations.",
      builtAt: "Personal Project",
      technologies: ["JavaScript", "CSS3", "Weather API"],
      links: {
        github: "https://github.com/username/weather-widget",
        live: "https://weather.example.com"
      }
    },
    {
      year: "2024",
      title: "Blog CMS Platform",
      description: "A headless CMS for managing blog content with markdown support and SEO optimization.",
      builtAt: "Digital Agency",
      technologies: ["Next.js", "Strapi", "PostgreSQL", "Markdown"],
      links: {
        github: "https://github.com/username/blog-cms"
      }
    },
    {
      year: "2023",
      title: "Recipe Sharing Platform",
      description: "A community-driven platform for sharing and discovering recipes with social features.",
      builtAt: "FoodTech Inc.",
      technologies: ["React", "Firebase", "Cloud Functions", "Algolia"],
      links: {
        github: "https://github.com/username/recipe-platform",
        live: "https://recipes.example.com"
      }
    },
    {
      year: "2023",
      title: "Cryptocurrency Tracker",
      description: "Real-time cryptocurrency price tracker with portfolio management and alerts.",
      builtAt: "Personal Project",
      technologies: ["React", "Redux", "CoinGecko API", "Chart.js"],
      links: {
        github: "https://github.com/username/crypto-tracker",
        live: "https://crypto.example.com"
      }
    },
    {
      year: "2023",
      title: "Learning Management System",
      description: "An educational platform for online courses with progress tracking and interactive content.",
      builtAt: "EduTech Solutions",
      technologies: ["Angular", "Node.js", "MySQL", "Video.js"],
      links: {
        github: "https://github.com/username/lms-platform"
      }
    },
    {
      year: "2022",
      title: "Social Media Analytics Tool",
      description: "Analytics dashboard for social media managers to track engagement and performance metrics.",
      builtAt: "Marketing Agency",
      technologies: ["React", "D3.js", "Python", "FastAPI"],
      links: {
        github: "https://github.com/username/social-analytics"
      }
    },
    {
      year: "2022",
      title: "Expense Tracker Mobile App",
      description: "Cross-platform mobile app for tracking personal expenses with categorization and budgeting.",
      builtAt: "Personal Project",
      technologies: ["React Native", "Expo", "SQLite", "AsyncStorage"],
      links: {
        github: "https://github.com/username/expense-tracker"
      }
    }
  ];

  // Group projects by year
  const projectsByYear = projects.reduce((acc, project) => {
    if (!acc[project.year]) {
      acc[project.year] = [];
    }
    acc[project.year].push(project);
    return acc;
  }, {} as Record<string, typeof projects>);

  return (
    <div className="relative min-h-screen text-slate-300 antialiased selection:bg-slate-400 selection:text-slate-900">
      {/* Interactive animated background */}
      <AnimatedBackground />
      
      <div className="relative mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24">
        {/* Header */}
        <div className="mb-16">
          <Link 
            href="/"
            className="inline-flex items-center font-medium text-slate-300 hover:text-white transition-colors duration-300 mb-8"
          >
            <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Home
          </Link>
          
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl bg-gradient-to-r from-slate-400 via-slate-300 to-slate-400 bg-clip-text text-transparent">
            Project Archive
          </h1>
          
          <p className="mt-4 text-lg text-slate-300 max-w-2xl">
            A comprehensive collection of projects I've worked on over the years, ranging from personal experiments to production applications.
          </p>
        </div>

        {/* Projects Table */}
        <div className="space-y-12">
          {Object.entries(projectsByYear)
            .sort(([a], [b]) => parseInt(b) - parseInt(a))
            .map(([year, yearProjects]) => (
              <div key={year}>
                <h2 className="text-2xl font-bold text-slate-200 mb-8 sticky top-0 bg-gradient-to-r from-slate-900/90 to-slate-800/20 backdrop-blur py-4 z-10">
                  {year}
                </h2>
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-slate-700/50">
                        <th className="text-left py-4 px-2 text-sm font-semibold text-slate-400 uppercase tracking-wide">
                          Project
                        </th>
                        <th className="text-left py-4 px-2 text-sm font-semibold text-slate-400 uppercase tracking-wide hidden md:table-cell">
                          Built At
                        </th>
                        <th className="text-left py-4 px-2 text-sm font-semibold text-slate-400 uppercase tracking-wide hidden lg:table-cell">
                          Technologies
                        </th>
                        <th className="text-left py-4 px-2 text-sm font-semibold text-slate-400 uppercase tracking-wide">
                          Links
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {yearProjects.map((project, index) => (
                        <tr key={index} className="group border-b border-slate-800/50 hover:bg-gradient-to-r hover:from-slate-800/10 hover:to-slate-700/10 transition-colors duration-300">
                          <td className="py-6 px-2">
                            <div>
                              <h3 className="text-slate-200 font-medium group-hover:text-slate-100 transition-colors duration-300">
                                {project.title}
                              </h3>
                              <p className="text-sm text-slate-400 mt-1 max-w-md">
                                {project.description}
                              </p>
                              <div className="md:hidden mt-2">
                                <span className="text-xs text-slate-500">{project.builtAt}</span>
                              </div>
                              <div className="lg:hidden mt-2 flex flex-wrap gap-1">
                                {project.technologies.slice(0, 3).map((tech, techIndex) => (
                                  <span key={techIndex} className="inline-flex items-center rounded-full bg-slate-800/50 px-3 py-1 text-xs text-slate-400">
                                    {tech}
                                  </span>
                                ))}
                                {project.technologies.length > 3 && (
                                  <span className="inline-flex items-center rounded-full bg-slate-800/50 px-3 py-1 text-xs text-slate-400">
                                    +{project.technologies.length - 3}
                                  </span>
                                )}
                              </div>
                            </div>
                          </td>
                          <td className="py-6 px-2 hidden md:table-cell">
                            <span className="text-sm text-slate-400">{project.builtAt}</span>
                          </td>
                          <td className="py-6 px-2 hidden lg:table-cell">
                            <div className="flex flex-wrap gap-1">
                              {project.technologies.map((tech, techIndex) => (
                                <span key={techIndex} className="inline-flex items-center rounded-full bg-gradient-to-r from-slate-600/20 to-slate-500/20 px-3 py-1 text-xs text-slate-300 border border-slate-500/30">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </td>
                          <td className="py-6 px-2">
                            <div className="flex gap-3">
                              {project.links.github && (
                                <a
                                  href={project.links.github}
                                  target="_blank"
                                  rel="noreferrer noopener"
                                  className="text-slate-400 hover:text-slate-200 transition-colors duration-300"
                                  aria-label="GitHub repository"
                                >
                                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                  </svg>
                                </a>
                              )}
                              {project.links.live && (
                                <a
                                  href={project.links.live}
                                  target="_blank"
                                  rel="noreferrer noopener"
                                  className="text-slate-400 hover:text-slate-200 transition-colors duration-300"
                                  aria-label="Live demo"
                                >
                                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z" clipRule="evenodd" />
                                    <path fillRule="evenodd" d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z" clipRule="evenodd" />
                                  </svg>
                                </a>
                              )}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
        </div>

        {/* Footer */}
        <footer className="mt-24 pt-16 border-t border-slate-800/50">
          <p className="text-sm text-slate-500 mb-4">
            Heavily inspired by{" "}
            <a 
              href="https://brittanychiang.com/"
              className="font-medium text-slate-400 hover:text-slate-200 transition-colors duration-300"
              target="_blank"
              rel="noreferrer noopener"
            >
              Brittany Chiang
            </a>
            's incredible design.
          </p>
          <p className="text-sm text-slate-500">
            Want to collaborate on a project?{" "}
            <Link href="/" className="font-medium text-slate-300 hover:text-white transition-colors duration-300">
              Get in touch
            </Link>
          </p>
        </footer>
      </div>
    </div>
  );
}
