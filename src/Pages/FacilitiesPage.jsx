import React, { Component, Fragment } from 'react'
import NavbarHome from '../Component/Home/NavbarHome'
import FacTop from '../Component/FACILITIES/FacTop'
import TrainingFloor from '../Component/FACILITIES/TrainingFloor'
import Cardio from '../Component/FACILITIES/Cardio'
import Strength from '../Component/FACILITIES/Strength'
import TurfZone from '../Component/Home/TurfZone'
import Recovery from '../Component/Home/Recovery'
import Footer from '../Component/Footer/Footer'

class FacilitiesPage extends Component {
  render() {
    return (
      <Fragment>
        <NavbarHome />
        <FacTop />
        <TrainingFloor />
        <Cardio />
        <Strength />
        <TurfZone />
        <Recovery />
        <Footer />
      </Fragment>
    )
  }
}

export default FacilitiesPage