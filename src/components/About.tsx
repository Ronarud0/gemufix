import { Sparkles, Trophy, Users, Clock } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Sparkles,
      title: "Premium Experience",
      description: "State-of-the-art equipment and luxury ambiance",
    },
    {
      icon: Trophy,
      title: "Professional Grade",
      description: "Competition-standard facilities for serious players",
    },
    {
      icon: Users,
      title: "Social Hub",
      description: "Perfect venue for gatherings and celebrations",
    },
    {
      icon: Clock,
      title: "Extended Hours",
      description: "Open late to accommodate your schedule",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(35_65%_50%/0.08),transparent_70%)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            About <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Gemu</span>
          </h2>
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
            Gemu Indonesia is a premier entertainment destination that combines luxury gaming with sophisticated social spaces. We've created an environment where cutting-edge technology meets elegant design, offering an unparalleled experience for gaming enthusiasts and social gatherings alike.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-2xl p-6 hover:border-accent transition-all duration-300 hover:shadow-luxury"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-2 text-foreground">
                {feature.title}
              </h3>
              <p className="text-foreground/70">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-card border border-border rounded-3xl p-8 md:p-12 text-center">
          <p className="text-xl md:text-2xl font-display text-foreground/90 italic">
            "Where gaming meets luxury, and every visit becomes an unforgettable experience"
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
