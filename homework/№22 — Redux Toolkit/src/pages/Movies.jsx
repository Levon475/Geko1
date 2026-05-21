// Ներմուծում ենք ֆիլմերը և քարտը
import { movies } from '../data/movies';
import MovieCard from '../components/MovieCard';

function Movies() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>All Movies</h2>
      
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {/* .map()-ով պտտվում ենք ֆիլմերի վրայով */}
        {movies.map((movie) => (
          <MovieCard 
            key={movie.id} 
            id={movie.id}
            title={movie.title}
            year={movie.year}
            image={movie.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Movies;