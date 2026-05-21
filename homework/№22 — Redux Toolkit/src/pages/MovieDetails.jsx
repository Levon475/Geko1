import { useParams } from 'react-router-dom';
import { movies } from '../data/movies';
// 1. Ներմուծում ենք Redux Toolkit-ի գործիքները
import { useDispatch } from 'react-redux';
import { addFavorite } from '../favoritesSlice.js'; // Մեր սարքած սլայսը (որը src-ի մեջ է)

function MovieDetails() {
  const { id } = useParams();
  const dispatch = useDispatch(); // Պատրաստում ենք dispatch-ը

  // Գտնում ենք համապատասխան ֆիլմը ըստ ID-ի
  const movie = movies.find((m) => m.id === Number(id));

  if (!movie) {
    return <h2>Movie not found!</h2>;
  }

  // Ֆունկցիա, որը կաշխատի կոճակին սեղմելիս
  const handleAddToFavorites = () => {
    dispatch(addFavorite(movie)); // Ֆիլմի տվյալները ուղարկում ենք Redux
    alert(`${movie.title} added to favorites! 🎉`);
  };

  return (
    <div style={{ padding: '20px', display: 'flex', gap: '30px', color: '#fff', background: '#222', borderRadius: '8px', marginTop: '20px' }}>
      <img src={movie.image} alt={movie.title} style={{ width: '300px', borderRadius: '8px' }} />
      <div>
        <h2>{movie.title}</h2>
        <p><strong>Year:</strong> {movie.year}</p>
        <p><strong>Rating:</strong> ⭐ {movie.rating}</p>
        <p><strong>Description:</strong> {movie.description}</p>
        
        {/* ԱՀԱ ԱՅՍ ԿՈՃԱԿՆ ԷՐ ՊԱԿԱՍՈՒՄ */}
        <button 
          onClick={handleAddToFavorites}
          style={{ padding: '12px 25px', background: '#f83d3d', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', marginTop: '15px', fontWeight: 'bold' }}
        >
          ❤️ Add to Favorites
        </button>
      </div>
    </div>
  );
}

export default MovieDetails;