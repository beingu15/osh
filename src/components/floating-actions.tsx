
'use client';

import { MessageCircle, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

export function FloatingActions() {
  const phoneNumber = "15556748834"; // Placeholder number
  const whatsappMessage = "Hello, I am interested in your services at The OSH Atelier.";

  return (
    <div className="fixed bottom-8 right-6 z-50 flex flex-col gap-4">
      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl active:scale-95",
          "border-2 border-white/20"
        )}
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="h-7 w-7 fill-current" />
      </a>

      {/* Call Button */}
      <a
        href={`tel:${phoneNumber}`}
        className={cn(
          "flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl active:scale-95",
          "border-2 border-white/20"
        )}
        aria-label="Call us"
      >
        <Phone className="h-7 w-7" />
      </a>
    </div>
  );
}
