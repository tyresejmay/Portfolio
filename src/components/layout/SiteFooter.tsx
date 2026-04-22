import { profile } from '../../data/profile';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <p>Designed and built by {profile.name}.</p>
      <a href={`mailto:${profile.email}`}>{profile.email}</a>
    </footer>
  );
}

