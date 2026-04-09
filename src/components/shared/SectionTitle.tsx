import type { LucideIcon } from "lucide-react"

interface SectionTitleProps {
  children: React.ReactNode
  icon: LucideIcon
}

export function SectionTitle({ children, icon: Icon }: SectionTitleProps) {
  return (
    <div className="flex items-center gap-5 w-full mb-8 px-5 py-3 rounded-lg bg-purple-800 text-white">
      <Icon className="w-8 h-8" />
      <h2 className="text-3xl">{children}</h2>
    </div>
  )
}
