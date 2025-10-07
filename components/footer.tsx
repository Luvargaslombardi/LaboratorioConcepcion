import Link from "next/link"
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Laboratorio Concepción</h3>
            <p className="text-secondary-foreground/80 mb-4 text-pretty">
              Más de 30 años brindando servicios de análisis clínicos de la más alta calidad en Concepción, Tucumán.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-secondary-foreground/60 hover:text-primary cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-secondary-foreground/60 hover:text-primary cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-secondary-foreground/60 hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/pacientes" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  Información para Pacientes
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2">
              <li className="text-secondary-foreground/80">Análisis de Sangre</li>
              <li className="text-secondary-foreground/80">Microbiología</li>
              <li className="text-secondary-foreground/80">Pruebas Rápidas</li>
              <li className="text-secondary-foreground/80">Inmunología</li>
              <li className="text-secondary-foreground/80">Hormonas</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-secondary-foreground/80 text-sm">
                  Av. San Martín 123
                  <br />
                  Concepción, Tucumán (4146)
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <div className="text-secondary-foreground/80 text-sm">(03865) 421-234</div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <div className="text-secondary-foreground/80 text-sm">info@labconcepcion.com.ar</div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-secondary-foreground/80 text-sm">
                  Lun-Vie: 7:00-18:00
                  <br />
                  Sáb: 7:00-12:00
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-secondary-foreground/60 text-sm">
            © 2024 Laboratorio Concepción. Todos los derechos reservados. | Directora Técnica: Dra. Marcia Lombardi - MP
            1234
          </p>
        </div>
      </div>
    </footer>
  )
}
