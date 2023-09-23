import React, { Component , Fragment} from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import PSlider1 from '../../Assets/Image/PSlider1.jpg'
import BaseUrl from '../../BaseUrl/BaseUrl'
import RestClient from '../../BaseUrl/RestClient'


class PersonalTraining extends Component {
    constructor(){
        super();
        this.state={
            training_title_1:'.......',
            training_title_2:'.......',
            training_title_3:'.......',
            training_description:'.......',
            image:'.......'
        }
      }
      componentDidMount(){
        RestClient.GetRequest(BaseUrl.AllTrainingShow).then(result=>{
            this.setState({training_title_1:result[0]['training_title_1'],training_title_2:result[0]['training_title_2'],training_title_3:result[0]['training_title_3'],training_description:result[0]['training_description'],image:result[0]['image']});
        }).catch(error=>{
          this.setState({training_title_1:'???',training_title_2:'???',training_title_3:'???',training_description:'???',image:'???'})
        })
      }
    render() {
        return (
            <Fragment>
                <div className='Personal'> 
                    <Row className='PersonalTrain'>
                        <Col className='PersonalTrainColumn1' lg={6} md={6} sm={6}>
                            <div className='titlediv'>
                                <h1 className='MainTitile'>{this.state.training_title_1}</h1>
                                <h1 className='MainTitile'>{this.state.training_title_2}</h1>
                                <h1 className='MainTitile'>{this.state.training_title_3}</h1>
                            </div>
                            <p className='MainDescription'>{this.state.training_description}</p>
                            <a className='seTB'><button type="button" class="btn btn-primary btn-lg btn-block CupponButton">FREE PERSONAL TRAINING CUPOON</button></a>
                        </Col>
                        <Col className='PersonalTrainColumn2' lg={6} md={6} sm={6}>
                            <img className='personalImage' src={PSlider1}  />
                        </Col>
                    </Row>
                </div>
            </Fragment>
        )
    }
}

export default PersonalTraining