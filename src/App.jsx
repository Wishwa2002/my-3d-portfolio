import Hero from "./sections/Hero"
import NavBar from "./components/NavBar"
import ShowCaseSection from "./sections/ShowCaseSection"
import LogoSection from "./components/LogoSection"
const App = () => {
  return (
    <>
      <NavBar/>
      <Hero/>
      <ShowCaseSection/>
      <LogoSection/>
    </>
  )
}

export default App