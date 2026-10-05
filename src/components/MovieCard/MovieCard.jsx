import LikeButton from '../LikeButton/LikeButton';
import './MovieCard.css';
import { useNavigate } from '../LikeButton/LikeButton';

function MovieCard() {
  return (
    <article className="movie-card">
      <button type="button" className="movie-card__poster-button" aria-label={`Открыть страницу фильма "${movie.Title}"`} onClick={() => navigate(`/movie/${movie.imdbID}`)}>
        {movie.Poster === 'N/A' ? (<span>Постер отсутствует</span>)
        : (
        <img
          className="movie-card__poster"
          src={movie.Poster}
          alt={movie.Title}
        />)}
        <span className="movie-card__type">{Movie.Type}</span>
      </button>

      <div className="movie-card__like">
        <LikeButton />
      </div>

      <div className="movie-card__info">
        <h3 className="movie-card__title" title={movie.Title}>{movie.Title}</h3>
        <p className="movie-card__year">{movie.Year}</p>
      </div>
    </article>
  );
}

export default MovieCard;
