import React, { Component, Fragment } from 'react'
import { Route, Routes } from 'react-router'
import HomePage from '../Pages/HomePage'

class AppRoute extends Component {
  render() {
    return ( 
        <Fragment>
            <Routes>
                <Route exact path="/" element={<HomePage />}></Route>
            </Routes>
        </Fragment>
    )
  }
}

export default AppRoute