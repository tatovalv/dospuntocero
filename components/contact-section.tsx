"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-context"

interface ContactSectionProps {
  onContactClick?: () => void
}

export default function ContactSection({ onContactClick }: ContactSectionProps) {
  const { t } = useLanguage()

  return (
    <section id="contact" className="relative min-h-screen w-full flex items-center justify-center px-4 py-10 md:py-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h2 className="mb-6 text-3xl font-bold md:text-4xl lg:text-5xl">
              {t("contact.title")
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
            <p className="mb-8 text-base md:text-lg text-gray-300">{t("contact.subtitle")}</p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-600/20">
                  <svg className="h-5 w-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium">{t("contact.email")}</h3>
                  <p className="text-gray-300">hello@2point0.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-600/20">
                  <svg className="h-5 w-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium">{t("contact.phone")}</h3>
                  <p className="text-gray-300">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-600/20">
                  <svg className="h-5 w-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium">{t("contact.location")}</h3>
                  <p className="text-gray-300">123 Innovation Street, Tech City, TC 10101</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex items-center justify-center"
          >
            <div className="relative h-[300px] sm:h-[400px] w-full max-w-md">
              <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 animate-[spin_40s_linear_infinite] rounded-full border border-cyan-500/20" />
              <div className="absolute left-1/2 top-1/2 h-[200px] w-[200px] -translate-x-1/2 -translate-y-1/2 animate-[spin_30s_linear_infinite_reverse] rounded-full border border-blue-500/20" />

              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                <Button
                  onClick={onContactClick}
                  className="mb-6 h-16 w-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 p-0 shadow-lg hover:from-cyan-600 hover:to-blue-700"
                >
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
                <h3 className="text-xl font-bold">{t("contact.start")}</h3>
                <p className="text-gray-300">{t("contact.click")}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
