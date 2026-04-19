import { useState, useMemo, useEffect } from "react"
import { createPortal } from "react-dom"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import type { SelectedItemProps } from "./data/portfolio-data"

interface PortfolioModalProps {
  isOpen: boolean
  onClose: () => void
  item: SelectedItemProps | null
}

export function PortfolioModal({ isOpen, onClose, item }: PortfolioModalProps) {
  const [api, setApi] = useState<CarouselApi>()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [imageRatios, setImageRatios] = useState<Record<string, number>>({})
  const [zoomedImage, setZoomedImage] = useState<string | null>(null)

  const gallery = useMemo(() => item?.item.images ?? [], [item])

  // sincroniza o índice ativo com a imagem atual do carrossel
  useEffect(() => {
    if (!api) return

    const onSelect = () => {
      setCurrentImageIndex(api.selectedScrollSnap())
    }

    onSelect()
    api.on("select", onSelect)
    return () => {
      api.off("select", onSelect)
    }
  }, [api])

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setZoomedImage(null)
      }
    }

    window.addEventListener("keydown", handleEsc)
    return () => {
      window.removeEventListener("keydown", handleEsc)
    }
  }, [])

  const handleImageLoad = (
    image: string,
    event: React.SyntheticEvent<HTMLImageElement>,
  ) => {
    const { naturalWidth, naturalHeight } = event.currentTarget
    if (!naturalWidth || !naturalHeight) return

    const ratio = naturalWidth / naturalHeight

    setImageRatios((previousRatios) => {
      if (previousRatios[image] === ratio) return previousRatios

      return {
        ...previousRatios,
        [image]: ratio,
      }
    })
  }

  if (!item) return null

  const zoomOverlay =
    zoomedImage && typeof document !== "undefined"
      ? createPortal(
          <div
            className="fixed inset-0 bg-black/90 flex items-center justify-center p-4 cursor-zoom-out"
            style={{ zIndex: 9999 }}
            onClick={() => setZoomedImage(null)}
          >
            <img
              src={zoomedImage}
              alt="Imagem ampliada"
              className="max-w-[96vw] max-h-[92vh] object-contain"
              onClick={(event) => event.stopPropagation()}
            />
          </div>,
          document.body,
        )
      : null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        key={item.item.id}
        className="w-[min(96vw,62rem)] sm:max-w-none max-h-[92vh] overflow-x-hidden overflow-y-auto p-4 sm:p-6 lg:p-8"
      >
        {/* Categoria */}
        <div className="mb-4">
          <span className="text-sm px-3 py-1 rounded-full bg-[#2DBFAD] text-white">
            {item.category}
          </span>
        </div>

        <div className="space-y-6">
          {/* Título e descrição */}
          <div>
            <h2 className="text-2xl sm:text-3xl mb-3 text-[#6B21A8]">
              {item.item.title}
            </h2>
            <p className="text-sm sm:text-base text-[#1F1F1F]">
              {item.item.description}
            </p>
          </div>

          {/* Carrossel de imagens */}
          <Carousel
            key={item.item.id}
            setApi={setApi}
            className="w-full overflow-hidden"
          >
            <CarouselContent className="ml-0">
              {gallery.map((image, index) => (
                <CarouselItem key={image} className="pl-0">
                  <div className="w-full aspect-video rounded-lg overflow-hidden bg-background flex items-center justify-center">
                    <button
                      type="button"
                      onClick={() => setZoomedImage(image)}
                      className="w-full h-full cursor-zoom-in"
                      aria-label={`Ampliar imagem ${index + 1}`}
                    >
                      <img
                        src={image}
                        alt={`${item.item.title} - imagem ${index + 1}`}
                        onLoad={(event) => handleImageLoad(image, event)}
                        className={`w-full h-full ${
                          (imageRatios[image] ?? 16 / 9) >= 1
                            ? "object-cover"
                            : "object-contain"
                        }`}
                      />
                    </button>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {gallery.length > 1 && (
              <>
                <CarouselPrevious className="left-3 bg-black/45 text-white hover:bg-black/60 border-none" />
                <CarouselNext className="right-3 bg-black/45 text-white hover:bg-black/60 border-none" />
              </>
            )}
          </Carousel>

          {/* Miniaturas */}
          {gallery.length > 0 && (
            <div className="flex flex-wrap justify-center gap-2">
              {gallery.map((image, index) => (
                <button
                  key={image}
                  onClick={() => api?.scrollTo(index)}
                  className={`w-14 h-14 sm:w-16 sm:h-16 rounded-md overflow-hidden border-2 transition-all ${
                    index === currentImageIndex
                      ? "border-[#6B21A8] opacity-100"
                      : "border-transparent opacity-70 hover:opacity-90 hover:border-[#B78BD8]"
                  }`}
                  aria-label={`Selecionar imagem ${index + 1}`}
                >
                  <img
                    src={image}
                    alt={`${item.item.title} miniatura ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      </DialogContent>

      {zoomOverlay}
    </Dialog>
  )
}
