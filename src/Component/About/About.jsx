import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AbImg from '../../Assets/Image/About/goalAndMission.jpg'
import BaseUrl from '../../BaseUrl/BaseUrl'
import RestClient from '../../BaseUrl/RestClient'

class About extends Component {
    constructor(){
        super();
        this.state={
          About_title:'loading data.......',
          About_Topic_title:'loading data.......',
          About__TopicDescription:'loading data.......',
          About_image:'loading data.......'
        }
      }
      componentDidMount(){
        RestClient.GetRequest(BaseUrl.AllAboutDataShow).then(result=>{
            this.setState({About_title:result[0]['About_title'],About_Topic_title:result[0]['About_Topic_title'],About__TopicDescription:result[0]['About__TopicDescription'],About_image:result[0]['About_image']});
        }).catch(error=>{
          this.setState({About_title:'???',About_Topic_title:'???',About__TopicDescription:'???',About_image:'???'})
        })
      }
  render() {
    return (
        <Fragment>
            <Row className='About'>
                <Col lg={12} md={12} sm={12}>
                    <Row className='TopRow12'>
                        <div>
                            <h1 className='WelcomT'>{this.state.About_title}</h1>
                        </div>
                    </Row>
                    <Row>
                        <Col className='ACl' lg={6} md={6} sm={6}>
                            <img className='AboutImg' src={AbImg} />
                        </Col>
                        <Col className='AC2' lg={6} md={6} sm={6}>
                            <h1 className='AboutTitle'>{this.state.About_Topic_title}</h1>
                            <h4 className='AboutDes'>{this.state.About__TopicDescription}</h4>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Fragment>
    )
  }
}

export default About