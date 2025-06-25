import './App.css'
import Hero from './components/Hero'
import Projects from './components/Projects/Projects'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import About from './components/About/About'

function App() {

  return (
    <div className="antialiased">
      <main>
        <Hero />
        <About />
        <Projects />
        <ContactSection />
        <Footer />
      </main>
    </div>
  )
}

export default App
