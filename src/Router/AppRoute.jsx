import React, { Component, Fragment } from 'react'
import { Route, Routes } from 'react-router'
import HomePage from '../Pages/HomePage'
import Registration from '../Component/Home/Registration'
import JoinPage from '../Pages/JoinPage'


class AppRoute extends Component {
  render() {
    return ( 
        <Fragment>
            <Routes>
                <Route exact path="/" element={<HomePage />}></Route>
                <Route exact path="/join" element={<JoinPage /> }></Route>
                <Route exact path="/" element={<HomePage />}></Route>
                <Route exact path="/" element={<HomePage />}></Route>
                <Route exact path="/" element={<HomePage />}></Route>
                <Route exact path="/" element={<HomePage />}></Route>
            </Routes>
        </Fragment>
    )
  }
}

export default AppRoute