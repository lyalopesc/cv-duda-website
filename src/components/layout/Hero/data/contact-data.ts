import { Globe, Mail, Phone, type LucideIcon } from "lucide-react"

interface ContactDataProps {
  href: string
  label: string
  icon: LucideIcon
}

export const contactData: ContactDataProps[] = [
  {
    href: "https://wa.me/5521988589611",
    label: "(21) 98858-9611",
    icon: Phone,
  },
  {
    href: "mailto:maduggouveia@gmail.com",
    label: "maduggouveia@gmail.com",
    icon: Mail,
  },
  {
    href: "https://www.linkedin.com/in/maduggouveia/",
    label: "LinkedIn",
    icon: Globe,
  },
]
