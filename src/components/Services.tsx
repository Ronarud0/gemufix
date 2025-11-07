import { Gamepad2, Landmark, Target, Coffee } from "lucide-react";
import psImage from "@/assets/ps-gaming.jpg";
import billiardImage from "@/assets/billiard.jpg";
import dartsImage from "@/assets/darts.jpg";
import cafeImage from "@/assets/rooftop-cafe.jpg";

const Services = () => {
  const services = [
    {
      icon: Gamepad2,
      title: "PlayStation Gaming",
      description: "Latest PS5 consoles with premium gaming chairs and a vast library of games. Perfect for solo sessions or multiplayer tournaments.",
      image: psImage,
      features: ["PS5 Consoles", "Luxury Gaming Chairs", "Latest Game Titles", "Tournament Ready"],
    },
    {
      icon: Landmark,
      title: "Billiard Lounge",
      description: "Professional-grade billiard tables in an elegant setting. Enjoy classic pool games with friends in sophisticated comfort.",
      image: billiardImage,
      features: ["Premium Tables", "Professional Cues", "Tournament Standard", "Private Areas"],
    },
    {
      icon: Target,
      title: "Dart Arena",
      description: "Championship dart boards with electronic scoring. Test your precision and compete with friends in style.",
      image: dartsImage,
      features: ["Electronic Scoring", "Professional Boards", "Competition Events", "Practice Areas"],
    },
    {
      icon: Coffee,
      title: "Rooftop Cafe",
      description: "Unwind at our rooftop cafe with premium beverages and snacks. The perfect spot to relax between gaming sessions.",
      image: cafeImage,
      features: ["Premium Coffee", "Gourmet Snacks", "Rooftop Views", "Relaxing Ambiance"],
    },
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Premium</span> Services
          </h2>
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto">
            Experience world-class entertainment facilities designed for the ultimate luxury gaming and leisure experience.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-3xl overflow-hidden hover:border-accent transition-all duration-500 hover:shadow-luxury"
            >
              <div className="relative h-64 md:h-80 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground">
                    {service.title}
                  </h3>
                </div>
              </div>
              
              <div className="p-6 md:p-8">
                <p className="text-foreground/80 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="grid grid-cols-2 gap-3">
                  {service.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-sm text-foreground/70"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
