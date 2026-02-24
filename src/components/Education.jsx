import React from 'react'

const timeline = [
  {year:'2019', title:'Matric', desc:'Completed matriculation with 88% from Allied School.'},
  {year:'2021', title:'FSC', desc:'Completed intermediate with 85% from Punjab College.'},
  {year:'2022', title:'University', desc:'Enrolled in COMSATS, currently pursuing Computer Science.'},
  {year:'2023', title:'Internship', desc:'Secured an internship position at Arbisoft.'}
]

export default function Education(){
  return (
    <section className="education" id="education" style={{paddingTop:'2rem'}}>
      <h2>Education</h2>
      <div className="timeline-items-container">
        {timeline.map((t,i)=> (
          <div key={i} className="timeline-items animated-card">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-date">{t.year}</div>
              <h3>{t.title}</h3>
              <p>{t.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
