import React, { Component, Fragment } from 'react'
import { Col, Row } from 'react-bootstrap'
import TVideo from '../../Assets/Video/Tanning.mp4'
import BaseUrl from '../../BaseUrl/BaseUrl'
import RestClient from '../../BaseUrl/RestClient'

class Tanning extends Component {
  constructor(){
    super();
    this.state={
      Tanning_title:'loading data.......',
      Tanning_Description:'loading data.......',
      Tanning_video:'loading data.......'
    }
  }
  componentDidMount(){
    RestClient.GetRequest(BaseUrl.AllTanningDataShow).then(result=>{
        this.setState({Tanning_title:result[0]['Tanning_title'],Tanning_Description:result[0]['Tanning_Description'],Tanning_video:result[0]['Tanning_video']});
    }).catch(error=>{
      this.setState({Tanning_title:'???',Tanning_Description:'???',Tanning_video:'???'})
    })
  }
  render() {
    return (
      <Fragment>
        <div className='Tanning'>
          <Row className='TanningR'>
            <Col className='Tco1' lg={6} md={6} sm={6}>
              <video className='TanningVideoClass' src={TVideo} autoPlay loop muted />
            </Col>
            <Col className='Tco2' lg={6} md={6} sm={6}>
              <div className='TT'>
                  <h1 className='TTi'>{this.state.Tanning_title}</h1>
              </div>
              <div className='TDescription'>
                  <p className='TDes'>{this.state.Tanning_Description}</p>
              </div>
            </Col>
          </Row>
        </div>
      </Fragment>
    )
  }
}

export default Tanning