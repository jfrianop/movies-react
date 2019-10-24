import React, { Component } from 'react';
import axios from 'axios';

import Movie from '../components/Movie';


const MoviesAPI = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  timeout: 1000
})

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }
  async componentDidMount() {

    this.setState({
      loading: true
    });

    try {
      const movies = await MoviesAPI.get(`movie/${this.props.category}?page=1&language=en-US&api_key=3d7fd0461ae8d0f2e808c37fb41950d7`);
      console.log("movies.data", movies.data);
      
      const promises = await movies.data.results.map(async ({ id }) => {
        const movie = await MoviesAPI.get("movie/" + id + "?language=en-US&api_key=3d7fd0461ae8d0f2e808c37fb41950d7");
        return movie.data;
      });
      const data = await Promise.all(promises);
      console.log("Data: ", data)
      this.setState({ data });
    } catch (error) {
      console.log(error);
      this.setState({ error });
    } finally {
      this.setState({
        loading: false
      })
    }
  }

  render() {
    let data = this.state.data;
    return !this.state.loading ? (
      <div className="card-container">
        {data.map(movie => {
          let getInfo = (movie) => ({
            img: movie.poster_path, title: movie.title,
            score: movie.vote_average, duration: movie.runtime,
            date: movie.release_date, genre: movie.genres[0].name,
            description: movie.overview, id: movie.id
          });
          return (<Movie info={getInfo(movie)} key={movie.id} />)
        })}
      </div>
    ) : <h1>Espere</h1>
  }
}

export default MovieList;