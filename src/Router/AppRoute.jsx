import React, { Component, Fragment } from 'react'
import { Route, Routes } from 'react-router'
import HomePage from '../Pages/HomePage'
import JoinPage from '../Pages/JoinPage'
import RegistrationPage from '../Pages/RegistrationPage'
import TrainingPage from '../Pages/TrainingPage'
import PersonalTrainingPage from '../Pages/PersonalTrainingPage'
import FacilitiesPage from '../Pages/FacilitiesPage'
import AmenitiesPage from '../Pages/AmenitiesPage'
import AboutPage from '../Pages/AboutPage'


class AppRoute extends Component {
  render() {
    return ( 
        <Fragment>
            <Routes>
                <Route exact path="/" element={<HomePage />}></Route>
                <Route exact path="/join" element={<JoinPage /> }></Route>
                <Route exact path="/reg" element={<RegistrationPage />}></Route>
                <Route exact path="/training" element={<TrainingPage />}></Route>
                <Route exact path="/personaltraining" element={<PersonalTrainingPage />}></Route>
                <Route exact path="/facilities" element={<FacilitiesPage />}></Route>
                <Route exact path="/amenities" element={<AmenitiesPage />}></Route>
                <Route exact path="/about" element={<AboutPage />}></Route>
            </Routes>
        </Fragment>
    )
  }
}

export default AppRoute