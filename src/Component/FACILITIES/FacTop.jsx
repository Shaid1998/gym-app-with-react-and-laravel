import React, { Component, Fragment } from 'react'
import { Button, Row } from 'react-bootstrap'

class FacTop extends Component {
  render() {
    return (
      <Fragment>
        <div>
          <Row>
            <div>
              <h1>$2 Million-Dollars in Renovations!</h1>
              <h4>Come in and experience the best gym in the Port Saint Lucie area.</h4>
            </div>
            <div>
              <a className='PTrainButTop'><Button href='/personaltraining' className='PtrB' variant="success" size="huge">JOIN NOW</Button></a>
            </div>
          </Row>
        </div>
      </Fragment>
    )
  }
}

export default FacTop