import React from 'react'
import web from '../assets/download.jpg'
import javaimg from '../assets/oip.jpg'
import mongo from '../assets/download-1.jpg'

const items = [
  {img: web, label: 'Web Dev'},
  {img: javaimg, label: 'Java'},
  {img: mongo, label: 'MongoDB'}
]

export default function Skills(){
  return (
    <section className="skills" id="skills" style={{marginTop:'2rem'}}>
      <h2 className="heading">Skills</h2>
      <div className="container">
        <div className="row">
          {items.map((it, i) => (
            <div className="bar" key={i} style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
              <div className="info">
                <img src={it.img} alt={it.label} />
                <span>{it.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
