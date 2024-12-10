'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Logo } from './Logo'

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <motion.nav
      className="fixed w-full h-16 z-50 flex items-center justify-between px-6 bg-dark-overlay"
      style={{
        backdropFilter: 'blur(10px)',
        backgroundColor: scrolled ? 'rgba(186, 28, 28, 1)' : 'rgba(186, 28, 28, 0.8)',
      }}
      animate={{ y: scrolled ? -10 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center space-x-4">
        <Link href="/" className="flex items-center">
          <Logo />
          <span
            className="text-2xl font-bold text-white ml-2 whitespace-nowrap"
            style={{ marginRight: '16px' }}
          >
            BloodBase
          </span>
        </Link>
      </div>

      {/* Hamburger Button (Mobile) */}
      <div className="md:hidden flex items-center relative">
        <button
          onClick={toggleMenu}
          className="text-white focus:outline-none"
        >
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </button>
        {/* Mobile Menu */}
        <div
          className={`absolute top-12 right-0 bg-error-red p-4 rounded-md shadow-lg z-50 ${
            isMenuOpen ? 'block' : 'hidden'
          }`}
        >
          <motion.div
            className="flex flex-col items-center space-y-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <NavLink href="/donate">Donate</NavLink>
            <NavLink href="/request">Request</NavLink>
            <NavLink href="/compatibility">Compatibility</NavLink>
            <NavLink href="/eligibility">Eligibility</NavLink>
            <NavLink href="/locate">Locate</NavLink>
            <NavLink href="/about">About</NavLink>
            <Link href="/emergency">
              <motion.button
                className="bg-error-red text-pure-white px-3 py-1.5 rounded-full text-sm font-bold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={{ boxShadow: ['0 0 0 0 rgba(211, 47, 47, 0.7)', '0 0 0 10px rgba(211, 47, 47, 0)'] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                Emergency
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Navigation Links (Desktop) */}
      <div className="hidden md:flex items-center space-x-6">
        <NavLink href="/donate">Donate</NavLink>
        <NavLink href="/request">Request</NavLink>
        <NavLink href="/compatibility">Compatibility</NavLink>
        <NavLink href="/eligibility">Eligibility</NavLink>
        <NavLink href="/locate">Locate</NavLink>
        <NavLink href="/about">About</NavLink>
        <Link href="/emergency">
          <motion.button
            className="bg-error-red text-pure-white px-3 py-1.5 rounded-full text-sm font-bold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{ boxShadow: ['0 0 0 0 rgba(211, 47, 47, 0.7)', '0 0 0 10px rgba(211, 47, 47, 0)'] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            Emergency
          </motion.button>
        </Link>
      </div>
    </motion.nav>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="relative group">
      <span className="text-pure-white text-sm font-semibold">{children}</span>
      <span className="absolute left-0 bottom-0 w-full h-0.5 bg-pure-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
    </Link>
  )
}