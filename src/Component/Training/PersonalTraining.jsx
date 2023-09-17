import React, { Component, Fragment } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import PTrain from '../../Assets/Image/Training/PTPG.jpg'
import PTraint from '../../Assets/Image/Training/PT.jpg'

class PersonalTraining extends Component {
  render() {
    return (
        <Fragment>
            <div className='PersonalTraining'></div>
            <Row className='RO1'>
                <div className='PTR'>
                    <h4 className='PtrTitle'>Become Fitter, Stronger, & More Confident!</h4>
                </div>
                <div className='PtrD'>
                    <a className='PTrainButTop'><Button href='/personaltraining' className='PtrB' variant="success" size="huge">JOIN NOW</Button></a>
                </div>
            </Row>
            <Row className='RO2'>
                <Col className='CC2' lg={6} md={6} sm={6}>
                    <Form className='Formt'>
                        <div className='form-group'>
                            <h2 className='FormValuTitile'>First Name<a className='ImportantSign'>*</a></h2>
                            <input type="text" placeholder='First Name' className='form-controlt' />
                        </div>
                        <div className='form-group'>
                            <h2 className='FormValuTitile'>Last Name</h2>
                            <input type="text" placeholder='Last Name' className='form-controlt' />
                        </div>
                        <div className='form-group'>
                            <h2 className='FormValuTitile'>Email Address<a className='ImportantSign'>*</a></h2>
                            <input type="email" placeholder='Email Address' className='form-controlt' />
                        </div>
                        <div className='form-group'>
                            <h2 className='FormValuTitile'>Call NUmber<a className='ImportantSign'>*</a></h2>
                            <input type="phone" placeholder='Call Number' className='form-controlt' />
                        </div>
                        <div className='btncl'>
                        <Button href='/personaltraining' variant="success" className='TrBtnT' size="huge">Subscribe</Button>
                        </div>
                    </Form>
                </Col>
                <Col className='CC1' lg={6} md={6} sm={6}>
                    <div>
                        <img className='pTIMG1' src={PTrain} />
                    </div>
                </Col>
            </Row>
            <Row className='RO3'>
                <Col className='C1' lg={6} md={6} sm={6}>
                    <div>
                        <img className='pTIMG2' src={PTraint} />
                    </div>
                </Col>
                <Col className='C2' lg={6} md={6} sm={6}>
                    <h1 className='GTitle'>WHAT YOU GET </h1>
                    <div>
                        <h4 className='WhyMenut'><i class="fas fa-check"></i>Enjoy your favorite foods & still lose weight meal plan.</h4> 
                        <h4 className='WhyMenut'><i class="fas fa-check"></i>Private sessions with our certified professional.</h4> 
                        <h4 className='WhyMenut'><i class="fas fa-check"></i>Fail proof accountability system.</h4> 
                    </div>
                </Col>
            </Row>
        </Fragment>
    )
  }
}

export default PersonalTraining