import React, { Component, Fragment } from 'react'
import NavBar from '../Component/NavBar/NavBar'
import Contact from '../Component/Customer Service/CustomerService'
import Footer from '../Component/Footer/Footer'

class CustomerServicePage extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <Contact />
        <Footer />
      </Fragment>
    )
  }
}

export default CustomerServicePage