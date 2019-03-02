import React, { Component } from 'react'

class MovieDetails extends Component {
  render() {
    return (
      <>
        <figure>
          <h1>{this.props.title}</h1>
          <h1>{this.props.releaseDate}</h1>
          <img src={this.props.poster} alt="" />
          <figcaption>{this.props.description}</figcaption>
        </figure>
      </>
    )
  }
}

export default MovieDetails
