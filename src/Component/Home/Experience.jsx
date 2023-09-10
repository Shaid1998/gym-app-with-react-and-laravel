import React, { Component, Fragment } from 'react'
import { Col, Row } from 'react-bootstrap'
import PSlider4 from '../../Assets/Image/PSlider4.jpg'

class Experience extends Component {
    render() {
        return (
            <Fragment>
                <div className='Experience' fluid={true}> 
                    <Row className='Experiencesec'>
                        <Col className='ExpColumn1' lg={6} md={6} sm={6}>
                            <div className='ExpTitlediv'>
                                <h1 className='ExpTitile'>THE</h1>
                                <h1 className='ExpTitile2'>1GYM </h1>
                                <h1 className='ExpTitile3'>EXPERIENCE </h1>
                            </div>
                            <p className='ExpMainDes'>Cleanliness & Friendliness, Guaranteed. Fitness nGo carries the latest and greatest cardio and strength training equipment available, exciting nGo classes, Personal Training, Tanning, Cryo-Therapy, Hydromassage, Kids Club, and the greatest atmosphere in the city.</p>
                        </Col>
                        <Col className='ExpColumn2' lg={6} md={6} sm={6}>
                            <img className='ExpPersonalImg' src={PSlider4}  />
                        </Col>
                    </Row>
                </div>
            </Fragment>
        )
    }
}

export default Experience