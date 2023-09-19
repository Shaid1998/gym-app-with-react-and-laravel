import React, { Component, Fragment } from 'react'
import { Col, Row } from 'react-bootstrap'
import WelcomeDeskImg from '../../Assets/Image/Careers/Welcome.jpg'

class WelcomeDesk extends Component {
  render() {
    return (
      <Fragment>
        <div className='WelcomeDeskCareer'>
          <Row className='WelcomeCarRoW'>
            <Col className='WelcomeCarCol1' lg={6} md={6} sm={6}>
              <div className='WelcomeCarT'>
                  <h1 className='WelcomeCarTitile'>KIDS CLUB</h1>
              </div>
              <div className='WelcomeCarDescription'>
                  <p className='WelcomeCarDes'>If you love kids this is the role for you!  We want our members to know that they can enjoy their workouts while their kids are being cared for by our team.  Earning Potential: starting at $12 per hour</p>
              </div>
            </Col>
            <Col className='WelcomeCarCol2' lg={6} md={6} sm={6}>
              <div>
                <img className='WelcomeCarImg'  src={WelcomeDeskImg} />
              </div>
            </Col>
          </Row>
        </div>
      </Fragment>
    )
  }
}

export default WelcomeDesk