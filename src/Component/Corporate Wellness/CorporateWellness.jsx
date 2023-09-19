import React, { Component, Fragment } from 'react'
import { Col, Row } from 'react-bootstrap'
import CWImg from '../../Assets/Image/CustomerService/Wellness.jpg'

class CorporateWellness extends Component {
  render() {
    return (
      <Fragment>
        <div className='CorporateWellness'> 
          <Row className='CorporateCarRo'>
              <Col className='CorporateCCOL1' lg={6} md={6} sm={6}>
                  <div className='CorporateCATitle'>
                      <h1 className='CorporateCaTiTle'>CARDIO</h1>
                  </div>
                  <p className='CorporateCaDes'>Get your heart and lungs working with our brand new cardio.  All of them have personal fans to keep you cool and dozens of 72" 4k televisions for your entertainment.  We have them all: Treadmills, stairmills, upright/recumbent/spin bikes, rowers, ellipticals.</p>
              </Col>
              <Col className='CorporateCCOL2' lg={6} md={6} sm={6}>
                  <img className='CorporateCaIMg'  src={CWImg} />
              </Col>
          </Row>
        </div>
      </Fragment>
    )
  }
}

export default CorporateWellness