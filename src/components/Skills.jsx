import React from 'react'
import python from '../assets/python.jpg'
import ml from '../assets/ml.jpg'
import digital from '../assets/digital-marketing.jpg'
import c from '../assets/c.png'
import cpp from '../assets/c-plus-plus.jpg'
import web from '../assets/download.jpg'
import appdev from '../assets/app-dev.jpg'
import javaimg from '../assets/oip.jpg'
import mongo from '../assets/download-1.jpg'

const items = [
  {img: python, label: 'Python'},
  {img: ml, label: 'ML'},
  {img: digital, label: 'Digital Marketing'},
  {img: c, label: 'C'},
  {img: cpp, label: 'C++'},
  {img: web, label: 'Web Dev'},
  {img: appdev, label: 'App Dev'},
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
