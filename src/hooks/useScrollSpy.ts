import { useEffect, useRef, useState } from "react"
import { menuItems } from "@/components/layout/Header/data/menuItems"

export function useScrollSpy() {
  const [activeSection, setActiveSection] = useState("inicio")
  const sectionRatiosRef = useRef<Record<string, number>>({})

  useEffect(() => {
    const observer = new IntersectionObserver(
      (sections) => {
        sections.forEach((section) => {
          sectionRatiosRef.current[section.target.id] = section.isIntersecting
            ? section.intersectionRatio
            : 0
        })

        let nextActiveSection = ""
        let maxRatio = 0

        menuItems.forEach((item) => {
          const ratio = sectionRatiosRef.current[item.id] ?? 0
          if (ratio > maxRatio) {
            maxRatio = ratio
            nextActiveSection = item.id
          }
        })

        if (maxRatio > 0) {
          setActiveSection((previousSection) =>
            previousSection === nextActiveSection
              ? previousSection
              : nextActiveSection,
          )
        }
      },
      {
        threshold: [0.2, 0.35, 0.5, 0.65, 0.8],
        rootMargin: "-120px 0px -25% 0px",
      },
    )

    menuItems.forEach((item) => {
      const section = document.getElementById(item.id)
      if (section) {
        sectionRatiosRef.current[item.id] = 0
        observer.observe(section)
      }
    })

    return () => observer.disconnect()
  }, [])

  return activeSection
}