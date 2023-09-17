import React, { Component, Fragment } from 'react'
import NavBar from '../Component/NavBar/NavBar'
import Training from '../Component/Training/Training'
import Footer from '../Component/Footer/Footer'

class TrainingPage extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <Training />
        <Footer />
      </Fragment>
    )
  }
}

export default TrainingPage