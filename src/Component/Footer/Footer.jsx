import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import FLogo from '../../Assets/Image/Brand.jpg'
import BaseUrl from '../../BaseUrl/BaseUrl'
import RestClient from '../../BaseUrl/RestClient'

class Footer extends Component {
  constructor(){
    super();
    this.state={
      footer_logo:'loading data.......',
      facebook:'loading data.......',
      instagram:'loading data.......',
      twitter:'loading data.......',
      copyright:'loading data.......',
      hours_of_oparetion_1	:'loading data.......',
      hours_of_oparetion_2:'loading data.......',
      address:'loading data.......'
    }
  }
  componentDidMount(){
    RestClient.GetRequest(BaseUrl.AllFooterDataShow).then(result=>{
        this.setState({footer_logo:result[0]['footer_logo'],facebook:result[0]['facebook'],instagram:result[0]['instagram'],twitter:result[0]['twitter'],copyright:result[0]['copyright'],hours_of_oparetion_1:result[0]['hours_of_oparetion_1'],hours_of_oparetion_2:result[0]['hours_of_oparetion_2'],address:result[0]['address']});
    }).catch(error=>{
      this.setState({footer_logo:'???',copyright:'???',facebook:'???',instagram:'???',twitter:'???',hours_of_oparetion_1:'???',hours_of_oparetion_2:'???',address:'???'})
    })
  }
  render() {
    return (
      <Fragment>
        <div className='FooterC'>
          <Row>
            <Col className='footerColumn1' lg={6} md={6} sm={6}>
              <Row>
                <Col lg={12} md={12} sm={12}>
                  <img className='footerLogo' src={FLogo} />
                </Col>
              </Row>
              <Row>
                <Col className='menuRow1' lg={12} md={12} sm={12}>
                  <a className='FooterOp' href='/career'>Careers</a>
                  <a className='FooterOp' href='/customer-service'>Customer Service</a>
                  <a className='FooterOp' href='/corporate-wellness'>Corporate Wellness</a>
                </Col>
              </Row>
              <Row>
                <Col className='menuRow2' lg={12} md={12} sm={12}>
                  <a className='FooterOp' href='/terms-of-use'>Terms Of Use</a>
                  <a className='FooterOp' href='/privacy'>Privacy Policy</a>
                  <a className='FooterOp' href='/faq'>FAQ</a>
                </Col>
              </Row>
              <Row>
                <Col className='menuRow3' lg={12} md={12} sm={12}>
                  <h1 className='copyright'>{this.state.copyright}</h1>
                </Col>
              </Row>
              <Row>
                <Col className='menuRow4' lg={12} md={12} sm={12}>
                  <h1 className='GADD'>{this.state.address}</h1>
                  <h1 className='ActivTitle'>Hours Of Oparetion</h1>
                  <h1 className='ActiveAtt'>{this.state.hours_of_oparetion_1}</h1>
                  <h1 className='ActiveAtt'>{this.state.hours_of_oparetion_2}</h1>

                </Col>
              </Row>
            </Col>
            <Col className='footerColumn2' lg={6} md={6} sm={6}>
              <div>
                <a src={this.state.facebook}><i className="fab m-1 h4 fa-facebook SocialFooter"></i></a>
                <a src={this.state.instagram}><i className="fab m-1 h4 fa-instagram SocialFooter"></i></a>
                <a src={this.state.twitter}><i className="fab m-1 h4 fa-twitter Social
                Footer"></i></a>
              </div>
            </Col>
          </Row>
        </div>
      </Fragment>
    )
  }
}

export default Footer