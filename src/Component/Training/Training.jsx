import React, { Component, Fragment } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import PTrain from '../../Assets/Image/Training/ptrain.jpg'

class Training extends Component {
  render() {
    return (
      <Fragment>
        <Row className='R1'>
            <div className='TrTitle'>
                <h1 className='TrHead'>TRAINING</h1>
            </div>
            <div className='TrDescription'>
                <h4 className='DesTr'>Our certified personal trainers create the perfect programs to help you reach your goals, designed 100% around you.</h4>
            </div>
        </Row>
        <hr className='LineH' />
        <Row className='R2'>
            <Col className='C1' lg={6} md={6} sm={6}>
                <div>
                    <img className='pTIMG' src={PTrain} />
                </div>
            </Col>
            <Col className='C2' lg={6} md={6} sm={6}>
                <div className='PTrTitle'>
                    <h1 className='TrTi'>1GYM</h1>
                </div>
                <div className='PTrDescription'>
                    <p className='TrDes'>Here at 1GYM, we focus on bringing you the most powerful workouts to meet your needs: our toolbox includes weighted battle ropes, kettlebells, TRX® suspension straps, Turf Zone, Med Balls, and the list goes on</p>
                    <p className='TrDes'>It may sound like a lot, but this world-class functional training equipment helps our trainers provide you with an array of High Intensity Interval Training (HIIT) workouts.</p>
                    <p className='TrDes'>Our FITNESS nGO locations offer PowerPlate, an all-encompassing fitness program that includes revolutionary vibration technology. Come check it out for yourself!</p>
                </div>
                <div>
                    <a className='PTrainBut'><Button href='/personaltraining' variant="success" className='TrBtn' size="huge">JOIN NOW</Button></a>
                </div>
            </Col>
        </Row>
      </Fragment>
    )
  }
}

export default Training