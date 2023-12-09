// Write your code here

import MoviesSlider from '../MoviesSlider'
import './index.css'

const actionMovie = 'ACTION'
const comedyMovie = 'COMEDY'

const PrimeVideo = props => {
  const {moviesList} = props

  const updatedActionMovie = moviesList.filter(
    eachMovie => eachMovie.categoryId === actionMovie,
  )

  const updatedComedyMovie = moviesList.filter(
    eachMovie => eachMovie.categoryId === comedyMovie,
  )

  return (
    <div className="bg-container">
      <img
        className="prime-video-image"
        alt="prime video"
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
      />
      <div className="movies-container">
        <h1 className="action-heading">Action Movies</h1>
        <MoviesSlider moviesSliderListAction={updatedActionMovie} />
        <h1 className="action-heading">Comedy Movies</h1>
        <MoviesSlider moviesSliderListAction={updatedComedyMovie} />
      </div>
    </div>
  )
}

export default PrimeVideo
