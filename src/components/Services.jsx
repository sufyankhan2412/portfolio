import React from 'react'

const services = [
  {title: 'Frontend Development', desc: 'Craft responsive, accessible, and performant front-end interfaces using React and modern toolchains.'},
  {title: 'UI Design', desc: 'Design intuitive UI/UX with wireframes, prototypes, and visual polish.'},
  {title: 'Graphic Design', desc: 'Create logos, banners, and marketing assets that align with your brand.'},
  {title: 'Backend Development', desc: 'Build RESTful APIs, authentication, and database integrations using Node and Express.'}
]

export default function Services(){
  return (
    <section className="services" id="services" style={{paddingTop:'2rem'}}>
      <h2 className="heading">Services</h2>
      <div className="services-container" style={{maxWidth:1100,margin:'0 auto'}}>
        {services.map((s,i)=> (
          <div key={i} className="services-box animated-card" style={{padding:'2rem'}}>
            <div className="services-info">
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
