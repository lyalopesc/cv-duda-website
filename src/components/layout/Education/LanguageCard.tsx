import { BaseCard } from "@/components/shared/BaseCard"
import { Progress } from "@/components/ui/progress"

const languageLevels: Record<string, number> = {
  Fluente: 100,
  Avançado: 80,
  Intermediário: 60,
  Básico: 40,
}

interface LanguageCardProps {
  language: string
  level: string
}

export function LanguageCard({ language, level }: LanguageCardProps) {
  return (
    <BaseCard>
      <div className="p-3 pl-4 min-h-21">
        <h4 className="mb-2">{language}</h4>
        <div className="flex items-center gap-4">
          <Progress
            value={languageLevels[level] ?? 0}
            className="h-2 bg-gray-200 [&>div]:bg-[#18A999]"
          />
          <span className="text-sm text-neutral-800">{level}</span>
        </div>
      </div>
    </BaseCard>
  )
}
