import Hero from "./sections/Hero"
import NavBar from "./components/NavBar"
import ShowCaseSection from "./sections/ShowCaseSection"
import LogoSection from "./sections/LogoSection"
import FeatureCards from "./sections/FeatureCards"
import ExperienceSection from "./sections/ExperienceSection"
import Services from "./sections/Services";
import Contact from "./sections/Contact"
import { StarsCanvas } from "./components/canvas"
const App = () => {
  return (
    <>
      <NavBar/>
      <Hero/>
      <ShowCaseSection/>
      <LogoSection/>
      <FeatureCards/>
      <ExperienceSection/>
      <Services/>
      <div className="relative z-0">
        <Contact/>
        <StarsCanvas/>
      </div>
      
      
    </>
  )
}

export default App