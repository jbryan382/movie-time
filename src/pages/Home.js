// Important Junk
// URL for API Usage: https://developers.themoviedb.org/3/getting-started/introduction
// URL for API Details: https://www.themoviedb.org/settings/api
//
// exampleAPIRequest = 'https://api.themoviedb.org/3/movie/550?api_key=247738650e64acaaf86dc7de0021f7d6'
// v3APIKey = '247738650e64acaaf86dc7de0021f7d6'
// This last one is probably not needed
// v4ReadAccessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNDc3Mzg2NTBlNjRhY2FhZjg2ZGM3ZGUwMDIxZjdkNiIsInN1YiI6IjVjNzlhMzQ0MGUwYTI2MTFkYTEwMjQ5MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.clN9_6vTaHIo6mu-n78B7Hlq7YvvIwczNwWSeyWB-TM'

import React, { Component } from 'react'
// import MovieDetails from '../components/MovieDetails'
import axios from 'axios'

class Home extends Component {
  state = {
    results: [],
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
        'https://api.themoviedb.org/3/movie/now_playing?api_key=247738650e64acaaf86dc7de0021f7d6'
      )
      .then(resp => {
        console.log({ resp })

        this.setState({
          id: resp.data.results.id,
          results: resp.data.results,
          title: resp.data.results[2].title,
          description: resp.data.results[2].overview,
          releaseDate: resp.data.results[2].release_date,
          poster: resp.data.results[2].poster_path
        })
        console.log(this.state)
      })
  }

  render() {
    return (
      <>
        <main>
          {this.state.results.map((movie, i) => {
            console.log(movie)
            return (
              <figure key={i}>
                <h1>{this.state.results[i].title}</h1>
                <h1>{this.state.results[i].release_date}</h1>
                <img src={this.state.results[i].poster_path} alt="" />
                <figcaption>{this.state.results[i].overview}</figcaption>
              </figure>
            )
          })}
        </main>
      </>
    )
  }
}

export default Home

/* <MovieDetails
  title={this.state.title}
  description={this.state.description}
  genre={this.state.genre}
  releaseDate={this.state.releaseDate}
  poster={this.state.poster}
/> */
