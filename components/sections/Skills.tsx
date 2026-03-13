import { motion } from 'framer-motion'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'

type CapabilityGroup = {
  title: string
  items: string[]
}

type ProjectFocusItem = {
  label: string
  value: number
  color: string
  glow: string
}

type CapabilityAccent = {
  glow: string
  chipBg: string
  chipBorder: string
  dot: string
}

const capabilityGroups: CapabilityGroup[] = [
  {
    title: 'Languages & Frameworks',
    items: ['JavaScript', 'TypeScript', 'Node.js', 'Express.js', 'React', 'Flutter', 'Kotlin'],
  },
  {
    title: 'Backend & APIs',
    items: [
      'REST API Design',
      'API Integration',
      'JWT / OAuth',
      'Role-Based Access',
      'Input Validation',
      'Logging & Error Handling',
      'Middleware Architecture',
    ],
  },
  {
    title: 'Databases & Delivery',
    items: [
      'MongoDB',
      'SQL Modeling',
      'Query Optimization',
      'Schema Design',
      'Cloud Deployment',
      'Environment Configuration',
      'Monitoring & Observability',
    ],
  },
  {
    title: 'AI & Intelligent Systems',
    items: [
      'LLM API Integration',
      'Streaming AI Responses',
      'Workflow Automation',
      'Decision-Engine Logic',
      'Event-Driven Architecture',
      'Prompt Engineering',
      'Anomaly Detection',
      'Redis / Queue Systems',
    ],
  },
]

const projectFocus: ProjectFocusItem[] = [
  {
    label: 'Full-Stack Platforms',
    value: 89,
    color: '#ef4444',
    glow: 'rgba(239,68,68,0.35)',
  },
  {
    label: 'Backend / API Systems',
    value: 98,
    color: '#22c55e',
    glow: 'rgba(34,197,94,0.35)',
  },
  {
    label: 'AI / Intelligent Workflows',
    value: 75,
    color: '#9ca3af',
    glow: 'rgba(156,163,175,0.35)',
  },
]

const capabilityAccents: CapabilityAccent[] = [
  {
    glow: 'rgba(239,68,68,0.15)',
    chipBg: 'rgba(239,68,68,0.08)',
    chipBorder: 'rgba(239,68,68,0.14)',
    dot: '#ef4444',
  },
  {
    glow: 'rgba(34,197,94,0.15)',
    chipBg: 'rgba(34,197,94,0.08)',
    chipBorder: 'rgba(34,197,94,0.14)',
    dot: '#22c55e',
  },
  {
    glow: 'rgba(156,163,175,0.15)',
    chipBg: 'rgba(156,163,175,0.08)',
    chipBorder: 'rgba(156,163,175,0.14)',
    dot: '#9ca3af',
  },
  {
    glow: 'rgba(248,113,113,0.14)',
    chipBg: 'rgba(248,113,113,0.08)',
    chipBorder: 'rgba(248,113,113,0.14)',
    dot: '#f87171',
  },
]

