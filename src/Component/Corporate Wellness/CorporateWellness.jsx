import React, { Component, Fragment } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import CWImg from '../../Assets/Image/CustomerService/Wellness.jpg'

class CorporateWellness extends Component {
  render() {
    return (
      <Fragment>
        <div className='CorporateWellness'> 
          <Row className='CorporateCarRo'>
              <Col className='CorporateCCOL1' lg={6} md={6} sm={6}>
                  <div className='CorporateCATitle'>
                      <h1 className='CorporateCaTiTle'>CORPORATE WELLNESS PROGRAMS ARE  CRITICAL FOR COMPANIES</h1>
                  </div>
                  <p className='CorporateCaDes'>Give your employees the luxury of being part of the best gym in Port Saint Lucie. Not only will they be healthier, but they will be happier too.. Which means more productivity!</p>
                  <Button href="operationspsl@fitnessngo.com" className='CorporateButton2' variant="success">INQUIRE</Button>
              </Col>
              <Col className='CorporateCCOL2' lg={6} md={6} sm={6}>
                  <img className='CorporateCaIMg'  src={CWImg} />
              </Col>
          </Row>
        </div>
      </Fragment>
    )
  }
}

export default CorporateWellness