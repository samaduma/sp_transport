"use client"

import { useState, useEffect } from "react"
import Hyperspeed from "./hyperspeed"
import ShinyText from "./shiny-text"

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative min-h-screen bg-background border-b-4 border-primary overflow-hidden" id="hero">
      <Hyperspeed
        effectOptions={{
          distortion: "turbulentDistortion",
          length: 400,
          roadWidth: 10,
          islandWidth: 2,
          lanesPerRoad: 3,
          fov: 90,
          fovSpeedUp: 150,
          speedUp: 2,
          carLightsFade: 0.4,
          totalSideLightSticks: 20,
          lightPairsPerRoadWay: 40,
          shoulderLinesWidthPercentage: 0.05,
          brokenLinesWidthPercentage: 0.1,
          brokenLinesLengthPercentage: 0.5,
          lightStickWidth: [0.12, 0.5],
          lightStickHeight: [1.3, 1.7],
          movingAwaySpeed: [10, 15],
          movingCloserSpeed: [-20, -30],
          carLightsLength: [400 * 0.03, 400 * 0.2],
          carLightsRadius: [0.05, 0.14],
          carWidthPercentage: [0.3, 0.5],
          carShiftX: [-0.8, 0.8],
          carFloorSeparation: [0, 5],
          colors: {
            roadColor: 0x080808,
            islandColor: 0x0a0a0a,
            background: 0x000000,
            shoulderLines: 0xff6b35,
            brokenLines: 0xff6b35,
            leftCars: [0xff6b35, 0x1db5d8, 0x004e89],
            rightCars: [0xff6b35, 0x1db5d8, 0x004e89],
            sticks: 0x1db5d8,
          },
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full py-24 md:py-[72px] ${
            isLoaded ? "animate-slide-in-left" : "opacity-0"
          }`}
        >
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div>
              <ShinyText
                text="SP TRANSPORT"
                speed={5}
                className="text-5xl leading-tight mb-4 md:text-6xl font-sans font-semibold"
              />
              <div className="h-1 w-24 bg-primary animate-line-expand" />
            </div>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-md">
              Professional truck transport services with <span className="text-accent font-bold">GPS tracking</span>,{" "}
              <span className="text-accent font-bold">closed trucks</span>, and competitive pricing.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="px-8 py-4 bg-primary text-primary-foreground font-bold uppercase text-sm border-3 border-primary hover:bg-transparent hover:text-primary transition-all duration-300 tracking-wider inline-block text-center"
              >
                Get A Quote
              </a>
              <a
                href="#about"
                className="px-8 py-4 border-3 border-accent text-accent font-bold uppercase text-sm hover:bg-accent hover:text-accent-foreground transition-all duration-300 tracking-wider inline-block text-center"
              >
                Learn More
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 pt-8 border-t border-border">
              <div>
                <p className="text-3xl font-bold text-primary">10+</p>
                <p className="text-sm text-muted-foreground uppercase tracking-wider">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-accent">All India</p>
                <p className="text-sm text-muted-foreground uppercase tracking-wider">Coverage</p>
              </div>
            </div>
          </div>

          {/* Right Column - Placeholder */}
          <div className="hidden lg:flex items-center justify-center" />
        </div>
      </div>
    </section>
  )
}

export default Hero
