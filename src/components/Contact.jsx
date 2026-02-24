import React from 'react'

export default function Contact(){
  return (
    <section className="contact" id="contact" style={{paddingTop:'2rem'}}>
      <h2 className="heading">Contact <span>Me</span></h2>
      <form onSubmit={(e)=>{e.preventDefault(); alert('Thanks — message sent (demo).')}}>
        <div className="input-group">
          <div className="input-column">
            <div className="input-box"><input type="text" placeholder="Full Name"/></div>
            <div className="input-box"><input type="email" placeholder="Email"/></div>
            <div className="input-box"><input type="number" placeholder="Phone Number"/></div>
            <div className="input-box"><input type="text" placeholder="Subject"/></div>
          </div>
          <div className="input-box message-box"><textarea placeholder="Your Message"></textarea></div>
        </div>
        <input type="submit" value="Send Message" className="btn" />
      </form>
    </section>
  )
}
