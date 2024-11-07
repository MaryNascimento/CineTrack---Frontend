import { Outlet } from 'react-router-dom';
import { TopBar } from './topbar';
import { Footer } from './footer';

export const Layout = () => {
  return (
    <div className="h-screen flex flex-col">
      <TopBar />
      <div className="h-full">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
