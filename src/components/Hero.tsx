import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-gemu.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Gemu Luxury Gaming Lounge"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,hsl(35_65%_50%/0.15),transparent_70%)]"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-tight">
            Experience
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Luxury Gaming
            </span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto font-light">
            Premium PlayStation gaming, professional billiard tables, championship darts, and an elegant rooftop cafe – all in one sophisticated venue.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              size="lg"
              onClick={() => scrollToSection("#booking")}
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground font-semibold text-lg px-8 py-6 shadow-luxury"
            >
              Book Your Experience
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("#services")}
              className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground font-semibold text-lg px-8 py-6"
            >
              Explore Services
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={() => scrollToSection("#about")}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-accent hover:text-accent/80 transition-colors"
          aria-label="Scroll down"
        >
          <ChevronDown size={40} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
