import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const EducationSection = () => {
  const education = [
    {
      degree: "Bachelor of Technology",
      field: "Computer Science-Internet of things, Cyber Security including blockchain",
      institution: "Vasireddy Venkatadri Institute of Technology, Guntur",
      period: "Expected 2026",
      grade: "CGPA: 9.1",
      status: "current"
    },
    {
      degree: "Intermediate",
      field: "",
      institution: "Vijaya Jyothi Junior College, Mangalagiri",
      period: "2020 - 2022",
      grade: "Percentage: 97.9",
      status: "completed"
    },
    {
      degree: "High School Nirmala E/M High School",
      field: "",
      institution: "Mangalagiri",
      period: "2019 - 2020",
      grade: "Percentage: 98",
      status: "completed"
    }
  ];

  return (
    <section className="py-20 px-6 bg-card/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="hero-text">Education</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Academic journey focused on cutting-edge technology and cybersecurity
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index} className={`transition-smooth hover:scale-[1.02] border-border/50 ${
                edu.status === 'current' ? 'glow-primary border-primary/50' : ''
              }`}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-full ${edu.status === 'current' ? 'gradient-primary' : 'bg-secondary'}`}>
                      <GraduationCap className={`w-6 h-6 ${edu.status === 'current' ? 'text-primary-foreground' : 'text-foreground'}`} />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex flex-wrap justify-between items-start mb-2">
                        <h3 className="text-xl font-semibold text-primary">{edu.degree}</h3>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm">{edu.period}</span>
                        </div>
                      </div>
                      
                      {edu.field && (
                        <p className="text-foreground font-medium mb-1">{edu.field}</p>
                      )}
                      
                      <p className="text-muted-foreground mb-2">{edu.institution}</p>
                      
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-accent" />
                        <span className="text-accent font-medium">{edu.grade}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;