import { About } from "./About"
import { ContactCards } from "./ContactCards"
import { ProfileImage } from "./ProfileImage"

export function Hero() {
  return (
    <section
      id="inicio"
      className="flex h-screen px-8 pt-60 pb-12 items-start snap-start relative"
    >
      <div className="flex max-w-6xl mx-auto items-center gap-22">
        {/* Coluna Esquerda */}
        <div className="flex flex-1 flex-col justify-center gap-18">
          <About />
          <ContactCards />
        </div>
        {/* Coluna Direita */}
        <div className="flex justify-end items-center">
          <ProfileImage />
        </div>
      </div>
    </section>
  )
}
