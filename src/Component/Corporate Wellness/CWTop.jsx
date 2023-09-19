import React, { Component, Fragment } from 'react'
import { Row } from 'react-bootstrap'

class CWTop extends Component {
  render() {
    return (
      <Fragment>
        <div className='CWTop'>
          <Row className='CWTopR'>
            <h1 className='CWTTitle'>CORPORATE WELLNESS PROGRAMS</h1>
            <h6 className='CWTSubTitle'>Provide A Healthy Employee Opportunity At The Best Gym In Port Saint Lucie</h6>
          </Row>
        </div>
      </Fragment>
    )
  }
}

export default CWTop