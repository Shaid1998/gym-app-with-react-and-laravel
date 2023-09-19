import React, { Component, Fragment } from 'react'
import { Col, Row } from 'react-bootstrap'
import CleanImg from '../../Assets/Image/Careers/Cleaner.jpg'

class CleanTeam extends Component {
  render() {
    return (
      <Fragment>
        <div className='CleaningCareer'>
          <Row className='CleanCarRoW'>
            <Col className='CleanCarCol1' lg={6} md={6} sm={6}>
              <div>
                <img className='CleanCarImg'  src={CleanImg} />
              </div>
            </Col>
            <Col className='CleanCarCol2' lg={6} md={6} sm={6}>
              <div className='CleanCarT'>
                <h1 className='CleanCarTitile'>CLEAN TEAM</h1>
              </div>
              <div className='CleanCarDescription'>
                <p className='CleanCarDes'>Our ownership believes in keeping the facility super clean.  If you take pride in doing a good job for a good job's sake, this might be a solid fit for you.  Earning Potential: starting at $14 per hour up to $20 per hour</p>
              </div>
            </Col>
          </Row>
        </div>
      </Fragment>
    )
  }
}

export default CleanTeam