import React, { Component, Fragment } from 'react'
import { Row } from 'react-bootstrap'

class CareerTop extends Component {
  render() {
    return (
      <Fragment>
        <Row className='CTop'>
          <div className='DivRow'>
            <h1 className='CarTitle'>CAREERS</h1>
            <h6 className='CarSubTitle'>Work At The Best Gym In Port Saint Lucie</h6>
        </div>
        </Row>
      </Fragment>
    )
  }
}

export default CareerTop