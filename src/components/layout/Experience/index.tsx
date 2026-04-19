import { Section } from "@/components/shared/Section"
import { SectionTitle } from "@/components/shared/SectionTitle"
import { Briefcase } from "lucide-react"
import { experienceData } from "./data/experience-data"
import { SectionSubtitle } from "@/components/shared/SectionSubtitle"
import { BaseCard } from "@/components/shared/BaseCard"

export function Experience() {
  const traducao = experienceData[0]
  const rightColumnCategories = experienceData.slice(1)

  return (
    <Section id="experiencia">
      <div className="max-w-6xl mx-auto w-full">
        <SectionTitle icon={Briefcase}>Experiência</SectionTitle>

        <div className="xl:hidden grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 ml-0.5 sm:ml-2 mr-0.5 sm:mr-2">
          <div className="space-y-6">
            <SectionSubtitle>{traducao.category}</SectionSubtitle>

            <div className="space-y-4 mt-3">
              {traducao.jobs.map((job) => (
                <BaseCard key={job.company}>
                  <div className="p-3 min-h-27">
                    <h4 className=" mb-2 text-neutral-800">{job.company}</h4>
                    <div>
                      <p className="text-sm text-purple-800">{job.period}</p>
                      <p className="text-xs text-gray-600">{job.description}</p>
                    </div>
                  </div>
                </BaseCard>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            {rightColumnCategories.map((data) => (
              <div key={data.category} className="space-y-6">
                <SectionSubtitle>{data.category}</SectionSubtitle>

                <div className="space-y-4 mt-3">
                  {data.jobs.map((job) => (
                    <BaseCard key={job.company}>
                      <div className="p-3 min-h-27">
                        <h4 className=" mb-2 text-neutral-800">
                          {job.company}
                        </h4>
                        <div>
                          <p className="text-sm text-purple-800">
                            {job.period}
                          </p>
                          <p className="text-xs text-gray-600">
                            {job.description}
                          </p>
                        </div>
                      </div>
                    </BaseCard>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden xl:grid grid-cols-3 gap-14 ml-2 mr-2">
          {experienceData.map((data) => (
            <div key={data.category} className="space-y-6">
              <SectionSubtitle>{data.category}</SectionSubtitle>

              <div className="space-y-4 mt-3">
                {data.jobs.map((job) => (
                  <BaseCard key={job.company}>
                    <div className="p-3 min-h-27">
                      <h4 className=" mb-2 text-neutral-800">{job.company}</h4>
                      <div>
                        <p className="text-sm text-purple-800">{job.period}</p>
                        <p className="text-xs text-gray-600">
                          {job.description}
                        </p>
                      </div>
                    </div>
                  </BaseCard>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
