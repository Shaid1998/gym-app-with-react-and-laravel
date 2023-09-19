import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import FLogo from '../../Assets/Image/Brand.jpg'

class Footer extends Component {
  render() {
    return (
      <Fragment>
        <div className='FooterC'>
          <Row>
            <Col className='footerColumn1' lg={6} md={6} sm={6}>
              <Row>
                <Col lg={12} md={12} sm={12}>
                  <img className='footerLogo' src={FLogo} />
                </Col>
              </Row>
              <Row>
                <Col className='menuRow1' lg={12} md={12} sm={12}>
                  <a className='FooterOp' href='/career'>Careers</a>
                  <a className='FooterOp' href='/customer-service'>Customer Service</a>
                  <a className='FooterOp' href='/corporate-wellness'>Corporate Wellness</a>
                </Col>
              </Row>
              <Row>
                <Col className='menuRow2' lg={12} md={12} sm={12}>
                  <a className='FooterOp'>Terms Of Use</a>
                  <a className='FooterOp'>Privacy Policy</a>
                  <a className='FooterOp' href='/faq'>FAQ</a>
                </Col>
              </Row>
              <Row>
                <Col className='menuRow3' lg={12} md={12} sm={12}>
                  <h1 className='copyright'>© 2023 1GYM</h1>
                </Col>
              </Row>
              <Row>
                <Col className='menuRow4' lg={12} md={12} sm={12}>
                  <h1 className='GADD'>250 NW Peacock Blvd, Port Saint Lucie, Florida 34986</h1>
                  <h1 className='ActivTitle'>Hours Of Oparetion</h1>
                  <h1 className='ActiveAtt'>Monday - Friday - 5:00 a.m - 11:00 p.m</h1>
                  <h1 className='ActiveAtt'>Saturday & Sunday - 7:00 a.m - 7:00 p.m</h1>

                </Col>
              </Row>
            </Col>
            <Col className='footerColumn2' lg={6} md={6} sm={6}>
              <div>
                <a href=""><i className="fab m-1 h4 fa-facebook SocialFooter"></i></a>
                <a href=""><i className="fab m-1 h4 fa-instagram SocialFooter"></i></a>
                <a href=""><i className="fab m-1 h4 fa-twitter SocialFooter"></i></a>
              </div>
            </Col>
          </Row>
        </div>
      </Fragment>
    )
  }
}

export default Footer