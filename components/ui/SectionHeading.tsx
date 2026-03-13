type SectionHeadingProps = {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
}: SectionHeadingProps) {
  const isCenter = align === 'center'

  return (
    <div className={isCenter ? 'mx-auto max-w-4xl text-center' : 'max-w-4xl'}>
      {eyebrow ? (
        <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.32em] text-white/45 sm:text-xs">
          {eyebrow}
        </p>
      ) : null}

      <h2 className="text-3xl font-extralight uppercase leading-[0.95] tracking-[-0.045em] text-white sm:text-4xl md:text-5xl lg:text-6xl">
        {title}
      </h2>

      {description ? (
        <p className="mt-6 max-w-3xl text-base leading-8 text-white/62 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  )
}