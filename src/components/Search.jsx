// import React, { useEffect, useState } from 'react';
// import { fetchMovieBySearch } from 'services/api';
// import { Link, useLocation, useSearchParams } from 'react-router-dom';

// const Search = () => {
//   const [query, setQuery] = useState([]);
//   const location = useLocation;
//   const [searchParams, setSearchParams] = useSearchParams();

//   const hendleSubmit = e => {
//     e.preventDefault;
//     setSearchParams({ query: e.elements.search.value });
//   };
//   setQuery(query);
//   return (
//     <form>
//       <input type="text" placeholder="Find the movie" />
//       <button onClick={hendleSubmit} type="submit">
//         Search
//       </button>
//     </form>
//   );
// };
// export default Search;
