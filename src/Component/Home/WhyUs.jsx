import React, { Component, Fragment } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import PSlider1 from '../../Assets/Image/PSlider2.jpg'
import video from '../../Assets/Video/BackgroundTop.mp4'
import BaseUrl from '../../BaseUrl/BaseUrl'
import RestClient from '../../BaseUrl/RestClient'

class WhyUs extends Component {
    constructor(){
        super();
        this.state={
            why_us_title:'.......',
            why_us_sub_title:'.......',
            why_us_option_1:'.......',
            why_us_option_2:'.......',
            why_us_option_3:'.......',
            why_us_option_4:'.......',
            why_us_option_5:'.......',
            why_us_option_6:'.......',
            why_us_image:'.......',
            why_us_video:'.......'
        }
      }
      componentDidMount(){
        RestClient.GetRequest(BaseUrl.AllWHyUsDataShow).then(result=>{
            this.setState({why_us_title:result[0]['why_us_title'],why_us_sub_title:result[0]['why_us_sub_title'],why_us_option_1:result[0]['why_us_option_1'],why_us_option_2:result[0]['why_us_option_2'],why_us_option_3:result[0]['why_us_option_3'],why_us_option_4:result[0]['why_us_option_4'],why_us_option_5:result[0]['why_us_option_5'],why_us_option_6:result[0]['why_us_option_6'],why_us_image:result[0]['why_us_image'],why_us_video:result[0]['why_us_video']});
        }).catch(error=>{
          this.setState({why_us_title:'???',why_us_sub_title:'???',why_us_option_1:'???',why_us_option_2:'???',why_us_option_3:'???',why_us_option_4:'???',why_us_option_5:'???',why_us_option_6:'???',why_us_image:'???',why_us_video:'???'})
        })
      }
    render() {
        return (
            <Fragment>
                <div className='WhyPersonal' > 
                    <video className='VideoClass' src={video} autoPlay loop muted />
                    <Row className='WhyPersonalTrain'>
                        <Col className='WhyColumn2' lg={6} md={6} sm={6}> 
                            <img className='image' src={PSlider1}  />
                        </Col>
                        <Col className='WhyColumn1' lg={6} md={6} sm={6}>
                            
                            <div className='whytitlediv'>
                                <h1 className='WhyMainTitile'>{this.state.why_us_title}</h1>
                                <h5 className='WHYMainDescription'>{this.state.why_us_sub_title}</h5>
                            </div>
                            <div className='whymenudiv1'>
                               <h4 className='WhyMenu1'><i class="fa fa-check checkSet1" aria-hidden="true"></i>{this.state.why_us_option_1}</h4> 
                               <h4 className='WhyMenu1'><i class="fa fa-check checkSet1" aria-hidden="true"></i>{this.state.why_us_option_2}</h4> 
                               <h4 className='WhyMenu1'><i class="fa fa-check checkSet1" aria-hidden="true"></i>{this.state.why_us_option_3}</h4> 
                               <h4 className='WhyMenu1'><i class="fa fa-check checkSet1" aria-hidden="true"></i>{this.state.why_us_option_4}</h4> 
                            </div>
                            <div className='buttonClass1'>
                                <Button className='btn btn-primary JoinButton1'>START YOUR JOURNEY</Button>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Fragment>
        )
    }
}

export default WhyUs