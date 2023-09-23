import React, { Component, Fragment } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import PTrain from '../../Assets/Image/Training/ptrain.jpg'
import BaseUrl from '../../BaseUrl/BaseUrl'
import RestClient from '../../BaseUrl/RestClient'

class Training extends Component {
    constructor(){
        super();
        this.state={
            training_top_title:'.......',
            training_top_sub_title:'.......',
            taining_title:'.......',
            taining_details:'.......',
            training_image:'.......'
        }
      }
      componentDidMount(){
        RestClient.GetRequest(BaseUrl.AllTrainingData).then(result=>{
            this.setState({training_top_title:result[0]['training_top_title'],training_top_sub_title:result[0]['training_top_sub_title'],taining_title:result[0]['taining_title'],taining_details:result[0]['taining_details'],training_image:result[0]['training_image']});
        }).catch(error=>{
          this.setState({training_top_title:'???',training_top_sub_title:'???',taining_title:'???',taining_details:'???',training_image:'???'})
        })
      }
  render() {
    return (
      <Fragment>
        <Row className='R1'>
            <div className='TrTitle'>
                <h1 className='TrHead'>{this.state.training_top_title}</h1>
            </div>
            <div className='TrDescription'>
                <h4 className='DesTr'>{this.state.training_top_sub_title}</h4>
            </div>
        </Row>
        <hr className='LineH' />
        <Row className='R2'>
            <Col className='C1254' lg={6} md={6} sm={6}>
                <div>
                    <img className='pTIMG' src={PTrain} />
                </div>
            </Col>
            <Col className='C1252' lg={6} md={6} sm={6}>
                <div className='PTrTitle'>
                    <h1 className='TrTi'>1GYM</h1>
                </div>
                <div className='PTrDescription'>
                    <p className='TrDes'>{this.state.taining_details}</p>
                    
                </div>
                <div>
                    <a className='PTrainBut'><Button href='/personaltraining' variant="success" className='TrBtn' size="huge">JOIN NOW</Button></a>
                </div>
            </Col>
        </Row>
      </Fragment>
    )
  }
}

export default Training