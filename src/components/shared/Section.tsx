interface SectionProps {
  id: string
  children: React.ReactNode
}

export function Section({ id, children }: SectionProps) {
  return (
    <section
      id={id}
      className="flex h-screen px-8 pt-60 pb-12 items-start snap-start relative"
    >
      {children}
    </section>
  )
}
