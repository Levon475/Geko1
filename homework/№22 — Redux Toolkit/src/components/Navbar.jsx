import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ display: 'flex', gap: '20px', padding: '15px', background: '#333', color: '#fff' }}>
     
      <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
      <Link to="/movies" style={{ color: '#f83d3d', textDecoration: 'none' }}>Movies</Link>
      <Link to="/favorites" style={{ color: '#530303', textDecoration: 'none' }}>Favorites</Link>
      
      
    </nav>
  );
}

export default Navbar;