import React from 'react'
import { motion } from 'framer-motion'
import { Filter, Sparkles, Wrench, MonitorSmartphone, Brain, Database, Workflow, Gauge, Rocket, Quote } from 'lucide-react'

export function About() {
  return (
    <section id="about" className="relative py-20">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-start">
        <div className="relative">
          <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-blue-600/10 to-white/0 blur-2xl" />
          <div className="relative rounded-3xl bg-white/5 ring-1 ring-white/10 p-8 backdrop-blur-xl">
            <h2 className="text-3xl text-white font-semibold tracking-tight">Over mij</h2>
            <p className="mt-4 text-white/70 leading-relaxed">
              Ik ben <span className="text-white">Cihan Keskin</span> (20) uit Groningen. Oprichter van <span className="text-white">SmarterSolution</span>, een studio voor AI-agents, automatisering, interne dashboards en moderne webapps.
            </p>
            <p className="mt-3 text-white/70 leading-relaxed">
              Technisch én visueel ingesteld: ik bouw zowel backend automatisering en AI-koppelingen als frontends met een premium uitstraling. Overdag werk ik 9–5, daarbuiten bouw ik aan SmarterSolution.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-3">
              {[
                { k: 'Gebaseerd in', v: 'Groningen' },
                { k: 'Talen', v: 'NL, EN, TR' },
                { k: 'Hobby\'s', v: 'Auto\'s, design, tech' },
              ].map((f) => (
                <div key={f.k} className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-4">
                  <p className="text-xs text-white/60">{f.k}</p>
                  <p className="text-white mt-1">{f.v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-4">
          <Card title="AI & Automation" items={[
            'AI-agents op GPT-achtige modellen',
            'Workflow automatisering',
            'Integraties met bestaande tools',
            'Data dashboards',
          ]} icon={Brain} />
          <Card title="Web & Frontend" items={[
            'HTML, CSS, Tailwind',
            'JavaScript (vanilla)',
            'Responsive design',
            'Animaties, parallax, custom cursors',
          ]} icon={MonitorSmartphone} />
          <Card title="Backend & Data" items={[
            'Python (Flask)',
            'MySQL / MariaDB',
            'API-koppelingen',
          ]} icon={Database} />
          <Card title="Tools & Infra" items={[
            'VS Code, Git',
            '(S)FTP, SSH',
            'Hostinger / VPS',
          ]} icon={Wrench} />
        </div>
      </div>
    </section>
  )
}

function Card({ title, items, icon: Icon }) {
  return (
    <motion.div whileHover={{ y: -2, scale: 1.01 }} className="rounded-3xl bg-white/5 ring-1 ring-white/10 p-6 backdrop-blur-xl">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-2xl bg-blue-600/20 ring-1 ring-white/10 grid place-items-center">
          <Icon className="h-5 w-5 text-blue-400" />
        </div>
        <h3 className="text-white font-medium">{title}</h3>
      </div>
      <ul className="mt-4 grid gap-2 text-white/70 text-sm list-disc list-inside">
        {items.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    </motion.div>
  )
}

export function Projects() {
  const filters = ['All','AI & Automation','Webdesign','Dashboards','Concepts']
  const data = [
    { title: 'Tantunio – Mediterrane streetfood in Groningen', tags: ['Webdesign'], desc: 'Moderne restaurantwebsite met multi-step reservering en TikTok integratie.', type: 'Webdesign & UX' },
    { title: 'ProCarBody – Schadeherstel & richtbank specialist', tags: ['Webdesign'], desc: 'Stoere, donkere uitstraling. Galerij met voor/na-foto\'s en duidelijke USP\'s.', type: 'Webdesign' },
    { title: 'SmarterSolution – AI agency website', tags: ['Webdesign','AI & Automation'], desc: 'Brand site met intakeformulier in stappen. Continu in ontwikkeling.', type: 'Brand & Lead-gen' },
    { title: 'SmarterSolution Dashboard (intern)', tags: ['Dashboards','AI & Automation'], desc: 'Interne tooling voor leads, taken, offertes, facturen en meer.', type: 'Dashboard' },
    { title: 'AI-concepten voor Keskin Recruitment & lokale bedrijven', tags: ['AI & Automation','Concepts'], desc: 'AI-agent concepten voor recruitment, restaurants en garages.', type: 'Concept' },
    { title: 'Fashion website voor mannen (side project)', tags: ['Webdesign','Concepts'], desc: 'Minimalistisch e-commerce concept met focus op typografie.', type: 'Webdesign' },
  ]
  const [active, setActive] = React.useState('All')
  const filtered = data.filter(p => active === 'All' || p.tags.includes(active))

  return (
    <section id="projects" className="relative py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-3xl text-white font-semibold tracking-tight">Projects</h2>
          <div className="flex flex-wrap gap-2">
            {filters.map(f => (
              <button key={f} onClick={() => setActive(f)} className={`px-3 py-1.5 rounded-xl text-sm ring-1 transition-all ${active === f ? 'bg-blue-600/80 text-white ring-white/20' : 'bg-white/5 text-white/70 ring-white/10 hover:bg-white/10'}`} data-cursor>
                <span className="inline-flex items-center gap-2"><Filter className="h-3.5 w-3.5" /> {f}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((p) => (
            <motion.a key={p.title} href="#" whileHover={{ y: -4, scale: 1.02 }} className="group rounded-3xl overflow-hidden bg-white/5 ring-1 ring-white/10 backdrop-blur-xl p-6" data-cursor>
              <div className="h-40 rounded-2xl bg-gradient-to-br from-blue-500/20 to-indigo-500/10 ring-1 ring-white/10" />
              <div className="mt-4">
                <div className="flex items-center gap-2 text-xs">
                  {p.tags.map(t => (
                    <span key={t} className="px-2 py-1 rounded-full bg-white/5 text-white/70 ring-1 ring-white/10">{t}</span>
                  ))}
                </div>
                <h3 className="mt-3 text-white font-medium leading-tight">{p.title}</h3>
                <p className="mt-1 text-white/70 text-sm">{p.desc}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Skills() {
  const items = [
    { icon: Brain, title: 'AI & Automation', points: ['AI-agents','Workflows','Integraties','Dashboards'] },
    { icon: MonitorSmartphone, title: 'Web & Frontend', points: ['HTML/CSS/Tailwind','JavaScript','Responsive','Animaties'] },
    { icon: Database, title: 'Backend & Data', points: ['Python (Flask)','MySQL/MariaDB','API-koppelingen'] },
    { icon: Wrench, title: 'Tools & Infra', points: ['VS Code','Git','(S)FTP/SSH','VPS'] },
  ]
  return (
    <section id="skills" className="relative py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl text-white font-semibold tracking-tight">Skills & Stack</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map(({ icon: Icon, title, points }) => (
            <motion.div key={title} whileHover={{ y: -3, scale: 1.02 }} className="rounded-3xl bg-white/5 ring-1 ring-white/10 p-6 backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-2xl bg-blue-600/20 ring-1 ring-white/10 grid place-items-center">
                  <Icon className="h-5 w-5 text-blue-400" />
                </div>
                <h3 className="text-white font-medium">{title}</h3>
              </div>
              <ul className="mt-4 grid gap-2 text-white/70 text-sm list-disc list-inside">
                {points.map(p => <li key={p}>{p}</li>)}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Process() {
  const steps = [
    { title: 'Luisteren & begrijpen', desc: 'Intake, bedrijf begrijpen, doelen scherpstellen.', icon: Sparkles },
    { title: 'Concept & ontwerp', desc: 'Wireframes, UX-flows, visueel design.', icon: Workflow },
    { title: 'Bouwen & automatiseren', desc: 'Frontend + backend, AI / dashboards, integraties.', icon: Gauge },
    { title: 'Launch & optimalisatie', desc: 'Livegang, meten, verbeteren.', icon: Rocket },
  ]
  return (
    <section id="process" className="relative py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl text-white font-semibold tracking-tight">Process</h2>
        <div className="mt-8 grid md:grid-cols-4 gap-5">
          {steps.map((s, i) => (
            <motion.div key={s.title} whileHover={{ y: -3 }} className="relative rounded-3xl bg-white/5 ring-1 ring-white/10 p-6 backdrop-blur-xl">
              <div className="h-10 w-10 rounded-2xl bg-blue-600/20 ring-1 ring-white/10 grid place-items-center">
                <s.icon className="h-5 w-5 text-blue-400" />
              </div>
              <h3 className="mt-3 text-white font-medium">{s.title}</h3>
              <p className="mt-1 text-white/70 text-sm">{s.desc}</p>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-px bg-gradient-to-r from-white/10 to-white/0" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Testimonials() {
  const items = [
    { name: 'Anoniem', company: 'Lokaal restaurant', quote: 'Cihan dacht mee vanuit ons proces en leverde snel een modern ontwerp. Reservingen en reacties stromen nu beter binnen.' },
    { name: 'Anoniem', company: 'Autoschadebedrijf', quote: 'Strakke site met duidelijke USP\'s. Klanten begrijpen meteen wat we doen en nemen sneller contact op.' },
    { name: 'Anoniem', company: 'Recruitmentbureau', quote: 'De AI-concepten laten zien dat Cihan verder denkt dan alleen design – precies wat we zochten.' },
  ]
  return (
    <section id="cases" className="relative py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl text-white font-semibold tracking-tight">Client Cases</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-5">
          {items.map((t) => (
            <motion.div key={t.company} whileHover={{ y: -3 }} className="rounded-3xl bg-white/5 ring-1 ring-white/10 p-6 backdrop-blur-xl">
              <Quote className="h-6 w-6 text-blue-400" />
              <p className="mt-3 text-white/80">“{t.quote}”</p>
              <div className="mt-4 text-sm text-white/60">{t.name} – {t.company}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Contact() {
  return (
    <section id="contact" className="relative py-20">
      <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl text-white font-semibold tracking-tight">Samen bouwen?</h2>
          <p className="mt-3 text-white/70">Vertel me kort over jouw bedrijf, huidige processen en waar je tegenaan loopt. Ik denk met je mee en kijk hoe AI, dashboards of een nieuwe website kunnen helpen.</p>
          <div className="mt-6 rounded-3xl bg-white/5 ring-1 ring-white/10 p-6 backdrop-blur-xl">
            <p className="text-white/70 text-sm">Geen spam, gewoon een eerlijk gesprek.</p>
          </div>
        </div>
        <form onSubmit={(e) => e.preventDefault()} className="rounded-3xl bg-white/5 ring-1 ring-white/10 p-6 backdrop-blur-xl grid grid-cols-1 gap-4">
          <Input label="Naam" type="text" />
          <Input label="Bedrijfsnaam" type="text" />
          <Input label="E-mailadres" type="email" />
          <Input label="Telefoonnummer" type="tel" />
          <Select label="Type bedrijf" options={[ 'Restaurant','Garage','Vastgoed','Recruitment','Anders' ]} />
          <Textarea label="Bericht" rows={5} placeholder="Wat wil je automatiseren / verbeteren?" />
          <button className="mt-2 inline-flex justify-center items-center gap-2 px-5 py-3 rounded-2xl bg-blue-600/80 hover:bg-blue-500 text-white ring-1 ring-white/20 shadow-[0_10px_35px_rgba(37,99,235,0.35)]" data-cursor>
            Versturen
          </button>
        </form>
      </div>
    </section>
  )
}

function Input({ label, ...props }) {
  return (
    <label className="grid gap-1">
      <span className="text-sm text-white/70">{label}</span>
      <input {...props} className="w-full rounded-xl bg-white/5 text-white placeholder-white/40 px-4 py-3 ring-1 ring-white/10 focus:ring-2 focus:ring-blue-500 outline-none transition" data-cursor />
    </label>
  )
}
function Textarea({ label, ...props }) {
  return (
    <label className="grid gap-1">
      <span className="text-sm text-white/70">{label}</span>
      <textarea {...props} className="w-full resize-y rounded-xl bg-white/5 text-white placeholder-white/40 px-4 py-3 ring-1 ring-white/10 focus:ring-2 focus:ring-blue-500 outline-none transition" data-cursor />
    </label>
  )
}
function Select({ label, options = [] }) {
  return (
    <label className="grid gap-1">
      <span className="text-sm text-white/70">{label}</span>
      <select className="w-full rounded-xl bg-white/5 text-white px-4 py-3 ring-1 ring-white/10 focus:ring-2 focus:ring-blue-500 outline-none transition appearance-none" data-cursor>
        {options.map(o => <option key={o} value={o}>{o}</option>)}
      </select>
    </label>
  )
}
