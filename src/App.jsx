import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/Header'
import Herosection from './components/herosection/Herosection'
import SkillsSection from './components/skillsSection/SkillsSection'
import Projects from './components/projects/Projects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Herosection/>
      <SkillsSection/>
      <Projects/>
    </>
  )
}

export default App
