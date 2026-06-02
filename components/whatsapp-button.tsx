"use client"

import Link from "next/link"
import Image from "next/image"

export function WhatsAppButton() {
  const phoneNumber = "919659655659"
  const message = "Hello! I would like to inquire about your transport services."
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <Link
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      aria-label="Chat on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <Image src="/whatsapp-logo.png" alt="WhatsApp" width={56} height={56} className="w-14 h-14 rounded-full" />
    </Link>
  )
}
