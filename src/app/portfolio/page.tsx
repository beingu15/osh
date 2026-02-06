
"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import { cn } from "@/lib/utils";

const categories = ["All", "Makeup", "Couture", "Traditional", "Editorial"];

const portfolioItems = [
  { id: 1, category: "Makeup", title: "Midnight Glamour", image: PlaceHolderImages.find(i => i.id === "portfolio-1")?.imageUrl || "" },
  { id: 2, category: "Couture", title: "Golden Thread", image: PlaceHolderImages.find(i => i.id === "portfolio-2")?.imageUrl || "" },
  { id: 3, category: "Editorial", title: "Modern Muse", image: PlaceHolderImages.find(i => i.id === "portfolio-3")?.imageUrl || "" },
  { id: 4, category: "Traditional", title: "Imperial Saree", image: PlaceHolderImages.find(i => i.id === "portfolio-4")?.imageUrl || "" },
  { id: 5, category: "Makeup", title: "Dewy Radiance", image: "https://picsum.photos/seed/osh11/600/800" },
  { id: 6, category: "Couture", title: "Silk Symphony", image: "https://picsum.photos/seed/osh12/600/800" },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24">
        <header className="px-6 lg:px-12 mb-16 text-center">
          <h1 className="font-headline text-4xl md:text-6xl mb-6">The Gallery</h1>
          <p className="font-body text-xl text-foreground/60 italic max-w-2xl mx-auto">
            A curation of our finest artistry across makeup, fashion, and traditional draping.
          </p>
        </header>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16 px-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-8 py-2 font-headline tracking-widest text-sm uppercase border transition-all duration-300",
                activeCategory === cat 
                  ? "bg-primary border-primary text-primary-foreground" 
                  : "border-primary/20 hover:border-primary"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <section className="px-6 lg:px-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div key={item.id} className="group relative overflow-hidden aspect-[3/4] bg-muted">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  data-ai-hint="luxury fashion"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                  <div>
                    <span className="text-primary font-headline text-xs tracking-widest block mb-2 uppercase">{item.category}</span>
                    <h3 className="text-white font-headline text-2xl uppercase tracking-wider">{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
