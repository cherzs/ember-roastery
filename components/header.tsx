"use client"

import { useState } from "react"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <h1 className="text-xl md:text-2xl font-light tracking-wide text-neutral-900">EMBER ROASTERY</h1>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-8 text-sm font-light text-neutral-700">
          <a href="#about" className="hover:text-neutral-900 transition-colors">About</a>
          <a href="#coffee" className="hover:text-neutral-900 transition-colors">Coffee</a>
          <a href="#location" className="hover:text-neutral-900 transition-colors">Visit</a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-px bg-neutral-900 transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-px bg-neutral-900 transition-all ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-px bg-neutral-900 transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden border-t border-stone-200 px-6 py-4 flex flex-col gap-4 text-sm font-light text-neutral-700">
          <a href="#about" onClick={() => setMenuOpen(false)} className="hover:text-neutral-900 transition-colors">About</a>
          <a href="#coffee" onClick={() => setMenuOpen(false)} className="hover:text-neutral-900 transition-colors">Coffee</a>
          <a href="#location" onClick={() => setMenuOpen(false)} className="hover:text-neutral-900 transition-colors">Visit</a>
        </nav>
      )}
    </header>
  )
}
