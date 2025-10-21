"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Send, CheckCircle2, Loader2, User, Phone, MessageSquare } from "lucide-react"

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })

      if (response.ok) {
        setIsSuccess(true)
        form.reset()
        
        // Ocultar mensaje después de 5 segundos
        setTimeout(() => {
          setIsSuccess(false)
        }, 5000)
      }
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }


  return (
    <section className="py-16 sm:py-20 lg:py-32 bg-gradient-to-b from-background via-yellow-50/10 to-background relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
              <div className="relative">
                <div className="absolute inset-0 bg-yellow-400/20 blur-xl rounded-full"></div>
                <Mail className="relative h-8 w-8 text-yellow-500" />
              </div>
              <div className="h-px w-16 bg-gradient-to-l from-transparent via-yellow-400 to-transparent"></div>
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                ¿Tenés alguna{" "}
              </span>
              <span className="bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                consulta
              </span>
              <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                ?
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Completá el formulario y te responderemos en menos de 24 horas
            </p>
          </div>

          {/* Form Card */}
          <Card className="border-2 border-gray-100 shadow-xl">
            <CardContent className="p-8 sm:p-10 lg:p-12">

              <form 
                action="https://formsubmit.co/laboratorioconcepcion@hotmail.com" 
                method="POST"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {/* FormSubmit Configuration */}
                <input type="hidden" name="_subject" value="Nueva consulta desde Laboratorio Concepción" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                
                {/* Nombre y Email */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="group">
                    <label htmlFor="nombre" className="text-sm font-semibold mb-3 block text-gray-700 flex items-center gap-2">
                      <User className={`h-4 w-4 transition-colors ${focusedField === 'nombre' ? 'text-yellow-500' : 'text-gray-400'}`} />
                      Nombre completo <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Input
                        id="nombre"
                        name="nombre"
                        type="text"
                        placeholder="Juan Pérez"
                        required
                        onFocus={() => setFocusedField('nombre')}
                        onBlur={() => setFocusedField(null)}
                        className="h-13 pl-11 border-2 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 transition-all duration-300"
                      />
                      <User className={`absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 transition-colors ${focusedField === 'nombre' ? 'text-yellow-500' : 'text-gray-400'}`} />
                    </div>
                  </div>
                  
                  <div className="group">
                    <label htmlFor="email" className="text-sm font-semibold mb-3 block text-gray-700 flex items-center gap-2">
                      <Mail className={`h-4 w-4 transition-colors ${focusedField === 'email' ? 'text-yellow-500' : 'text-gray-400'}`} />
                      Email <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="juan@ejemplo.com"
                        required
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        className="h-13 pl-11 border-2 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 transition-all duration-300"
                      />
                      <Mail className={`absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 transition-colors ${focusedField === 'email' ? 'text-yellow-500' : 'text-gray-400'}`} />
                    </div>
                  </div>
                </div>

                {/* Teléfono */}
                <div className="group">
                  <label htmlFor="telefono" className="text-sm font-semibold mb-3 block text-gray-700 flex items-center gap-2">
                    <Phone className={`h-4 w-4 transition-colors ${focusedField === 'telefono' ? 'text-yellow-500' : 'text-gray-400'}`} />
                    Teléfono <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Input
                      id="telefono"
                      name="telefono"
                      type="tel"
                      placeholder="(03865) 123-456"
                      required
                      onFocus={() => setFocusedField('telefono')}
                      onBlur={() => setFocusedField(null)}
                      className="h-13 pl-11 border-2 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 transition-all duration-300"
                    />
                    <Phone className={`absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 transition-colors ${focusedField === 'telefono' ? 'text-yellow-500' : 'text-gray-400'}`} />
                  </div>
                </div>

                {/* Mensaje */}
                <div className="group">
                  <label htmlFor="mensaje" className="text-sm font-semibold mb-3 block text-gray-700 flex items-center gap-2">
                    <MessageSquare className={`h-4 w-4 transition-colors ${focusedField === 'mensaje' ? 'text-yellow-500' : 'text-gray-400'}`} />
                    Mensaje <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Textarea
                      id="mensaje"
                      name="mensaje"
                      placeholder="Escribí tu consulta aquí..."
                      required
                      rows={6}
                      onFocus={() => setFocusedField('mensaje')}
                      onBlur={() => setFocusedField(null)}
                      className="pl-11 pt-4 border-2 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 resize-none transition-all duration-300"
                    />
                    <MessageSquare className={`absolute left-3 top-4 h-5 w-5 transition-colors ${focusedField === 'mensaje' ? 'text-yellow-500' : 'text-gray-400'}`} />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  {/* Success Message */}
                  {isSuccess && (
                    <p className="text-center text-green-600 font-semibold mb-4 animate-in fade-in slide-in-from-top-2 duration-500">
                      ✓ Mensaje enviado con éxito. Muchas gracias.
                    </p>
                  )}
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-14 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 hover:from-yellow-500 hover:via-yellow-600 hover:to-yellow-500 text-gray-900 font-bold text-lg shadow-lg hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-6 w-6 animate-spin" />
                        Enviando mensaje...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Enviar consulta
                      </>
                    )}
                  </Button>
                  
                  <p className="text-xs text-center text-muted-foreground mt-4 flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <span className="inline-block w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></span>
                        Enviando tu mensaje...
                      </>
                    ) : (
                      <>
                        <svg className="h-3 w-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                        Tus datos están protegidos y seguros
                      </>
                    )}
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Info adicional mejorada */}
          <div className="mt-10 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-50 to-yellow-100/50 border border-yellow-200 rounded-full shadow-sm">
              <span className="text-sm text-gray-700">¿Preferís respuesta inmediata?</span>
              <button
                onClick={() => window.open('https://wa.me/543865650673', '_blank')}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-green-700 hover:text-green-800 transition-colors"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Escribinos por WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
