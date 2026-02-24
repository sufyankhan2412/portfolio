import React from 'react'

export default function Navbar(){
  return (
    <header className="header" style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'1rem 2rem'}}>
      <a href="#home" className="logo">Sufyan <span>Khan</span></a>
      <nav className="navbar">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  )
}
