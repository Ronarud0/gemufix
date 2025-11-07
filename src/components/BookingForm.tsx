import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Calendar, Clock, Users, Gamepad2 } from "lucide-react";

const BookingForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Booking Request Received!",
        description: "We'll contact you shortly to confirm your reservation.",
      });
      setIsSubmitting(false);
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <section id="booking" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Book Your <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Experience</span>
            </h2>
            <p className="text-lg md:text-xl text-foreground/80">
              Reserve your spot at Gemu Indonesia. Fill out the form below and we'll confirm your booking.
            </p>
          </div>

          <div className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-luxury">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground font-medium">
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    required
                    placeholder="Your name"
                    className="bg-background border-border focus:border-accent"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-foreground font-medium">
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="+62 xxx xxxx xxxx"
                    className="bg-background border-border focus:border-accent"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground font-medium">
                  Email Address *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="your.email@example.com"
                  className="bg-background border-border focus:border-accent"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="service" className="text-foreground font-medium flex items-center gap-2">
                    <Gamepad2 className="w-4 h-4" />
                    Service *
                  </Label>
                  <Select name="service" required>
                    <SelectTrigger className="bg-background border-border focus:border-accent">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ps">PlayStation Gaming</SelectItem>
                      <SelectItem value="billiard">Billiard</SelectItem>
                      <SelectItem value="darts">Darts</SelectItem>
                      <SelectItem value="cafe">Rooftop Cafe</SelectItem>
                      <SelectItem value="all">Full Venue</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="guests" className="text-foreground font-medium flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    Number of Guests *
                  </Label>
                  <Input
                    id="guests"
                    name="guests"
                    type="number"
                    min="1"
                    required
                    placeholder="1"
                    className="bg-background border-border focus:border-accent"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="date" className="text-foreground font-medium flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Preferred Date *
                  </Label>
                  <Input
                    id="date"
                    name="date"
                    type="date"
                    required
                    className="bg-background border-border focus:border-accent"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="time" className="text-foreground font-medium flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    Preferred Time *
                  </Label>
                  <Input
                    id="time"
                    name="time"
                    type="time"
                    required
                    className="bg-background border-border focus:border-accent"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-foreground font-medium">
                  Additional Notes
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Any special requests or questions?"
                  rows={4}
                  className="bg-background border-border focus:border-accent resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground font-semibold text-lg py-6"
              >
                {isSubmitting ? "Submitting..." : "Submit Booking Request"}
              </Button>

              <p className="text-sm text-foreground/60 text-center">
                * We'll contact you within 24 hours to confirm your booking
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
