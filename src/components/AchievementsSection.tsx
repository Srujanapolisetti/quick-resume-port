import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Trophy, Users, Calendar } from 'lucide-react';

const AchievementsSection = () => {
  const achievements = [
    {
      title: "Programming in Java by NPTEL 2024",
      type: "Certification",
      year: "2024",
      icon: Award,
      description: "Successfully completed comprehensive Java programming course",
      category: "Technical"
    },
    {
      title: "Google Cloud Career Launchpad Cloud Engineer",
      type: "Program",
      year: "2024",
      icon: Trophy,
      description: "Selected for Google Cloud career development program",
      category: "Professional"
    }
  ];

  const activities = [
    {
      title: "National Service Scheme (NSS)",
      role: "Active Member",
      description: "Contributing to community service and social development initiatives",
      icon: Users,
      isActive: true
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="hero-text">Achievements & Activities</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Recognition and contributions beyond academics
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* Achievements */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Trophy className="w-8 h-8 text-primary" />
              Achievements
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="transition-smooth hover:scale-105 hover:glow-accent border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-full gradient-primary">
                        <achievement.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="outline" className="text-xs">
                            {achievement.category}
                          </Badge>
                          <div className="flex items-center gap-1 text-muted-foreground text-sm">
                            <Calendar className="w-3 h-3" />
                            {achievement.year}
                          </div>
                        </div>
                        <h4 className="font-semibold text-primary mb-1">{achievement.title}</h4>
                        <p className="text-sm text-muted-foreground mb-2">{achievement.description}</p>
                        <Badge variant="secondary" className="text-xs">
                          {achievement.type}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Extra-curricular Activities */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Users className="w-8 h-8 text-primary" />
              Extra-curricular Activities
            </h3>
            <div className="space-y-4">
              {activities.map((activity, index) => (
                <Card key={index} className={`transition-smooth hover:scale-[1.02] border-border/50 ${
                  activity.isActive ? 'glow-primary border-primary/50' : ''
                }`}>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-full ${activity.isActive ? 'gradient-primary' : 'bg-secondary'}`}>
                        <activity.icon className={`w-6 h-6 ${activity.isActive ? 'text-primary-foreground' : 'text-foreground'}`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="font-semibold text-primary">{activity.title}</h4>
                          <Badge variant={activity.isActive ? "default" : "secondary"}>
                            {activity.role}
                          </Badge>
                          {activity.isActive && (
                            <Badge variant="outline" className="text-xs">
                              Active
                            </Badge>
                          )}
                        </div>
                        <p className="text-muted-foreground">{activity.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;