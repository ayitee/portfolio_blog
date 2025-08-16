export default function Writing() {
  const articles = [
    {
      year: "2024",
      title: "5 Common Accessibility Pitfalls and How to Avoid Them",
      description: "A comprehensive guide to web accessibility best practices and common mistakes developers make when building inclusive web applications.",
      url: "https://example.com/accessibility-pitfalls",
      image: "/writing1.jpg"
    },
    {
      year: "2023",
      title: "Building Scalable Design Systems with React",
      description: "Learn how to create and maintain design systems that scale across multiple teams and products while ensuring consistency and accessibility.",
      url: "https://example.com/design-systems",
      image: "/writing2.jpg"
    },
    {
      year: "2022",
      title: "Modern CSS Techniques for Better Performance",
      description: "Explore advanced CSS techniques that can significantly improve your website's performance and user experience across all devices.",
      url: "https://example.com/css-performance",
      image: "/writing3.jpg"
    }
  ];

  return (
    <section id="writing" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Blog posts">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-gradient-to-r from-slate-900/90 to-purple-900/20 backdrop-blur px-6 py-5 md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-purple-300 lg:sr-only">Writing</h2>
      </div>
      
      <div>
        <ul className="group/list">
          {articles.map((article, index) => (
            <li key={index} className="mb-12">
              <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-gradient-to-r lg:group-hover:from-purple-900/20 lg:group-hover:to-indigo-900/20 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(168,85,247,0.1)] lg:group-hover:drop-shadow-lg"></div>
                
                <div className="z-10 sm:order-2 sm:col-span-6">
                  <h3>
                    <a
                      className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-purple-300 focus-visible:text-purple-300 group/link text-base transition-colors duration-300"
                      href={article.url}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={`${article.title} (opens in a new tab)`}
                    >
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                      <span>
                        {article.title}
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
                  
                  <p className="mt-2 text-sm leading-normal text-slate-300">{article.description}</p>
                  
                  <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    {article.year}
                  </p>
                </div>
                
                <div className="z-10 sm:order-1 sm:col-span-2">
                  <div className="relative">
                    <div className="border-2 border-purple-500/20 rounded overflow-hidden hover:border-purple-400/40 transition-colors duration-300">
                      {/* Placeholder for article image */}
                      <div className="bg-gradient-to-br from-slate-800 to-purple-900/50 aspect-video flex items-center justify-center">
                        <div className="text-slate-400 text-sm">Article Image</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Footer */}
      <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0 mt-24">
        <p>
          Loosely designed in{" "}
          <a
            href="https://www.figma.com/"
            className="font-medium text-slate-400 hover:text-purple-300 focus-visible:text-purple-300 transition-colors duration-300"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Figma (opens in a new tab)"
          >
            Figma
          </a>{" "}
          and coded in{" "}
          <a
            href="https://code.visualstudio.com/"
            className="font-medium text-slate-400 hover:text-purple-300 focus-visible:text-purple-300 transition-colors duration-300"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Visual Studio Code (opens in a new tab)"
          >
            Visual Studio Code
          </a>
          . Built with{" "}
          <a
            href="https://nextjs.org/"
            className="font-medium text-slate-400 hover:text-purple-300 focus-visible:text-purple-300 transition-colors duration-300"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Next.js (opens in a new tab)"
          >
            Next.js
          </a>{" "}
          and{" "}
          <a
            href="https://tailwindcss.com/"
            className="font-medium text-slate-400 hover:text-purple-300 focus-visible:text-purple-300 transition-colors duration-300"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Tailwind CSS (opens in a new tab)"
          >
            Tailwind CSS
          </a>
          , deployed with{" "}
          <a
            href="https://vercel.com/"
            className="font-medium text-slate-400 hover:text-purple-300 focus-visible:text-purple-300 transition-colors duration-300"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Vercel (opens in a new tab)"
          >
            Vercel
          </a>
          . All text is set in the{" "}
          <a
            href="https://rsms.me/inter/"
            className="font-medium text-slate-400 hover:text-purple-300 focus-visible:text-purple-300 transition-colors duration-300"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Inter (opens in a new tab)"
          >
            Inter
          </a>{" "}
          typeface.
        </p>
      </footer>
    </section>
  );
}
