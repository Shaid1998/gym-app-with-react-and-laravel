import React, { Component, Fragment } from 'react'
import { Col, Row } from 'react-bootstrap'
import FAQImg from '../../Assets/Image/CustomerService/FAQImg.jpg'

class FAQ extends Component {
  render() {
    return (
      <Fragment>
        <div className='FAQ'>
            <Row className='FAQHeader'>
                <h1 className='FAQTitle'>Frequently Asked Questions</h1>
            </Row>
            <Row className='FAQTopic'>
                <Col className='FAQTopicCol' lg={6} md={6} sm={6}>
                    <Row className='TopicPart'>
                        <Col className='ForIcone' lg={6} md={6} sm={6}>
                            <a><i class="FAQIcone fas fa-dumbbell"></i></a>
                        </Col>
                        <Col className='ForText' lg={6} md={6} sm={6}>
                            <h1 className='FAQT'>How do I join 1GYM?</h1>
                            <h6 className='FAQST'>You have to come in person at our physical location to sign up. </h6>
                        </Col>
                    </Row>
                    <Row className='TopicPart'>
                        <Col className='ForIcone' lg={6} md={6} sm={6}>
                            <a><i class="FAQIcone fas fa-dumbbell"></i></a>
                        </Col>
                        <Col className='ForText' lg={6} md={6} sm={6}>
                            <h1 className='FAQT'>Does 1GYM offer Personal Training?</h1>
                            <h6 className='FAQST'>Absolutely. We have the best pricing, certified  personal trainers, and equipment for you to crush your goals.</h6>
                        </Col>
                    </Row>
                    <Row className='TopicPart'>
                        <Col className='ForIcone' lg={6} md={6} sm={6}>
                            <a><i class="FAQIcone fas fa-dumbbell"></i></a>
                        </Col>
                        <Col className='ForText' lg={6} md={6} sm={6}>
                            <h1 className='FAQT'>Can I bring a guest with me?</h1>
                            <h6 className='FAQST'>Yes. Due to the nature of keeping a club that doesn't get overcrowded, we allow you to use your guest privileges 4 times per month. </h6>
                        </Col>
                    </Row>
                    <Row className='TopicPart'>
                        <Col className='ForIcone' lg={6} md={6} sm={6}>
                            <a><i class="FAQIcone fas fa-dumbbell"></i></a>
                        </Col>
                        <Col className='ForText' lg={6} md={6} sm={6}>
                            <h1 className='FAQT'>Can I freeze my membership?</h1>
                            <h6 className='FAQST'>Yes you can. Email customer service your request: service@1GYM.com include your full name, and phone number listed on your account. </h6>
                        </Col>
                    </Row>
                    <Row className='TopicPart'>
                        <Col className='ForIcone' lg={6} md={6} sm={6}>
                            <a><i class="FAQIcone fas fa-dumbbell"></i></a>
                        </Col>
                        <Col className='ForText' lg={6} md={6} sm={6}>
                            <h1 className='FAQT'>How do I cancel my membership?</h1>
                            <h6 className='FAQST'>We make it easy and convenient. Be mindful of our required 30 day notice to cancel. Send your request by email to: service@1GYM.com Include your full name, and phone number listed on your account.</h6>
                        </Col>
                    </Row>
                    <Row className='TopicPart'>
                        <Col className='ForIcone' lg={6} md={6} sm={6}>
                            <a><i class="FAQIcone fas fa-dumbbell"></i></a>
                        </Col>
                        <Col className='ForText' lg={6} md={6} sm={6}>
                            <h1 className='FAQT'>How old must you be to become a member?</h1>
                            <h6 className='FAQST'>16 years of age is our minimum age requirement.</h6>
                        </Col>
                    </Row>
                </Col>
                <Col className='FAQTopicImageCol' lg={6} md={6} sm={6}>
                    <img className='FAQIMG' src={FAQImg} />
                </Col>
            </Row>
        </div>
      </Fragment>
    )
  }
}

export default FAQ