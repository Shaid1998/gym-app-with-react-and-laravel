import React, { Component, Fragment } from 'react'
import NavBar from '../Component/NavBar/NavBar'
import CopuOfPrivacy from '../Component/Privacy/CopuOfPrivacy'
import Footer from '../Component/Footer/Footer'

class PrivacyCopyPage extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <CopuOfPrivacy />
        <Footer />
      </Fragment>
    )
  }
}

export default PrivacyCopyPage