import React from 'react'
import PartOneImg from "../Images/mentoring2.png";
import PartTwoImg from "../Images/mentoring4.png";
import '../Style/ThirdPage.css'

function ThirdPage() {
  return (
    <div className='ThirdPage'>
        <div className="part-one">
            <div className="text">
                <p>Farklı Kişilerle Mentorluk Yaparak Gelişirsin</p>
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
                <p>Mentilerin Gelişim Gösterirken Kendi Kör Noktalarını Öğrenmelerine Benzer Şekilde, 
                    Sen de Mentor Olarak Bir Öğrenme Sürecinde Olursun.
                    Bu, Son Derece Kıymetlidir
                </p>
            </div>
            
        </div>
    </div>
  )
}

export default ThirdPage