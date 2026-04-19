import { Dialog, DialogContent } from "@/components/ui/dialog"
import type { BookListProps } from "./data/portfolio-data"
import { SectionSubtitle } from "@/components/shared/SectionSubtitle"

interface PortfolioBookListModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  sections: BookListProps[]
}

export function PortfolioBookListModal({
  isOpen,
  onClose,
  title,
  sections,
}: PortfolioBookListModalProps) {
  if (!isOpen) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[min(96vw,42rem)] sm:max-w-none max-h-[82vh] sm:max-h-[88vh] overflow-y-auto p-4 sm:p-6 lg:p-8">
        <div className="mb-4">
          <span className="text-sm px-3 py-1 rounded-full bg-[#2DBFAD] text-white">
            Diagramação
          </span>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl sm:text-3xl mb-3 text-[#6B21A8]">{title}</h2>

          <div className="space-y-6">
            {sections.map((section) => (
              <div key={section.subtitle} className="space-y-3">
                <SectionSubtitle>{section.subtitle}</SectionSubtitle>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {section.groups.map((group) => (
                    <div key={group.subtitle} className="space-y-2.5">
                      {section.subtitle !== "Meus livros" && (
                        <h4 className="inline-flex items-center rounded-md bg-[#F3E8FF] px-2.5 py-1 text-sm font-semibold text-[#4A176E]">
                          {group.subtitle}
                        </h4>
                      )}

                      <ul className="space-y-2">
                        {group.books.map((book) => (
                          <li key={book.title} className="list-disc ml-5">
                            <a
                              href={book.href}
                              target="_blank"
                              rel="noreferrer"
                              className="text-[#5C1D8B] hover:underline"
                            >
                              {book.title}
                            </a>

                            {book.secondaryLink && (
                              <>
                                {" "}
                                <a
                                  href={book.secondaryLink.href}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="text-[#18A999] hover:underline"
                                >
                                  ({book.secondaryLink.label})
                                </a>
                              </>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
