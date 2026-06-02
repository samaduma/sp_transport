"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface VariableFontCursorProximityProps {
  children: React.ReactNode
  className?: string
  fromFontVariationSettings?: string
  toFontVariationSettings?: string
  radius?: number
  containerRef: React.RefObject<HTMLDivElement>
}

export default function VariableFontCursorProximity({
  children,
  className,
  fromFontVariationSettings = "'wght' 400, 'slnt' 0",
  toFontVariationSettings = "'wght' 900, 'slnt' -10",
  radius = 200,
  containerRef,
}: VariableFontCursorProximityProps) {
  const textRef = useRef<HTMLDivElement>(null)
  const [fontVariation, setFontVariation] = useState(fromFontVariationSettings)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!textRef.current || !containerRef.current) return

      const textRect = textRef.current.getBoundingClientRect()
      const containerRect = containerRef.current.getBoundingClientRect()

      const textCenterX = textRect.left - containerRect.left + textRect.width / 2
      const textCenterY = textRect.top - containerRect.top + textRect.height / 2

      const mouseX = e.clientX - containerRect.left
      const mouseY = e.clientY - containerRect.top

      const distance = Math.sqrt(Math.pow(mouseX - textCenterX, 2) + Math.pow(mouseY - textCenterY, 2))

      const proximity = Math.max(0, 1 - distance / radius)
      setFontVariation(
        proximity > 0 ? `'wght' ${400 + proximity * 500}, 'slnt' ${proximity * -10}` : fromFontVariationSettings,
      )
    }

    containerRef.current?.addEventListener("mousemove", handleMouseMove)
    return () => {
      containerRef.current?.removeEventListener("mousemove", handleMouseMove)
    }
  }, [radius, fromFontVariationSettings, containerRef])

  return (
    <div
      ref={textRef}
      className={cn("transition-all duration-75", className)}
      style={{ fontVariationSettings: fontVariation }}
    >
      {children}
    </div>
  )
}
