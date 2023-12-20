import React, { useState } from 'react';

const Search = ({ setQuery }) => {
  const [search, setSearch] = useState([]);

  const hendleSubmit = e => {
    e.preventDefault();
    setQuery(search);
  };
  return (
    <form onSubmit={hendleSubmit}>
      <input
        style={{ bpadding: '5px', borderRadius: '4px' }}
        required
        type="text"
        placeholder="Find the movie"
        name="search"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <button
        type="submit"
        style={{
          background: '#dcf08d',
          borderRadius: '4px',
          border: '0',
          boxShadow: 'inset 0 0 5px #000000',
        }}
      >
        Search
      </button>
    </form>
  );
};
export default Search;
