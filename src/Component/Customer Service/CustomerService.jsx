import React, { Component, Fragment } from 'react'
import { Row , Col, Button } from 'react-bootstrap'

class CustomerService extends Component {
  render() {
    return (
      <Fragment>
        <div className='CustomerService'>
          <Row className='CustomerTitleRow'>
            <h1 className='CusSerTitle'>How Can We Help?</h1>
          </Row>
          <Row className='CustomerContactRow'>
            <Col className='ServCol1' lg={6} md={6} sm={6}>
              <a><i class="IconeSer fas fa-dumbbell"></i></a>
              <p className='CusInstra1'>Please visit our FAQ page for commonly asked questions.</p>
              <Button href='/faq' className='ServiceButton1'  variant="success">FAQ</Button>
            </Col>
            <Col className='ServCol2' lg={6} md={6} sm={6}>
              <a><i class="IconeSer fas fa-envelope"></i></a>
              <p className='CusInstra2'>For billing questions, cancellation requests, or complaints and compliments: Email us at service@1gym.com</p>
              <Button href="mailto:service@1gym.com" className='ServiceButton2' variant="success">Contact</Button>
            </Col>
          </Row>
        </div>
      </Fragment>
    )
  }
}

export default CustomerService