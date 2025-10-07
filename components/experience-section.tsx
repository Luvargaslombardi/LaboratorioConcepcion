import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, Clock, Star } from "lucide-react"

const achievements = [
  {
    icon: Award,
    number: "+30",
    label: "Años de experiencia",
    description: "Brindando servicios de calidad desde 1994",
  },
  {
    icon: Users,
    number: "+50K",
    label: "Pacientes atendidos",
    description: "Confianza de miles de familias tucumanas",
  },
  {
    icon: Clock,
    number: "24h",
    label: "Resultados rápidos",
    description: "La mayoría de estudios en menos de 24 horas",
  },
  {
    icon: Star,
    number: "100%",
    label: "Precisión garantizada",
    description: "Equipos de última generación y personal especializado",
  },
]

export function ExperienceSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-accent mb-4">Nuestra Trayectoria</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Más de tres décadas comprometidos con la salud de nuestra comunidad, ofreciendo análisis clínicos de la más
            alta calidad con tecnología moderna y atención personalizada.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <div className="text-4xl font-serif font-bold text-primary mb-2">{achievement.number}</div>
                  <div className="text-lg font-semibold text-accent mb-2">{achievement.label}</div>
                  <div className="text-sm text-muted-foreground text-pretty">{achievement.description}</div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-serif font-bold text-accent mb-4">Dra. Marcia Lombardi</h3>
                  <p className="text-muted-foreground mb-4 text-pretty">
                    Directora técnica del laboratorio con más de 30 años de experiencia en análisis clínicos.
                    Especialista en bioquímica clínica y comprometida con la excelencia en cada resultado.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Award className="h-4 w-4" />
                    <span>Matrícula Profesional N° 1234</span>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="w-48 h-48 bg-muted rounded-full flex items-center justify-center">
                    <Users className="h-24 w-24 text-muted-foreground" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
