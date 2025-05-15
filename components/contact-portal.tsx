"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useLanguage } from "@/components/language-context"

interface ContactPortalProps {
  onClose: () => void
}

export default function ContactPortal({ onClose }: ContactPortalProps) {
  const { t } = useLanguage()
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 1500)
  }

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Button
        onClick={onClose}
        className="absolute right-4 top-4 md:right-8 md:top-8 h-10 w-10 md:h-12 md:w-12 rounded-full bg-white/10 p-0 backdrop-blur-md hover:bg-white/20 cursor-pointer"
      >
        <X className="h-5 w-5 md:h-6 md:w-6" />
      </Button>

      <motion.div
        className="relative mx-auto w-full max-w-md overflow-hidden rounded-2xl bg-gray-900 p-6 md:p-8 shadow-xl"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ delay: 0.1 }}
      >
        {isSubmitted ? (
          <div className="flex flex-col items-center justify-center py-8 md:py-12 text-center">
            <div className="mb-6 flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-600">
              <svg className="h-8 w-8 md:h-10 md:w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="mb-4 text-xl md:text-2xl font-bold">{t("form.success")}</h2>
            <p className="mb-8 text-gray-300">{t("form.success.message")}</p>
            <Button onClick={onClose} className="bg-gradient-to-r from-cyan-500 to-blue-600">
              {t("form.close")}
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <h2 className="mb-6 text-xl md:text-2xl font-bold">{t("form.title")}</h2>

            <div className="space-y-5">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium">
                  {t("form.name")}
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  className="border-gray-700 bg-gray-800 text-white focus:border-cyan-500"
                  placeholder={t("form.name.placeholder")}
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium">
                  {t("form.email")}
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                  className="border-gray-700 bg-gray-800 text-white focus:border-cyan-500"
                  placeholder={t("form.email.placeholder")}
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium">
                  {t("form.message")}
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  className="min-h-[120px] md:min-h-[150px] border-gray-700 bg-gray-800 text-white focus:border-cyan-500"
                  placeholder={t("form.message.placeholder")}
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
                disabled={isSubmitting}
              >
                {isSubmitting ? t("form.sending") : t("form.send")}
              </Button>
            </div>
          </form>
        )}
      </motion.div>
    </motion.div>
  )
}
