"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { useLanguage } from "@/components/language-context"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ProjectsSection() {
  const { t } = useLanguage()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [totalSlides, setTotalSlides] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)

  // Projects data - in a real app this would come from a CMS or API
  const projects = [
    { id: 1, title: t("projects.title.1"), category: t("projects.category.web") },
    { id: 2, title: t("projects.title.2"), category: t("projects.category.branding") },
    { id: 3, title: t("projects.title.3"), category: t("projects.category.design") },
    { id: 4, title: t("projects.title.4"), category: t("projects.category.app") },
    { id: 5, title: t("projects.title.5"), category: t("projects.category.ecommerce") },
    { id: 6, title: t("projects.title.6"), category: t("projects.category.marketing") },
    { id: 7, title: t("projects.title.7"), category: t("projects.category.design") },
    { id: 8, title: t("projects.title.8"), category: t("projects.category.ui") },
    { id: 9, title: t("projects.title.9"), category: t("projects.category.design") },
  ]

  // Determine how many projects to show per slide based on screen size
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      setIsMobile(width < 640)
      setIsTablet(width >= 640 && width < 1024)

      // Calculate total slides based on screen size
      // On mobile: 1 project per slide
      // On tablet: 2 projects per slide (1 row of 2)
      // On desktop: 6 projects per slide (2 rows of 3)
      const projectsPerSlide = width < 640 ? 1 : width < 1024 ? 2 : 6
      setTotalSlides(Math.ceil(projects.length / projectsPerSlide))
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [projects.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1))
  }

  // Auto-advance carousel (disabled on mobile for better UX)
  useEffect(() => {
    if (isMobile) return

    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(interval)
  }, [currentSlide, totalSlides, isMobile])

  return (
    <section
      id="projects"
      className="relative min-h-screen w-full flex items-center justify-center px-4 py-10 md:py-20"
    >
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">{t("projects.title")}</h2>
          <p className="mx-auto max-w-2xl text-base md:text-lg text-gray-300">{t("projects.subtitle")}</p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          {/* Carousel navigation buttons - visible on all screen sizes */}
          <Button
            onClick={prevSlide}
            variant="ghost"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white rounded-full h-10 w-10 -ml-5 flex items-center justify-center hover:bg-black/70"
            aria-label={t("previous")}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            onClick={nextSlide}
            variant="ghost"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white rounded-full h-10 w-10 -mr-5 flex items-center justify-center hover:bg-black/70"
            aria-label={t("next")}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Carousel container */}
          <div className="overflow-hidden">
            <div
              ref={carouselRef}
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {/* Generate slides based on screen size */}
              {Array.from({ length: totalSlides }).map((_, slideIndex) => {
                // Calculate which projects to show in this slide
                const projectsPerSlide = isMobile ? 1 : isTablet ? 2 : 6
                const startIdx = slideIndex * projectsPerSlide
                const slideProjects = projects.slice(startIdx, startIdx + projectsPerSlide)

                return (
                  <div key={slideIndex} className="w-full flex-shrink-0 px-2">
                    <div
                      className={`grid ${
                        isMobile ? "grid-cols-1" : isTablet ? "grid-cols-2" : "grid-cols-3 grid-rows-2 max-h-[600px]"
                      } gap-4`}
                    >
                      {slideProjects.map((project) => (
                        <motion.div
                          key={project.id}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5 }}
                          viewport={{ once: true }}
                          whileHover={{ y: -5, scale: 1.02 }}
                          className="group relative aspect-[3/2] overflow-hidden rounded-xl"
                        >
                          <Image
                            src={`/placeholder.svg?height=300&width=450&text=Project+${project.id}`}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                          <div className="absolute bottom-0 left-0 w-full p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            <h3 className="text-base md:text-lg font-bold text-white">{project.title}</h3>
                            <p className="text-xs md:text-sm text-gray-200">{project.category}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Carousel indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  currentSlide === index ? "w-8 bg-cyan-500" : "w-2 bg-gray-500"
                }`}
                aria-label={`${t("slide")} ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
