import React, { Component } from 'react'
import MovieDetails from '../components/MovieDetails'
class Movie extends Component {
  render() {
    return (
      <MovieDetails
        title={this.state.title}
        description={this.state.description}
        genre={this.state.genre}
        releaseDate={this.state.releaseDate}
        poster={this.state.poster}
      />
    )
  }
}
export default Movie
