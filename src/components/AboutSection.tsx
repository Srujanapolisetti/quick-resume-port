import { Card, CardContent } from '@/components/ui/card';
import { Shield, Database, Zap, Code2 } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Ethical hacking and penetration testing expertise"
    },
    {
      icon: Database,
      title: "Blockchain",
      description: "Innovative solutions with distributed ledger technology"
    },
    {
      icon: Zap,
      title: "IoT & Data Streams",
      description: "Real-time data processing and IoT implementations"
    },
    {
      icon: Code2,
      title: "Full-Stack Development",
      description: "End-to-end application development and deployment"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="hero-text">About Me</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <Card className="gradient-secondary border-border/50">
              <CardContent className="p-8">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  To secure a challenging role at the intersection of <span className="text-primary font-semibold">IoT, cybersecurity, blockchain, and data streams</span>, 
                  where I can leverage my skills in ethical hacking, penetration testing (utilizing tools like Kali Linux), Python, and SQL 
                  to develop innovative cybersecurity solutions. Passionate about applying my technical expertise and analytical abilities 
                  in a dynamic, growth-oriented environment that fosters continuous learning and advancement in IoT security, 
                  blockchain technologies, and emerging data stream security practices.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <Card key={index} className="transition-smooth hover:scale-105 hover:glow-accent border-border/50">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full gradient-primary flex items-center justify-center">
                  <item.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-primary">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;