'use client'

import { useEffect } from 'react'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <html lang="en">
      <body className="antialiased">
  <div className="relative min-h-screen text-slate-300 antialiased selection:bg-slate-400 selection:text-slate-900">
          
          <div className="relative flex min-h-screen flex-col items-center justify-center px-6 py-12 md:px-12 md:py-20 lg:px-24">
            <div className="text-center max-w-md">
              {/* Critical Error Icon */}
              <div className="mx-auto mb-6">
                <svg
                  className="w-20 h-20 text-slate-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              
              {/* Error Title */}
              <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl">
                Critical Error
              </h1>
              
              {/* Error Message */}
              <h2 className="mt-6 text-xl font-bold tracking-tight text-white sm:text-2xl">
                Application Error
              </h2>
              
              <p className="mt-6 text-base leading-7 text-slate-300">
                A critical error occurred that prevented the application from loading properly. Please try refreshing the page.
              </p>
              
              {/* Actions */}
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
                <button
                  onClick={reset}
                  className="w-full sm:w-auto rounded-md bg-slate-700 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-slate-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-700 transition-all duration-300"
                >
                  Reload Application
                </button>
                
                <button
                  onClick={() => window.location.href = '/'}
                  className="w-full sm:w-auto text-sm font-semibold text-slate-300 hover:text-slate-200 transition-colors duration-300 px-4 py-2.5"
                >
                  Go to Homepage
                </button>
              </div>
              
              {/* Technical Info */}
              <div className="mt-16 text-xs text-slate-500">
                <p>Error ID: {error.digest || 'Unknown'}</p>
                <p>If this error persists, please contact technical support.</p>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
