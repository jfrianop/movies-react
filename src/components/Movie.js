import React, { Component } from 'react';
import './Movie.css';


class Movie extends Component {

  render() {
    return (
      <div className="movie-card" key={this.props.info.id}>
        <img src={"https://image.tmdb.org/t/p/w200" + this.props.info.img} alt="Poster" className="card-img" />
        <div className="card-info">
          <div className="card-title">
            <h3>{this.props.info.title}</h3>
            <h3>{this.props.info.score}</h3>
          </div>
          <div className="card-tags">
            <div className="card-time">{this.props.info.duration}</div>
            <div className="card-divider"></div>
            <div className="card-date">{this.props.info.date}</div>
            <div className="card-divider"></div>
            <div className="card-genre">{this.props.info.genre}</div>
          </div>
          <p className="card-description">{this.props.info.description}</p>
          <div className="card-buttons">
            <button className="card-trailer" movie-id={this.props.info.id}>Ver Trailer</button>
            <a href="/#" className="card-addFavorite" movie-id={this.props.info.id}>Agregar a favoritos <i className="fas fa-heart"></i></a>
          </div>
        </div>
      </div>
    )
  }
}

export default Movie;