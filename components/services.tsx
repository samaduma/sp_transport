"use client"

import { useState } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import SpotlightCard from "./spotlight-card"

const services = [
  {
    id: 1,
    title: "GPS TRACKING",
    description: "Real-time vehicle and driver monitoring and tracking for complete transparency and peace of mind.",
    icon: "📍",
  },
  {
    id: 2,
    title: "Lynkit Lock",
    description: "Secure and protected transport in closed trucks to ensure vehicle safety and live tracking",
    icon: "🚚",
  },
  {
    id: 3,
    title: "ALL OVER INDIA",
    description: "Nationwide coverage with reliable service across India.",
    icon: "🗺️",
  },
  {
    id: 4,
    title: "COMPETITIVE PRICING",
    description: "Transparent and affordable pricing for all vehicle transport needs.",
    icon: "💰",
  },
]

const truckSizes = ["20ft", "22ft", "24ft", "32ft"]

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0)
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="services" className="bg-background py-24 md:py-32 border-b border-border" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <h2
            className={`text-5xl md:text-6xl font-black text-foreground mb-4 ${isVisible ? "animate-slide-in-up" : "scroll-hidden"}`}
          >
            OUR SERVICES
          </h2>
          <div className={`h-1 w-32 bg-primary ${isVisible ? "animate-line-slide" : "w-0"}`} />
          <p
            className={`mt-6 text-lg text-muted-foreground font-light ${isVisible ? "animate-text-reveal delay-200" : "scroll-hidden"}`}
          >
            We provided goods transport service since last 8 years. With GPS tracking on all vehicles, easy monitoring
            and professional delivery guaranteed.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`scroll-hidden ${isVisible ? "animate-slide-in-up" : ""}`}
              style={{
                animationDelay: isVisible ? `${0.1 * (index + 1)}s` : "0s",
              }}
            >
              <SpotlightCard
                spotlightColor="rgba(0, 229, 255, 0.2)"
                className="group h-full border-border hover:border-primary transition-all duration-300"
              >
                <div onClick={() => setActiveIndex(index)} className="cursor-pointer">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-lg font-bold uppercase tracking-wider text-foreground mb-3">{service.title}</h3>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">{service.description}</p>
                </div>
              </SpotlightCard>
            </div>
          ))}
        </div>

        {/* Truck Specialists */}
        <div
          className={`border-3 border-border p-12 bg-background scroll-hidden ${isVisible ? "animate-box-reveal" : ""}`}
        >
          <h3 className="text-3xl font-black text-foreground mb-8 uppercase">Truck Specialists</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {truckSizes.map((size, index) => (
              <div
                key={size}
                className={`border-2 border-primary bg-primary/10 p-6 text-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 scroll-hidden ${
                  isVisible ? "animate-slide-in-up" : ""
                }`}
                style={{
                  animationDelay: isVisible ? `${0.05 * (index + 1)}s` : "0s",
                }}
              >
                <p className="text-2xl font-bold">{size}</p>
                <p className="text-xs text-muted-foreground uppercase mt-2">Trucks</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
