import React from 'react'
import homePhoto from '../assets/home-photo.jpeg'

export default function Home(){
  return (
    <section className="home" id="home" style={{display:'flex',gap:'4rem',alignItems:'center',paddingTop:'6rem'}}>
      <div className="home-content">
        <h1>Hi, It's <span>Sufyan</span></h1>
        <h3 className="text-animation">I am a <span></span></h3>
        <p>I am a dedicated front-end designer specializing in creating visually stunning and user-friendly web interfaces.</p>
        <div className="btn-group" style={{marginTop:'1.5rem'}}>
          <a href="#contact" className="btn">Contact</a>
        </div>
      </div>
      <div className="home-img">
        <img src={homePhoto} alt="Sufyan" style={{width:'300px',borderRadius:'50%'}} />
      </div>
    </section>
  )
}
