import React, { Component, Fragment } from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import { Row } from 'react-bootstrap'
import Slider1 from '../../Assets/Image/Slider1.jpg'
import Slider2 from '../../Assets/Image/Slider2.jpg'
import Slider3 from '../../Assets/Image/Slider3.jpg'
import Slider4 from '../../Assets/Image/Slider4.jpg'
import Slider5 from '../../Assets/Image/Slider5.jpg'
import Slider6 from '../../Assets/Image/Slider6.jpg'


class HomeTop extends Component {
  render() { 
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <Fragment>
        <div className='AllTop'>
          <Row>
            <Slider {...settings}>
              <div>
                <img className="slider-img" src={Slider1} />
              </div>
              <div>
                <img className="slider-img" src={Slider2} />
              </div>
              <div>
                <img className="slider-img" src={Slider3} />
              </div>
              <div>
                <img className="slider-img" src={Slider4} />
              </div>
              <div>
                <img className="slider-img" src={Slider5} />
              </div>
              <div>
                <img className="slider-img" src={Slider6} />
              </div>
            </Slider>
          </Row>
        </div>
      </Fragment>
    )
  }
}

export default HomeTop