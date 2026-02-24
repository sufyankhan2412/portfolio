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
    <section id="projects" style={{marginTop: '2rem'}}>
      <h2>My Projects</h2>
      <ul>
        {projects.map((p, i) => (
          <li key={i} style={{margin: '0.75rem 0'}}>
            <strong>{p.title}:</strong> {p.desc} {p.github && <a href={p.github} target="_blank" rel="noreferrer">GitHub</a>} {p.website && <> | <a href={p.website} target="_blank" rel="noreferrer">Website</a></>}
          </li>
        ))}
      </ul>
    </section>
  )
}
