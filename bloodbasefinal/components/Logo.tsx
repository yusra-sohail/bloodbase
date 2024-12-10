'use client'
import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

export function Logo() {
  return (
    <div className="relative w-8 h-8 mr-2">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <Heart className="w-4 h-4 text-pure-white" strokeWidth={2.5} />
      </motion.div>
    </div>
  )
}

export function AnimatedHeroLogo() {
  return (
    <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40">
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <Heart className="w-8 h-8 text-pure-white" strokeWidth={2.5} />
      </motion.div>
    </div>
  )
}

