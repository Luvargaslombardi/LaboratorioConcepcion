import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Microscope, Heart, Droplets, Zap, Shield, Activity, ArrowRight } from "lucide-react"

const services = [
  {
    icon: Droplets,
    title: "Análisis de Sangre",
    description: "Hemograma completo, bioquímica sanguínea, perfil lipídico y más.",
    studies: ["Hemograma", "Glucemia", "Colesterol", "Triglicéridos"],
  },
  {
    icon: Microscope,
    title: "Microbiología",
    description: "Cultivos, antibiogramas y estudios bacteriológicos especializados.",
    studies: ["Urocultivo", "Coprocultivo", "Cultivo de secreciones"],
  },
  {
    icon: Heart,
    title: "Cardiología",
    description: "Marcadores cardíacos y estudios especializados del corazón.",
    studies: ["Troponinas", "CK-MB", "BNP", "Dímero D"],
  },
  {
    icon: Zap,
    title: "Pruebas Rápidas",
    description: "Resultados inmediatos para diagnósticos urgentes.",
    studies: ["Test de Dengue", "COVID-19", "Embarazo", "Strep A"],
  },
  {
    icon: Shield,
    title: "Inmunología",
    description: "Estudios del sistema inmunológico y marcadores tumorales.",
    studies: ["Hepatitis", "VIH", "PSA", "Tiroides"],
  },
  {
    icon: Activity,
    title: "Hormonas",
    description: "Perfil hormonal completo y estudios endocrinológicos.",
    studies: ["TSH", "T4", "Cortisol", "Insulina"],
  },
]

export function ServicesSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-accent mb-4">Nuestros Servicios</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Ofrecemos una amplia gama de análisis clínicos con la más alta precisión y tecnología de vanguardia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    {service.studies.map((study, studyIndex) => (
                      <div key={studyIndex} className="text-sm text-muted-foreground flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                        {study}
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    Solicitar Turno
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center">
          <Card className="max-w-2xl mx-auto bg-primary/5 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-xl font-serif font-semibold mb-3">¿No encontrás tu estudio?</h3>
              <p className="text-muted-foreground mb-4">
                Contamos con más de 200 tipos de análisis diferentes. Contactanos para consultar por el estudio que
                necesitás.
              </p>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Consultar Estudio</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
