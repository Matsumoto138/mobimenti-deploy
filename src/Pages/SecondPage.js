import React from 'react'
import { useState, useRef, useEffect } from 'react';
import '../Style/SecondPage.css'
import PartOneImg from '../Images/mentoring1.png'
import PartTwoImg from "../Images/mentoring3.png";

function SecondPage() {
    const targetRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false)

    const callbackFunction = entries =>{
        const [entry] = entries
        setIsVisible(entry.isIntersecting)
        if (isVisible) {
            document.getElementById("secondpage-partOneText").classList.add("active")
            document.getElementById("secondpage-partOneImg").classList.add("active")
            document.getElementById("secondpage-partTwoImg").classList.add("active")
            document.getElementById("secondpage-partTwoText").classList.add("active")
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
    
    <div className='SecondPage' ref={targetRef} >
        <div className="part-one"  >
            <div className="text" id='secondpage-partOneText' >
                <p>Bilgi ve Deneyimlerinle Birçok Gencin Hayatına Dokunabilirsin</p>
            </div>
            <div className="img" id='secondpage-partOneImg' >
                <img src={PartOneImg} alt="" />
            </div>
        </div>
        <div className="part-two">
            <div className="img" id='secondpage-partTwoImg'>
                <img src={PartTwoImg} alt="" />
            </div>

            <div className="text" id='secondpage-partTwoText'>
                <p>Bilmediklerini Keşfetmek, Mentor Olmanın Sana Sunduğu Bir Hediye Olurken
                    Bildiklerini Hatırlamak da Bu SÜrecin Sana Başka Bir Armağanı Olur
                </p>
            </div>
            
        </div>

    </div>
  )
}

export default SecondPage