import { SectionHeading } from '../common/SectionHeading';
import { aboutParagraphs } from '../../data/about';
import { profile } from '../../data/profile';

export function AboutSection() {
  return (
    <section className="page-section about-section" id="about" aria-labelledby="about-title">
      <SectionHeading
        eyebrow="About"
        title="Built from curiosity, discipline, and first-generation drive."
        description={profile.bio}
      />
      <div className="about-copy">
        {aboutParagraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}

