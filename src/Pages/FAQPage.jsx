import React, { Component, Fragment } from 'react'
import NavBar from '../Component/NavBar/NavBar'
import FAQ from '../Component/FAQ/FAQ'
import Footer from '../Component/Footer/Footer'

class FAQPage extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <FAQ />
        <Footer />
      </Fragment>
    )
  }
}

export default FAQPage