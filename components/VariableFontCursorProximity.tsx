"use client"

import type React from "react"
import { useRef } from "react"
import { cn } from "@/lib/utils"

interface VariableFontCursorProximityProps {
  children: React.ReactNode
  className?: string
  fromFontVariationSettings?: string
  containerRef: React.RefObject<HTMLDivElement>
}

export default function VariableFontCursorProximity({
  children,
  className,
  fromFontVariationSettings = '"wght" 400, "slnt" 0',
  containerRef,
}: VariableFontCursorProximityProps) {
  const textRef = useRef<HTMLDivElement>(null)

  return (
    <div
      ref={textRef}
      className={cn("grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full py-24 md:py-[129px]", className)}
      style={{ fontVariationSettings: fromFontVariationSettings }}
    >
      {children}
    </div>
  )
}
