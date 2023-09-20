import React, { Component, Fragment } from 'react'
import NavBar from '../Component/NavBar/NavBar'
import AllBlog from '../Component/Blog/AllBlog'
import Footer from '../Component/Footer/Footer'

class BlogPage extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <AllBlog />
        <Footer />
      </Fragment>
    )
  }
}

export default BlogPage