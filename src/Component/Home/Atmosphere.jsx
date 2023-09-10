import React, { Component, Fragment } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import PSlider1 from '../../Assets/Image/PSlider1.jpg'

class Atmosphere extends Component {
    render() {
        return (
            <Fragment>
                <div className='Atmosphere'> 
                    <Row className='atom'>
                        <Col className='atmColumn2' lg={6} md={6} sm={6}>
                            <img className='atmimage' src={PSlider1}  />
                        </Col>
                        <Col className='atmColumn1' lg={6} md={6} sm={6}>
                            
                            <div className='atmtitlediv'>
                                <h1 className='atmMainTitile'>ATMOSPHERE</h1>
                                <h5 className='atmMainDescription'>Our members tell us that they love our gym and the competitive atmosphere to be better. We are a gym for people that are serious about their health and fitness. Our gym is almost at capacity for monthly members because we want to make sure we don't get overcrowded.</h5>
                            </div>
                            <div className='buttonClass'>
                                <Button className='btn btn-primary JoinButton'>START YOUR JOURNEY</Button>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Fragment>
        )
    }
}

export default Atmosphere