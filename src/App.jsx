import Hero from "./sections/Hero"
import NavBar from "./components/NavBar"
import ShowCaseSection from "./sections/ShowCaseSection"
import LogoSection from "./sections/LogoSection"
import FeatureCards from "./sections/FeatureCards"
import ExperienceSection from "./sections/ExperienceSection"
const App = () => {
  return (
    <>
      <NavBar/>
      <Hero/>
      <ShowCaseSection/>
      <LogoSection/>
      <FeatureCards/>
      <ExperienceSection/>
    </>
  )
}

export default App