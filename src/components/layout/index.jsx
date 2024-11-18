import { Outlet } from 'react-router-dom';
import { TopBar } from './topbar';
import { Footer } from './footer';

export const Layout = () => {
  return (
    <div>
      <header>
        <TopBar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
