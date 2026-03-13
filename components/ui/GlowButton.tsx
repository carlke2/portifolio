import type { ReactNode } from 'react'

type GlowButtonProps = {
  children: ReactNode
  href?: string
  variant?: 'primary' | 'secondary'
  className?: string
}

export default function GlowButton({
  children,
  href,
  variant = 'primary',
  className = '',
}: GlowButtonProps) {
  const base =
    'inline-flex items-center justify-center rounded-full border px-6 py-3 text-sm font-medium uppercase tracking-[0.06em] transition duration-300 backdrop-blur-[14px]'

  const styles =
    variant === 'primary'
      ? 'border-white/20 bg-white text-black shadow-[0_10px_30px_rgba(0,0,0,0.28)] hover:scale-[1.02]'
      : 'border-white/14 bg-white/[0.05] text-white/85 shadow-[0_10px_30px_rgba(0,0,0,0.22)] hover:bg-white/[0.09] hover:text-white hover:border-white/22'

  if (href) {
    return (
      <a href={href} className={`${base} ${styles} ${className}`}>
        {children}
      </a>
    )
  }

  return <button className={`${base} ${styles} ${className}`}>{children}</button>
}