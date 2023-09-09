import { Button } from 'bootstrap'
import React, { Component, Fragment } from 'react'
import { Container, Form, Nav, Navbar } from 'react-bootstrap'
import { FaFacebookSquare } from 'react-bootstrap-icons'

class NavBar extends Component {
  render() {
    return (
         <Fragment> 
            <Navbar  className="bg-body-tertiary NavAll">
                <Container fluid>
                    <Navbar.Brand className='Brand' href="#"><img className='BrandImg' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2-kVp_W6eEhD33-7JxDX_CFhMLO0IDgC8tw&usqp=CAU' /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0">
                    </Nav>
                    <Nav className="d-flex">
                        <div className='NavItemMenu'>
                            <Nav.Link className=' nav-item active NavMenu' href="#action1">HOME</Nav.Link>
                            <Nav.Link className='nav-item active NavMenu' href="#action2">TRAINING</Nav.Link>
                            <Nav.Link className='nav-item active NavMenu' href="#action3">FACILITIES</Nav.Link>
                            <Nav.Link className='nav-item active NavMenu' href="#action4">AMENITIES</Nav.Link>
                            <Nav.Link className='nav-item active NavMenu' href="#action5">JOIN</Nav.Link>
                            <Nav.Link className='nav-item active NavMenu' href="#action6">ABOUT</Nav.Link>
                            <Nav.Link className='nav-item active NavMenu' href="#action7">BLOG</Nav.Link>
                        </div>
                        <div className='NavItemSocial'>
                            <a className='nav-item active NavSocial' href=""><i className="fab m-1 h4 fa-facebook"></i></a>
                            <a className='nav-item active NavSocial' href=""><i className="fab m-1 h4 fa-instagram"></i></a>
                            <a className='nav-item active NavSocial' href=""><i className="fab m-1 h4 fa-twitter"></i></a>
                        </div>
                        <div className='NavItemButton'>
                            <button className="nav-item active btn btn-primary NavButton">JOIN NOW</button>
                            <button className="nav-item active btn btn-primary NavButton">FREE PASS</button>
                        </div>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Fragment>
    )
  }
}

export default NavBar