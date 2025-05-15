"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Globe } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-context"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface TopNavigationProps {
  activeSection: string
  onSectionChange: (index: number) => void
}

export default function TopNavigation({ activeSection, onSectionChange }: TopNavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  const navItems = [
    { id: "intro", label: t("nav.home"), index: 0 },
    { id: "about", label: t("nav.about"), index: 1 },
    { id: "services", label: t("nav.services"), index: 2 },
    { id: "projects", label: t("nav.projects"), index: 3 },
    { id: "contact", label: t("nav.contact"), index: 4 },
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (index: number) => {
    setIsMobileMenuOpen(false)
    onSectionChange(index)
  }

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "py-2 bg-black/90 backdrop-blur-md shadow-md" : "py-4 md:py-6 bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo20-l31SPU7WWGLyBIuxL2TVUOTMOKu83j.png"
              alt="2.0 Logo"
              width={36}
              height={36}
              className="mr-2"
            />
            <span className="font-bold text-lg md:text-xl text-white">2.0</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.index)}
                className={`font-medium transition-colors hover:text-cyan-400 ${
                  activeSection === item.id ? "text-cyan-400" : "text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                  <Globe className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setLanguage("en")} className={language === "en" ? "bg-muted" : ""}>
                  English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage("es")} className={language === "es" ? "bg-muted" : ""}>
                  Español
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button
              onClick={() => handleNavClick(4)}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700"
            >
              {t("nav.contact")}
            </Button>
          </div>

          <div className="flex md:hidden items-center space-x-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                  <Globe className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setLanguage("en")} className={language === "en" ? "bg-muted" : ""}>
                  English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage("es")} className={language === "es" ? "bg-muted" : ""}>
                  Español
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <button className="text-white" onClick={() => setIsMobileMenuOpen(true)} aria-label="Open menu">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black flex flex-col">
          <div className="flex justify-between items-center p-4 border-b border-gray-800">
            <Link href="/" className="flex items-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo20-l31SPU7WWGLyBIuxL2TVUOTMOKu83j.png"
                alt="2.0 Logo"
                width={36}
                height={36}
                className="mr-2"
              />
              <span className="font-bold text-lg text-white">2.0</span>
            </Link>
            <button onClick={() => setIsMobileMenuOpen(false)} aria-label="Close menu">
              <X className="h-6 w-6 text-white" />
            </button>
          </div>

          <nav className="flex flex-col p-6 space-y-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.index)}
                className="text-white text-xl font-medium text-left"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="mt-auto p-6">
            <Button
              onClick={() => {
                handleNavClick(4)
                setIsMobileMenuOpen(false)
              }}
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-4 text-lg"
            >
              {t("nav.contact")}
            </Button>
          </div>
        </div>
      )}
    </>
  )
}
