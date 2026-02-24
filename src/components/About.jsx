import React from 'react'

export default function About(){
  return (
    <section id="about" style={{marginTop: '2rem', paddingTop:'3rem', paddingBottom:'3rem'}}>
      <h2 className="heading" style={{marginBottom:'2rem'}}>About Me</h2>
      <div style={{maxWidth:900, margin:'0 auto', background:'rgba(255,0,166,0.05)', border:'2px solid rgba(255,0,166,0.15)', borderRadius:'1.5rem', padding:'2.5rem', animation:'slideUp 800ms ease forwards'}}>
        <p style={{fontSize:'1.35rem', lineHeight:2, fontWeight:500, marginBottom:'1.5rem', color:'#fff'}}>
          I'm a <span style={{color:'#ff00a6', fontWeight:700}}>Full-Stack Developer</span> with <span style={{color:'#ff00a6', fontWeight:700}}>2 years of hands-on experience</span> building modern web applications using the MERN stack.
        </p>
        <p style={{fontSize:'1.15rem', lineHeight:1.9, marginBottom:'1.5rem', color:'#ddd'}}>
          My expertise spans <strong style={{color:'#ff00a6'}}>React</strong> for dynamic frontends, <strong style={{color:'#ff00a6'}}>Node.js & Express</strong> for robust backends, and <strong style={{color:'#ff00a6'}}>MongoDB</strong> for flexible database solutions. I've delivered full-stack e-commerce platforms, real-time web applications, and scalable APIs used by real customers.
        </p>
        <p style={{fontSize:'1.15rem', lineHeight:1.9, color:'#ddd'}}>
          I'm passionate about writing clean, maintainable code, optimizing performance, and creating exceptional user experiences. I stay updated with latest web technologies and best practices. When I'm not coding, I'm learning new frameworks or contributing to open-source projects.
        </p>
      </div>
    </section>
  )
}
