import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Services from './components/Services'
import Contact from './components/Contact'
import CVDownload from './components/CVDownload'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <a className="skip-link" href="#home">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Contact />
        <CVDownload />
      </main>
      <Footer />
    </div>
  )
}

export default App