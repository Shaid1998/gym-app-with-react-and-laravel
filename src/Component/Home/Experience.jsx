import React, { Component, Fragment } from 'react'
import { Col, Row } from 'react-bootstrap'
import PSlider4 from '../../Assets/Image/PSlider4.jpg'
import BaseUrl from '../../BaseUrl/BaseUrl'
import RestClient from '../../BaseUrl/RestClient'

class Experience extends Component {
    constructor(){
        super();
        this.state={
            experience_title_1:'loading data.......',
            experience_title_2:'loading data.......',
            experience_title_3:'loading data.......',
            experience_description:'loading data.......',
            experience_image:'loading data.......'
        }
      }
      componentDidMount(){
        RestClient.GetRequest(BaseUrl.AllExperienceDataShow).then(result=>{
            this.setState({experience_title_1:result[0]['experience_title_1'],experience_title_2:result[0]['experience_title_2'],experience_title_3:result[0]['experience_title_3'],experience_description:result[0]['experience_description'],experience_image:result[0]['experience_image']});
        }).catch(error=>{
          this.setState({experience_title_1:'???',experience_title_2:'???',experience_title_3:'???',experience_description:'???',experience_image:'???'})
        })
      }
    render() {
        return (
            <Fragment>
                <div className='Experience'> 
                    <Row className='Experiencesec'>
                        <Col className='ExpColumn1' lg={6} md={6} sm={6}>
                            <div className='ExpTitlediv'>
                                <h1 className='ExpTitile'>{this.state.experience_title_1}</h1>
                                <h1 className='ExpTitile2'>{this.state.experience_title_2}</h1>
                                <h1 className='ExpTitile3'>{this.state.experience_title_3}</h1>
                            </div>
                            <p className='ExpMainDes'>{this.state.experience_description}</p>
                        </Col>
                        <Col className='ExpColumn2' lg={6} md={6} sm={6}>
                            <img className='ExpPersonalImg' src={PSlider4}  />
                        </Col>
                    </Row>
                </div>
            </Fragment>
        )
    }
}

export default Experience