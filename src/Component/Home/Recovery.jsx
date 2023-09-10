import React, { Component, Fragment } from 'react'
import { Col, Row } from 'react-bootstrap'
import PSlider5 from '../../Assets/Image/PSlider5.jpg'

class Recovery extends Component {
  render() {
    return (
        <Fragment>
            <div className='Recovery'> 
                <Row className='RecRowClass'>
                    <Col className='RecColumn2' lg={6} md={6} sm={6}>
                        <img className='RecPersonalImg' src={PSlider5}  />
                    </Col>
                    <Col className='RecColumn1' lg={6} md={6} sm={6}>
                        <div className='ExpTitlediv'>
                            <h1 className='RecTitile'>THE</h1>
                            <h1 className='RecTitile2'>1GYM </h1>
                            <h1 className='RecTitile3'>EXPERIENCE </h1>
                        </div>
                        <p className='RecMainDes'>Cleanliness & Friendliness, Guaranteed. Fitness nGo carries the latest and greatest cardio and strength training equipment available, exciting nGo classes, Personal Training, Tanning, Cryo-Therapy, Hydromassage, Kids Club, and the greatest atmosphere in the city.</p>
                    </Col>
                </Row>
            </div>
      </Fragment>
    )
  }
}

export default Recovery