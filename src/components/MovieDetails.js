import React, { Component } from 'react'

class MovieDetails extends Component {
  render() {
    return (
      <>
        <figure className="detailsfigure">
          <h1>{this.props.title}</h1>
          <h1>{this.props.releaseDate}</h1>
          <span>
            <img className="details" src={this.props.poster} alt="" />
            <figcaption>{this.props.description}</figcaption>
          </span>
        </figure>
      </>
    )
  }
}

export default MovieDetails
