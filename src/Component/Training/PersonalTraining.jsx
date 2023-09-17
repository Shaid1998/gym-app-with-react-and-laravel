import React, { Component, Fragment } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import PTrain from '../../Assets/Image/Training/PTPG.jpg'
import PTraint from '../../Assets/Image/Training/PT.jpg'

class PersonalTraining extends Component {
  render() {
    return (
        <Fragment>
            <Row className='R1'>
                <div className='TrDescription'>
                    <h4>Become Fitter, Stronger, & More Confident!</h4>
                </div>
                <div className='TrDescription'>
                    <a className='PTrainButTop'><Button href='/personaltraining' variant="success" size="huge">JOIN NOW</Button></a>
                </div>
            </Row>
            <Row className='R2'>
                <Col className='CC2' lg={6} md={6} sm={6}>
                    <Form className='Formt'>
                        <div className='form-group'>
                            <h2 className='FormValuTitilet'>First Name<a className='ImportantSign'>*</a></h2>
                            <input type="text" placeholder='First Name' className='form-controlt' />
                        </div>
                        <div className='form-group'>
                            <h2 className='FormValuTitilet'>Last Name</h2>
                            <input type="text" placeholder='Last Name' className='form-controlt' />
                        </div>
                        <div className='form-group'>
                            <h2 className='FormValuTitilet'>Email Address<a className='ImportantSign'>*</a></h2>
                            <input type="email" placeholder='Email Address' className='form-controlt' />
                        </div>
                        <div className='form-group'>
                            <h2 className='FormValuTitilet'>Call NUmber<a className='ImportantSign'>*</a></h2>
                            <input type="phone" placeholder='Call Number' className='form-controlt' />
                        </div>
                        <div className='btncl'>
                          <button className='btn btn-secondary btnCt'>Subscribe</button>
                        </div>
                    </Form>
                </Col>
                <Col className='CC1' lg={6} md={6} sm={6}>
                    <div>
                        <img className='pTIMG' src={PTrain} />
                    </div>
                </Col>
            </Row>
            <Row className='R3'>
                <Col className='C1' lg={6} md={6} sm={6}>
                    <div>
                        <img className='pTIMG' src={PTraint} />
                    </div>
                </Col>
                <Col className='C2' lg={6} md={6} sm={6}>
                    <h1>WHAT YOU GET </h1>
                    <div className='whymenudivt'>
                        <h4 className='WhyMenut'><i class="fa-solid fa-square-check"></i>Enjoy your favorite foods & still lose weight meal plan.</h4> 
                        <h4 className='WhyMenut'><i class="fa-solid fa-square-check"></i>Private sessions with our certified professional.</h4> 
                        <h4 className='WhyMenut'><i class="fa-solid fa-square-check"></i>Fail proof accountability system.</h4> 
                    </div>
                </Col>
            </Row>
        </Fragment>
    )
  }
}

export default PersonalTraining