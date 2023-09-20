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
import CareerPage from '../Pages/CareerPage'
import CustomerServicePage from '../Pages/CustomerServicePage'
import FAQPage from '../Pages/FAQPage'
import CorporateWellnessPage from '../Pages/CorporateWellnessPage'
import PrivacyCopyPage from '../Pages/PrivacyCopyPage'
import PrivacyPage from '../Pages/PrivacyPage'


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
                <Route exact path="/career" element={<CareerPage />}></Route>
                <Route exact path="/customer-service" element={<CustomerServicePage />}></Route>
                <Route exact path="/faq" element={<FAQPage />}></Route>
                <Route exact path="/corporate-wellness" element={<CorporateWellnessPage />}></Route>
                <Route exact path="/terms-of-use" element={<PrivacyCopyPage />}></Route>
                <Route exact path="/privacy" element={<PrivacyPage />}></Route>
            </Routes>
        </Fragment>
    )
  }
}

export default AppRoute