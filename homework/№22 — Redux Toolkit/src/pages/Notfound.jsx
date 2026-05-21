import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <h1 style={{ fontSize: '72px', color: '#f83d3d', margin: 0 }}>404</h1>
      <h2>Page Not Found 🔍</h2>
      <p>Oops! The page you are looking for does not exist.</p>
      <Link to="/" style={{ color: '#f83d3d', fontWeight: 'bold' }}>Go Back Home</Link>
    </div>
  );
}

// Այս տողն էլ ենք ավելացնում
export default NotFound;