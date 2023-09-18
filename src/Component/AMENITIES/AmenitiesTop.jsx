import React, { Component, Fragment } from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import AVideo from '../../Assets/Video/BackgroundTop.mp4'

class AmenitiesTop extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid={true} className='AmenitiesTop'>
          <video className='AmVideoClass' src={AVideo} autoPlay loop muted />
          <Row className='AmenitiesTopR'>
            <div className='AmTopT'>
              <h1 className='AmTitle'>AMENITIES & SERVICES</h1>
              <h4 className='TTSubTitle'>We have the best amenities in the Port Saint Lucie area. Come in and see it for yourself.</h4>
            </div>
            <div className='AmTopB'>
              <a className='FacilitiesButTop'><Button href='/reg' className='FYB' variant="success" size="huge">JOIN NOW</Button></a>
            </div>
          </Row>
        </Container>
      </Fragment>
    )
  }
}

export default AmenitiesTop