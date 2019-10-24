import React from 'react';
import MovieList from '../components/MovieList';

function NowPlaying() {
  const category = "now_playing";
  return (
    <MovieList category={category} />
  )
}

export default NowPlaying;