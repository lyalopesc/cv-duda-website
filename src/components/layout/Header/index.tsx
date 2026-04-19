import { useScrollSpy } from "@/hooks/useScrollSpy"
import { scrollToSection } from "@/utils/scrollToSection"
import { menuItems } from "@/components/layout/Header/data/menuItems"

export function Header() {
  const activeSection = useScrollSpy()

  return (
    <nav className="fixed inset-x-0 top-0 z-50 py-3 lg:py-6 bg-purple-800">
      <div className="flex gap-2 lg:gap-10 justify-center px-3 sm:px-4 lg:px-0">
        {menuItems.map((item) => {
          const Icon = item.icon
          const isActive = item.id === activeSection
          const buttonClassName = isActive
            ? "bg-[#18A999] hover:bg-[#18A999]"
            : "bg-transparent hover:bg-purple-700"

          return (
            <button
              key={item.id}
              onClick={() => {
                scrollToSection(item.id)
              }}
              className={`flex shrink-0 items-center gap-2 lg:gap-3 rounded-full px-3 lg:px-4 py-2 lg:py-3 min-h-10 lg:min-h-12 text-white text-xs lg:text-sm transition-colors ${buttonClassName}`}
              aria-label={item.label}
            >
              <Icon className="w-4 h-4 lg:w-5 lg:h-5" />
              <span className="hidden lg:inline whitespace-nowrap">
                {item.label}
              </span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}
