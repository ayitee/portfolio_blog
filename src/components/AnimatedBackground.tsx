'use client'

import { useState, useEffect } from 'react'

interface AnimatedBackgroundProps {
  isErrorPage?: boolean
}

export default function AnimatedBackground({ isErrorPage = false }: AnimatedBackgroundProps) {

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Simple mobile detection
    const mobile = typeof window !== 'undefined' && (
      /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    )
    setIsMobile(mobile)

    if (!mobile) {
      const handleMouseMove = (e: MouseEvent) => {
        setMousePosition({ x: e.clientX, y: e.clientY })
      }
      window.addEventListener('mousemove', handleMouseMove)
      return () => window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* First orb - top left area */}
      <div className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl animate-float-1 ${
        isErrorPage ? 'bg-red-500/15' : 'bg-slate-500/8'
      }`} />

      {/* Second orb - bottom right area */}
      <div className={`absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl animate-float-2 ${
        isErrorPage ? 'bg-orange-500/15' : 'bg-gray-400/6'
      }`} />

      {/* Third orb - original position */}
      <div className={`absolute top-3/4 left-1/3 w-64 h-64 rounded-full blur-3xl animate-float-3 ${
        isErrorPage ? 'bg-yellow-500/15' : 'bg-zinc-500/8'
      }`} />

      {/* Mouse-following orb (desktop only) */}
      {!isMobile && (
        <div
          className={`absolute w-32 h-32 rounded-full blur-2xl ${
            isErrorPage ? 'bg-red-300/40' : 'bg-white/20'
          }`}
          style={{
            left: mousePosition.x - 64,
            top: mousePosition.y - 64,
            transform: 'translate(0, 0)',
          }}
        />
      )}
    </div>
  )
}
