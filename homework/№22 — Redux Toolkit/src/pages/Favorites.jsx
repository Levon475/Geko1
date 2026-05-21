import { useSelector } from 'react-redux';
import MovieCard from '../components/MovieCard';

function Favorites() {
  // Ուշադիր նայիր այս տողին. կարդում ենք Redux-ի սթեյթը
  const favoriteMovies = useSelector((state) => state.favorites?.items || []);

  return (
    <div style={{ padding: '20px', color: '#fff' }}>
      <h2>My Favorite Movies ❤️</h2>
      
      {favoriteMovies.length === 0 ? (
        <p>Your favorites list is empty. Go add some movies!</p>
      ) : (
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          {favoriteMovies.map((movie) => (
            <MovieCard 
              key={movie.id} 
              id={movie.id}
              title={movie.title}
              year={movie.year}
              image={movie.image}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;