import React, { Component, Fragment } from 'react'
import NavBar from '../Component/NavBar/NavBar'
import CareerTop from '../Component/Career/CareerTop'
import PersonalTrainingCareer from '../Component/Career/PersonalTrainingCareer'
import KidsClubCareer from '../Component/Career/KidsClubCareer'
import CleanTeam from '../Component/Career/CleanTeam'
import WelcomeDesk from '../Component/Career/WelcomeDesk'
import MembershipAdvisor from '../Component/Career/MembershipAdvisor'
import MembershipExperienceDirector from '../Component/Career/MembershipExperienceDirector'
import Footer from '../Component/Footer/Footer'


class CareerPage extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <CareerTop />
        <PersonalTrainingCareer />
        <KidsClubCareer />
        <CleanTeam />
        <WelcomeDesk />
        <MembershipAdvisor />
        <MembershipExperienceDirector />
        <Footer />
      </Fragment>
    )
  }
}

export default CareerPage