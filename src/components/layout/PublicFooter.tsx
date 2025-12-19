import { Link } from "react-router-dom";
import { Hotel, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export function PublicFooter() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 gold-gradient rounded-xl flex items-center justify-center">
                <Hotel className="w-7 h-7 text-primary-foreground" />
              </div>
              <div>
                <span className="font-heading text-xl font-bold text-foreground">LuxeStay</span>
                <span className="block text-xs text-muted-foreground tracking-widest">HOTELS & RESORTS</span>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Experience luxury redefined. Our world-class hotels offer unparalleled comfort, exceptional service, and unforgettable moments.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-foreground mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {["About Us", "Our Hotels", "Room Types", "Special Offers", "Gift Cards", "Careers"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-foreground mb-6">Services</h3>
            <ul className="space-y-3">
              {["Restaurant & Bar", "Spa & Wellness", "Event Venues", "Business Center", "Concierge", "Airport Transfer"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-foreground mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-sm">123 Fifth Avenue, Manhattan, New York, NY 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground text-sm">reservations@luxestay.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © 2024 LuxeStay Hotels & Resorts. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
