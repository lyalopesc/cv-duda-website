import { Education } from "./components/layout/Education"
import { Experience } from "./components/layout/Experience"
import { Header } from "./components/layout/Header"
import { Hero } from "./components/layout/Hero"
import { Skills } from "./components/layout/Skills"

function App() {
  return (
    <div className="h-screen snap-y snap-mandatory overflow-y-auto">
      <Header />
      <Hero />
      <Education />
      <Experience />
      <Skills />
    </div>
  )
}

export default App
