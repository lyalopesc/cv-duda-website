import { Education } from "./components/layout/Education"
import { Experience } from "./components/layout/Experience"
import { Header } from "./components/layout/Header"
import { Hero } from "./components/layout/Hero"
import { PersonalProjects } from "./components/layout/PersonalProjects"
import { Portfolio } from "./components/layout/Portfolio"
import { Skills } from "./components/layout/Skills"

function App() {
  return (
    <div
      id="scroll-container"
      className="h-screen lg:snap-y lg:snap-mandatory overflow-x-hidden overflow-y-auto scroll-area"
    >
      <Header />
      <Hero />
      <Education />
      <Experience />
      <Skills />
      <PersonalProjects />
      <Portfolio />
    </div>
  )
}

export default App
