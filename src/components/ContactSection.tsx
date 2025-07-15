import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Linkedin, Github, Download } from 'lucide-react';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "srujana.polisetti@gmail.com",
      href: "mailto:srujana.polisetti@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7207288006",
      href: "tel:+917207288006"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Guntur, Andhra Pradesh",
      href: null
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect on LinkedIn",
      href: "https://www.linkedin.com/in/baby-srujana-rajyalakshmi-polisetti-109316267"
    }
  ];

  return (
    <section className="py-20 px-6 bg-card/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="hero-text">Get In Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's connect and explore opportunities in cybersecurity, blockchain, and innovative technology solutions
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {contactInfo.map((info, index) => (
              <Card key={index} className="transition-smooth hover:scale-105 hover:glow-accent border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-full gradient-primary">
                      <info.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-primary mb-1">{info.label}</h3>
                      {info.href ? (
                        <a 
                          href={info.href}
                          className="text-muted-foreground hover:text-primary transition-smooth"
                          target={info.href.startsWith('http') ? '_blank' : undefined}
                          rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <span className="text-muted-foreground">{info.value}</span>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <Card className="gradient-secondary border-border/50">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 text-primary">Ready to Collaborate?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                I'm actively seeking opportunities in cybersecurity, blockchain development, and IoT solutions. 
                Let's discuss how we can work together to create innovative technology solutions.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button 
                  size="lg"
                  className="glow-primary transition-smooth hover:scale-105"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="transition-smooth hover:scale-105"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="transition-smooth hover:scale-105"
                >
                  <Github className="w-5 h-5 mr-2" />
                  View GitHub
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;