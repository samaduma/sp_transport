"use client"

import { useState, useEffect } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import Link from "next/link"
import Image from "next/image"

export default function GalleryPreview() {
  const { ref, isVisible } = useScrollAnimation()
  const [enlarged, setEnlarged] = useState<string | null>(null)

  const galleryItems = [
    {
      id: "1",
      img: "/gallery/truck-1.jpg",
      alt: "SPT Red TATA Truck",
    },
    {
      id: "2",
      img: "/gallery/truck-2.jpg",
      alt: "SPT Fleet at Facility",
    },
    {
      id: "3",
      img: "/gallery/truck-3.jpg",
      alt: "SPT Orange TATA Truck Front",
    },
    {
      id: "4",
      img: "/gallery/truck-4.jpg",
      alt: "SPT Orange TATA Truck",
    },
  ]

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setEnlarged(null)
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <section id="gallery" className="bg-card py-24 md:py-32 border-b border-border" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <h2
            className={`text-5xl md:text-6xl font-black text-foreground mb-4 ${isVisible ? "animate-slide-in-up" : "scroll-hidden"}`}
          >
            OUR FLEET
          </h2>
          <div className={`h-1 w-32 bg-primary ${isVisible ? "animate-line-slide" : "w-0"}`} />
          <p
            className={`mt-6 text-lg text-muted-foreground font-light ${isVisible ? "animate-text-reveal delay-200" : "scroll-hidden"}`}
          >
            Explore our modern fleet of transport vehicles. Click on any image to view it in full detail.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              className={`relative overflow-hidden border-2 border-border hover:border-primary transition-all duration-300 cursor-pointer group scroll-hidden ${
                isVisible ? "animate-slide-in-up" : ""
              }`}
              style={{
                animationDelay: isVisible ? `${0.1 * (index + 1)}s` : "0s",
              }}
              onClick={() => setEnlarged(item.img)}
            >
              <div className="relative h-64 md:h-80">
                <Image
                  src={item.img || "/placeholder.svg"}
                  alt={item.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                <p className="text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  View
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          
        </div>
      </div>

      {enlarged && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setEnlarged(null)}
        >
          <div className="relative max-w-4xl w-full h-screen md:h-auto" onClick={(e) => e.stopPropagation()}>
            <Image
              src={enlarged || "/placeholder.svg"}
              alt="Enlarged view"
              width={1200}
              height={800}
              className="w-full h-full object-contain"
            />
            <button
              onClick={() => setEnlarged(null)}
              className="absolute top-4 right-4 bg-primary text-primary-foreground w-10 h-10 flex items-center justify-center font-bold text-xl hover:bg-accent transition-colors"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
