import React, { Component, Fragment } from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import AVideo from '../../Assets/Video/BackgroundTop.mp4'
import BaseUrl from '../../BaseUrl/BaseUrl'
import RestClient from '../../BaseUrl/RestClient'

class AmenitiesTop extends Component {
  constructor(){
    super();
    this.state={
      aminities_top_title:'loading data.......',
      aminities_top_Description:'loading data.......',
      aminities_top_video:'loading data.......'
    }
  }
  componentDidMount(){
    RestClient.GetRequest(BaseUrl.AllAminitiesTopDataShow).then(result=>{
        this.setState({aminities_top_title:result[0]['aminities_top_title'],aminities_top_Description:result[0]['aminities_top_Description'],aminities_top_video:result[0]['aminities_top_video']});
    }).catch(error=>{
      this.setState({aminities_top_title:'???',aminities_top_Description:'???',aminities_top_video:'???'})
    })
  }
  render() {
    return (
      <Fragment>
        <Container fluid={true} className='AmenitiesTop'>
          <video className='AmVideoClass' src={AVideo} autoPlay loop muted />
          <Row className='AmenitiesTopR'>
            <div className='AmTopT'>
              <h1 className='AmTitle'>{this.state.aminities_top_title}</h1>
              <h4 className='TTSubTitle'>{this.state.aminities_top_Description}</h4>
            </div>
            <div className='AmTopB'>
              <a className='FacilitiesButTop'><Button href='/reg' className='FYB' variant="success" size="huge">JOIN NOW</Button></a>
            </div>
          </Row>
        </Container>
      </Fragment>
    )
  }
}

export default AmenitiesTop