import React, { Component, Fragment } from 'react'
import JoinTop from './JoinTop'
import JoinPackage from './JoinPackage'

class Join extends Component {
  render() {
    return (
      <Fragment>
        <JoinTop />
        <JoinPackage />
      </Fragment>
    )
  }
}

export default Join