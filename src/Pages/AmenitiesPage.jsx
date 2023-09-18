import React, { Component, Fragment } from 'react'
import NavBar from '../Component/NavBar/NavBar'
import AmenitiesTop from '../Component/AMENITIES/AmenitiesTop'
import KidsClub from '../Component/AMENITIES/KidsClub'
import RecoverGo from '../Component/AMENITIES/RecoverGo'
import Locker from '../Component/AMENITIES/Locker'
import Tanning from '../Component/AMENITIES/Tanning'
import Footer from '../Component/Footer/Footer'

class AmenitiesPage extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <AmenitiesTop />
        <KidsClub />
        <RecoverGo />
        <Locker />
        <Tanning />
        <Footer />
      </Fragment>
    )
  }
}

export default AmenitiesPage