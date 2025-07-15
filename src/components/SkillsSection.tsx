import { Card, CardContent } from '@/components/ui/card';
import { Code2, Database, Shield, Wrench } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code2,
      skills: ["Python", "Java"],
      color: "text-blue-400"
    },
    {
      title: "Frameworks",
      icon: Wrench,
      skills: ["HTML", "CSS", "JavaScript", ".NET", "Node.js"],
      color: "text-green-400"
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["NoSQL", "MongoDB"],
      color: "text-purple-400"
    },
    {
      title: "Tools",
      icon: Shield,
      skills: ["Kali Linux", "React.js"],
      color: "text-red-400"
    }
  ];

  const softSkills = [
    "Problem Solving",
    "Adaptability", 
    "Time Management",
    "Leadership",
    "Decision Making"
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="hero-text">Skills & Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technical proficiencies and soft skills that drive innovation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center lg:text-left">Technical Skills</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {skillCategories.map((category, index) => (
                <Card key={index} className="transition-smooth hover:scale-105 hover:glow-accent border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-secondary">
                        <category.icon className={`w-6 h-6 ${category.color}`} />
                      </div>
                      <h4 className="font-semibold text-primary">{category.title}</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="px-3 py-1 bg-muted rounded-full text-sm text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-smooth cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center lg:text-left">Soft Skills</h3>
            <Card className="gradient-secondary border-border/50">
              <CardContent className="p-8">
                <div className="grid gap-4">
                  {softSkills.map((skill, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-card/50 transition-smooth"
                    >
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span className="text-lg">{skill}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;