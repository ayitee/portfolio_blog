'use client'

import Link from 'next/link'
import { useEffect } from 'react'

export default function Error({
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
    <div className="relative min-h-screen text-slate-300 antialiased selection:bg-slate-400 selection:text-slate-900">
      {/* Animated background elements - Grayscale theme for errors */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-slate-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-1/3 w-64 h-64 bg-zinc-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>
      
      <div className="relative flex min-h-screen flex-col items-center justify-center px-6 py-12 md:px-12 md:py-20 lg:px-24">
        <div className="text-center max-w-md">
          {/* Error Icon */}
          <div className="mx-auto mb-6">
            <svg
              className="w-16 h-16 text-slate-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
          </div>
          
          {/* Error Number/Title */}
          <h1 className="text-6xl font-bold tracking-tight bg-gradient-to-r from-slate-400 via-gray-400 to-zinc-400 bg-clip-text text-transparent sm:text-7xl">
            Oops!
          </h1>
          
          {/* Error Message */}
          <h2 className="mt-6 text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Something went wrong
          </h2>
          
          <p className="mt-6 text-lg leading-7 text-slate-300">
            An unexpected error occurred. Our team has been notified and is working to fix the issue.
          </p>
          
          {/* Error Details (only in development) */}
          {process.env.NODE_ENV === 'development' && (
            <details className="mt-6 text-left">
              <summary className="cursor-pointer text-sm text-slate-400 hover:text-slate-300">
                Error Details (Development)
              </summary>
              <pre className="mt-2 text-xs text-slate-500 bg-slate-800/50 p-3 rounded overflow-auto max-h-32">
                {error.message}
              </pre>
            </details>
          )}
          
          {/* Actions */}
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <button
              onClick={reset}
              className="rounded-md bg-gradient-to-r from-slate-600 to-gray-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:from-slate-500 hover:to-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600 transition-all duration-300"
            >
              Try again
            </button>
            
              <Link
                href="/"
                className="text-sm font-semibold text-slate-300 hover:text-slate-200 transition-colors duration-300"
              >
                Go home <span aria-hidden="true">&rarr;</span>
              </Link>
          </div>
          
          {/* Support Info */}
          <div className="mt-16">
            <p className="text-sm text-slate-500">
              If this problem persists, please{' '}
              <a
                href="mailto:support@example.com"
                className="text-slate-400 hover:text-slate-300 transition-colors duration-300 underline"
              >
                contact support
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
