import { Section } from "@/components/shared/Section"
import { About } from "./About"
import { ContactCards } from "./ContactCards"
import { ProfileImage } from "./ProfileImage"

export function Hero() {
  return (
    <Section id="inicio">
      <div className="max-w-6xl mx-auto w-full">
        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-22">
          <div className="flex flex-1 flex-col justify-center gap-18">
            <About />
            <ContactCards />
          </div>

          <div className="flex justify-end items-center">
            <ProfileImage />
          </div>
        </div>

        {/* Tablet */}
        <div className="hidden md:block lg:hidden space-y-8">
          <div className="grid grid-cols-2 items-center gap-8">
            <About />
            <div className="flex justify-end items-center">
              <ProfileImage />
            </div>
          </div>
          <ContactCards />
        </div>

        {/* Mobile */}
        <div className="md:hidden flex flex-col gap-8">
          <About />
          <div className="flex justify-center items-center">
            <ProfileImage />
          </div>
          <ContactCards />
        </div>
      </div>
    </Section>
  )
}
