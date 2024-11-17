/* eslint-disable linebreak-style */
import { Route, Routes } from 'react-router-dom';
import { Layout } from '../components/layout'; // Layout
import { Home } from '../pages/home'; // Página inicial

export const Router = () => {
  return (
    <Routes>
      {/* Layout que envolve as rotas */}
      <Route element={<Layout />}>
        {/* Rota principal, renderiza a página Home */}
        <Route path="/" element={<Home />} />

        {/* Rota fallback para página não encontrada */}
        <Route
          path="*"
          element={
            <div>
              <h1>Página Não Encontrada</h1>
            </div>
          }
        />
      </Route>
    </Routes>
  );
};
