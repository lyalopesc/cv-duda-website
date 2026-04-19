interface BaseCardProps {
  children: React.ReactNode
}

export function BaseCard({ children }: BaseCardProps) {
  return (
    <div className="group overflow-hidden border-l-4 border-l-[#18A999] border border-gray-300 rounded-lg bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      {children}
    </div>
  )
}
