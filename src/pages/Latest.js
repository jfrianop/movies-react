import React from 'react';
import MovieList from '../components/MovieList';

function Latest() {
  const category = "latest";
  return (
    <MovieList category={category} />
  )
}

export default Latest;