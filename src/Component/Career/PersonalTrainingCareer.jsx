import React, { Component, Fragment } from 'react'
import { Col, Row } from 'react-bootstrap'
import PersonalTImg from '../../Assets/Image/Careers/Trainer.jpg'
import BaseUrl from '../../BaseUrl/BaseUrl'
import RestClient from '../../BaseUrl/RestClient'

class PersonalTrainingCareer extends Component {
  constructor(){
    super();
    this.state={
      career_job_title_1:'loading data.......',
      career_job_description_1:'loading data.......',
      career_job_image_1:'loading data.......'
    }
  }
  componentDidMount(){
    RestClient.GetRequest(BaseUrl.AllCareerDataShow).then(result=>{
        this.setState({career_job_title_1:result[0]['career_job_title_1'],career_job_description_1:result[0]['career_job_description_1'],career_job_image_1:result[0]['career_job_image_1']});
    }).catch(error=>{
      this.setState({career_job_title_1:'???',career_job_description_1:'???',career_job_image_1:'???'})
    })
  }
  render() {
    return (
      <Fragment>
        <div className='PersonalTrainingCareer'>
          <Row className='PersonalCarRoW'>
            <Col className='PersonalCarCol1' lg={6} md={6} sm={6}>
              <div>
                <img className='PersonalCarImg'  src={PersonalTImg} />
              </div>
            </Col>
            <Col className='PersonalCarCol2' lg={6} md={6} sm={6}>
              <div className='PerCarT'>
                  <h1 className='PerCarTitile'>{this.state.career_job_title_1}</h1>
              </div>
              <div className='PersonalCarDescription'>
                  <p className='PerCarDes'>{this.state.career_job_description_1}</p>
              </div>
            </Col>
          </Row>
        </div>
      </Fragment>
    )
  }
}

export default PersonalTrainingCareer