import React, { Component, Fragment } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import CWImg from '../../Assets/Image/CustomerService/Wellness.jpg'
import BaseUrl from '../../BaseUrl/BaseUrl'
import RestClient from '../../BaseUrl/RestClient'

class CorporateWellness extends Component {
  constructor(){
    super();
    this.state={
      corporate_wellness_topic_title_2:'loading data.......',
      corporate_wellness_topic_description_2:'loading data.......',
      career_job_image_2:'loading data.......'
    }
  }
  componentDidMount(){
    RestClient.GetRequest(BaseUrl.AllCorporateWellnessDataShow).then(result=>{
        this.setState({corporate_wellness_topic_title_2:result[0]['corporate_wellness_topic_title_2'],corporate_wellness_topic_description_2:result[0]['corporate_wellness_topic_description_2'],corporate_wellness_topic_image_2:result[0]['corporate_wellness_topic_image_2']});
    }).catch(error=>{
      this.setState({corporate_wellness_topic_title_2:'???',corporate_wellness_topic_description_2:'???',corporate_wellness_topic_image_2:'???'})
    })
  }
  render() {
    return (
      <Fragment>
        <div className='CorporateWellness'> 
          <Row className='CorporateCarRo'>
              <Col className='CorporateCCOL1' lg={6} md={6} sm={6}>
                  <div className='CorporateCATitle'>
                      <h1 className='CorporateCaTiTle'>{this.state.corporate_wellness_topic_title_2}</h1>
                  </div>
                  <p className='CorporateCaDes'>{this.state.corporate_wellness_topic_description_2}</p>
                  <Button href="mailto:operationspsl@1gym.com" className='CorporateButton2' variant="success">INQUIRE</Button>
              </Col>
              <Col className='CorporateCCOL2' lg={6} md={6} sm={6}>
                  <img className='CorporateCaIMg'  src={CWImg} />
              </Col>
          </Row>
        </div>
      </Fragment>
    )
  }
}

export default CorporateWellness