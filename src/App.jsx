import './App.css'
import Header from './components/header/Header'
import Herosection from './components/herosection/Herosection'
import SkillsSection from './components/skillsSection/SkillsSection'
import Projects from './components/projects/Projects'
import EducationSection from './components/educationSection/EducationSection'
import Footer from './components/footer/Footer'

function App() {

  return (
    <>
      <Header/>
      <Herosection/>
      <SkillsSection/>
      <Projects/>
      <EducationSection/>
      <Footer/>
    </>
  )
}

export default App
