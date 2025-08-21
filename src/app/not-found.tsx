'use client'

import Link from 'next/link'

export default function NotFound() {
  return (
  <div className="relative min-h-screen text-slate-300 antialiased bg-slate-950">
      
      <div className="relative mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24">
        {/* Back to Home link */}
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors duration-200 mb-16"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </Link>
        
        {/* 404 Content - Centered */}
        <div className="flex items-center justify-center min-h-[calc(100vh-200px)]">
          <div className="text-center">
            <div className="flex items-center justify-center gap-6">
              <h1 className="text-2xl font-normal text-slate-300">404</h1>
              <div className="h-12 w-px bg-slate-600"></div>
              <h2 className="text-sm font-normal text-slate-400">This page could not be found.</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}