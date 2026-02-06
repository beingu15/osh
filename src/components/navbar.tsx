
"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, Instagram, Facebook } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/logo";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Inspiration", href: "/blog" },
  { name: "Booking", href: "/booking" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 px-6 lg:px-12 py-4",
        scrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/">
          <Logo />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-headline text-sm tracking-widest hover:text-primary transition-colors uppercase"
            >
              {link.name}
            </Link>
          ))}
          <div className="flex items-center space-x-4 ml-4">
            <Instagram className="h-5 w-5 text-primary hover:text-accent cursor-pointer transition-colors" />
            <Facebook className="h-5 w-5 text-primary hover:text-accent cursor-pointer transition-colors" />
          </div>
        </div>

        {/* Mobile Menu - Drawer */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button className="text-foreground p-2" aria-label="Open navigation menu">
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background border-primary/20 p-0 sm:max-w-xs">
              <SheetHeader className="p-6 border-b border-primary/10">
                <SheetTitle className="text-left">
                  <Logo />
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col p-6 space-y-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="font-headline text-xl tracking-[0.2em] hover:text-primary transition-colors uppercase"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="pt-8 border-t border-primary/10">
                  <p className="font-headline text-[10px] tracking-[0.3em] text-foreground/40 uppercase mb-6">Connect with us</p>
                  <div className="flex items-center space-x-6">
                    <Instagram className="h-6 w-6 text-primary hover:text-accent cursor-pointer transition-colors" />
                    <Facebook className="h-6 w-6 text-primary hover:text-accent cursor-pointer transition-colors" />
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
