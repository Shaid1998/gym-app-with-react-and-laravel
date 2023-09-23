
import React, { Component, Fragment } from 'react'
import BaseUrl from '../../BaseUrl/BaseUrl'
import RestClient from '../../BaseUrl/RestClient'

class JoinToday extends Component {
    constructor(){
        super();
        this.state={
            Join_Today_title:'loading data.......',
            Join_Today_map:'loading data.......',
            Join_Today_image:'loading data.......'
        }
      }
      componentDidMount(){
        RestClient.GetRequest(BaseUrl.AllJoinTodayDataShow).then(result=>{
            this.setState({Join_Today_title:result[0]['Join_Today_title'],Join_Today_map:result[0]['Join_Today_map'],Join_Today_image:result[0]['Join_Today_image']});
        }).catch(error=>{
          this.setState({Join_Today_title:'???',Join_Today_map:'???',Join_Today_image:'???'})
        })
      }
    render() {
        return (
            <Fragment>
                <div className='JoinT'>
                    <div className='JoinClass'>
                        <h1 className='JoinTitle'>{this.state.Join_Today_title}</h1>
                        <button className='btn btn-primary btn-block ButtonSet' size="lg">JOIN YOUR JUARNEY</button>
                    </div>
                    <div>
                        <iframe src={this.state.Join_Today_map} width="100%" height="350" style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </Fragment> 
        )
    }
}

export default JoinToday