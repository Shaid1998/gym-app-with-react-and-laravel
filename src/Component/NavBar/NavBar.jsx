
import React, { Component, Fragment } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

class NavBar extends Component {
  render() {
    return (
         <Fragment> 
            <Navbar  className="bg-body-tertiary NavAll">
                <Container fluid={true}>
                    <Navbar.Brand className='Brand' href="#"><img className='BrandImg' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2-kVp_W6eEhD33-7JxDX_CFhMLO0IDgC8tw&usqp=CAU' /></Navbar.Brand>
                    
                    <Navbar.Collapse id="navbarScroll">
                    <Nav className="d-flex NavItemSet">
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