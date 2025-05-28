
import { Outlet } from 'react-router-dom';
import Navbar from '../Layout/Components/Navbar';

function Layout() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <main style={{ flex: 1, padding: '2rem', background: '#646cff' }}>
        <Outlet />
      </main>
      <footer style={{ background: '#282c34', color: '#fff', textAlign: 'center', padding: '1rem 0' }}>
        © 2025 GestionUP. Todos los derechos reservados.
      </footer>
    </div>
  );
}

export default Layout;