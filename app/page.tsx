"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import TopNavigation from "@/components/top-navigation"
import ProjectShowcase from "@/components/project-showcase"
import ContactPortal from "@/components/contact-portal"
import { Button } from "@/components/ui/button"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ServicesSection from "@/components/services-section"
import ProjectsSection from "@/components/projects-section"
import ContactSection from "@/components/contact-section"
import { LanguageProvider, useLanguage } from "@/components/language-context"

export default function Home() {
  return (
    <LanguageProvider>
      <HomeContent />
    </LanguageProvider>
  )
}

function HomeContent() {
  const { t } = useLanguage()
  const [showContact, setShowContact] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [activeSection, setActiveSection] = useState("intro")
  const [currentSection, setCurrentSection] = useState(0)
  const sectionsRef = useRef<HTMLDivElement>(null)

  const sections = ["intro", "about", "services", "projects", "contact"]

  useEffect(() => {
    // Simulate loading sequence
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  // Update active section based on current section index
  useEffect(() => {
    setActiveSection(sections[currentSection])
  }, [currentSection, sections])

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        if (currentSection < sections.length - 1) {
          setCurrentSection((prev) => prev + 1)
        }
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        if (currentSection > 0) {
          setCurrentSection((prev) => prev - 1)
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [currentSection, sections.length])

  // Handle wheel events for horizontal scrolling
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault()
        if (e.deltaY > 0 && currentSection < sections.length - 1) {
          setCurrentSection((prev) => prev + 1)
        } else if (e.deltaY < 0 && currentSection > 0) {
          setCurrentSection((prev) => prev - 1)
        }
      }
    }

    const sectionsElement = sectionsRef.current
    if (sectionsElement) {
      sectionsElement.addEventListener("wheel", handleWheel, { passive: false })
    }

    return () => {
      if (sectionsElement) {
        sectionsElement.removeEventListener("wheel", handleWheel)
      }
    }
  }, [currentSection, sections.length])

  // Function to navigate to a specific section
  const navigateToSection = (sectionIndex: number) => {
    if (sectionIndex >= 0 && sectionIndex < sections.length) {
      setCurrentSection(sectionIndex)
    }
  }

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      {/* Loading sequence */}
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative h-32 w-32"
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo20-l31SPU7WWGLyBIuxL2TVUOTMOKu83j.png"
                alt="2.0 Logo"
                fill
                className="object-contain"
              />
              <motion.div
                className="absolute inset-0 rounded-full"
                initial={{ scale: 1.2, opacity: 0.3 }}
                animate={{ scale: 2, opacity: 0 }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                style={{ backgroundColor: "#06b6d4" }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Top Navigation */}
      <TopNavigation activeSection={activeSection} onSectionChange={setCurrentSection} />

      {/* Floating action button for contact */}
      <div className="fixed bottom-8 right-8 z-40">
        <Button
          onClick={() => setShowContact(true)}
          className="group h-16 w-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 p-0 shadow-lg hover:from-cyan-600 hover:to-blue-700"
        >
          <span className="absolute -left-24 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-lg bg-black px-3 py-2 text-sm opacity-0 transition-opacity group-hover:opacity-100">
            {t("contact.us")}
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            />
          </svg>
        </Button>
      </div>

      {/* Contact portal */}
      <AnimatePresence>{showContact && <ContactPortal onClose={() => setShowContact(false)} />}</AnimatePresence>

      {/* Horizontal sections container */}
      <div ref={sectionsRef} className="h-screen w-screen overflow-hidden">
        <motion.div
          className="flex h-full w-[500vw]"
          animate={{ x: `-${currentSection * 100}vw` }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <div className="h-full w-screen flex-shrink-0">
            <HeroSection onNavigate={navigateToSection} />
          </div>
          <div className="h-full w-screen flex-shrink-0">
            <AboutSection />
          </div>
          <div className="h-full w-screen flex-shrink-0">
            <ServicesSection />
          </div>
          <div className="h-full w-screen flex-shrink-0">
            <ProjectsSection />
          </div>
          <div className="h-full w-screen flex-shrink-0">
            <div className="flex h-full flex-col">
              <ContactSection onContactClick={() => setShowContact(true)} />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Project showcase overlay - appears when triggered */}
      <ProjectShowcase />

      {/* Background elements */}
      <div className="pointer-events-none fixed inset-0 z-0 opacity-40">
        {/* Animated gradient background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -left-1/4 -top-1/4 h-1/2 w-1/2 animate-[spin_20s_linear_infinite] rounded-full bg-gradient-to-r from-cyan-500 to-transparent blur-[120px]" />
          <div className="absolute -bottom-1/4 -right-1/4 h-1/2 w-1/2 animate-[spin_25s_linear_infinite_reverse] rounded-full bg-gradient-to-r from-blue-600 to-transparent blur-[120px]" />
        </div>

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Noise texture */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "url('/placeholder.svg?height=200&width=200')",
            backgroundSize: "200px 200px",
          }}
        />
      </div>
    </main>
  )
}
