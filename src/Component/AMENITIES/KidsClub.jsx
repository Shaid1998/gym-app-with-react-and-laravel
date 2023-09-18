import React, { Component, Fragment } from 'react'
import { Col, Row } from 'react-bootstrap'
import AVideo from '../../Assets/Video/AMENITIESKidsClub.mp4'

class KidsClub extends Component {
  render() {
    return (
      <Fragment>
        <div className='Kids'> 
          <Row className='KidsRo'>
              <Col className='KidCol1' lg={6} md={6} sm={6}>
                <div className='KidTitle'>
                    <h1 className='KidTiTle'>Kids Club</h1>
                </div>
                <p className='KidDes'>Sorry parents. We have removed using your kids as an excuse for why you don't have time. Your children will have a blast in our all new club while you attack your goals out on the gym floor. (6 months to 12 years permitted)</p>
                <h6 className='KidDes'>Hours:</h6>
                <h6 className='KidDes'>Weekdays: 8 am - 12 pm & 4 pm - 8 pm</h6>
                <h6 className='KidDes'>Saturday: 8 am to 12 pm</h6>

              </Col>
              <Col className='KidCol2' lg={6} md={6} sm={6}>
                <video className='KidVideoClass' src={AVideo} autoPlay loop muted />
              </Col>
          </Row>
        </div>
      </Fragment>
    )
  }
}

export default KidsClub