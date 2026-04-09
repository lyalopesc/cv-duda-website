import { contactData } from "@/components/layout/Hero/data/contact-data"

export function ContactCards() {
  return (
    <div className="flex flex-col gap-4 mr-2">
      <h3 className="text-purple-800 text-2xl pl-1">Entre em contato</h3>
      <div className="flex gap-4">
        {contactData.map((data) => (
          <a
            key={data.href}
            href={data.href}
            className="flex flex-col flex-1 items-center justify-center gap-3 px-4 py-2 rounded-2xl transition-all hover:scale-105 hover:shadow-lg min-h-20 bg-[#18A999] border border-purple-800/10 text-white"
          >
            <data.icon className="w-5 h-5 shrink-0" />
            <span className="text-xs whitespace-nowrap">{data.label}</span>
          </a>
        ))}
      </div>
    </div>
  )
}
