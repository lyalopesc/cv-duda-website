import { Section } from "@/components/shared/Section"
import { SectionSubtitle } from "@/components/shared/SectionSubtitle"
import { SectionTitle } from "@/components/shared/SectionTitle"
import { GraduationCap } from "lucide-react"
import { educationData } from "./data/education-data"
import { EducationCard } from "./EducationCard"
import { languageData } from "./data/language-data"
import { LanguageCard } from "./LanguageCard"

export function Education() {
  return (
    <Section id="formacao">
      <div className="max-w-6xl mx-auto w-full">
        <SectionTitle icon={GraduationCap}>Formação</SectionTitle>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-20 ml-0.5 sm:ml-2 mr-0.5 sm:mr-2">
          {/* Educação */}
          <div className="space-y-6">
            <SectionSubtitle>Educação</SectionSubtitle>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {educationData.map((data, index) => (
                <EducationCard
                  key={index}
                  title={data.name}
                  institution={data.institution}
                  period={data.period}
                />
              ))}
            </div>
          </div>

          {/* Línguas */}
          <div className="space-y-6">
            <SectionSubtitle>Línguas</SectionSubtitle>
            <div className="flex flex-col gap-4 sm:gap-5">
              {languageData.map((data, index) => (
                <LanguageCard
                  key={index}
                  language={data.language}
                  level={data.level}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