export default function Skills() {
  const total = projectFocus.reduce((sum, item) => sum + item.value, 0)

  let currentAngle = 0
  const chartStops = projectFocus
    .map((item) => {
      const start = currentAngle
      const angle = (item.value / total) * 360
      currentAngle += angle
      return `${item.color} ${start}deg ${currentAngle}deg`
    })
    .join(', ')

  return (
    <section id="skills" className="relative overflow-hidden py-14 sm:py-16">
      <div className="absolute inset-0 -z-30 bg-[#04070b]" />
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(180deg,rgba(255,255,255,0.012),transparent_28%,transparent_74%,rgba(255,255,255,0.01))]" />

      <div className="absolute left-[-6%] top-[14%] -z-10 h-[180px] w-[180px] rounded-full bg-[radial-gradient(circle,rgba(239,68,68,0.18),transparent_68%)] blur-3xl" />
      <div className="absolute right-[-6%] top-[18%] -z-10 h-[200px] w-[200px] rounded-full bg-[radial-gradient(circle,rgba(34,197,94,0.15),transparent_70%)] blur-3xl" />
      <div className="absolute left-1/2 top-6 -z-10 h-[220px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(148,163,184,0.1),transparent_72%)] blur-3xl" />

      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Capability"
            title="The stack, systems, and delivery range behind my work."
            description="A compact visual map of the technologies, backend thinking, and intelligent-system direction shaping the products I build."
          />
        </Reveal>

        <div className="mt-10 grid gap-4 xl:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <div className="relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-5 shadow-[0_18px_50px_rgba(0,0,0,0.28)] backdrop-blur-[14px] sm:p-6">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(239,68,68,0.12),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(34,197,94,0.08),transparent_24%)]" />

              <div className="relative z-10">
                <p className="text-[0.62rem] uppercase tracking-[0.3em] text-white/34">
                  In practice
                </p>

                <h3 className="mt-3 max-w-xl text-xl font-light uppercase tracking-[0.08em] text-white sm:text-[1.65rem]">
                  Full-stack engineering with backend strength and intelligent system awareness.
                </h3>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-white/64 sm:text-[0.98rem]">
                  I build across frontend experience, backend reliability, and product-minded
                  implementation using JavaScript, TypeScript, Node.js, Express, React, MongoDB,
                  and SQL — with strong attention to auth, validation, architecture, performance,
                  and maintainability.
                </p>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {[
                    'API-driven systems',
                    'Clean architecture',
                    'Frontend integration',
                    'AI extensions',
                  ].map((item, index) => (
                    <div
                      key={item}
                      className="rounded-[1.1rem] border border-white/8 bg-white/[0.035] px-3.5 py-3"
                    >
                      <div className="flex items-center gap-2.5">
                        <span
                          className="h-2 w-2 rounded-full"
                          style={{
                            background:
                              index % 3 === 0
                                ? '#ef4444'
                                : index % 3 === 1
                                  ? '#22c55e'
                                  : '#9ca3af',
                          }}
                        />
                        <p className="text-[0.66rem] uppercase tracking-[0.2em] text-white/58">
                          {item}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="mt-5 font-serif text-[1rem] italic leading-7 text-white/76 sm:text-[1.15rem]">
                  I focus on products that feel <span className="font-semibold text-white">clean</span>,
                  <span className="font-semibold text-white"> practical</span>, and
                  <span className="font-semibold text-white"> ready to scale</span>.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.02))] p-5 shadow-[0_18px_50px_rgba(0,0,0,0.28)] backdrop-blur-[14px] sm:p-6">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(239,68,68,0.14),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(34,197,94,0.1),transparent_24%)]" />

              <div className="relative z-10">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[0.62rem] uppercase tracking-[0.3em] text-white/34">
                      Project focus
                    </p>
                    <h3 className="mt-3 text-xl font-light uppercase tracking-[0.08em] text-white sm:text-[1.55rem]">
                      Skill energy map
                    </h3>
                  </div>

                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[0.58rem] uppercase tracking-[0.2em] text-white/42">
                    03 zones
                  </span>
                </div>

                <div className="mt-6 grid gap-6 lg:grid-cols-[190px_minmax(0,1fr)] lg:items-center">
                  <div className="relative flex min-h-[200px] items-start justify-center">
                    <div className="pointer-events-none absolute left-1/2 top-0 h-12 w-px -translate-x-1/2 bg-gradient-to-b from-white/45 via-white/12 to-transparent" />
                    <div className="pointer-events-none absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full border border-white/20 bg-[#090d12]" />

                    <motion.div
                      animate={{ y: [0, 10, 0], rotate: [0, 0.8, 0, -0.8, 0] }}
                      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                      className="relative mt-10"
                    >
                      <div className="absolute -left-5 top-8 h-10 w-10 rounded-full bg-red-500/16 blur-xl" />
                      <div className="absolute -right-5 bottom-5 h-10 w-10 rounded-full bg-green-500/16 blur-xl" />

                      <motion.div
                        animate={{
                          boxShadow: [
                            '0 0 24px rgba(239,68,68,0.14)',
                            '0 0 34px rgba(34,197,94,0.16)',
                            '0 0 26px rgba(156,163,175,0.14)',
                            '0 0 24px rgba(239,68,68,0.14)',
                          ],
                        }}
                        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                        className="relative h-[160px] w-[160px] rounded-full border border-white/10"
                        style={{
                          background: `conic-gradient(${chartStops})`,
                        }}
                      >
                        <div className="absolute inset-[14px] rounded-full border border-white/10 bg-[#070a0f]/95" />
                        <div className="absolute inset-[34px] flex items-center justify-center rounded-full border border-white/8 bg-black/30">
                          <div className="text-center">
                            <p className="text-[0.52rem] uppercase tracking-[0.24em] text-white/34">
                              Focus
                            </p>
                            <p className="mt-2 text-2xl font-light text-white">03</p>
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  </div>

                  <div className="space-y-3.5">
                    {projectFocus.map((item, index) => (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, y: 14 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.35 }}
                        transition={{ duration: 0.5, delay: index * 0.08 }}
                        className="rounded-[1.2rem] border border-white/10 bg-white/[0.04] p-3.5"
                      >
                        <div className="flex items-center justify-between gap-3">
                          <div className="flex items-center gap-2.5">
                            <span
                              className="h-3 w-3 rounded-full"
                              style={{
                                backgroundColor: item.color,
                                boxShadow: `0 0 14px ${item.glow}`,
                              }}
                            />
                            <span className="text-[0.72rem] uppercase tracking-[0.14em] text-white/72 sm:text-[0.78rem]">
                              {item.label}
                            </span>
                          </div>

                          <span className="text-[0.78rem] font-medium text-white/56">
                            {item.value}%
                          </span>
                        </div>

                        <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/[0.06]">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${item.value}%` }}
                            viewport={{ once: true, amount: 0.6 }}
                            transition={{ duration: 0.9, delay: 0.12 + index * 0.1, ease: 'easeOut' }}
                            className="h-full rounded-full"
                            style={{
                              background: `linear-gradient(90deg, ${item.color}, rgba(255,255,255,0.88))`,
                              boxShadow: `0 0 14px ${item.glow}`,
                            }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <p className="mt-5 text-[0.9rem] leading-7 text-white/56">
                  A compact read of the systems my experience points to most strongly:
                  full-stack builds, backend/API-heavy execution, and intelligent workflow extensions.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          {capabilityGroups.map((group, index) => {
            const accent = capabilityAccents[index % capabilityAccents.length]

            return (
              <Reveal key={group.title} delay={index * 0.05}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  className="group relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.02))] p-4 shadow-[0_14px_36px_rgba(0,0,0,0.24)] backdrop-blur-[12px] sm:p-5"
                >
                  <div
                    className="pointer-events-none absolute inset-0"
                    style={{
                      background: `radial-gradient(circle at top right, ${accent.glow}, transparent 32%)`,
                    }}
                  />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-2.5">
                        <span
                          className="h-2 w-2 rounded-full"
                          style={{ backgroundColor: accent.dot }}
                        />
                        <p className="text-[0.62rem] uppercase tracking-[0.26em] text-white/34">
                          Capability cluster
                        </p>
                      </div>

                      <span className="text-[0.56rem] uppercase tracking-[0.24em] text-white/24">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>

                    <h3 className="mt-3 text-[1rem] font-light uppercase tracking-[0.08em] text-white sm:text-[1.15rem]">
                      {group.title}
                    </h3>

                    <div className="mt-4 flex flex-wrap gap-2.5">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full px-3 py-1.5 text-[0.62rem] uppercase tracking-[0.14em] text-white/66"
                          style={{
                            background: accent.chipBg,
                            border: `1px solid ${accent.chipBorder}`,
                          }}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </section>
  )
}