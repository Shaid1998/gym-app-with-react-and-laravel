import React, { Component, Fragment } from 'react'
import { Row } from 'react-bootstrap'
import BaseUrl from '../../BaseUrl/BaseUrl'
import RestClient from '../../BaseUrl/RestClient'

class CWTop extends Component {
  constructor(){
    super();
    this.state={
      corporate_wellness_top_title:'loading data.......',
      corporate_wellness_top_sub_title:'loading data.......',
    }
  }
  componentDidMount(){
    RestClient.GetRequest(BaseUrl.AllCorporateWellnessDataShow).then(result=>{
        this.setState({corporate_wellness_top_title:result[0]['corporate_wellness_top_title'],corporate_wellness_top_sub_title:result[0]['corporate_wellness_top_sub_title']});
    }).catch(error=>{
      this.setState({corporate_wellness_top_title:'???',corporate_wellness_top_sub_title:'???'})
    })
  }
  render() {
    return (
      <Fragment>
        <div className='CWTop'>
          <Row className='CWTopR'>
            <h1 className='CWTTitle'>{this.state.corporate_wellness_top_title}</h1>
            <h6 className='CWTSubTitle'>{this.state.corporate_wellness_top_sub_title}</h6>
          </Row>
        </div>
      </Fragment>
    )
  }
}

export default CWTop