import React, { Component, Fragment } from 'react'
import Registration from '../Component/Registration/Registration'
import NavBar from '../Component/NavBar/NavBar'
import Footer from '../Component/Footer/Footer'

class RegistrationPage extends Component {
  render() {
    return (
      <Fragment>
        <div className='PageSet'>
            <NavBar />
            <Registration />
            <Footer />
        </div>
      </Fragment>
    )
  }
}

export default RegistrationPage