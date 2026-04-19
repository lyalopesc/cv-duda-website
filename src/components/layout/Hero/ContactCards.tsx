import { contactData } from "@/components/layout/Hero/data/contact-data"

export function ContactCards() {
  return (
    <div className="flex flex-col gap-4 lg:mr-2 w-full">
      <h3 className="text-purple-800 text-xl sm:text-2xl pl-1">
        Entre em contato
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
        {contactData.map((data) => (
          <a
            key={data.href}
            href={data.href}
            className="flex flex-col items-center justify-center gap-2 sm:gap-3 px-3 sm:px-4 py-3 sm:py-2 rounded-2xl transition-all hover:scale-105 hover:shadow-lg min-h-20 bg-[#18A999] border border-purple-800/10 text-white"
          >
            <data.icon className="w-5 h-5 shrink-0" />
            <span className="text-xs text-center break-all sm:break-normal sm:whitespace-nowrap">
              {data.label}
            </span>
          </a>
        ))}
      </div>
    </div>
  )
}
