/* eslint-disable react/react-in-jsx-scope */
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
      <div style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>GestionUP</div>
      <ul style={{ display: 'flex', listStyle: 'none', gap: '1.5rem', margin: 0, padding: 0 }}>
        <li><a href="/" style={{ color: '#fff', textDecoration: 'none' }}>Inicio</a></li>
        <li><a href="/usuarios" style={{ color: '#fff', textDecoration: 'none' }}>Usuarios</a></li>
        <li><a href="/productos" style={{ color: '#fff', textDecoration: 'none' }}>Productos</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;