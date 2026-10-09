import MovieDetails from '../../components/MovieDetails/MovieDetails';
import './MovieDetailsPage.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

function MovieDetailsPage() {
  const { imdbID } = useParams();

  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    async function loadMovie() {
      setError(null);
      setIsLoading(true);

      try {
        const response = await fetch(`https://www.omdbapi.com/?apikey=${import.meta.env.VITE_OMDB_API_KEY}&i=${encodeURIComponent(imdbID)}`,);

        const data = await response.json();

        if (data.Response === 'False') {
          setError(data.Error);
        } else {
          setMovie(data);
        }
      } catch {
        setError('Не удалось связаться с сервером');
      } finally {
        setIsLoading(False);
      }
    }

      loadMovie();
    }, [imdbID] );

  return (
    <main className="movie-details-page">
      <div className="container">
        {isLoading ? (
          <Loader />
        ) : error ? (
          <ErrorMessage message={error} />
        ) : movie && (
          <MovieDetails movie={movie} />
        )}
      </div>
    </main>
  );
}

export default MovieDetailsPage;
