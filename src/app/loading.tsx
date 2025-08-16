export default function Loading() {
  return (
    <div className="relative min-h-screen text-slate-300 antialiased selection:bg-blue-400 selection:text-blue-900">
      {/* Animated background elements - Blue theme for loading */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-1/3 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>
      
      <div className="relative flex min-h-screen flex-col items-center justify-center px-6 py-12 md:px-12 md:py-20 lg:px-24">
        <div className="text-center">
          {/* Loading Spinner */}
          <div className="mx-auto mb-8">
            <div className="relative">
              <div className="w-16 h-16 border-4 border-slate-600 border-t-blue-400 rounded-full animate-spin"></div>
              <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-b-indigo-400 rounded-full animate-spin animate-reverse" style={{ animationDuration: '1.5s' }}></div>
            </div>
          </div>
          
          {/* Loading Text */}
          <h1 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent sm:text-3xl">
            Loading...
          </h1>
          
          <p className="mt-4 text-lg text-slate-400">
            Please wait while we prepare your content
          </p>
          
          {/* Loading Dots Animation */}
          <div className="mt-8 flex justify-center space-x-1">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse delay-100"></div>
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse delay-200"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
