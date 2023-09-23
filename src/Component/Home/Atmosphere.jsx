import React, { Component, Fragment } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import PSlider1 from '../../Assets/Image/PSlider1.jpg'
import BaseUrl from '../../BaseUrl/BaseUrl'
import RestClient from '../../BaseUrl/RestClient'

class Atmosphere extends Component {
    constructor(){
        super();
        this.state={
            atmosphere_title:'loading data.......',
            atmosphere_description:'loading data.......',
            atmosphere_image:'loading data.......'
        }
      }
      componentDidMount(){
        RestClient.GetRequest(BaseUrl.AllAtmosphereDataShow).then(result=>{
            this.setState({atmosphere_title:result[0]['atmosphere_title'],atmosphere_description:result[0]['atmosphere_description'],atmosphere_image:result[0]['atmosphere_image']});
        }).catch(error=>{
          this.setState({atmosphere_title:'???',atmosphere_description:'???',atmosphere_image:'???'})
        })
      }
    render() {
        return (
            <Fragment>
                <div className='Atmosphere'> 
                    <Row className='atom'>
                        <Col className='atmColumn2' lg={6} md={6} sm={6}>
                            <img className='atmimage' src={PSlider1}  />
                        </Col>
                        <Col className='atmColumn1' lg={6} md={6} sm={6}>
                            
                            <div className='atmtitlediv'>
                                <h1 className='atmMainTitile'>{this.state.atmosphere_title}</h1>
                                <h5 className='atmMainDescription'>{this.state.atmosphere_description}</h5>
                            </div>
                            <div className='buttonClass'>
                                <Button className='btn btn-primary JoinButton'>START YOUR JOURNEY</Button>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Fragment>
        )
    }
}

export default Atmosphere