import React, { Component, Fragment } from 'react'
import { Col, Row } from 'react-bootstrap'
import TVideo from '../../Assets/Video/Tanning.mp4'

class Tanning extends Component {
  render() {
    return (
      <Fragment>
        <div className='Tanning'>
          <Row className='Recover1G'>
            <Col className='REco1' lg={6} md={6} sm={6}>
              <video className='KidVideoClass' src={TVideo} autoPlay loop muted />
            </Col>
            <Col className='REco2' lg={6} md={6} sm={6}>
              <div className='RecoT'>
                  <h1 className='RTi'>Recover nGo</h1>
              </div>
              <div className='RecoDescription'>
                  <p className='RecoDes'>By laying down 10 to 20 minutes in our latest medical breakthrough CRYOLOUNGE+. HumanTouch, or HYDROMASSAGE chairs you will-Ease your body of pain, discomfort, and aches - Relax away the stresses of your daily rat race & Prepare your muscles and mind for your next workout. </p>
              </div>
            </Col>
          </Row>
        </div>
      </Fragment>
    )
  }
}

export default Tanning