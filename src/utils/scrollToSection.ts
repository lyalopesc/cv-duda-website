export const scrollToSection = (id: string) => {
  const scrollContainer = document.getElementById("scroll-container")
  const section = document.getElementById(id)

  if (section) {
    scrollContainer!.scrollTo({
      top: section.offsetTop,
      behavior: "smooth",
    })
  }
}