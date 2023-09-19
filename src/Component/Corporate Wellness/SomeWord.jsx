import React, { Component, Fragment } from 'react'
import { Col, Row } from 'react-bootstrap'
import WImg from '../../Assets/Image/CustomerService/Some.jpg'

class SomeWord extends Component {
  render() {
    return (
      <Fragment>
        <div className='WellnessSome'>
          <Row className='WellnessRoW'>
            <Col className='WellnessCOl1' lg={6} md={6} sm={6}>
              <div>
                <img className='WellnessImgTF'  src={WImg} />
              </div>
            </Col>
            <Col className='WellnessCol2' lg={6} md={6} sm={6}>
              <div className='WellnessFloorT'>
                  <h1 className='WellnessTFTi'>A HEALTHY COMPANY IS ALL ABOUT HEALTHY EMPLOYEES</h1>
              </div>
              <div className='WellnessTFDescription'>
                  <p className='WellnessTFDes'>We know that at Companies, people understand the importance of exercise, health and fitness in order to increase immunity, have higher energy levels and reduce stress.</p>
                  <p className='WellnessTFDes'>At 1GYM, we help companies develop strong health and wellness programs to bring mental and physical health to employees helping them increase their productivity in a smart way.</p>
              </div>
            </Col>
          </Row>
        </div>
      </Fragment>
    )
  }
}

export default SomeWord