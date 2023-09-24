import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AbImg from '../../Assets/Image/About/goalAndMission.jpg'

class About extends Component {
  render() {
    return (
        <Fragment>
            <Row className='About'>
                <Col lg={12} md={12} sm={12}>
                    <Row className='TopRow12'>
                        <div>
                            <h1 className='WelcomT'>Welcome to the 1GYM Experience</h1>
                        </div>
                    </Row>
                    <Row>
                        <Col className='ACl' lg={6} md={6} sm={6}>
                            <img className='AboutImg' src={AbImg} />
                        </Col>
                        <Col className='AC2' lg={6} md={6} sm={6}>
                            <h1 className='AboutTitle'>Our Mission & Concept</h1>
                            <h4 className='AboutDes'>Our concept is simple. Provide our local communities with the most motivating fitness environment possible.  As a valued member, you will receive the cleanest facilities with the friendliest staff guaranteed.  No matter your gym experience or level of fitness, you will find our atmosphere welcoming and inspiring. Our mission is to ultimately help you achieve your end goal. </h4>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Fragment>
    )
  }
}

export default About