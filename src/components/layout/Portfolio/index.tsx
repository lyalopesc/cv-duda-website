import { useState } from "react"
import { ExternalLink, FolderOpen } from "lucide-react"
import { PortfolioCard } from "./PortfolioCard"
import {
  BookListSections,
  portfolioCategories,
  type SelectedItemProps,
} from "./data/portfolio-data"
import { SectionTitle } from "@/components/shared/SectionTitle"
import { PortfolioModal } from "./PortfolioModal"
import { Section } from "@/components/shared/Section"
import { SectionSubtitle } from "@/components/shared/SectionSubtitle"
import { PortfolioBookListModal } from "./PortfolioBookListModal"

export function Portfolio() {
  const [selectedItem, setSelectedItem] = useState<SelectedItemProps | null>(
    null,
  )
  const [isBookListOpen, setIsBookListOpen] = useState(false)

  return (
    <>
      <Section id="portfolio" showScrollHint={false} allowInnerScroll>
        <div className="max-w-6xl mx-auto w-full">
          <SectionTitle icon={FolderOpen}>Portfólio</SectionTitle>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-8 lg:gap-x-12 xl:gap-x-20 gap-y-10 sm:gap-y-12 lg:gap-y-16 ml-0.5 sm:ml-2 mr-0.5 sm:mr-2">
            {portfolioCategories.map((category) => (
              <div key={category.title} className="space-y-6">
                <SectionSubtitle
                  action={
                    category.title === "Diagramação" ? (
                      <button
                        type="button"
                        onClick={() => setIsBookListOpen(true)}
                        className="group flex items-center gap-1.5 text-xs font-body text-[#18A999] whitespace-nowrap"
                      >
                        <span className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                          Todos os livros diagramados
                        </span>
                        <ExternalLink className="w-3 h-3 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </button>
                    ) : undefined
                  }
                >
                  {category.title}
                </SectionSubtitle>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  {category.items.map((item) => (
                    <PortfolioCard
                      key={item.id}
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
        key={selectedItem?.item.id ?? "portfolio-modal"}
        isOpen={selectedItem !== null}
        onClose={() => setSelectedItem(null)}
        item={selectedItem}
      />

      <PortfolioBookListModal
        isOpen={isBookListOpen}
        onClose={() => setIsBookListOpen(false)}
        title="Livros diagramados"
        sections={BookListSections}
      />
    </>
  )
}
