import "./App.css";

import { useState } from 'react'
import { NavBar } from './component/NavBar'
import { HeroSection } from './component/HeroSection'
import { ContactMe } from './component/ContactMe'
import { Project } from './component/project/Project'
import { MeAndStack } from './component/MeAndStack'
import { FooterSection } from './component/FooterSection'
import { BrowserRouter } from 'react-router-dom'

function App() {

  const [mode, setMode] = useState(true);
  
  let bgColor, textColor;
  if(mode) {
    bgColor = 'bg-black';
    textColor = 'text-white'
  }
  else {
    bgColor = 'bg-white';
    textColor = 'text-black';
  }

  return (
    <BrowserRouter>
      <div id='home' className= {`flex flex-col gap-3 items-center ${bgColor} ${textColor} `} >
        <NavBar setMode={setMode} mode={mode}/>
        <HeroSection/>
        <Project/>
        <MeAndStack/>
        <ContactMe/>
        <FooterSection/>
      </div>
    </BrowserRouter>
  )
}

export default App
