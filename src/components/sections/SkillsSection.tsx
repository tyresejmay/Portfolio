import { SectionHeading } from '../common/SectionHeading';
import { certifications } from '../../data/certifications';
import { skillGroups } from '../../data/skills';

export function SkillsSection() {
  return (
    <section className="page-section skills-section" id="skills" aria-labelledby="skills-title">
      <SectionHeading
        eyebrow="Skills"
        title="Analytics, engineering, and communication in one toolkit."
        description="A practical mix of programming, dashboarding, cloud tooling, and reporting skills."
      />
      <div className="skill-grid">
        {skillGroups.map((group) => (
          <article className="skill-card" key={group.label}>
            <h3>{group.label}</h3>
            <ul className="tag-list">
              {group.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <div className="certification-list">
        {certifications.map((certification) => (
          <article key={certification.name}>
            <span>{certification.status}</span>
            <h3>{certification.name}</h3>
            <p>{certification.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

