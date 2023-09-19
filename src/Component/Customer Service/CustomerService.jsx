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
          <Row>
            <Col lg={6} md={6} sm={6}>
              <a><i class="fas fa-dumbbell"></i></a>
              <p>Please visit our FAQ page for commonly asked questions.</p>
              <a><Button href='#'  variant="success">FAQ</Button></a>
            </Col>
            <Col lg={6} md={6} sm={6}>
              <a><i class="fas fa-envelope"></i></a>
              <p>For billing questions, cancellation requests, or complaints and compliments: Email us at service@1gym.com</p>
              <a><Button href='#' variant="success">Contact</Button></a>
            </Col>
          </Row>
        </div>
      </Fragment>
    )
  }
}

export default CustomerService