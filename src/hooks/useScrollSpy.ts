import { useEffect, useState } from "react"
import { menuItems } from "@/components/layout/Header/data/menuItems"

export function useScrollSpy() {
  const [activeSection, setActiveSection] = useState("inicio")

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return

        setActiveSection(entry.target.id)
      },
      { threshold: 0.5, rootMargin: "-100px 0px -100px 0px" },
    )

    menuItems.forEach((item) => {
      const section = document.getElementById(item.id)
      if (section) {
        observer.observe(section)
      }
    })

    return () => observer.disconnect()
  }, [])

  return activeSection
}