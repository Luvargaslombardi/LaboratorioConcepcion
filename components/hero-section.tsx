"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle, Search } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-background via-background to-muted/20 py-12 lg:py-20">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23333333' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-accent mb-6 text-balance">
              Laboratorio Concepción
            </h1>

            <h2 className="text-2xl md:text-3xl text-muted-foreground mb-4 font-medium">
              Confianza, precisión y cuidado en cada estudio
            </h2>
            
            <h2 className="text-2xl md:text-3xl text-muted-foreground mb-6 font-medium">
              Estudios clínicos con compromiso y excelencia
            </h2>

            <p className="text-lg text-muted-foreground mb-8 italic">
              Agradecemos que nos elijas.
            </p>

            {/* Main CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <Button 
                size="lg" 
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 text-lg px-8 py-6 font-semibold"
                onClick={() => window.open('https://wa.me/543865650673', '_blank')}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Sacá tu turno ahora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-6 border-2 border-gray-600 text-black hover:bg-gray-100 hover:border-gray-700 bg-white shadow-sm hover:text-black"
                onClick={() => document.getElementById('insurance')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Search className="mr-2 h-5 w-5" />
                Conocé nuestros servicios
              </Button>
            </div>
          </div>

          {/* Image Content */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              <Image
                src="/microscopiocentrado.png"
                alt="Laboratorio Concepción - Microscopio profesional con tecnología moderna"
                width={600}
                height={500}
                className="rounded-lg shadow-lg object-cover h-[500px]"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
