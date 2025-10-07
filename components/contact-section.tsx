import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Clock, Mail, MessageCircle } from "lucide-react"

export function ContactSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-accent mb-4">Contacto</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Estamos aquí para ayudarte. Contactanos por cualquier consulta o para sacar tu turno.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  Ubicación
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Av. San Martín 123
                  <br />
                  Concepción, Tucumán (4146)
                  <br />
                  Argentina
                </p>
                <Button variant="outline" size="sm">
                  Ver en Google Maps
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  Teléfonos
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Principal:</span>
                  <span className="font-medium">(03865) 421-234</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">WhatsApp:</span>
                  <span className="font-medium">(03865) 421-235</span>
                </div>
                <div className="pt-2">
                  <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white w-full">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Contactar por WhatsApp
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-primary" />
                  Horarios de Atención
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Lunes a Viernes:</span>
                  <span className="font-medium">7:00 - 18:00</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Sábados:</span>
                  <span className="font-medium">7:00 - 12:00</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Domingos:</span>
                  <span className="font-medium text-red-600">Cerrado</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                Formulario de Contacto
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Nombre *</label>
                    <Input placeholder="Tu nombre completo" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Teléfono *</label>
                    <Input placeholder="Tu número de teléfono" />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input type="email" placeholder="tu@email.com" />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Asunto *</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona el motivo de tu consulta" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="turno">Solicitar Turno</SelectItem>
                      <SelectItem value="resultados">Consulta sobre Resultados</SelectItem>
                      <SelectItem value="obra-social">Consulta Obra Social</SelectItem>
                      <SelectItem value="precios">Consulta de Precios</SelectItem>
                      <SelectItem value="otros">Otros</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Mensaje *</label>
                  <Textarea placeholder="Describe tu consulta o solicitud..." rows={4} />
                </div>

                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  Enviar Mensaje
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Map placeholder */}
        <div className="mt-12">
          <Card>
            <CardContent className="p-0">
              <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                  <p className="text-muted-foreground">Mapa Interactivo</p>
                  <p className="text-sm text-muted-foreground">Av. San Martín 123, Concepción, Tucumán</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
