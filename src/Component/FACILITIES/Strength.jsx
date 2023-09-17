import React, { Component, Fragment } from 'react'
import { Col, Row } from 'react-bootstrap'
import SImg from '../../Assets/Image/Fac/strength.jpg'

class Strength extends Component {
  render() {
    return (
      <Fragment>
        <div>
          <Row>
            <Col className='C1' lg={6} md={6} sm={6}>
              <div>
                <img className='pTIMG'  src={SImg} />
              </div>
            </Col>
            <Col className='C2' lg={6} md={6} sm={6}>
              <div className='PTrTitle'>
                <h1 className='TrTi'>STRENGTH</h1>
              </div>
              <div className='PTrDescription'>
                <p className='TrDes'>Find everything you need to sculpt, tone, firm, and add metabolic boosting muscle to your body.  Literally tons of free-weights, plate-loaded, and selectorized machines available.

No muscle group will go underworked.</p>
              </div>
            </Col>
          </Row>
        </div>
      </Fragment>
    )
  }
}

export default Strength