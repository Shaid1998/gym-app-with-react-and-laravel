
import React, { Component, Fragment } from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'

class NavBar extends Component {
  render() {
    return (
         <Fragment> 
            <Navbar  className="bg-body-tertiary NavAll">
                <Container fluid={true}>
                    <Navbar.Brand className='Brand' href="/"><img className='BrandImg' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2-kVp_W6eEhD33-7JxDX_CFhMLO0IDgC8tw&usqp=CAU' /></Navbar.Brand>
                    
                    
                    <Nav className="d-flex">
                        <div className='NavItemMenu'>
                            <Nav.Link className=' nav-item active NavMenu' href="/">HOME</Nav.Link>
                            <Nav.Link className='nav-item active NavMenu' href="#action2">TRAINING</Nav.Link>
                            <Nav.Link className='nav-item active NavMenu' href="#action3">FACILITIES</Nav.Link>
                            <Nav.Link className='nav-item active NavMenu' href="#action4">AMENITIES</Nav.Link>
                            <Nav.Link className='nav-item active NavMenu' href="/join">JOIN</Nav.Link>
                            <Nav.Link className='nav-item active NavMenu' href="#action6">ABOUT</Nav.Link>
                            <Nav.Link className='nav-item active NavMenu' href="#action7">BLOG</Nav.Link>
                        </div>
                        <div className='NavItemSocial'>
                            <a className='nav-item active' href=""><i className="fab m-1 h4 fa-facebook NavSocial"></i></a>
                            <a className='nav-item active' href=""><i className="fab m-1 h4 fa-instagram NavSocial"></i></a>
                            <a className='nav-item active' href=""><i className="fab m-1 h4 fa-twitter NavSocial"></i></a>
                        </div>
                        <div className='NavItemButton'>
                            <a className='bsp'><Button href='/join' class="btn btn-primary btn-lg btn-block ButtonSetNav">JOIN NOW</Button></a>
                            <Button href='/reg' class="btn btn-primary btn-lg btn-block ButtonSetNavF">FREE PASS</Button>
                        </div>
                    </Nav>
                    
                </Container>
            </Navbar>
        </Fragment>
    )
  }
}

export default NavBar