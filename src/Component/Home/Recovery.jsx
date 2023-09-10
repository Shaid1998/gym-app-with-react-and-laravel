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
                            <h1 className='RecTitile2'>BEST</h1>
                            <h1 className='RecTitile3'>RECOVERY</h1>
                        </div>
                        <p className='RecMainDes'>Our ultimate tier membership gives you the best recovery equipment in Port Saint Lucie. The hydromassage and Cryo chairs alone are worth the becoming a member. </p>
                    </Col>
                </Row>
            </div>
      </Fragment>
    )
  }
}

export default Recovery