import { useState } from 'react'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import { portfolioData } from '../../data/portfolio'

export default function Journey() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section id="journey" className="relative overflow-hidden py-20 sm:py-24">
      <div className="absolute inset-0 -z-20 bg-[#05070b]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(255,255,255,0.015),transparent_24%,transparent_76%,rgba(255,255,255,0.01))]" />
      <div className="absolute left-1/2 top-16 -z-10 h-[280px] w-[760px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(116,18,18,0.18),transparent_70%)] blur-3xl" />
      <div className="absolute right-[-8%] top-0 -z-10 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(180,25,25,0.12),transparent_68%)] blur-3xl" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-b from-transparent to-black/30" />

      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Growth Story"
            title="The journey behind the work."
            description="A cleaner chapter-based view of how the process, mindset, and execution kept getting stronger."
          />
        </Reveal>

        <div className="mx-auto mt-12 max-w-5xl space-y-4 sm:mt-14">
          {portfolioData.journey.map((item, index) => {
            const step = String(index + 1).padStart(2, '0')
            const isActive = activeIndex === index
            const preview =
              item.description.length > 110
                ? `${item.description.slice(0, 110)}...`
                : item.description

            const notes = [
              {
                label: 'What was happening',
                value: item.description,
              },
              {
                label: 'What changed',
                value: `This chapter pushed me toward better clarity, stronger decisions, and a more mature understanding of how good work should feel, not just function.`,
              },
              {
                label: 'What it added',
                value: `It sharpened the way I approach ${item.title.toLowerCase()} — with more structure, cleaner execution, and stronger product awareness.`,
              },
            ]

            return (
              <Reveal key={item.title} delay={index * 0.06}>
                <article
                  className={`overflow-hidden rounded-[1.75rem] border transition-all duration-500 ${
                    isActive
                      ? 'border-white/16 bg-[linear-gradient(180deg,rgba(255,255,255,0.075),rgba(255,255,255,0.035))] shadow-[0_24px_70px_rgba(0,0,0,0.34),0_0_40px_rgba(149,27,27,0.08)]'
                      : 'border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] shadow-[0_16px_42px_rgba(0,0,0,0.24)] hover:border-white/14 hover:bg-white/[0.05]'
                  }`}
                >
                  <button
                    type="button"
                    aria-expanded={isActive}
                    onClick={() =>
                      setActiveIndex(isActive ? -1 : index)
                    }
                    className="flex w-full items-start justify-between gap-4 px-5 py-5 text-left sm:px-7 sm:py-6"
                  >
                    <div className="flex min-w-0 items-start gap-4 sm:gap-5">
                      <div
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border text-[0.78rem] font-medium tracking-[0.22em] transition-all duration-500 ${
                          isActive
                            ? 'border-red-400/20 bg-red-500/10 text-red-200'
                            : 'border-white/10 bg-white/[0.04] text-white/52'
                        }`}
                      >
                        {step}
                      </div>

                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-3">
                          <p className="text-[0.68rem] uppercase tracking-[0.3em] text-white/34">
                            {item.period}
                          </p>
                          <span className="h-1 w-1 rounded-full bg-white/18" />
                          <p className="text-[0.68rem] uppercase tracking-[0.3em] text-white/24">
                            Chapter {step}
                          </p>
                        </div>

                        <h3 className="mt-3 text-xl font-light uppercase tracking-[0.12em] text-white sm:text-[1.55rem]">
                          {item.title}
                        </h3>

                        <p className="mt-3 max-w-2xl text-sm leading-7 text-white/56 sm:text-[0.98rem]">
                          {isActive ? item.description : preview}
                        </p>
                      </div>
                    </div>

                    <div
                      className={`mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ${
                        isActive
                          ? 'border-red-400/18 bg-red-500/10 text-red-200'
                          : 'border-white/10 bg-white/[0.03] text-white/48'
                      }`}
                    >
                      <span
                        className={`text-xl leading-none transition-transform duration-500 ${
                          isActive ? 'rotate-45' : 'rotate-0'
                        }`}
                      >
                        +
                      </span>
                    </div>
                  </button>

                  <div
                    className={`grid transition-all duration-500 ease-out ${
                      isActive
                        ? 'grid-rows-[1fr] opacity-100'
                        : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="border-t border-white/8 px-5 pb-5 pt-5 sm:px-7 sm:pb-7">
                        <div className="grid gap-4 md:grid-cols-3">
                          {notes.map((note) => (
                            <div
                              key={note.label}
                              className="rounded-[1.25rem] border border-white/8 bg-white/[0.03] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
                            >
                              <p className="text-[0.62rem] uppercase tracking-[0.28em] text-white/30">
                                {note.label}
                              </p>
                              <p className="mt-3 text-sm leading-7 text-white/64">
                                {note.value}
                              </p>
                            </div>
                          ))}
                        </div>

                        <div className="mt-5 flex items-center gap-3">
                          <span className="h-2 w-2 rounded-full bg-red-400/80 shadow-[0_0_16px_rgba(248,113,113,0.4)]" />
                          <p className="text-[0.72rem] uppercase tracking-[0.28em] text-white/32">
                            Growth became more intentional here
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </section>
  )
}