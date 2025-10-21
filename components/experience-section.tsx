export function ExperienceSection() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-background via-yellow-50/30 to-background relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-50/40 via-transparent to-yellow-100/30 animate-gradient-pulse"></div>
      
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Animated floating shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-200/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-yellow-300/15 rounded-full blur-3xl animate-float-delayed"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-yellow-100/10 rounded-full blur-2xl animate-float-slow"></div>
      <div className="absolute top-1/3 right-1/4 w-36 h-36 bg-yellow-200/10 rounded-full blur-3xl animate-float-slower"></div>
      
      {/* Animated light rays */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-yellow-200/30 via-transparent to-transparent animate-pulse-slow"></div>
        <div className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-yellow-300/20 via-transparent to-transparent animate-pulse-slower"></div>
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="max-w-5xl mx-auto space-y-12 sm:space-y-16">
          
          {/* Texto principal con fondo sutil */}
          <div className="text-center space-y-8">
            <p className="text-2xl sm:text-3xl lg:text-4xl font-serif text-accent leading-[1.6] font-medium px-4">
              Creemos que cada resultado refleja más que un análisis: refleja nuestro compromiso con las personas, 
              las familias y su bienestar.
            </p>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground leading-relaxed font-light max-w-4xl mx-auto px-4">
              Con una trayectoria construida sobre la profesionalidad, la precisión científica y la empatía, 
              trabajamos cada día para brindar confianza y tranquilidad a quienes nos eligen.
            </p>
          </div>

          {/* Divider decorativo más elegante */}
          <div className="flex items-center justify-center py-6">
            <div className="h-px w-20 sm:w-32 bg-gradient-to-r from-transparent via-yellow-400/60 to-transparent"></div>
            <div className="mx-4 sm:mx-6">
              <div className="w-3 h-3 bg-yellow-400 rounded-full shadow-lg shadow-yellow-400/50"></div>
            </div>
            <div className="h-px w-20 sm:w-32 bg-gradient-to-r from-transparent via-yellow-400/60 to-transparent"></div>
          </div>

          {/* Mensaje final con corazón destacado */}
          <div className="text-center space-y-3 pt-2">
            <p className="text-lg sm:text-xl lg:text-2xl font-serif font-bold text-accent leading-tight px-4">
              Cuidar tu salud es nuestra vocación
            </p>
            
            <div className="flex items-center justify-center gap-3 px-4">
              <div className="relative">
                <span className="text-xl sm:text-2xl lg:text-3xl animate-pulse">💛</span>
                <div className="absolute inset-0 bg-yellow-400/20 blur-lg rounded-full"></div>
              </div>
            </div>
            
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground font-light max-w-3xl mx-auto px-4 leading-relaxed">
              Te acompañamos con responsabilidad, respeto y dedicación.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

