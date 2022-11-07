import React from 'react'
import { useState, useRef, useEffect } from 'react';
import PartOneImg from "../Images/mentoring2.png";
import PartTwoImg from "../Images/mentoring4.png";
import '../Style/ThirdPage.css'

function ThirdPage() {
    const targetRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false)

    const callbackFunction = entries =>{
        const [entry] = entries
        setIsVisible(entry.isIntersecting)
        if (isVisible) {
            document.getElementById("thirdpage-partOneText").classList.add("active")
            document.getElementById("thirdpage-partOneImg").classList.add("active")
            document.getElementById("thirdpage-partTwoImg").classList.add("active")
            document.getElementById("thirdpage-partTwoText").classList.add("active")
            console.log(entry);
        }
    }

    const options = {
        root:null,
        rootMargin:"0px",
        threshold:0.5
    }

    useEffect(() => {
      
        const observer = new IntersectionObserver(callbackFunction, options)
        if (targetRef.current) {
            observer.observe(targetRef.current)
        }
      return () => {
        if (targetRef.current) {
            observer.unobserve(targetRef.current)
        }
      }
    }, [targetRef, options])

  return (
    <div className='ThirdPage' ref={targetRef}>
        <div className="part-one">
            <div className="text" id='thirdpage-partOneText'>
                <p>Farklı Kişilerle Mentorluk Yaparak Gelişirsin</p>
            </div>
            <div className="img" id='thirdpage-partOneImg'>
                <img src={PartOneImg} alt="" />
            </div>
        </div>
        <div className="part-two">
            <div className="img" id='thirdpage-partTwoImg'>
                <img src={PartTwoImg} alt="" />
            </div>

            <div className="text" id='thirdpage-partTwoText'>
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