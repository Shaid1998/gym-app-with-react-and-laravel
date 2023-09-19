import React, { Component, Fragment } from 'react'
import { Col, Row } from 'react-bootstrap'
import DirectingImg from '../../Assets/Image/Careers/Director.jpg'

class MembershipExperienceDirector extends Component {
  render() {
    return (
      <Fragment>
        <div className='DirectorDeskCareer'>
          <Row className='DirectorCarRoW'>
            <Col className='DirectorCarCol1' lg={6} md={6} sm={6}>
              <div className='DirectorCarT'>
                  <h1 className='DirectorCarTitile'>WELCOME DESK</h1>
              </div>
              <div className='DirectorCarDescription'>
                  <p className='DirectorCarDes'>If you have a big smile and positive energy, then we want you to be the first person that every member and guest sees when they enter our gym.  Your priority is to make everyone feel welcome and special as they come and go.  Earning Potential:  starting at $12 per hour</p>
              </div>
            </Col>
            <Col className='DirectorCarCol2' lg={6} md={6} sm={6}>
              <div>
                <img className='DirectorCarImg'  src={DirectingImg} />
              </div>
            </Col>
          </Row>
        </div>
      </Fragment>
    )
  }
}

export default MembershipExperienceDirector