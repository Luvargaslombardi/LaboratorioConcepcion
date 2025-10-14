"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"

const services = [
  {
    title: "Evaluación endocrinológica completa",
    description: "Control integral de tus hormonas para cuidar tu metabolismo y energía.",
    image: "/Evaluación endocrinológica completa.png",
  },
  {
    title: "Detección de marcadores tumorales en sangre",
    description: "Análisis preventivos que ayudan al diagnóstico temprano.",
    image: "/Detección de marcadores tumorales en sangre.png",
  },
  {
    title: "Estudios bacteriológicos y virales",
    description: "Detección rápida de Covid-19, Dengue, Influenza A y B, Streptococos.",
    image: "/Estudios bacteriológicos y virales.png",
  },
  {
    title: "Pruebas virológicas y de rutina",
    description: "Exámenes clínicos esenciales para el seguimiento de tu salud.",
    image: "/Pruebas virológicas y de rutina.png",
  },
]

export function ServicesSection() {
  const [currentIndex, setCurrentIndex] = useState(services.length) // Empezamos desde el segundo conjunto
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isTransitioning, setIsTransitioning] = useState(false)
  
  const nextSlide = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex((prevIndex) => prevIndex + 1)
    
    // Reset position si llegamos al final
    setTimeout(() => {
      if (currentIndex >= services.length * 2) {
        setCurrentIndex(services.length)
      }
      setIsTransitioning(false)
    }, 500)
  }
  
  const prevSlide = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex((prevIndex) => prevIndex - 1)
    
    // Reset position si llegamos al principio
    setTimeout(() => {
      if (currentIndex <= 0) {
        setCurrentIndex(services.length)
      }
      setIsTransitioning(false)
    }, 500)
  }

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      nextSlide()
    }, 4000) // Cambia cada 4 segundos

    return () => clearInterval(interval)
  }, [isAutoPlaying, currentIndex])

  // Pausar auto-play cuando el usuario interactúa
  const handleUserInteraction = () => {
    setIsAutoPlaying(false)
    // Reanudar auto-play después de 10 segundos de inactividad
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const handleServiceClick = (service: typeof services[0]) => {
    const message = `Hola, me interesa obtener más información sobre: ${service.title}. ¿Podrían ayudarme con los detalles y requisitos?`
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/543865650673?text=${encodedMessage}`, '_blank')
  }

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto text-pretty leading-relaxed">
            En Laboratorio Concepción realizamos estudios que cuidan tu salud con la precisión que necesitás.
            Desde controles de rutina hasta pruebas específicas, te acompañamos en cada paso.
          </p>
        </div>

        {/* Carrusel */}
        <div className="relative max-w-6xl mx-auto mb-12 px-8">
          {/* Botones de navegación */}
          <Button
            variant="outline"
            size="icon"
            className="absolute -left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white border-2 border-gray-600 text-gray-800 shadow-lg hover:bg-gray-100 hover:border-gray-700"
            onClick={() => {
              prevSlide()
              handleUserInteraction()
            }}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className="absolute -right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white border-2 border-gray-600 text-gray-800 shadow-lg hover:bg-gray-100 hover:border-gray-700"
            onClick={() => {
              nextSlide()
              handleUserInteraction()
            }}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          {/* Contenedor del carrusel */}
          <div className="overflow-hidden rounded-lg">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
            >
              {/* Duplicamos los servicios para crear un bucle infinito */}
              {[...services, ...services, ...services].map((service, index) => (
                <div key={`${service.title}-${index}`} className="w-1/3 flex-shrink-0 px-2">
                  <Card 
                    className="hover:shadow-lg transition-all duration-300 overflow-hidden h-[400px] cursor-pointer hover:scale-[1.02] flex flex-col bg-white"
                    onClick={() => handleServiceClick(service)}
                  >
                    <div className="relative h-44 w-full flex-shrink-0">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardHeader className="pb-2 flex-shrink-0 px-4 pt-4">
                      <CardTitle className="text-base font-semibold leading-tight line-clamp-2 min-h-[2.5rem]">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0 flex-grow px-4 pb-4">
                      <CardDescription className="text-sm leading-relaxed">
                        {service.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Indicadores */}
          <div className="flex justify-center mt-6 space-x-2">
            {services.map((_, index) => (
              <button
                key={index}
                className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
                  index === (currentIndex % services.length) ? 'bg-yellow-400' : 'bg-gray-300'
                }`}
                onClick={() => {
                  setCurrentIndex(services.length + index)
                  handleUserInteraction()
                }}
              />
            ))}
          </div>
        </div>

        <div className="text-center">
          <Card className="max-w-2xl mx-auto bg-primary/5 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-xl font-serif font-semibold mb-3">¿Necesitás otro estudio?</h3>
              <p className="text-muted-foreground mb-4">
                Consultá por el estudio que necesitás y te brindaremos toda la información.
              </p>
              <Button 
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-semibold"
                onClick={() => window.open('https://wa.me/543865650673?text=Hola%2C%20necesito%20informaci%C3%B3n%20sobre%20un%20estudio%20espec%C3%ADfico%20que%20no%20veo%20en%20la%20lista.', '_blank')}
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Consultar por WhatsApp
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}