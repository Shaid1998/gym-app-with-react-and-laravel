import React, { Component, Fragment } from 'react'
import { Col, Row } from 'react-bootstrap'
import CImg from '../../Assets/Image/Fac/cardio.jpg'

class Cardio extends Component {
  render() {
    return (
      <Fragment>
        <div className='Cardio'> 
          <Row className='CarRo'>
              <Col className='CCOL1' lg={6} md={6} sm={6}>
                  <div className='CATitle'>
                      <h1 className='CaTiTle'>CARDIO</h1>
                  </div>
                  <p className='CaDes'>Get your heart and lungs working with our brand new cardio.  All of them have personal fans to keep you cool and dozens of 72" 4k televisions for your entertainment.  We have them all: Treadmills, stairmills, upright/recumbent/spin bikes, rowers, ellipticals.</p>
              </Col>
              <Col className='CCOL2' lg={6} md={6} sm={6}>
                  <img className='CaIMg'  src={CImg} />
              </Col>
          </Row>
        </div>
      </Fragment>
    )
  }
}

export default Cardio