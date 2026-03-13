import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import Container from '../ui/Container'
import Reveal from '../ui/Reveal'
import { portfolioData } from '../../data/portfolio'

const bringItems = [
  'Clean frontend architecture',
  'Product-focused implementation',
  'Strong dashboard and workflow design thinking',
  'Developer mindset with visual discipline',
]

export default function About() {
  const typingText = useMemo(
    () =>
      [
        ' infrastructure that feel premium.',
        ' Systems that scale properly.',
        ' Experiences that communicate confidence from the first interaction.',
      ].join('\n'),
    []
  )

  const [typedIndex, setTypedIndex] = useState(0)

  useEffect(() => {
    if (typedIndex >= typingText.length) return

    const timer = setTimeout(() => {
      setTypedIndex((prev) => prev + 1)
    }, 20)

    return () => clearTimeout(timer)
  }, [typedIndex, typingText])

  const typedOutput = typingText.slice(0, typedIndex)

  const aboutLines = portfolioData.about
    .split(/(?<=[.!?])\s+/)
    .filter(Boolean)

  return (
    <section id="about" className="relative py-24 sm:py-32">
      <Container>
        <Reveal>
          <div className="max-w-6xl">
            <p className="font-mono text-[12px] uppercase tracking-[0.34em] text-white/45">
              IDENTITY
            </p>

            <h2
              className="
                mt-5
                max-w-5xl
                text-[clamp(2.8rem,6vw,6.2rem)]
                font-extralight italic
                uppercase
                leading-[0.92]
                tracking-[-0.05em]
                text-white
              "
            >
              A developer focused on products, not just pages.
            </h2>

            <div className="mt-10 max-w-5xl rounded-[1.6rem] border border-emerald-400/10 bg-[#08110c]/55 px-5 py-5 shadow-[0_18px_50px_rgba(0,0,0,0.28)] backdrop-blur-[14px] sm:px-6">
              <div className="font-mono text-[15px] leading-8 whitespace-pre-line text-[#86efac] sm:text-[16px]">
                {typedOutput}
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.9, repeat: Infinity, ease: 'easeInOut' }}
                  className="ml-1 text-[#d9f99d]"
                >
                  |
                </motion.span>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-10 lg:grid-cols-[1.18fr_0.82fr] lg:items-start">
          {/* ABOUT ME PANEL */}
          <Reveal>
            <div className="relative pt-10">
              <div className="absolute left-[18%] top-0 h-10 w-px bg-white/18" />
              <div className="absolute left-[18%] top-0 h-2.5 w-2.5 -translate-x-1/2 rounded-full border border-white/25 bg-white/12" />

              <motion.div
                className="absolute inset-0 translate-x-4 translate-y-5 rounded-[2rem] bg-emerald-400/10 blur-3xl"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: [0.08, 0.22, 0.08], scale: [0.98, 1.03, 0.98] }}
                viewport={{ once: false, amount: 0.35 }}
                transition={{ duration: 5.4, repeat: Infinity, ease: 'easeInOut' }}
              />

              <motion.div
                className="-rotate-[2.2deg]"
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
              >
                <motion.div
                  className="relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-[#0b1017]/92 shadow-[0_30px_80px_rgba(0,0,0,0.42)] backdrop-blur-xl"
                  whileInView={{ y: [0, -10, 0] }}
                  viewport={{ once: false, amount: 0.35 }}
                  transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.015))]" />
                  <div className="absolute inset-0 opacity-40 [background:radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.06),transparent_24%),radial-gradient(circle_at_80%_18%,rgba(59,130,246,0.08),transparent_22%),radial-gradient(circle_at_50%_80%,rgba(6,182,212,0.05),transparent_30%)]" />

                  <div className="relative flex items-center justify-between border-b border-white/8 bg-white/[0.03] px-5 py-4">
                    <div className="flex items-center gap-2">
                      <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                      <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                      <span className="h-3 w-3 rounded-full bg-[#28c840]" />
                    </div>

                    <div className="rounded-full border border-white/8 bg-white/[0.04] px-3 py-1 font-mono text-[11px] text-white/45">
                      aboutMe.ts
                    </div>
                  </div>

                  <div className="relative px-5 py-6 sm:px-6 sm:py-7">
                    <div className="space-y-2 font-mono text-[13px] sm:text-[14px]">
                      <div className="flex gap-4">
                        <span className="w-7 shrink-0 text-right text-white/22">01</span>
                        <span className="text-[#c084fc]">const</span>
                        <span className="ml-1 text-[#93c5fd]">aboutMe</span>
                        <span className="ml-1 text-white/82">=</span>
                        <span className="ml-1 text-[#f8d38f]">`</span>
                      </div>

                      {aboutLines.map((line, index) => (
                        <div key={index} className="flex gap-4">
                          <span className="w-7 shrink-0 text-right text-white/22">
                            {String(index + 2).padStart(2, '0')}
                          </span>
                          <span className="text-[#f8d38f]">{line}</span>
                        </div>
                      ))}

                      <div className="flex gap-4">
                        <span className="w-7 shrink-0 text-right text-white/22">
                          {String(aboutLines.length + 2).padStart(2, '0')}
                        </span>
                        <span className="text-[#f8d38f]">`</span>
                      </div>

                      <div className="mt-6 border-t border-white/8 pt-5">
                        <div className="flex gap-4">
                          <span className="w-7 shrink-0 text-right text-white/22">
                            {String(aboutLines.length + 3).padStart(2, '0')}
                          </span>
                          <span className="text-[#64748b]">// building refined digital experiences</span>
                        </div>
                        <div className="mt-2 flex gap-4">
                          <span className="w-7 shrink-0 text-right text-white/22">
                            {String(aboutLines.length + 4).padStart(2, '0')}
                          </span>
                          <span className="text-[#64748b]">// with structure, elegance, and purpose</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </Reveal>

          {/* WHAT I BRING PANEL */}
          <Reveal delay={0.1}>
            <div className="relative pt-14">
              <div className="absolute right-[22%] top-0 h-14 w-px bg-white/18" />
              <div className="absolute right-[22%] top-0 h-2.5 w-2.5 translate-x-1/2 rounded-full border border-white/25 bg-white/12" />

              <motion.div
                className="absolute inset-0 translate-x-4 translate-y-5 rounded-[2rem] bg-sky-400/10 blur-3xl"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: [0.08, 0.2, 0.08], scale: [0.98, 1.03, 0.98] }}
                viewport={{ once: false, amount: 0.35 }}
                transition={{ duration: 5.8, repeat: Infinity, ease: 'easeInOut' }}
              />

              <motion.div
                className="rotate-[5deg]"
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.75, ease: 'easeOut' }}
              >
                <motion.div
                  className="relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-[#0d121a]/92 shadow-[0_26px_70px_rgba(0,0,0,0.38)] backdrop-blur-xl"
                  whileInView={{ y: [0, -8, 0] }}
                  viewport={{ once: false, amount: 0.35 }}
                  transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.015))]" />
                  <div className="absolute inset-0 opacity-35 [background:radial-gradient(circle_at_18%_16%,rgba(255,255,255,0.05),transparent_22%),radial-gradient(circle_at_82%_18%,rgba(59,130,246,0.08),transparent_20%),radial-gradient(circle_at_52%_84%,rgba(99,102,241,0.06),transparent_26%)]" />

                  <div className="relative flex items-center justify-between border-b border-white/8 bg-white/[0.03] px-5 py-4">
                    <div className="flex items-center gap-2">
                      <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                      <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                      <span className="h-3 w-3 rounded-full bg-[#28c840]" />
                    </div>

                    <div className="rounded-full border border-white/8 bg-white/[0.04] px-3 py-1 font-mono text-[11px] text-white/45">
                      whatIBring.ts
                    </div>
                  </div>

                  <div className="relative px-5 py-6 sm:px-6 sm:py-7">
                    <div className="space-y-3 font-mono text-[13px] sm:text-[14px]">
                      <div className="flex gap-4">
                        <span className="w-7 shrink-0 text-right text-white/22">01</span>
                        <span className="text-[#c084fc]">const</span>
                        <span className="ml-1 text-[#93c5fd]">whatIBring</span>
                        <span className="ml-1 text-white/82">=</span>
                        <span className="ml-1 text-white/82">[</span>
                      </div>

                      {bringItems.map((item, index) => (
                        <div key={item} className="flex gap-4">
                          <span className="w-7 shrink-0 text-right text-white/22">
                            {String(index + 2).padStart(2, '0')}
                          </span>
                          <span className="text-[#86efac]">'{item}'</span>
                          <span className="text-white/65">,</span>
                        </div>
                      ))}

                      <div className="flex gap-4">
                        <span className="w-7 shrink-0 text-right text-white/22">
                          {String(bringItems.length + 2).padStart(2, '0')}
                        </span>
                        <span className="text-white/82">]</span>
                      </div>

                      <div className="mt-6 rounded-2xl border border-white/8 bg-black/20 p-4">
                        <div className="mb-2 text-[11px] uppercase tracking-[0.28em] text-white/35">
                          developer.notes
                        </div>
                        <p className="font-sans text-[14px] leading-7 text-white/68">
                          Frontend structure, product thinking, workflow clarity,
                          and strong visual execution are the core of how I build.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}