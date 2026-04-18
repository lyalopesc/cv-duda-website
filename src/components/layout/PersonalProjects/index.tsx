import { Section } from "@/components/shared/Section"
import { SectionTitle } from "@/components/shared/SectionTitle"
import { ExternalLink, Heart } from "lucide-react"
import { projectsData } from "./data/projects-data"
import { BaseCard } from "@/components/shared/BaseCard"

export function PersonalProjects() {
  return (
    <Section id="projetos-pessoais">
      <div className="max-w-6xl mx-auto w-full">
        <SectionTitle icon={Heart}>Projetos Pessoais</SectionTitle>

        <div className="grid grid-cols-2 gap-12 mt-12 ml-2 mr-2">
          {projectsData.map((project) => (
            <BaseCard>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 flex flex-col h-full gap-8"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-xl text-purple-800">{project.title}</h3>
                  <div className="flex gap-2 text-sm items-center text-[#18A999] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                    <span>Acesse</span>
                    <ExternalLink className="w-5 h-5 shrink-0" />
                  </div>
                </div>
                <p className=" text-gray-600">{project.description}</p>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full mt-auto object-cover rounded-md border border-neutral-200"
                />
              </a>
            </BaseCard>
          ))}
        </div>
      </div>
    </Section>
  )
}
