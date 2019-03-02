// Important Junk
// URL for API Usage: https://developers.themoviedb.org/3/getting-started/introduction
// URL for API Details: https://www.themoviedb.org/settings/api
//
// exampleAPIRequest = 'https://api.themoviedb.org/3/movie/550?api_key=247738650e64acaaf86dc7de0021f7d6'
// v3APIKey = '247738650e64acaaf86dc7de0021f7d6'
// This last one is probably not needed
// v4ReadAccessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNDc3Mzg2NTBlNjRhY2FhZjg2ZGM3ZGUwMDIxZjdkNiIsInN1YiI6IjVjNzlhMzQ0MGUwYTI2MTFkYTEwMjQ5MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.clN9_6vTaHIo6mu-n78B7Hlq7YvvIwczNwWSeyWB-TM'

import React, { Component } from 'react'
import Movie from './Movie.js'
import axios from 'axios'

class Home extends Component {
  state = {
    token: '247738650e64acaaf86dc7de0021f7d6',
    title: '',
    description: '',
    genre: '',
    releaseDate: '',
    poster: ''
  }

  componentDidMount() {
    axios
      .get(
        'https://api.themoviedb.org/3/movie/550?api_key=247738650e64acaaf86dc7de0021f7d6'
      )
      .then(resp => {
        console.log({ resp })
        this.setState({
          title: resp.data.title,
          description: resp.data.overview,
          genre: resp.data.genres[0].name,
          releaseDate: resp.data.release_date,
          poster: resp.data.poster_path
        })
      })
  }

  render() {
    return (
      <>
        <Movie
          title={this.state.title}
          description={this.state.description}
          genre={this.state.genre}
          releaseDate={this.state.releaseDate}
          poster={this.state.poster}
        />
      </>
    )
  }
}

export default Home
