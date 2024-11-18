import { Route, Routes } from 'react-router-dom';
import { Layout } from '../components/layout'; // Layout
import { Home } from '../pages/home'; // Página inicial
import { Register } from '../pages/register';
import { Login } from '../pages/login';
import { Movie } from '../pages/movie';
import { Profile } from '../pages/profile';
import { VerifyEmail } from '../hooks/user/use-verify-email';
import { Filters } from '../pages/filter';

export const Router = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Movie />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/filters" element={<Filters />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/confirm-email" element={<VerifyEmail />} />
    </Routes>
  );
};
