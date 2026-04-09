import {
  Braces,
  Code,
  Eye,
  Files,
  ListChecks,
  ListTodo,
  MessageCircle,
  Palette,
  PanelsTopLeft,
  Sparkles,
  Video,
  WandSparkles,
  type LucideIcon,
} from "lucide-react"

export interface SkillsDataProps {
  name: string
  icon: LucideIcon
  subitems?: string[]
}

export const hardSkillsData: SkillsDataProps[] = [
  {
    name: "Pacote Adobe",
    icon: Palette,
    subitems: ["Photoshop", "InDesign", "Premiere Pro", "Acrobat Reader"],
  },
  {
    name: "Microsoft",
    icon: Files,
    subitems: ["Word", "Excel", "PowerPoint"],
  },
  {
    name: "Affinity & Canva",
    icon: WandSparkles,
  },
  {
    name: "Capcut",
    icon: Video,
  },
  {
    name: "Figma",
    icon: PanelsTopLeft,
  },
  {
    name: "HTML & CSS",
    icon: Code,
  },
  {
    name: "Javascript",
    icon: Braces,
  },
  {
    name: "ClickUp",
    icon: ListTodo,
  },
]

export const softSkillsData: SkillsDataProps[] = [
  {
    name: "Criativa",
    icon: Sparkles,
  },
  {
    name: "Organizada",
    icon: ListChecks,
  },
  {
    name: "Atenta aos detalhes",
    icon: Eye,
  },
  {
    name: "Comunicativa",
    icon: MessageCircle,
  },
]
