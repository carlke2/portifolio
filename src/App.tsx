import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Skills from '../components/sections/Skills'
import Projects from '../components/sections/Projects'
import Journey from '../components/sections/Journey'
import Contact from '../components/sections/Contact'
import ScrollProgress from '../components/ui/ScrollProgress'

export default function App() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#070b11] text-white">
      <ScrollProgress />

      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[#070b11]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(0,0,0,0.16))]" />
      </div>

      <Navbar />
      <Hero />

      <div className="relative z-20 -mt-20 bg-[linear-gradient(180deg,rgba(7,11,17,0)_0%,rgba(7,11,17,0.88)_16%,#070b11_30%,#070b11_100%)] pt-20">
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}