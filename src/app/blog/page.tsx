
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

const blogPosts = [
  {
    id: 1,
    title: "Behind The Scenes: The Monsoon Collection",
    excerpt: "Take a peek into the creative process behind our latest costume designs inspired by the serenity of nature.",
    date: "May 12, 2024",
    image: PlaceHolderImages.find(i => i.id === "blog-1")?.imageUrl || "https://picsum.photos/seed/osh10/1200/800",
    category: "Process"
  },
  {
    id: 2,
    title: "5 Secrets to Flawless Bridal Makeup",
    excerpt: "Bridal makeup is all about longevity and radiance. Here are Tinu's top tips for every summer bride.",
    date: "April 28, 2024",
    image: "https://picsum.photos/seed/oshb2/1200/800",
    category: "Tutorial"
  },
  {
    id: 3,
    title: "The Art of Saree Box Folding",
    excerpt: "Why professional folding is essential for your heirloom silks and how to store them for decades.",
    date: "April 15, 2024",
    image: "https://picsum.photos/seed/oshb3/1200/800",
    category: "Care"
  }
];

export default function Blog() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24">
        <header className="px-6 lg:px-12 mb-24 max-w-4xl mx-auto text-center">
          <h1 className="font-headline text-4xl md:text-6xl mb-6 tracking-tight uppercase">Inspiration & Insights</h1>
          <p className="font-body text-xl text-foreground/70 italic">
            Stories from the atelier, beauty rituals, and the art of dress.
          </p>
        </header>

        <div className="px-6 lg:px-12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {blogPosts.map((post) => (
            <Card key={post.id} className="border-none shadow-none group cursor-pointer bg-transparent">
              <CardContent className="p-0">
                <div className="relative aspect-video overflow-hidden rounded-sm mb-6">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    data-ai-hint="fashion lifestyle"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-4 py-1 text-xs font-headline uppercase tracking-widest">
                    {post.category}
                  </div>
                </div>
                <div className="space-y-3">
                  <span className="font-body text-sm text-foreground/50">{post.date}</span>
                  <h2 className="font-headline text-2xl group-hover:text-primary transition-colors leading-tight">
                    {post.title}
                  </h2>
                  <p className="font-body text-lg text-foreground/70 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <Link href={`/blog/${post.id}`} className="inline-block font-headline text-sm tracking-widest text-primary hover:text-accent transition-colors pt-2 uppercase underline underline-offset-8">
                    Read Story
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <section className="mt-32 py-24 bg-white/40 border-y border-primary/10">
          <div className="max-w-3xl mx-auto text-center px-6">
            <h2 className="font-headline text-3xl mb-4">Join The Atelier Circle</h2>
            <p className="font-body text-lg text-foreground/60 mb-8 italic">
              Subscribe to receive exclusive beauty tips, early access to collections, and atelier updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-1 bg-white border border-primary/20 px-6 py-4 rounded-sm font-body text-lg focus:outline-none focus:border-primary"
              />
              <button className="bg-foreground text-background font-headline tracking-widest px-10 py-4 uppercase hover:bg-accent transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
