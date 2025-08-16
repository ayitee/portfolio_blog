export default function About() {
  return (
    <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="About me">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-gradient-to-r from-slate-900/90 to-purple-900/20 backdrop-blur px-6 py-5 md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-purple-300 lg:sr-only">About</h2>
      </div>
      
      <div>
        <p className="mb-4 text-slate-300">
          I'm a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for performance and usability.
        </p>
        
        <p className="mb-4 text-slate-300">
          Currently, I'm a Senior Front-End Engineer at{" "}
          <a
            className="font-medium text-purple-300 hover:text-purple-200 focus-visible:text-purple-200 transition-colors duration-300"
            href="https://www.example.com/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Example Company (opens in a new tab)"
          >
            Example Company
          </a>, specializing in accessibility. I contribute to the creation and maintenance of UI components that power our frontend, ensuring our platform meets web accessibility standards and best practices to deliver an inclusive user experience.
        </p>
        
        <p className="mb-4 text-slate-300">
          In the past, I've had the opportunity to develop software across a variety of settings — from{" "}
          <a
            className="font-medium text-purple-300 hover:text-purple-200 focus-visible:text-purple-200 transition-colors duration-300"
            href="#"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="advertising agency (opens in a new tab)"
          >
            advertising agency
          </a>{" "}
          and{" "}
          <a
            className="font-medium text-purple-300 hover:text-purple-200 focus-visible:text-purple-200 transition-colors duration-300"
            href="#"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="huge corporation (opens in a new tab)"
          >
            huge corporation
          </a>{" "}
          to{" "}
          <a
            className="font-medium text-purple-300 hover:text-purple-200 focus-visible:text-purple-200 transition-colors duration-300"
            href="#"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="start-up (opens in a new tab)"
          >
            start-up
          </a>{" "}
          and{" "}
          <a
            className="font-medium text-purple-300 hover:text-purple-200 focus-visible:text-purple-200 transition-colors duration-300"
            href="#"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="digital product studio (opens in a new tab)"
          >
            digital product studio
          </a>.
        </p>
        
        <p className="text-slate-300">
          In my spare time, I'm usually climbing, reading, hanging out with my family, or exploring new technologies and frameworks.
        </p>
      </div>
    </section>
  );
}
