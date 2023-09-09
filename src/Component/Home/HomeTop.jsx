import React, { Component, Fragment } from 'react'
import VideoBackground from '../../Assets/Video/BackgroundTop.mp4'


class HomeTop extends Component {
  render() {
    return (
      <Fragment>
        <div className='TopMain' fluid>
          
          <video className='Video' src={VideoBackground} autoPlay loop muted/>
          <div >
            <h1 className='OverText'>1GYM</h1>
            <h4 className='OverTextSub'>Welcome Here</h4>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default HomeTop