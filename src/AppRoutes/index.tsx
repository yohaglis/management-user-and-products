import { Routes, Route } from 'react-router-dom';
import Layout from '../components/page/Layout';
import Inicio from '../components/page/Layout/Components/Inicio';
import Productos from '../components/page/Productos';
import Usuarios from '../components/page/Usuarios';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Inicio />} />
        <Route path="productos" element={<Productos />} />
        <Route path="usuarios" element={<Usuarios />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;