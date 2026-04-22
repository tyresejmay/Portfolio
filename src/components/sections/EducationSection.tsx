import { SectionHeading } from '../common/SectionHeading';
import { awards } from '../../data/awards';
import { education } from '../../data/education';

export function EducationSection() {
  return (
    <section className="page-section education-section" id="education" aria-labelledby="education-title">
      <SectionHeading
        eyebrow="Education"
        title="Computer Science foundation at NJIT."
        description="Academic training in software engineering, databases, data science, algorithms, and Linux programming."
      />
      <div className="education-layout">
        <article className="education-panel">
          <div className="logo-row">
            {education.logos.map((logo) => (
              <img key={logo.src} src={logo.src} alt={logo.alt} />
            ))}
          </div>
          <h3>{education.university}</h3>
          <p className="item-company">{education.college}</p>
          <p>{education.degree}</p>
          <p className="item-location">
            {education.location} | {education.dates}
          </p>
        </article>
        <article className="education-panel">
          <h3>Relevant Coursework</h3>
          <ul className="course-list">
            {education.coursework.map((course) => (
              <li key={course}>{course}</li>
            ))}
          </ul>
        </article>
      </div>
      <div className="award-list">
        {awards.map((award) => (
          <article key={award.name}>
            <span>{award.date}</span>
            <h3>{award.name}</h3>
            <p>{award.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

