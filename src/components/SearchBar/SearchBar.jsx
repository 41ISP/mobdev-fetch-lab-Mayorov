import './SearchBar.css';

function SearchBar({ query, onQueryChange, onSubmit }) {
  return (
    <form className="search-bar" onSubmit={(event) => {event.precentDefult(); onSubmit(); }}>
      
      <span className="search-bar__eyebrow">Найти фильм или сериал</span>
      
      <div className="search-bar__row">
        <input
          type="text"
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
          className="search-bar__input"
          placeholder="Например: Joker, Interstellar, Dune…"
        />
        <button type="button" className="search-bar__button">Искать</button>
      </div>
    </form>
  );
}

export default SearchBar;
