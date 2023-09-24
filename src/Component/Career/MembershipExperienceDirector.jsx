import React, { Component, Fragment } from 'react'
import { Col, Row } from 'react-bootstrap'
import DirectingImg from '../../Assets/Image/Careers/Director.jpg'
import BaseUrl from '../../BaseUrl/BaseUrl'
import RestClient from '../../BaseUrl/RestClient'

class MembershipExperienceDirector extends Component {
  constructor(){
    super();
    this.state={
      career_job_title_6:'loading data.......',
      career_job_description_6:'loading data.......',
      career_job_image_6:'loading data.......'
    }
  }
  componentDidMount(){
    RestClient.GetRequest(BaseUrl.AllCareerDataShow).then(result=>{
        this.setState({career_job_title_6:result[0]['career_job_title_6'],career_job_description_6:result[0]['career_job_description_6'],career_job_image_6:result[0]['career_job_image_6']});
    }).catch(error=>{
      this.setState({career_job_title_6:'???',career_job_description_6:'???',career_job_image_6:'???'})
    })
  }
  render() {
    return (
      <Fragment>
        <div className='DirectorDeskCareer'>
          <Row className='DirectorCarRoW'>
            <Col className='DirectorCarCol1' lg={6} md={6} sm={6}>
              <div className='DirectorCarT'>
                  <h1 className='DirectorCarTitile'>{this.state.career_job_title_6}</h1>
              </div>
              <div className='DirectorCarDescription'>
                  <p className='DirectorCarDes'>{this.state.career_job_description_6}</p>
              </div>
            </Col>
            <Col className='DirectorCarCol2' lg={6} md={6} sm={6}>
              <div>
                <img className='DirectorCarImg'  src={DirectingImg} />
              </div>
            </Col>
          </Row>
        </div>
      </Fragment>
    )
  }
}

export default MembershipExperienceDirector