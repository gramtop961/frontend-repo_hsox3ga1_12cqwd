import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import UXChrome from './components/UXChrome'
import { About, Projects, Skills, Process, Testimonials, Contact } from './components/Sections'

function App() {
  return (
    <div className="min-h-screen bg-[#080b12] selection:bg-blue-600/40 selection:text-white">
      <UXChrome />

      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_-10%,rgba(59,130,246,0.12),transparent_35%),radial-gradient(circle_at_80%_0,rgba(99,102,241,0.1),transparent_30%),radial-gradient(circle_at_50%_120%,rgba(251,146,60,0.06),transparent_30%)]" />
      </div>

      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Process />
        <Testimonials />
        <Contact />
      </main>

      <footer className="relative py-10">
        <div className="max-w-6xl mx-auto px-4 text-center text-white/50 text-sm">
          © {new Date().getFullYear()} Cihan Keskin — SmarterSolution
        </div>
      </footer>
    </div>
  )
}

export default App
