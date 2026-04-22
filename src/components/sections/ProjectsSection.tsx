import { ExternalLink, Github } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { projects } from '../../data/projects';

export function ProjectsSection() {
  return (
    <section className="page-section projects-section" id="projects" aria-labelledby="projects-title">
      <SectionHeading
        eyebrow="Projects"
        title="Project work with analytics and full-stack foundations."
        description="A focused starting point that can expand as more work is ready to publish."
      />
      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.name}>
            <div>
              <p className="item-location">{project.timeframe}</p>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </div>
            <ul>
              {project.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
            <ul className="tag-list">
              {project.stack.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
            {project.links ? (
              <div className="project-links">
                {project.links.github ? (
                  <a href={project.links.github}>
                    <Github size={16} />
                    Code
                  </a>
                ) : null}
                {project.links.demo ? (
                  <a href={project.links.demo}>
                    <ExternalLink size={16} />
                    Demo
                  </a>
                ) : null}
              </div>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}

