import { Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '../../data/profile';

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="brand-mark" href="#top" aria-label="Tyrese May home">
        TM
      </a>
      <nav className="site-nav" aria-label="Primary navigation">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <div className="header-actions" aria-label="Contact links">
        <a href={profile.github} aria-label="GitHub profile">
          <Github size={18} />
        </a>
        <a href={profile.linkedin} aria-label="LinkedIn profile">
          <Linkedin size={18} />
        </a>
        <a href={`mailto:${profile.email}`} aria-label="Email Tyrese May">
          <Mail size={18} />
        </a>
      </div>
    </header>
  );
}

