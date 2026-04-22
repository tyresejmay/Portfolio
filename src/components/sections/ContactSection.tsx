import { Github, Linkedin, Mail } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { profile } from '../../data/profile';

export function ContactSection() {
  return (
    <section className="page-section contact-section" id="contact" aria-labelledby="contact-title">
      <SectionHeading
        eyebrow="Contact"
        title="Open to data analyst and software engineering opportunities."
        description="Best reached by email, LinkedIn, or GitHub."
      />
      <div className="contact-actions">
        <a className="button button-primary" href={`mailto:${profile.email}`}>
          <Mail size={18} />
          Email
        </a>
        <a className="button button-secondary" href={profile.linkedin}>
          <Linkedin size={18} />
          LinkedIn
        </a>
        <a className="button button-secondary" href={profile.github}>
          <Github size={18} />
          GitHub
        </a>
      </div>
    </section>
  );
}

