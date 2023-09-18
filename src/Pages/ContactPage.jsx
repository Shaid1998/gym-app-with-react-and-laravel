import React, { Component, Fragment } from 'react'
import NavBar from '../Component/NavBar/NavBar'
import Contact from '../Component/Contact/Contact'
import Footer from '../Component/Footer/Footer'

class ContactPage extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <Contact />
        <Footer />
      </Fragment>
    )
  }
}

export default ContactPage