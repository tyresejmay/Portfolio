import { Outlet } from 'react-router-dom';
import { ScrollToTop } from './components/common/ScrollToTop';
import { SiteFooter } from './components/layout/SiteFooter';
import { SiteHeader } from './components/layout/SiteHeader';

export function App() {
  return (
    <div className="app-shell">
      <ScrollToTop />
      <SiteHeader />
      <Outlet />
      <SiteFooter />
    </div>
  );
}

