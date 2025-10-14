import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, Phone } from "lucide-react"

const insuranceLogos = [
  "OSDE",
  "Swiss Medical",
  "Galeno",
  "Medicus",
  "IOMA",
  "PAMI",
  "Obra Social Empleados Públicos",
  "OSECAC",
  "OSPRERA",
  "OSPLAD",
]

export function InsuranceSection() {
  return (
    <section id="insurance" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-accent mb-4">Obras Sociales</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Trabajamos con la mayoría de las obras sociales y prepagas. Consultá aquí por la tuya.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <Card>
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
              </div>
              <CardTitle className="text-2xl">Obras Sociales Adheridas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
                {insuranceLogos.map((insurance, index) => (
                  <div
                    key={index}
                    className="bg-white border border-border rounded-lg p-4 text-center hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="text-sm font-medium text-foreground">{insurance}</div>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <p className="text-muted-foreground mb-4">
                  ¿Tu obra social no está en la lista? No te preocupes, trabajamos con muchas más.
                </p>
                <Button variant="outline" className="mr-4 bg-transparent">
                  <Phone className="mr-2 h-4 w-4" />
                  Consultar por Teléfono
                </Button>
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Ver Lista Completa</Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-6">
              <h3 className="text-xl font-serif font-semibold mb-3">Atención Particular</h3>
              <p className="text-muted-foreground mb-4">
                También atendemos pacientes particulares con precios accesibles y planes de pago flexibles.
              </p>
              <Button variant="outline">Consultar Precios</Button>
            </CardContent>
          </Card>

          <Card className="bg-green-50 border-green-200">
            <CardContent className="p-6">
              <h3 className="text-xl font-serif font-semibold mb-3">Convenios Empresariales</h3>
              <p className="text-muted-foreground mb-4">
                Ofrecemos convenios especiales para empresas y sus empleados. Consultá por nuestros planes corporativos.
              </p>
              <Button variant="outline" className="border-green-500 text-green-600 hover:bg-green-50 bg-transparent">
                Solicitar Información
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
