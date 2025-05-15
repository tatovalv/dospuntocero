"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-context"

interface HeroSectionProps {
  onNavigate?: (sectionIndex: number) => void
}

export default function HeroSection({ onNavigate }: HeroSectionProps) {
  const { t } = useLanguage()

  // Navigate to Projects section (index 3)
  const handleExploreClick = () => {
    if (onNavigate) {
      onNavigate(3) // Projects section
    }
  }

  // Navigate to About section (index 1)
  const handleGetToKnowUsClick = () => {
    if (onNavigate) {
      onNavigate(1) // About section
    }
  }

  return (
    <section id="intro" className="relative min-h-screen w-full flex items-center justify-center px-4">
      <div className="absolute left-0 top-0 h-full w-full">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 animate-[spin_40s_linear_infinite] rounded-full border border-cyan-500/20" />
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 animate-[spin_30s_linear_infinite_reverse] rounded-full border border-blue-500/20" />
        <div className="absolute left-1/2 top-1/2 h-[200px] w-[200px] -translate-x-1/2 -translate-y-1/2 animate-[spin_20s_linear_infinite] rounded-full border border-cyan-500/20" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 max-w-3xl text-center"
      >
        <div className="mx-auto mb-8 flex items-center justify-center">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo20-l31SPU7WWGLyBIuxL2TVUOTMOKu83j.png"
            alt="2.0 Logo"
            width={100}
            height={100}
            className="mr-4"
          />
          <h1 className="text-4xl font-bold">2.0</h1>
        </div>
        <h2 className="mb-6 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
          {t("hero.title")
            .split(" ")
            .map((word, i, arr) =>
              i === arr.length - 2 ? (
                <span key={i} className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  {word}{" "}
                </span>
              ) : (
                <span key={i}>{word} </span>
              ),
            )}
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-base sm:text-lg md:text-xl text-gray-300">{t("hero.subtitle")}</p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            onClick={handleExploreClick}
            className="group h-12 sm:h-14 min-w-[180px] bg-gradient-to-r from-cyan-500 to-blue-600 text-base sm:text-lg text-white hover:from-cyan-600 hover:to-blue-700 cursor-pointer"
          >
            {t("hero.cta.explore")}
            <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button
            onClick={handleGetToKnowUsClick}
            variant="outline"
            className="h-12 sm:h-14 min-w-[180px] border-white bg-white/10 text-base sm:text-lg text-white hover:bg-white/20 cursor-pointer"
          >
            {t("hero.cta.process")}
          </Button>
        </div>
      </motion.div>
    </section>
  )
}
