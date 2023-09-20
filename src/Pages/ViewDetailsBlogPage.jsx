import React, { Component, Fragment } from 'react'
import NavBar from '../Component/NavBar/NavBar'
import ViewBlog from '../Component/Blog/ViewBlog'
import Footer from '../Component/Footer/Footer'

class ViewDetailsBlogPage extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <ViewBlog />
        <Footer />
      </Fragment>
    )
  }
}

export default ViewDetailsBlogPage