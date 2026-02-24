import React from 'react'

export default function Footer(){
  return (
    <footer className="footer">
      <div className="social-icons" style={{textAlign:'center',padding:'1rem 0'}}>
        <a href="#"><i className='bx bxl-instagram'></i></a>
        <a href="#"><i className='bx bxl-facebook-circle' ></i></a>
        <a href="#"><i className='bx bxl-linkedin' ></i></a>
        <a href="#"><i className='bx bxl-github' ></i></a>
      </div>
      <ul className="list" style={{textAlign:'center',padding:'1rem 0'}}>
        <li><a href="#">FAQ</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">About Me</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Skills</a></li>
      </ul>
      <p className="copyright" style={{textAlign:'center',padding:'1rem 0'}}>&copy; Sufyan Khan | All Rights Reserved</p>
    </footer>
  )
}
