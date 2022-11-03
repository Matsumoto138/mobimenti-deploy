import React from 'react'
import '../Style/SecondPage.css'
import PartOneImg from '../Images/mentoring1.png'
import PartTwoImg from "../Images/mentoring3.png";

function SecondPage() {
  return (
    <div className='SecondPage'>
        <div className="part-one">
            <div className="text">
                <p>Bilgi ve Deneyimlerinle Birçok Gencin Hayatına Dokunabilirsin</p>
            </div>
            <div className="img">
                <img src={PartOneImg} alt="" />
            </div>
        </div>
        <div className="part-two">
            <div className="img">
                <img src={PartTwoImg} alt="" />
            </div>

            <div className="text">
                <p>Bilmediklerini Keşfetmek, Mentor Olmanın Sana Sunduğu Bir Hediye Olurken
                    Bildiklerini Hatırlamak da Bu SÜrecin Sana Başka Bir Armağanı Olur
                </p>
            </div>
            
        </div>
    </div>
  )
}

export default SecondPage