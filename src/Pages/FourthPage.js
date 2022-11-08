import React from 'react'
import '../Style/FourthPage.css'
import TeamVideo from '../Images/team.mp4'
import LinkedinSvg from "../Images/linkedin.png"
import Instagram from "../Images/instagram.png"

export default function FourthPage() {
  return (
    <div className='FourthPage'>
        <div className="text">
            <h1>Biz Kimiz?</h1><br />
            <p>Biz, Mobimenti olarak ikinin gücünden doğan yolculuğa, bilgi ve deneyimin gücüne inanan bir ekibiz.
                Gençlerin kendi potansiyellerini mentorluk yoluyla keşfedip geliştirebileceği bir dünya yaratıyoruz.
                Sizleri, yeni olan bu dünyadan haberdar etmeyi de kendimize görev biliyoruz. <br /><br />

                Dünyada çok fazla uygulanan bir öğrenme modeli olan mentorluk, senin için bir dönüm noktası özelliği taşıyabilir!
                <br /><br />
                Bununla birlikte hızla büyüyen platformumuzda gelişmeleri takip etmek ve öğrenmeni hızlandıracak çeşitli kariyer 
                çalışmlaları hakkında bilgi almak için blog sayfamızı takip edebilirsin. <br /><br />

                Unutma; yeni bir ağ, yeni bir lider, yeni bir kariyer hayali çok uzağında değil.
                Mentorluk ve eğitim programlarımız çok yakında...
            </p>
            <div className="FourthPage-BottomSection">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSdXYqm2d3JcJG1qR03aN9T75qX7QAz9BG3H0lp9shwMRahKng/viewform?usp=sharing" target="blank"><button>Mentor Ol</button></a>
              <div className="social-icons">
                  <ul>
                      <li><a href="https://www.linkedin.com/company/mobi%CC%87menti%CC%87/" target="blank"><img src={LinkedinSvg} alt="" /></a></li>
                      <li><a href="https://www.instagram.com/mobi.menti/" target="blank"><img src={Instagram} alt="" /></a></li>
                  </ul>
              </div>
            </div>
        </div>
        <div className="img">
            <video src={TeamVideo} autoPlay loop muted ></video>
        </div>
    </div>
  )
}
