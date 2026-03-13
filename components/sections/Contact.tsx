import { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import Container from '../ui/Container'
import Reveal from '../ui/Reveal'
import { portfolioData } from '../../data/portfolio'

type ContactFormState = {
  name: string
  email: string
  projectInformation: string
  'bot-field': string
}

const encode = (data: Record<string, string>) =>
  Object.keys(data)
    .map(
      (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key] ?? '')}`
    )
    .join('&')

export default function Contact() {
  const [form, setForm] = useState<ContactFormState>({
    name: '',
    email: '',
    projectInformation: '',
    'bot-field': '',
  })

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>(
    'idle'
  )

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    const field = name as keyof ContactFormState

    setForm((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'contact',
          ...form,
        }),
      })

      setStatus('success')
      setForm({
        name: '',
        email: '',
        projectInformation: '',
        'bot-field': '',
      })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-black py-10 sm:py-12 lg:py-14"
    >
      <div className="absolute inset-0 -z-30 bg-[linear-gradient(90deg,#040507_0%,#07080b_42%,#140202_62%,#3e0000_82%,#7a0000_100%)]" />
      <div className="absolute right-[-10%] top-0 -z-20 h-full w-[58%] bg-[radial-gradient(circle_at_top_right,rgba(220,0,0,0.52),rgba(110,0,0,0.28)_42%,transparent_76%)]" />
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(180deg,rgba(0,0,0,0.08),rgba(0,0,0,0.18)_55%,rgba(0,0,0,0.32)_100%)]" />
      <div className="absolute bottom-[-100px] left-[-50px] -z-10 h-[220px] w-[170px] rotate-[18deg] bg-white/15 blur-[72px]" />

      <div className="pointer-events-none absolute left-0 top-0 -z-10 hidden h-full w-[42%] opacity-65 lg:block">
        <svg
          viewBox="0 0 700 900"
          className="h-full w-full"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="meshFill" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#1a1d22" />
              <stop offset="55%" stopColor="#0d0f13" />
              <stop offset="100%" stopColor="#050608" />
            </linearGradient>
          </defs>

          <polygon points="40,30 240,20 310,170 120,250 20,140" fill="url(#meshFill)" />
          <polygon points="240,20 470,30 520,190 310,170" fill="url(#meshFill)" />
          <polygon points="120,250 310,170 355,390 130,470 40,330" fill="url(#meshFill)" />
          <polygon points="310,170 520,190 540,410 355,390" fill="url(#meshFill)" />
          <polygon points="130,470 355,390 340,650 120,690 30,560" fill="url(#meshFill)" />
          <polygon points="355,390 540,410 500,650 340,650" fill="url(#meshFill)" />
          <polygon points="120,690 340,650 280,860 80,880 20,760" fill="url(#meshFill)" />

          <g stroke="rgba(255,255,255,0.10)" strokeWidth="2">
            <line x1="40" y1="30" x2="240" y2="20" />
            <line x1="240" y1="20" x2="310" y2="170" />
            <line x1="310" y1="170" x2="120" y2="250" />
            <line x1="120" y1="250" x2="40" y2="30" />

            <line x1="240" y1="20" x2="470" y2="30" />
            <line x1="470" y1="30" x2="520" y2="190" />
            <line x1="520" y1="190" x2="310" y2="170" />

            <line x1="120" y1="250" x2="310" y2="170" />
            <line x1="310" y1="170" x2="355" y2="390" />
            <line x1="355" y1="390" x2="130" y2="470" />
            <line x1="130" y1="470" x2="120" y2="250" />

            <line x1="310" y1="170" x2="520" y2="190" />
            <line x1="520" y1="190" x2="540" y2="410" />
            <line x1="540" y1="410" x2="355" y2="390" />

            <line x1="130" y1="470" x2="355" y2="390" />
            <line x1="355" y1="390" x2="340" y2="650" />
            <line x1="340" y1="650" x2="120" y2="690" />
            <line x1="120" y1="690" x2="130" y2="470" />
          </g>

          <g fill="rgba(0,0,0,0.85)" stroke="rgba(255,255,255,0.08)" strokeWidth="2">
            <circle cx="40" cy="30" r="10" />
            <circle cx="240" cy="20" r="10" />
            <circle cx="470" cy="30" r="10" />
            <circle cx="520" cy="190" r="10" />
            <circle cx="310" cy="170" r="10" />
            <circle cx="120" cy="250" r="10" />
            <circle cx="355" cy="390" r="10" />
            <circle cx="540" cy="410" r="10" />
            <circle cx="130" cy="470" r="10" />
            <circle cx="340" cy="650" r="10" />
            <circle cx="120" cy="690" r="10" />
          </g>
        </svg>
      </div>

      <Container>
        <Reveal>
          <div className="relative mx-auto max-w-6xl">
            <div className="grid items-start gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:gap-8">
              <div className="relative flex flex-col justify-between pt-1 lg:min-h-[360px]">
                <div>
                  <h2 className="max-w-[460px] text-[2rem] font-light leading-[0.94] tracking-[-0.045em] text-white sm:text-[2.9rem] lg:text-[3.9rem]">
                    Let’s build <span className="font-semibold text-[#d70d0d]">great</span>
                    <br />
                    apps together.
                  </h2>
                </div>

                <div className="mt-6 max-w-[250px] space-y-2.5 text-[0.9rem] text-white/58 lg:mt-8">
                  <a
                    href={`mailto:${portfolioData.contact.email}`}
                    className="block transition hover:text-white/85"
                  >
                    {portfolioData.contact.email}
                  </a>

                  {portfolioData.contact.github && (
                    <a
                      href={portfolioData.contact.github}
                      target="_blank"
                      rel="noreferrer"
                      className="block transition hover:text-white/85"
                    >
                      GitHub Profile
                    </a>
                  )}

                  {portfolioData.contact.linkedin && (
                    <a
                      href={portfolioData.contact.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="block transition hover:text-white/85"
                    >
                      LinkedIn Profile
                    </a>
                  )}
                </div>
              </div>

              <div className="flex flex-col justify-between pt-1 lg:pt-8">
                <div className="max-w-[620px]">
                  <p className="text-[1.15rem] font-light leading-[1.2] tracking-[-0.03em] text-white sm:text-[1.45rem] lg:text-[2.1rem]">
                    I help bring concepts to life, improve ongoing products, and
                    build polished web experiences that feel sharp, modern, and
                    reliable.
                  </p>
                </div>

                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="mt-6 max-w-[720px] lg:mt-8"
                >
                  <input type="hidden" name="form-name" value="contact" />

                  <p className="hidden">
                    <label>
                      Don’t fill this out if you’re human:
                      <input
                        name="bot-field"
                        value={form['bot-field']}
                        onChange={handleChange}
                      />
                    </label>
                  </p>

                  <div className="grid gap-5 sm:grid-cols-2 sm:gap-7">
                    <label className="block">
                      <span className="text-[0.9rem] text-white/42">Name*</span>
                      <input
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        className="mt-2 w-full border-b border-white/45 bg-transparent pb-2 text-[0.97rem] text-white outline-none placeholder:text-white/18 focus:border-white"
                      />
                    </label>

                    <label className="block">
                      <span className="text-[0.9rem] text-white/42">Email*</span>
                      <input
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        className="mt-2 w-full border-b border-white/45 bg-transparent pb-2 text-[0.97rem] text-white outline-none placeholder:text-white/18 focus:border-white"
                      />
                    </label>
                  </div>

                  <label className="mt-6 block">
                    <span className="text-[0.9rem] text-white/42">
                      Project Information*
                    </span>
                    <textarea
                      name="projectInformation"
                      rows={3}
                      required
                      value={form.projectInformation}
                      onChange={handleChange}
                      className="mt-2 w-full resize-none border-b border-white/45 bg-transparent pb-2 text-[0.97rem] leading-6 text-white outline-none placeholder:text-white/18 focus:border-white"
                    />
                  </label>

                  <div className="mt-6 flex items-center gap-4">
                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="inline-flex items-center justify-center rounded-full border border-white/50 px-6 py-2.5 text-[0.68rem] font-medium uppercase tracking-[0.16em] text-white transition duration-300 hover:border-white hover:bg-white hover:text-black disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      {status === 'sending' ? 'Sending...' : 'Send Inquiry'}
                    </button>

                    {status === 'success' && (
                      <span className="text-sm text-emerald-300/90">
                        Message sent.
                      </span>
                    )}

                    {status === 'error' && (
                      <span className="text-sm text-red-300/90">
                        Something failed. Try again.
                      </span>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}