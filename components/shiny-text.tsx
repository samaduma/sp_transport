"use client"

import "./shiny-text.css"

interface ShinyTextProps {
  text: string
  disabled?: boolean
  speed?: number
  className?: string
}

const ShinyText = ({ text, disabled = false, speed = 5, className = "" }: ShinyTextProps) => {
  return (
    <h1 className={`liquid-chrome-text font-sans font-bold tracking-wider ${className}`}>
      {text}
    </h1>
  )
}

export default ShinyText
