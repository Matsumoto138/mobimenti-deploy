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
            inşa etmeye hazır olun!
          </p>
          <button>Mentor Ol</button>
        </div>
        
    </div>
    </div>
  )
}

export default FİrstPage