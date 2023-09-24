import React, { Component, Fragment } from 'react'
import { Col, Row } from 'react-bootstrap'
import WImg from '../../Assets/Image/CustomerService/Some.jpg'
import BaseUrl from '../../BaseUrl/BaseUrl'
import RestClient from '../../BaseUrl/RestClient'

class SomeWord extends Component {
  constructor(){
    super();
    this.state={
      corporate_wellness_topic_title_1:'loading data.......',
      corporate_wellness_topic_description_1:'loading data.......',
      career_job_image_2:'loading data.......'
    }
  }
  componentDidMount(){
    RestClient.GetRequest(BaseUrl.AllCorporateWellnessDataShow).then(result=>{
        this.setState({corporate_wellness_topic_title_1:result[0]['corporate_wellness_topic_title_1'],corporate_wellness_topic_description_1:result[0]['corporate_wellness_topic_description_1'],corporate_wellness_topic_image_1:result[0]['corporate_wellness_topic_image_1']});
    }).catch(error=>{
      this.setState({corporate_wellness_topic_title_1:'???',corporate_wellness_topic_description_1:'???',corporate_wellness_topic_image_1:'???'})
    })
  }
  render() {
    return (
      <Fragment>
        <div className='WellnessSome'>
          <Row className='WellnessRoW'>
            <Col className='WellnessCOl1' lg={6} md={6} sm={6}>
              <div>
                <img className='WellnessImgTF'  src={WImg} />
              </div>
            </Col>
            <Col className='WellnessCol2' lg={6} md={6} sm={6}>
              <div className='WellnessFloorT'>
                  <h1 className='WellnessTFTi'>{this.state.corporate_wellness_topic_title_1}</h1>
              </div>
              <div className='WellnessTFDescription'>
                  <p className='WellnessTFDes'>{this.state.corporate_wellness_topic_description_1}</p>
              </div>
            </Col>
          </Row>
        </div>
      </Fragment>
    )
  }
}

export default SomeWord