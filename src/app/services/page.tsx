
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Scissors, Wind, Layers } from "lucide-react";

const serviceCategories = [
  {
    slug: "makeup",
    title: "Professional Makeup",
    longDesc: "Our professional makeup services are tailored to highlight your natural features while achieving a high-fashion finish. We specialize in HD Bridal Makeup, Editorial Fashion looks, and sophisticated party glam. Using only the world's most premium cosmetic brands, we ensure long-lasting, flawless results for every skin tone and texture.",
    features: ["Bridal Consultations", "High-Fashion Editorial", "Evening & Party Glam", "Airbrush Techniques"],
    image: PlaceHolderImages.find(i => i.id === "makeup-service")?.imageUrl || "",
    icon: Sparkles
  },
  {
    slug: "outfit",
    title: "Custom Outfit Design",
    longDesc: "The Atelier's costume design service brings your sartorial dreams to life. From initial sketches to the final stitch, Tinu works closely with you to create one-of-a-kind outfits. We specialize in luxury ethnic wear, bridal ensembles, and fusion costumes that blend traditional heritage with avant-garde design elements.",
    features: ["Custom Tailoring", "Embroidery Design", "Fabric Sourcing", "Conceptual Sketching"],
    image: PlaceHolderImages.find(i => i.id === "costume-service")?.imageUrl || "",
    icon: Scissors
  },
  {
    slug: "draping",
    title: "Saree Draping",
    longDesc: "A perfectly draped saree is an art form. Our masters of draping provide an impeccable service that ensures comfort and regality. Whether it's the traditional Nivi style or contemporary fusion drapes, we ensure your ensemble remains perfect throughout your event, allowing you to move with grace and confidence.",
    features: ["Traditional & Fusion Styles", "Bridal Draping Experts", "Group Draping Packages", "Drape Consultation"],
    image: PlaceHolderImages.find(i => i.id === "saree-draping")?.imageUrl || "",
    icon: Wind
  },
  {
    slug: "folding",
    title: "Saree Box Folding",
    longDesc: "Maintain the longevity of your precious sarees with our professional box folding service. We use archival-grade materials and specialized techniques to fold sarees perfectly, preventing creases and protecting delicate fabrics like Kanchipuram silk, Banarasi, and Chiffon. Ideal for storage, travel, or bridal trousseau presentation.",
    features: ["Silk Preservation", "Travel-Ready Folding", "Trousseau Packaging", "Archival Materials"],
    image: PlaceHolderImages.find(i => i.id === "saree-folding")?.imageUrl || "",
    icon: Layers
  }
];

export default function Services() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24">
        <header className="px-6 lg:px-12 mb-24 max-w-4xl mx-auto text-center">
          <h1 className="font-headline text-4xl md:text-6xl mb-6 tracking-tight">OUR ARTISTRY</h1>
          <div className="h-1 w-24 bg-primary mx-auto mb-8"></div>
          <p className="font-body text-xl text-foreground/70 italic leading-relaxed">
            Every service at The OSH Atelier is a dedicated craft, refined over years of practice and fueled by a passion for beauty.
          </p>
        </header>

        <section className="px-6 lg:px-12 space-y-32 max-w-7xl mx-auto">
          {serviceCategories.map((service, index) => (
            <div key={service.slug} id={service.slug} className={`flex flex-col lg:items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 scroll-mt-32`}>
              <div className="flex-1 relative aspect-[4/5] overflow-hidden rounded-sm shadow-2xl">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  data-ai-hint="luxury beauty"
                />
              </div>
              <div className="flex-1 space-y-8">
                <div className="flex items-center space-x-4">
                  <service.icon className="h-10 w-10 text-primary" />
                  <h2 className="font-headline text-3xl md:text-4xl">{service.title}</h2>
                </div>
                <p className="font-body text-xl text-foreground/80 leading-relaxed">
                  {service.longDesc}
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {service.features.map(feat => (
                    <div key={feat} className="flex items-center space-x-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                      <span className="font-body text-lg text-foreground/70">{feat}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-6">
                  <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-headline tracking-widest px-10">
                    <Link href={`/booking?service=${service.slug}`}>Inquire for Pricing</Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
