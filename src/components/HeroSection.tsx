import { Mail, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background geometric pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-primary rotate-45"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border border-accent rotate-12"></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 border border-primary rotate-45"></div>
        <div className="absolute bottom-20 right-20 w-20 h-20 border border-accent rotate-12"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="hero-text">Polisetti Baby</span>
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="hero-text">Srujana Rajyalakshmi</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Cybersecurity Enthusiast | Full-Stack Developer | Blockchain Explorer
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Mail className="w-5 h-5" />
              <span>srujana.polisetti@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Phone className="w-5 h-5" />
              <span>+91 7207288006</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-5 h-5" />
              <span>Guntur, AP</span>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              size="lg" 
              className="glow-primary animate-glow-pulse transition-smooth hover:scale-105"
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="transition-smooth hover:scale-105 hover:bg-primary hover:text-primary-foreground"
            >
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;