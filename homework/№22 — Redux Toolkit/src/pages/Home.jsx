import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{ padding: '40px', textAlign: 'center', background: '#1a1a1a', color: '#fff', minHeight: '80vh', borderRadius: '8px', marginTop: '20px' }}>
      <h1>Welcome to MovieApp 🎬</h1>
      <p style={{ fontSize: '18px', color: '#ccc', margin: '20px 0' }}>
        Discover your favorite movies, read details, and create your personal watch list!
      </p>
      
      {/* Կոճակ, որը տանում է ֆիլմերի էջ */}
      <Link to="/movies">
        <button style={{ padding: '12px 25px', fontSize: '16px', background: '#f83d3d', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}>
          Explore Movies 🍿
        </button>
      </Link>
    </div>
  );
}

// ՍԱ ԱՆՊԱՅՄԱՆ ՊԵՏՔ Է ԼԻՆԻ, ՈՐ ԷԼ Error ՉՏԱ
export default Home;