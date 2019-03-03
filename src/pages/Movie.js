import React, { Component } from 'react'
import MovieDetails from '../components/MovieDetails'
import axios from 'axios'

class Movie extends Component {
  state = {
    title: '',
    description: '',
    releaseDate: '',
    poster: '',
    id: '',
    cast: []
  }

  componentDidMount() {
    const APIkey = Object.keys(this.state.id)
    console.log(APIkey)
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${
          this.props.match.params.movie
        }?api_key=247738650e64acaaf86dc7de0021f7d6`
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
        console.log({ resp })

        this.setState({
          cast: resp.data.cast
        })
        console.log(this.state.cast[1].name)
      })
  }

  render() {
    return (
      <>
        <MovieDetails
          title={this.state.title}
          description={this.state.description}
          genre={this.state.genre}
          releaseDate={this.state.releaseDate}
          poster={`https://image.tmdb.org/t/p/original${this.state.poster}`}
          // cast={this.state.cast.name}
        />
        <ul>
          {this.state.cast.map((cast, i) => {
            console.log(cast)
            return <li key={i}>{this.state.cast[i].name}</li>
          })}
        </ul>
      </>
    )
  }
}
export default Movie
