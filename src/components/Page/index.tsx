

import { Outlet } from 'react-router-dom';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';

function Page() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <main style={{ flex: 1, padding: '2rem', background: '#646cff' }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Page;