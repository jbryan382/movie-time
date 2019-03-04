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
import { Link } from 'react-router-dom'

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
        'https://api.themoviedb.org/3/movie/now_playing?api_key=247738650e64acaaf86dc7de0021f7d6&append_to_response=images'
      )
      .then(resp => {
        console.log({ resp })

        this.setState({
          results: resp.data.results
        })
        console.log(this.state)
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
              <section key={i} className="individualBacks">
                <figure>
                  <Link to={`/${this.state.results[i].id}`}>
                    <h2>{this.state.results[i].title}</h2>
                    <section className="outerBorder">
                      <section className="dottedBorder">
                        <img
                          src={`https://image.tmdb.org/t/p/original${
                            this.state.results[i].poster_path
                          }`}
                          alt=""
                        />
                      </section>
                    </section>
                  </Link>
                </figure>
                <section>
                  <figcaption>{this.state.results[i].overview}</figcaption>
                  <h3>{this.state.results[i].release_date}</h3>
                </section>
              </section>
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
