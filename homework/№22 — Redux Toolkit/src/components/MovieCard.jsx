import { Link } from 'react-router-dom';

function MovieCard({ id, title, image, year }) {
  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '10px', width: '200px', textAlign: 'center' }}>
      <img src={image} alt={title} style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '4px' }} />
      <h3>{title}</h3>
      <p>{year}</p>
      {/* Կոճակ, որը մեզ կտանի այդ ֆիլմի առանձին էջը՝ օրինակ /movies/1 */}
      <Link to={`/movies/${id}`}>
        <button style={{ padding: '8px 12px', cursor: 'pointer' }}>Details</button>
      </Link>
    </div>
  );
}

export default MovieCard;