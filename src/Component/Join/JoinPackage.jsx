
import React, { Component, Fragment } from 'react'
import { Button, Col, Row } from 'react-bootstrap'

class JoinPackage extends Component {
  render() {
    return (
      <Fragment>
        <div className='bDiv'>
            <Row className='Pack'>
                <Col lg={6} md={6} sm={6}>
                    <Row className='Unltimate'>
                        <h1 className='TitleOfL'>Ultimate</h1>
                        <Col className='MenuO' lg={6} md={6} sm={6}>
                            <h4 className='List'>INCLUDED</h4>
                            <h4 className='List'>ANY DAY ACCESS</h4>
                            <h4 className='List'>BRING A GUEST FREE*</h4>
                            <h4 className='List'>3 TRAINING SESSIONS</h4>
                            <h4 className='List'>3 GROUP TRAINING SESSIONS</h4>
                            <h4 className='List'>HEALTHY WORKSHOPS</h4>
                            <h4 className='List'>MONTHLY INBODY REPORTS</h4>
                            <h4 className='List'>UNLIMITED FITNESS EQUIPMENT USE </h4>
                            <h4 className='List'>EXECUTIVE LOCKER ROOM </h4>
                            <h4 className='List'>UNLIMITED DRY SAUNA</h4>
                            <h4 className='List'>UNLIMITED TANNING</h4>
                            <h4 className='List'>KIDS CLUB - FIRST CHILD FREE</h4>
                            <h4 className='List'>UNLIMITED CRYO-THERAPY</h4>
                            <h4 className='List'>UNLIMITED HYDRO-MASSAGE</h4>
                            <h4 className='List'>UNLIMITED MASSAGE CHAIR</h4>
                        </Col>
                        <Col className='menuC' lg={6} md={6} sm={6}>
                            <i class="fas fa-check CheckA"></i><br />
                            <i class="fas fa-check CheckA"></i><br />
                            <i class="fas fa-check CheckA"></i><br />
                            <i class="fas fa-check CheckA"></i><br />
                            <i class="fas fa-check CheckA"></i><br />
                            <i class="fas fa-check CheckA"></i><br />
                            <i class="fas fa-check CheckA"></i><br />
                            <i class="fas fa-check CheckA"></i><br />
                            <i class="fas fa-check CheckA"></i><br />
                            <i class="fas fa-check CheckA"></i><br />
                            <i class="fas fa-check CheckA"></i><br />
                            <i class="fas fa-check CheckA"></i><br />
                            <i class="fas fa-check CheckA"></i><br />
                            <i class="fas fa-check CheckA"></i><br />
                            <i class="fas fa-check CheckA"></i><br />
                        </Col>
                    </Row>
                </Col>
                <Col lg={6} md={6} sm={6}>
                    <Row className='d365'>
                        <h1 className='TitleOfL'>365 Days</h1>
                        <Col className='MenuO' lg={6} md={6} sm={6}>
                            <h4 className='List'>INCLUDED</h4>
                            <h4 className='List'>ANY DAY ACCESS</h4>
                            <h4 className='List'>BRING A GUEST FREE*</h4>
                            <h4 className='List'>3 TRAINING SESSIONS</h4>
                            <h4 className='List'>3 GROUP TRAINING SESSIONS</h4>
                            <h4 className='List'>HEALTHY WORKSHOPS</h4>
                            <h4 className='List'>MONTHLY INBODY REPORTS</h4>
                            <h4 className='List'>UNLIMITED FITNESS EQUIPMENT USE </h4>
                            <h4 className='List'>EXECUTIVE LOCKER ROOM </h4>
                            <h4 className='List'>UNLIMITED DRY SAUNA</h4>
                            <h4 className='List'>UNLIMITED TANNING</h4>
                            <h4 className='List'>KIDS CLUB - FIRST CHILD FREE</h4>
                            <h4 className='List'>UNLIMITED CRYO-THERAPY</h4>
                            <h4 className='List'>UNLIMITED HYDRO-MASSAGE</h4>
                            <h4 className='List'>UNLIMITED MASSAGE CHAIR</h4>
                        </Col>
                        <Col className='menuC' lg={6} md={6} sm={6}>
                            <i class="fas fa-check CheckB"></i><br />
                            <i class="fas fa-check CheckB"></i><br />
                            <i class="fas fa-check CheckB"></i><br />
                            <i class="fas fa-check CheckB"></i><br />
                            <i class="fas fa-check CheckB"></i><br />
                            <i class="fas fa-check CheckB"></i><br />
                            <i class="fas fa-check CheckB"></i><br />
                            <i class="fas fa-check CheckB"></i><br />
                            <i class="fas fa-check CheckB"></i><br />
                            <i class="fas fa-check CheckB"></i><br />
                            <i class="fa fa-cross CheckC"></i><br />
                            <i class="fa fa-cross CheckC"></i><br />
                            <i class="fa fa-cross CheckC"></i><br />
                            <i class="fa fa-cross CheckC"></i><br />
                            <i class="fa fa-cross CheckC"></i><br />
                        </Col>
                    </Row>
                </Col>
                <div>
                    <h1 className='TextPromo'>Click below to schedule your gym tour. We will respond promptly.</h1>
                    <a className='ButtonPromo'><Button variant="success" size="huge">JOIN NOW</Button></a>
                </div>
            </Row>`
        </div>
      </Fragment>
    )
  }
}

export default JoinPackage