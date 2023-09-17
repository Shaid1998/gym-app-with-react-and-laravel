import React, { Component, Fragment } from 'react'
import { Col, Row } from 'react-bootstrap'
import CImg from '../../Assets/Image/Fac/cardio.jpg'

class Cardio extends Component {
  render() {
    return (
      <Fragment>
        <div className='Personal'> 
          <Row className='PersonalTrain'>
              <Col className='PersonalTrainColumn1' lg={6} md={6} sm={6}>
                  <div className='titlediv'>
                      <h1 className='MainTitile'>CARDIO</h1>
                  </div>
                  <p className='MainDescription'>Get your heart and lungs working with our brand new cardio.  All of them have personal fans to keep you cool and dozens of 72" 4k televisions for your entertainment.  We have them all: Treadmills, stairmills, upright/recumbent/spin bikes, rowers, ellipticals.</p>
              </Col>
              <Col className='PersonalTrainColumn2' lg={6} md={6} sm={6}>
                  <img className='personalImage'  src={CImg} />
              </Col>
          </Row>
        </div>
      </Fragment>
    )
  }
}

export default Cardio