import React from 'react'
import Navbar from '../components/Navbar'
import '../Style/FirstPage.css'



function FİrstPage() {
  return (
    <div className='First-Page'>
    <Navbar></Navbar>
    <div className='First-Page-Content'>
        <div className="text">
          <h4>Öğretirken</h4>
          <h1>Öğren, liderlik et, bağ kur, geliş.</h1>
          <p>Mobimenti, gençlerin kariyer yolculuğunu destekleyen bir mentor ağı oluşturuyor.
            Mentor olarak daha etkin bir lider, geniş bir ağ ve güçlü bir kariyer
            inşa etmeye hazır ol!
          </p>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSdXYqm2d3JcJG1qR03aN9T75qX7QAz9BG3H0lp9shwMRahKng/viewform?usp=sharing" target="blank"><button>Mentor Ol</button></a>
        </div>
        
    </div>
    </div>
  )
}

export default FİrstPage