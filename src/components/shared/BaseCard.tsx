interface BaseCardProps {
  children: React.ReactNode
}

export function BaseCard({ children }: BaseCardProps) {
  return (
    <div className="border-l-4 border-l-[#18A999] border border-gray-300 rounded-lg transition-all hover:shadow-md bg-white">
      {children}
    </div>
  )
}
