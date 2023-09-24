import React, { Component, Fragment } from 'react'
import { Col, Row } from 'react-bootstrap'
import WelcomeDeskImg from '../../Assets/Image/Careers/Welcome.jpg'
import BaseUrl from '../../BaseUrl/BaseUrl'
import RestClient from '../../BaseUrl/RestClient'

class WelcomeDesk extends Component {
  constructor(){
    super();
    this.state={
      career_job_title_4:'loading data.......',
      career_job_description_4:'loading data.......',
      career_job_image_4:'loading data.......'
    }
  }
  componentDidMount(){
    RestClient.GetRequest(BaseUrl.AllCareerDataShow).then(result=>{
        this.setState({career_job_title_4:result[0]['career_job_title_4'],career_job_description_4:result[0]['career_job_description_4'],career_job_image_4:result[0]['career_job_image_4']});
    }).catch(error=>{
      this.setState({career_job_title_4:'???',career_job_description_4:'???',career_job_image_4:'???'})
    })
  }
  render() {
    return (
      <Fragment>
        <div className='WelcomeDeskCareer'>
          <Row className='WelcomeCarRoW'>
            <Col className='WelcomeCarCol1' lg={6} md={6} sm={6}>
              <div className='WelcomeCarT'>
                  <h1 className='WelcomeCarTitile'>{this.state.career_job_title_4}</h1>
              </div>
              <div className='WelcomeCarDescription'>
                  <p className='WelcomeCarDes'>{this.state.career_job_description_4}</p>
              </div>
            </Col>
            <Col className='WelcomeCarCol2' lg={6} md={6} sm={6}>
              <div>
                <img className='WelcomeCarImg'  src={WelcomeDeskImg} />
              </div>
            </Col>
          </Row>
        </div>
      </Fragment>
    )
  }
}

export default WelcomeDesk