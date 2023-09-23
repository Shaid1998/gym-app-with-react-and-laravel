import React, { Component, Fragment } from 'react'
import { Button, Row } from 'react-bootstrap'
import BaseUrl from '../../BaseUrl/BaseUrl'
import RestClient from '../../BaseUrl/RestClient'

class FacTop extends Component {
  constructor(){
    super();
    this.state={
      facilities_title:'loading data.......',
      facilities_Sub_title:'loading data.......',
      facilities_image:'loading data.......'
    }
  }
  componentDidMount(){
    RestClient.GetRequest(BaseUrl.AllFacilitiesDataShow).then(result=>{
        this.setState({facilities_title:result[0]['facilities_title'],facilities_Sub_title:result[0]['facilities_Sub_title'],facilities_image:result[0]['facilities_image']});
    }).catch(error=>{
      this.setState({facilities_title:'???',facilities_Sub_title:'???',facilities_image:'???'})
    })
  }
  render() {
    return (
      <Fragment>
        <div className='FTop'>
          <Row className='FRO'>
            <div className='Div1'>
              <h1 className='TTTitle'>{this.state.facilities_title}</h1>
              <h4 className='TTSubTitle'>{this.state.facilities_Sub_title}</h4>
            </div>
            <div className='Div2'>
              <a className='FacilitiesButTop'><Button href='/reg' className='FYB' variant="success" size="huge">JOIN NOW</Button></a>
            </div>
          </Row>
        </div>
      </Fragment>
    )
  }
}

export default FacTop