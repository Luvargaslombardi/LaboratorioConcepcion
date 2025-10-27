import Image from "next/image"

const insuranceCompanies = [
  {
    name: "Swiss Medical",
    logo: "/Swiss Medical.png",
  },
  {
    name: "Omint",
    logo: "/Omint.png",
  },
  {
    name: "Red de Seguros Médicos",
    logo: "/Red de Seguros Médicos.png",
  },
  {
    name: "OSPRERA",
    logo: "/OSPRERA.png",
  },
  {
    name: "Galeno",
    logo: "/Galeno.png",
  },
  {
    name: "PAMI",
    logo: "/PAMI.png",
  },
  {
    name: "IPSST",
    logo: "/IPSST.png",
  },
]

export function InsuranceSection() {
  return (
    <section id="insurance" className="py-16 sm:py-20 lg:py-32 bg-gradient-to-b from-background via-yellow-50/20 to-background relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-40 left-20 w-24 h-24 bg-yellow-200/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 right-20 w-32 h-32 bg-yellow-300/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Pregunta principal con efectos */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div className="inline-block relative">
              {/* Decorative line */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-4 relative">
                <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                  ¿Cuáles son las{" "}
                </span>
                <span className="bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 bg-clip-text text-transparent inline-block animate-pulse">
                  obras sociales
                </span>
                <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                  {" "}que reciben?
                </span>
              </h2>
              
              {/* Decorative underline */}
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-yellow-400/60 to-transparent"></div>
            </div>
          </div>

          {/* Grid de logos optimizado */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4 lg:gap-6">
            {insuranceCompanies.map((company, index) => (
              <div
                key={index}
                className="group bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-5 border-2 border-gray-200 hover:border-yellow-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 flex items-center justify-center aspect-square"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={company.logo}
                    alt={`Logo de ${company.name}`}
                    fill
                    className="object-contain grayscale group-hover:grayscale-0 transition-all duration-300 p-1 sm:p-2"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Nota adicional */}
          <div className="text-center mt-12 sm:mt-16">
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Si tu obra social no está en la lista, no dudes en consultarnos. 
              Trabajamos con muchas más y siempre buscamos ampliar nuestras coberturas.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
