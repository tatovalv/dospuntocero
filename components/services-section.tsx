"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/components/language-context"
import ServiceCard from "@/components/service-card"

export default function ServicesSection() {
  const { t } = useLanguage()

  // Updated services to include only the 4 requested
  const services = [
    {
      icon: "shopping-bag",
      title: t("services.ecommerce.title"),
      description: t("services.ecommerce.desc"),
      delay: 0.1,
    },
    {
      icon: "refresh-cw",
      title: t("services.transform.title"),
      description: t("services.transform.desc"),
      delay: 0.2,
    },
    {
      icon: "code",
      title: t("services.custom.title"),
      description: t("services.custom.desc"),
      delay: 0.3,
    },
    {
      icon: "palette",
      title: t("services.brand.title"),
      description: t("services.brand.desc"),
      delay: 0.4,
    },
  ]

  return (
    <section
      id="services"
      className="relative min-h-screen w-full flex items-center justify-center px-4 py-10 md:py-20"
    >
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8 md:mb-12 text-center"
        >
          <h2 className="mb-3 md:mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">{t("services.title")}</h2>
          <p className="mx-auto max-w-2xl text-base md:text-lg text-gray-300">{t("services.subtitle")}</p>
        </motion.div>

        {/* Mobile view - stack all services vertically with compact design */}
        <div className="grid grid-cols-1 gap-4 md:hidden">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              delay={service.delay}
              compact={true}
            />
          ))}
        </div>

        {/* Desktop view - 2x2 grid with normal spacing */}
        <div className="hidden md:grid grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              delay={service.delay}
              compact={false}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
