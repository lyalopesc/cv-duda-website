interface SectionSubtitleProps {
  children: React.ReactNode
}

export function SectionSubtitle({ children }: SectionSubtitleProps) {
  return (
    <h2 className="text-xl pb-2 text-purple-800 border-b border-[#18A999]">
      {children}
    </h2>
  )
}
