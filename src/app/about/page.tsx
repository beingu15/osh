
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import { Sparkles, Heart, Quote } from "lucide-react";

export default function About() {
  const artistImage = PlaceHolderImages.find(img => img.id === "artist-tinu")?.imageUrl || "";

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 overflow-hidden">
        {/* Hero Section */}
        <section className="px-6 lg:px-12 max-w-7xl mx-auto mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 space-y-8">
              <span className="font-headline text-primary tracking-[0.3em] text-sm uppercase">The Artist Behind the Brush</span>
              <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl leading-none">
                MEET <span className="italic text-primary">TINU</span>
              </h1>
              <p className="font-body text-xl md:text-2xl text-foreground/70 italic leading-relaxed">
                "I don't just apply makeup or design clothes; I sculpt identities and weave stories into every fabric."
              </p>
              <div className="pt-4 flex items-center space-x-4">
                <div className="h-px w-12 bg-primary"></div>
                <span className="font-headline text-sm tracking-widest uppercase">Founder & Creative Director</span>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 relative">
              <div className="relative aspect-[4/5] w-full max-w-md mx-auto">
                {/* Organic Shape Image Container */}
                <div className="absolute inset-0 bg-primary/20 rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] animate-[blob_10s_infinite_alternate] overflow-hidden">
                  <Image
                    src={artistImage}
                    alt="Tinu - The Artist"
                    fill
                    className="object-cover scale-110"
                    data-ai-hint="fashion portrait"
                  />
                </div>
                {/* Decorative border or shadow */}
                <div className="absolute -inset-4 border border-primary/20 rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] -z-10 animate-[blob_12s_infinite_alternate-reverse]"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Bio Section */}
        <section className="bg-white/40 py-24 px-6 lg:px-12 border-y border-primary/10">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-12">
              <Quote className="h-12 w-12 text-primary/20" />
            </div>
            <div className="space-y-10 font-body text-xl text-foreground/80 leading-relaxed text-center">
              <p>
                With over a decade of experience in the high-fashion and bridal industry, Tinu has established herself as a visionary artist who bridges the gap between traditional heritage and modern minimalism. Her journey began with a fascination for the intricate drapes of heirloom sarees and the transformative power of a single stroke of kohl.
              </p>
              <p>
                Today, The OSH Atelier stands as a testament to her commitment to excellence. Tinu's approach is deeply personal; she believes that luxury is not just about the final look, but the feeling of being truly seen and celebrated.
              </p>
            </div>
          </div>
        </section>

        {/* Core Values / Philosophy */}
        <section className="py-32 px-6 lg:px-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center space-y-4 group">
              <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                <Sparkles className="h-8 w-8" />
              </div>
              <h3 className="font-headline text-2xl tracking-widest">Precision</h3>
              <p className="font-body text-lg text-foreground/60">Every stitch and every shade is chosen with obsessive attention to detail.</p>
            </div>
            <div className="text-center space-y-4 group">
              <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                <Heart className="h-8 w-8" />
              </div>
              <h3 className="font-headline text-2xl tracking-widest">Passion</h3>
              <p className="font-body text-lg text-foreground/60">Rooted in a deep love for the craft and the cultural significance of adornment.</p>
            </div>
            <div className="text-center space-y-4 group">
              <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                <div className="font-headline text-xl">03</div>
              </div>
              <h3 className="font-headline text-2xl tracking-widest">Authenticity</h3>
              <p className="font-body text-lg text-foreground/60">Preserving traditional techniques while adapting them for the contemporary world.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
