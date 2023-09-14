import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Img1 from '../../Assets/Image/PSlider6.jpg'
import Img2 from '../../Assets/Image/PSlider3.jpg'

class TurfZone extends Component {
    render() {
        return (
            <Fragment> 

                <div className='Turf'> 
                    <Row className='TurfZone'>
                        <Col className='TurfColumn1' lg={6} md={6} sm={6}>
                            <div className='ExpTitlediv'>
                                <h1 className='TurfTitile'>THE</h1>
                                <h1 className='TurfTitile2'>TURF</h1>
                                <h1 className='TurfTitile3'>ZONE</h1>
                            </div>
                            <p className='TurfMainDes'>The perfect place to knock out those athletic workouts, take content, or use the TANK.</p>
                        </Col> 
                        <Col className='TurfColumn2' lg={6} md={6} sm={6}>
                            <Row className='MIddleRow'>
                                <Col lg={6} md={6} sm={6}>
                                    <img className='TurfImg1' src={Img1}  />
                                </Col>
                                <Col lg={6} md={6} sm={6}>
                                    <img className='TurfImg2' src={Img2}  />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </Fragment>
        )
    }
}

export default TurfZone