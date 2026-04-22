import { ArrowDown, Download, MapPin } from 'lucide-react';
import { profile } from '../../data/profile';

export function HeroSection() {
  return (
    <section className="hero-section" id="top" aria-labelledby="hero-title">
      <div className="hero-content">
        <p className="eyebrow">Data-focused portfolio</p>
        <h1 id="hero-title">{profile.name}</h1>
        <p className="hero-title">{profile.title}</p>
        <p className="hero-summary">{profile.summary}</p>
        <div className="hero-meta">
          <span>
            <MapPin size={18} />
            {profile.location}
          </span>
        </div>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">
            View Work
            <ArrowDown size={18} />
          </a>
          <a className="button button-secondary" href={profile.resumePath} download>
            Resume
            <Download size={18} />
          </a>
        </div>
      </div>
      <div className="hero-portrait" aria-label="Portrait of Tyrese May">
        <img src={profile.headshotPath} alt="Tyrese May in a black suit" />
      </div>
    </section>
  );
}

