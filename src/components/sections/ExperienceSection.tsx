import { SectionHeading } from '../common/SectionHeading';
import { experience } from '../../data/experience';

export function ExperienceSection() {
  return (
    <section className="page-section experience-section" id="experience" aria-labelledby="experience-title">
      <SectionHeading
        eyebrow="Experience"
        title="Data support, dashboards, teaching, and technical problem solving."
        description="Roles that combine analytical thinking with people-facing execution."
      />
      <div className="timeline">
        {experience.map((item) => (
          <article className="timeline-item" key={`${item.company}-${item.role}`}>
            <div className="timeline-date">{item.dates}</div>
            <div className="timeline-content">
              <p className="item-location">{item.location}</p>
              <h3>{item.role}</h3>
              <p className="item-company">{item.company}</p>
              <p>{item.summary}</p>
              <ul>
                {item.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

