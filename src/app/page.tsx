
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Scissors, Wind, Layers, ArrowRight } from "lucide-react";

const services = [
  {
    id: "makeup",
    title: "Professional Makeup",
    description: "From bridal elegance to high-fashion editorial, we craft looks that tell your unique story.",
    icon: Sparkles,
    image: PlaceHolderImages.find(img => img.id === "makeup-service")?.imageUrl || "",
    link: "/services/makeup"
  },
  {
    id: "outfit",
    title: "Custom Outfit Design",
    description: "Bespoke costume design that marries traditional silhouettes with contemporary luxury.",
    icon: Scissors,
    image: PlaceHolderImages.find(img => img.id === "costume-service")?.imageUrl || "",
    link: "/services/outfit"
  },
  {
    id: "draping",
    title: "Saree Draping",
    description: "Masterful draping techniques for an impeccable, regal appearance on your most special occasions.",
    icon: Wind,
    image: PlaceHolderImages.find(img => img.id === "saree-draping")?.imageUrl || "",
    link: "/services/draping"
  },
  {
    id: "folding",
    title: "Saree Box Folding",
    description: "Preserve and present your heirloom sarees with our professional archival folding service.",
    icon: Layers,
    image: PlaceHolderImages.find(img => img.id === "saree-folding")?.imageUrl || "",
    link: "/services/folding"
  }
];

export default function Home() {
  const heroImage = PlaceHolderImages.find(img => img.id === "hero-main");
  const artistImage = PlaceHolderImages.find(img => img.id === "artist-tinu")?.imageUrl || "";

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
          <Image
            src={heroImage?.imageUrl || "https://picsum.photos/seed/osh1/1920/1080"}
            alt="The OSH Atelier"
            fill
            className="object-cover brightness-[0.7]"
            priority
            data-ai-hint="luxury makeup"
          />
          <div className="relative z-10 text-center text-white px-6">
            <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl tracking-[0.2em] mb-6 drop-shadow-lg">
              THE OSH <span className="text-primary italic">ATELIER</span>
            </h1>
            <p className="font-body text-xl md:text-2xl lg:text-3xl max-w-2xl mx-auto italic opacity-90 mb-12">
              Where Artistry Meets Elegance. By Tinu.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-headline tracking-widest px-10 h-14">
                <Link href="/booking">Book Experience</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-foreground font-headline tracking-widest px-10 h-14 bg-transparent">
                <Link href="/portfolio">View Portfolio</Link>
              </Button>
            </div>
          </div>
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-[1px] h-20 bg-primary/60"></div>
          </div>
        </section>

        {/* Brand Philosophy */}
        <section className="py-24 px-6 lg:px-12 bg-background">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-primary text-sm font-headline tracking-widest mb-4 uppercase">The Atelier Philosophy</h2>
            <h3 className="font-headline text-3xl md:text-5xl mb-8 leading-tight">Elevating Traditional Crafts through Modern Sophistication</h3>
            <p className="font-body text-xl text-foreground/70 leading-relaxed max-w-3xl mx-auto">
              The OSH Atelier is more than a beauty studio; it is a sanctuary of artistic expression. Led by Tinu's visionary approach, we celebrate the ritual of adornment, ensuring every client feels like a masterpiece.
            </p>
          </div>
        </section>

        {/* Artist Section - Integrated from About page */}
        <section className="py-32 px-6 lg:px-12 bg-white/30 border-y border-primary/10 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Image Column - Now first for all breakpoints */}
              <div className="relative">
                <div className="relative aspect-[4/5] w-full max-w-md mx-auto">
                  <div className="absolute inset-0 bg-primary/20 rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] animate-[blob_10s_infinite_alternate] overflow-hidden">
                    <Image
                      src={artistImage}
                      alt="Tinu - The Artist"
                      fill
                      className="object-cover scale-110"
                      data-ai-hint="fashion portrait"
                    />
                  </div>
                  <div className="absolute -inset-4 border border-primary/20 rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] -z-10 animate-[blob_12s_infinite_alternate-reverse]"></div>
                </div>
              </div>
              
              {/* Text Column */}
              <div className="space-y-8">
                <span className="font-headline text-primary tracking-[0.3em] text-sm uppercase">The Creative Visionary</span>
                <h2 className="font-headline text-4xl md:text-6xl leading-tight uppercase">
                  MEET <span className="italic text-primary">TINU</span>
                </h2>
                <p className="font-body text-2xl text-foreground/70 italic leading-relaxed">
                  "Artistry is not just my profession; it's the lens through which I see the world."
                </p>
                <div className="space-y-4 font-body text-lg text-foreground/60 leading-relaxed">
                  <p>
                    With over a decade of experience in high-fashion and bridal couture, Tinu has established herself as a visionary who bridges the gap between traditional heritage and modern minimalism.
                  </p>
                  <p>
                    Every creation at The OSH Atelier is personally overseen by Tinu, ensuring that luxury is felt in every detail.
                  </p>
                </div>
                <div className="pt-4 flex items-center space-x-6">
                  <Button asChild className="bg-foreground text-background font-headline tracking-widest px-8 py-6 uppercase hover:bg-accent transition-colors">
                    <Link href="/about">Discover Her Story</Link>
                  </Button>
                  <div className="h-px w-12 bg-primary/40"></div>
                  <span className="font-headline text-xs tracking-widest uppercase text-foreground/40">Founder & Director</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Showcase */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div>
                <h2 className="text-primary text-sm font-headline tracking-widest mb-4 uppercase">Exquisite Services</h2>
                <h3 className="font-headline text-3xl md:text-5xl">Curated Collections</h3>
              </div>
              <Link href="/services" className="font-headline text-sm tracking-widest hover:text-primary flex items-center group">
                DISCOVER ALL SERVICES <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service) => (
                <Link key={service.id} href={service.link} className="group flex flex-col">
                  <div className="relative aspect-[3/4] overflow-hidden mb-6 rounded-sm shadow-md">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="absolute top-6 right-6">
                      <service.icon className="h-8 w-8 text-white drop-shadow-md" />
                    </div>
                  </div>
                  <h4 className="font-headline text-xl mb-3 group-hover:text-primary transition-colors">{service.title}</h4>
                  <p className="font-body text-lg text-foreground/60 leading-snug line-clamp-3">
                    {service.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="relative py-32 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-accent z-0"></div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="font-headline text-4xl md:text-6xl text-background mb-8 leading-tight">Ready for your Transformation?</h2>
            <p className="font-body text-xl text-background/80 mb-12 italic">
              Experience the exclusivity of the OSH Atelier. Private consultations available.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-headline tracking-widest px-12 h-16 text-lg">
              <Link href="/booking">Reserve Your Session</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
