import React, { Component, Fragment } from 'react'
import { Col, Row } from 'react-bootstrap'
import SImg from '../../Assets/Image/Fac/strength.jpg'
import BaseUrl from '../../BaseUrl/BaseUrl'
import RestClient from '../../BaseUrl/RestClient'

class Strength extends Component {
  constructor(){
    super();
    this.state={
      Strength_title:'loading data.......',
      Strength_Description:'loading data.......',
      Strength_image:'loading data.......'
    }
  }
  componentDidMount(){
    RestClient.GetRequest(BaseUrl.AllStrengthDataShow).then(result=>{
        this.setState({Strength_title:result[0]['Strength_title'],Strength_Description:result[0]['Strength_Description'],Strength_image:result[0]['Strength_image']});
    }).catch(error=>{
      this.setState({Strength_title:'???',Strength_Description:'???',Strength_image:'???'})
    })
  }
  render() {
    return (
      <Fragment>
        <div className='Strength'>
          <Row className='SRo'>
            <Col className='SC1' lg={6} md={6} sm={6}>
              <div>
                <img className='StImg'  src={SImg} />
              </div>
            </Col>
            <Col className='SC2' lg={6} md={6} sm={6}>
              <div className='STTitle'>
                <h1 className='STitle'>{this.state.Strength_title}</h1>
              </div>
              <div>
                <p className='SSubDes'>{this.state.Strength_Description}</p>
              </div>
            </Col>
          </Row>
        </div>
      </Fragment>
    )
  }
}

export default Strength