import React from 'react';
import MovieList from '../components/MovieList';

function Populars() {
  const category = "popular";
  return (
    <MovieList category={category} />
  )
}

export default Populars;