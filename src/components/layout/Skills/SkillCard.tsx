import { BaseCard } from "@/components/shared/BaseCard"
import type { SkillsDataProps } from "./data/skills-data"

export function SkillCard({ name, icon: Icon, subitems }: SkillsDataProps) {
  const hasSubitems = subitems && subitems.length > 0

  const layoutStyles = hasSubitems
    ? "grid grid-cols-[0.9fr_1.1fr] gap-3 sm:gap-4 items-center"
    : "flex items-center justify-center text-center gap-2"

  return (
    <BaseCard>
      <div className={`p-4 min-h-30 ${layoutStyles}`}>
        {/* Lado Esquerdo */}
        <div className="flex flex-col items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[#18A999] flex items-center justify-center shadow-sm">
            <Icon className="w-5 h-5 text-white" />
          </div>
          <p className="text-xs text-neutral-800">{name}</p>
        </div>

        {/* Lado Direito (if subitems = true) */}
        {hasSubitems && (
          <ul className="flex flex-col gap-1 pl-4 ml-3 border-l border-neutral-200">
            {subitems.map((item) => (
              <li key={item} className="text-xs text-neutral-500">
                • {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </BaseCard>
  )
}
