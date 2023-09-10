import React, { Component, Fragment } from 'react'
import HomeTop from '../Component/Home/HomeTop'
import NavbarHome from '../Component/Home/NavbarHome'
import PersonalTraining from '../Component/Home/PersonalTraining'

class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <NavbarHome />
        <HomeTop />
        <PersonalTraining />
      </Fragment>
    )
  }
}

export default HomePage