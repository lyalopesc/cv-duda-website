import { ChevronDown } from "lucide-react"

interface SectionScrollHintProps {
  sectionId: string
}

export function SectionScrollHint({ sectionId }: SectionScrollHintProps) {
  const scrollToNextSection = () => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("section[id]"),
    )
    const currentSectionIndex = sections.findIndex(
      (section) => section.id === sectionId,
    )

    if (currentSectionIndex === -1) return

    const nextSection = sections[currentSectionIndex + 1]
    if (!nextSection) return

    const scrollContainer = document.getElementById("scroll-container")
    if (!scrollContainer) return

    scrollContainer.scrollTo({
      top: nextSection.offsetTop,
      behavior: "smooth",
    })
  }

  return (
    <button
      type="button"
      onClick={scrollToNextSection}
      aria-label="Ir para a próxima seção"
      className="hidden lg:block absolute bottom-8 left-1/2 -translate-x-1/2 text-[#6B21A8]/60 animate-bounce hover:text-[#6B21A8]/80 transition-colors"
    >
      <ChevronDown className="w-12 h-12" />
    </button>
  )
}
