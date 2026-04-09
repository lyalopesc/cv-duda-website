interface ProjectsDataProps {
  title: string;
  description: string;
  url: string;
  image: string;
}

export const projectsData: ProjectsDataProps[] = [
  {
    title: "Madu e Os Livros",
    description: "Marca como escritora de romance e fantasia, para divulgar meus livros e comentar sobre literatura de forma geral.",
    url: "https://madueoslivros.com.br/",
    image: "/madu-e-os-livros.png"
  },
  {
    title: "Primeira Versão",
    description: "Projeto com duas sócias para oferecer serviços editoriais de qualidade, desde preparação de texto até diagramação de livros e capa.",
    url: "http://primeiraversao.carrd.co/",
    image: "/primeira-versao.png"
  }
]