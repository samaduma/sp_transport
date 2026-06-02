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
    <div className={`${className}`}>
      {text}
    </div>
  )
}

export default ShinyText
