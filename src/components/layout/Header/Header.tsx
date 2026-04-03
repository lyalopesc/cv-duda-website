import { useScrollSpy } from "@/hooks/useScrollSpy"
import { scrollToSection } from "@/utils/scrollToSection"
import { menuItems } from "@/components/layout/Header/menuItems"

export function Header() {
  const activeSection = useScrollSpy()

  return (
    <nav className="fixed inset-x-0 top-0 z-50 py-6 bg-purple-800">
      <div className="flex gap-10 justify-center">
        {menuItems.map((item) => {
          const Icon = item.icon
          const isActive = item.id === activeSection

          return (
            <button
              key={item.id}
              onClick={() => {
                scrollToSection(item.id)
              }}
              className={`flex items-center gap-3 rounded-full px-4 py-3 min-h-12 text-white transition-colors hover:bg-purple-700 ${isActive ? "bg-[#18A999]" : "bg-transparent"}`}
            >
              <Icon className="w-5 h-5" />
              <span className="text-sm whitespace-nowrap">{item.label}</span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}
