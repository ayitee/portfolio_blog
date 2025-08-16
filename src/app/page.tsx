import Header from '@/components/Header'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import Projects from '@/components/Projects'
import AnimatedBackground from '@/components/AnimatedBackground'

export default function Home() {
  return (
    <div className="relative min-h-screen text-slate-300 antialiased selection:bg-slate-400 selection:text-slate-900">
      {/* Interactive animated background */}
      <AnimatedBackground />
      
      <div className="relative mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          
          {/* Left Column - Fixed Header */}
          <Header />
          
          {/* Right Column - Scrollable Content */}
          <main className="pt-24 lg:w-1/2 lg:py-24">
            <About />
            <Experience />
            <Education />
            <Projects />
          </main>
        </div>
      </div>
    </div>
  );
}
