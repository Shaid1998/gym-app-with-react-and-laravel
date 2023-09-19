import React, { Component, Fragment } from 'react'
import { Col, Row } from 'react-bootstrap'
import KidImg from '../../Assets/Image/Careers/Kids.jpg'

class KidsClubCareer extends Component {
  render() {
    return (
      <Fragment>
        <div className='KidsClubCareer'>
          <Row className='KidsCarRoW'>
            <Col className='KidsCarCol1' lg={6} md={6} sm={6}>
              <div className='KidsCarT'>
                  <h1 className='KidsCarTitile'>KIDS CLUB</h1>
              </div>
              <div className='KidsCarDescription'>
                  <p className='KidsCarDes'>If you love kids this is the role for you!  We want our members to know that they can enjoy their workouts while their kids are being cared for by our team.  Earning Potential: starting at $12 per hour</p>
              </div>
            </Col>
            <Col className='KidsCarCol2' lg={6} md={6} sm={6}>
              <div>
                <img className='KidsCarImg'  src={KidImg} />
              </div>
            </Col>
          </Row>
        </div>
      </Fragment>
    )
  }
}

export default KidsClubCareer