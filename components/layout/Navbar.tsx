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
      className="pointer-events-none fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8"
    >
      <div className="pointer-events-auto mx-auto flex w-full max-w-[1320px] items-center justify-between gap-6">
        {/* LEFT LOGO */}
        <a
          href="#hero"
          className="shrink-0 transition duration-300 hover:scale-[1.03]"
        >
          <img
            src="/images/Mylogo1.png"
            alt="CarlosDev logo"
            draggable="false"
            className="
              block
              h-[110px] w-auto object-contain
              sm:h-[122px]
              md:h-[136px]
              lg:h-[145px]
              drop-shadow-[0_14px_30px_rgba(0,0,0,0.5)]
              brightness-[1.08]
              contrast-[1.1]
              saturate-[1.1]
            "
          />
        </a>

        {/* CENTER NAV */}
        <nav className="hidden flex-1 items-center justify-center gap-3 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="
                rounded-full
                border border-white/20
                bg-white/[0.06]
                px-6 py-3
                text-sm font-medium
                text-white/85
                backdrop-blur-[14px]
                shadow-[0_10px_30px_rgba(0,0,0,0.28)]
                transition duration-300
                hover:bg-white/[0.1]
                hover:text-white
                hover:border-white/30
              "
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </motion.header>
  )
}