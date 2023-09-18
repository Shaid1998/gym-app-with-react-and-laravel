import React, { Component, Fragment } from 'react'
import { Col, Row } from 'react-bootstrap'
import SImg from '../../Assets/Image/Fac/strength.jpg'

class Strength extends Component {
  render() {
    return (
      <Fragment>
        <div className='Strength'>
          <Row className='SRo'>
            <Col className='SC1' lg={6} md={6} sm={6}>
              <div>
                <img className='StImg'  src={SImg} />
              </div>
            </Col>
            <Col className='SC2' lg={6} md={6} sm={6}>
              <div className='STTitle'>
                <h1 className='STitle'>STRENGTH</h1>
              </div>
              <div>
                <p className='SSubDes'>Find everything you need to sculpt, tone, firm, and add metabolic boosting muscle to your body.  Literally tons of free-weights, plate-loaded, and selectorized machines available.No muscle group will go underworked.</p>
              </div>
            </Col>
          </Row>
        </div>
      </Fragment>
    )
  }
}

export default Strength