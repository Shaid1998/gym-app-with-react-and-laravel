import React, { Component, Fragment } from 'react'
import { Button, Row } from 'react-bootstrap'

class FacTop extends Component {
  render() {
    return (
      <Fragment>
        <div className='FTop'>
          <Row className='FRO'>
            <div className='Div1'>
              <h1 className='TTTitle'>$2 Million-Dollars in Renovations!</h1>
              <h4 className='TTSubTitle'>Come in and experience the best gym in the Port Saint Lucie area.</h4>
            </div>
            <div className='Div2'>
              <a className='FacilitiesButTop'><Button href='/reg' className='FYB' variant="success" size="huge">JOIN NOW</Button></a>
            </div>
          </Row>
        </div>
      </Fragment>
    )
  }
}

export default FacTop