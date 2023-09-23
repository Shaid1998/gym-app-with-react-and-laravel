import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Img1 from '../../Assets/Image/PSlider6.jpg'
import Img2 from '../../Assets/Image/PSlider3.jpg'
import BaseUrl from '../../BaseUrl/BaseUrl'
import RestClient from '../../BaseUrl/RestClient'

class TurfZone extends Component {
    constructor(){
        super();
        this.state={
            turfzone_title_1:'loading data.......',
            turfzone_title_2:'loading data.......',
            turfzone_title_3:'loading data.......',
            turfzone_description:'loading data.......',
            turfzone_image:'loading data.......'
        }
      }
      componentDidMount(){
        RestClient.GetRequest(BaseUrl.AllTurfZoneDataShow).then(result=>{
            this.setState({turfzone_title_1:result[0]['turfzone_title_1'],turfzone_title_2:result[0]['turfzone_title_2'],turfzone_title_3:result[0]['turfzone_title_3'],turfzone_description:result[0]['turfzone_description'],turfzone_image:result[0]['turfzone_image']});
        }).catch(error=>{
          this.setState({turfzone_title_1:'???',turfzone_title_2:'???',turfzone_title_3:'???',turfzone_description:'???',turfzone_image:'???'})
        })
      }
    render() {
        return (
            <Fragment> 

                <div className='Turf'> 
                    <Row className='TurfZone'>
                        <Col className='TurfColumn1' lg={6} md={6} sm={6}>
                            <div className='ExpTitlediv'>
                                <h1 className='TurfTitile'>{this.state.turfzone_title_1}</h1>
                                <h1 className='TurfTitile2'>{this.state.turfzone_title_2}</h1>
                                <h1 className='TurfTitile3'>{this.state.turfzone_title_3}</h1>
                            </div>
                            <p className='TurfMainDes'>{this.state.turfzone_description}</p>
                        </Col> 
                        <Col className='TurfColumn2' lg={6} md={6} sm={6}>
                            <Row className='MIddleRow'>
                                <Col lg={6} md={6} sm={6}>
                                    <img className='TurfImg1' src={Img1}  />
                                </Col>
                                <Col lg={6} md={6} sm={6}>
                                    <img className='TurfImg2' src={Img2}  />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </Fragment>
        )
    }
}

export default TurfZone