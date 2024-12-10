'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { AnimatedHeroLogo } from './Logo'

export function Hero() {
  const [currentPhrase, setCurrentPhrase] = useState(0)
  const [showContent, setShowContent] = useState(false)
  
  const phrases = ['Donate Blood', 'Save Lives']

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute w-full h-full object-cover"
      >
        <source src="/blood-cells.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-rose-100" />
      
      {!showContent && <AnimatedHeroLogo />}

      <motion.div 
        className="relative z-10 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: showContent ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-7xl font-bold text-blood-red mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-blood-red">Blood-Base</span>
          <br />
          <motion.span
            key={currentPhrase}
            className="text-blood-red"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {phrases[currentPhrase]}
          </motion.span>
        </motion.h1>

        <Link href="/donate">
          <motion.button
            className="bg-blood-red text-white text-xl px-8 py-4 rounded-full font-bold"
            whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(229, 57, 53, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            animate={{ boxShadow: ['0 0 0 0 rgba(211, 47, 47, 0.7)', '0 0 0 10px rgba(211, 47, 47, 0)'] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            Donate Blood Now
          </motion.button>
        </Link>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="stroke-blood-red"
        >
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </motion.div>
    </section>
  )
}
