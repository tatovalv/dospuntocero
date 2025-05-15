"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/components/language-context"
import { Sparkles, Code, Lightbulb, Users } from "lucide-react"

export default function AboutSection() {
  const { t } = useLanguage()

  return (
    <section id="about" className="relative min-h-screen w-full flex items-center justify-center px-4 py-10 md:py-20">
      <div className="container mx-auto">
        {/* Mobile layout - stacked and compact */}
        <div className="md:hidden">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-6 text-center"
          >
            <h2 className="mb-3 text-2xl font-bold">
              {t("about.title")
                .split(" ")
                .map((word, i, arr) =>
                  i === arr.length - 1 ? (
                    <span key={i} className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                      {word}{" "}
                    </span>
                  ) : (
                    <span key={i}>{word} </span>
                  ),
                )}
            </h2>
            <p className="text-sm text-gray-300 mb-4">{t("about.paragraph1")}</p>
          </motion.div>

          <div className="grid grid-cols-2 gap-3 mb-6">
            <div className="flex items-center space-x-2 bg-white/5 p-3 rounded-lg">
              <Sparkles className="h-5 w-5 text-cyan-400 flex-shrink-0" />
              <div>
                <h3 className="text-sm font-bold text-cyan-400">{t("about.innovation")}</h3>
              </div>
            </div>
            <div className="flex items-center space-x-2 bg-white/5 p-3 rounded-lg">
              <Code className="h-5 w-5 text-cyan-400 flex-shrink-0" />
              <div>
                <h3 className="text-sm font-bold text-cyan-400">{t("about.craftsmanship")}</h3>
              </div>
            </div>
            <div className="flex items-center space-x-2 bg-white/5 p-3 rounded-lg">
              <Lightbulb className="h-5 w-5 text-cyan-400 flex-shrink-0" />
              <div>
                <h3 className="text-sm font-bold text-cyan-400">{t("about.creativity")}</h3>
              </div>
            </div>
            <div className="flex items-center space-x-2 bg-white/5 p-3 rounded-lg">
              <Users className="h-5 w-5 text-cyan-400 flex-shrink-0" />
              <div>
                <h3 className="text-sm font-bold text-cyan-400">{t("about.collaboration")}</h3>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-sm text-gray-300">{t("about.paragraph2")}</p>
          </motion.div>
        </div>

        {/* Desktop layout - side by side */}
        <div className="hidden md:grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex items-center justify-center"
          >
            <div className="relative h-[400px] w-full max-w-md">
              <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 animate-[spin_40s_linear_infinite] rounded-full border border-cyan-500/30" />
              <div className="absolute left-1/2 top-1/2 h-[200px] w-[200px] -translate-x-1/2 -translate-y-1/2 animate-[spin_30s_linear_infinite_reverse] rounded-full border border-blue-500/30" />
              <div className="absolute left-1/2 top-1/2 h-[100px] w-[100px] -translate-x-1/2 -translate-y-1/2 animate-[spin_20s_linear_infinite] rounded-full border border-cyan-500/30" />

              <div className="absolute left-[20%] top-[30%] flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <div className="absolute left-[65%] top-[25%] flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg">
                <Code className="h-6 w-6 text-white" />
              </div>
              <div className="absolute left-[25%] top-[70%] flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg">
                <Lightbulb className="h-6 w-6 text-white" />
              </div>
              <div className="absolute left-[70%] top-[65%] flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg">
                <Users className="h-6 w-6 text-white" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex items-center"
          >
            <div className="max-w-xl">
              <h2 className="mb-6 text-4xl font-bold md:text-5xl">
                {t("about.title")
                  .split(" ")
                  .map((word, i, arr) =>
                    i === arr.length - 1 ? (
                      <span
                        key={i}
                        className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
                      >
                        {word}{" "}
                      </span>
                    ) : (
                      <span key={i}>{word} </span>
                    ),
                  )}
              </h2>
              <p className="mb-6 text-lg text-gray-300">{t("about.paragraph1")}</p>
              <p className="mb-8 text-lg text-gray-300">{t("about.paragraph2")}</p>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="rounded-xl bg-white/5 p-6 backdrop-blur-sm">
                  <h3 className="mb-2 text-xl font-bold text-cyan-400">{t("about.innovation")}</h3>
                  <p className="text-gray-300">{t("about.innovation.desc")}</p>
                </div>
                <div className="rounded-xl bg-white/5 p-6 backdrop-blur-sm">
                  <h3 className="mb-2 text-xl font-bold text-cyan-400">{t("about.craftsmanship")}</h3>
                  <p className="text-gray-300">{t("about.craftsmanship.desc")}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
