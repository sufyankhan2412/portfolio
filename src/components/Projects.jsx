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
  const [hoveredIdx, setHoveredIdx] = React.useState(null)
  return (
    <section id="projects" style={{marginTop: '2rem', paddingTop:'3rem', paddingBottom:'3rem'}}>
      <h2 className="heading" style={{marginBottom:'2rem'}}>Featured Projects</h2>
      <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(340px, 1fr))', gap:'2.5rem', maxWidth:1300, margin:'0 auto', padding:'0 1rem'}}>
        {projects.map((p, i) => (
          <div 
            key={i} 
            className="animated-card" 
            style={{
              background:'linear-gradient(135deg, rgba(255,0,166,0.12) 0%, rgba(255,0,166,0.03) 100%)', 
              border:'2px solid rgba(255,0,166,0.3)',
              borderRadius:'1.25rem', 
              padding:'2rem', 
              transition:'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
              animationDelay: `${i*0.1}s`,
              transform: hoveredIdx === i ? 'translateY(-8px) scale(1.02)' : 'translateY(0)',
              boxShadow: hoveredIdx === i ? '0 20px 40px rgba(255,0,166,0.25)' : '0 4px 12px rgba(0,0,0,0.1)',
              backdropFilter: 'blur(10px)',
              cursor:'pointer'
            }} 
            onMouseEnter={() => setHoveredIdx(i)} 
            onMouseLeave={() => setHoveredIdx(null)}
          >
            <div style={{marginBottom:'1rem'}}>
              <h4 style={{color:'#ff00a6', marginBottom:'0.8rem', fontSize:'1.3rem', fontWeight:700}}>{p.title}</h4>
              <div style={{width:'40px', height:'3px', background:'linear-gradient(90deg, #ff00a6, rgba(255,0,166,0.3))', borderRadius:'2px'}}></div>
            </div>
            <p style={{fontSize:'1rem', lineHeight:1.7, marginBottom:'1.5rem', color:'#ddd'}}>{p.desc}</p>
            <div style={{display:'flex', gap:'1.5rem', flexWrap:'wrap'}}>
              {p.github && p.github !== '#' && <a href={p.github} target="_blank" rel="noreferrer" style={{color:'#ff00a6', textDecoration:'none', fontWeight:600, borderBottom:'2px solid #ff00a6', paddingBottom:'0.2rem', transition:'all 0.3s ease'}} onMouseEnter={(e)=>{e.target.style.color='#fff'; e.target.style.borderBottomColor='#fff'}} onMouseLeave={(e)=>{e.target.style.color='#ff00a6'; e.target.style.borderBottomColor='#ff00a6'}}>→ View Code</a>}
              {p.website && <a href={p.website} target="_blank" rel="noreferrer" style={{color:'#fff', textDecoration:'none', fontWeight:600, borderBottom:'2px solid #fff', paddingBottom:'0.2rem', transition:'all 0.3s ease'}} onMouseEnter={(e)=>{e.target.style.color='#ff00a6'; e.target.style.borderBottomColor='#ff00a6'}} onMouseLeave={(e)=>{e.target.style.color='#fff'; e.target.style.borderBottomColor='#fff'}}>→ Visit Live</a>}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
