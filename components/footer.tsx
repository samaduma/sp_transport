export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 pb-8 border-b border-border">
          {/* Company Info */}
          <div>
            <h4 className="font-bold text-foreground uppercase tracking-wider mb-4">SP TRANSPORT</h4>
            <p className="text-sm text-muted-foreground font-light leading-relaxed">
              Professional vehicle transport service across India with GPS tracking and secure closed trucks.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-foreground uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: "Home", href: "/" },
                { label: "Services", href: "/#services" },
                { label: "Gallery", href: "/gallery" },
                { label: "About Us", href: "/#about" },
                { label: "Contact", href: "/#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground font-light hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Hours */}
          <div>
            <h4 className="font-bold text-foreground uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-2">
              {["GPS Tracking", "Closed Trucks", "Nationwide", "Competitive Pricing"].map((service) => (
                <li key={service}>
                  <span className="text-sm text-muted-foreground font-light">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground font-light text-center md:text-left">
            © {currentYear} SP TRANSPORT. All Rights Reserved. Design by SP Transport
          </p>

          {/* Social Links */}
          <div className="flex gap-2">{["Facebook", "Twitter", "LinkedIn", "Instagram"].map((social) => null)}</div>
        </div>
      </div>
    </footer>
  )
}
