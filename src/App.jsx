import './App.css'
import Hero from './components/Hero'
import Projects from './components/Projects/Projects'
import SkillsShowcase from './components/Skills/SkillsShowCase'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import About from './components/About/About'

function App() {

  return (
    <div className="antialiased">
      <main>
        <Hero />
        <Projects />
        <About />
        {/* <SkillsShowcase /> */}
        <ContactSection />
        <Footer />
      </main>
    </div>
  )
}

export default App
