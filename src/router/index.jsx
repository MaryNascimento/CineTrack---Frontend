import { Route, Routes } from 'react-router-dom';
import { Layout } from '../components/layout';

export const Router = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route
          path="/"
          element={
            <div>
              <h1>Home</h1>
            </div>
          }
        />
      </Route>
    </Routes>
  );
};
