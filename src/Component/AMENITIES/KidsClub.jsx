import React, { Component, Fragment } from 'react'
import { Col, Row } from 'react-bootstrap'
import AVideo from '../../Assets/Video/AMENITIESKidsClub.mp4'
import BaseUrl from '../../BaseUrl/BaseUrl'
import RestClient from '../../BaseUrl/RestClient'

class KidsClub extends Component {
  constructor(){
    super();
    this.state={
      Kids_Club_title:'loading data.......',
      Kids_Club_time_title:'loading data.......',
      Kids_Club_time_1:'loading data.......',
      Kids_Club_time_2:'loading data.......',
      Kids_Club_Description:'loading data.......',
      Kids_Club_video:'loading data.......'
    }
  }
  componentDidMount(){
    RestClient.GetRequest(BaseUrl.AllKidsClubDataShow).then(result=>{
        this.setState({Kids_Club_title:result[0]['Kids_Club_title'],Kids_Club_time_title:result[0]['Kids_Club_time_title'],Kids_Club_time_1:result[0]['Kids_Club_time_1'],Kids_Club_time_2:result[0]['Kids_Club_time_2'],Kids_Club_Description:result[0]['Kids_Club_Description'],Kids_Club_video:result[0]['Kids_Club_video']});
    }).catch(error=>{
      this.setState({Kids_Club_title:'???',Kids_Club_time_title:'???',Kids_Club_time_1:'???',Kids_Club_time_2:'???',Kids_Club_Description:'???',Kids_Club_video:'???'})
    })
  }
  render() {
    return (
      <Fragment>
        <div className='Kids'> 
          <Row className='KidsRo'>
              <Col className='KidCol1' lg={6} md={6} sm={6}>
                <div className='KidTitle'>
                    <h1 className='KidTiTle'>{this.state.Kids_Club_title}</h1>
                </div>
                <p className='KidDes'>{this.state.Kids_Club_Description}</p>
                <h6 className='KidDes'>{this.state.Kids_Club_time_title}</h6>
                <h6 className='KidDes'>{this.state.Kids_Club_time_1}</h6>
                <h6 className='KidDes'>{this.state.Kids_Club_time_2}</h6>

              </Col>
              <Col className='KidCol2' lg={6} md={6} sm={6}>
                <video className='KidVideoClass' src={AVideo} autoPlay loop muted />
              </Col>
          </Row>
        </div>
      </Fragment>
    )
  }
}

export default KidsClub