import React, { Component, Fragment } from 'react'
import { Col, Row } from 'react-bootstrap'
import PSlider5 from '../../Assets/Image/PSlider5.jpg'
import BaseUrl from '../../BaseUrl/BaseUrl'
import RestClient from '../../BaseUrl/RestClient'

class Recovery extends Component {
    constructor(){
        super();
        this.state={
            recovery_title_1:'loading data.......',
            recovery_title_2:'loading data.......',
            recovery_title_3:'loading data.......',
            recovery_description:'loading data.......',
            recovery_image:'loading data.......'
        }
      }
      componentDidMount(){
        RestClient.GetRequest(BaseUrl.AllRecoveryDataShow).then(result=>{
            this.setState({recovery_title_1:result[0]['recovery_title_1'],recovery_title_2:result[0]['recovery_title_2'],recovery_title_3:result[0]['recovery_title_3'],recovery_description:result[0]['recovery_description'],recovery_image:result[0]['recovery_image']});
        }).catch(error=>{
          this.setState({recovery_title_1:'???',recovery_title_2:'???',recovery_title_3:'???',recovery_description:'???',recovery_image:'???'})
        })
      }
  render() {
    return (
        <Fragment>
            <div className='Recovery'> 
                <Row className='RecRowClass'>
                    <Col className='RecColumn2' lg={6} md={6} sm={6}>
                        <img className='RecPersonalImg' src={PSlider5}  />
                    </Col>
                    <Col className='RecColumn1' lg={6} md={6} sm={6}>
                        <div className='ExpTitlediv'>
                            <h1 className='RecTitile'>{this.state.recovery_title_1}</h1>
                            <h1 className='RecTitile2'>{this.state.recovery_title_2}</h1>
                            <h1 className='RecTitile3'>{this.state.recovery_title_3}</h1>
                        </div>
                        <p className='RecMainDes'>{this.state.recovery_description}</p>
                    </Col>
                </Row>
            </div>
      </Fragment>
    )
  }
}

export default Recovery