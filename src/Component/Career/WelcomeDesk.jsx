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
                  <h1 className='WelcomeCarTitile'>WELCOME DESK</h1>
              </div>
              <div className='WelcomeCarDescription'>
                  <p className='WelcomeCarDes'>If you have a big smile and positive energy, then we want you to be the first person that every member and guest sees when they enter our gym.  Your priority is to make everyone feel welcome and special as they come and go.  Earning Potential:  starting at $12 per hour</p>
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