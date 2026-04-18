import { useState } from "react"
import { FolderOpen } from "lucide-react"
import { PortfolioCard } from "./PortfolioCard"
import {
  portfolioCategories,
  type SelectedItemProps,
} from "./data/portfolio-data"
import { SectionTitle } from "@/components/shared/SectionTitle"
import { PortfolioModal } from "./PortfolioModal"
import { Section } from "@/components/shared/Section"
import { SectionSubtitle } from "@/components/shared/SectionSubtitle"

export function Portfolio() {
  const [selectedItem, setSelectedItem] = useState<SelectedItemProps | null>(
    null,
  )

  return (
    <>
      <Section id="portfolio">
        <div className="max-w-6xl mx-auto w-full">
          <SectionTitle icon={FolderOpen}>Portfólio</SectionTitle>

          <div className="grid grid-cols-2 gap-14 ml-2 mr-2">
            {portfolioCategories.map((category) => (
              <div key={category.title} className="space-y-6">
                <SectionSubtitle>{category.title}</SectionSubtitle>

                <div className="grid grid-cols-2 gap-5">
                  {category.items.map((item) => (
                    <PortfolioCard
                      key={item}
                      item={item}
                      category={category.title}
                      onClick={setSelectedItem}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <PortfolioModal
        isOpen={selectedItem !== null}
        onClose={() => setSelectedItem(null)}
        item={selectedItem}
      />
    </>
  )
}
