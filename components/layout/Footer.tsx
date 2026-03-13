import Container from '../ui/Container'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8">
      <Container className="flex flex-col items-center justify-between gap-4 text-center text-sm text-slate-500 md:flex-row md:text-left">
        <p>© 2026 CarlosDev. Built with intention.</p>
        <p></p>
      </Container>
    </footer>
  )
}