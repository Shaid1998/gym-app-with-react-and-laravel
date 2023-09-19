import React, { Component, Fragment } from 'react'
import NavBar from '../Component/NavBar/NavBar'
import CWTop from '../Component/Corporate Wellness/CWTop'
import SomeWord from '../Component/Corporate Wellness/SomeWord'
import CorporateWellness from '../Component/Corporate Wellness/CorporateWellness'
import Footer from '../Component/Footer/Footer'

class CorporateWellnessPage extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <CWTop />
        <SomeWord />
        <CorporateWellness />
        <Footer />
      </Fragment>
    )
  }
}

export default CorporateWellnessPage