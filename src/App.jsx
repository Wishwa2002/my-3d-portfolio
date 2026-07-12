import Hero from "./sections/Hero"
import NavBar from "./components/NavBar"
import ShowCaseSection from "./sections/ShowCaseSection"
import LogoSection from "./sections/LogoSection"
import FeatureCards from "./sections/FeatureCards"
const App = () => {
  return (
    <>
      <NavBar/>
      <Hero/>
      <ShowCaseSection/>
      <LogoSection/>
      <FeatureCards/>
    </>
  )
}

export default App