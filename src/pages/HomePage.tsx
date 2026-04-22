import { AboutSection } from '../components/sections/AboutSection';
import { ContactSection } from '../components/sections/ContactSection';
import { EducationSection } from '../components/sections/EducationSection';
import { ExperienceSection } from '../components/sections/ExperienceSection';
import { HeroSection } from '../components/sections/HeroSection';
import { ProjectsSection } from '../components/sections/ProjectsSection';
import { SkillsSection } from '../components/sections/SkillsSection';

export function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
      <ContactSection />
    </main>
  );
}

