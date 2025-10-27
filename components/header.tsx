"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, Home, Stethoscope, Users, Shield, Mail } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('inicio')
  const [isScrolling, setIsScrolling] = useState(false)

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true)
      const sections = ['inicio', 'services', 'experience', 'insurance', 'contact']
      
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
      
      setTimeout(() => setIsScrolling(false), 150)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigationItems = [
    { id: 'inicio', label: 'Inicio', icon: Home },
    { id: 'services', label: 'Servicios', icon: Stethoscope },
    { id: 'experience', label: 'Nosotros', icon: Users },
    { id: 'insurance', label: 'Obras Sociales', icon: Shield },
    { id: 'contact', label: 'Contacto', icon: Mail },
  ]

  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className={`bg-white/95 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50 transition-all duration-300 ${isScrolling ? 'shadow-lg' : 'shadow-sm'}`}>
      <div className="container mx-auto px-4">
        {/* Main navigation */}
        <div className="flex items-center justify-between py-3">
          {/* Logo with subtle animation */}
          <div className="flex items-center group">
            <Link href="/" className="flex items-center transition-transform duration-300 group-hover:scale-105">
              <div className="relative">
                <Image
                  src="/Logo de Laboratorio Concepcion.png"
                  alt="Laboratorio Concepción"
                  width={45}
                  height={45}
                  className="h-11 w-auto transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation - Minimalist with micro-interactions */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => {
              const Icon = item.icon
              const isActive = activeSection === item.id
              
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative group px-4 py-2 rounded-full transition-all duration-300 ${
                    isActive 
                      ? 'text-yellow-600 bg-yellow-50 shadow-sm' 
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <Icon className={`h-4 w-4 transition-all duration-300 ${
                      isActive ? 'scale-110' : 'group-hover:scale-105'
                    }`} />
                    <span className="text-sm font-medium tracking-wide">
                      {item.label}
                    </span>
                  </div>
                  
                  {/* Active indicator */}
                  {isActive && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-yellow-500 rounded-full animate-pulse"></div>
                  )}
                  
                  {/* Hover effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              )
            })}
          </nav>

          {/* Mobile menu button with animation */}
          <button 
            className="lg:hidden p-2 rounded-full hover:bg-gray-100 transition-all duration-300 group" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="relative w-6 h-6">
              <Menu className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${isMenuOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'}`} />
              <X className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'}`} />
            </div>
          </button>
        </div>

        {/* Mobile Navigation - Elegant slide down */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 border-t border-gray-100 bg-gradient-to-b from-white to-gray-50/50">
            <nav className="flex flex-col space-y-1">
              {navigationItems.map((item) => {
                const Icon = item.icon
                const isActive = activeSection === item.id
                
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`group flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                      isActive 
                        ? 'text-yellow-600 bg-yellow-50 shadow-sm border border-yellow-200' 
                        : 'text-gray-600 hover:text-gray-900 hover:bg-white hover:shadow-sm'
                    }`}
                  >
                    <Icon className={`h-5 w-5 transition-all duration-300 ${
                      isActive ? 'scale-110' : 'group-hover:scale-105'
                    }`} />
                    <span className="text-sm font-medium tracking-wide">
                      {item.label}
                    </span>
                    {isActive && (
                      <div className="ml-auto w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
                    )}
                  </button>
                )
              })}
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
