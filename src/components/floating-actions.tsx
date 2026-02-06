
'use client';

import { MessageCircle, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

export function FloatingActions() {
  const phoneNumber = "15556748834"; // Placeholder number
  const whatsappMessage = "Hello, I am interested in your services at The OSH Atelier.";

  return (
    <>
      {/* WhatsApp Button - Bottom Left */}
      <div className="fixed bottom-8 left-6 z-50">
        <a
          href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl active:scale-95",
            "border-2 border-white/20"
          )}
          aria-label="Contact us on WhatsApp"
        >
          <MessageCircle className="h-5 w-5 fill-current" />
        </a>
      </div>

      {/* Call Button - Bottom Right */}
      <div className="fixed bottom-8 right-6 z-50">
        <a
          href={`tel:${phoneNumber}`}
          className={cn(
            "flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl active:scale-95",
            "border-2 border-white/20"
          )}
          aria-label="Call us"
        >
          <Phone className="h-5 w-5" />
        </a>
      </div>
    </>
  );
}
