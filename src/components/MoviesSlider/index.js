// Write your code here
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const {moviesSliderListAction} = props
  const settings = {
    dots: false,
    slidesToScroll: 1,
    slidesToShow: 4,
  }
  return (
    <>
      <Slider {...settings}>
        {moviesSliderListAction.map(eachPlanet => (
          <MovieItem key={eachPlanet.id} movieDetails={eachPlanet} />
        ))}
      </Slider>
    </>
  )
}

export default MoviesSlider
