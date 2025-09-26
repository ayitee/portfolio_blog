export default function About() {
  return (
    <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="About me">
  <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0"
       style={{background:'color-mix(in srgb, var(--color-bg-muted) 85%, transparent)'}}>
    <h2 className="text-sm font-bold uppercase tracking-widest" style={{color:'color-mix(in srgb, var(--color-accent) 70%, var(--color-text))'}}>About</h2>
      </div>
      
      <div>
  <p className="mb-4 text-[var(--color-text)] opacity-70">
          Hello there! I&apos;m Matis Gaudin, an 18-year-old student from Bordeaux, France, currently studying at{" "}
          <a
            className="font-medium text-[var(--color-text)] opacity-80 hover:opacity-100 focus-visible:opacity-100 transition-colors duration-300"
            href="https://www.epitech.eu/"
            target="_blank"
            rel="noreferrer noopener"
          >
            EPITECH
          </a>. I&apos;m passionate about technology, finance, AI &amp; ML, and game development.
        </p>
        
  <p className="mb-4 text-[var(--color-text)] opacity-70">
          Currently, I&apos;m a Junior Full-stack Developer at{" "}
          <a
            className="font-medium text-[var(--color-text)] opacity-80 hover:opacity-100 focus-visible:opacity-100 transition-colors duration-300"
            href="https://www.capgemini.com/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Capgemini (opens in a new tab)"
          >
            Capgemini
          </a>, working on the co-innovation project{" "}
          <a
            className="font-medium text-[var(--color-text)] opacity-80 hover:opacity-100 focus-visible:opacity-100 transition-colors duration-300"
            href="https://beyondthesea.fr/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Beyond the Sea (opens in a new tab)"
          >
            &quot;Beyond the Sea&quot;
          </a>{" "}
          where I&apos;m developing a demonstration of kite sail control using augmented reality.
        </p>
        
  <p className="mb-4 text-[var(--color-text)] opacity-70">
          Having developed successful{" "}
          <a
            className="font-medium text-[var(--color-text)] opacity-80 hover:opacity-100 focus-visible:opacity-100 transition-colors duration-300"
            href="https://www.roblox.com/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Roblox (opens in a new tab)"
          >
            Roblox
          </a>{" "}
          games with hundreds of thousands of monthly players, I have built comprehension and awareness of the challenges of game development and design, project management, and communication. I continue working as a freelance video game developer, tester, contributor, and creator of Roblox games with a monthly user base of approximately a million players.
        </p>
        
  <p className="text-[var(--color-text)] opacity-70">
          In my spare time, I enjoy working on personal projects, exploring new technologies, and contributing to the game development community. Feel free to message me if you have any questions - I&apos;ll be happy to share the knowledge I&apos;ve earned!
        </p>
      </div>
    </section>
  );
}
