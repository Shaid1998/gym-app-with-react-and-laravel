import React, { Component, Fragment } from 'react'
import { Col, Row } from 'react-bootstrap'
import AdvisorImg from '../../Assets/Image/Careers/Advisor.jpg'
import BaseUrl from '../../BaseUrl/BaseUrl'
import RestClient from '../../BaseUrl/RestClient'

class MembershipAdvisor extends Component {
  constructor(){
    super();
    this.state={
      career_job_title_5:'loading data.......',
      career_job_description_5:'loading data.......',
      career_job_image_5:'loading data.......'
    }
  }
  componentDidMount(){
    RestClient.GetRequest(BaseUrl.AllCareerDataShow).then(result=>{
        this.setState({career_job_title_5:result[0]['career_job_title_5'],career_job_description_5:result[0]['career_job_description_5'],career_job_image_5:result[0]['career_job_image_5']});
    }).catch(error=>{
      this.setState({career_job_title_5:'???',career_job_description_5:'???',career_job_image_5:'???'})
    })
  }
  render() {
    return (
      <Fragment>
        <div className='AdvisorCareer'>
          <Row className='AdvisorCarRoW'>
            <Col className='AdvisorCarCol1' lg={6} md={6} sm={6}>
              <div>
                <img className='AdvisorCarImg'  src={AdvisorImg} />
              </div>
            </Col>
            <Col className='AdvisorCarCol2' lg={6} md={6} sm={6}>
              <div className='AdvisorCarT'>
                <h1 className='AdvisorCarTitile'>{this.state.career_job_title_5}</h1>
              </div>
              <div className='AdvisorCarDescription'>
                <p className='AdvisorCarDes'>{this.state.career_job_description_5}</p>
              </div>
            </Col>
          </Row>
        </div>
      </Fragment>
    )
  }
}

export default MembershipAdvisor