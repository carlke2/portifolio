import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

export default function Hero() {
  const [openSummary, setOpenSummary] = useState(false)

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-[#070b11] text-white"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/images/image.png"
          alt="Hero background"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/42" />
        <div className="absolute inset-x-0 bottom-0 h-[260px] bg-gradient-to-b from-transparent via-[#070b11]/60 to-[#070b11]" />
      </div>

      {/* Hero content */}
      <div className="relative z-10 flex min-h-screen w-full flex-col pt-[110px]">
        <div className="mx-auto w-full max-w-[1180px] px-6 pt-8 md:px-8 md:pt-10">
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="
              w-full
              text-left
              font-extralight
              uppercase
              leading-[0.9]
              tracking-[-0.055em]
              text-white
              text-[50px]
              sm:text-[72px]
              md:text-[92px]
              lg:text-[84px]
            "
          >
            <span className="block">SOFTWARE BUILT</span>
            <span className="block pl-[14vw] md:pl-[16vw]">WITH PURPOSE</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
            className="
              mt-12
              max-w-[380px]
              text-[17px]
              leading-[1.55]
              text-white/88
            "
          >
            I’m a software developer passionate about creating digital experiences
            that are functional, elegant, and built to solve real challenges.
          </motion.p>
        </div>

        {/* Bottom glass block */}
        <div className="mt-auto px-4 pb-7 sm:px-6 lg:px-8">
          <div className="relative mx-auto h-[220px] w-full max-w-[1080px]">
            <svg
              viewBox="0 0 1280 260"
              className="absolute inset-0 h-full w-full"
              preserveAspectRatio="none"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient
                  id="glassFillLeft"
                  x1="0"
                  y1="0"
                  x2="506"
                  y2="0"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0%" stopColor="rgba(255,255,255,0.09)" />
                  <stop offset="35%" stopColor="rgba(255,255,255,0.05)" />
                  <stop offset="70%" stopColor="rgba(255,255,255,0.12)" />
                  <stop offset="100%" stopColor="rgba(255,255,255,0.06)" />
                </linearGradient>

                <linearGradient
                  id="glassFillRight"
                  x1="774"
                  y1="0"
                  x2="1280"
                  y2="0"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0%" stopColor="rgba(255,255,255,0.06)" />
                  <stop offset="30%" stopColor="rgba(255,255,255,0.12)" />
                  <stop offset="65%" stopColor="rgba(255,255,255,0.05)" />
                  <stop offset="100%" stopColor="rgba(255,255,255,0.09)" />
                </linearGradient>

                <linearGradient
                  id="glassShade"
                  x1="640"
                  y1="20"
                  x2="640"
                  y2="190"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0%" stopColor="rgba(255,255,255,0.05)" />
                  <stop offset="100%" stopColor="rgba(0,0,0,0.22)" />
                </linearGradient>

                <filter
                  id="shadow"
                  x="-80"
                  y="-80"
                  width="1440"
                  height="420"
                  filterUnits="userSpaceOnUse"
                >
                  <feDropShadow
                    dx="0"
                    dy="18"
                    stdDeviation="20"
                    floodColor="rgba(0,0,0,0.30)"
                  />
                </filter>

                <clipPath id="leftClip">
                  <path
                    d="
                      M 38 20
                      H 470
                      C 490 20, 506 37, 506 58
                      V 160
                      C 506 176, 490 190, 470 190
                      H 38
                      C 17 190, 0 176, 0 160
                      V 58
                      C 0 37, 17 20, 38 20
                      Z
                    "
                  />
                </clipPath>

                <clipPath id="rightClip">
                  <path
                    d="
                      M 810 20
                      H 1242
                      C 1263 20, 1280 37, 1280 58
                      V 160
                      C 1280 176, 1263 190, 1242 190
                      H 810
                      C 790 190, 774 176, 774 160
                      V 58
                      C 774 37, 790 20, 810 20
                      Z
                    "
                  />
                </clipPath>

                <linearGradient
                  id="streak1"
                  x1="140"
                  y1="0"
                  x2="250"
                  y2="0"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0%" stopColor="rgba(255,255,255,0)" />
                  <stop offset="50%" stopColor="rgba(255,255,255,0.09)" />
                  <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                </linearGradient>

                <linearGradient
                  id="streak2"
                  x1="430"
                  y1="0"
                  x2="520"
                  y2="0"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0%" stopColor="rgba(255,255,255,0)" />
                  <stop offset="50%" stopColor="rgba(255,255,255,0.11)" />
                  <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                </linearGradient>

                <linearGradient
                  id="streak3"
                  x1="820"
                  y1="0"
                  x2="930"
                  y2="0"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0%" stopColor="rgba(255,255,255,0)" />
                  <stop offset="50%" stopColor="rgba(255,255,255,0.10)" />
                  <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                </linearGradient>
              </defs>

              <g transform="translate(0,40)">
                <g filter="url(#shadow)">
                  <path
                    d="
                      M 38 20
                      H 470
                      C 490 20, 506 37, 506 58
                      V 160
                      C 506 176, 490 190, 470 190
                      H 38
                      C 17 190, 0 176, 0 160
                      V 58
                      C 0 37, 17 20, 38 20
                      Z
                    "
                    fill="rgba(255,255,255,0.06)"
                  />
                  <path
                    d="
                      M 38 20
                      H 470
                      C 490 20, 506 37, 506 58
                      V 160
                      C 506 176, 490 190, 470 190
                      H 38
                      C 17 190, 0 176, 0 160
                      V 58
                      C 0 37, 17 20, 38 20
                      Z
                    "
                    fill="url(#glassFillLeft)"
                    opacity="0.95"
                  />
                  <path
                    d="
                      M 38 20
                      H 470
                      C 490 20, 506 37, 506 58
                      V 160
                      C 506 176, 490 190, 470 190
                      H 38
                      C 17 190, 0 176, 0 160
                      V 58
                      C 0 37, 17 20, 38 20
                      Z
                    "
                    fill="url(#glassShade)"
                    opacity="0.7"
                  />
                  <path
                    d="
                      M 38 20
                      H 470
                      C 490 20, 506 37, 506 58
                      V 160
                      C 506 176, 490 190, 470 190
                      H 38
                      C 17 190, 0 176, 0 160
                      V 58
                      C 0 37, 17 20, 38 20
                      Z
                    "
                    stroke="rgba(255,255,255,0.18)"
                    strokeWidth="1.2"
                  />

                  <path
                    d="
                      M 810 20
                      H 1242
                      C 1263 20, 1280 37, 1280 58
                      V 160
                      C 1280 176, 1263 190, 1242 190
                      H 810
                      C 790 190, 774 176, 774 160
                      V 58
                      C 774 37, 790 20, 810 20
                      Z
                    "
                    fill="rgba(255,255,255,0.06)"
                  />
                  <path
                    d="
                      M 810 20
                      H 1242
                      C 1263 20, 1280 37, 1280 58
                      V 160
                      C 1280 176, 1263 190, 1242 190
                      H 810
                      C 790 190, 774 176, 774 160
                      V 58
                      C 774 37, 790 20, 810 20
                      Z
                    "
                    fill="url(#glassFillRight)"
                    opacity="0.95"
                  />
                  <path
                    d="
                      M 810 20
                      H 1242
                      C 1263 20, 1280 37, 1280 58
                      V 160
                      C 1280 176, 1263 190, 1242 190
                      H 810
                      C 790 190, 774 176, 774 160
                      V 58
                      C 774 37, 790 20, 810 20
                      Z
                    "
                    fill="url(#glassShade)"
                    opacity="0.7"
                  />
                  <path
                    d="
                      M 810 20
                      H 1242
                      C 1263 20, 1280 37, 1280 58
                      V 160
                      C 1280 176, 1263 190, 1242 190
                      H 810
                      C 790 190, 774 176, 774 160
                      V 58
                      C 774 37, 790 20, 810 20
                      Z
                    "
                    stroke="rgba(255,255,255,0.18)"
                    strokeWidth="1.2"
                  />
                </g>

                <g clipPath="url(#leftClip)" opacity="0.78">
                  <rect x="145" y="10" width="105" height="196" fill="url(#streak1)" />
                  <rect x="380" y="10" width="90" height="196" fill="url(#streak2)" />
                </g>

                <g clipPath="url(#rightClip)" opacity="0.78">
                  <rect x="860" y="10" width="110" height="196" fill="url(#streak3)" />
                </g>
              </g>

              <g>
                <circle
                  cx="640"
                  cy="145"
                  r="82"
                  fill="none"
                  stroke="rgba(255,255,255,0.22)"
                  strokeWidth="1.4"
                />
                <circle
                  cx="640"
                  cy="145"
                  r="72"
                  fill="white"
                  stroke="rgba(255,255,255,0.95)"
                  strokeWidth="2"
                />
              </g>
            </svg>

            <button
              type="button"
              onClick={() => setOpenSummary(true)}
              aria-label="Discover more about me"
              className="
                absolute left-1/2 top-[123px] z-20
                flex h-[144px] w-[144px]
                -translate-x-1/2 -translate-y-1/2
                items-center justify-center
                rounded-full
                text-center
                text-[17px] font-medium uppercase tracking-[0.04em]
                text-black
                transition duration-300
                hover:scale-[1.04]
                active:scale-[0.98]
              "
            >
              <span className="leading-[1.15]">
                DISCOVER
                <br />
                MORE
              </span>
            </button>

            <div className="absolute bottom-0 left-0 right-0 z-10 flex h-[190px] items-center justify-between px-7">
              <div className="flex items-center gap-5">
                <div className="h-[94px] w-[94px] overflow-hidden rounded-[24px] border border-white/10 bg-white/5">
                  <img
                    src="/images/image.png"
                    alt="Left preview"
                    className="h-full w-full object-cover object-left"
                  />
                </div>

                <p className="max-w-[240px] text-[15px] leading-[1.45] text-white/90">
                  I use modern development tools and best practices to build fast,
                  secure, and scalable applications.
                </p>
              </div>

              <div className="w-[280px]" />

              <div className="flex items-center gap-5">
                <div className="h-[94px] w-[94px] overflow-hidden rounded-[24px] border border-white/10 bg-white/5">
                  <img
                    src="/images/image.png"
                    alt="Right preview"
                    className="h-full w-full object-cover object-center"
                  />
                </div>

                <p className="max-w-[240px] text-[15px] leading-[1.45] text-white/90">
                  My goal is to help ideas come to life through thoughtful code,
                  strong systems, and user-centered design.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {openSummary ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-40 flex items-center justify-center bg-black/45 px-4 backdrop-blur-[6px]"
            onClick={() => setOpenSummary(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 18, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.96 }}
              transition={{ duration: 0.28, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-[620px] rounded-[2rem] border border-white/12 bg-white/[0.06] p-7 text-white shadow-[0_25px_70px_rgba(0,0,0,0.35)] backdrop-blur-[18px] sm:p-9"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.28em] text-white/45">
                    Discover More
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
                    A brief summary about me
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={() => setOpenSummary(false)}
                  className="rounded-full border border-white/12 bg-white/5 px-4 py-2 text-sm text-white/75 transition hover:bg-white/10 hover:text-white"
                >
                  Close
                </button>
              </div>

              <div className="mt-6">
                <div className="space-y-4 text-[15px] leading-7 text-white/72 sm:text-base">
                  <p>
                    I’m a software developer focused on building clean, functional,
                    and visually strong digital products.
                  </p>
                  <p>
                    My work blends frontend development, product thinking, and
                    practical system design so that what I build is not only
                    attractive, but also useful and scalable.
                  </p>
                  <p>
                    I care about experiences that feel smooth, intentional, and
                    professional from the first interaction to the final workflow.
                  </p>
                  <p>
                    I enjoy turning ideas into real products through thoughtful
                    code, structured implementation, and attention to detail.
                  </p>
                </div>

                <div className="mt-7">
                  <a
                    href="/images/cv.pdf"
                    download="Salat-Kikemoi-CV.pdf"
                    className="inline-flex items-center justify-center rounded-full border border-orange-400/30 bg-orange-500 px-5 py-2.5 text-sm font-medium text-white transition hover:border-orange-300 hover:bg-orange-400"
                  >
                    My Resume
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  )
}