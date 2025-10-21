import { MapPin, Phone, Mail, Clock, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-6 sm:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-4">
          
          {/* Left Column - Contact Info */}
          <div className="space-y-3">
            <div>
              <h3 className="text-xl font-serif font-bold text-yellow-400 mb-2">
                Laboratorio Concepción
              </h3>
              <p className="text-gray-400 text-sm leading-snug">
                Más de 30 años brindando servicios de análisis clínicos de calidad en Concepción, Tucumán.
              </p>
            </div>

            <div className="space-y-2.5">
              {/* Dirección */}
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                <div>
                  <a 
                    href="https://www.google.com/maps/place/Padre+Carlos+Juangorena+1562,+T4146+Concepci%C3%B3n,+Tucum%C3%A1n/@-27.3471742,-65.5971183,17z/data=!3m1!4b1!4m6!3m5!1s0x9423cf5d6020c3c1:0xf623d7a905e03404!8m2!3d-27.3471742!4d-65.5945434!16s%2Fg%2F11jbm60014?entry=ttu&g_ep=EgoyMDI1MTAxNC4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-yellow-400 transition-colors text-xs"
                  >
                    Juangorena 1562, Concepción, Tucumán
                  </a>
                </div>
              </div>

              {/* Teléfonos */}
              <div className="flex items-start gap-2">
                <Phone className="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                <div className="text-gray-300 text-xs">
                  <a href="tel:+543865422476" className="hover:text-yellow-400 transition-colors">
                    (3865) 422476
                  </a>
                  {" | "}
                  <a href="tel:+543865650673" className="hover:text-yellow-400 transition-colors">
                    3865 650673
                  </a>
                </div>
              </div>

              {/* Correo */}
              <div className="flex items-start gap-2">
                <Mail className="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                <a 
                  href="mailto:laboratorioconcepcion@hotmail.com"
                  className="text-gray-300 hover:text-yellow-400 transition-colors text-xs"
                >
                  laboratorioconcepcion@hotmail.com
                </a>
              </div>

              {/* Horarios */}
              <div className="flex items-start gap-2">
                <Clock className="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                <div className="text-gray-300 text-xs leading-snug">
                  <p>L-V: 8-13 y 16-20:30 | Sáb: 8-13 hs</p>
                </div>
              </div>

              {/* Instagram */}
              <div className="flex items-center gap-2">
                <Instagram className="h-4 w-4 text-yellow-400 flex-shrink-0" />
                <a 
                  href="https://www.instagram.com/laboratorioconcepcion/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-yellow-400 transition-colors text-xs"
                >
                  @laboratorioconcepcion
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Map */}
          <div className="h-full min-h-[200px] lg:min-h-[220px]">
            <div className="w-full h-full rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.8651851851853!2d-65.5971183!3d-27.3471742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9423cf5d6020c3c1%3A0xf623d7a905e03404!2sPadre%20Carlos%20Juangorena%201562%2C%20T4146%20Concepci%C3%B3n%2C%20Tucum%C3%A1n!5e0!3m2!1ses!2sar!4v1234567890123!5m2!1ses!2sar"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Laboratorio Concepción"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-3 mt-4">
          <div className="text-center">
            <p className="text-gray-400 text-xs">
              © {new Date().getFullYear()} Laboratorio Concepción. Todos los derechos reservados. | Bioquímica Marcia Lombardi M.P. 1029
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
