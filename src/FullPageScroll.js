import React from 'react'
import Fullpage,{ FullPageSections, FullpageSection, FullpageNavigation } from "@ap.cx/react-fullpage";
import FİrstPage from './Pages/FirstPage';
import SecondPage from './Pages/SecondPage';
import ThirdPage from './Pages/ThirdPage';
import FourthPage from './Pages/FourthPage';


function FullPageScroll() {
    const SectionStyle = {
        height: '100vh',
        width: '100%',

    }
    

  return (
    <Fullpage>
       
        
        <FullPageSections>
            <FullpageSection style={{...SectionStyle, backgroundColor:'white'}} >
                <FİrstPage />
            </FullpageSection>
            <FullpageSection style={{...SectionStyle, backgroundColor:'#white'}} >
                <SecondPage />
            </FullpageSection>
            <FullpageSection style={{...SectionStyle, backgroundColor:'#white'}} >
                <ThirdPage />
            </FullpageSection>
            <FullpageSection style={{...SectionStyle, backgroundColor:'#white   '}} >
                <FourthPage />
            </FullpageSection>
        </FullPageSections>
    </Fullpage>
  )
}

export default FullPageScroll