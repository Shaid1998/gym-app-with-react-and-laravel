import React, { Component, Fragment } from 'react'
import { Col, Row } from 'react-bootstrap'
import RVideo from '../../Assets/Video/AMENITIESRecoverGo.mp4'
import BaseUrl from '../../BaseUrl/BaseUrl'
import RestClient from '../../BaseUrl/RestClient'

class RecoverGo extends Component {
  constructor(){
    super();
    this.state={
        recovery_title_1:'loading data.......',
        recovery_title_2:'loading data.......',
        recovery_title_3:'loading data.......',
        recovery_description:'loading data.......',
        recovery_image:'loading data.......'
    }
  }
  componentDidMount(){
    RestClient.GetRequest(BaseUrl.AllRecoveryLastDataShow).then(result=>{
        this.setState({recovery_title_1:result[0]['recovery_title_1'],recovery_title_2:result[0]['recovery_title_2'],recovery_title_3:result[0]['recovery_title_3'],recovery_description:result[0]['recovery_description'],recovery_image:result[0]['recovery_image']});
    }).catch(error=>{
      this.setState({recovery_title_1:'???',recovery_title_2:'???',recovery_title_3:'???',recovery_description:'???',recovery_image:'???'})
    })
  }
  render() {
    return (
      <Fragment>
        <div className='Recover'>
          <Row className='Recover1G'>
            <Col className='REco1' lg={6} md={6} sm={6}>
              <video className='KidVideoClass' src={RVideo} autoPlay loop muted />
            </Col>
            <Col className='REco2' lg={6} md={6} sm={6}>
              <div className='RecoT'>
                  <h1 className='RTi'>{this.state.recovery_title_1}</h1>
                  <h1 className='RTi'>{this.state.recovery_title_2}</h1>
                  <h1 className='RTi'>{this.state.recovery_title_3}</h1>
              </div>
              <div className='RecoDescription'>
                  <p className='RecoDes'>{this.state.recovery_description}</p>
              </div>
            </Col>
          </Row>
        </div>
      </Fragment>
    )
  }
}

export default RecoverGo