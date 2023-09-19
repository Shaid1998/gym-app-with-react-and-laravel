import React, { Component, Fragment } from 'react'
import { Col, Row } from 'react-bootstrap'
import AdvisorImg from '../../Assets/Image/Careers/Advisor.jpg'

class MembershipAdvisor extends Component {
  render() {
    return (
      <Fragment>
        <div className='AdvisorCareer'>
          <Row className='AdvisorCarRoW'>
            <Col className='AdvisorCarCol1' lg={6} md={6} sm={6}>
              <div>
                <img className='AdvisorCarImg'  src={AdvisorImg} />
              </div>
            </Col>
            <Col className='AdvisorCarCol2' lg={6} md={6} sm={6}>
              <div className='AdvisorCarT'>
                <h1 className='AdvisorCarTitile'>MEMBERSHIP ADVISOR</h1>
              </div>
              <div className='AdvisorCarDescription'>
                <p className='AdvisorCarDes'>If you like the idea of controlling your own paycheck, then this is for you.  Our Advisors work tirelessly to get all our sales leads to come experience the gym.  They provide the highest level of service and help our guest make a decision to become a member of our gym.</p>
              </div>
            </Col>
          </Row>
        </div>
      </Fragment>
    )
  }
}

export default MembershipAdvisor