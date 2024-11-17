import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../index.css';
import { TopBar } from '../components/layout/topbar/index.jsx';
import { Footer } from '../components/layout/footer/index.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TopBar/>
    <Footer/>
  </StrictMode>
);
