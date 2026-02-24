import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App(){
  return (
    <div>
      <Navbar />
      <main style={{padding: '2rem'}}>
        <Home />
        <About />
        <Services />
        <Education />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}
