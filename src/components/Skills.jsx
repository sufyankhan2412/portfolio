import React from 'react'
import web from '../assets/download.jpg'
import javaimg from '../assets/oip.jpg'
import mongo from '../assets/download-1.jpg'
import python from '../assets/python.jpg'

const items = [
  {img: web, label: 'React', color:'#61dafb'},
  {img: mongo, label: 'MongoDB', color:'#13aa52'},
  {img: javaimg, label: 'Node.js', color:'#68a063'},
  {img: python, label: 'Express', color:'#000'},
  {img: python, label: 'Python', color:'#3776ab'}
]

export default function Skills(){
  return (
    <section className="skills" id="skills" style={{marginTop:'2rem', paddingTop:'3rem', paddingBottom:'3rem'}}>
      <h2 className="heading" style={{marginBottom:'2rem'}}>Skills & Technologies</h2>
      <div className="container" style={{maxWidth:1000}}>
        <div className="row">
          {items.map((it, i) => (
            <div className="bar animated-card" key={i} style={{display:'flex',alignItems:'center',justifyContent:'center', animationDelay:`${i*0.08}s`, background:'rgba(255,0,166,0.08)', border:'2px solid rgba(255,0,166,0.2)', borderRadius:'1rem', cursor:'pointer', transition:'all 0.4s ease', position:'relative', overflow:'hidden'}}>
              <div className="info">
                <img src={it.img} alt={it.label} style={{maxHeight:'70px', transition:'all 0.4s ease'}} />
                <span style={{fontSize:'1.05rem', fontWeight:600, marginTop:'0.5rem', display:'block'}}>{it.label}</span>
              </div>
              <div style={{position:'absolute', inset:0, background:`radial-gradient(circle, ${it.color}20 0%, transparent 70%)`, pointerEvents:'none'}}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
