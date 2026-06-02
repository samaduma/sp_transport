"use client"

import Image from "next/image"
import { useState } from "react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: "Home", href: "#" },
    { label: "Services", href: "#services" },
    { label: "Gallery", href: "#gallery" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <Image
              src="/images/without-20bg.png"
              alt="SP Transport"
              width={50}
              height={50}
              className="h-12 w-auto animate-scale-in"
            />
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-foreground tracking-wider">SP TRANSPORT</h1>
              <p className="text-xs text-accent">FOR SAFE & SECURE</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground hover:text-primary font-semibold text-sm uppercase tracking-wider transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden md:block px-6 py-2 bg-primary text-primary-foreground font-bold uppercase text-sm border-2 border-primary hover:bg-transparent hover:text-primary transition-all duration-300 tracking-wider"
          >
            Get Quote
          </a>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 space-y-3 border-t border-border pt-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-foreground hover:text-primary font-semibold text-sm uppercase"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="w-full block px-6 py-2 bg-primary text-primary-foreground font-bold uppercase text-sm border-2 border-primary hover:bg-transparent hover:text-primary transition-all duration-300 tracking-wider text-center"
            >
              Get Quote
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}
