import { cn } from "@/lib/utils"
import { SectionScrollHint } from "./SectionScrollHint"

interface SectionProps {
  id: string
  children: React.ReactNode
  showScrollHint?: boolean
  allowInnerScroll?: boolean
  className?: string
}

export function Section({
  id,
  children,
  showScrollHint = true,
  allowInnerScroll = true,
  className,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "flex min-h-screen lg:h-screen px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 lg:pt-45 pb-8 sm:pb-10 lg:pb-12 items-start lg:snap-start relative",
        allowInnerScroll && "overflow-y-auto scroll-area",
        className,
      )}
    >
      {children}

      {showScrollHint && <SectionScrollHint sectionId={id} />}
    </section>
  )
}
