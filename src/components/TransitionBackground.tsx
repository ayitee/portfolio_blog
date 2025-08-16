'use client'

import { useEffect, useState } from 'react'

interface TransitionBackgroundProps {
  isErrorPage?: boolean
}

export default function TransitionBackground({ isErrorPage = false }: TransitionBackgroundProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <>
      {/* Normal background */}
      <div 
        className={`fixed inset-0 transition-opacity duration-1000 ease-in-out ${
          isErrorPage ? 'opacity-0' : 'opacity-100'
        }`}
        style={{
          background: 'linear-gradient(135deg, #0c0e1a 0%, #1a1b3e 50%, #2d1b3e 100%)',
          zIndex: -2
        }}
      />
      
      {/* Error background */}
      <div 
        className={`fixed inset-0 transition-opacity duration-1000 ease-in-out ${
          isErrorPage ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          background: 'linear-gradient(135deg, #3c1810 0%, #4c1d0c 50%, #5c2e0a 100%)',
          zIndex: -2
        }}
      />
    </>
  )
}
