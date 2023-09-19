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
                  <h1 className='WellnessTFTi'>Training Floor</h1>
              </div>
              <div className='WellnessTFDescription'>
                  <p className='WellnessTFDes'>Our fully renovated 25,000 sq.ft. gym provides you all the space you need to enjoy your pursuit of a healthier and happier you! We offer all the brand names from: MATRIX, NAUTILUS, HAMMER, STAIRMASTER, LIFE FITNESS, TORQUE, and more.</p>
              </div>
            </Col>
          </Row>
        </div>
      </Fragment>
    )
  }
}

export default SomeWord