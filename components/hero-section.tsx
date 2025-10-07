import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, FileText, MessageCircle } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-background via-background to-muted/20 py-20 lg:py-32">
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
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-accent mb-6 text-balance">
            Confianza y precisión en análisis clínicos en Concepción
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty max-w-3xl mx-auto">
            Más de 30 años brindando servicios de laboratorio de la más alta calidad, con tecnología moderna y atención
            personalizada para cada paciente.
          </p>

          {/* Main CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6">
              <Calendar className="mr-2 h-5 w-5" />
              Sacar Turno
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
              <FileText className="mr-2 h-5 w-5" />
              Resultados Online
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 border-green-500 text-green-600 hover:bg-green-50 bg-transparent"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Contactar por WhatsApp
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="text-4xl font-serif font-bold text-primary mb-2">+30</div>
              <div className="text-muted-foreground">Años de experiencia</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl font-serif font-bold text-primary mb-2">24h</div>
              <div className="text-muted-foreground">Resultados rápidos</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl font-serif font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Confianza y precisión</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
