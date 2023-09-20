import React, { Component, Fragment } from 'react'
import NavBar from '../Component/NavBar/NavBar'
import Privacy from '../Component/Privacy/Privacy'
import Footer from '../Component/Footer/Footer'

class PrivacyPage extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <Privacy />
        <Footer />
      </Fragment>
    )
  }
}

export default PrivacyPage