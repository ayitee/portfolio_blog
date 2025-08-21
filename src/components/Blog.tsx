export default function Blog() {
  const blogPosts = [
    {
      date: "Aug 16, 2025",
      title: "Building Modern Web Applications with Next.js 15",
      excerpt: "Explore the latest features in Next.js 15 and how they can improve your development workflow and application performance.",
      readTime: "5 min read",
      category: "Development",
      url: "/blog/nextjs-15-features",
      tags: ["Next.js", "React", "Web Development"]
    },
    {
      date: "Aug 10, 2025",
      title: "The Future of CSS: Container Queries and Beyond",
      excerpt: "Discover how container queries are changing responsive design and what other CSS features are on the horizon.",
      readTime: "7 min read",
      category: "CSS",
      url: "/blog/future-of-css",
      tags: ["CSS", "Responsive Design", "Frontend"]
    },
    {
      date: "Aug 5, 2025",
      title: "Optimizing React Performance: A Comprehensive Guide",
      excerpt: "Learn advanced techniques for optimizing React applications, from code splitting to memory management.",
      readTime: "10 min read",
      category: "React",
      url: "/blog/react-performance",
      tags: ["React", "Performance", "Optimization"]
    },
    {
      date: "Jul 28, 2025",
      title: "Accessibility in Modern Web Design",
      excerpt: "A deep dive into creating inclusive web experiences that work for everyone, including practical implementation tips.",
      readTime: "8 min read",
      category: "Accessibility",
      url: "/blog/web-accessibility",
      tags: ["Accessibility", "UX", "Web Design"]
    }
  ];

  return (
    <section id="blog" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Blog posts">
  <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen backdrop-blur px-6 py-5 md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0"
       style={{background:'color-mix(in srgb, var(--color-bg-muted) 85%, transparent)'}}>
    <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only" style={{color:'var(--color-accent)'}}>Blog</h2>
      </div>
      
      <div>
        <ul className="group/list">
          {blogPosts.map((post, index) => (
            <li key={index} className="mb-12">
              <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:shadow-[inset_0_1px_0_0_rgba(218,241,222,0.08)] lg:group-hover:drop-shadow-lg" style={{background:'color-mix(in srgb, var(--color-surface) 18%, transparent)'}}></div>
                
                <div className="z-10 sm:order-2 sm:col-span-6">
                  <div className="mb-2 flex items-center gap-2 text-xs text-[var(--color-text)] opacity-60">
                    <time dateTime={post.date}>{post.date}</time>
                    <span>•</span>
                    <span>{post.readTime}</span>
                    <span>•</span>
                    <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium"
                      style={{background:'color-mix(in srgb, var(--color-surface) 20%, transparent)', color:'var(--color-text)'}}>
                      {post.category}
                    </span>
                  </div>
                  
                  <h3>
                    <a
                      className="inline-flex items-baseline font-medium leading-tight text-[var(--color-text)] opacity-90 hover:opacity-100 group/link text-base transition-colors duration-300"
                      href={post.url}
                      aria-label={`${post.title} (opens blog post)`}
                    >
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                      <span>
                        {post.title}
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
                  <p className="mt-2 text-sm leading-normal text-[var(--color-text)] opacity-70">{post.excerpt.replace(/'/g, "&apos;")}</p>
                  
                  <p className="mt-2 text-sm leading-normal text-[var(--color-text)] opacity-70">{post.excerpt}</p>
                  
                  <ul className="mt-3 flex flex-wrap gap-1" aria-label="Tags">
                    {post.tags.map((tag, tagIndex) => (
                      <li key={tagIndex}>
                        <span className="inline-flex items-center rounded-full px-3 py-1 text-xs"
                          style={{background:'color-mix(in srgb, var(--color-surface) 20%, transparent)', color:'var(--color-text)', border:'1px solid', borderColor:'color-mix(in srgb, var(--color-surface-2) 50%, transparent)'}}>
                          {tag}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="z-10 sm:order-1 sm:col-span-2">
                  <div className="relative">
                    <div className="border-2 rounded overflow-hidden transition-colors duration-300"
                      style={{borderColor:'color-mix(in srgb, var(--color-surface-2) 25%, transparent)'}}>
                      {/* Blog post thumbnail */}
                      <div className="aspect-video flex items-center justify-center" style={{background:'color-mix(in srgb, var(--color-surface) 40%, transparent)'}}>
                        <div className="text-[var(--color-text)] opacity-60 text-sm flex flex-col items-center gap-1">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-xs">Blog Post</span>
                        </div>
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
            aria-label="View All Blog Posts"
            href="/blog"
          >
            <span>
              <span className="border-b border-transparent pb-px transition group-hover:border-[color:var(--color-accent)] motion-reduce:transition-none">
                View All
              </span>
              <span className="whitespace-nowrap">
                <span className="border-b border-transparent pb-px transition group-hover:border-[color:var(--color-accent)] motion-reduce:transition-none">
                  Blog Posts
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
      
      {/* Footer */}
  <footer className="max-w-md pb-16 text-sm text-[var(--color-text)] opacity-60 sm:pb-0 mt-24">
        <p>
          Heavily inspired by{" "}
          <a
            href="https://brittanychiang.com/"
            className="font-medium text-[var(--color-text)] opacity-80 hover:opacity-100 transition-colors duration-300"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Brittany Chiang (opens in a new tab)"
          >
            Brittany Chiang
          </a>
          &apos;s incredible design. Loosely designed in{" "}
          <a
            href="https://www.figma.com/"
            className="font-medium text-[var(--color-text)] opacity-80 hover:opacity-100 transition-colors duration-300"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Figma (opens in a new tab)"
          >
            Figma
          </a>{" "}
          and coded in{" "}
          <a
            href="https://code.visualstudio.com/"
            className="font-medium text-[var(--color-text)] opacity-80 hover:opacity-100 transition-colors duration-300"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Visual Studio Code (opens in a new tab)"
          >
            Visual Studio Code
          </a>
          . Built with{" "}
          <a
            href="https://nextjs.org/"
            className="font-medium text-[var(--color-text)] opacity-80 hover:opacity-100 transition-colors duration-300"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Next.js (opens in a new tab)"
          >
            Next.js
          </a>{" "}
          and{" "}
          <a
            href="https://tailwindcss.com/"
            className="font-medium text-[var(--color-text)] opacity-80 hover:opacity-100 transition-colors duration-300"
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
