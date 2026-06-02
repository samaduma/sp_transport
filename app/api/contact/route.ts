import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, message } = await request.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const whatsappMessage = `New Contact Inquiry:%0A%0AName: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}%0APhone: ${encodeURIComponent(phone || "Not provided")}%0A%0AMessage:%0A${encodeURIComponent(message)}`

    const emailBody = `
Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}

Message:
${message}
    `

    // Note: Email sending requires configuration
    // For now, we'll return success and the frontend will handle WhatsApp
    // To enable email, add your email service (SendGrid, Resend, etc.)

    return NextResponse.json({
      success: true,
      whatsappUrl: `https://wa.me/919659655659?text=${whatsappMessage}`,
      message: "Contact form processed successfully",
    })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Failed to process contact form" }, { status: 500 })
  }
}
