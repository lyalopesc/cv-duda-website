import type { ReactNode } from "react"

interface SectionSubtitleProps {
  children: React.ReactNode
  action?: ReactNode
}

export function SectionSubtitle({ children, action }: SectionSubtitleProps) {
  return (
    <h2 className="flex items-end justify-between gap-2 sm:gap-3 lg:gap-4 text-lg sm:text-xl pb-2 text-purple-800 border-b border-[#18A999]">
      <span>{children}</span>

      {action && (
        <span className="text-xs sm:text-sm leading-none">{action}</span>
      )}
    </h2>
  )
}
