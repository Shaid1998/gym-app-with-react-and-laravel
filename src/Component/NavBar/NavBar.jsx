
import React, { Component, Fragment } from 'react'
import { Button, Col, Container, Nav, Navbar, Row } from 'react-bootstrap'

class NavBar extends Component {
  render() {
    return (
         <Fragment>
            <Navbar  className=" NavAll">
                <Container fluid={true}>
                    <Row className='NavRow'>
                        <Col className='NavCol1' lg={3} md={3} sm={3} >
                            <Navbar.Brand className='Brand' href="/"><img className='BrandImg' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2-kVp_W6eEhD33-7JxDX_CFhMLO0IDgC8tw&usqp=CAU' /></Navbar.Brand>
                        </Col>

                        <Col className='NavCol2' lg={3} md={3} sm={3} >
                            <div className='NavItemMenu'>
                                <Nav.Link className=' nav-item active NavMenu' href="/">HOME</Nav.Link>
                                <Nav.Link className='nav-item active NavMenu' href="/training">TRAINING</Nav.Link>
                                <Nav.Link className='nav-item active NavMenu' href="/facilities">FACILITIES</Nav.Link>
                                <Nav.Link className='nav-item active NavMenu' href="#action4">AMENITIES</Nav.Link>
                                <Nav.Link className='nav-item active NavMenu' href="/join">JOIN</Nav.Link>
                                <Nav.Link className='nav-item active NavMenu' href="#action6">ABOUT</Nav.Link>
                                <Nav.Link className='nav-item active NavMenu' href="#action7">BLOG</Nav.Link>
                            </div>
                        </Col>

                        <Col className='NavCol3' lg={3} md={3} sm={3} >
                            <div className='NavItemSocial'>
                                <a className='nav-item active' href='https://www.facebook.com/'><i className="fab m-1 h4 fa-facebook NavSocial"></i></a>
                                <a className='nav-item active' href="https://www.instagram.com/"><i className="fab m-1 h4 fa-instagram NavSocial"></i></a>
                                <a className='nav-item active' href="https://www.x.com/"><i className="fab m-1 h4 fa-twitter NavSocial"></i></a>
                            </div>
                        </Col>

                        <Col className='NavCol4' lg={3} md={3} sm={3} >
                            <div className='NavItemButton'>
                                <a className='bsp'><Button href='/join' className='NavButton1' variant="success">JOIN NOW</Button></a>
                                <Button href='/reg' className='NavButton2' variant="success">FREE PASS</Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Navbar>
        </Fragment>
    )
  }
}

export default NavBar