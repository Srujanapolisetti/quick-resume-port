import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Zap } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Learning Platform-Adaptive",
      status: "In Progress",
      description: "Developing a smart learning platform that uses AI-driven techniques for dynamic course content generation, summarization, and adaptive quiz creation. The system offers personalized learning paths based on user interests and progress, integrates local datasets with MongoDB for efficient data handling, and provides an intuitive frontend for enhanced user experience.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
      highlights: [
        "AI-driven dynamic content generation",
        "Personalized learning paths",
        "Adaptive quiz system",
        "MongoDB integration",
        "Intuitive user interface"
      ],
      type: "Web Application",
      isActive: true
    }
  ];

  return (
    <section className="py-20 px-6 bg-card/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="hero-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Innovative solutions showcasing technical expertise and problem-solving skills
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className={`transition-smooth hover:scale-[1.02] border-border/50 ${
              project.isActive ? 'glow-primary border-primary/50' : ''
            }`}>
              <CardHeader>
                <div className="flex flex-wrap justify-between items-start gap-4">
                  <div>
                    <CardTitle className="text-2xl text-primary mb-2">{project.title}</CardTitle>
                    <div className="flex items-center gap-2">
                      <Badge variant={project.isActive ? "default" : "secondary"} className="flex items-center gap-1">
                        {project.isActive && <Zap className="w-3 h-3" />}
                        {project.status}
                      </Badge>
                      <Badge variant="outline">{project.type}</Badge>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button variant="outline" size="sm">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div>
                  <h4 className="font-semibold mb-3 text-primary">Key Features:</h4>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {project.highlights.map((highlight, highlightIndex) => (
                      <div key={highlightIndex} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                        <span className="text-sm text-muted-foreground">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-primary">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;