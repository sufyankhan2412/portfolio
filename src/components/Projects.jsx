import React from 'react'

const projects = [
  {
    title: 'NextLayerStudio Web Agency',
    github: 'https://github.com/sufyankhan2412/nextlayerstudio',
    website: 'https://nextlayerstudio.online/',
    desc: 'Full-stack MERN agency website offering web and digital services. Deployed on Vercel.'
  },
  {
    title: 'Book Store',
    github: 'https://github.com/sufyankhan2412/Book-Recommendation-System',
    desc: 'Implemented product search, filtering, cart system, and structured backend APIs.'
  },
  {
    title: 'Perfume Store',
    github: 'https://github.com/sufyankhan2412/Perfume--Ecommerce-MERN',
    desc: 'Built e-commerce catalog with category filters and shopping cart. Improved UI responsiveness and page load performance.'
  },
  {
    title: '2D Urban Planning & Society Map Generator',
    github: 'https://github.com/HasnainAbbasi1/FYP-PLAN-IT',
    desc: 'Developed a web-based 2D urban planning system for automated housing society layouts.'
  },
  {
    title: 'Currency Converter Website',
    github: 'https://github.com/sufyankhan2412/Currency-Converter-Website',
    desc: 'A simple currency converter application.'
  },
  {
    title: 'MERN Project - Social App (example)',
    github: '#',
    desc: 'A social media app built with MERN demonstrating authentication and real-time updates.'
  },
  {
    title: 'MERN Project - Task Manager (example)',
    github: '#',
    desc: 'A task manager built using MERN stack with CRUD and filtering features.'
  }
]

export default function Projects(){
  return (
    <section id="projects" style={{marginTop: '2rem', paddingTop:'2rem'}}>
      <h2 className="heading">My Projects</h2>
      <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(320px, 1fr))', gap:'2rem', maxWidth:1200, margin:'2rem auto'}}>
        {projects.map((p, i) => (
          <div key={i} className="animated-card" style={{background:'rgba(255,0,166,0.08)', border:'2px solid #ff00a6', borderRadius:'1rem', padding:'1.5rem', transition:'all 0.3s ease'}} onMouseEnter={(e)=>e.currentTarget.style.boxShadow='0 8px 24px rgba(255,0,166,0.2)'} onMouseLeave={(e)=>e.currentTarget.style.boxShadow='none'}>
            <h4 style={{color:'#ff00a6', marginBottom:'0.5rem'}}>{p.title}</h4>
            <p style={{fontSize:'0.95rem', lineHeight:1.6, marginBottom:'1rem'}}>{p.desc}</p>
            <div style={{display:'flex', gap:'1rem'}}>
              {p.github && <a href={p.github} target="_blank" rel="noreferrer" style={{color:'#fff', textDecoration:'underline'}}>View Code</a>}
              {p.website && <a href={p.website} target="_blank" rel="noreferrer" style={{color:'#ff00a6', textDecoration:'underline'}}>Visit Site</a>}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
