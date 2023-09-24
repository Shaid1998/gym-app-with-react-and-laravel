import React, { Component, Fragment } from 'react'
import LVideo from '../../Assets/Video/Locker.mp4'
import { Col, Row } from 'react-bootstrap'
import BaseUrl from '../../BaseUrl/BaseUrl'
import RestClient from '../../BaseUrl/RestClient'

class Locker extends Component {
  constructor(){
    super();
    this.state={
      Locker_title:'loading data.......',
      Locker_Description:'loading data.......',
      Locker_video:'loading data.......'
    }
  }
  componentDidMount(){
    RestClient.GetRequest(BaseUrl.AllLockerDataShow).then(result=>{
        this.setState({Locker_title:result[0]['Locker_title'],Locker_Description:result[0]['Locker_Description'],Locker_video:result[0]['Locker_video']});
    }).catch(error=>{
      this.setState({Locker_title:'???',Locker_Description:'???',Locker_video:'???'})
    })
  }
  render() {
    return (
      <Fragment>
        <div className='Locker'> 
          <Row className='LockerRo'>
              <Col className='LockerCol1' lg={6} md={6} sm={6}>
                <div className='LockerTitle'>
                    <h1 className='LockerTiTle'>{this.state.Locker_title}</h1>
                </div>
                <p className='LockerdDes'>{this.state.Locker_Description}</p>
              </Col>
              <Col className='LockerCol2' lg={6} md={6} sm={6}>
                <video className='LockerVideoClass' src={LVideo} autoPlay loop muted />
              </Col>
          </Row>
        </div>
      </Fragment>
    )
  }
}

export default Locker