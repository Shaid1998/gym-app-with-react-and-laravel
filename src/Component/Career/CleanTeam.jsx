import React, { Component, Fragment } from 'react'
import { Col, Row } from 'react-bootstrap'
import CleanImg from '../../Assets/Image/Careers/Cleaner.jpg'
import BaseUrl from '../../BaseUrl/BaseUrl'
import RestClient from '../../BaseUrl/RestClient'

class CleanTeam extends Component {
  constructor(){
    super();
    this.state={
      career_job_title_3:'loading data.......',
      career_job_description_3:'loading data.......',
      career_job_image_3:'loading data.......'
    }
  }
  componentDidMount(){
    RestClient.GetRequest(BaseUrl.AllCareerDataShow).then(result=>{
        this.setState({career_job_title_3:result[0]['career_job_title_3'],career_job_description_3:result[0]['career_job_description_3'],career_job_image_3:result[0]['career_job_image_3']});
    }).catch(error=>{
      this.setState({career_job_title_3:'???',career_job_description_3:'???',career_job_image_3:'???'})
    })
  }
  render() {
    return (
      <Fragment>
        <div className='CleaningCareer'>
          <Row className='CleanCarRoW'>
            <Col className='CleanCarCol1' lg={6} md={6} sm={6}>
              <div>
                <img className='CleanCarImg'  src={CleanImg} />
              </div>
            </Col>
            <Col className='CleanCarCol2' lg={6} md={6} sm={6}>
              <div className='CleanCarT'>
                <h1 className='CleanCarTitile'>{this.state.career_job_title_3}</h1>
              </div>
              <div className='CleanCarDescription'>
                <p className='CleanCarDes'>{this.state.career_job_description_3}</p>
              </div>
            </Col>
          </Row>
        </div>
      </Fragment>
    )
  }
}

export default CleanTeam