import React, { Component, Fragment } from 'react'
import { Col, Row } from 'react-bootstrap'
import CImg from '../../Assets/Image/Fac/cardio.jpg'
import BaseUrl from '../../BaseUrl/BaseUrl'
import RestClient from '../../BaseUrl/RestClient'

class Cardio extends Component {
  constructor(){
    super();
    this.state={
      Cardio_title:'loading data.......',
      Cardio_description:'loading data.......',
      Cardio_image:'loading data.......'
    }
  }
  componentDidMount(){
    RestClient.GetRequest(BaseUrl.AllCardioDataShow).then(result=>{
        this.setState({Cardio_title:result[0]['Cardio_title'],Cardio_description:result[0]['Cardio_description'],Cardio_image:result[0]['Cardio_image']});
    }).catch(error=>{
      this.setState({Cardio_title:'???',Cardio_description:'???',Cardio_image:'???'})
    })
  }
  render() {
    return (
      <Fragment>
        <div className='Cardio'> 
          <Row className='CarRo'>
              <Col className='CCOL1' lg={6} md={6} sm={6}>
                  <div className='CATitle'>
                      <h1 className='CaTiTle'>{this.state.Cardio_title}</h1>
                  </div>
                  <p className='CaDes'>{this.state.Cardio_description}</p>
              </Col>
              <Col className='CCOL2' lg={6} md={6} sm={6}>
                  <img className='CaIMg'  src={CImg} />
              </Col>
          </Row>
        </div>
      </Fragment>
    )
  }
}

export default Cardio