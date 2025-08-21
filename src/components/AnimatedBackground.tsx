'use client'

import { useState, useEffect, useRef } from 'react'

export default function AnimatedBackground() {

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMobile, setIsMobile] = useState(false)
  const rafId = useRef<number | null>(null)
  const lastMouse = useRef({ x: 0, y: 0 })

  useEffect(() => {
    // Simple mobile detection
    const mobile = typeof window !== 'undefined' && (
      /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    )
    setIsMobile(mobile)

    if (!mobile) {
      const handleMouseMove = (e: MouseEvent) => {
        lastMouse.current = { x: e.clientX, y: e.clientY }
        if (rafId.current == null) {
          rafId.current = requestAnimationFrame(() => {
            setMousePosition(lastMouse.current)
            rafId.current = null
          })
        }
      }
      window.addEventListener('mousemove', handleMouseMove)
      return () => {
        window.removeEventListener('mousemove', handleMouseMove)
        if (rafId.current) cancelAnimationFrame(rafId.current)
      }
    }
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Mouse-following glow only (desktop) — larger and more diffused */}
      {!isMobile && (
        <div
          className={`absolute w-[60rem] h-[60rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60`}
          style={{
            // Soft radial gradient similar to Brittany Chiang's glow
            background: `radial-gradient(circle at center,
              color-mix(in srgb, var(--color-accent) 55%, transparent) 0%,
              color-mix(in srgb, var(--color-accent) 35%, transparent) 20%,
              color-mix(in srgb, var(--color-accent) 10%, transparent) 45%,
              transparent 70%
            )`,
            filter: 'blur(120px)',
            mixBlendMode: 'screen',
            left: mousePosition.x,
            top: mousePosition.y,
          }}
        />
      )}
    </div>
  )
}
