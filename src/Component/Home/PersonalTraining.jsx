import React, { Component , Fragment} from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import PSlider1 from '../../Assets/Image/PSlider1.jpg'


class PersonalTraining extends Component {
    render() {
        return (
            <Fragment>
                <Container className='Personal' fluid={true}> 
                    <Row className='PersonalTrain'>
                        <Col className='PersonalTrainColumn1' lg={6} md={6} sm={6}>
                            <div className='titlediv'>
                                <h1 className='MainTitile'>EXPERT </h1>
                                <h1 className='MainTitile'>PERSONAL </h1>
                                <h1 className='MainTitile'>TRAINING </h1>
                            </div>
                            <p className='MainDescription'>1GYM Gyms has the best personal training program in the Port Saint Lucie area. Our certified personal trainers are experts in their craft. We create the perfect programs to help you reach your goals. Everything begins with our energy and figuring out how to evolve that, then the journey begins. </p>
                            <a className='seTB'><button type="button" class="btn btn-primary btn-lg btn-block CupponButton">FREE PERSONAL TRAINING CUPOON</button></a>
                        </Col>
                        <Col className='PersonalTrainColumn2' lg={6} md={6} sm={6}>
                            <img className='personalImage' src={PSlider1}  />
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default PersonalTraining