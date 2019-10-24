import React from 'react';
import MovieList from '../components/MovieList';

function Upcoming() {
  const category = "upcoming";
  return (
    <MovieList category={category} />
  )
}

export default Upcoming;