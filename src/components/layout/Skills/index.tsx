import { Section } from "@/components/shared/Section"
import { SectionSubtitle } from "@/components/shared/SectionSubtitle"
import { SectionTitle } from "@/components/shared/SectionTitle"
import { Sparkles } from "lucide-react"
import { hardSkillsData, softSkillsData } from "./data/skills-data"
import { SkillCard } from "./SkillCard"

export function Skills() {
  return (
    <Section id="habilidades">
      <div className="max-w-6xl mx-auto w-full space-y-6">
        <SectionTitle icon={Sparkles}>Habilidades</SectionTitle>
        <div className="grid grid-cols-7 gap-14 ml-2 mr-2">
          {/* Hard Skills */}
          <div className="col-span-5 space-y-6">
            <SectionSubtitle>Hard skills</SectionSubtitle>
            <div className="grid grid-cols-5 gap-5">
              {hardSkillsData.map((skill) => (
                <div
                  key={skill.name}
                  className={skill.subitems ? "col-span-2" : "col-span-1"}
                >
                  <SkillCard
                    name={skill.name}
                    icon={skill.icon}
                    subitems={skill.subitems}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="col-span-2 space-y-6">
            <SectionSubtitle>Soft skills</SectionSubtitle>
            <div className="grid grid-cols-2 gap-5">
              {softSkillsData.map((skill) => (
                <SkillCard name={skill.name} icon={skill.icon} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
