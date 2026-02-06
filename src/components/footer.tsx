
import Link from "next/link";
import { Logo } from "@/components/logo";
import { Instagram, Facebook, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <div className="mb-8">
            <Logo variant="light" className="mb-6" />
            <p className="max-w-md text-background/70 font-body text-lg leading-relaxed mt-6">
              Defining luxury through professional makeup and artistic costume design. Every creation is a testament to the atelier's dedication to craftsmanship and beauty.
            </p>
          </div>
          <div className="flex space-x-6">
            <Instagram className="h-6 w-6 text-primary hover:text-primary/80 transition-colors cursor-pointer" />
            <Facebook className="h-6 w-6 text-primary hover:text-primary/80 transition-colors cursor-pointer" />
          </div>
        </div>

        <div>
          <h3 className="font-headline text-xl tracking-widest mb-6 border-b border-primary/30 pb-2">Quick Links</h3>
          <ul className="space-y-4 font-body text-lg">
            <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li>
            <li><Link href="/portfolio" className="hover:text-primary transition-colors">Portfolio</Link></li>
            <li><Link href="/booking" className="hover:text-primary transition-colors">Book Now</Link></li>
            <li><Link href="/blog" className="hover:text-primary transition-colors">Inspiration</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-headline text-xl tracking-widest mb-6 border-b border-primary/30 pb-2">Contact</h3>
          <ul className="space-y-4 font-body text-lg text-background/70">
            <li className="flex items-start space-x-3">
              <MapPin className="h-5 w-5 text-primary shrink-0 mt-1" />
              <span>123 Couture Avenue, Fashion District</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-primary shrink-0" />
              <span>+1 (555) OSH-STUDIO</span>
            </li>
            <li className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-primary shrink-0" />
              <span>atelier@osh.com</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-primary/10 text-center text-sm font-body text-background/40">
        &copy; {new Date().getFullYear()} The OSH Atelier by Tinu. All Rights Reserved.
      </div>
    </footer>
  );
}
