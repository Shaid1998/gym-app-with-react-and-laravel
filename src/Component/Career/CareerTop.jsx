import React, { Component, Fragment } from 'react'
import { Row } from 'react-bootstrap'
import BaseUrl from '../../BaseUrl/BaseUrl'
import RestClient from '../../BaseUrl/RestClient'

class CareerTop extends Component {
  constructor(){
    super();
    this.state={
      career_top_title:'loading data.......',
      career_top_sub_title:'loading data.......',
    }
  }
  componentDidMount(){
    RestClient.GetRequest(BaseUrl.AllCareerDataShow).then(result=>{
        this.setState({career_top_title:result[0]['career_top_title'],career_top_sub_title:result[0]['career_top_sub_title']});
    }).catch(error=>{
      this.setState({career_top_title:'???',career_top_sub_title:'???'})
    })
  }
  render() {
    return (
      <Fragment>
        <Row className='CTop'>
          <div className='DivRow'>
            <h1 className='CarTitle'>{this.state.career_top_title}</h1>
            <h6 className='CarSubTitle'>{this.state.career_top_sub_title}</h6>
        </div>
        </Row>
      </Fragment>
    )
  }
}

export default CareerTop