import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'

export default function App(){
  return (
    <div>
      <Navbar />
      <main style={{padding: '2rem'}}>
        <Home />
        <About />
        <Skills />
        <Projects />
      </main>
    </div>
  )
}
