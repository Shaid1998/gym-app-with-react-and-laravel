import React, { Component, Fragment } from 'react'
import HomeTop from '../Component/Home/HomeTop'
import NavbarHome from '../Component/Home/NavbarHome'
import PersonalTraining from '../Component/Home/PersonalTraining'
import WhyUs from '../Component/Home/WhyUs'
import Experience from '../Component/Home/Experience'
import Recovery from '../Component/Home/Recovery'

class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <NavbarHome />
        <HomeTop />
        <PersonalTraining />
        <WhyUs />
        <Experience />
        <Recovery />
      </Fragment>
    )
  }
}

export default HomePage