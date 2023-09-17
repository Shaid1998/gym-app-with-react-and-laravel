import React, { Component, Fragment } from 'react'
import NavBar from '../Component/NavBar/NavBar'
import PersonalTraining from '../Component/Training/PersonalTraining'
import Footer from '../Component/Footer/Footer'

class PersonalTrainingPage extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <PersonalTraining />
        <Footer />
      </Fragment>
    )
  }
}

export default PersonalTrainingPage