import React, { Component } from 'react'
import MovieDetails from '../components/MovieDetails'
import axios from 'axios'

class Movie extends Component {
  state = {
    title: '',
    description: '',
    releaseDate: '',
    poster: '',
    id: ''
  }

  componentDidMount() {
    const APIkey = Object.keys(this.state.id)
    console.log(APIkey)
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${
          this.props.match.params.movie
        }?api_key=247738650e64acaaf86dc7de0021f7d6&append_to_response=images`
      )
      .then(resp => {
        console.log({ resp })

        this.setState({
          title: resp.data.original_title,
          description: resp.data.overview,
          releaseDate: resp.data.release_date,
          poster: resp.data.poster_path
        })
        console.log(this.state)
      })
    this.getCast()
  }
  //this is a pointless comment
  getCast = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${
          this.props.match.params.movie
        }/credits?api_key=247738650e64acaaf86dc7de0021f7d6`
      )
      .then(resp => {
        console.log(resp)
      })
  }

  render() {
    return (
      <MovieDetails
        title={this.state.title}
        description={this.state.description}
        genre={this.state.genre}
        releaseDate={this.state.releaseDate}
        poster={`https://image.tmdb.org/t/p/original${this.state.poster}`}
      />
    )
  }
}
export default Movie
