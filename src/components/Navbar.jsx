import React, { useEffect, useState } from 'react'
import { Menu, X, Sparkles, Mail } from 'lucide-react'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'Over mij' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills & Stack' },
  { href: '#process', label: 'Process' },
  { href: '#cases', label: 'Client Cases' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
      scrolled ? 'backdrop-blur-xl bg-slate-900/60 border-b border-white/10 py-2' : 'bg-transparent py-4'
    }`}
    aria-label="Hoofdnavigatie">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        <a href="#home" className="group inline-flex items-center gap-2" data-cursor>
          <div className="relative h-9 w-9 rounded-2xl bg-gradient-to-br from-blue-500/80 to-indigo-500/80 ring-1 ring-white/20 shadow-[0_0_40px_rgba(59,130,246,0.35)] grid place-items-center">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
          <span className="text-white/90 tracking-tight font-medium">Cihan Keskin</span>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="px-3 py-2 rounded-xl text-sm text-white/70 hover:text-white transition-colors" data-cursor>
              {l.label}
            </a>
          ))}
          <a href="#contact" className="ml-2 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600/80 hover:bg-blue-500/90 text-white shadow-[0_10px_30px_rgba(37,99,235,0.35)] ring-1 ring-white/20 transition-all" data-cursor>
            <Mail className="h-4 w-4" />
            Plan een gesprek
          </a>
        </nav>

        <button className="md:hidden p-2 rounded-lg bg-white/5 ring-1 ring-white/10 text-white" onClick={() => setOpen(!open)} aria-label="Menu" data-cursor>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden px-4 pb-4">
          <div className="mt-3 rounded-2xl bg-slate-800/60 ring-1 ring-white/10 backdrop-blur-xl p-2">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="block px-3 py-2 rounded-lg text-white/80 hover:bg-white/5" onClick={() => setOpen(false)} data-cursor>
                {l.label}
              </a>
            ))}
            <a href="#contact" className="mt-2 block px-3 py-2 rounded-lg bg-blue-600/80 text-white text-center" onClick={() => setOpen(false)} data-cursor>
              Plan een gesprek
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
