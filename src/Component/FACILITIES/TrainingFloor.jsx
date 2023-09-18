import React, { Component, Fragment } from 'react'
import { Col, Row } from 'react-bootstrap'
import TImg from '../../Assets/Image/Fac/Floor.jpg'

class TrainingFloor extends Component {
  render() {
    return (
      <Fragment>
        <div className='TrainFloor'>
          <Row className='TrainRoW'>
            <Col className='COl1' lg={6} md={6} sm={6}>
              <div>
                <img className='ImgTF'  src={TImg} />
              </div>
            </Col>
            <Col className='Col2' lg={6} md={6} sm={6}>
              <div className='FloorT'>
                  <h1 className='TFTi'>Training Floor</h1>
              </div>
              <div className='TFDescription'>
                  <p className='TFDes'>Our fully renovated 25,000 sq.ft. gym provides you all the space you need to enjoy your pursuit of a healthier and happier you! We offer all the brand names from: MATRIX, NAUTILUS, HAMMER, STAIRMASTER, LIFE FITNESS, TORQUE, and more.</p>
              </div>
            </Col>
          </Row>
        </div>
      </Fragment>
    )
  }
}

export default TrainingFloor