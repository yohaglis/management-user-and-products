import { Routes, Route } from 'react-router-dom';
import Inicio from '../components/Inicio';
import Productos from '../components/Productos';
import Usuarios from '../components/Usuarios';
import Page from '../components/page';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Page />}>
        <Route index element={<Inicio />} />
        <Route path="productos" element={<Productos />} />
        <Route path="usuarios" element={<Usuarios />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;