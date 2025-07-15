import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import EducationSection from '@/components/EducationSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import AchievementsSection from '@/components/AchievementsSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <SkillsSection />
      <ProjectsSection />
      <AchievementsSection />
      <ContactSection />
    </div>
  );
};

export default Index;
