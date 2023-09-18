import React, { Component, Fragment } from 'react'
import NavBar from '../Component/NavBar/NavBar'
import About from '../Component/About/About'
import Footer from '../Component/Footer/Footer'

class AboutPage extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <About />
        <Footer />
      </Fragment>
    )
  }
}

export default AboutPage
