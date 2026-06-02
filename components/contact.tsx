"use client"

import type React from "react"

import { useState } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const { ref, isVisible } = useScrollAnimation()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        if (data.whatsappUrl) {
          window.open(data.whatsappUrl, "_blank")
        }

        const mailtoLink = `mailto:sornaperumaltransport@gmail.com?subject=New Contact Inquiry from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`,
        )}`
        window.open(mailtoLink)

        setSubmitStatus("success")
        setFormData({ name: "", email: "", phone: "", message: "" })

        setTimeout(() => setSubmitStatus("idle"), 5000)
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="bg-background py-24 md:py-32 border-b border-border" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className={`text-5xl md:text-6xl font-black text-foreground mb-4 ${isVisible ? "animate-slide-in-up" : "scroll-hidden"}`}
        >
          LET'S START A TALK
        </h2>
        <div className={`h-1 w-32 bg-primary mb-16 ${isVisible ? "animate-line-slide" : "w-0"}`} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div
            className={`border-3 border-border p-8 md:p-12 bg-card scroll-hidden ${isVisible ? "animate-slide-in-left-small" : ""}`}
          >
            <h3 className="text-2xl font-bold text-foreground uppercase mb-8">Send Us A Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  required
                  className="w-full px-4 py-3 bg-background border-2 border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors duration-300 uppercase font-bold text-sm"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  required
                  className="w-full px-4 py-3 bg-background border-2 border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors duration-300 uppercase font-bold text-sm"
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 bg-background border-2 border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors duration-300 uppercase font-bold text-sm"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 bg-background border-2 border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors duration-300 uppercase font-bold text-sm resize-none"
                />
              </div>

              {submitStatus === "success" && (
                <div className="p-4 bg-accent/20 border-2 border-accent text-accent font-bold text-sm">
                  Thank you! Your message has been sent. Opening WhatsApp and email...
                </div>
              )}
              {submitStatus === "error" && (
                <div className="p-4 bg-primary/20 border-2 border-primary text-primary font-bold text-sm">
                  Error sending message. Please try again.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-primary text-primary-foreground font-bold uppercase text-sm border-3 border-primary hover:bg-transparent hover:text-primary transition-all duration-300 tracking-wider disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className={`space-y-8 scroll-hidden ${isVisible ? "animate-slide-in-right-small delay-200" : ""}`}>
            {/* Quick Contact */}
            <div className="border-3 border-border p-8 bg-card">
              <h3 className="text-2xl font-bold text-foreground uppercase mb-8">Quick Contact</h3>

              <div className="space-y-6">
                <div>
                  <p className="text-sm font-bold text-primary uppercase mb-2">Phone</p>
                  <a
                    href="tel:+919659655659"
                    className="text-lg font-bold text-foreground hover:text-primary transition-colors duration-300"
                  >
                    +91 9659655659
                  </a>
                </div>

                <div>
                  <p className="text-sm font-bold text-primary uppercase mb-2">Email</p>
                  <a
                    href="mailto:sornaperumaltransport@gmail.com"
                    className="text-lg font-bold text-foreground hover:text-primary transition-colors duration-300 break-all"
                  >
                    sornaperumaltransport@gmail.com
                  </a>
                </div>

                <div>
                  <p className="text-sm font-bold text-primary uppercase mb-2">Address</p>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">
                    Plot No-226, Shop No-3,
                    <br />
                    40 Feet Main Road, Airforce Nagar,
                    <br />
                    Morai Chennai-600055, Tamil Nadu
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="border-3 border-border p-8 bg-card">
              <h3 className="text-2xl font-bold text-foreground uppercase mb-6">Follow Us</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: "Facebook", url: "https://m.facebook.com/people/Sorna-Perumal-Transport/100079437465087/" },
                  { name: "Twitter", url: "https://twitter.com/DasYadav16" },
                  { name: "LinkedIn", url: "https://www.linkedin.com/in/sornaperumal-transport-62b9bb249" },
                  { name: "Instagram", url: "https://instagram.com/sornaperumaltransport?igshid=ZDdkNTZiNTM=" },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border-2 border-primary text-primary font-bold uppercase text-xs hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-center block"
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
