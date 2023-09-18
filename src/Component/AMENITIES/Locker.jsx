import React, { Component, Fragment } from 'react'
import LVideo from '../../Assets/Video/Locker.mp4'
import { Col, Row } from 'react-bootstrap'

class Locker extends Component {
  render() {
    return (
      <Fragment>
        <div className='Locker'> 
          <Row className='LockerRo'>
              <Col className='LockerCol1' lg={6} md={6} sm={6}>
                <div className='LockerTitle'>
                    <h1 className='LockerTiTle'>Executive Locker Rooms & Sauna</h1>
                </div>
                <p className='LockerdDes'>We've upgraded our locker rooms, showers, and Himalayan salt sauna to give you a spa-like sensation people travel to elite resorts for.</p>
              </Col>
              <Col className='LockerCol2' lg={6} md={6} sm={6}>
                <video className='LockerVideoClass' src={LVideo} autoPlay loop muted />
              </Col>
          </Row>
        </div>
      </Fragment>
    )
  }
}

export default Locker