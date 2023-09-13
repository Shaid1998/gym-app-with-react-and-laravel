import React, { Component, Fragment } from 'react'
import NavBar from '../Component/NavBar/NavBar'
import Join from '../Component/Join/Join'
import Footer from '../Component/Footer/Footer'
import { Container } from 'react-bootstrap'

class JoinPage extends Component {
  render() {
    return (
      <Fragment>
        <div className='PageSet' fluid={true}>
            <NavBar />
            <Join />
            <Footer />
        </div>
      </Fragment>
    )
  }
}

export default JoinPage