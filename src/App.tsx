import { Outlet } from 'react-router-dom';
import { SiteFooter } from './components/layout/SiteFooter';
import { SiteHeader } from './components/layout/SiteHeader';

export function App() {
  return (
    <div className="app-shell">
      <SiteHeader />
      <Outlet />
      <SiteFooter />
    </div>
  );
}

