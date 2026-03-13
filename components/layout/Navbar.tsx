import { motion } from 'framer-motion'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="pointer-events-none fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4 lg:px-8"
    >
      <div className="pointer-events-auto mx-auto flex w-full max-w-[1320px] flex-col gap-3 md:flex-row md:items-center md:justify-between md:gap-6">
        {/* LEFT LOGO */}
        <a
          href="#hero"
          className="shrink-0 self-start transition duration-300 hover:scale-[1.03]"
        >
          <img
            src="/images/Mylogo1.png"
            alt="CarlosDev logo"
            draggable="false"
            className="
              block
              h-[78px] w-auto object-contain
              sm:h-[92px]
              md:h-[118px]
              lg:h-[145px]
              drop-shadow-[0_14px_30px_rgba(0,0,0,0.5)]
              brightness-[1.08]
              contrast-[1.1]
              saturate-[1.1]
            "
          />
        </a>

        {/* FLOATING NAV PILLS */}
        <nav className="w-full md:flex-1">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 md:justify-center [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="
                  shrink-0
                  rounded-full
                  border border-white/20
                  bg-white/[0.06]
                  px-4 py-2.5
                  text-[13px] font-medium
                  text-white/85
                  backdrop-blur-[14px]
                  shadow-[0_10px_30px_rgba(0,0,0,0.28)]
                  transition duration-300
                  hover:bg-white/[0.1]
                  hover:text-white
                  hover:border-white/30
                  sm:px-5 sm:py-3 sm:text-sm
                  lg:px-6
                "
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </motion.header>
  )
}