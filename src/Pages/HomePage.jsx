import React, { Component, Fragment } from 'react'
import HomeTop from '../Component/Home/HomeTop'
import NavbarHome from '../Component/Home/NavbarHome'
import PersonalTraining from '../Component/Home/PersonalTraining'
import WhyUs from '../Component/Home/WhyUs'
import Experience from '../Component/Home/Experience'
import Recovery from '../Component/Home/Recovery'
import TurfZone from '../Component/Home/TurfZone'
import Atmosphere from '../Component/Home/Atmosphere'
import JoinToday from '../Component/Home/JoinToday'
import Footer from '../Component/Footer/Footer'

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
        <TurfZone />
        <Atmosphere />
        <JoinToday />
        <Footer />
      </Fragment>
    )
  }
}

export default HomePage