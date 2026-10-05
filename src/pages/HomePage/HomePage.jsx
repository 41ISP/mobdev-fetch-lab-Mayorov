import SearchBar from '../../components/SearchBar/SearchBar';
import MovieList from '../../components/MovieList/MovieList';
import './HomePage.css';
import { useState } from 'react';
import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/SearchBar/SearchBar';

function HomePage() {
  const [query, setQuery] = useState(''); 
  const [movies, setMovies] = useState([]);
  const [isLouder, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  asuns function searchMovies() {
    setError(null);
    setIsLoading(true);

    try {
      const response = await fetch(
      `https://www.omdbapi.com/?apikey=${import.meta.env
      .VITE_OMDB_API_KEY}&s=${encodeURIComponent(query)}`,);

      const data = await response.json();

      if (data.Response === 'False') {
        setError(data.Error);
      } else {
        setMovies(data.Search);
      }
    } catch {
      setError('Не удалось связаться с сервером');
    } finally {
      setIsLouding(false);
    }
  }

  return (
    <main className="home-page">
      <div className="container home-page__inner">
        <SearchBar query={query} onQueryChange={setQuery} onSumbit={serchMovies}/>

        <section className="home-page__section">
          <h2 className="home-page__section-title">Результат поиска</h2>
          {isLoading ? ( <Loader />):
          error ? (<ErrorMessage massage={error} />):
          (<MovieList movies={movies} />)
          }
        </section>
      </div>
    </main>
  );
}

export default HomePage;
