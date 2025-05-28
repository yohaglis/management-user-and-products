import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      padding: '1rem 2rem', 
      background: '#282c34', 
      color: '#fff' 
    }}>
      <div style={{ display: 'flex', alignItems: 'center', fontWeight: 'bold', fontSize: '1.5rem' }}><img height="60" width="60" src="src/assets/logo.webp" alt="" /> GestionUP</div>
      <ul style={{ display: 'flex', listStyle: 'none', gap: '1.5rem', margin: 0, padding: 0 }}>
        <li><Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Inicio</Link></li>
        <li><Link to="/usuarios" style={{ color: '#fff', textDecoration: 'none' }}>Usuarios</Link></li>
        <li><Link to="/productos" style={{ color: '#fff', textDecoration: 'none' }}>Productos</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;