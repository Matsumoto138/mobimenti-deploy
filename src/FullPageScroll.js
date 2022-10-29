import React from 'react'
import Fullpage,{ FullPageSections, FullpageSection, FullpageNavigation } from "@ap.cx/react-fullpage";
import FİrstPage from './Pages/FirstPage';


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
                <h1>Screen 2</h1>
            </FullpageSection>
            <FullpageSection style={{...SectionStyle, backgroundColor:'#white'}} >
                <h1>Screen 3</h1>
            </FullpageSection>
            <FullpageSection style={{...SectionStyle, backgroundColor:'#white   '}} >
                <h1>Screen 4</h1>
            </FullpageSection>
        </FullPageSections>
    </Fullpage>
  )
}

export default FullPageScroll