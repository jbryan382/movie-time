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
          results: resp.data.results
          // These States might not be needed until later
          // id: resp.data.results.id,
          // poster: resp.data.results[2].poster_path
          // title: resp.data.results[2].title,
          // description: resp.data.results[2].overview,
          // releaseDate: resp.data.results[2].release_date,
        })
        console.log(this.state)
      })
  }

  // The rest of the site is fine. This is currently extremely broken... tried to call the api using the posterpath
  // and trying to assign ID somewhere so the correct Poster loads. I don't know if thats the correct logic to follow
  // the API get from image is annoying.

  getPoster = (pPath, pID) => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${pID}${pPath}?api_key=247738650e64acaaf86dc7de0021f7d6`
      )
      .then(resp => {
        console.log({ resp })
        // We need to return something back into the src for the poster so it shows.
        // resp is a placeholder
      })
  }

  render() {
    return (
      <>
        <main>
          <header>
            <h1>New And Should Be At A Theatre Near You!</h1>
          </header>
          {this.state.results.map((movie, i) => {
            console.log(movie)
            return (
              <figure key={i}>
                <h2>{this.state.results[i].title}</h2>
                <img
                  // Tried using the API URL with poster path added and it didn't like it due to no axios request
                  // Now trying to call a function that returns the poster image from a Axios request.
                  // Like I said I might be going about this the wrong way feel free to try something else.
                  src={this.getPoster(
                    this.state.results[i].poster_path,
                    this.state.results[i].id
                  )}
                  alt=""
                />
                <figcaption>{this.state.results[i].overview}</figcaption>
                <h3>{this.state.results[i].release_date}</h3>
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
