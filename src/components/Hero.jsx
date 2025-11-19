import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[88vh] pt-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 h-[600px] w-[600px] rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-6xl font-semibold tracking-tight text-white">
            Cihan Keskin
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-4 text-xl text-white/80">
            AI automation & webdesign voor échte bedrijven.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-4 text-white/70 max-w-xl">
            Ik help ondernemers hun processen te automatiseren met AI, maatwerk dashboards en moderne websites. Van reserveringen tot facturen – ik laat het voor jou werken.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#contact" className="group inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-blue-600/80 hover:bg-blue-500 text-white ring-1 ring-white/20 shadow-[0_10px_35px_rgba(37,99,235,0.35)] transition-all" data-cursor>
              Plan een gesprek
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a href="#projects" className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-white/5 hover:bg-white/10 text-white ring-1 ring-white/10" data-cursor>
              <Play className="h-4 w-4" />
              Bekijk mijn projecten
            </a>
          </motion.div>

          <div className="mt-8 flex flex-wrap gap-2">
            {['AI-automatisering','Custom dashboards','Webdesign & frontend','Groningen, Nederland'].map((tag) => (
              <span key={tag} className="px-3 py-1.5 rounded-full text-xs text-white/80 bg-white/5 ring-1 ring-white/10" data-cursor>
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="relative h-[520px] lg:h-[640px]">
          <div className="absolute inset-0 rounded-[28px] overflow-hidden ring-1 ring-white/15 bg-black/40 backdrop-blur-xl">
            <Spline scene="https://prod.spline.design/xXD1hOqciVNtJX50/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
          <div className="absolute -inset-4 rounded-[32px] bg-gradient-to-br from-orange-400/10 to-blue-500/10 blur-2xl pointer-events-none" />
        </div>
      </div>
    </section>
  )
}
