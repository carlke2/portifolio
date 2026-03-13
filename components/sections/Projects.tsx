import { useState } from 'react'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import GlowButton from '../ui/GlowButton'
import { portfolioData } from '../../data/portfolio'

export default function Projects() {
  const projects = portfolioData.projects
  const [activeIndex, setActiveIndex] = useState(0)

  if (!projects.length) return null

  const marqueeProjects = [...projects, ...projects]
  const activeProject = projects[activeIndex]
  const activeSlug = activeProject.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')

  return (
    <section id="projects" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 bg-[#050912]" />
      <div className="absolute left-1/2 top-24 -z-10 h-[340px] w-[860px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(36,63,112,0.18),transparent_68%)] blur-3xl" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-44 bg-gradient-to-b from-transparent via-[#08111a]/50 to-[#050912]" />

      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Proof"
            title="Selected projects that reflect how I think, structure, and build."
            description="Each project is more than a UI exercise. It reflects workflow design, system thinking, and practical implementation."
          />
        </Reveal>

        <div className="relative mt-14">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-16 bg-gradient-to-r from-[#050912] via-[#050912]/92 to-transparent sm:w-24" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-16 bg-gradient-to-l from-[#050912] via-[#050912]/92 to-transparent sm:w-24" />

          <div className="rounded-[2.2rem] border border-white/10 bg-white/[0.035] p-3.5 shadow-[0_24px_80px_rgba(0,0,0,0.34)] backdrop-blur-[16px] sm:p-4">
            <div className="overflow-hidden">
              <div className="projects-marquee flex w-max gap-5 py-2 sm:gap-6">
                {marqueeProjects.map((project, index) => {
                  const originalIndex = index % projects.length
                  const isActive = originalIndex === activeIndex
                  const slug = project.title
                    .toLowerCase()
                    .replace(/[^a-z0-9]+/g, '-')
                    .replace(/^-|-$/g, '')

                  return (
                    <button
                      key={`${project.title}-${index}`}
                      type="button"
                      onClick={() => setActiveIndex(originalIndex)}
                      className={`group relative min-w-[320px] max-w-[320px] overflow-hidden rounded-[2rem] border p-4 text-left transition duration-500 sm:min-w-[440px] sm:max-w-[440px] sm:p-5 ${
                        isActive
                          ? 'border-white/18 bg-white/[0.07] shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_18px_50px_rgba(0,0,0,0.32),0_0_40px_rgba(40,90,180,0.18)]'
                          : 'border-white/10 bg-white/[0.045] shadow-[0_14px_40px_rgba(0,0,0,0.28),0_0_24px_rgba(33,74,148,0.08)] hover:border-white/16 hover:bg-white/[0.06] hover:shadow-[0_18px_55px_rgba(0,0,0,0.32),0_0_34px_rgba(38,88,180,0.16)]'
                      }`}
                    >
                      <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_top,rgba(64,110,205,0.14),transparent_42%),radial-gradient(circle_at_bottom,rgba(255,255,255,0.04),transparent_38%)] opacity-80" />
                      <div className="pointer-events-none absolute inset-[1px] rounded-[calc(2rem-1px)] bg-[linear-gradient(180deg,rgba(255,255,255,0.03),transparent_22%,transparent_78%,rgba(255,255,255,0.02))]" />

                      <div className="relative z-10 mb-4 flex items-center justify-between">
                        <span className="text-[0.62rem] uppercase tracking-[0.36em] text-white/34">
                          Build / {originalIndex + 1}
                        </span>

                        <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[0.58rem] uppercase tracking-[0.32em] text-white/38 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                          Live Preview
                        </span>
                      </div>

                      <div className="relative z-10 overflow-hidden rounded-[1.8rem] border border-white/10 bg-[linear-gradient(180deg,#040914,#07101d)] shadow-[inset_0_1px_0_rgba(255,255,255,0.03),0_0_22px_rgba(25,74,164,0.08)]">
                        <div className="flex items-center justify-between border-b border-white/8 px-5 py-4">
                          <span className="truncate text-[0.78rem] font-medium uppercase tracking-[0.26em] text-white/42">
                            /{slug}
                          </span>

                          <div className="flex items-center gap-2">
                            <span className="h-2.5 w-2.5 rounded-full bg-white/22" />
                            <span className="h-2.5 w-2.5 rounded-full bg-white/14" />
                            <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                          </div>
                        </div>

                        <div className="relative aspect-[1.18/1] overflow-hidden px-5 py-6 sm:px-6 sm:py-7">
                          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(27,72,143,0.18),transparent_46%),linear-gradient(180deg,rgba(4,8,18,0.98),rgba(3,7,15,1))]" />
                          <div className="absolute inset-0 opacity-[0.1]">
                            <div className="h-full w-full bg-[linear-gradient(to_bottom,transparent_0%,transparent_96%,rgba(255,255,255,0.08)_100%),linear-gradient(to_right,transparent_0%,transparent_96%,rgba(255,255,255,0.06)_100%)] bg-[length:100%_26px,26px_100%]" />
                          </div>

                          <div className="relative z-10 rounded-[1.55rem] border border-emerald-400/14 bg-[linear-gradient(180deg,rgba(0,0,0,0.28),rgba(0,0,0,0.12))] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03),0_0_22px_rgba(16,185,129,0.08)] backdrop-blur-md">
                            <p className="font-mono text-[0.78rem] leading-8 text-emerald-300/78 sm:text-[0.88rem]">
                              const project = {'{'}
                              <br />
                              &nbsp;&nbsp;name: '{project.title}',
                              <br />
                              &nbsp;&nbsp;focus: 'clean architecture',
                              <br />
                              &nbsp;&nbsp;stack: ['{project.stack[0]}'
                              {project.stack[1] ? `, '${project.stack[1]}'` : ''}],
                              <br />
                              {'}'}
                            </p>
                          </div>

                          <div className="absolute bottom-5 left-5 right-5 z-10 sm:bottom-6 sm:left-6 sm:right-6">
                            <div className="rounded-[1.35rem] border border-white/10 bg-[linear-gradient(180deg,rgba(20,25,38,0.7),rgba(14,18,30,0.55))] px-5 py-4 shadow-[0_14px_28px_rgba(0,0,0,0.25),0_0_24px_rgba(38,88,180,0.08)] backdrop-blur-xl">
                              <p className="text-[0.7rem] uppercase tracking-[0.38em] text-white/34">
                                Click to inspect
                              </p>
                              <p className="mt-2 text-[1.05rem] text-white/74 sm:text-[1.15rem]">
                                Read the project summary and open the link.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>

          <Reveal delay={0.12}>
            <div className="mx-auto mt-10 max-w-5xl rounded-[2.05rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.055),rgba(255,255,255,0.028))] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.3),0_0_42px_rgba(33,74,148,0.08)] backdrop-blur-[16px] sm:p-8">
              <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
                <div>
                  <p className="text-[0.68rem] uppercase tracking-[0.38em] text-white/34">
                    Selected build
                  </p>

                  <h3 className="mt-4 text-2xl font-light uppercase tracking-[0.16em] text-white sm:text-[2.35rem]">
                    {activeProject.title}
                  </h3>

                  <p className="mt-5 max-w-2xl text-base leading-8 text-white/62 sm:text-[1.02rem]">
                    {activeProject.description}
                  </p>
                </div>

                <div className="rounded-[1.7rem] border border-white/10 bg-black/20 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03),0_0_30px_rgba(40,90,180,0.08)] backdrop-blur-md">
                  <div className="flex items-center justify-between gap-4 border-b border-white/8 pb-4">
                    <span className="text-[0.62rem] uppercase tracking-[0.34em] text-white/34">
                      Project link
                    </span>
                    <span className="text-[0.62rem] uppercase tracking-[0.34em] text-white/24">
                      /projects/{activeSlug}
                    </span>
                  </div>

                  <div className="mt-5">
                    <p className="text-[0.66rem] uppercase tracking-[0.34em] text-white/34">
                      Stack
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2.5">
                      {activeProject.stack.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[0.68rem] uppercase tracking-[0.18em] text-white/62 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6">
                    <GlowButton href={activeProject.link} variant="secondary">
                      Open Project
                    </GlowButton>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>

      <style>{`
        @keyframes projectsMarqueeRight {
          0% {
            transform: translateX(calc(-50% - 0.75rem));
          }
          100% {
            transform: translateX(0);
          }
        }

        .projects-marquee {
          animation: projectsMarqueeRight 42s linear infinite;
          will-change: transform;
        }

        .projects-marquee:hover {
          animation-play-state: paused;
        }

        @media (max-width: 640px) {
          .projects-marquee {
            animation-duration: 30s;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .projects-marquee {
            animation: none;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  )
}