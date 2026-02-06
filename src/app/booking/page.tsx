
"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { generateServiceEstimate } from "@/ai/flows/generate-service-estimate";
import { Loader2, Sparkles, Clock, MapPin } from "lucide-react";

export default function Booking() {
  const { toast } = useToast();
  const [isEstimating, setIsEstimating] = useState(false);
  const [estimate, setEstimate] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    details: ""
  });

  const handleGetEstimate = async () => {
    if (!formData.details) {
      toast({ title: "Please provide request details first.", variant: "destructive" });
      return;
    }

    setIsEstimating(true);
    try {
      const result = await generateServiceEstimate({ requestDetails: formData.details });
      setEstimate(result.statementOfWork);
      toast({ title: "Estimate generated successfully!" });
    } catch (error) {
      toast({ title: "Failed to generate estimate.", variant: "destructive" });
    } finally {
      setIsEstimating(false);
    }
  };

  const handleSubmitBooking = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Booking inquiry sent! We will contact you shortly." });
  };

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 px-6 lg:px-12 bg-background min-h-screen">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Column: Info & Form */}
          <div className="space-y-12">
            <header>
              <h1 className="font-headline text-4xl md:text-6xl mb-6">RESERVE AN EXPERIENCE</h1>
              <p className="font-body text-xl text-foreground/70 italic">
                Begin your journey with The OSH Atelier. Provide us with your details and vision for an immediate estimate.
              </p>
            </header>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <Clock className="h-6 w-6 text-primary shrink-0" />
                <div>
                  <h3 className="font-headline text-lg uppercase tracking-wider mb-2">Studio Hours</h3>
                  <p className="font-body text-foreground/60">Tue - Sun: 10:00 AM - 7:00 PM<br />Closed on Mondays</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-primary shrink-0" />
                <div>
                  <h3 className="font-headline text-lg uppercase tracking-wider mb-2">Location</h3>
                  <p className="font-body text-foreground/60">Angamaly, Kerala<br />Private Parking Available</p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmitBooking} className="space-y-6 bg-white/40 p-8 rounded-lg border border-primary/10 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="font-headline tracking-widest text-xs uppercase">Your Name</Label>
                  <Input id="name" placeholder="E.g. Isabella Rose" className="bg-white" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="font-headline tracking-widest text-xs uppercase">Email Address</Label>
                  <Input id="email" type="email" placeholder="isabella@example.com" className="bg-white" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="service" className="font-headline tracking-widest text-xs uppercase">Interested Service</Label>
                <Select onValueChange={(val) => setFormData({...formData, service: val})}>
                  <SelectTrigger className="bg-white">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="makeup">Professional Makeup</SelectItem>
                    <SelectItem value="outfit">Custom Outfit Design</SelectItem>
                    <SelectItem value="draping">Saree Draping</SelectItem>
                    <SelectItem value="folding">Saree Box Folding</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="details" className="font-headline tracking-widest text-xs uppercase">Request Details & Vision</Label>
                <Textarea 
                  id="details" 
                  placeholder="Describe the occasion, style preferences, or specific needs..." 
                  className="bg-white min-h-[150px]"
                  value={formData.details}
                  onChange={(e) => setFormData({...formData, details: e.target.value})}
                  required
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  type="button" 
                  variant="outline" 
                  className="flex-1 font-headline tracking-widest uppercase py-6 border-primary/40 hover:border-primary"
                  onClick={handleGetEstimate}
                  disabled={isEstimating}
                >
                  {isEstimating ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Sparkles className="mr-2 h-4 w-4 text-primary" />}
                  Get AI Estimate
                </Button>
                <Button 
                  type="submit" 
                  className="flex-1 font-headline tracking-widest uppercase py-6 bg-accent hover:bg-accent/90"
                >
                  Send Inquiry
                </Button>
              </div>
            </form>
          </div>

          {/* Right Column: AI Estimate Display */}
          <div className="relative">
            {estimate ? (
              <div className="sticky top-40 animate-in fade-in slide-in-from-right duration-500">
                <Card className="border-primary/20 shadow-xl overflow-hidden bg-white/80">
                  <CardHeader className="bg-primary/10 border-b border-primary/10 py-8">
                    <CardTitle className="font-headline text-2xl tracking-widest uppercase flex items-center">
                      <Sparkles className="mr-3 h-6 w-6 text-primary" />
                      YOUR ATELIER ESTIMATE
                    </CardTitle>
                    <CardDescription className="font-body text-lg italic">
                      AI-generated itemized statement based on your request.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="py-8 font-body text-lg leading-relaxed whitespace-pre-wrap">
                    {estimate}
                    <div className="mt-12 pt-8 border-t border-primary/10 text-sm text-foreground/40 italic">
                      *Note: This is an estimated price range. Final pricing is determined after a formal consultation.
                    </div>
                  </CardContent>
                </Card>
              </div>
            ) : (
              <div className="h-full flex items-center justify-center p-12 border-2 border-dashed border-primary/20 rounded-xl bg-white/20">
                <div className="text-center">
                  <Sparkles className="h-12 w-12 text-primary/30 mx-auto mb-6" />
                  <p className="font-headline text-lg text-primary/40 tracking-widest uppercase">
                    Your Estimate Will Appear Here
                  </p>
                  <p className="font-body text-foreground/40 mt-2 italic">
                    Fill out the form to get an itemized pricing preview.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
