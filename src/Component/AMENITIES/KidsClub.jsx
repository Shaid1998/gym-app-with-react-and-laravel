import React, { Component, Fragment } from 'react'
import { Col, Row } from 'react-bootstrap'
import AVideo from '../../Assets/Video/BackgroundTop.mp4'

class KidsClub extends Component {
  render() {
    return (
      <Fragment>
        <div className='Kids'> 
          <Row className='KidsRo'>
              <Col className='KidCol1' lg={6} md={6} sm={6}>
                  <div className='KidTitle'>
                      <h1 className='KidTiTle'>CARDIO</h1>
                  </div>
                  <p className='KidDes'>Get your heart and lungs working with our brand new cardio.  All of them have personal fans to keep you cool and dozens of 72" 4k televisions for your entertainment.  We have them all: Treadmills, stairmills, upright/recumbent/spin bikes, rowers, ellipticals.</p>
              </Col>
              <Col className='KidCol2' lg={6} md={6} sm={6}>
                <video className='KidVideoClass' src={AVideo} autoPlay loop muted />
              </Col>
          </Row>
        </div>
      </Fragment>
    )
  }
}

export default KidsClub