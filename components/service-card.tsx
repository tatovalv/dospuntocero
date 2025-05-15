"use client"

import { motion } from "framer-motion"
import { Sparkles, Layers, Code, ShoppingBag, Palette, RefreshCw } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  icon: string
  delay?: number
  compact?: boolean
}

export default function ServiceCard({ title, description, icon, delay = 0, compact = false }: ServiceCardProps) {
  const getIcon = () => {
    switch (icon) {
      case "sparkles":
        return <Sparkles className="h-5 w-5 md:h-6 md:w-6 text-cyan-400" />
      case "layers":
        return <Layers className="h-5 w-5 md:h-6 md:w-6 text-cyan-400" />
      case "code":
        return <Code className="h-5 w-5 md:h-6 md:w-6 text-cyan-400" />
      case "shopping-bag":
        return <ShoppingBag className="h-5 w-5 md:h-6 md:w-6 text-cyan-400" />
      case "palette":
        return <Palette className="h-5 w-5 md:h-6 md:w-6 text-cyan-400" />
      case "refresh-cw":
        return <RefreshCw className="h-5 w-5 md:h-6 md:w-6 text-cyan-400" />
      default:
        return <Sparkles className="h-5 w-5 md:h-6 md:w-6 text-cyan-400" />
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -5, scale: 1.01 }}
      className={`group relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm transition-all duration-300 ${
        compact ? "p-4" : "p-6"
      }`}
    >
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-cyan-500/10 to-blue-600/10 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative z-10">
        {compact ? (
          // Compact layout for mobile
          <div className="flex items-center mb-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 mr-3">{getIcon()}</div>
            <h3 className="text-base font-bold">{title}</h3>
          </div>
        ) : (
          // Normal layout for desktop
          <>
            <div className="mb-4 flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-lg bg-white/10">
              {getIcon()}
            </div>
            <h3 className="mb-2 text-lg md:text-xl font-bold">{title}</h3>
          </>
        )}
        <p className={`text-gray-300 ${compact ? "text-sm" : "text-sm md:text-base"}`}>{description}</p>
      </div>

      <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-cyan-500 to-blue-600 transition-all duration-300 group-hover:w-full" />
    </motion.div>
  )
}
