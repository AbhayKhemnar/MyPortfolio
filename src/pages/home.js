import React from 'react'
import './home.css'
import { TypeAnimation } from 'react-type-animation';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate=useNavigate()
  return (
    <div className='hero-wrapper'>
        <div className='main-info'>
            <h1>Hi, I'm ABHAY.</h1>
            <h3>-Front-End Developer-</h3>
            <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'WEB DEVELOPMENT',
        2000, // wait 1s before replacing "Mice" with "Hamsters"
        'WEB DESIGN',
        2000,
        'GOOGLE ADS',
        1000,
        'FACEBOOK ADS',
        1000
      ]}
      wrapper="span"
      speed={30}
      style={{ fontSize: '2em', display: 'inline-block', color:"#ff7f50"}}
      repeat={Infinity}
    />
           
           
            <button className='main-btn' onClick={()=>navigate("/contact")}>Contact Me</button>
        </div>
    </div>
  )
}

export default Home