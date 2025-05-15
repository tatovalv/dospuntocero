"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-context"

export default function ProjectShowcase() {
  const { t } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const [currentProject, setCurrentProject] = useState(0)

  // This would normally be populated from a CMS or API
  const projects = [
    {
      id: 1,
      title: "Immersive E-commerce Experience",
      description:
        "A cutting-edge online shopping platform with interactive 3D product visualization and personalized recommendations.",
      image: "/placeholder.svg?height=800&width=1200&text=Project+1",
      tags: ["E-commerce", "3D Visualization", "React", "Three.js"],
    },
    {
      id: 2,
      title: "Financial Dashboard",
      description:
        "A comprehensive financial analytics platform with real-time data visualization and predictive insights.",
      image: "/placeholder.svg?height=800&width=1200&text=Project+2",
      tags: ["Dashboard", "Data Visualization", "Next.js", "D3.js"],
    },
    {
      id: 3,
      title: "Healthcare Provider Portal",
      description:
        "A secure, HIPAA-compliant platform connecting patients with healthcare providers through video consultations and record management.",
      image: "/placeholder.svg?height=800&width=1200&text=Project+3",
      tags: ["Healthcare", "WebRTC", "React", "Node.js"],
    },
  ]

  // This component is just a placeholder - in a real implementation,
  // it would be triggered by clicking on a project in the projects section
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Button
            onClick={() => setIsOpen(false)}
            className="absolute right-8 top-8 h-12 w-12 rounded-full bg-white/10 p-0 backdrop-blur-md hover:bg-white/20 cursor-pointer"
          >
            <X className="h-6 w-6" />
          </Button>

          <motion.div
            className="relative mx-auto w-full max-w-6xl px-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.2 }}
          >
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              <div className="relative aspect-video overflow-hidden rounded-xl">
                <Image
                  src={projects[currentProject].image || "/placeholder.svg"}
                  alt={projects[currentProject].title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col justify-center">
                <h2 className="mb-4 text-3xl font-bold">{projects[currentProject].title}</h2>
                <p className="mb-6 text-lg text-gray-300">{projects[currentProject].description}</p>

                <div className="mb-8 flex flex-wrap gap-2">
                  {projects[currentProject].tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-white/10 px-4 py-1 text-sm backdrop-blur-md">
                      {tag}
                    </span>
                  ))}
                </div>

                <Button className="w-fit bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700">
                  {t("projects.cta")}
                </Button>
              </div>
            </div>

            <div className="mt-12 flex justify-center gap-2">
              {projects.map((project, index) => (
                <button
                  key={project.id}
                  onClick={() => setCurrentProject(index)}
                  className={`h-3 w-12 rounded-full transition-colors ${
                    currentProject === index ? "bg-cyan-500" : "bg-white/20"
                  }`}
                  aria-label={`View project ${project.title}`}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
