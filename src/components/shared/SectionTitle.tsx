import type { LucideIcon } from "lucide-react"

interface SectionTitleProps {
  children: React.ReactNode
  icon: LucideIcon
}

export function SectionTitle({ children, icon: Icon }: SectionTitleProps) {
  return (
    <div className="flex items-center gap-3 sm:gap-4 lg:gap-5 w-full mb-6 sm:mb-7 lg:mb-8 px-4 sm:px-5 py-2.5 sm:py-3 rounded-lg bg-purple-800 text-white">
      <Icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
      <h2 className="text-2xl sm:text-[1.7rem] lg:text-3xl">{children}</h2>
    </div>
  )
}
