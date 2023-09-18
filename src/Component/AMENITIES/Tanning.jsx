import React, { Component, Fragment } from 'react'
import { Col, Row } from 'react-bootstrap'
import TVideo from '../../Assets/Video/Tanning.mp4'

class Tanning extends Component {
  render() {
    return (
      <Fragment>
        <div className='Tanning'>
          <Row className='TanningR'>
            <Col className='Tco1' lg={6} md={6} sm={6}>
              <video className='TanningVideoClass' src={TVideo} autoPlay loop muted />
            </Col>
            <Col className='Tco2' lg={6} md={6} sm={6}>
              <div className='TT'>
                  <h1 className='TTi'>KBL Hybrid Tanning</h1>
              </div>
              <div className='TDescription'>
                  <p className='TDes'>KBL's Hybrid Technology has proven to be dynamically effective in performance and design. With twenty-six high performance UV tubes and twenty-six smart Sunlight tubes combined, this 52 lamp hybrid combination output boasts beautiful tanning, bio positive effects, anti-aging through collagen light, and flawless skin through the cleansing effect of the light's blue ratio.</p>
              </div>
            </Col>
          </Row>
        </div>
      </Fragment>
    )
  }
}

export default Tanning