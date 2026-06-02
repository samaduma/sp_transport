"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const steps = [
  {
    number: "01",
    title: "BOOKING",
    description: "Simple and quick booking process",
  },
  {
    number: "02",
    title: "ASSURED PLACEMENT",
    description: "Your vehicle gets assured placement",
  },
  {
    number: "03",
    title: "END TO END TRACKING",
    description: "Real-time tracking throughout journey",
  },
  {
    number: "04",
    title: "COMPETITIVE PRICING",
    description: "Best rates in the industry",
  },
]

export default function StepsSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="bg-background py-24 md:py-32 border-b border-border" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className={`text-5xl md:text-6xl font-black text-foreground mb-4 ${isVisible ? "animate-slide-in-up" : "scroll-hidden"}`}
        >
          SERVICE STEPS
        </h2>
        <div className={`h-1 w-32 bg-accent ${isVisible ? "animate-line-slide" : "w-0"}`} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              <div
                className={`border-3 border-border p-8 bg-card hover:border-primary transition-all duration-300 scroll-hidden py-9 px-[26px] border-[6px] ${
                  isVisible ? "animate-slide-in-up" : ""
                }`}
                style={{
                  animationDelay: isVisible ? `${0.1 * (index + 1)}s` : "0s",
                }}
              >
                <p className="text-6xl font-black text-primary/30 mb-4">{step.number}</p>
                <h3 className="text-xl font-black uppercase text-foreground mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground font-light">{step.description}</p>
              </div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-8 w-8 h-0.5 bg-primary transform -translate-y-1/2" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
