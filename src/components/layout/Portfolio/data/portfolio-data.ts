const images = import.meta.glob("@/assets/portfolio/**/*.webp", { eager: true, import: "default" }) as Record<string, string>
const img = (path: string) => images[`/src/assets/portfolio/${path}`]

export interface BookLinkProps {
  title: string
  href: string
  secondaryLink?: {
    label: string
    href: string
  }
}

export interface BookGroupProps {
  subtitle: string
  books: BookLinkProps[]
}

export interface BookListProps {
  subtitle: string
  groups: BookGroupProps[]
}

export const BookListSections: BookListProps[] = [
  {
    subtitle: "De diversos autores",
    groups: [
      {
        subtitle: "Tayna Ferreira",
        books: [
          {
            title: "Nas Asas dos Sonhos",
            href: "https://a.co/d/f0dAeoA",
          },
        ],
      },
      {
        subtitle: "Daniel Garcia Mendes",
        books: [
          {
            title: "Meu coracao transborda em noites solitarias",
            href: "https://a.co/d/7HrhMdt",
          },
          {
            title: "Quando o Por-do-Sol Vira Alvorecer",
            href: "https://a.co/d/2dpD2sw",
          },
        ],
      },
      {
        subtitle: "Gabriela Teixeira",
        books: [
          {
            title: "Balada para o Oeste",
            href: "https://a.co/d/f8mAkeS",
          },
          {
            title: "Filha das Montanhas",
            href: "https://a.co/d/61tWtKy",
          },
          {
            title: "De Volta Para Casa",
            href: "https://a.co/d/gdL0qTA",
          },
          {
            title: "Para as estrelas do lado de fora",
            href: "https://a.co/d/fNZOeNX",
          },
        ],
      },
      {
        subtitle: "Livia Medeiros",
        books: [
          {
            title: "Amor Agridoce",
            href: "https://a.co/d/6EtOW7g",
          },
          {
            title: "Mia Jones Nao Ama Ninguem",
            href: "https://a.co/d/a9sFSna",
          },
        ],
      },
      {
        subtitle: "Karoline Dias",
        books: [
          {
            title: "Onde as Estrelas Nao Brilham",
            href: "https://a.co/d/eLskXLO",
          },
        ],
      },
    ],
  },
  {
    subtitle: "Meus livros",
    groups: [
      {
        subtitle: "Livia Medeiros",
        books: [
          {
            title: "O Sangue Derramado",
            href: "https://a.co/d/0MjXixY",
          },
          {
            title: "Noites de Insonia",
            href: "https://a.co/d/14WzLOR",
            secondaryLink: {
              label: "fisico",
              href: "https://loja.uiclap.com/titulo/ua38934/",
            },
          },
          {
            title: "Meu Amor Viajante",
            href: "https://a.co/d/hSehvsF",
          },
          {
            title: "Meu Amor Sempre",
            href: "https://a.co/d/j4RKC7v",
          },
          {
            title: "Achados & Perdidos: Sentimentos em versos livres",
            href: "https://a.co/d/ilsVVuc",
          },
          {
            title: "Ensaios Sobre a Intimidade",
            href: "https://a.co/d/eQywIht",
          },
        ],
      },
    ],
  },
]

export interface SelectedItemProps {
  category: string
  item: PortfolioItemProps
}

export interface PortfolioItemProps {
  id: string
  title: string
  images: string[]
  description: string
}

interface PortfolioCategoryProps {
  title: string
  items: PortfolioItemProps[]
}

export const portfolioCategories: PortfolioCategoryProps[] = [
  {
    title: "Diagramação",
    items: [
      {
        id: "diagramacao-sangue-derramado",
        title: "O Sangue Derramado",
        images: [
          img("diagramacao/sangue-derramado-1.webp"),
          img("diagramacao/sangue-derramado-2.webp"),
          img("diagramacao/sangue-derramado-3.webp"),
          img("diagramacao/sangue-derramado-4.webp"),
          img("diagramacao/sangue-derramado-5.webp"),
        ],
        description: "Diagramação de e-book, projeto pessoal.",
      },
      {
        id: "diagramacao-amor-agridoce",
        title: "Amor Agridoce",
        images: [
          img("diagramacao/amor-agridoce-1.webp"),
          img("diagramacao/amor-agridoce-2.webp"),
          img("diagramacao/amor-agridoce-3.webp"),
        ],
        description: "-",
      },
    ],
  },
  {
    title: "Capas",
    items: [
      {
        id: "capa-sangue-derramado",
        title: "O Sangue Derramado",
        images: [
          img("capas/capa-sangue-derramado.webp"),
        ],
        description:
          "Capa para e-book, livros de contos."
      },
      {
        id: "capa-rainha-de-dois-reinos",
        title: "A Rainha de Dois Reinos",
        images: [
          img("capas/capa-rainha-de-dois-reinos.webp"),
        ],
        description:
          "Capa alternativa para livro digital."
      },
    ],
  },
  {
    title: "Ilustrações",
    items: [
      {
        id: "ilustracao-diana",
        title: "FANART - Diana de Coeur",
        images: [
          img("ilustracoes/diana-de-coeur.webp"),
        ],
        description:
          "-"
      },
      {
        id: "ilustracao-selene",
        title: "FANART - Selene Veronis",
        images: [
          img("ilustracoes/selene-veronis.webp"),
        ],
        description:
          "Fanart de Selene Veronis, protagonista do livro 'Feras', de Lis Vilas Boas."
      },
    ],
  },
  {
    title: "Construção de marca",
    items: [
      {
        id: "marca-madu",
        title: "Madu e Os Livros",
        images: [
          img("construcao-de-marca/madu-e-os-livros-1.webp"),
          img("construcao-de-marca/madu-e-os-livros-2.webp"),
          img("construcao-de-marca/madu-e-os-livros-3.webp"),
          img("construcao-de-marca/madu-e-os-livros-4.webp"),
        ],
        description:
          "-"
      }
    ],
  },
]