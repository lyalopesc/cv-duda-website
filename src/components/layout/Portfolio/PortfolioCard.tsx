import { BaseCard } from "@/components/shared/BaseCard"
import type {
  PortfolioItemProps,
  SelectedItemProps,
} from "./data/portfolio-data"

interface PortfolioCardProps {
  item: PortfolioItemProps
  category: string
  onClick: (selected: SelectedItemProps) => void
}

export function PortfolioCard({ item, category, onClick }: PortfolioCardProps) {
  const coverImage = item.images[0]

  return (
    <BaseCard>
      <button
        onClick={() => onClick({ item, category })}
        className="w-full text-left"
      >
        <img
          src={coverImage}
          alt={item.title}
          className="w-full h-26 sm:h-28 object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        />
        <span className="p-3 block">
          <span className="text-[11px] text-[#1F1F1F] block">{item.title}</span>
        </span>
      </button>
    </BaseCard>
  )
}
