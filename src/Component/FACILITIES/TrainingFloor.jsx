import React, { Component, Fragment } from 'react'
import { Col, Row } from 'react-bootstrap'
import TImg from '../../Assets/Image/Fac/Floor.jpg'
import BaseUrl from '../../BaseUrl/BaseUrl'
import RestClient from '../../BaseUrl/RestClient'

class TrainingFloor extends Component { 
  constructor(){
    super();
    this.state={
      Training_floor_title:'loading data.......',
      Training_floor_description:'loading data.......',
      Training_floor_image:'loading data.......'
    }
  }
  componentDidMount(){
    RestClient.GetRequest(BaseUrl.AllTrainingFloorDataShow).then(result=>{
        this.setState({Training_floor_title:result[0]['Training_floor_title'],Training_floor_description:result[0]['Training_floor_description'],Training_floor_image:result[0]['Training_floor_image']});
    }).catch(error=>{
      this.setState({Training_floor_title:'???',Training_floor_description:'???',Training_floor_image:'???'})
    })
  }
  render() {
    return (
      <Fragment>
        <div className='TrainFloor'>
          <Row className='TrainRoW'>
            <Col className='COl1' lg={6} md={6} sm={6}>
              <div>
                <img className='ImgTF'  src={TImg} />
              </div>
            </Col>
            <Col className='Col2' lg={6} md={6} sm={6}>
              <div className='FloorT'>
                  <h1 className='TFTi'>{this.state.Training_floor_title}</h1>
              </div>
              <div className='TFDescription'>
                  <p className='TFDes'>{this.state.Training_floor_description}</p>
              </div>
            </Col>
          </Row>
        </div>
      </Fragment>
    )
  }
}

export default TrainingFloor