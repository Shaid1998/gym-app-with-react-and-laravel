import React, { Component, Fragment } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import PSlider1 from '../../Assets/Image/PSlider2.jpg'
import video from '../../Assets/Video/BackgroundTop.mp4'

class WhyUs extends Component {
    render() {
        return (
            <Fragment>
                <div className='WhyPersonal' > 
                    <video className='VideoClass' autoPlay loop muted>
                        <source src={video} type='video/mp4' />
                    </video>
                    <Row className='WhyPersonalTrain'>
                        <Col className='WhyColumn2' lg={6} md={6} sm={6}>
                            <img className='image' src={PSlider1}  />
                        </Col>
                        <Col className='WhyColumn1' lg={6} md={6} sm={6}>
                            
                            <div className='whytitlediv'>
                                <h1 className='WhyMainTitile'>WHY 1GM ?</h1>
                                <h5 className='WHYMainDescription'>Luxury Gym Experience Everyone Can Afford.</h5>
                            </div>
                            <div className='whymenudiv'>
                               <h4 className='WhyMenu'><i class="fa fa-check checkSet" aria-hidden="true"></i>Super Clean</h4> 
                               <h4 className='WhyMenu'><i class="fa fa-check checkSet" aria-hidden="true"></i>Friendly Staff</h4> 
                               <h4 className='WhyMenu'><i class="fa fa-check checkSet" aria-hidden="true"></i>Workout & Recover</h4> 
                               <h4 className='WhyMenu'><i class="fa fa-check checkSet" aria-hidden="true"></i>Motivating Atmosphere</h4> 
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

export default WhyUs