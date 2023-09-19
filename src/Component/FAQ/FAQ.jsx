import React, { Component, Fragment } from 'react'
import { Col, Row } from 'react-bootstrap'

class FAQ extends Component {
  render() {
    return (
      <Fragment>
        <div className='FAQ'>
            <Row className='FAQHeader'>
                <h1 className='FAQTitle'>Frequently Asked Questions</h1>
            </Row>
            <Row>
                <Col lg={6} md={6} sm={6}>
                    <Row>
                        <Col lg={6} md={6} sm={6}>
                            <h1>Logo</h1>
                        </Col>
                        <Col lg={6} md={6} sm={6}>
                            <h1>Description</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={6} md={6} sm={6}>
                            <h1>Logo</h1>
                        </Col>
                        <Col lg={6} md={6} sm={6}>
                            <h1>Description</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={6} md={6} sm={6}>
                            <h1>Logo</h1>
                        </Col>
                        <Col lg={6} md={6} sm={6}>
                            <h1>Description</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={6} md={6} sm={6}>
                            <h1>Logo</h1>
                        </Col>
                        <Col lg={6} md={6} sm={6}>
                            <h1>Description</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={6} md={6} sm={6}>
                            <h1>Logo</h1>
                        </Col>
                        <Col lg={6} md={6} sm={6}>
                            <h1>Description</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={6} md={6} sm={6}>
                            <h1>Logo</h1>
                        </Col>
                        <Col lg={6} md={6} sm={6}>
                            <h1>Description</h1>
                        </Col>
                    </Row>
                </Col>
                <Col lg={6} md={6} sm={6}>
                    <h1>Img</h1>
                </Col>
            </Row>
        </div>
      </Fragment>
    )
  }
}

export default FAQ