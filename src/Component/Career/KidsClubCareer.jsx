import React, { Component, Fragment } from 'react'
import { Col, Row } from 'react-bootstrap'
import KidImg from '../../Assets/Image/Careers/Kids.jpg'
import BaseUrl from '../../BaseUrl/BaseUrl'
import RestClient from '../../BaseUrl/RestClient'

class KidsClubCareer extends Component {
  constructor(){
    super();
    this.state={
      career_job_title_2:'loading data.......',
      career_job_description_2:'loading data.......',
      career_job_image_2:'loading data.......'
    }
  }
  componentDidMount(){
    RestClient.GetRequest(BaseUrl.AllCareerDataShow).then(result=>{
        this.setState({career_job_title_2:result[0]['career_job_title_2'],career_job_description_2:result[0]['career_job_description_2'],career_job_image_2:result[0]['career_job_image_2']});
    }).catch(error=>{
      this.setState({career_job_title_2:'???',career_job_description_2:'???',career_job_image_2:'???'})
    })
  }
  render() {
    return (
      <Fragment>
        <div className='KidsClubCareer'>
          <Row className='KidsCarRoW'>
            <Col className='KidsCarCol1' lg={6} md={6} sm={6}>
              <div className='KidsCarT'>
                  <h1 className='KidsCarTitile'>{this.state.career_job_title_2}</h1>
              </div>
              <div className='KidsCarDescription'>
                  <p className='KidsCarDes'>{this.state.career_job_description_2}</p>
              </div>
            </Col>
            <Col className='KidsCarCol2' lg={6} md={6} sm={6}>
              <div>
                <img className='KidsCarImg'  src={KidImg} />
              </div>
            </Col>
          </Row>
        </div>
      </Fragment>
    )
  }
}

export default KidsClubCareer