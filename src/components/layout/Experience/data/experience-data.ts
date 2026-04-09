interface JobProps {
  company: string
  period: string
  description: string
}

interface ExperienceDataProps {
  category: string
  jobs: JobProps[]
}

export const experienceData: ExperienceDataProps[] = [
  {
    category: "Tradução & Revisão",
    jobs: [
      {
        company: "Mobo Reader",
        period: "2024 - Atual",
        description: "Tradução e revisão inglês/pt-br para diversas histórias.",
      },
      {
        company: "Novel Cat",
        period: "2023 - 2024",
        description: "Tradução e revisão inglês/pt-br para diversas histórias.",
      },
      {
        company: "Bravo Studios",
        period: "2019 - 2021",
        description: "Tradução e revisão inglês/pt-br para diversos produtos audiovisuais.",
      }],
  },
  {
    category: "Edição de Vídeo",
    jobs: [
      {
        company: "Medialab",
        period: "2017",
        description: "Assistente de edição e organização de material bruto para série documental.",
      },
      {
        company: "Portal PUC-Rio",
        period: "2014 - 2016",
        description: "Edição de vídeo para matérias jornalísticas.",
      }],
  },
  {
    category: "Freelancer",
    jobs: [
      {
        company: "Diagramação",
        period: "2022 - Atual",
        description: "Diagramação de livros físicos e e-books para diversos autores.",
      },
      {
        company: "Leitura Crítica",
        period: "2020 - Atual",
        description: "Avaliação profissional da escrita para diversos autores.",
      }
    ]
  }]