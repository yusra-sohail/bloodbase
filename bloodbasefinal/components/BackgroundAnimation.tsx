'use client'

import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const BloodCell = ({ delay }: { delay: number }) => (
  <motion.div
    className="blood-cell"
    initial={{ x: `${Math.random() * 100}vw`, y: `${Math.random() * 100}vh` }}
    animate={{
      y: [0, -30, -50, '-100vh'],
      x: [0, 30, -20, 0],
      rotate: [0, 120, 240, 360],
    }}
    transition={{
      repeat: Infinity,
      duration: 15,
      delay,
      ease: 'linear',
    }}
    style={{
      width: `${8 + Math.random() * 17}px`,
      height: `${8 + Math.random() * 17}px`,
      background: `radial-gradient(circle at 30% 30%, #ff6b6b, #ff0000)`,
      boxShadow: '0 0 20px rgba(255, 0, 0, 0.5)',
    }}
  />
)

const DNAStrand = () => (
  <motion.path
    d="M0,0 Q100,50 0,100 Q100,150 0,200 Q100,250 0,300 Q100,350 0,400"
    stroke="#ff0000"
    strokeWidth="3"
    fill="none"
    initial={{ pathLength: 0 }}
    animate={{ pathLength: 1 }}
    transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
    style={{
      filter: 'drop-shadow(0 0 8px rgba(255, 0, 0, 0.6))',
    }}
  />
)

const PulseRing = () => (
  <motion.div
    className="pulse-ring"
    initial={{ scale: 1, opacity: 1 }}
    animate={{ scale: 20, opacity: 0 }}
    transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
    style={{ 
      borderColor: 'rgba(255, 0, 0, 0.2)',
      boxShadow: '0 0 20px rgba(255, 0, 0, 0.3)',
    }}
  />
)

export const BackgroundAnimation: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const cellCount = window.innerWidth < 768 ? 20 : 35
        containerRef.current.style.setProperty('--cell-count', cellCount.toString())
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div ref={containerRef} className="fixed inset-0 overflow-hidden pointer-events-none">
      <div className="blood-cells-container" style={{ background: 'linear-gradient(145deg, rgba(255, 0, 0, 0.1), rgba(255, 0, 0, 0.2))' }}>
        {Array.from({ length: 35 }).map((_, i) => (
          <BloodCell key={i} delay={Math.random() * 15} />
        ))}
      </div>
      <svg className="dna-animation" viewBox="0 0 400 800">
        <DNAStrand />
      </svg>
      <div className="pulse-container">
        <PulseRing />
      </div>
    </div>
  )
}

