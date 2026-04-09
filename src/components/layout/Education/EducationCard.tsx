import { BaseCard } from "@/components/shared/BaseCard"

export function EducationCard({
  title,
  institution,
  period,
}: {
  title: string
  institution: string
  period: string
}) {
  return (
    <BaseCard>
      <div className="p-3">
        <h4 className="text-sm mb-2 text-neutral-800">{title}</h4>
        <p className="text-xs text-purple-800">{institution}</p>
        <p className="text-xs text-[#18A999] "> {period}</p>
      </div>
    </BaseCard>
  )
}
