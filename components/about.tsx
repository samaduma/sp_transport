"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import ScrollReveal from "@/components/scroll-reveal"

export default function About() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="about" className="bg-card py-24 md:py-32 border-b border-border" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <ScrollReveal
              containerClassName="text-5xl md:text-6xl font-black text-foreground mb-4"
              textClassName="text-foreground"
            >
              MORE ABOUT US
            </ScrollReveal>

            <div className={`h-1 w-32 bg-primary mb-8 ${isVisible ? "animate-line-slide" : "w-0"}`} />

            <div className={`space-y-6 ${isVisible ? "animate-slide-in-up delay-300" : "scroll-hidden"}`}>
              <div>
                <h3 className="text-2xl font-bold text-primary uppercase mb-2">SP TRANSPORT</h3>
                <p className="text-sm font-bold text-muted-foreground">
                  Proprietor: <span className="text-foreground">P.N. Narayanan</span>
                </p>
              </div>

              <div>
                <p className="text-base text-muted-foreground leading-relaxed font-light">
                  With 10+ years of experience in vehicle transport, we have built our reputation on reliability,
                  safety, and customer satisfaction. Our commitment to professional service ensures your vehicle reaches
                  its destination in perfect condition.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6 py-4">
                <p className="text-sm text-foreground font-semibold mb-2">Address:</p>
                <p className="text-sm text-muted-foreground font-light">
                  SP TRANSPORT
                  <br />
                  Plot No-226, Shop No-3, 40 Feet Main Road,
                  <br />
                  Airforce Nagar Morai Chennai-600055, Tamil Nadu
                </p>
              </div>

              <div className="border-l-4 border-accent pl-6 py-4">
                <p className="text-sm text-foreground font-semibold mb-2">Contact:</p>
                <p className="text-sm text-accent font-bold">+91 9659655659</p>
                <p className="text-sm text-accent font-bold mt-2">sornaperumaltransport@gmail.com</p>
              </div>

              <button className="w-full md:w-auto px-8 py-3 bg-primary text-primary-foreground font-bold uppercase text-sm border-3 border-primary hover:bg-transparent hover:text-primary transition-all duration-300 tracking-wider mt-6">
                Read More
              </button>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className={`space-y-6 ${isVisible ? "animate-slide-in-right-small delay-200" : "scroll-hidden"}`}>
            <div className="border-3 border-border bg-background p-8">
              <h3 className="text-3xl font-black text-foreground uppercase mb-8">Why Choose Us</h3>

              <div className="space-y-6">
                {[
                  { icon: "⚡", title: "Fastest Delivery", desc: "Quick turnaround time on all shipments" },
                  { icon: "🛡️", title: "Safe & Secure", desc: "Best safety standards for your vehicle" },
                  { icon: "📦", title: "Wide Range", desc: "Multiple truck sizes for all needs" },
                  { icon: "💵", title: "Free Quote", desc: "No hidden charges, transparent pricing" },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4 pb-4 border-b border-border last:border-b-0 last:pb-0">
                    <div className="text-3xl flex-shrink-0">{item.icon}</div>
                    <div>
                      <p className="font-bold text-foreground uppercase text-sm">{item.title}</p>
                      <p className="text-xs text-muted-foreground font-light mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
